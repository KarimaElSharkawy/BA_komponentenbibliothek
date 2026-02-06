import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-h2',
  standalone: true,
  template: `
    <h2 class="mb-0">{{ text }}</h2>
  `,
})
export class TextH2Component {
  @Input() text = 'Überschrift H2';
}
