import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-absenden-button',
  standalone: true,
  template: `
    <button
      type="submit"
      class="w-100 btn btn-primary btn-lg"
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
    }
  `],
})
export class AbsendenButtonComponent {
  @Input() disabled = false;
  @Input() label = 'Absenden';
  @Input() ariaLabel = 'Meldeformular absenden';
}
