import type { Metadata } from 'next';
import { getTermsAndConditionsContent } from '@/lib/tina';
import LegalPage, { generateLegalMetadata } from '@/components/LegalPage';

export async function generateMetadata(): Promise<Metadata> {
  const content = await getTermsAndConditionsContent();
  return generateLegalMetadata(content, 'Regulamin', '/regulamin');
}

export default async function RegulaminPage() {
  const content = await getTermsAndConditionsContent();

  return <LegalPage content={content} fallbackTitle="Regulamin" pagePath="/regulamin" />;
}
