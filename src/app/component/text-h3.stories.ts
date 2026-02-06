import type { Meta, StoryObj } from '@storybook/angular';
import { TextH3Component } from './text-h3.component';

const meta: Meta<TextH3Component> = {
  title: 'Formulare/Felder/Text/h3',
  component: TextH3Component,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<TextH3Component>;

export const Default: Story = {
  args: {
    text: 'Überschrift H3',
  },
};
