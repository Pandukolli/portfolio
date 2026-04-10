import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leela Prasad Kolli | Senior Portfolio",
  description: "Senior-level premium portfolio showcasing the work of Leela Prasad Kolli.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-background text-foreground selection:bg-brand-primary/10 selection:text-foreground pb-20 md:pb-0 font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
