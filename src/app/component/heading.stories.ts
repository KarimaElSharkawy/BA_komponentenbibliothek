import type { Meta, StoryObj } from '@storybook/angular';
import { HeadingComponent } from './heading.component';


const meta: Meta<HeadingComponent> = {
  title: 'Formulare/Felder/Text/heading',
  component: HeadingComponent,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<HeadingComponent>;

export const h1: Story = {
  args: {
    level: 1,
    text: 'Überschrift h1',
  },
};

export const h2: Story = {
  args: {
    level: 2,
    text: 'Überschrift h2',
  },
};

export const h3: Story = {
  args: {
    level: 3,
    text: 'Überschrift h3',
  },
};

export const h4: Story = {
  args: {
    level: 4,
    text: 'Überschrift h4',
  },
};

export const h5: Story = {
  args: {
    level: 5,
    text: 'Überschrift h5',
  },
};
