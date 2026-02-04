import type { Meta, StoryObj } from '@storybook/angular';
import { ZurueckButtonComponent } from './zurueck-button.component';

const meta: Meta<ZurueckButtonComponent> = {
  title: 'Formulare/Felder/Zurueck Button',
  component: ZurueckButtonComponent,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<ZurueckButtonComponent>;

export const Standard: Story = {
  args: {
    label: 'Zurück',
    ariaLabel: 'Zurück zu den Meldedaten',
  },
};

