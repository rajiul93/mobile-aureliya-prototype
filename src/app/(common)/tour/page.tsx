import Link from 'next/link';
import { ChevronRight, Play } from 'lucide-react';

import { MobileHeader } from '@/components/mobile-header';
import { MobileScreen } from '@/components/mobile-screen';
import { Button } from '@/components/ui/button';
import { TOUR_META, TOUR_STOPS } from '@/lib/tour-data';

export default function TourPage() {
  return (
    <MobileScreen>
      <MobileHeader title="Your Colosseum Route" backHref="/explore" />

      <div className="px-6 pb-3">
        <p className="text-sm text-white/55">
          {TOUR_META.totalStops} stops • {TOUR_META.estimatedDuration}
        </p>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto px-6 pb-4">
        {TOUR_STOPS.map((stop, index) => {
          const isActive = index === 0;

          return (
            <Link
              key={stop.id}
              href={`/tour/${stop.id}`}
              className={
                isActive
                  ? 'bg-gradient-gold flex items-center gap-4 rounded-xl p-4 text-black'
                  : 'border-gradient-primary flex items-center gap-4 rounded-xl p-4'
              }
            >
              <div
                className={
                  isActive
                    ? 'flex size-8 shrink-0 items-center justify-center rounded-full bg-black/15 text-sm font-bold'
                    : 'flex size-8 shrink-0 items-center justify-center rounded-full border border-primary/50 text-sm font-bold text-primary'
                }
              >
                {stop.id}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold">{stop.title}</p>
                <p
                  className={
                    isActive
                      ? 'truncate text-xs text-black/65'
                      : 'truncate text-xs text-white/50'
                  }
                >
                  {stop.subtitle}
                </p>
              </div>
              <ChevronRight
                className={
                  isActive ? 'size-5 shrink-0' : 'size-5 shrink-0 text-primary'
                }
              />
            </Link>
          );
        })}
      </div>

      <div className="px-6 pb-10">
        <Button
          asChild
          className="border-gradient-primary relative h-12! w-full border-0 bg-transparent font-semibold text-white shadow-none hover:bg-white/5"
        >
          <Link href="/tour/1">
            Start from Stop 1
            <Play className="absolute right-4 size-5 text-primary" />
          </Link>
        </Button>
      </div>
    </MobileScreen>
  );
}
