import type { Meta, StoryObj } from '@storybook/angular';
import { EmailInputComponent } from './email-input.component';

const meta: Meta<EmailInputComponent> = {
  title: 'Formulare/Felder/E-Mail',
  component: EmailInputComponent,
  parameters: {
    layout: 'padded',
  },
};
 
export default meta;
type Story = StoryObj<EmailInputComponent>;

export const Standard: Story = {
  args: {
    id: 'email',
    label: 'E-Mail*',
    placeholder: 'name@beispiel.de',
    required: true,
    requiredErrorId: 'email-required-error',
    requiredErrorText: 'Bitte geben Sie Ihre E-Mail-Adresse ein.',
    formatErrorId: 'email-format-error',
    formatErrorText: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
  },
};

