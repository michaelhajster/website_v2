export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatSession {
  id: string;
  messages: ChatMessage[];
  lastActive: Date;
}

export interface ChatResponse {
  message: string;
  error?: string;
}
