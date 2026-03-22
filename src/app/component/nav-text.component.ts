import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-text',
  standalone: true,
  imports: [RouterModule],
  template: `
    <a
      [hidden]="!interactive"
      [routerLink]="href"
      routerLinkActive="active"
      [routerLinkActiveOptions]="{ exact: true }"
      ariaCurrentWhenActive="page"
      class="nav-text-link"
    >
      {{ text }}
    </a>
    <span [hidden]="interactive" class="nav-text-link nav-text-static">{{ text }}</span>
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

    .nav-text-link:focus-visible {
      outline: 3px solid #005fcc;
      outline-offset: 2px;
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
