import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  template: `
    <img
      [src]="src"
      [alt]="alt"
      [width]="width"
      [height]="height"
      class="logo"
      [attr.aria-label]="ariaLabel"
    />
  `,
  styles: [`
    .logo {
      display: block;
      max-width: 100%;
      height: auto;
    }
  `],
})
export class LogoComponent {
  @Input() src = '/assets/images/Q11_HTW_Berlin_Logo_quer_pos_GRUEN_RGB.jpg';
  @Input() alt = 'HTW Berlin Logo';
  @Input() ariaLabel = 'Hochschule für Technik und Wirtschaft Berlin';
  @Input() width = 300;
  @Input() height = 120;
}
