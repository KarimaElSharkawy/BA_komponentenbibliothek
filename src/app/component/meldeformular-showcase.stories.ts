import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DropdownComponent } from './dropdown.component';
import { TextareaComponent } from './textarea.component';
import { WeiterButtonComponent } from './weiter-button.component';

const meta: Meta = {
  title: 'Formulare/Showcase/Meldeformular',
  decorators: [
    moduleMetadata({
      imports: [DropdownComponent, TextareaComponent, WeiterButtonComponent],
    }),
  ],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

export const Standard: Story = {
  render: () => ({
    template: `
      <form class="d-grid gap-3" aria-label="Meldeformular Beispiel">
        <app-dropdown
          id="showcase-gruppe"
          label="Mitgliedergruppe"
          placeholder="Bitte auswählen"
          [options]="['Studierende', 'Mitarbeitende', 'Externe']"
          [required]="true"
          errorText="Bitte wählen Sie eine Mitgliedergruppe aus."
          errorId="showcase-gruppe-error"
        ></app-dropdown>

        <app-textarea
          id="showcase-freitext"
          label="Freitext"
          [rows]="4"
          [required]="true"
          [minlength]="10"
          placeholder="Bitte beschreiben Sie den Vorfall."
          requiredErrorId="showcase-freitext-required-error"
          requiredErrorText="Bitte geben Sie einen Freitext ein."
          minlengthErrorId="showcase-freitext-minlength-error"
          minlengthErrorText="Der Freitext muss mindestens 10 Zeichen lang sein."
        ></app-textarea>

        <app-weiter-button
          label="Weiter"
          ariaLabel="Weiter zur Zusammenfassung"
        ></app-weiter-button>
      </form>
    `,
  }),
};
