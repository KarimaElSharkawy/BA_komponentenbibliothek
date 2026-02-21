import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-zurueck-button',
  standalone: true,
  template: `
    <button
      type="button"
      class="w-100 btn btn-lg mb-2"
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
      background-color: #5a5a5a;
      border-color: #5a5a5a;
      color: #ffffff;
    }
    button:hover {
      background-color: #3d3d3d;
      border-color: #3d3d3d;
      color: #ffffff;
    }
    button:active {
      background-color: #2a2a2a;
      border-color: #2a2a2a;
      color: #ffffff;
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
