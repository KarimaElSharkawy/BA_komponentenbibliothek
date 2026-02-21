import { Meta, StoryObj } from '@storybook/angular';
import { LogoComponent } from './logo.component';

const meta: Meta<LogoComponent> = {
  title: 'Formulare/Felder/Logo',
  component: LogoComponent,
};

export default meta;
type Story = StoryObj<LogoComponent>;

export const Accessible: Story = {
  args: {
    src: '/assets/images/Q11_HTW_Berlin_Logo_quer_pos_GRUEN_RGB.jpg',
    alt: 'HTW Berlin Logo',
    ariaLabel: 'Hochschule für Technik und Wirtschaft Berlin',
    width: 300,
    height: 120,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-logo
        [src]="src"
        [alt]="alt"
        [ariaLabel]="ariaLabel"
        [width]="width"
        [height]="height"
      ></app-logo>
    `,
  }),
};
