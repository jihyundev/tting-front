import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavSidebar } from "@/components/nav-sidebar";

const pretendard = localFont({
  src: "./PretendardVariable.woff2",
  display: "swap",
})

export const metadata: Metadata = {
  title: "TTING",
  description: "Idea generator for developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pretendard.className}>
      <body className={`flex`}>
        <main className="flex min-h-screen w-full flex-col bg-gray-200 w-screen">
          <NavSidebar />
          <div className="px-24">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
