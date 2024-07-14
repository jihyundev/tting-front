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
        <NavSidebar />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
        </main>
      </body>
    </html>
  );
}
