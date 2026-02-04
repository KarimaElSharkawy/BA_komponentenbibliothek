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
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
  template: `
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
        [attr.aria-describedby]="ariaDescribedBy"
        (blur)="markTouched()"
      />
      <label class="form-check-label" [for]="id">{{ label }}</label>
    </div>

    <div id="{{ errorId }}" class="invalid-feedback d-block" *ngIf="showError" aria-live="polite">
      {{ errorText }}
    </div>
  `,
})
export class CheckboxComponent implements ControlValueAccessor, Validator {
  @Input() id = 'checkbox-field';
  @Input() label = '';
  @Input() ariaLabel = '';
  @Input() required = false;
  @Input() describedBy: string | null = null;
  @Input() errorId = 'checkbox-error';
  @Input() errorText = 'Bitte bestätigen Sie dieses Feld.';

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

  get ariaDescribedBy(): string | null {
    if (this.showError) {
      return this.describedBy ? `${this.describedBy} ${this.errorId}` : this.errorId;
    }
    return this.describedBy;
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
