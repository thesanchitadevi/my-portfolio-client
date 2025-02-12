import Sidebar from "@/components/Shared/Sidebar";
import { authOptions } from "@/utils/authOptions";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Portfolio Dashboard",
  description: "Portfolio Dashboard ",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <div className="min-h-screen">
      <div className="flex justify-between">
        <div className="w-[20%]">
          <Sidebar
            session={session ? { ...session, user: session.user ?? {} } : null}
          />
        </div>
        <div className="w-full bg-slate-100">{children}</div>
      </div>
    </div>
  );
}
