import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-weiter-button',
  standalone: true,
  template: `
    <button
      type="button"
      class="w-100 btn btn-primary btn-lg"
      [disabled]="disabled"
      [attr.aria-disabled]="disabled"
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
export class WeiterButtonComponent {
  @Input() disabled = false;
  @Input() label = 'Weiter';
  @Input() ariaLabel = 'Weiter zur Zusammenfassung';
  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    this.clicked.emit();
  }
}
