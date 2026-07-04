'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowRight,
  Bookmark,
  Pause,
  Play,
  RotateCcw,
  RotateCw,
  X,
} from 'lucide-react';

import { PageBackground } from '@/components/page-background';
import { ProgressBar } from '@/components/progress-bar';
import { Button } from '@/components/ui/button';
import { getTourStop, TOUR_META } from '@/lib/tour-data';

export default function StopDetailPage() {
  const params = useParams<{ stopId: string }>();
  const stopId = Number(params.stopId);
  const stop = getTourStop(stopId);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(18);
  const [isComplete, setIsComplete] = useState(false);

  if (!stop) {
    return (
      <div className="flex h-full items-center justify-center bg-black text-white">
        <p>Stop not found.</p>
      </div>
    );
  }

  const previousId = stopId > 1 ? stopId - 1 : null;
  const nextId = stopId < TOUR_META.totalStops ? stopId + 1 : null;

  return (
    <PageBackground
      src="/images/home-bg.png"
      imageClassName="object-cover object-center"
    >
      <div className="flex h-full flex-col">
        <header className="flex items-center justify-between px-6 pt-8">
          <Link
            href="/tour"
            className="flex size-8 items-center justify-center text-white"
            aria-label="Close"
          >
            <X className="size-5" />
          </Link>
          <p className="text-sm text-white/70">
            Stop {stop.id} of {TOUR_META.totalStops}
          </p>
          <button
            type="button"
            className="flex size-8 items-center justify-center text-primary"
            aria-label="Bookmark"
          >
            <Bookmark className="size-5" />
          </button>
        </header>

        <div className="flex flex-1 flex-col overflow-y-auto px-6 pb-4">
          <h1 className="mt-4 text-3xl font-bold leading-tight text-white">
            {stop.title}
          </h1>
          <p className="mt-2 text-sm text-white/60">{stop.subtitle}</p>

          <div className="mt-8 space-y-4">
            <ProgressBar value={progress} />
            <div className="flex items-center justify-between text-xs text-white/50">
              <span>0:42</span>
              <span>{stop.duration}</span>
            </div>

            <div className="flex items-center justify-center gap-8 py-4">
              <button
                type="button"
                className="flex flex-col items-center gap-1 text-white/70"
                onClick={() => setProgress((value) => Math.max(0, value - 10))}
              >
                <RotateCcw className="size-5" />
                <span className="text-[10px]">15s</span>
              </button>

              <button
                type="button"
                className="bg-gradient-gold flex size-16 items-center justify-center rounded-full text-black"
                onClick={() => setIsPlaying((value) => !value)}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause className="size-7 fill-black" />
                ) : (
                  <Play className="size-7 fill-black" />
                )}
              </button>

              <button
                type="button"
                className="flex flex-col items-center gap-1 text-white/70"
                onClick={() => setProgress((value) => Math.min(100, value + 10))}
              >
                <RotateCw className="size-5" />
                <span className="text-[10px]">15s</span>
              </button>
            </div>
          </div>

          <div className="mt-6">
            <p className="mb-3 text-sm font-semibold text-primary">Transcript</p>
            <p className="text-sm leading-relaxed text-white/75">
              {stop.transcript}
            </p>
          </div>
        </div>

        <footer className="flex items-center justify-between gap-3 border-t border-white/10 px-6 py-5">
          {previousId ? (
            <Link href={`/tour/${previousId}`} className="text-sm text-white/70">
              Previous
            </Link>
          ) : (
            <span className="text-sm text-white/30">Previous</span>
          )}

          <label className="flex items-center gap-2 text-sm text-white/80">
            <input
              type="checkbox"
              checked={isComplete}
              onChange={(event) => setIsComplete(event.target.checked)}
              className="accent-primary size-4 rounded border-white/30"
            />
            Mark Complete
          </label>

          {nextId ? (
            <Button
              asChild
              className="bg-gradient-gold relative h-10 min-w-[88px] border-0 px-4 font-bold text-black"
            >
              <Link href={`/tour/${nextId}`}>
                Next
                <ArrowRight className="absolute right-3 size-4" />
              </Link>
            </Button>
          ) : (
            <Button
              asChild
              className="bg-gradient-gold relative h-10 min-w-[88px] border-0 px-4 font-bold text-black"
            >
              <Link href="/explore">
                Done
                <ArrowRight className="absolute right-3 size-4" />
              </Link>
            </Button>
          )}
        </footer>
      </div>
    </PageBackground>
  );
}
