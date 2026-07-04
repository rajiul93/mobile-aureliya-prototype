'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { MobileHeader } from '@/components/mobile-header';
import { MobileScreen } from '@/components/mobile-screen';

const categories = [
  'All',
  'Tickets',
  'Audio Guide',
  'Subscription',
  'Offline',
  'Languages',
];

const faqs = [
  {
    id: 1,
    title: 'How do I unlock my guide?',
    category: 'Tickets',
    content: `
      <h3>Unlock your guide</h3>
      <p>Use the same email address you used while booking your tour.</p>

      <ul>
        <li>Verify your email.</li>
        <li>Your guide will unlock automatically.</li>
      </ul>
    `,
  },
  {
    id: 2,
    title: 'Can I use the guide offline?',
    category: 'Offline',
    content: `
      <p>
        Yes. Download the guide once while connected to the internet.
        After downloading, everything works offline.
      </p>
    `,
  },
  {
    id: 3,
    title: 'How long does my access remain active?',
    category: 'Subscription',
    content: `
      <p>
        Official bookings remain active until one week after your tour.
        Subscription plans expire according to the selected plan.
      </p>
    `,
  },
  {
    id: 4,
    title: 'Which languages are supported?',
    category: 'Languages',
    content: `
      <p>
        English, Spanish and French are currently available.
      </p>
    `,
  },
];

export default function FAQPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory = category === 'All' || faq.category === category;

      const matchesSearch = faq.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <MobileScreen>
      <MobileHeader title="Frequently Asked Questions" backHref="/" />

      <div className="space-y-4 px-6 pb-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />

          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search FAQs..."
            className="h-11 rounded-xl border-primary focus-visible:ring-primary bg-white/5 pl-11 text-white placeholder:text-white/40"
          />
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((item) => (
            <Badge
              key={item}
              onClick={() => setCategory(item)}
              className={`cursor-pointer rounded-full px-4 py-2 text-sm transition ${
                category === item
                  ? 'bg-primary text-black hover:bg-primary'
                  : 'border border-white/10 bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              {item}
            </Badge>
          ))}
        </div>

        {/* FAQ */}
        <div className="border-gradient-primary rounded-xl p-2">
          {filteredFaqs.length ? (
            <Accordion type="single" collapsible className="w-full">
              {filteredFaqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={String(faq.id)}
                  className="border-b border-white/10 last:border-none"
                >
                  <AccordionTrigger className="px-3 text-left text-sm font-semibold text-white hover:no-underline">
                    {faq.title}
                  </AccordionTrigger>

                  <AccordionContent className="px-3 pb-4">
                    <div
                      className="
                        prose
                        prose-sm
                        prose-invert
                        max-w-none

                        prose-headings:text-white
                        prose-p:text-white/70
                        prose-li:text-white/70
                        prose-strong:text-white
                        prose-a:text-primary
                      "
                      dangerouslySetInnerHTML={{
                        __html: faq.content,
                      }}
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Search className="mb-3 h-8 w-8 text-white/30" />

              <h3 className="text-sm font-semibold text-white">
                No FAQs found
              </h3>

              <p className="mt-1 text-xs text-white/50">
                Try another keyword or select a different category.
              </p>
            </div>
          )}
        </div>
      </div>
    </MobileScreen>
  );
}
