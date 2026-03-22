import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata, applicationConfig } from '@storybook/angular';
import { NavTextComponent } from './nav-text.component';
import { provideRouter } from '@angular/router';


const meta: Meta<NavTextComponent> = {
  title: 'Formulare/Felder/Text/nav-text',
  component: NavTextComponent,
  decorators: [
    applicationConfig({
      providers: [provideRouter([])],
    }),
    moduleMetadata({
      imports: [NavTextComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<NavTextComponent>;

export const LinkDefault: Story = {
  args: {
    text: 'Navigation Link',
    href: '/example',
  },
  parameters: {
    docs: {
      description: {
        story: 'Inaktiver Link. Wird dunkler (#333333) beim Hovern.',
      },
    },
  },
};

export const LinkAktiv: Story = {
  args: {
    text: 'Navigation Link',
    href: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'Aktiver Link. Erscheint in Grün (#2E7D32) und fett.',
      },
    },
  },
};
