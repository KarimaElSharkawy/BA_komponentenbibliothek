import type { Meta, StoryObj } from '@storybook/angular';
import { TextH2Component } from './text-h2.component';

const meta: Meta<TextH2Component> = {
  title: 'Formulare/Felder/Text/h2',
  component: TextH2Component,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<TextH2Component>;

export const Default: Story = {
  args: {
    text: 'Überschrift H2',
  },
};
