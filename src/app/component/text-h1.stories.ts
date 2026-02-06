import type { Meta, StoryObj } from '@storybook/angular';
import { TextH1Component } from './text-h1.component';

const meta: Meta<TextH1Component> = {
  title: 'Formulare/Felder/Text/h1',
  component: TextH1Component,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<TextH1Component>;

export const Default: Story = {
  args: {
    text: 'Überschrift H1',
  },
};
