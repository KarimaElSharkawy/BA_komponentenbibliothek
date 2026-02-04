import type { Meta, StoryObj } from '@storybook/angular';
import { DatenschutzComponent } from './datenschutz.component';

const meta: Meta<DatenschutzComponent> = {
  title: 'Formulare/Felder/Datenschutz',
  component: DatenschutzComponent,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<DatenschutzComponent>;

export const Standard: Story = {
  args: {
    id: 'privacyConsent',
    textId: 'privacy-consent-text',
    required: true,
  },
};

