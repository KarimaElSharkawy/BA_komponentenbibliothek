import type { Meta, StoryObj } from '@storybook/angular';
import { TextLinkComponent } from './text-link.component';

const meta: Meta<TextLinkComponent> = {
  title: 'Formulare/Felder/Text/link',
  component: TextLinkComponent,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<TextLinkComponent>;

export const Default: Story = {
  args: {
    text: 'Mehr Informationen finden Sie unter',
    linkText: 'diesem Link',
    href: 'https://www.htw-berlin.de',
    target: '_blank',
  },
};
