import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef, inject } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Component({
  selector: 'app-datenschutz',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatenschutzComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DatenschutzComponent),
      multi: true,
    },
  ],
  template: `
    <h3 class="h5 mb-2">{{ heading }}</h3>
    <p [id]="textId" class="mb-2 text-body">
      Ich erkläre mich damit einverstanden, dass Daten zur Bearbeitung meines Anliegens von der HTW
      Berlin erhoben, gespeichert, verarbeitet und intern übermittelt werden. Siehe
      <a
        [href]="datenschutzUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="link-dark fw-semibold text-decoration-underline"
        [attr.aria-label]="datenschutzAriaLabel"
      >
        Datenschutzinformationen
      </a>
      sowie in der
      <a
        [href]="richtlinieUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="link-dark fw-semibold text-decoration-underline"
        [attr.aria-label]="richtlinieAriaLabel"
      >
        Antidiskriminierungsrichtlinie der HTW Berlin (§10)
      </a>
      .
    </p>

    <div class="form-check">
      <input
        [id]="id"
        type="checkbox"
        class="form-check-input"
        [ngModel]="value"
        (ngModelChange)="onValueChange($event)"
        [ngModelOptions]="{ standalone: true }"
        [disabled]="disabled"
        [required]="required"
        [attr.aria-required]="required ? 'true' : null"
        [attr.aria-label]="ariaLabel || label"
        [attr.aria-invalid]="showError ? 'true' : null"
        [attr.aria-describedby]="showError ? textId + ' ' + errorId : textId"
        (blur)="markTouched()"
      />
      <label class="form-check-label" [for]="id">{{ label }}</label>
    </div>

    <div id="{{ errorId }}" class="invalid-feedback d-block" *ngIf="showError" aria-live="polite">
      {{ errorText }}
    </div>
  `,
})
export class DatenschutzComponent implements ControlValueAccessor, Validator {
  @Input() id = 'privacyConsent';
  @Input() textId = 'privacy-consent-text';
  @Input() heading = 'Datenschutzhinweis und Einverständniserklärung';
  @Input() label = 'Ich stimme der Datenschutz- und Einverständniserklärung zu. *';
  @Input() ariaLabel = 'Datenschutz und Einverständnis zustimmen';
  @Input() required = true;
  @Input() errorId = 'privacy-consent-error';
  @Input() errorText = 'Bitte stimmen Sie der Datenschutz- und Einverständniserklärung zu.';
  @Input() datenschutzUrl =
    'https://antidis.f4.htw-berlin.de/assets/HTW_Datenschutzinformationen_Fallintervention_Final.pdf';
  @Input() datenschutzAriaLabel =
    'Datenschutzinformationen als PDF, öffnet in neuem Tab';
  @Input() richtlinieUrl =
    'https://www.htw-berlin.de/fileadmin/HTW/Zentral/Antidiskriminierung/Antidiskriminierungsrichtlinie-HTW-Berlin-R03_20.pdf';
  @Input() richtlinieAriaLabel =
    'Antidiskriminierungsrichtlinie der HTW Berlin als PDF, öffnet in neuem Tab';

  value = false;
  disabled = false;

  private readonly ngControl = inject(NgControl, { optional: true, self: true });
  private onChange: (value: boolean) => void = () => {};
  private onTouched: () => void = () => {};
  private onValidatorChange: () => void = () => {};

  constructor() {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  get showError(): boolean {
    const control = this.ngControl?.control;
    return !!control && control.invalid && (control.touched || control.dirty);
  }

  writeValue(value: boolean | null): void {
    this.value = !!value;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(_: AbstractControl): ValidationErrors | null {
    if (this.required && !this.value) {
      return { required: true };
    }
    return null;
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onValidatorChange = fn;
  }

  onValueChange(value: boolean): void {
    this.value = value;
    this.onChange(value);
    this.onValidatorChange();
  }

  markTouched(): void {
    this.onTouched();
  }
}
