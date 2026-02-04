import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-zurueck-button',
  standalone: true,
  template: `
    <button
      type="button"
      class="w-100 btn btn-secondary btn-lg mb-2"
      [attr.aria-label]="ariaLabel"
      (click)="onClick()"
    >
      {{ label }}
    </button>
  `,
  styles: [`
    button {
      min-height: 3rem;
      display: block;
    }
  `],
})
export class ZurueckButtonComponent {
  @Input() label = 'Zurück';
  @Input() ariaLabel = 'Zurück zu den Meldedaten';
  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    this.clicked.emit();
  }
}
