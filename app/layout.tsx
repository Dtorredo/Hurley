import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BackToTop from '@/components/BackToTop';
import { ToastProvider } from '@/components/ToastContext';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'optional',
  weight: ['400', '500', '600', '700'],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'optional',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Hurleys International | Prime Real Estate & Advisory Desk',
  description: 'Connecting Global Capital to Strategic Real Estate in Kenya. Curated land parcels, prime developments, and clean title conveyance in Nairobi, London, and Dubai.',
  openGraph: {
    title: 'Hurleys International | Prime Real Estate & Advisory Desk',
    description: 'Connecting Global Capital to Strategic Real Estate in Kenya. Curated land parcels, prime developments, and clean title conveyance in Nairobi, London, and Dubai.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Hurleys International',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Hurleys International — Prime Real Estate Kenya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hurleys International | Prime Real Estate & Advisory Desk',
    description: 'Connecting Global Capital to Strategic Real Estate in Kenya.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${playfair.variable} ${jakarta.variable} bg-[#101415] text-[#e0e3e5] antialiased`}>
        <ToastProvider>
          <Navbar />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <BackToTop />
        </ToastProvider>
      </body>
    </html>
  );
}
