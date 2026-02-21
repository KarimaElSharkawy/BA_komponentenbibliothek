import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-text',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <a
      *ngIf="interactive; else textOnly"
      [routerLink]="href"
      routerLinkActive="active"
      [routerLinkActiveOptions]="{ exact: true }"
      class="nav-text-link"
    >
      {{ text }}
    </a>
    <ng-template #textOnly>
      <span class="nav-text-link nav-text-static">{{ text }}</span>
    </ng-template>
  `,
  styles: [`
    .nav-text-link {
      color: #555555;
      text-decoration: none;
      font-size: 1rem;
      transition: color 0.2s ease;
      cursor: pointer;
    }

    .nav-text-link:hover {
      color: #000000;
    }

    .nav-text-link.active {
      color: #2E7D32;
      font-weight: 600;
    }

    .nav-text-static {
      cursor: default;
    }
  `],
})
export class NavTextComponent {
  @Input() text = 'Link';
  @Input() href = '';
  @Input() interactive = true;
}
