import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavSidebar } from "@/components/nav-sidebar";
import { UserAvatar } from "@/components/user-avatar";
import { AuthSession } from "@/components/auth-session";
import { ReactQueryClientProvider } from "@/components/react-query-client-provider";

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
      <AuthSession>
        <ReactQueryClientProvider>
          <body className={`flex`}>
            <main className="flex h-screen w-screen flex-col bg-gray-200">
              <NavSidebar />
              <UserAvatar />
              <div className="w-screen h-screen flex justify-center items-center">
                {children}
              </div>
            </main>
          </body>
        </ReactQueryClientProvider>
      </AuthSession>
    </html>
  );
}
