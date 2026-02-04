import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [FormsModule],
  template: `
    <footer class="footer desktop-footer">
      <nav aria-label="Hauptnavigation">
        <a
          href="https://antidis.f4.htw-berlin.de/"
          aria-label="Zur Startseite wechseln"
          [class.active]="activePage === 'startseite'"
          [attr.aria-current]="activePage === 'startseite' ? 'page' : null"
        >
          Startseite
        </a>
        <a
          href="https://antidis.f4.htw-berlin.de/imprint"
          aria-label="Zum Impressum wechseln"
          [class.active]="activePage === 'impressum'"
          [attr.aria-current]="activePage === 'impressum' ? 'page' : null"
        >
          Impressum
        </a>
        <a
          href="https://antidis.f4.htw-berlin.de/privacypolicy"
          aria-label="Zu den Datenschutzhinweisen wechseln"
          [class.active]="activePage === 'datenschutz'"
          [attr.aria-current]="activePage === 'datenschutz' ? 'page' : null"
        >
          Datenschutz
        </a>
        <a
          href="https://antidis.f4.htw-berlin.de/login-forwarder"
          aria-label="Zum Admin-Bereich wechseln"
          [class.active]="activePage === 'admin'"
          [attr.aria-current]="activePage === 'admin' ? 'page' : null"
        >
          Admin
        </a>

        <label class="visually-hidden" for="language-desktop">Sprache auswählen</label>
        <select id="language-desktop" [(ngModel)]="selectedLanguage">
          <option value="de">Deutsch</option>
          <option value="en">English</option>
        </select>
      </nav>
    </footer>
  `,
  styles: [`
    .footer {
      position: sticky;
      bottom: 0;
      width: 100%;
      background: #f8f9fa;
      padding: 12px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 14px;
      left: 0;
      z-index: 10;
    }

    .desktop-footer nav {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    a {
      text-decoration: none;
      color: #344054;
    }

    a:hover {
      color: #1f5f00;
    }

    a.active {
      text-decoration: underline;
      text-underline-offset: 3px;
      font-weight: 600;
    }

    select {
      border: none;
      background: none;
      cursor: pointer;
      color: #344054;
    }

    a:focus-visible,
    select:focus-visible {
      outline: 2px solid #1f5f00;
      outline-offset: 2px;
      border-radius: 4px;
    }

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
  `]
})
export class NavigationComponent {
  @Input() activePage: 'startseite' | 'impressum' | 'datenschutz' | 'admin' = 'startseite';
  selectedLanguage: 'de' | 'en' = 'de';
}
