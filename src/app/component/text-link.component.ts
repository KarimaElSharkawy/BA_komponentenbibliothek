import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-link',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [class.d-inline]="inline" [class.d-block]="!inline">
      <span *ngIf="text">{{ text }} </span>
      <a
        [href]="href"
        class="link-dark text-decoration-underline"
        [attr.target]="target"
        [attr.rel]="rel"
        [attr.aria-label]="ariaLabel || null"
      >
        <span>{{ linkText }}</span>
        <span *ngIf="suffixIcon === 'pdf'" class="link-icon" aria-hidden="true">
          <i class="bi bi-filetype-pdf"></i>
        </span>
        <span *ngIf="suffixIcon === 'external'" class="link-icon" aria-hidden="true">
          <i class="bi bi-box-arrow-up-right"></i>
        </span>
        <span *ngIf="suffixIcon === 'pdf'" class="visually-hidden"> (PDF-Dokument)</span>
        <span *ngIf="target === '_blank'" class="visually-hidden"> (öffnet in neuem Tab)</span>
      </a>
    </span>
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

    .link-icon :is(svg, i) {
      font-size: 1em;
      line-height: 1;
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
  @Input() inline = false;
  @Input() target: '_blank' | '_self' | '_parent' | '_top' = '_blank';
  @Input() rel = 'noopener noreferrer';
  @Input() suffixIcon: 'pdf' | 'external' | null = null;
}
