import { BASE_URL } from '../lib/constants';

export const dynamic = 'force-static';

export default function sitemap() {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ];
}
