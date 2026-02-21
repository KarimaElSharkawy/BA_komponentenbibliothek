import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata, applicationConfig } from '@storybook/angular';
import { NavTextComponent } from './nav-text.component';
import { DropdownComponent } from './dropdown.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';

const meta: Meta<NavTextComponent> = {
  title: 'Formulare/Felder/Text/nav-text',
  component: NavTextComponent,
  decorators: [
    applicationConfig({
      providers: [provideRouter([])],
    }),
    moduleMetadata({
      imports: [NavTextComponent, DropdownComponent, CommonModule, FormsModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<NavTextComponent>;

export const LinkDefault: Story = {
  args: {
    text: 'Navigation Link',
    href: '/example',
  },
  parameters: {
    docs: {
      description: {
        story: 'Inaktiver Link. Wird dunkler (#333333) beim Hovern.',
      },
    },
  },
};

export const LinkAktiv: Story = {
  args: {
    text: 'Navigation Link',
    href: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'Aktiver Link. Erscheint in Grün (#8BC34A) und fett.',
      },
    },
  },
};

export const Dropdown: Story = {
  render: () => ({
    props: {
      selectedLanguage: 'de',
      langOpen: false,
    },
    template: `
      <div style="display: flex; align-items: center; gap: 12px; padding: 20px; position: relative;">
        <style>
          .nav-text-link { color: #555555; text-decoration: none; font-size: 1rem; transition: color 0.15s ease; display:inline-flex; align-items:center; gap:6px; }
          .nav-text-link:hover { color: #000000; }
          .nav-text-link.active { color: #8BC34A; font-weight: 600; }
          .nav-text-caret { width: 12px; height: 12px; display:inline-block; }

          /* Bootstrap-like dropdown styles for the selection box */
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
            padding: 0.375rem 1rem; /* 6px 16px approx */
            color: #212529;
            background: transparent;
            text-align: left;
            cursor: pointer;
            font-size: 0.9375rem;
          }
          .bs-dropdown .dropdown-item:hover {
            background: #f8f9fa;
            color: #212529;
          }
        </style>

        <a
          role="button"
          class="nav-text-link"
          [class.active]="selectedLanguage !== ''"
          (click)="langOpen = !langOpen"
          aria-haspopup="listbox"
          [attr.aria-expanded]="langOpen"
        >
          {{ selectedLanguage === 'de' ? 'Deutsch' : (selectedLanguage === 'en' ? 'English' : 'Sprache') }}
          <svg class="nav-text-caret" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <path d="M4 6 L8 10 L12 6" stroke="#2a2a2a" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>

        <div *ngIf="langOpen" role="listbox" aria-label="Sprachauswahl" style="position: absolute; top: 40px; left: 0; z-index:1000;">
          <div class="bs-dropdown">
            <div class="dropdown-item" (click)="selectedLanguage='de'; langOpen=false">Deutsch</div>
            <div class="dropdown-item" (click)="selectedLanguage='en'; langOpen=false">English</div>
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Sprachauswahl Dropdown mit Mehrfach-Optionen (Deutsch, English). Zeigt aktuell "Deutsch" mit Dropdown-Menü.',
      },
    },
  },
};
