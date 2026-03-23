import { Component, Input } from '@angular/core';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

@Component({
  selector: 'app-heading',
  standalone: true,
  template: `
    @switch (tag) {
      @case ('h1') {
        <h1 class="mb-0">{{ text }}</h1>
      }
      @case ('h2') {
        <h2 class="mb-0">{{ text }}</h2>
      }
      @case ('h3') {
        <h3 class="mb-0">{{ text }}</h3>
      }
      @case ('h4') {
        <h4 class="mb-0">{{ text }}</h4>
      }
      @case ('h5') {
        <h5 class="mb-0">{{ text }}</h5>
      }
      @default {
        <h6 class="mb-0">{{ text }}</h6>
      }
    }
  `,
})
export class HeadingComponent {
  @Input() text = 'Ueberschrift';
  @Input() tag: HeadingTag = 'h2';
}
