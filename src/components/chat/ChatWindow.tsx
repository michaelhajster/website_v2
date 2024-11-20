'use client';

import { useState, useRef, useEffect } from 'react';
import { ChatMessage as ChatMessageType } from '@/lib/chatbot/types';
import ChatMessage from './ChatMessage';
import { Send } from 'lucide-react';
import styles from './ChatWindow.module.css';

const WELCOME_MESSAGE: ChatMessageType = {
  id: 'welcome',
  role: 'assistant',
  content: 'Willkommen bei xahead! Ich bin Ihr KI-Assistent und unterstütze Sie gerne bei Fragen zu unseren KI-Beratungsleistungen und Lösungen. Wie kann ich Ihnen helfen?',
  timestamp: new Date(),
};

export default function ChatWindow() {
  const [messages, setMessages] = useState<ChatMessageType[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    if (input.length > 500) {
      setMessages((prev) => [...prev, {
        id: Date.now().toString(),
        role: 'assistant',
        content: 'Ihre Nachricht ist zu lang. Bitte beschränken Sie sich auf maximal 500 Zeichen.',
        timestamp: new Date(),
      }]);
      return;
    }

    const userMessage: ChatMessageType = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Ein Fehler ist aufgetreten');
      }

      const assistantMessage: ChatMessageType = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error: any) {
      console.error('Chat error:', error);
      const errorMessage: ChatMessageType = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: error.message || 'Entschuldigung, es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="flex flex-col h-[80vh] sm:h-[600px] w-full sm:w-[500px] max-w-2xl bg-background border border-[--border-light] rounded-2xl overflow-hidden shadow-xl">
      <div className="p-3 sm:p-4 border-b border-[--border-light]">
        <h2 className="text-base sm:text-lg font-semibold">xahead KI-Assistent</h2>
        <p className="text-xs sm:text-sm text-foreground/70">Wie kann ich Ihnen heute helfen?</p>
      </div>

      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-[#f0f0f0] dark:bg-[#2a2a2a] rounded-2xl px-3 sm:px-4 py-3 mr-4 h-[32px] overflow-hidden">
              <div className="flex items-center space-x-2">
                <div className={styles.dot} style={{ animationDelay: '0s' }} />
                <div className={styles.dot} style={{ animationDelay: '0.15s' }} />
                <div className={styles.dot} style={{ animationDelay: '0.3s' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-3 sm:p-4 border-t border-[--border-light]">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Schreiben Sie Ihre Nachricht..."
            className="flex-1 p-2 text-sm sm:text-base rounded-lg border border-[--border-light] bg-transparent focus:outline-none focus:ring-2 focus:ring-foreground/20"
            disabled={isLoading}
            maxLength={500}
            aria-label="Chat message input"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="p-2 rounded-lg bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Send message"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}
