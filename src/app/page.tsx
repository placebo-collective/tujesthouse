import type { Metadata } from 'next';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ProgramSection from '../components/sections/ProgramSection';
import CitiesSection from '../components/sections/CitiesSection';
import FormsSection from '../components/sections/FormsSection';
import { SITE_NAME, SITE_DESCRIPTION } from '../lib/constants';

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <CitiesSection />
      <FormsSection />
    </>
  );
}
