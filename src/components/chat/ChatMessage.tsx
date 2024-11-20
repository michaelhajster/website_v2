'use client';

import { ChatMessage as ChatMessageType } from '@/lib/chatbot/types';
import ReactMarkdown from 'react-markdown';

interface ChatMessageProps {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
          isUser
            ? 'bg-foreground text-background ml-4'
            : 'bg-[#f0f0f0] dark:bg-[#2a2a2a] mr-4'
        }`}
      >
        <div className={`text-sm prose max-w-none prose-sm ${
          isUser 
            ? 'prose-invert marker:text-background prose-p:text-background prose-headings:text-background prose-strong:text-background'
            : 'dark:prose-invert'
        }`}>
          <ReactMarkdown>{message.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
