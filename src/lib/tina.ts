import type {
  HeroContent,
  AboutContent,
  ProgramContent,
  CitiesContent,
  FormsContent,
  FooterContent,
  HeaderContent,
  DJFormContent,
  WorkshopFormContent,
} from './content-types';
import { loadContent } from './utils/content-loader';

const heroFallback: HeroContent = {
  title: 'Tu Jest House',
  subtitle: 'Cykl wydarzeń kulturowych łączących edukację i muzykę elektroniczną',
  dates: 'Maj – Wrzesień 2026 | 5 miast w Polsce',
  cta: {
    primaryText: 'Zgłoś się jako artysta',
    primaryLink: '#formularze',
    secondaryText: 'Zapisz się na warsztaty',
    secondaryLink: '#formularze',
  },
};

export async function getHeroContent(): Promise<HeroContent> {
  const content = await loadContent<HeroContent>('sections/hero.json', heroFallback);
  return content ?? heroFallback;
}

export async function getAboutContent(): Promise<AboutContent | null> {
  return loadContent<AboutContent>('sections/about.json');
}

export async function getProgramContent(): Promise<ProgramContent | null> {
  return loadContent<ProgramContent>('sections/program.json');
}

export async function getCitiesContent(): Promise<CitiesContent | null> {
  return loadContent<CitiesContent>('sections/cities.json');
}

export async function getFormsContent(): Promise<FormsContent | null> {
  return loadContent<FormsContent>('sections/forms.json');
}

export async function getFooterContent(): Promise<FooterContent | null> {
  return loadContent<FooterContent>('layout/footer.json');
}

export async function getHeaderContent(): Promise<HeaderContent | null> {
  return loadContent<HeaderContent>('layout/header.json');
}

export async function getDJFormContent(): Promise<DJFormContent | null> {
  return loadContent<DJFormContent>('forms/dj-application.json');
}

export async function getWorkshopFormContent(): Promise<WorkshopFormContent | null> {
  return loadContent<WorkshopFormContent>('forms/workshop-registration.json');
}
