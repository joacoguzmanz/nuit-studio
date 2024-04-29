import React from "react";
import type { Metadata } from "next";
import { Onest } from 'next/font/google'
import LenisScroller from "@/components/LenisScroller";
import '@/sass/main.scss';

const onest = Onest({
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
  title: "Nuit Studio",
  description: "Welcome to Nuit Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={onest.className}>
        {children}

        <LenisScroller />
      </body>
    </html>
  );
}
