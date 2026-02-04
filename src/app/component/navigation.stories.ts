import type { Meta, StoryObj } from '@storybook/angular';
import { NavigationComponent } from './navigation.component';

const meta: Meta<NavigationComponent> = {
  title: 'Layout/Navigation',
  component: NavigationComponent,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    activePage: {
      control: 'radio',
      options: ['startseite', 'impressum', 'datenschutz', 'admin'],
    },
  },
};

export default meta;
type Story = StoryObj<NavigationComponent>;

export const Startseite: Story = {
  args: {
    activePage: 'startseite',
  },
};

export const Impressum: Story = {
  args: {
    activePage: 'impressum',
  },
};

export const Datenschutz: Story = {
  args: {
    activePage: 'datenschutz',
  },
};

export const Admin: Story = {
  args: {
    activePage: 'admin',
  },
};
