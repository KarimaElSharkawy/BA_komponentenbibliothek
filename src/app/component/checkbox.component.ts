import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostBinding, Input, Output, forwardRef } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';

let checkboxInstanceCounter = 0;

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
/**
 * Komponente: Form Checkbox mit ControlValueAccessor, Pflichtvalidierung und Fehlermeldung.
 */
export class CheckboxComponent implements ControlValueAccessor, Validator {
  private readonly instanceId = ++checkboxInstanceCounter;
  @HostBinding('attr.id') externalId: string | null = null;
  @Input() id = `checkbox-field-${this.instanceId}`;
  @Input() label = '';
  @Input() ariaLabel = '';
  @Input() required = false;
  @Input() describedBy: string | null = null;
  @Input() errorId = `checkbox-error-${this.instanceId}`;
  @Input() errorText = 'Bitte bestätigen Sie dieses Feld.';
  @Output() valueChange = new EventEmitter<boolean>();

  value = false;
  disabled = false;
  touched = false;
  dirty = false;

  private onChange: (value: boolean) => void = () => {};
  private onTouched: () => void = () => {};
  private onValidatorChange: () => void = () => {};

  get showError(): boolean {
    return this.required && !this.value && (this.touched || this.dirty);
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
