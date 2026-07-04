import Image from 'next/image';
import Link from 'next/link';

import { PageBackground } from '@/components/page-background';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowRight, Globe } from 'lucide-react';

export default function Home() {
  return (
    <PageBackground
      src="/images/home-bg.png"
      priority
      imageClassName="object-cover object-[70%_center]"
    >
      <div className="flex h-full flex-col">
        <header className="flex flex-col items-center px-6 pt-10">
          <Image
            src="/images/logo.png"
            alt="Aurelia — Colosseum Offline Guide"
            width={200}
            height={200}
            className="h-auto w-[200px]"
            priority
          />
          <div className="mt-5 flex w-full max-w-[220px] items-center gap-3">
            <div className="h-px flex-1 bg-linear-to-r from-transparent to-primary/40" />
            <div className="size-1.5 rotate-45 bg-primary/80" />
            <div className="h-px flex-1 bg-linear-to-l from-transparent to-primary/40" />
          </div>
        </header>

        <section className="flex flex-1 flex-col justify-center px-6 pt-6">
          <div className="space-y-1">
            <h1 className="text-[1.75rem] leading-tight font-bold tracking-tight text-white">
              Your journey
            </h1>
            <h1 className="text-[1.75rem] leading-tight font-bold tracking-tight text-white">
              through history
            </h1>
            <p className="text-[1.35rem] leading-tight font-bold">
              <span className="text-gradient-gold">starts here.</span>
            </p>
          </div>
          <p className="mt-5 max-w-[300px] text-sm leading-relaxed font-normal text-white/65">
            Explore the Colosseum with Aurelia, your personal audio guide even
            offline.
          </p>
        </section>

        <footer className="space-y-4 px-6 pb-10">
          <Select defaultValue="english">
            <SelectTrigger className="border-gradient-primary h-12! w-full border-0 font-semibold text-white shadow-none focus-visible:border-transparent focus-visible:ring-0">
              <div className="flex items-center gap-2.5">
                <Globe className="size-[18px] text-primary" />
                <SelectValue placeholder="English" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="spanish">Spanish</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <p className="text-center text-[11px] tracking-wide text-white/35">
            — More languages coming soon —
          </p>

          <Button
            asChild
            className="bg-gradient-gold relative h-12! w-full border-0 text-base font-bold text-black shadow-none hover:opacity-90"
          >
            <Link href="/prepare">
              Get Started
              <ArrowRight className="absolute right-4 size-5" />
            </Link>
          </Button>
        </footer>
      </div>
    </PageBackground>
  );
}
