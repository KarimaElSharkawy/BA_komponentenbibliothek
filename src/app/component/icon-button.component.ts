import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  template: `
    <button
      type="button"
      class="icon-button"
      [attr.aria-label]="ariaLabel"
      (click)="onClick()"
    >
      <svg
        class="icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M15 5L8 12L15 19" />
      </svg>
    </button>
  `,
  styles: [
    `
    .icon-button {
      width: 48px;
      height: 48px;
      border: 0;
      padding: 0;
      background: transparent;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #000000;
    }
    .icon-button:hover {
      color: #003d7a;
    }

    .icon {
      width: 28px;
      height: 28px;
      stroke: currentColor;
      stroke-width: 2.5;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  `,
  ],
})
export class IconButtonComponent {
  @Input() ariaLabel = 'Zurück';
  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    this.clicked.emit();
  }
}
