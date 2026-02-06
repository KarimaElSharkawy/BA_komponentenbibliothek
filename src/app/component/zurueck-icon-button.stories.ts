import type { Meta, StoryObj } from '@storybook/angular';
import { ZurueckIconButtonComponent } from './zurueck-icon-button.component';

const meta: Meta<ZurueckIconButtonComponent> = {
  title: 'Formulare/Felder/Buttons/Zurück Icon',
  component: ZurueckIconButtonComponent,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<ZurueckIconButtonComponent>;

export const Default: Story = {
  args: {
    ariaLabel: 'Zurück',
  },
};
