import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactLenis } from './utils/lenis';

import { Navbar, Footer } from './components';

const interFont = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Petrovanta - Oil Well Technology',
  description: 'Generated by create next app',
  appleWebApp: {
    title: 'Petrovanta',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={`${interFont.className} antialiased `}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}
