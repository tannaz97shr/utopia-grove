import Footer from "@/components/Footer";
import MainHeader from "@/components/MainHeader";
import Notification from "@/components/UI/Notification";
import NextAuthSessionProvider from "@/providers/SessionProvider";
import { NotificationContextProvider } from "@/store/notification-context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dubai Events",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthSessionProvider>
          <NotificationContextProvider>
            <div className="min-h-[100vh] relative pb-20">
              <MainHeader />
              <Notification />
              <div className="flex flex-col mx-4 lg:mx-auto xl:w-[1200px] h-full">
                {children}
              </div>
              <Footer />
            </div>
          </NotificationContextProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
