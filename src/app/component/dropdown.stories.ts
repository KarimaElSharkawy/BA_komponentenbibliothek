import type { Meta, StoryObj } from '@storybook/angular';
import { DropdownComponent } from './dropdown.component';

const meta: Meta<DropdownComponent> = {
  title: 'Formulare/Felder/Dropdown',
  component: DropdownComponent,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<DropdownComponent>;

export const Standard: Story = {
  args: {
    id: 'gruppe',
    label: 'Mitgliedergruppe',
    placeholder: 'Bitte auswählen',
    options: ['Studierende', 'Mitarbeitende', 'Externe'],
    required: true,
    errorText: 'Bitte wählen Sie eine Mitgliedergruppe aus.',
    errorId: 'gruppe-error',
  },
};

export const Optional: Story = {
  args: {
    id: 'gruppe-optional',
    label: 'Mitgliedergruppe (optional)',
    placeholder: 'Bitte auswählen',
    options: ['Studierende', 'Mitarbeitende', 'Externe'],
    required: false,
  },
};
