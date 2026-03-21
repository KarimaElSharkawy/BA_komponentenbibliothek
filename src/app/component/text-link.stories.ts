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

export const PdfDocument: Story = {
  args: {
    text: 'Das Formular finden Sie als',
    linkText: 'PDF-Dokument',
    href: '/assets/formular.pdf',
    target: '_self',
    rel: '',
    suffixIcon: 'pdf',
  },
};

export const ExternalPage: Story = {
  args: {
    text: 'Weiterführende Informationen finden Sie auf',
    linkText: 'dieser externen Seite',
    href: 'https://www.htw-berlin.de',
    target: '_blank',
    rel: 'noopener noreferrer',
    suffixIcon: 'external',
  },
};
