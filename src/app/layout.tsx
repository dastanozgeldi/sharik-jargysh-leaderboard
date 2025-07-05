import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sharik Jargysh Leaderboard",
  description: "A list of best players of Sharik Jargysh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "text-foreground bg-background p-6 max-w-2xl mx-auto",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
