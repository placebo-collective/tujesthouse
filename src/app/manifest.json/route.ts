import { getSiteSettings } from '@/lib/tina';
import { BASE_URL, SITE_DESCRIPTION } from '@/lib/constants';

export const dynamic = 'force-static';

export async function GET() {
  const settings = await getSiteSettings();

  const manifest = {
    short_name: settings.siteName,
    name: `${settings.siteName} - Kultura, Edukacja, House Music`,
    description: SITE_DESCRIPTION,
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512-maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait-primary',
    theme_color: settings.theme.primaryColor,
    background_color: settings.theme.darkBg,
    categories: ['music', 'entertainment', 'lifestyle'],
    lang: 'pl',
    dir: 'ltr',
  };

  return new Response(JSON.stringify(manifest), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
