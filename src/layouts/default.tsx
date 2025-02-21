import LeftSideBar from "@/components/LeftSideBar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex h-screen bg-neutral-950">
      <div className="flex-1">
        <LeftSideBar />
      </div>
      <main className="flex-1">{children}</main>
      <div className="flex-1" />
    </div>
  );
}
