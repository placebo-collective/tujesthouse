import type { Metadata } from 'next';
import { getPrivacyPolicyContent } from '@/lib/tina';
import LegalPage, { generateLegalMetadata } from '@/components/LegalPage';

export async function generateMetadata(): Promise<Metadata> {
  const content = await getPrivacyPolicyContent();
  return generateLegalMetadata(content, 'Polityka Prywatności', '/polityka-prywatnosci');
}

export default async function PolitykaPrywatnosciPage() {
  const content = await getPrivacyPolicyContent();

  return (
    <LegalPage
      content={content}
      fallbackTitle="Polityka Prywatności"
      pagePath="/polityka-prywatnosci"
    />
  );
}
