import type { Meta, StoryObj } from '@storybook/angular';
import { TextH5Component } from './text-h5.component';

const meta: Meta<TextH5Component> = {
  title: 'Formulare/Felder/Text/h5',
  component: TextH5Component,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<TextH5Component>;

export const Default: Story = {
  args: {
    text: 'Überschrift H5',
  },
};
