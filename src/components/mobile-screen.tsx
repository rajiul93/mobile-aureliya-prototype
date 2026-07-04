import { cn } from '@/lib/utils';

type MobileScreenProps = {
  children: React.ReactNode;
  className?: string;
};

export function MobileScreen({ children, className }: MobileScreenProps) {
  return (
    <div className={cn('flex h-full flex-col overflow-hidden bg-black text-white', className)}>
      {children}
    </div>
  );
}
