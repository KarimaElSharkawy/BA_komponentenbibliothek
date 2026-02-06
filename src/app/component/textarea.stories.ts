import type { Meta, StoryObj } from '@storybook/angular';
import { TextareaComponent } from './textarea.component';

const meta: Meta<TextareaComponent> = {
  title: 'Formulare/Felder/Textfelder/Freitext',
  component: TextareaComponent,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<TextareaComponent>;

export const Required: Story = {
  args: {
    id: 'message',
    label: 'Schilderung',
    rows: 4,
    required: true,
    minlength: 10,
    placeholder: 'Bitte beschreiben Sie den Vorfall.',
    requiredErrorId: 'message-required-error',
    requiredErrorText: 'Bitte geben Sie eine Schilderung ein.',
    minlengthErrorId: 'message-minlength-error',
    minlengthErrorText: 'Die Schilderung muss mindestens 10 Zeichen lang sein.',
  },
};

export const Optional: Story = {
  args: {
    id: 'message-optional',
    label: 'Schilderung (optional)',
    rows: 4,
    required: false,
    placeholder: 'Bitte beschreiben Sie den Vorfall.',
  },
};
