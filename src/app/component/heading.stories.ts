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
    tag: 'h1',
    text: 'Überschrift h1',
  },
};

export const h2: Story = {
  args: {
    tag: 'h2',
    text: 'Überschrift h2',
  },
};

export const h3: Story = {
  args: {
    tag: 'h3',
    text: 'Überschrift h3',
  },
};

export const h4: Story = {
  args: {
    tag: 'h4',
    text: 'Überschrift h4',
  },
};

export const h5: Story = {
  args: {
    tag: 'h5',
    text: 'Überschrift h5',
  },
};

export const h6: Story = {
  args: {
    tag: 'h6',
    text: 'Überschrift h6',
  },
};

