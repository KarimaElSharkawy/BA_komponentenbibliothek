import type { Meta, StoryObj } from '@storybook/angular';
import { NameInputComponent } from './name-input.component';

const meta: Meta<NameInputComponent> = {
  title: 'Formulare/Felder/Textfelder/Name',
  component: NameInputComponent,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<NameInputComponent>;

export const Required: Story = {
  args: {
    id: 'name',
    label: 'Name',
    placeholder: 'Max',
    required: true,
    errorId: 'name-error',
    errorText: 'Bitte geben Sie Ihren Namen ein.',
  },
};

export const Optional: Story = {
  args: {
    id: 'name-optional',
    label: 'Name (optional)',
    placeholder: 'Max',
    required: false,
  },
};
