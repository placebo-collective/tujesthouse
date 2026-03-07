import type { Metadata } from 'next';
import styles from './polityka-prywatnosci.module.scss';
import { BASE_URL } from '../../lib/constants';
import { getPrivacyPolicyContent, getSiteSettings } from '@/lib/tina';
import MarkdownContent from '@/components/MarkdownContent';

export async function generateMetadata(): Promise<Metadata> {
  const content = await getPrivacyPolicyContent();
  const settings = await getSiteSettings();

  if (!content) {
    return {
      title: 'Polityka Prywatności',
    };
  }

  return {
    title: content.title,
    description: content.metaDescription,
    openGraph: {
      title: `${content.title} | ${settings.siteName}`,
      description: content.metaDescription,
      url: `${BASE_URL}/polityka-prywatnosci`,
      type: 'website',
    },
    alternates: {
      canonical: `${BASE_URL}/polityka-prywatnosci`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function PolitykaPrywatnosciPage() {
  const content = await getPrivacyPolicyContent();

  if (!content) {
    return (
      <main className={styles.legal}>
        <div className="container">
          <h1>Polityka Prywatności</h1>
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
        <div className={styles.updated}>
          <p>
            <em>Ostatnia aktualizacja: {content.lastUpdated}</em>
          </p>
        </div>
      </div>
    </main>
  );
}
