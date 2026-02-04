import type { Meta, StoryObj } from '@storybook/angular';
import { MeldeformularComponent } from './meldeformular.component';

const meta: Meta<MeldeformularComponent> = {
  title: 'Formulare/Meldeformular',
  component: MeldeformularComponent,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<MeldeformularComponent>;

export const Startzustand: Story = {
  args: {
    weiter: false,
    isLoggedIn: false,
    formData: {
      mitgliedergruppe: '',
      message: '',
      category: '',
      email: '',
      privacyConsent: false,
    },
  },
};

export const MitKontaktaufnahme: Story = {
  args: {
    weiter: false,
    isLoggedIn: true,
    formData: {
      mitgliedergruppe: 'Studierende',
      message: 'Dies ist eine Beispielmeldung mit ausreichend Text.',
      category: 'Diskriminierung',
      email: 'test@mail.de',
      privacyConsent: true,
    },
  },
};

export const Zusammenfassung: Story = {
  args: {
    weiter: true,
    isLoggedIn: true,
    formData: {
      mitgliedergruppe: 'Mitarbeitende',
      message: 'Ein Vorfall wird hier zusammengefasst dargestellt.',
      category: 'Belästigung',
      email: 'kontakt@mail.de',
      privacyConsent: true,
    },
  },
};
