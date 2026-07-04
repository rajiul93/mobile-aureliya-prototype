import { cn } from '@/lib/utils';

type ProgressBarProps = {
  value: number;
  className?: string;
};

export function ProgressBar({ value, className }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div
      className={cn('h-1.5 w-full overflow-hidden rounded-full bg-white/10', className)}
    >
      <div
        className="bg-gradient-gold h-full rounded-full transition-all duration-500"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
