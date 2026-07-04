export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto h-[800px] max-w-md overflow-hidden rounded-lg border border-primary/25 shadow-[inset_0_0_0_1px_rgba(225,165,102,0.08)]">
      {children}
    </div>
  );
}
