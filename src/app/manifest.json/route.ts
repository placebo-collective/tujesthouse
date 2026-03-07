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
        src: settings.favicon,
        sizes: '64x64 32x32 24x24 16x16',
        type: 'image/x-icon',
      },
    ],
    start_url: '/',
    display: 'standalone',
    theme_color: settings.theme.primaryColor,
    background_color: '#ffffff',
  };

  return new Response(JSON.stringify(manifest), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
