import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-abbreviation',
  standalone: true,
  template: `
    <p>
      <abbr [title]="title">{{ text }}</abbr>
    </p>
  `,
  styles: [
    `
    abbr {
      cursor: help;
      text-decoration: underline dotted;
    }
  `,
  ],
})
export class AbbreviationComponent {
  @Input() text = 'FAQ';
  @Input() title = 'Frequently Asked Questions';
}
