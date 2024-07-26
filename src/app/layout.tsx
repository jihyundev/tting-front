import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavSidebar } from "@/components/nav-sidebar";
import { UserMenu } from "@/components/user-menu";
import { AuthSession } from "@/components/auth-session";
import { ReactQueryClientProvider } from "@/components/react-query-client-provider";
import { NavMobile } from "@/components/nav-mobile";

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
      <body className="flex bg-gray-200 min-h-screen flex-col">
        <AuthSession>
          <ReactQueryClientProvider>
            <main className="flex min-h-screen flex-col">
              <NavSidebar />
              <div className="flex flex-col sm:gap-4 sm:pl-20">
                <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                  <NavMobile />
                </header>
                <UserMenu />
                <div className="h-screen">
                  {children}
                </div>
              </div>
            </main>
          </ReactQueryClientProvider>
        </AuthSession>
      </body>
    </html>
  );
}
