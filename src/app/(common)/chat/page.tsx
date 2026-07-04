'use client';

import { useEffect, useRef, useState } from 'react';
import { Loader2, Send } from 'lucide-react';

import { MobileHeader } from '@/components/mobile-header';
import { MobileScreen } from '@/components/mobile-screen';
import { Button } from '@/components/ui/button';
import type { ChatMessage } from '@/lib/aurelia-knowledge';
import { cn } from '@/lib/utils';

const INITIAL_MESSAGE: ChatMessage = {
  role: 'assistant',
  content:
    'Hello, I am Aurelia. Ask me anything about the Colosseum, ancient Rome, or your offline tour.',
};

export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages, isLoading]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: trimmed };
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInput('');
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data = (await response.json()) as {
        message?: string;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? 'Something went wrong.');
      }

      setMessages((current) => [
        ...current,
        { role: 'assistant', content: data.message ?? 'No response received.' },
      ]);
    } catch (submitError) {
      const message =
        submitError instanceof Error
          ? submitError.message
          : 'Failed to send message.';
      setError(message);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      void handleSubmit(event);
    }
  }

  return (
    <MobileScreen>
      <MobileHeader title="Ask Aurelia" backHref="/explore" />

      <div
        ref={scrollRef}
        className="flex-1 space-y-4 overflow-y-auto px-6 py-2"
      >
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={cn(
              'flex',
              message.role === 'user' ? 'justify-end' : 'justify-start',
            )}
          >
            <div
              className={cn(
                'max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed',
                message.role === 'user'
                  ? 'bg-gradient-gold font-medium text-black'
                  : 'border-gradient-primary text-white',
              )}
            >
              {message.content}
            </div>
          </div>
        ))}

        {isLoading ? (
          <div className="flex justify-start">
            <div className="border-gradient-primary flex items-center gap-2 rounded-2xl px-4 py-3 text-sm text-white/70">
              <Loader2 className="size-4 animate-spin text-primary" />
              Aurelia is thinking...
            </div>
          </div>
        ) : null}

        {error ? (
          <p className="text-center text-xs text-red-400">{error}</p>
        ) : null}
      </div>

      <form
        onSubmit={handleSubmit}
        className="border-t border-white/10 px-6 py-4"
      >
        <div className="border-gradient-primary flex items-end gap-2 rounded-2xl p-2">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about the Colosseum..."
            rows={1}
            disabled={isLoading}
            className="max-h-28 min-h-10 flex-1 resize-none bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-white/40"
          />
          <Button
            type="submit"
            size="icon"
            disabled={isLoading || !input.trim()}
            className="bg-gradient-gold size-10 shrink-0 rounded-xl text-black hover:opacity-90 disabled:opacity-40"
            aria-label="Send message"
          >
            <Send className="size-4" />
          </Button>
        </div>
      </form>
    </MobileScreen>
  );
}
