import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import './globals.css';

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['vietnamese'],
  display: 'swap',
  variable: '--font-be-vietnam-pro',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = { title: 'VLXD PRO | Vật liệu xây dựng & công trình', description: 'Nền tảng vật liệu xây dựng chuyên nghiệp cho nhà thầu và công trình.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="vi"><body className={beVietnamPro.variable}>{children}</body></html>; }
