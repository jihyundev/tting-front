import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavSidebar } from "@/components/nav-sidebar";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={`${inter.className} flex`}>
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
