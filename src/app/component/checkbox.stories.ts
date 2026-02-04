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

export const Kontaktaufnahme: Story = {
  args: {
    id: 'kontakt',
    label: 'Bitte nehmen Sie mit mir Kontakt auf.',
    required: false,
  },
};
