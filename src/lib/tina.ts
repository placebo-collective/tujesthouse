import type {
  HeroContent,
  AboutContent,
  ProgramContent,
  CitiesContent,
  FormsContent,
  FooterContent,
  HeaderContent,
  ArtistFormContent,
  WorkshopFormContent,
  SiteSettings,
  LegalPageContent,
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

export async function getArtistFormContent(): Promise<ArtistFormContent | null> {
  return loadContent<ArtistFormContent>('forms/artist-application.json');
}

export async function getWorkshopFormContent(): Promise<WorkshopFormContent | null> {
  return loadContent<WorkshopFormContent>('forms/workshop-registration.json');
}

const settingsFallback: SiteSettings = {
  siteName: 'Tu Jest House',
  useLogo: false,
  logo: '/logo.svg',
  favicon: '/favicon.svg',
  theme: {
    primaryColor: '#e63946',
    secondaryColor: '#a41623',
    accentGold: '#ffd700',
    darkBg: '#1a1a1a',
    darkBg2: '#2d2d2d',
    lightBg: '#f5f5f5',
    textDark: '#2d2d2d',
    textLight: '#ffffff',
    borderColor: 'rgba(230, 57, 70, 0.2)',
    navBgStart: 'rgba(42, 16, 20, 0.97)',
    navBgEnd: 'rgba(26, 10, 12, 0.97)',
  },
};

export async function getSiteSettings(): Promise<SiteSettings> {
  const content = await loadContent<SiteSettings>('layout/settings.json', settingsFallback);
  return content ?? settingsFallback;
}

export async function getPrivacyPolicyContent(): Promise<LegalPageContent | null> {
  return loadContent<LegalPageContent>('pages/privacy-policy.json');
}

export async function getTermsAndConditionsContent(): Promise<LegalPageContent | null> {
  return loadContent<LegalPageContent>('pages/terms-and-conditions.json');
}
