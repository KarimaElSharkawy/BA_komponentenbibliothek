import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-paragraph',
  standalone: true,
  template: `
    <p class="mb-0">{{ text }}</p>
  `,
})
export class TextParagraphComponent {
  @Input() text = 'Dies ist ein Beispielabsatz mit Fließtext.';
}
