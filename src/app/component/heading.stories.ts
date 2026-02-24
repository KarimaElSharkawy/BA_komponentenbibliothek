import type { Meta, StoryObj } from '@storybook/angular';
import { HeadingComponent } from './heading.component';

/**
 * Storybook: Dokumentiert semantische Ueberschriften ueber ein einheitliches Heading API.
 */
const meta: Meta<HeadingComponent> = {
  title: 'Formulare/Felder/Text/heading',
  component: HeadingComponent,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<HeadingComponent>;

export const H1: Story = {
  args: {
    level: 1,
    text: 'Überschrift H1',
  },
};

export const H2: Story = {
  args: {
    level: 2,
    text: 'Überschrift H2',
  },
};

export const H3: Story = {
  args: {
    level: 3,
    text: 'Überschrift H3',
  },
};

export const H4: Story = {
  args: {
    level: 4,
    text: 'Überschrift H4',
  },
};

export const H5: Story = {
  args: {
    level: 5,
    text: 'Überschrift H5',
  },
};
