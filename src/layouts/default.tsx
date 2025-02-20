export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex h-screen">
      <div className="flex-1 bg-black" />
      <main className="flex-1">{children}</main>
      <div className="flex-1 bg-black" />
    </div>
  );
}
