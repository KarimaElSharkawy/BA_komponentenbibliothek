import type { Meta, StoryObj } from '@storybook/angular';
import { AbbreviationComponent } from './abbreviation.component';

const meta: Meta<AbbreviationComponent> = {
  title: 'Formulare/Felder/Text/Abbreviation',
  component: AbbreviationComponent,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<AbbreviationComponent>;

export const Standard: Story = {
  args: {
    text: 'FAQ',
    title: 'Frequently Asked Questions',
  },
};
