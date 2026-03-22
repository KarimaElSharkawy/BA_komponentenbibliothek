import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostBinding, Input, Output, forwardRef } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';

let emailInputInstanceCounter = 0;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

@Component({
  selector: 'app-email-input',
  standalone: true,
  imports: [CommonModule],
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
    <label [for]="id" class="form-label">
      {{ label }}
      <span *ngIf="required" class="required-indicator" aria-hidden="true">*</span>
      <span *ngIf="showOptionalIndicator && !required" class="optional-indicator" aria-hidden="true">
        {{ optionalText }}
      </span>
    </label>
    <input
      [id]="id"
      type="email"
      class="form-control"
      [class.is-invalid]="showError"
      [value]="value"
      [disabled]="disabled"
      [required]="required"
      [attr.aria-label]="ariaLabel || null"
      [placeholder]="placeholder"
      [attr.aria-invalid]="showError ? 'true' : null"
      [attr.aria-describedby]="ariaDescribedBy"
      (input)="onValueChange($event)"
      (blur)="markTouched()"
    />

    <div id="{{ requiredErrorId }}" class="invalid-feedback d-block" *ngIf="showRequiredError" aria-live="polite">
      {{ requiredErrorText }}
    </div>
    <div id="{{ formatErrorId }}" class="invalid-feedback d-block" *ngIf="showFormatError" aria-live="polite">
      {{ formatErrorText }}
    </div>
  `,
  styles: [`
    .required-indicator {
      margin-left: 0.15rem;
    }
    .optional-indicator {
      margin-left: 0.35rem;
      font-weight: 400;
    }
  `],
})

export class EmailInputComponent implements ControlValueAccessor, Validator {
  private readonly instanceId = ++emailInputInstanceCounter;
  @HostBinding('attr.id') externalId: string | null = null;
  @Input() id = `email-field-${this.instanceId}`;
  @Input() label = 'E-Mail';
  @Input() ariaLabel = '';
  @Input() placeholder = 'name@beispiel.de';
  @Input() required = false;
  @Input() showOptionalIndicator = false;
  @Input() optionalText = '(optional)';
  @Input() requiredErrorText = 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
  @Input() formatErrorText = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
  @Input() requiredErrorId = `email-required-error-${this.instanceId}`;
  @Input() formatErrorId = `email-format-error-${this.instanceId}`;
  @Output() valueChange = new EventEmitter<string>();

  value = '';
  disabled = false;
  touched = false;
  dirty = false;

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};
  private onValidatorChange: () => void = () => {};

  private get hasInteracted(): boolean {
    return this.touched || this.dirty;
  }

  get showError(): boolean {
    return this.isInvalid && this.hasInteracted;
  }

  get showRequiredError(): boolean {
    return this.isRequiredError && this.hasInteracted;
  }

  get showFormatError(): boolean {
    return this.isFormatError && this.hasInteracted;
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

  private get normalizedValue(): string {
    return this.value.trim();
  }

  private get isRequiredError(): boolean {
    return this.required && !this.normalizedValue;
  }

  private get isFormatError(): boolean {
    if (!this.normalizedValue) {
      return false;
    }

    return !EMAIL_PATTERN.test(this.normalizedValue);
  }

  private get isInvalid(): boolean {
    return this.isRequiredError || this.isFormatError;
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

  validate(_: AbstractControl): ValidationErrors | null {
    if (this.isRequiredError) {
      return { required: true };
    }

    return this.isFormatError ? { email: true } : null;
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onValidatorChange = fn;
  }

  onValueChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;

    this.value = value;
    this.dirty = true;
    this.onChange(value);
    this.onValidatorChange();
    this.valueChange.emit(value);
  }

  markTouched(): void {
    this.touched = true;
    this.onTouched();
  }
}
