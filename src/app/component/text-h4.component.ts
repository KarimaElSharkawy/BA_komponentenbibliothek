import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-h4',
  standalone: true,
  template: `
    <h4 class="mb-0">{{ text }}</h4>
  `,
})
export class TextH4Component {
  @Input() text = 'Überschrift H4';
}
