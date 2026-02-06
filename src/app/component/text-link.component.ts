import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-link',
  standalone: true,
  template: `
    <p class="mb-0">
      {{ text }}
      <a
        [href]="href"
        class="link-dark text-decoration-underline"
        [attr.target]="target"
        [attr.rel]="rel"
        [attr.aria-label]="ariaLabel || linkText"
      >
        {{ linkText }}
      </a>
    </p>
  `,
})
export class TextLinkComponent {
  @Input() text = 'Mehr Informationen finden Sie unter';
  @Input() linkText = 'diesem Link';
  @Input() href = 'https://www.htw-berlin.de';
  @Input() ariaLabel = '';
  @Input() target: '_blank' | '_self' | '_parent' | '_top' = '_blank';
  @Input() rel = 'noopener noreferrer';
}
