import type { Metadata } from 'next';
import styles from './LegalPage.module.scss';
import { BASE_URL } from '@/lib/constants';
import { getSiteSettings } from '@/lib/tina';
import MarkdownContent from './MarkdownContent';
import type { LegalPageContent } from '@/lib/content-types';

interface LegalPageProps {
  content: LegalPageContent | null;
  fallbackTitle: string;
  pagePath: string;
}

export async function generateLegalMetadata(
  content: LegalPageContent | null,
  fallbackTitle: string,
  pagePath: string
): Promise<Metadata> {
  const settings = await getSiteSettings();

  if (!content) {
    return {
      title: fallbackTitle,
    };
  }

  return {
    title: content.title,
    description: content.metaDescription,
    openGraph: {
      title: `${content.title} | ${settings.siteName}`,
      description: content.metaDescription,
      url: `${BASE_URL}${pagePath}`,
      type: 'website',
    },
    alternates: {
      canonical: `${BASE_URL}${pagePath}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function LegalPage({ content, fallbackTitle }: LegalPageProps) {
  if (!content) {
    return (
      <main className={styles.legal}>
        <div className="container">
          <h1>{fallbackTitle}</h1>
          <p>Treść strony jest niedostępna.</p>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.legal}>
      <div className="container">
        <h1>{content.title}</h1>
        <MarkdownContent content={content.content} />
      </div>
    </main>
  );
}
