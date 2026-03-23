import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    <button
      type="button"
      class="btn"
      [class.btn-lg]="!iconOnly"
      [class.w-100]="!iconOnly"
      [class.icon-button]="iconOnly"
      [disabled]="disabled"
      [attr.aria-label]="ariaLabel || null"
      (click)="onClick()"
    >
      @if (iconOnly) {
        <i class="bi bi-chevron-left icon" aria-hidden="true"></i>
      } @else {
        <span>{{ label }}</span>
      }
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
    button:focus-visible {
      outline: 3px solid #005fcc;
      outline-offset: 2px;
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
    .icon-button {
      width: 3rem;
      padding: 0;
      background: transparent;
      border: 0;
      color: #000000;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .icon-button:hover:not(:disabled) {
      background: transparent;
      border-color: transparent;
      color: #003d7a;
    }
    .icon-button:active:not(:disabled) {
      background: transparent;
      border-color: transparent;
      color: #002e5a;
    }
    .icon {
      font-size: 1.75rem;
      line-height: 1;
    }
  `],
})

export class ButtonComponent {
  @Input() disabled = false;
  @Input() label = '';
  @Input() ariaLabel = '';
  @Input() iconOnly = false;
  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    this.clicked.emit();
  }
}
