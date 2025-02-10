import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";

export const metadata: Metadata = {
  title: "Portfolio | Sanchita Devi",
  description: "Portfolio of Sanchita Devi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="min-h-screen w-[90%] mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
