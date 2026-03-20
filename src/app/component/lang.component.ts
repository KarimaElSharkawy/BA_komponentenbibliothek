import { CommonModule, DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

type LangOption = {
  code: string;
  label: string;
  shortLabel?: string;
};

let langComponentIdCounter = 0;

@Component({
  selector: 'app-lang',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      #langTrigger
      type="button"
      class="lang-trigger"
      (click)="toggleMenu()"
      aria-haspopup="menu"
      [attr.aria-expanded]="isOpen"
      [attr.aria-controls]="isOpen ? menuId : null"
      [attr.aria-label]="ariaLabel"
    >
      <span class="lang-label" [attr.lang]="language">{{ currentLabel }}</span>
      <span class="lang-caret" aria-hidden="true"></span>
    </button>

    <div
      [hidden]="!isOpen"
      [id]="menuId"
      class="lang-menu"
      role="menu"
      [attr.aria-label]="menuAriaLabel"
      (keydown.escape)="closeMenu(langTrigger)"
    >
      <div class="lang-dropdown">
        <button
          *ngFor="let option of availableLanguages"
          type="button"
          class="dropdown-item"
          role="menuitem"
          [attr.lang]="option.code"
          (click)="selectLanguage(option.code)"
        >
          {{ option.label }}
        </button>
      </div>
    </div>
  `,
  styles: [`
    :host {
      position: relative;
      display: inline-block;
    }

    .lang-trigger {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.35rem;
      border: 0;
      background: transparent;
      padding: 0;
      color: #555555;
      font: inherit;
      cursor: pointer;
      transition: color 0.2s ease;
    }

    .lang-trigger:hover {
      color: #000000;
    }

    .lang-label {
      line-height: 1.2;
    }

    .lang-caret {
      width: 0;
      height: 0;
      border-left: 0.25rem solid transparent;
      border-right: 0.25rem solid transparent;
      border-top: 0.3125rem solid currentColor;
      margin-top: 0.125rem;
    }

    .lang-menu {
      position: absolute;
      bottom: calc(100% + 0.5rem);
      left: 50%;
      transform: translateX(-50%);
      z-index: 1000;
    }

    .lang-dropdown {
      background: #ffffff;
      border: 0.0625rem solid #e9ecef;
      border-radius: 0.25rem;
      box-shadow: 0 0.375rem 1.125rem rgba(0, 0, 0, 0.08);
      min-width: 10rem;
      overflow: hidden;
    }

    .dropdown-item {
      display: block;
      width: 100%;
      padding: 0.375rem 1rem;
      color: #212529;
      background: transparent;
      border: 0;
      text-align: left;
      cursor: pointer;
      font-size: 0.9375rem;
    }

    .dropdown-item:hover {
      background: #f8f9fa;
    }

    .dropdown-item[aria-checked='true'] {
      font-weight: 600;
    }
  `],
})
export class LangComponent implements OnInit, OnChanges {
  private readonly instanceId = ++langComponentIdCounter;

  @Input() language = 'de';
  @Input() displayMode: 'short' | 'long' = 'long';
  @Input() ariaLabel = 'Sprache auswählen';
  @Input() menuAriaLabel = 'Sprachauswahl';
  @Input() languages: readonly LangOption[] = [
    { code: 'de', label: 'Deutsch', shortLabel: 'DE' },
    { code: 'en', label: 'English', shortLabel: 'EN' },
  ];
  @Output() languageChange = new EventEmitter<string>();

  isOpen = false;
  readonly menuId = `lang-menu-${this.instanceId}`;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly hostElement: ElementRef<HTMLElement>,
  ) {}

  ngOnInit(): void {
    this.syncDocumentLanguage();
  }

  ngOnChanges(): void {
    this.syncDocumentLanguage();
  }

  get currentLabel(): string {
    const activeLanguage = this.languages.find((option) => option.code === this.language);

    if (!activeLanguage) {
      return this.displayMode === 'short' ? this.language.toUpperCase() : this.language;
    }

    return this.displayMode === 'short'
      ? (activeLanguage.shortLabel ?? activeLanguage.code.toUpperCase())
      : activeLanguage.label;
  }

  get availableLanguages(): readonly LangOption[] {
    return this.languages.filter((option) => option.code !== this.language);
  }

  toggleMenu(): void {
    if (!this.isOpen && this.availableLanguages.length === 0) {
      return;
    }

    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      queueMicrotask(() => this.focusFirstMenuItem());
    }
  }

  selectLanguage(languageCode: string): void {
    this.language = languageCode;
    this.isOpen = false;
    this.syncDocumentLanguage();
    this.languageChange.emit(languageCode);
    this.focusTrigger();
  }

  closeMenu(trigger: HTMLButtonElement): void {
    this.isOpen = false;
    trigger.focus();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.isOpen) {
      return;
    }

    if (!this.hostElement.nativeElement.contains(event.target as Node)) {
      this.isOpen = false;
    }
  }

  private syncDocumentLanguage(): void {
    const rootElement = this.document?.documentElement;

    if (!rootElement || !this.language) {
      return;
    }

    rootElement.setAttribute('lang', this.language);
  }

  private focusFirstMenuItem(): void {
    const firstMenuItem = this.hostElement.nativeElement.querySelector<HTMLButtonElement>('.dropdown-item');
    firstMenuItem?.focus();
  }

  private focusTrigger(): void {
    const trigger = this.hostElement.nativeElement.querySelector<HTMLButtonElement>('.lang-trigger');
    trigger?.focus();
  }
}
