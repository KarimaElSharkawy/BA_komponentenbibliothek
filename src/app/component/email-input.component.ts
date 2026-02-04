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
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-email-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EmailInputComponent),
      multi: true,
    },
  ],
  template: `
    <label [for]="id" class="form-label">{{ label }}</label>
    <input
      [id]="id"
      type="email"
      class="form-control"
      [ngModel]="value"
      (ngModelChange)="onValueChange($event)"
      [ngModelOptions]="{ standalone: true }"
      [disabled]="disabled"
      [required]="required"
      [attr.aria-required]="required ? 'true' : null"
      [attr.aria-label]="ariaLabel || label"
      [placeholder]="placeholder"
      [attr.aria-invalid]="showError ? 'true' : null"
      [attr.aria-describedby]="ariaDescribedBy"
      (blur)="markTouched()"
    />

    <div id="{{ requiredErrorId }}" class="invalid-feedback d-block" *ngIf="showRequiredError" aria-live="polite">
      {{ requiredErrorText }}
    </div>
    <div id="{{ formatErrorId }}" class="invalid-feedback d-block" *ngIf="showFormatError" aria-live="polite">
      {{ formatErrorText }}
    </div>
  `,
})
export class EmailInputComponent implements ControlValueAccessor, Validator {
  @Input() id = 'email-field';
  @Input() label = 'E-Mail*';
  @Input() ariaLabel = '';
  @Input() placeholder = 'name@beispiel.de';
  @Input() required = false;
  @Input() requiredErrorText = 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
  @Input() formatErrorText = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
  @Input() requiredErrorId = 'email-required-error';
  @Input() formatErrorId = 'email-format-error';

  value = '';
  disabled = false;

  private readonly ngControl = inject(NgControl, { optional: true, self: true });
  private onChange: (value: string) => void = () => {};
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

  get showRequiredError(): boolean {
    const control = this.ngControl?.control;
    return !!control && !!control.errors?.['required'] && (control.touched || control.dirty);
  }

  get showFormatError(): boolean {
    const control = this.ngControl?.control;
    return !!control && !!control.errors?.['email'] && (control.touched || control.dirty);
  }

  get ariaDescribedBy(): string | null {
    if (this.showRequiredError) {
      return this.requiredErrorId;
    }
    if (this.showFormatError) {
      return this.formatErrorId;
    }
    return null;
  }

  writeValue(value: string | null): void {
    this.value = value ?? '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.required && !this.value.trim()) {
      return { required: true };
    }

    if (!this.value.trim()) {
      return null;
    }

    return Validators.email(control);
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onValidatorChange = fn;
  }

  onValueChange(value: string): void {
    this.value = value;
    this.onChange(value);
    this.onValidatorChange();
  }

  markTouched(): void {
    this.onTouched();
  }
}
