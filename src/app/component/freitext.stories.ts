import type { Meta, StoryObj } from '@storybook/angular';
import { FreitextComponent } from './freitext.component';

const meta: Meta<FreitextComponent> = {
  title: 'Content/Freitext',
  component: FreitextComponent,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['impressum', 'datenschutz'],
    },
  },
};

export default meta;
type Story = StoryObj<FreitextComponent>;

export const Impressum: Story = {
  args: {
    variant: 'impressum',
  },
};

export const Datenschutz: Story = {
  args: {
    variant: 'datenschutz',
  },
};
