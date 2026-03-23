import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata, applicationConfig } from '@storybook/angular';
import { ShowcaseComponent } from './showcase.component';
import { NavTextComponent } from './nav-text.component';
import { BurgerMenuComponent } from './burger-menu.component';
import { LangComponent } from './lang.component';
import { provideRouter } from '@angular/router';

const routes = [
  { path: '', component: ShowcaseComponent },
  { path: 'meldeformular', component: ShowcaseComponent },
  { path: 'kontaktformular', component: ShowcaseComponent },
  { path: 'faqs', component: ShowcaseComponent },
  { path: 'kontaktperson', component: ShowcaseComponent },
  { path: 'imprint', component: ShowcaseComponent },
  { path: 'privacypolicy', component: ShowcaseComponent },
  { path: 'admin-home', component: ShowcaseComponent },
  { path: 'login', component: ShowcaseComponent },
  { path: 'login-forwarder', component: ShowcaseComponent },
];

const NAV_SHOWCASE_STYLES = `
  <style>
    .nav-shell {
      padding: 0.75rem 1rem;
      border-top: 0.0625rem solid #e9ecef;
      color: #555555;
    }
    .nav-items {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-evenly;
      gap: 0.5rem 1rem;
      margin: 0 auto;
      padding: 0;
      max-width: 75rem;
      list-style: none;
    }
    .nav-item {
      text-align: center;
      flex: 0 1 auto;
    }
    .nav-mobile-footer { display: none; }
    .nav-desktop-footer { display: block; }
    .nav-desktop-bar {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      gap: 0.5rem 1rem;
      margin: 0 auto;
      max-width: 75rem;
    }
    .nav-desktop-tools {
      display: flex;
      align-items: center;
      gap: 0.5rem 1rem;
      flex: 0 1 auto;
    }
    .nav-mobile-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
    }
    .logout-button {
      border: 0;
      background: transparent;
      color: #555555;
      padding: 0;
      font-size: 0.95rem;
      line-height: 1.2;
    }
    .logout-button:hover { color: #000000; }
    app-nav-text, .nav-text-link { font-size: 0.95rem; line-height: 1.2; }
    @media (max-width: 68.74875rem) {
      .nav-mobile-footer { display: block; }
      .nav-desktop-footer { display: none; }
    }
    @media (max-width: 47.99875rem) {
      .nav-shell { padding: 0.625rem 0.9rem; }
      app-nav-text, .nav-text-link, .logout-button { font-size: 0.9rem; }
    }
  </style>
`;

type NavLanguage = 'de' | 'en';

type NavTranslations = {
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

const NAV_TRANSLATIONS: Record<NavLanguage, NavTranslations> = {
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

function getNavTranslations(language: string): NavTranslations {
  return NAV_TRANSLATIONS[language === 'en' ? 'en' : 'de'];
}

function buildLoggedOutMobileItems(translations: NavTranslations) {
  return [
    { text: translations.home, href: '/' },
    { text: translations.reportForm, href: '/meldeformular' },
    { text: translations.contactForm, href: '/kontaktformular' },
    { text: translations.faqs, href: '/faqs' },
    { text: translations.findContact, href: '/kontaktperson' },
    { text: translations.imprint, href: '/imprint' },
    { text: translations.privacy, href: '/privacypolicy' },
    { text: translations.login, href: '/login-forwarder' },
  ];
}

function buildLoggedInMobileItems(translations: NavTranslations) {
  return [
    { text: translations.home, href: '/' },
    { text: translations.reportForm, href: '/meldeformular' },
    { text: translations.contactForm, href: '/kontaktformular' },
    { text: translations.faqs, href: '/faqs' },
    { text: translations.findContact, href: '/kontaktperson' },
    { text: translations.imprint, href: '/imprint' },
    { text: translations.privacy, href: '/privacypolicy' },
    { text: translations.logout },
  ];
}

const meta: Meta<ShowcaseComponent> = {
  title: 'Formulare/Showcase/Navigation',
  component: ShowcaseComponent,
  decorators: [
    applicationConfig({
      providers: [provideRouter(routes)],
    }),
    moduleMetadata({
      imports: [
        ShowcaseComponent,
        NavTextComponent,
        BurgerMenuComponent,
        LangComponent,
      ],
    }),
  ],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<ShowcaseComponent>;

export const Navigation: Story = {
  render: () => ({
    props: {
      selectedLanguage: 'de',
      getTranslations: (language: string) => getNavTranslations(language),
      getMobileMenuItems: (language: string) => buildLoggedOutMobileItems(getNavTranslations(language)),
    },
    template: `
      ${NAV_SHOWCASE_STYLES}

      <footer class="bg-light text-muted fixed-bottom nav-shell nav-mobile-footer">
        <div class="nav-mobile-bar">
          <app-burger-menu [items]="getMobileMenuItems(selectedLanguage)" [openDirection]="'up'"></app-burger-menu>
          <app-lang
            [language]="selectedLanguage"
            [displayMode]="'short'"
            (languageChange)="selectedLanguage = $event"
          ></app-lang>
        </div>
      </footer>

      <footer class="bg-light text-muted fixed-bottom nav-shell nav-desktop-footer">
        <div class="nav-desktop-bar">
          <nav [attr.aria-label]="getTranslations(selectedLanguage).mainNavigation">
            <ul class="nav-items">
              <li class="nav-item">
                <app-nav-text [text]="getTranslations(selectedLanguage).home" [href]="'/'"></app-nav-text>
              </li>
              <li class="nav-item">
                <app-nav-text [text]="getTranslations(selectedLanguage).reportForm" [href]="'/meldeformular'"></app-nav-text>
              </li>
              <li class="nav-item">
                <app-nav-text [text]="getTranslations(selectedLanguage).contactForm" [href]="'/kontaktformular'"></app-nav-text>
              </li>
              <li class="nav-item">
                <app-nav-text [text]="getTranslations(selectedLanguage).faqs" [href]="'/faqs'"></app-nav-text>
              </li>
              <li class="nav-item">
                <app-nav-text [text]="getTranslations(selectedLanguage).findContact" [href]="'/kontaktperson'"></app-nav-text>
              </li>
              <li class="nav-item">
                <app-nav-text [text]="getTranslations(selectedLanguage).imprint" [href]="'/imprint'"></app-nav-text>
              </li>
              <li class="nav-item">
                <app-nav-text [text]="getTranslations(selectedLanguage).privacy" [href]="'/privacypolicy'"></app-nav-text>
              </li>
              <li class="nav-item">
                <app-nav-text [text]="getTranslations(selectedLanguage).login" [href]="'/login-forwarder'"></app-nav-text>
              </li>
            </ul>
          </nav>
          <div class="nav-desktop-tools">
            <div class="nav-item">
              <app-lang
                [language]="selectedLanguage"
                (languageChange)="selectedLanguage = $event"
              ></app-lang>
            </div>
          </div>
        </div>
      </footer>
    `,
  }),
};

export const NavigationLoggedIn: Story = {
  render: () => ({
    props: {
      selectedLanguage: 'de',
      getTranslations: (language: string) => getNavTranslations(language),
      getMobileMenuItems: (language: string) => buildLoggedInMobileItems(getNavTranslations(language)),
    },
    template: `
      ${NAV_SHOWCASE_STYLES}

      <footer class="bg-light text-muted fixed-bottom nav-shell nav-mobile-footer">
        <div class="nav-mobile-bar">
          <app-burger-menu [items]="getMobileMenuItems(selectedLanguage)" [openDirection]="'up'"></app-burger-menu>
          <app-lang
            [language]="selectedLanguage"
            [displayMode]="'short'"
            (languageChange)="selectedLanguage = $event"
          ></app-lang>
        </div>
      </footer>

      <footer class="bg-light text-muted fixed-bottom nav-shell nav-desktop-footer">
        <div class="nav-desktop-bar">
          <nav [attr.aria-label]="getTranslations(selectedLanguage).mainNavigation">
            <ul class="nav-items">
              <li class="nav-item">
                <app-nav-text [text]="getTranslations(selectedLanguage).home" [href]="'/'"></app-nav-text>
              </li>
              <li class="nav-item">
                <app-nav-text [text]="getTranslations(selectedLanguage).reportForm" [href]="'/meldeformular'"></app-nav-text>
              </li>
              <li class="nav-item">
                <app-nav-text [text]="getTranslations(selectedLanguage).contactForm" [href]="'/kontaktformular'"></app-nav-text>
              </li>
              <li class="nav-item">
                <app-nav-text [text]="getTranslations(selectedLanguage).faqs" [href]="'/faqs'"></app-nav-text>
              </li>
              <li class="nav-item">
                <app-nav-text [text]="getTranslations(selectedLanguage).findContact" [href]="'/kontaktperson'"></app-nav-text>
              </li>
              <li class="nav-item">
                <app-nav-text [text]="getTranslations(selectedLanguage).profile" [href]="'/login-forwarder'"></app-nav-text>
              </li>
            </ul>
          </nav>
          <div class="nav-desktop-tools">
            <div class="nav-item">
              <button class="logout-button">{{ getTranslations(selectedLanguage).logout }}</button>
            </div>
            <div class="nav-item">
              <app-lang
                [language]="selectedLanguage"
                (languageChange)="selectedLanguage = $event"
              ></app-lang>
            </div>
          </div>
        </div>
      </footer>
    `,
  }),
};
