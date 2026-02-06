import type { Meta, StoryObj } from '@storybook/angular';
import { TextParagraphComponent } from './text-paragraph.component';

const meta: Meta<TextParagraphComponent> = {
  title: 'Formulare/Felder/Text/paragraph',
  component: TextParagraphComponent,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<TextParagraphComponent>;

export const Default: Story = {
  args: {
    text: 'Dies ist ein Beispielabsatz mit Fließtext.',
  },
};
