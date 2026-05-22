import React from 'react';

export type MessageRole = 'user' | 'ai';

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
}

interface ChatBubbleProps {
  message: Message;
}

export function TypingIndicator() {
  return (
    <div className="flex items-start gap-3 mb-4">
      {/* AI avatar dot */}
      <div className="mt-1 w-7 h-7 rounded-full bg-cyan-400/15 border border-cyan-400/30 flex items-center justify-center flex-shrink-0">
        <span className="text-xs font-bold text-cyan-400">L</span>
      </div>
      <div className="glass rounded-2xl rounded-tl-sm px-5 py-4 flex items-center gap-1.5">
        <span className="typing-dot w-1.5 h-1.5 rounded-full bg-slate-400" />
        <span className="typing-dot w-1.5 h-1.5 rounded-full bg-slate-400" />
        <span className="typing-dot w-1.5 h-1.5 rounded-full bg-slate-400" />
      </div>
    </div>
  );
}

export default function ChatBubble({ message }: ChatBubbleProps) {
  const isUser = message.role === 'user';

  if (isUser) {
    return (
      <div className="flex justify-end mb-4 animate-slide-up">
        <div
          className="max-w-[80%] md:max-w-[60%] rounded-2xl rounded-tr-sm px-5 py-3.5"
          style={{
            background: 'rgba(34,211,238,0.12)',
            border: '1px solid rgba(34,211,238,0.2)',
          }}
        >
          <p className="text-sm md:text-base text-white leading-relaxed whitespace-pre-wrap">
            {message.content}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3 mb-4 animate-slide-up">
      {/* AI avatar */}
      <div className="mt-1 w-7 h-7 rounded-full bg-cyan-400/15 border border-cyan-400/30 flex items-center justify-center flex-shrink-0">
        <span className="text-xs font-bold text-cyan-400">L</span>
      </div>
      <div className="max-w-[80%] md:max-w-[65%] glass rounded-2xl rounded-tl-sm px-5 py-3.5">
        <p className="text-sm md:text-base text-slate-100 leading-relaxed whitespace-pre-wrap">
          {message.content}
        </p>
      </div>
    </div>
  );
}
