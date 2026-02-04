import type { Meta, StoryObj } from '@storybook/angular';
import { AbsendenButtonComponent } from './absenden-button.component';

const meta: Meta<AbsendenButtonComponent> = {
  title: 'Formulare/Felder/Absenden Button',
  component: AbsendenButtonComponent,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<AbsendenButtonComponent>;

export const Enabled: Story = {
  args: {
    label: 'Absenden',
    ariaLabel: 'Meldeformular absenden',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Absenden',
    ariaLabel: 'Meldeformular absenden',
    disabled: true,
  },
};

