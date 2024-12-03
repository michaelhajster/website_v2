'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import ChatWindow from './ChatWindow';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 flex flex-col items-end">
      <div
        className={`absolute bottom-16 right-0 sm:bottom-20 transition-all duration-300 ${
          isOpen && !isMinimized ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="relative w-[calc(100vw-2rem)] sm:w-auto">
          <div className="absolute -top-2 -right-2 flex gap-2 z-10">
            <button
              onClick={() => setIsMinimized(true)}
              className="p-2 rounded-full bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors shadow-lg"
              aria-label="Minimize chat"
            >
              <MessageCircle size={20} />
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                setIsMinimized(false);
              }}
              className="p-2 rounded-full bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors shadow-lg"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>
          <ChatWindow />
        </div>
      </div>
      <button
        onClick={() => {
          setIsOpen(true);
          setIsMinimized(false);
        }}
        className={`p-4 rounded-full bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors shadow-lg ${
          isOpen && !isMinimized ? 'hidden' : ''
        }`}
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
}
