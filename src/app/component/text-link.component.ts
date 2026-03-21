import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-link',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p class="mb-0">
      {{ text }}
      <a
        [href]="href"
        class="link-dark text-decoration-underline"
        [attr.target]="target"
        [attr.rel]="rel"
        [attr.aria-label]="ariaLabel || null"
      >
        <span>{{ linkText }}</span>
        <span *ngIf="suffixIcon === 'pdf'" class="link-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7zm0 0v5h5" />
            <path d="M8 15h1.5a1.5 1.5 0 0 0 0-3H8v6" />
            <path d="M12 18h1.2a2.8 2.8 0 0 0 0-5.6H12z" />
            <path d="M16 12h3" />
            <path d="M16 15h2.5" />
          </svg>
        </span>
        <span *ngIf="suffixIcon === 'external'" class="link-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            <path d="M7 17 17 7" />
            <path d="M9 7h8v8" />
          </svg>
        </span>
        <span *ngIf="suffixIcon === 'pdf'" class="visually-hidden"> (PDF-Dokument)</span>
        <span *ngIf="target === '_blank'" class="visually-hidden"> (öffnet in neuem Tab)</span>
      </a>
    </p>
  `,
  styles: [`
    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    .link-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 1em;
      height: 1em;
      margin-left: 0.25rem;
      flex-shrink: 0;
      vertical-align: text-bottom;
    }

    .link-icon svg {
      width: 100%;
      height: 100%;
      stroke: currentColor;
      stroke-width: 1.75;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    a:focus-visible {
      outline: 3px solid #005fcc;
      outline-offset: 2px;
    }
  `],
})

export class TextLinkComponent {
  @Input() text = 'Mehr Informationen finden Sie unter';
  @Input() linkText = 'diesem Link';
  @Input() href = 'https://www.htw-berlin.de';
  @Input() ariaLabel = '';
  @Input() target: '_blank' | '_self' | '_parent' | '_top' = '_blank';
  @Input() rel = 'noopener noreferrer';
  @Input() suffixIcon: 'pdf' | 'external' | null = null;
}
