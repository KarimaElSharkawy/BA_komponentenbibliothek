import type { Meta, StoryObj } from '@storybook/angular';
import { LangComponent } from './lang.component';

const meta: Meta<LangComponent> = {
  title: 'Formulare/Felder/Text/lang',
  component: LangComponent,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Die Komponente kapselt die Sprachumschaltung und setzt die Standardsprache programmatisch am `html`-Element. Damit bleibt die sichtbare Sprache mit der im Markup deklarierten Sprache konsistent, was Screenreader und andere assistive Technologien für eine korrekte Aussprache und Sprachverarbeitung benötigen.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<LangComponent>;

export const Standard: Story = {
  render: () => ({
    props: {
      selectedLanguage: 'de',
    },
    template: `
      <div style="padding: 1.25rem;">
        <app-lang
          [language]="selectedLanguage"
          (languageChange)="selectedLanguage = $event"
        ></app-lang>
      </div>
    `,
  }),
};

export const Kurzform: Story = {
  render: () => ({
    props: {
      selectedLanguage: 'de',
    },
    template: `
      <div style="padding: 1.25rem;">
        <app-lang
          [language]="selectedLanguage"
          [displayMode]="'short'"
          (languageChange)="selectedLanguage = $event"
        ></app-lang>
      </div>
    `,
  }),
};
