import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata, applicationConfig } from '@storybook/angular';
import { ShowcaseComponent } from './showcase.component';
import { NavTextComponent } from './nav-text.component';
import { BurgerMenuComponent } from './burger-menu.component';
import { DropdownComponent } from './dropdown.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
        DropdownComponent,
        CommonModule,
        FormsModule,
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
      deutsch: 'de',
      english: 'en',
      selectedLanguage: 'de',
      langOpenMobile: false,
      langOpenDesktop: false,
      langMenuIdMobile: 'nav-showcase-lang-menu-mobile',
      langMenuIdDesktop: 'nav-showcase-lang-menu-desktop',
      mobileMenuItems: [
        { text: 'Home', href: '/' },
        { text: 'Meldeformular', href: '/meldeformular' },
        { text: 'Kontaktformular', href: '/kontaktformular' },
        { text: 'FAQs', href: '/faqs' },
        { text: 'Kontaktperson finden', href: '/kontaktperson' },
        { text: 'Impressum', href: '/imprint' },
        { text: 'Datenschutz', href: '/privacypolicy' },
        { text: 'Login', href: '/login-forwarder' },
      ],
      isLoggedIn: false,
    },
    template: `
      <style>
        .bs-dropdown {
          background: #ffffff;
          border: 1px solid #e9ecef;
          border-radius: 0.25rem;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
          min-width: 160px;
          overflow: hidden;
        }
        .bs-dropdown .dropdown-item {
          display: block;
          width: 100%;
          padding: 0.375rem 1rem;
          color: #212529;
          background: transparent;
          border: 0;
          text-align: left;
          cursor: pointer;
          font-size: 0.9375rem;
        }
        .bs-dropdown .dropdown-item:hover { background: #f8f9fa; }
        .nav-shell {
          padding: 0.75rem 1rem;
          border-top: 1px solid #e9ecef;
          color: #555555;
        }
        .nav-items {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-evenly;
          gap: 0.5rem 1rem;
          margin: 0 auto;
          max-width: 1200px;
        }
        .nav-item {
          text-align: center;
          flex: 0 1 auto;
        }
        .nav-item.lang-item {
          position: relative;
        }
        .nav-mobile-footer { display: none; }
        .nav-desktop-footer { display: block; }
        .nav-mobile-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
        }
        .mobile-title {
          font-size: 0.95rem;
          color: #2a2a2a;
          font-weight: 600;
        }
        .lang-trigger {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          border: 0;
          background: transparent;
          padding: 0;
          color: inherit;
          font: inherit;
          cursor: pointer;
        }
        .lang-caret {
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 5px solid #555555;
          margin-top: 2px;
        }
        .lang-menu {
          position: absolute;
          bottom: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
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
        @media (max-width: 1099.98px) {
          .nav-mobile-footer { display: block; }
          .nav-desktop-footer { display: none; }
        }
        @media (max-width: 767.98px) {
          .nav-shell { padding: 0.625rem 0.9rem; }
          app-nav-text, .nav-text-link, .logout-button { font-size: 0.9rem; }
        }
      </style>

      <!-- Mobile / narrow widths - Not Logged In -->
      <footer class="bg-light text-muted fixed-bottom nav-shell nav-mobile-footer">
        <div class="nav-mobile-bar">
          <app-burger-menu [items]="mobileMenuItems" [openDirection]="'up'"></app-burger-menu>
          <div class="nav-item lang-item">
            <button #langTriggerMobile type="button" class="lang-trigger" (click)="langOpenMobile = !langOpenMobile" aria-haspopup="true" [attr.aria-controls]="langMenuIdMobile" [attr.aria-expanded]="langOpenMobile" aria-label="Sprache auswählen">
              <app-nav-text [text]="selectedLanguage === 'de' ? 'DE' : 'EN'" [interactive]="false"></app-nav-text>
              <span class="lang-caret" aria-hidden="true"></span>
            </button>
            <div *ngIf="langOpenMobile" [id]="langMenuIdMobile" class="lang-menu" role="group" aria-label="Sprachauswahl" (keydown.escape)="langOpenMobile = false; langTriggerMobile.focus()">
              <div class="bs-dropdown">
                <button type="button" class="dropdown-item" (click)="selectedLanguage = 'de'; langOpenMobile = false">Deutsch</button>
                <button type="button" class="dropdown-item" (click)="selectedLanguage = 'en'; langOpenMobile = false">English</button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <!-- Large window (Desktop) - Not Logged In -->
      <footer class="bg-light text-muted fixed-bottom nav-shell nav-desktop-footer">
        <div class="nav-items">
          <div class="nav-item">
            <app-nav-text text="Home" [href]="'/'"></app-nav-text>
          </div>
          <div class="nav-item">
            <app-nav-text text="Meldeformular" [href]="'/meldeformular'"></app-nav-text>
          </div>
          <div class="nav-item">
            <app-nav-text text="Kontaktformular" [href]="'/kontaktformular'"></app-nav-text>
          </div>
          <div class="nav-item">
            <app-nav-text text="FAQs" [href]="'/faqs'"></app-nav-text>
          </div>
          <div class="nav-item">
            <app-nav-text text="Kontaktperson finden" [href]="'/kontaktperson'"></app-nav-text>
          </div>
          <div class="nav-item">
            <app-nav-text text="Impressum" [href]="'/imprint'"></app-nav-text>
          </div>
          <div class="nav-item">
            <app-nav-text text="Datenschutz" [href]="'/privacypolicy'"></app-nav-text>
          </div>
          <div class="nav-item">
            <app-nav-text text="Login" [href]="'/login-forwarder'"></app-nav-text>
          </div>
          <div class="nav-item lang-item">
            <button #langTriggerDesktop type="button" class="lang-trigger" (click)="langOpenDesktop = !langOpenDesktop" aria-haspopup="true" [attr.aria-controls]="langMenuIdDesktop" [attr.aria-expanded]="langOpenDesktop" aria-label="Sprache auswählen">
              <app-nav-text [text]="selectedLanguage === 'de' ? 'Deutsch' : 'English'" [interactive]="false"></app-nav-text>
              <span class="lang-caret" aria-hidden="true"></span>
            </button>
            <div *ngIf="langOpenDesktop" [id]="langMenuIdDesktop" class="lang-menu" role="group" aria-label="Sprachauswahl" (keydown.escape)="langOpenDesktop = false; langTriggerDesktop.focus()">
              <div class="bs-dropdown">
                <button type="button" class="dropdown-item" (click)="selectedLanguage = 'de'; langOpenDesktop = false">Deutsch</button>
                <button type="button" class="dropdown-item" (click)="selectedLanguage = 'en'; langOpenDesktop = false">English</button>
              </div>
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
      deutsch: 'de',
      english: 'en',
      selectedLanguage: 'de',
      isLoggedIn: true,
      langOpenMobileLogin: false,
      langOpenDesktopLogin: false,
      langMenuIdMobileLogin: 'nav-showcase-lang-menu-mobile-login',
      langMenuIdDesktopLogin: 'nav-showcase-lang-menu-desktop-login',
      mobileMenuItemsLogin: [
        { text: 'Home', href: '/' },
        { text: 'Meldeformular', href: '/meldeformular' },
        { text: 'Kontaktformular', href: '/kontaktformular' },
        { text: 'FAQs', href: '/faqs' },
        { text: 'Kontaktperson finden', href: '/kontaktperson' },
        { text: 'Impressum', href: '/imprint' },
        { text: 'Datenschutz', href: '/privacypolicy' },
        { text: 'Logout' },
      ],
    },
    template: `
      <style>
        .bs-dropdown {
          background: #ffffff;
          border: 1px solid #e9ecef;
          border-radius: 0.25rem;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
          min-width: 160px;
          overflow: hidden;
        }
        .bs-dropdown .dropdown-item {
          display: block;
          width: 100%;
          padding: 0.375rem 1rem;
          color: #212529;
          background: transparent;
          border: 0;
          text-align: left;
          cursor: pointer;
          font-size: 0.9375rem;
        }
        .bs-dropdown .dropdown-item:hover { background: #f8f9fa; }
        .nav-shell {
          padding: 0.75rem 1rem;
          border-top: 1px solid #e9ecef;
          color: #555555;
        }
        .nav-items {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-evenly;
          gap: 0.5rem 1rem;
          margin: 0 auto;
          max-width: 1200px;
        }
        .nav-item {
          text-align: center;
          flex: 0 1 auto;
        }
        .nav-item.lang-item {
          position: relative;
        }
        .nav-mobile-footer { display: none; }
        .nav-desktop-footer { display: block; }
        .nav-mobile-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
        }
        .mobile-title {
          font-size: 0.95rem;
          color: #2a2a2a;
          font-weight: 600;
        }
        .lang-trigger {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          border: 0;
          background: transparent;
          padding: 0;
          color: inherit;
          font: inherit;
          cursor: pointer;
        }
        .lang-caret {
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 5px solid #555555;
          margin-top: 2px;
        }
        .lang-menu {
          position: absolute;
          bottom: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
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
        @media (max-width: 1099.98px) {
          .nav-mobile-footer { display: block; }
          .nav-desktop-footer { display: none; }
        }
        @media (max-width: 767.98px) {
          .nav-shell { padding: 0.625rem 0.9rem; }
          app-nav-text, .nav-text-link, .logout-button { font-size: 0.9rem; }
        }
      </style>
      <!-- Mobile / narrow widths - Logged In -->
      <footer class="bg-light text-muted fixed-bottom nav-shell nav-mobile-footer">
        <div class="nav-mobile-bar">
          <app-burger-menu [items]="mobileMenuItemsLogin" [openDirection]="'up'"></app-burger-menu>
          <div class="nav-item lang-item">
            <button #langTriggerMobileLogin type="button" class="lang-trigger" (click)="langOpenMobileLogin = !langOpenMobileLogin" aria-haspopup="true" [attr.aria-controls]="langMenuIdMobileLogin" [attr.aria-expanded]="langOpenMobileLogin" aria-label="Sprache auswählen">
              <app-nav-text [text]="selectedLanguage === 'de' ? 'DE' : 'EN'" [interactive]="false"></app-nav-text>
              <span class="lang-caret" aria-hidden="true"></span>
            </button>
            <div *ngIf="langOpenMobileLogin" [id]="langMenuIdMobileLogin" class="lang-menu" role="group" aria-label="Sprachauswahl" (keydown.escape)="langOpenMobileLogin = false; langTriggerMobileLogin.focus()">
              <div class="bs-dropdown">
                <button type="button" class="dropdown-item" (click)="selectedLanguage = 'de'; langOpenMobileLogin = false">Deutsch</button>
                <button type="button" class="dropdown-item" (click)="selectedLanguage = 'en'; langOpenMobileLogin = false">English</button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <!-- Large window (Desktop) - Logged In -->
      <footer class="bg-light text-muted fixed-bottom nav-shell nav-desktop-footer">
        <div class="nav-items">
          <div class="nav-item">
            <app-nav-text text="Home" [href]="'/'"></app-nav-text>
          </div>
          <div class="nav-item">
            <app-nav-text text="Meldeformular" [href]="'/meldeformular'"></app-nav-text>
          </div>
          <div class="nav-item">
            <app-nav-text text="Kontaktformular" [href]="'/kontaktformular'"></app-nav-text>
          </div>
          <div class="nav-item">
            <app-nav-text text="FAQs" [href]="'/faqs'"></app-nav-text>
          </div>
          <div class="nav-item">
            <app-nav-text text="Kontaktperson finden" [href]="'/kontaktperson'"></app-nav-text>
          </div>
          <div class="nav-item">
            <app-nav-text text="Profil" [href]="'/login-forwarder'"></app-nav-text>
          </div>
          <div class="nav-item">
            <button class="logout-button">Logout</button>
          </div>
          <div class="nav-item lang-item">
            <button #langTriggerDesktopLogin type="button" class="lang-trigger" (click)="langOpenDesktopLogin = !langOpenDesktopLogin" aria-haspopup="true" [attr.aria-controls]="langMenuIdDesktopLogin" [attr.aria-expanded]="langOpenDesktopLogin" aria-label="Sprache auswählen">
              <app-nav-text [text]="selectedLanguage === 'de' ? 'Deutsch' : 'English'" [interactive]="false"></app-nav-text>
              <span class="lang-caret" aria-hidden="true"></span>
            </button>
            <div *ngIf="langOpenDesktopLogin" [id]="langMenuIdDesktopLogin" class="lang-menu" role="group" aria-label="Sprachauswahl" (keydown.escape)="langOpenDesktopLogin = false; langTriggerDesktopLogin.focus()">
              <div class="bs-dropdown">
                <button type="button" class="dropdown-item" (click)="selectedLanguage = 'de'; langOpenDesktopLogin = false">Deutsch</button>
                <button type="button" class="dropdown-item" (click)="selectedLanguage = 'en'; langOpenDesktopLogin = false">English</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `,
  }),
};
