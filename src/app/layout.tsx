import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Publink China – Smart Reading & Audio Learning Platform",
  description:
    "An education technology platform that helps students improve reading, listening, and speaking skills through digital books, audio resources, AI follow-reading practice, and learning reports.",
  keywords: ["reading platform", "audio learning", "edtech", "China education", "language learning"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
