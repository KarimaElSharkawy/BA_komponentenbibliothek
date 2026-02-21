import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-absenden-button',
  standalone: true,
  template: `
    <button
      type="submit"
      class="w-100 btn btn-lg"
      [disabled]="disabled"
      [attr.aria-disabled]="disabled"
      [attr.aria-label]="ariaLabel"
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
export class AbsendenButtonComponent {
  @Input() disabled = false;
  @Input() label = 'Absenden';
  @Input() ariaLabel = 'Meldeformular absenden';
}
