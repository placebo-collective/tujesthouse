export interface HeroContent {
  title: string;
  subtitle: string;
  dates: string;
  cta: {
    primaryText: string;
    primaryLink: string;
    secondaryText: string;
    secondaryLink: string;
  };
}

export interface AboutCard {
  icon: string;
  title: string;
  description: string;
}

export interface AboutHighlight {
  number: string;
  label: string;
}

export interface AboutContent {
  title: string;
  intro: string;
  cards: AboutCard[];
  highlights: AboutHighlight[];
  funding: string;
}

export interface ProgramItem {
  icon: string;
  title: string;
  description: string;
}

export interface ProgramPart {
  badge: string;
  title: string;
  items: ProgramItem[];
}

export interface TargetItem {
  title: string;
  description: string;
}

export interface ProgramContent {
  title: string;
  subtitle: string;
  dayPart: ProgramPart;
  nightPart: ProgramPart;
  target?: {
    title: string;
    items: TargetItem[];
  };
}

export interface InfoCard {
  icon: string;
  title: string;
  description: string;
}

export interface City {
  name: string;
  month: string;
  venue: string;
}

export interface CitiesContent {
  title: string;
  subtitle: string;
  cities: City[];
  infoCards: InfoCard[];
}

export interface FormTab {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
}

export interface FormsContent {
  title: string;
  subtitle: string;
  tabs: FormTab[];
  contact: {
    title: string;
    text: string;
  };
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterContent {
  description: string;
  organizers: {
    title: string;
    main: {
      name: string;
      address: string;
      nip: string;
    };
    partner: {
      label: string;
      name: string;
      address: string;
      nip: string;
    };
  };
  contact: {
    title: string;
    gdprLabel: string;
  };
  documents: {
    title: string;
    links: FooterLink[];
  };
  copyright: string;
  fundingNote: string;
}

export interface MenuItem {
  label: string;
  href: string;
}

export interface HeaderContent {
  menu: MenuItem[];
}

export interface FormField {
  label: string;
  placeholder?: string;
  hint?: string;
  required: boolean;
  rows?: number;
  maxLength?: number;
}

export interface RoleOption {
  value: string;
  label: string;
}

export interface FormMessages {
  success: string;
  error: string;
  submitting: string;
  submit: string;
}

export interface ArtistFormContent {
  title: string;
  description: string;
  fields: {
    [key: string]: FormField;
  };
  agreement: {
    text: string;
    regulaminLink: string;
    consentText: string;
    privacyLink: string;
  };
  gdprInfo: {
    title: string;
    text: string;
  };
  messages: FormMessages;
}

export interface WorkshopFormContent {
  title: string;
  description: string;
  fields: {
    [key: string]: FormField & {
      options?: RoleOption[];
    };
  };
  agreement: {
    text: string;
    privacyLink: string;
    additionalText: string;
  };
  gdprInfo: {
    title: string;
    text: string;
  };
  messages: FormMessages;
}

export interface ThemeColors {
  primaryColor: string;
  secondaryColor: string;
  accentGold: string;
  darkBg: string;
  darkBg2: string;
  lightBg: string;
  textDark: string;
  textLight: string;
  borderColor: string;
  navBgStart: string;
  navBgEnd: string;
}

export interface SiteSettings {
  siteName: string;
  useLogo: boolean;
  logo: string;
  favicon: string;
  theme: ThemeColors;
}

export interface LegalPageContent {
  title: string;
  metaDescription: string;
  lastUpdated: string;
  content: string;
}
