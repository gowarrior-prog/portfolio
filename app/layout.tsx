'use client';

import { useStore } from '../src/store/useStore';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDarkMode = useStore((state) => state.isDarkMode);

  return (
    <html lang="en" className={isDarkMode ? 'dark' : ''}>
      <body className={`${inter.className} bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300 antialiased`}>
        {children}
      </body>
    </html>
  );
}