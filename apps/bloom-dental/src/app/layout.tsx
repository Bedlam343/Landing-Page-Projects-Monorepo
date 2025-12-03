import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Bloom Dental Care – Family Dentist in San Jose',
  description:
    'Top-rated family dentistry in San Jose. General, cosmetic, and emergency dental care. Call (408) 555-0192 to book your appointment today.',
  metadataBase: new URL('https://www.bloomdentalcare-demo.com'), // TODO: Replace with real domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Bloom Dental Care – Gentle Family Dentistry',
    description:
      'Accepting new patients in San Jose. Modern care, warm environment.',
    images: ['/og-image.jpg'], // TODO: Add real OG image to public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
