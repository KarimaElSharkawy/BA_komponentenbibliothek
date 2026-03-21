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
      width: 3rem;
      height: 3rem;
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
    .icon-button:focus-visible {
      outline: 3px solid #005fcc;
      outline-offset: 2px;
    }

    .icon {
      width: 1.75rem;
      height: 1.75rem;
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
