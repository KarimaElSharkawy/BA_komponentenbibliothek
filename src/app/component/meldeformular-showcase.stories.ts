import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';
import { DropdownComponent } from './dropdown.component';
import { EmailInputComponent } from './email-input.component';
import { NameInputComponent } from './name-input.component';
import { TextareaComponent } from './textarea.component';
import { TextH1Component } from './text-h1.component';
import { TextLinkComponent } from './text-link.component';
import { ZurueckIconButtonComponent } from './zurueck-icon-button.component';
import { WeiterButtonComponent } from './weiter-button.component';
import { LogoComponent } from './logo.component';
import { ShowcaseComponent } from './showcase.component';

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
        TextH1Component,
        TextLinkComponent,
        ZurueckIconButtonComponent,
        WeiterButtonComponent,
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
      <div class="container">
        <div class="mb-5">
          <app-logo
            src="/assets/images/Q11_HTW_Berlin_Logo_quer_pos_GRUEN_RGB.jpg"
            alt="HTW Berlin Logo"
            ariaLabel="Hochschule für Technik und Wirtschaft Berlin"
            [width]="350"
            [height]="140"
          ></app-logo>
        </div>
        <div>
          <div class="header position-relative d-flex align-items-center justify-content-center mb-3">
            <div class="position-absolute start-0">
              <app-zurueck-icon-button ariaLabel="Zurück"></app-zurueck-icon-button>
            </div>
            <div class="text-center">
              <app-text-h1 text="Meldeformular"></app-text-h1>
            </div>
          </div>

          <form class="d-grid gap-3" aria-label="Meldeformular Beispiel">
            <app-dropdown
              id="showcase-gruppe"
              label="Zu welcher Gruppe gehören Sie?"
              placeholder="Bitte auswählen"
              [options]="['Studierende', 'Mitarbeitende', 'Externe']"
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
              id="showcase-kategorie"
              label="Welcher Kategorie würden Sie diese Art von Diskriminierung spontan zuordnen? (optional)"
              placeholder="Bitte auswählen"
              [options]="['Kategorie 1', 'Kategorie 2', 'Kategorie 3']"
              [required]="false"
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
                label="Nachname (optional)"
                [required]="false"
              ></app-name-input>

              <app-name-input
                id="showcase-vorname"
                label="Vorname (optional)"
                [required]="false"
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
                    Datenschutzinformationen
                  </a>
                  sowie in der
                  <a
                    class="link-dark text-decoration-underline"
                    href="https://antidis.f4.htw-berlin.de/meldeformular#:~:text=Antidiskriminierungsrichtlinie"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Antidiskriminierungsrichtlinie
                  </a>
                  der HTW Berlin (§10).
                </p>
              </div>

              <app-checkbox
                id="showcase-datenschutz"
                label="Ich stimme der Datenschutz- und Einverständniserklärung zu. *"
                [required]="true"
                errorId="showcase-datenschutz-error"
                errorText="Bitte stimmen Sie der Datenschutz- und Einverständniserklärung zu."
                (valueChange)="datenschutzAccepted = $event"
              ></app-checkbox>
            </div>

            <div id="bttn-container">
              <app-weiter-button
                label="Weiter"
                ariaLabel="Weiter zur Zusammenfassung"
                [disabled]="isWeiterDisabled(gruppeValue, freitextValue, contactConsent, emailValue, datenschutzAccepted)"
              ></app-weiter-button>
            </div>
          </form>
        </div>
      </div>
    `,
  }),
};
