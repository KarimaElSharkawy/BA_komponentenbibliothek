import type { Meta, StoryObj } from '@storybook/angular';
import { IconButtonComponent } from './icon-button.component';

/**
 * Storybook: Zeigt den Icon Button fuer Navigationsaktionen.
 */
const meta: Meta<IconButtonComponent> = {
  title: 'Formulare/Felder/Buttons/Icon Button',
  component: IconButtonComponent,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<IconButtonComponent>;

export const Default: Story = {
  args: {
    ariaLabel: 'Zurück',
  },
};
