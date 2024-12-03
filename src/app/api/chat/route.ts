import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/chat/completions';
import { systemPrompt } from '@/lib/chatbot/prompt';
import { ChatMessage } from '@/lib/chatbot/types';
import { errorMonitor } from '@/lib/monitoring/errors';

// Rate limiting
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10;
const MESSAGE_MAX_LENGTH = 500;

// Define OpenAI error type
interface OpenAIError extends Error {
  status?: number;
  code?: string;
}

const requestCounts = new Map<string, { count: number; timestamp: number }>();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const userRequests = requestCounts.get(ip);

  if (!userRequests) {
    requestCounts.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (now - userRequests.timestamp > RATE_LIMIT_WINDOW) {
    requestCounts.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (userRequests.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  userRequests.count++;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    // Get client IP
    const ip = req.headers.get('x-forwarded-for') || 'unknown';
    
    // Check rate limit
    if (isRateLimited(ip)) {
      errorMonitor.logError(
        'Rate limit exceeded',
        'medium',
        '/api/chat',
        { additionalData: { limit: MAX_REQUESTS_PER_WINDOW, interval: '1m' } }
      );
      return NextResponse.json(
        { error: 'Zu viele Anfragen. Bitte warten Sie eine Minute.' },
        { status: 429 }
      );
    }

    const { messages } = await req.json();

    // Validate request
    if (!messages || !Array.isArray(messages)) {
      errorMonitor.logError(
        'Invalid request format',
        'low',
        '/api/chat',
        { userInput: JSON.stringify(messages) }
      );
      return NextResponse.json(
        { error: 'Ungültige Anfrage: Nachrichten fehlen oder sind ungültig.' },
        { status: 400 }
      );
    }

    // Check message length
    const lastMessage = messages[messages.length - 1];
    if (lastMessage.content.length > MESSAGE_MAX_LENGTH) {
      errorMonitor.logError(
        'Message length validation failed',
        'low',
        '/api/chat',
        { userInput: lastMessage.content }
      );
      return NextResponse.json(
        { error: `Nachricht zu lang. Maximal ${MESSAGE_MAX_LENGTH} Zeichen erlaubt.` },
        { status: 400 }
      );
    }

    const apiMessages: ChatCompletionMessageParam[] = [
      { role: 'system', content: systemPrompt },
      ...messages.map((msg: ChatMessage) => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content,
      })),
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: apiMessages,
      temperature: 0.7,
      max_tokens: 500,
    });

    const responseMessage = completion.choices[0]?.message?.content;

    if (!responseMessage) {
      throw new Error('No response from OpenAI');
    }

    return NextResponse.json({ message: responseMessage });
  } catch (error: unknown) {
    const openAIError = error instanceof Error ? error : new Error('Unknown error occurred');
    
    errorMonitor.logError(
      'Chat API error',
      'high',
      '/api/chat',
      {
        error: openAIError,
        additionalData: {
          status: (error as OpenAIError).status,
          code: (error as OpenAIError).code,
          type: openAIError.name
        }
      }
    );

    console.error('Chat API Error:', error);
    return NextResponse.json(
      { 
        error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' 
      },
      { status: 500 }
    );
  }
}
