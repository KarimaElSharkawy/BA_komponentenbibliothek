import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface AkkordeonItem {
  title: string;
  content: readonly string[];
}

@Component({
  selector: 'app-akkordeon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="akkordeon" [attr.aria-label]="ariaLabel">
      <ul class="akkordeon-list">
        @for (item of items; track item.title) {
          <li class="akkordeon-item">
            <details class="faq-item">
              <summary class="faq-toggle">
                <span class="faq-question">{{ item.title }}</span>
                <span class="faq-icon" aria-hidden="true"></span>
              </summary>

              <div class="faq-answer">
                @for (paragraph of item.content; track paragraph) {
                  <p class="faq-answer-text">{{ paragraph }}</p>
                }
              </div>
            </details>
          </li>
        }
      </ul>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .akkordeon-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 0.75rem;
      }

      .faq-item {
        border: 1px solid #2E7D32;
        border-radius: 0.75rem;
        background: #ffffff;
        overflow: hidden;
      }

      .faq-toggle {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        width: 100%;
        padding: 1rem 1.25rem;
        cursor: pointer;
        font-weight: 600;
        color: #0f2f25;
        background: #f3f8f5;
      }

      .faq-toggle::-webkit-details-marker {
        display: none;
      }

      .faq-toggle::marker {
        content: '';
      }

      .faq-toggle:focus-visible {
        outline: 3px solid #005fcc;
        outline-offset: -3px;
      }

      .faq-question {
        flex: 1;
      }

      .faq-icon {
        flex: 0 0 auto;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 1.5rem;
        font-size: 1.5rem;
        line-height: 1;
        color: #2E7D32;
      }

      .faq-icon::before {
        content: '+' / '';
      }

      details[open] .faq-icon::before {
        content: '−' / '';
      }

      .faq-answer {
        padding: 1rem 1.25rem 1.25rem;
      }

      .faq-answer-text {
        margin: 0;
        color: #1f2933;
        line-height: 1.5;
      }

      .faq-answer-text + .faq-answer-text {
        margin-top: 0.75rem;
      }
    `,
  ],
})
export class AkkordeonComponent {
  @Input() ariaLabel = 'Akkordeon';
  @Input() items: readonly AkkordeonItem[] = [];
}
