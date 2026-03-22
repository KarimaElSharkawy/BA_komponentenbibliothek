import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';
import { DropdownComponent } from './dropdown.component';
import { EmailInputComponent } from './email-input.component';
import { NameInputComponent } from './name-input.component';
import { TextareaComponent } from './textarea.component';
import { HeadingComponent } from './heading.component';
import { ButtonComponent } from './button.component';
import { LogoComponent } from './logo.component';


const meta: Meta = {
  title: 'Formulare/Showcase/Meldeformular',
  decorators: [
    moduleMetadata({
      imports: [
        CheckboxComponent,
        DropdownComponent,
        EmailInputComponent,
        NameInputComponent,
        TextareaComponent,
        HeadingComponent,
        ButtonComponent,
        LogoComponent,
      ],
    }),
  ],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

export const Standard: Story = {
  render: () => ({
    props: {
      contactConsent: false,
      gruppeValue: '',
      freitextValue: '',
      emailValue: '',
      datenschutzAccepted: false,
      isWeiterDisabled: (
        gruppeValue: string,
        freitextValue: string,
        contactConsent: boolean,
        emailValue: string,
        datenschutzAccepted: boolean
      ) => {
        const normalizedFreitext = freitextValue.trim();
        const normalizedEmail = emailValue.trim();
        const isEmailValid =
          !contactConsent || (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail) && normalizedEmail.length > 0);

        return !(
          !!gruppeValue &&
          normalizedFreitext.length >= 10 &&
          isEmailValid &&
          datenschutzAccepted
        );
      },
    },
    template: `
      <main class="container" aria-label="Meldeformular">
        <div class="mb-5">
          <app-logo
            src="/assets/images/Q11_HTW_Berlin_Logo_quer_pos_GRUEN_RGB.jpg"
            alt="HTW Berlin Logo"
            [width]="350"
            [height]="140"
          ></app-logo>
        </div>
        <div>
          <header class="header position-relative d-flex align-items-center justify-content-center mb-3">
            <div class="position-absolute start-0">
              <app-button ariaLabel="Zurück" [iconOnly]="true"></app-button>
            </div>
            <div class="text-center">
              <app-heading tag="h1" text="Meldeformular"></app-heading>
            </div>
          </header>

          <form class="d-grid gap-3" aria-label="Meldeformular Beispiel">
            <app-dropdown
              controlId="showcase-gruppe"
              label="Zu welcher Gruppe gehören Sie?"
              placeholder="Bitte auswählen"
              [options]="['Option 1', 'Option 2', 'Option 3']"
              [required]="true"
              (valueChange)="gruppeValue = $event"
              errorText="Bitte wählen Sie eine Mitgliedergruppe aus."
              errorId="showcase-gruppe-error"
            ></app-dropdown>

            <app-textarea
              id="showcase-freitext"
              label="Bitte schildern Sie den Vorfall möglichst detailliert. (Was ist passiert? Wann und wo? Wer war beteiligt?)"
              [rows]="4"
              [required]="true"
              [minlength]="10"
              placeholder="Bitte beschreiben Sie den Vorfall."
              requiredErrorId="showcase-freitext-required-error"
              requiredErrorText="Bitte geben Sie einen Freitext ein."
              minlengthErrorId="showcase-freitext-minlength-error"
              minlengthErrorText="Der Freitext muss mindestens 10 Zeichen lang sein."
              (valueChange)="freitextValue = $event"
            ></app-textarea>

            <app-dropdown
              controlId="showcase-kategorie"
              label="Welcher Kategorie würden Sie diese Art von Diskriminierung zuordnen?"
              placeholder="Bitte auswählen"
              [options]="['Kategorie 1', 'Kategorie 2', 'Kategorie 3']"
              [required]="false"
              [showOptionalIndicator]="true"
            ></app-dropdown>

            <app-checkbox
              id="showcase-kontakt"
              label="Bitte nehmen Sie mit mir Kontakt auf."
              [required]="false"
              (valueChange)="contactConsent = $event"
            ></app-checkbox>

            <div *ngIf="contactConsent">
              <app-name-input
                id="showcase-nachname"
                label="Nachname"
                [required]="false"
                [showOptionalIndicator]="true"
              ></app-name-input>

              <app-name-input
                id="showcase-vorname"
                label="Vorname"
                [required]="false"
                [showOptionalIndicator]="true"
              ></app-name-input>

              <app-email-input
                id="showcase-email"
                label="E-Mail"
                [required]="true"
                requiredErrorId="showcase-email-required-error"
                requiredErrorText="Bitte geben Sie Ihre E-Mail-Adresse ein."
                (valueChange)="emailValue = $event"
              ></app-email-input>
            </div>

            <div class="d-grid gap-2" aria-label="Datenschutzhinweis und Einverständniserklärung" role="region">
              <div>
                <p class="mb-1 fw-semibold">Datenschutzhinweis und Einverständniserklärung</p>
                <p class="mb-0">
                  Ich erkläre mich damit einverstanden, dass Daten zur Bearbeitung meines Anliegens
                  von der HTW Berlin erhoben, gespeichert, verarbeitet und intern übermittelt
                  werden, siehe
                  <a
                    class="link-dark text-decoration-underline"
                    href="https://antidis.f4.htw-berlin.de/meldeformular#:~:text=Datenschutzinformationen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Datenschutzinformationen</span>
                    <span
                      aria-hidden="true"
                      class="d-inline-flex align-items-center ms-1"
                      style="width: 1em; height: 1em; vertical-align: text-bottom;"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        focusable="false"
                        style="width: 100%; height: 100%; stroke: currentColor; stroke-width: 1.75; fill: none; stroke-linecap: round; stroke-linejoin: round;"
                      >
                        <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7zm0 0v5h5" />
                        <path d="M8 15h1.5a1.5 1.5 0 0 0 0-3H8v6" />
                        <path d="M12 18h1.2a2.8 2.8 0 0 0 0-5.6H12z" />
                        <path d="M16 12h3" />
                        <path d="M16 15h2.5" />
                      </svg>
                    </span>
                    <span
                      style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;"
                    >
                      (PDF-Dokument, öffnet in neuem Tab)
                    </span>
                  </a>
                  sowie in der
                  <a
                    class="link-dark text-decoration-underline"
                    href="https://antidis.f4.htw-berlin.de/meldeformular#:~:text=Antidiskriminierungsrichtlinie"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Antidiskriminierungsrichtlinie</span>
                    <span
                      aria-hidden="true"
                      class="d-inline-flex align-items-center ms-1"
                      style="width: 1em; height: 1em; vertical-align: text-bottom;"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        focusable="false"
                        style="width: 100%; height: 100%; stroke: currentColor; stroke-width: 1.75; fill: none; stroke-linecap: round; stroke-linejoin: round;"
                      >
                        <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7zm0 0v5h5" />
                        <path d="M8 15h1.5a1.5 1.5 0 0 0 0-3H8v6" />
                        <path d="M12 18h1.2a2.8 2.8 0 0 0 0-5.6H12z" />
                        <path d="M16 12h3" />
                        <path d="M16 15h2.5" />
                      </svg>
                    </span>
                    <span
                      style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;"
                    >
                      (PDF-Dokument, öffnet in neuem Tab)
                    </span>
                  </a>
                  der HTW Berlin (§10).
                </p>
              </div>

              <app-checkbox
                id="showcase-datenschutz"
                label="Ich stimme der Datenschutz- und Einverständniserklärung zu."
                [required]="true"
                errorId="showcase-datenschutz-error"
                errorText="Bitte stimmen Sie der Datenschutz- und Einverständniserklärung zu."
                (valueChange)="datenschutzAccepted = $event"
              ></app-checkbox>
            </div>

            <div id="bttn-container">
              <app-button
                label="Weiter"
                ariaLabel="Weiter zur Zusammenfassung"
                [disabled]="isWeiterDisabled(gruppeValue, freitextValue, contactConsent, emailValue, datenschutzAccepted)"
              ></app-button>
            </div>
          </form>
        </div>
      </main>
    `,
  }),
};
