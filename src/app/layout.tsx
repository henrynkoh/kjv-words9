import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KJV Words | Rightly Dividing the Word of Truth",
  description:
    "KJV Bible verses by topic for discussing and spreading words of truth — by audience, situation, and level of Bible knowledge. Study to shew thyself approved unto God.",
  keywords: ["KJV", "Bible", "verses", "topics", "rightly dividing", "2 Timothy 2:15"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <header className="border-b border-foreground/10 bg-background">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3">
            <BookOpen className="h-7 w-7 text-foreground" aria-hidden />
            <Link href="/" className="font-semibold text-lg text-foreground hover:underline">
              KJV Words
            </Link>
          </div>
        </header>
        <main className="flex-1 w-full">{children}</main>
        <footer className="border-t border-foreground/10 py-6 text-center text-sm text-foreground/70">
          <p>&copy; {new Date().getFullYear()} KJV Words. Built for spreading words of truth.</p>
          <p className="mt-1">KJV Bible &middot; 2 Timothy 2:15</p>
        </footer>
      </body>
    </html>
  );
}
