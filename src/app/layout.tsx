import type { Metadata, Viewport } from 'next';
import '../globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import StructuredData from '../components/layout/StructuredData';
import ThemeProvider from '../components/ThemeProvider';
import { BASE_URL, SITE_NAME, SITE_DESCRIPTION } from '../lib/constants';
import { getSiteSettings } from '../lib/tina';

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: `${settings.siteName} - Kultura, Edukacja, House Music`,
      template: `%s | ${settings.siteName}`,
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
      'DJ',
      'producent muzyczny',
      'scena klubowa',
      'muzyka house',
      'kultura taneczna',
      'kultura klubowa w Polsce',
      'kultura klubowa',
      'wydarzenia muzyczne',
      'edukacja muzyczna',
      'rozwój sceny klubowej',
      'kultura i muzyka',
      'kultura i edukacja',
      'kultura i house music',
      'kultura i wydarzenia',
      'kultura i warsztaty',
      'kultura i artyści',
      'kultura i muzyka elektroniczna',
      'kultura i klubowa',
      'kultura i taneczna',
      'kultura i rozwój sceny',
      'kultura i wydarzenia muzyczne',
      'kultura i edukacja muzyczna',
      'kultura i rozwój sceny klubowej',
      'polskie wydarzenia kulturalne',
      'polskie wydarzenia muzyczne',
      'polskie warsztaty muzyczne',
      'polscy artyści muzyczni',
      'polska scena klubowa',
      'polska kultura klubowa',
      'polska muzyka elektroniczna',
    ],
    authors: [{ name: settings.siteName }],
    creator: settings.siteName,
    publisher: settings.siteName,
    category: 'Music & Culture',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    manifest: '/manifest.json',
    icons: {
      icon: settings.favicon,
      shortcut: settings.favicon,
      apple: settings.favicon,
    },
    openGraph: {
      title: `${settings.siteName} - Kultura, Edukacja, House Music`,
      description: SITE_DESCRIPTION,
      url: BASE_URL,
      siteName: settings.siteName,
      locale: 'pl_PL',
      type: 'website',
      images: [
        {
          url: `${BASE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: settings.siteName,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${settings.siteName} - Kultura, Edukacja, House Music`,
      description: SITE_DESCRIPTION,
      images: [`${BASE_URL}/og-image.jpg`],
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
    alternates: {
      canonical: BASE_URL,
    },
    verification: {
      yandex: 'db21272bd99c85bb',
      other: {
        'msvalidate.01': 'C1B315B5E32DECB7024B6F4D53E3005F',
      },
    },
  };
}

export async function generateViewport(): Promise<Viewport> {
  const settings = await getSiteSettings();

  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: settings.theme.primaryColor,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();

  return (
    <html lang="pl" data-theme="polish">
      <head>
        <StructuredData />
      </head>
      <body>
        <ThemeProvider theme={settings.theme} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
