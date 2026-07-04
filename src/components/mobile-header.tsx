'use client';

import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

import { cn } from '@/lib/utils';

type MobileHeaderProps = {
  title?: string;
  backHref?: string;
  onBack?: () => void;
  rightAction?: React.ReactNode;
  className?: string;
};

export function MobileHeader({
  title,
  backHref,
  onBack,
  rightAction,
  className,
}: MobileHeaderProps) {
  const backButtonClassName =
    'flex size-8 items-center justify-center text-primary';

  return (
    <header
      className={cn('flex items-center gap-2 px-6 pt-8 pb-4', className)}
    >
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          className={backButtonClassName}
          aria-label="Go back"
        >
          <ChevronLeft className="size-6" />
        </button>
      ) : backHref ? (
        <Link
          href={backHref}
          className={backButtonClassName}
          aria-label="Go back"
        >
          <ChevronLeft className="size-6" />
        </Link>
      ) : (
        <div className="size-8" />
      )}
      {title ? (
        <h1 className="flex-1 text-xl font-bold tracking-tight">{title}</h1>
      ) : (
        <div className="flex-1" />
      )}
      {rightAction ?? <div className="size-8" />}
    </header>
  );
}
