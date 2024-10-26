import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans } from "next/font/google";

// Load Noto Sans font with the desired weights and settings
const noto_sans = Noto_Sans({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Versatile Badge Component - Next.js & TypeScript",
  description: "A reusable badge component built with Next.js and TypeScript, part of a design system to ensure consistency across apps. Includes customizable variants and sizes, with a focus on design fidelity and cross-browser compatibility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${noto_sans.className} antialiased bg-gradient bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
