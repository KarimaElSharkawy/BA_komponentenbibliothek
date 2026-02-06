import type { Meta, StoryObj } from '@storybook/angular';
import { TextH4Component } from './text-h4.component';

const meta: Meta<TextH4Component> = {
  title: 'Formulare/Felder/Text/h4',
  component: TextH4Component,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<TextH4Component>;

export const Default: Story = {
  args: {
    text: 'Überschrift H4',
  },
};
