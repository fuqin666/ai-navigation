import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Tools Hub - Discover Best AI Tools',
  description: 'Discover the best AI tools for writing, image generation, video editing, chatbots, productivity and more.',
  openGraph: {
    title: 'AI Tools Hub',
    description: 'Discover the best AI tools for writing, image generation, video editing, chatbots, productivity and more.',
    url: 'https://aitoolshub.com',
    siteName: 'AI Tools Hub',
    images: [
      {
        url: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=AI%20tools%20directory%20modern%20tech%20website&image_size=landscape_16_9',
        width: 1200,
        height: 630,
        alt: 'AI Tools Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tools Hub',
    description: 'Discover the best AI tools for writing, image generation, video editing, chatbots, productivity and more.',
    images: ['https://neeko-copilot.bytedance.net/api/text_to_image?prompt=AI%20tools%20directory%20modern%20tech%20website&image_size=landscape_16_9'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
