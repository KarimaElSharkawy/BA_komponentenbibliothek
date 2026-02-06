import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-h1',
  standalone: true,
  template: `
    <h1 class="mb-0">{{ text }}</h1>
  `,
})
export class TextH1Component {
  @Input() text = 'Überschrift H1';
}
