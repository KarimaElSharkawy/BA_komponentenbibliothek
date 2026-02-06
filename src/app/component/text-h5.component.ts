import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-h5',
  standalone: true,
  template: `
    <h5 class="mb-0">{{ text }}</h5>
  `,
})
export class TextH5Component {
  @Input() text = 'Überschrift H5';
}
