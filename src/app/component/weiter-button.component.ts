import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-weiter-button',
  standalone: true,
  template: `
    <button
      type="button"
      class="w-100 btn btn-lg"
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
      background-color: #0052a3;
      border-color: #0052a3;
      color: #ffffff;
    }
    button:hover:not(:disabled) {
      background-color: #003d7a;
      border-color: #003d7a;
      color: #ffffff;
    }
    button:active:not(:disabled) {
      background-color: #002e5a;
      border-color: #002e5a;
      color: #ffffff;
    }
    button:disabled {
      background-color: #cccccc;
      border-color: #cccccc;
      color: #666666;
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
