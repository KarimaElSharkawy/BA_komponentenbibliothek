import type { Meta, StoryObj } from '@storybook/angular';
import { AkkordeonComponent } from './akkordeon.component';

const meta: Meta<AkkordeonComponent> = {
  title: 'Formulare/Felder/Akkordeon',
  component: AkkordeonComponent,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<AkkordeonComponent>;



export const MitInhalt: Story = {
  args: {
    ariaLabel: 'Formularhilfe',
    idPrefix: 'formularhilfe',
    items: [
      {
        title: '1. FAQs HTW-Antidiskriminierungs-Webseite',
        content: [
          'Text für 1. FAQs HTW-Antidiskriminierungs-Webseite',
        ],
        open: true,
      },
      {
        title: '2. FAQs HTW-Antidiskriminierungs-Webseite',
        content: [
          'Text für 2. FAQs HTW-Antidiskriminierungs-Webseite',
        ],
      },
      {
        title: '3. FAQs HTW-Antidiskriminierungs-Webseite',
        content: [
          'Text für 3. FAQs HTW-Antidiskriminierungs-Webseite',
        ],
      },
    ],
  },
};
