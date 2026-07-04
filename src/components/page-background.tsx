import Image, { type StaticImageData } from 'next/image';

type PageBackgroundProps = {
  src: string | StaticImageData;
  alt?: string;
  priority?: boolean;
  imageClassName?: string;
  children?: React.ReactNode;
};

export function PageBackground({
  src,
  alt = '',
  priority = false,
  imageClassName,
  children,
}: PageBackgroundProps) {
  return (
    <div className="relative h-[800px] w-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={100}
        sizes="(max-width: 448px) 100vw, 448px"
        className={imageClassName ?? 'object-cover object-center'}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-1 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.45)_42%,rgba(0,0,0,0.88)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-1 bg-[linear-gradient(to_right,rgba(0,0,0,0.55)_0%,transparent_55%)]"
      />
      {children ? (
        <div className="relative z-10 h-full w-full">{children}</div>
      ) : null}
    </div>
  );
}
