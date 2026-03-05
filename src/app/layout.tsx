import type { Metadata, Viewport } from 'next';
import '../globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { BASE_URL, SITE_NAME, SITE_DESCRIPTION } from '../lib/constants';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#ff6b35',
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${SITE_NAME} - Kultura, Edukacja, House Music`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'house music',
    'kultura klubowa',
    'muzyka elektroniczna',
    'artyści',
    'warsztaty',
    'edukacja kulturalna',
    'wydarzenia kulturalne',
    'Warszawa',
    'Wrocław',
    'Poznań',
    'Kraków',
    'Toruń',
  ],
  authors: [{ name: 'Tu Jest House' }],
  creator: 'Tu Jest House',
  publisher: 'Tu Jest House',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: BASE_URL,
    siteName: SITE_NAME,
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
