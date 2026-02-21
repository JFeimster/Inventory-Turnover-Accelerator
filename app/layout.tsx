// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import siteData from '@/data/site.json';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: `${siteData.brand_name} | ${siteData.tagline}`,
  description: siteData.one_line_positioning,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
