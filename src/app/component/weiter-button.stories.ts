import type { Meta, StoryObj } from '@storybook/angular';
import { WeiterButtonComponent } from './weiter-button.component';

const meta: Meta<WeiterButtonComponent> = {
  title: 'Formulare/Felder/Weiter Button',
  component: WeiterButtonComponent,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<WeiterButtonComponent>;

export const Enabled: Story = {
  args: {
    label: 'Weiter',
    ariaLabel: 'Weiter zur Zusammenfassung',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Weiter',
    ariaLabel: 'Weiter zur Zusammenfassung',
    disabled: true,
  },
};

