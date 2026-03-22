import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';


const meta: Meta<ButtonComponent> = {
  title: 'Formulare/Felder/Buttons/Button',
  component: ButtonComponent,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

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

export const IconOnly: Story = {
  args: {
    ariaLabel: 'Zurück',
    iconOnly: true,
  },
};
