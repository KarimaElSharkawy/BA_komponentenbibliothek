export type NavLanguage = 'de' | 'en';

export type NavTranslations = {
  home: string;
  reportForm: string;
  contactForm: string;
  faqs: string;
  findContact: string;
  imprint: string;
  privacy: string;
  login: string;
  profile: string;
  logout: string;
  mainNavigation: string;
};

export const NAV_TRANSLATIONS: Record<NavLanguage, NavTranslations> = {
  de: {
    home: 'Startseite',
    reportForm: 'Meldeformular',
    contactForm: 'Kontaktformular',
    faqs: 'FAQs',
    findContact: 'Kontaktperson finden',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    login: 'Login',
    profile: 'Profil',
    logout: 'Logout',
    mainNavigation: 'Hauptnavigation',
  },
  en: {
    home: 'Home',
    reportForm: 'Report form',
    contactForm: 'Contact form',
    faqs: 'FAQs',
    findContact: 'Find contact person',
    imprint: 'Imprint',
    privacy: 'Privacy policy',
    login: 'Login',
    profile: 'Profile',
    logout: 'Logout',
    mainNavigation: 'Main navigation',
  },
};

export function getNavTranslations(language: string): NavTranslations {
  return NAV_TRANSLATIONS[language === 'en' ? 'en' : 'de'];
}
