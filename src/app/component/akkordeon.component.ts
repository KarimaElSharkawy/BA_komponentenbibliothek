import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

let akkordeonInstanceCounter = 0;

export interface AkkordeonItem {
  title: string;
  content: readonly string[];
  open?: boolean;
}

@Component({
  selector: 'app-akkordeon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="akkordeon" [attr.aria-label]="ariaLabel">
      <ul class="akkordeon-list">
        @for (item of items; track item.title; let index = $index) {
          <li class="akkordeon-item">
            <details class="akkordeon-panel" [open]="item.open">
              <summary class="akkordeon-summary" [attr.id]="summaryId(index)">
                <span class="akkordeon-title">{{ item.title }}</span>
                <span class="akkordeon-icon" aria-hidden="true"></span>
              </summary>

              <div class="akkordeon-content" [attr.aria-labelledby]="summaryId(index)">
                @for (paragraph of item.content; track paragraph) {
                  <p class="akkordeon-text">{{ paragraph }}</p>
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

      .akkordeon-panel {
        border: 1px solid #2E7D32;
        border-radius: 0.75rem;
        background: #ffffff;
        overflow: hidden;
      }

      .akkordeon-summary {
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

      .akkordeon-summary::-webkit-details-marker {
        display: none;
      }

      .akkordeon-summary::marker {
        content: '';
      }

      .akkordeon-summary:focus-visible {
        outline: 3px solid #005fcc;
        outline-offset: -3px;
      }

      .akkordeon-title {
        flex: 1;
      }

      .akkordeon-icon {
        position: relative;
        width: 2rem;
        height: 2rem;
        flex: 0 0 auto;
        display: inline-block;
        color: #ffffff;
        background: #2E7D32;
        border: 2.5px solid #2E7D32;
        border-radius: 999px;
      }

      .akkordeon-icon::before,
      .akkordeon-icon::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0.875rem;
        height: 2.5px;
        background: currentColor;
        transform: translate(-50%, -50%);
      }

      .akkordeon-icon::after {
        width: 2.5px;
        height: 0.875rem;
      }

      .akkordeon-panel[open] .akkordeon-icon::after {
        display: none;
      }

      .akkordeon-content {
        padding: 1rem 1.25rem 1.25rem;
      }

      .akkordeon-text {
        margin: 0;
        color: #1f2933;
        line-height: 1.5;
      }

      .akkordeon-text + .akkordeon-text {
        margin-top: 0.75rem;
      }

      @media (prefers-reduced-motion: reduce) {
        .akkordeon-icon::before,
        .akkordeon-icon::after {
          transition: none;
        }
      }
    `,
  ],
})
export class AkkordeonComponent {
  private readonly instanceId = ++akkordeonInstanceCounter;
  @Input() ariaLabel = 'Akkordeon';
  @Input() items: readonly AkkordeonItem[] = [];
  private customIdPrefix: string | null = null;

  @Input()
  set idPrefix(value: string | null | undefined) {
    const normalizedValue = value?.trim();
    this.customIdPrefix = normalizedValue ? normalizedValue : null;
  }

  get idPrefix(): string {
    return this.customIdPrefix ?? `akkordeon-${this.instanceId}`;
  }

  summaryId(index: number): string {
    return `${this.idPrefix}-summary-${index}`;
  }
}
