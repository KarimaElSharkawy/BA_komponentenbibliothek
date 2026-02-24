import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  standalone: true,
  template: `
    @switch (normalizedLevel) {
      @case (1) {
        <h1 class="mb-0">{{ text }}</h1>
      }
      @case (2) {
        <h2 class="mb-0">{{ text }}</h2>
      }
      @case (3) {
        <h3 class="mb-0">{{ text }}</h3>
      }
      @case (4) {
        <h4 class="mb-0">{{ text }}</h4>
      }
      @default {
        <h5 class="mb-0">{{ text }}</h5>
      }
    }
  `,
})
/**
 * Komponente: Rendert semantische Ueberschriften H1 bis H5 fuer Screenreader und WCAG.
 */
export class HeadingComponent {
  @Input() text = 'Überschrift';
  @Input() level: 1 | 2 | 3 | 4 | 5 = 2;

  get normalizedLevel(): 1 | 2 | 3 | 4 | 5 {
    const level = Number(this.level);
    if (level < 1) {
      return 1;
    }
    if (level > 5) {
      return 5;
    }
    return level as 1 | 2 | 3 | 4 | 5;
  }
}
