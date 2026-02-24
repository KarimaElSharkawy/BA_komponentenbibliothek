import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NavTextComponent } from './nav-text.component';

type BurgerMenuEntry = string | { text: string; href?: string };
let burgerMenuIdCounter = 0;

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [CommonModule, NavTextComponent],
  template: `
    <div class="burger-menu">
      <button
        type="button"
        class="burger-button"
        (click)="isOpen = !isOpen"
        [attr.aria-expanded]="isOpen"
        [attr.aria-controls]="menuId"
        [attr.aria-label]="isOpen ? 'Menü schließen' : 'Menü öffnen'"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav [id]="menuId" [class]="menuClass" [hidden]="!isOpen" aria-label="Menüeinträge">
        <ul class="menu-items">
          <li class="menu-item" *ngFor="let item of normalizedItems">
            <app-nav-text *ngIf="item.href; else staticText" [text]="item.text" [href]="item.href"></app-nav-text>
            <ng-template #staticText>
              <span class="menu-item-text">{{ item.text }}</span>
            </ng-template>
          </li>
        </ul>
      </nav>
    </div>
  `,
  styles: [`
    .burger-menu {
      position: relative;
      display: inline-block;
    }

    .burger-button {
      width: 2.75rem;
      height: 2.5rem;
      border: 0.0625rem solid #dcdcdc;
      border-radius: 0.5rem;
      background: #ffffff;
      padding: 0.5rem;
      cursor: pointer;
      display: inline-flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .burger-button span {
      display: block;
      height: 0.125rem;
      background: #2a2a2a;
      border-radius: 999rem;
    }

    .menu-list {
      position: absolute;
      top: calc(100% + 0.5rem);
      left: 0;
      min-width: 10rem;
      background: #ffffff;
      border: 0.0625rem solid #e9ecef;
      border-radius: 0.375rem;
      box-shadow: 0 0.375rem 1.125rem rgba(0, 0, 0, 0.08);
      padding: 0.375rem;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      z-index: 1000;
    }

    .menu-list.menu-up {
      top: auto;
      bottom: calc(100% + 0.5rem);
    }

    .menu-item {
      list-style: none;
      width: 100%;
      text-align: left;
      padding: 0.125rem 0.25rem;
      border-radius: 0.25rem;
    }

    .menu-items {
      margin: 0;
      padding: 0;
    }

    .menu-item:hover {
      background: #f8f9fa;
    }

    .menu-item-text {
      display: inline-block;
      width: 100%;
      padding: 0.375rem 0.5rem;
      color: #212529;
    }
  `],
})

export class BurgerMenuComponent {
  @Input() items: readonly BurgerMenuEntry[] = ['text 1', 'text 2', 'text 3'];
  @Input() openDirection: 'down' | 'up' = 'down';

  isOpen = false;
  readonly menuId = `burger-menu-list-${++burgerMenuIdCounter}`;

  get normalizedItems(): { text: string; href?: string }[] {
    return this.items.map((item) => (typeof item === 'string' ? { text: item } : item));
  }

  get menuClass(): string {
    return this.openDirection === 'up' ? 'menu-list menu-up' : 'menu-list';
  }
}
