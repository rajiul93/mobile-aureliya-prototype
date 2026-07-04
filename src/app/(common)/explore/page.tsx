import Link from "next/link";
import {
  ChevronRight,
  MessageCircle,
  Play,
  Settings,
  Shield,
} from "lucide-react";

import { PageBackground } from "@/components/page-background";
import { ProgressBar } from "@/components/progress-bar";
import { Button } from "@/components/ui/button";
import { FEATURES } from "@/lib/guide-features";
import { TOUR_META } from "@/lib/tour-data";

export default function ExplorePage() {
  return (
    <PageBackground
      src="/images/home-bg.png"
      imageClassName="object-cover object-[70%_center]"
    >
      <div className="flex h-full flex-col">
        <header className="flex items-center justify-between px-6 pt-8">
          <div>
            <p className="text-sm text-white/60">Good morning,</p>
            <h1 className="text-2xl font-bold text-white">Nasim</h1>
          </div>
          <Link
            href="/settings"
            className="flex size-10 items-center justify-center rounded-full border border-primary/30 text-primary"
            aria-label="Settings"
          >
            <Settings className="size-5" />
          </Link>
        </header>

        <div className="flex flex-1 flex-col justify-end px-6 pb-10">
          <div className="border-gradient-primary rounded-xl p-4">
            <p className="mb-3 text-sm font-semibold text-primary">
              What&apos;s included
            </p>

            <div className="space-y-2.5">
              {FEATURES?.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <feature.icon className="mt-0.5 size-4 shrink-0 text-primary" />

                  <div>
                    <p className="text-sm font-semibold text-white">
                      {feature.title}
                    </p>

                    <p className="text-xs text-white/55">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="border-gradient-primary my-6 rounded-2xl p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-lg font-bold text-white">
                  Colosseum Offline Guide
                </p>
                <div className="mt-2 flex items-center gap-2 text-sm text-primary">
                  <Shield className="size-4" />
                  <span>Ready offline</span>
                </div>
              </div>
              <div className="flex size-14 items-center justify-center rounded-full border border-primary/40 bg-black/40 text-2xl">
                ⚔️
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <div className="flex items-center justify-between text-xs text-white/55">
                <span>Tour progress</span>
                <span>0 of {TOUR_META.totalStops} stops completed</span>
              </div>
              <ProgressBar value={0} />
            </div>
          </div>

          <div className="space-y-3">
            <Button
              asChild
              className="bg-gradient-gold relative h-12! w-full border-0 text-base font-bold text-black shadow-none hover:opacity-90"
            >
              <Link href="/tour">
                Start Tour
                <Play className="absolute right-4 size-5 fill-black" />
              </Link>
            </Button>

            <Button
              asChild
              className="border-gradient-primary relative h-12! w-full border-0 bg-transparent font-semibold text-white shadow-none hover:bg-white/5"
            >
              <Link href="/chat">
                Ask Aurelia
                <MessageCircle className="absolute right-4 size-5 text-primary" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageBackground>
  );
}
