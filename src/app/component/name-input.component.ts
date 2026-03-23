import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef, inject } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  ValidationErrors,
  Validator,
} from '@angular/forms';

let nameInputInstanceCounter = 0;

@Component({
  selector: 'app-name-input',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NameInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NameInputComponent),
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
      type="text"
      class="form-control"
      [class.is-invalid]="showError"
      [value]="value"
      [disabled]="disabled"
      [required]="required"
      [attr.aria-label]="ariaLabel || null"
      [placeholder]="placeholder"
      [attr.aria-invalid]="showError ? 'true' : null"
      [attr.aria-describedby]="showError ? errorId : null"
      (input)="onValueChange($event)"
      (blur)="markTouched()"
    />

    <div id="{{ errorId }}" class="invalid-feedback d-block" *ngIf="showError" aria-live="polite">
      {{ errorText }}
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

export class NameInputComponent implements ControlValueAccessor, Validator {
  private readonly instanceId = ++nameInputInstanceCounter;
  @Input() id = `name-field-${this.instanceId}`;
  @Input() label = 'Name';
  @Input() ariaLabel = '';
  @Input() placeholder = '';
  @Input() required = false;
  @Input() showOptionalIndicator = false;
  @Input() optionalText = '(optional)';
  @Input() errorText = 'Bitte geben Sie Ihren Namen ein.';
  @Input() errorId = `name-error-${this.instanceId}`;

  value = '';
  disabled = false;
  touched = false;
  dirty = false;

  private readonly ngControl = inject(NgControl, { optional: true, self: true });
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};
  private onValidatorChange: () => void = () => {};

  constructor() {
    this.ngControl && (this.ngControl.valueAccessor = this);
  }

  get showError(): boolean {
    const control = this.ngControl?.control;

    if (control) {
      return control.invalid && (control.touched || control.dirty);
    }

    return this.required && !this.value.trim() && (this.touched || this.dirty);
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

  validate(_: AbstractControl): ValidationErrors | null {
    return this.required && !this.value.trim() ? { required: true } : null;
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
  }

  markTouched(): void {
    this.touched = true;
    this.onTouched();
  }
}
