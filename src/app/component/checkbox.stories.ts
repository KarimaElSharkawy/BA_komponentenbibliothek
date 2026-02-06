import type { Meta, StoryObj } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';

const meta: Meta<CheckboxComponent> = {
  title: 'Formulare/Felder/Checkbox',
  component: CheckboxComponent,
  parameters: {
    layout: 'padded',
  },
};
 
export default meta;
type Story = StoryObj<CheckboxComponent>;

export const Required: Story = {
  args: {
    id: 'datenschutz-required',
    label: 'Ich habe die Hinweise gelesen.',
    required: true,
    errorId: 'datenschutz-required-error',
    errorText: 'Bitte bestätigen Sie dieses Feld.',
  },
};

export const Optional: Story = {
  args: {
    id: 'datenschutz-optional',
    label: 'Ich möchte weitere Informationen erhalten.',
    required: false,
  },
};
