import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-h3',
  standalone: true,
  template: `
    <h3 class="mb-0">{{ text }}</h3>
  `,
})
export class TextH3Component {
  @Input() text = 'Überschrift H3';
}
