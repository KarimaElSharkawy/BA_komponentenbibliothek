import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meldeformular',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container py-5">
      <main>
        <div class="py-5 text-center">
          <h1 class="h2">Meldeformular</h1>
          <p class="lead mb-0">
            Bitte füllen Sie das Formular aus. Ihre Angaben werden vertraulich behandelt.
          </p>
        </div>

        <div class="row justify-content-center">
          <div class="col-12 col-lg-8">
            <h2 id="formSectionTitle" class="h4 mb-3">
              {{ weiter ? 'Zusammenfassung' : 'Meldedaten' }}
            </h2>

            <form #form="ngForm" novalidate aria-labelledby="formSectionTitle">
              <div *ngIf="!weiter" class="row g-3">
                <div class="col-12">
                  <label for="gruppe" class="form-label">Mitgliedergruppe*</label>
                  <select
                    id="gruppe"
                    class="form-select"
                    name="gruppe"
                    required
                    aria-required="true"
                    [(ngModel)]="formData.mitgliedergruppe"
                    [attr.aria-invalid]="
                      gruppeCtrl.invalid && (gruppeCtrl.touched || gruppeCtrl.dirty) ? 'true' : null
                    "
                    [attr.aria-describedby]="
                      gruppeCtrl.invalid && (gruppeCtrl.touched || gruppeCtrl.dirty)
                        ? 'gruppe-error'
                        : null
                    "
                    #gruppeCtrl="ngModel"
                  >
                    <option value="" disabled>Bitte auswählen</option>
                    <option>Studierende</option>
                    <option>Mitarbeitende</option>
                    <option>Externe</option>
                  </select>
                  <div
                    id="gruppe-error"
                    class="invalid-feedback d-block"
                    *ngIf="gruppeCtrl.invalid && (gruppeCtrl.touched || gruppeCtrl.dirty)"
                    aria-live="polite"
                  >
                    Bitte wählen Sie eine Mitgliedergruppe aus.
                  </div>
                </div>

                <div class="col-12">
                  <label for="message" class="form-label">Schilderung*</label>
                  <textarea
                    id="message"
                    class="form-control"
                    rows="4"
                    name="message"
                    required
                    aria-required="true"
                    minlength="10"
                    [(ngModel)]="formData.message"
                    placeholder="Bitte beschreiben Sie den Vorfall."
                    [attr.aria-invalid]="
                      messageCtrl.invalid && (messageCtrl.touched || messageCtrl.dirty) ? 'true' : null
                    "
                    [attr.aria-describedby]="
                      messageCtrl.errors?.['required'] && (messageCtrl.touched || messageCtrl.dirty)
                        ? 'message-required-error'
                        : messageCtrl.errors?.['minlength'] &&
                            (messageCtrl.touched || messageCtrl.dirty)
                          ? 'message-minlength-error'
                          : null
                    "
                    #messageCtrl="ngModel"
                  ></textarea>
                  <div
                    id="message-required-error"
                    class="invalid-feedback d-block"
                    *ngIf="messageCtrl.errors?.['required'] && (messageCtrl.touched || messageCtrl.dirty)"
                    aria-live="polite"
                  >
                    Bitte geben Sie eine Schilderung ein.
                  </div>
                  <div
                    id="message-minlength-error"
                    class="invalid-feedback d-block"
                    *ngIf="messageCtrl.errors?.['minlength'] && (messageCtrl.touched || messageCtrl.dirty)"
                    aria-live="polite"
                  >
                    Die Schilderung muss mindestens 10 Zeichen lang sein.
                  </div>
                </div>

                <div class="col-12">
                  <label for="category" class="form-label">Kategorie (optional)</label>
                  <select
                    id="category"
                    class="form-select"
                    name="category"
                    [(ngModel)]="formData.category"
                  >
                    <option value="">Keine</option>
                    <option>Diskriminierung</option>
                    <option>Belästigung</option>
                  </select>
                </div>

                <div class="col-12">
                  <div class="form-check mb-2">
                    <input
                      id="kontakt"
                      type="checkbox"
                      class="form-check-input"
                      name="kontakt"
                      [(ngModel)]="isLoggedIn"
                    />
                    <label class="form-check-label" for="kontakt">
                      Bitte nehmen Sie mit mir Kontakt auf.
                    </label>
                  </div>
                </div>

                <div *ngIf="isLoggedIn" class="col-12">
                  <label for="email" class="form-label">E-Mail*</label>
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    [required]="isLoggedIn"
                    [attr.aria-required]="isLoggedIn ? 'true' : null"
                    [(ngModel)]="formData.email"
                    placeholder="name@beispiel.de"
                    [attr.aria-invalid]="
                      emailCtrl.invalid && (emailCtrl.touched || emailCtrl.dirty) ? 'true' : null
                    "
                    [attr.aria-describedby]="
                      emailCtrl.errors?.['required'] && (emailCtrl.touched || emailCtrl.dirty)
                        ? 'email-required-error'
                        : emailCtrl.errors?.['email'] && (emailCtrl.touched || emailCtrl.dirty)
                          ? 'email-format-error'
                          : null
                    "
                    #emailCtrl="ngModel"
                  />
                  <div
                    id="email-required-error"
                    class="invalid-feedback d-block"
                    *ngIf="emailCtrl.errors?.['required'] && (emailCtrl.touched || emailCtrl.dirty)"
                    aria-live="polite"
                  >
                    Bitte geben Sie Ihre E-Mail-Adresse ein.
                  </div>
                  <div
                    id="email-format-error"
                    class="invalid-feedback d-block"
                    *ngIf="emailCtrl.errors?.['email'] && (emailCtrl.touched || emailCtrl.dirty)"
                    aria-live="polite"
                  >
                    Bitte geben Sie eine gültige E-Mail-Adresse ein.
                  </div>
                </div>

                <div class="col-12">
                  <h3 class="h5 mb-2">Datenschutzhinweis und Einverständniserklärung</h3>
                  <p id="privacy-consent-text" class="mb-2 text-body">
                    Ich erkläre mich damit einverstanden, dass Daten zur Bearbeitung meines Anliegens
                    von der HTW Berlin erhoben, gespeichert, verarbeitet und intern übermittelt werden.
                    Siehe
                    <a
                      href="https://antidis.f4.htw-berlin.de/assets/HTW_Datenschutzinformationen_Fallintervention_Final.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="link-dark fw-semibold text-decoration-underline"
                      aria-label="Datenschutzinformationen als PDF, öffnet in neuem Tab"
                    >
                      Datenschutzinformationen
                    </a>
                    sowie in der
                    <a
                      href="https://www.htw-berlin.de/fileadmin/HTW/Zentral/Antidiskriminierung/Antidiskriminierungsrichtlinie-HTW-Berlin-R03_20.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="link-dark fw-semibold text-decoration-underline"
                      aria-label="Antidiskriminierungsrichtlinie der HTW Berlin als PDF, öffnet in neuem Tab"
                    >
                      Antidiskriminierungsrichtlinie der HTW Berlin (§10)
                    </a>
                    .
                  </p>

                  <div class="form-check">
                    <input
                      id="privacyConsent"
                      type="checkbox"
                      class="form-check-input"
                      name="privacyConsent"
                      required
                      aria-required="true"
                      [(ngModel)]="formData.privacyConsent"
                      [attr.aria-invalid]="
                        privacyConsentCtrl.invalid &&
                        (privacyConsentCtrl.touched || privacyConsentCtrl.dirty)
                          ? 'true'
                          : null
                      "
                      [attr.aria-describedby]="
                        privacyConsentCtrl.invalid &&
                        (privacyConsentCtrl.touched || privacyConsentCtrl.dirty)
                          ? 'privacy-consent-text privacy-consent-error'
                          : 'privacy-consent-text'
                      "
                      #privacyConsentCtrl="ngModel"
                    />
                    <label class="form-check-label" for="privacyConsent">
                      Ich stimme der Datenschutz- und Einverständniserklärung zu. *
                    </label>
                  </div>
                  <div
                    id="privacy-consent-error"
                    class="invalid-feedback d-block"
                    *ngIf="privacyConsentCtrl.invalid && (privacyConsentCtrl.touched || privacyConsentCtrl.dirty)"
                    aria-live="polite"
                  >
                    Bitte stimmen Sie der Datenschutz- und Einverständniserklärung zu.
                  </div>
                </div>

                <div class="col-12 pt-2">
                  <button
                    type="button"
                    class="w-100 btn btn-primary btn-lg"
                    [disabled]="!form.valid"
                    [attr.aria-disabled]="!form.valid"
                    aria-label="Weiter zur Zusammenfassung"
                    (click)="weiter = true"
                  >
                    Weiter
                  </button>
                </div>
              </div>

              <div *ngIf="weiter" class="card p-3 bg-body-tertiary border-0">
                <p class="mb-2"><strong>Gruppe:</strong> {{ formData.mitgliedergruppe }}</p>
                <p class="mb-2"><strong>Nachricht:</strong> {{ formData.message }}</p>
                <p class="mb-2"><strong>Kategorie:</strong> {{ formData.category || '-' }}</p>
                <p class="mb-0" *ngIf="isLoggedIn"><strong>E-Mail:</strong> {{ formData.email }}</p>
                <p class="mb-0"><strong>Datenschutz-Einverständnis:</strong> {{ formData.privacyConsent ? 'Ja' : 'Nein' }}</p>

                <hr class="my-4" />

                <button
                  type="button"
                  class="w-100 btn btn-secondary btn-lg mb-2"
                  aria-label="Zurück zu den Meldedaten"
                  (click)="weiter = false"
                >
                  Zurück
                </button>

                <button
                  type="submit"
                  class="w-100 btn btn-primary btn-lg"
                  [disabled]="!form.valid"
                  [attr.aria-disabled]="!form.valid"
                  aria-label="Meldeformular absenden"
                >
                  Absenden
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: [``],
})
export class MeldeformularComponent {
  @Input() weiter = false;
  @Input() isLoggedIn = false;

  @Input() formData = {
    mitgliedergruppe: '',
    message: '',
    category: '',
    email: '',
    privacyConsent: false,
  };
}
