import Link from 'next/link';
import {
  ChevronRight,
  Download,
  FileText,
  Globe,
  HelpCircle,
  Info,
  Shield,
  Trash2,
  User,
} from 'lucide-react';

import { MobileHeader } from '@/components/mobile-header';
import { MobileScreen } from '@/components/mobile-screen';
import { TOUR_META } from '@/lib/tour-data';

const SETTINGS_SECTIONS = [
  {
    title: 'Profile',
    items: [{ icon: User, label: 'Edit Profile', href: '/settings' }],
  },
  {
    title: 'Language',
    items: [{ icon: Globe, label: 'English', href: '/settings' }],
  },
  {
    title: 'Support',
    items: [
      { icon: HelpCircle, label: 'Help Center', href: '/settings' },
      { icon: FileText, label: 'Privacy Policy', href: '/settings' },
    ],
  },
  {
    title: 'About',
    items: [{ icon: Info, label: 'About Aurelia', href: '/settings' }],
  },
];

export default function SettingsPage() {
  return (
    <MobileScreen>
      <MobileHeader title="Settings" backHref="/explore" />

      <div className="flex-1 space-y-6 overflow-y-auto px-6 pb-10">
        <section>
          <p className="mb-3 text-xs font-semibold tracking-wide text-primary uppercase">
            Guide Package
          </p>
          <div className="border-gradient-primary rounded-xl p-4">
            <div className="flex gap-4">
              <div className="size-16 shrink-0 overflow-hidden rounded-lg bg-white/10">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: 'url(/images/home-bg.png)' }}
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-white">
                  Colosseum Offline Guide
                </p>
                <div className="mt-1 flex items-center gap-1.5 text-xs text-primary">
                  <Shield className="size-3.5" />
                  <span>Downloaded • {TOUR_META.packageSize}</span>
                </div>
                <p className="mt-1 text-xs text-white/50">English</p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-4 text-sm">
              <button
                type="button"
                className="flex items-center gap-1.5 font-semibold text-primary"
              >
                <Download className="size-4" />
                Re-download
              </button>
              <button
                type="button"
                className="flex items-center gap-1.5 font-semibold text-red-400"
              >
                <Trash2 className="size-4" />
                Delete Package
              </button>
            </div>
          </div>
        </section>

        {SETTINGS_SECTIONS.map((section) => (
          <section key={section.title}>
            <p className="mb-3 text-xs font-semibold tracking-wide text-primary uppercase">
              {section.title}
            </p>
            <div className="border-gradient-primary divide-y divide-white/10 overflow-hidden rounded-xl">
              {section.items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3.5 hover:bg-white/5"
                >
                  <item.icon className="size-4 text-primary" />
                  <span className="flex-1 text-sm font-medium">{item.label}</span>
                  <ChevronRight className="size-4 text-primary" />
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </MobileScreen>
  );
}
