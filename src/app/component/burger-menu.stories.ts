import type { Meta, StoryObj } from '@storybook/angular';
import { BurgerMenuComponent } from './burger-menu.component';

const meta: Meta<BurgerMenuComponent> = {
  title: 'Formulare/Felder/Menü',
  component: BurgerMenuComponent,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<BurgerMenuComponent>;

export const Standard: Story = {
  args: {
    items: ['text 1', 'text 2', 'text 3'],
  },
};
