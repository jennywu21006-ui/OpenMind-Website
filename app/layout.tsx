import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/navigation';
// 删除Footer导入语句
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OpenMind AI Workforce Transformation Forum 2026',
  description:
    'A focused half-day forum in Shanghai for 50 senior business and HR leaders exploring AI-driven workforce transformation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        {/* 删除原来的 <Footer /> */}
      </body>
    </html>
  );
}