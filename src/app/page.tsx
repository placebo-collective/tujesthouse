import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import { SITE_NAME, SITE_DESCRIPTION } from '../lib/constants';
import {
  getFormsContent,
  getArtistFormContent,
  getWorkshopFormContent,
  getCitiesContent,
} from '@/lib/tina';

const ProgramSection = dynamic(() => import('../components/sections/ProgramSection'));
const CitiesSection = dynamic(() => import('../components/sections/CitiesSection'));
const FormsSection = dynamic(() => import('../components/sections/FormsSection'));

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
};

export default async function HomePage() {
  const formsContent = await getFormsContent();
  const artistFormContent = await getArtistFormContent();
  const workshopFormContent = await getWorkshopFormContent();
  const citiesContent = await getCitiesContent();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <CitiesSection />
      {formsContent && artistFormContent && workshopFormContent && citiesContent && (
        <FormsSection
          title={formsContent.title}
          subtitle={formsContent.subtitle}
          tabs={formsContent.tabs}
          contact={formsContent.contact}
          artistFormContent={artistFormContent}
          workshopFormContent={workshopFormContent}
          cities={citiesContent.cities}
        />
      )}
    </>
  );
}
