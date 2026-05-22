'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

interface BottomBarProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

// Extend window type for SpeechRecognition
declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
  }
}

export default function BottomBar({ onSend, disabled }: BottomBarProps) {
  const [input, setInput] = useState('');
  const [recording, setRecording] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setSpeechSupported(
      typeof window !== 'undefined' &&
        ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window),
    );
  }, []);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + 'px';
    }
  }, [input]);

  const handleSend = useCallback(() => {
    const msg = input.trim();
    if (!msg || disabled) return;
    onSend(msg);
    setInput('');
  }, [input, disabled, onSend]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleRecording = useCallback(() => {
    if (!speechSupported) return;

    if (recording) {
      recognitionRef.current?.stop();
      setRecording(false);
      return;
    }

    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SR();
    recognition.lang = 'en-IN';
    recognition.interimResults = true;
    recognition.continuous = false;

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((r) => r[0].transcript)
        .join('');
      setInput(transcript);
    };

    recognition.onend = () => setRecording(false);
    recognition.onerror = () => setRecording(false);

    recognitionRef.current = recognition;
    recognition.start();
    setRecording(true);
  }, [recording, speechSupported]);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-20 px-4 pb-6 pt-3"
      style={{
        background:
          'linear-gradient(to top, rgba(2,6,23,1) 60%, rgba(2,6,23,0) 100%)',
      }}
    >
      <div className="max-w-2xl mx-auto">
        <div className="glass rounded-2xl flex items-end gap-2 px-4 py-3">
          {/* Textarea */}
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
            placeholder="Type or speak your message..."
            disabled={disabled}
            className="flex-1 bg-transparent text-white text-sm md:text-base placeholder:text-slate-500 resize-none focus:outline-none leading-relaxed py-1 max-h-[120px]"
          />

          {/* Mic button */}
          {speechSupported && (
            <button
              onClick={toggleRecording}
              disabled={disabled}
              title={recording ? 'Stop recording' : 'Start voice input'}
              className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
                recording
                  ? 'bg-cyan-400 glow-cyan animate-pulse'
                  : 'bg-white/8 hover:bg-white/15'
              } disabled:opacity-40`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={recording ? 'text-slate-950' : 'text-slate-300'}>
                <rect x="9" y="2" width="6" height="12" rx="3" />
                <path d="M5 10a7 7 0 0 0 14 0" />
                <line x1="12" y1="19" x2="12" y2="22" />
                <line x1="8" y1="22" x2="16" y2="22" />
              </svg>
            </button>
          )}

          {/* Send button */}
          <button
            onClick={handleSend}
            disabled={!input.trim() || disabled}
            className="flex-shrink-0 w-9 h-9 rounded-full bg-cyan-400 flex items-center justify-center transition-all duration-200 hover:bg-cyan-300 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-950">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
        <p className="text-center text-xs text-slate-600 mt-2">Press Enter to send · Shift+Enter for new line</p>
      </div>
    </div>
  );
}
