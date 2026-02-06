import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
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
    <label [for]="id" class="form-label">
      {{ label }}
      <span *ngIf="required" class="required-indicator" aria-hidden="true" aria-disabled="true">*</span>
    </label>
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
  styles: [`
    .required-indicator {
      margin-left: 0.15rem;
    }
  `],
})
export class EmailInputComponent implements ControlValueAccessor, Validator {
  @Input() id = 'email-field';
  @Input() label = 'E-Mail';
  @Input() ariaLabel = '';
  @Input() placeholder = 'name@beispiel.de';
  @Input() required = false;
  @Input() requiredErrorText = 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
  @Input() formatErrorText = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
  @Input() requiredErrorId = 'email-required-error';
  @Input() formatErrorId = 'email-format-error';
  @Output() valueChange = new EventEmitter<string>();

  value = '';
  disabled = false;
  touched = false;
  dirty = false;

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};
  private onValidatorChange: () => void = () => {};

  get showError(): boolean {
    return this.isInvalid && (this.touched || this.dirty);
  }

  get showRequiredError(): boolean {
    return this.isRequiredError && (this.touched || this.dirty);
  }

  get showFormatError(): boolean {
    return this.isFormatError && (this.touched || this.dirty);
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

    return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.normalizedValue);
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

    if (!this.normalizedValue) {
      return null;
    }

    if (this.isFormatError) {
      return { email: true };
    }

    return null;
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onValidatorChange = fn;
  }

  onValueChange(value: string): void {
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
