import Sidebar from "@/components/Shared/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Dashboard",
  description: "Portfolio Dashboard ",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <div className="flex justify-between">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="w-full bg-slate-100">{children}</div>
      </div>
    </div>
  );
}
