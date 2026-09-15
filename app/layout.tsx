import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'VLXD PRO | Vật liệu xây dựng & công trình', description: 'Nền tảng vật liệu xây dựng chuyên nghiệp cho nhà thầu và công trình.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="vi"><body>{children}</body></html>; }
