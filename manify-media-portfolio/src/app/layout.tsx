import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manify Media | Websites That Sell. AI Videos That Captivate.",
  description: "We build premium digital experiences and cutting-edge AI video campaigns designed to scale your brand and multiply your revenue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-neutral-950 text-neutral-50 overflow-x-hidden selection:bg-neutral-800 selection:text-neutral-50">{children}</body>
    </html>
  );
}
