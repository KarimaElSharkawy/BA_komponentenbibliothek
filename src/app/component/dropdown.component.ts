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

let dropdownInstanceCounter = 0;

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true,
    },
  ],
  template: `
    <label [for]="id" class="form-label">
      {{ label }}
      <span *ngIf="required" class="required-indicator" aria-hidden="true">*</span>
    </label>
    <select
      [id]="id"
      class="form-select"
      [ngModel]="value"
      (ngModelChange)="onValueChange($event)"
      [ngModelOptions]="{ standalone: true }"
      [disabled]="disabled"
      [required]="required"
      [attr.aria-label]="ariaLabel || label"
      [attr.aria-invalid]="showError ? 'true' : null"
      [attr.aria-describedby]="showError ? errorId : null"
      (blur)="markTouched()"
    >
      <option value="" disabled>{{ placeholder }}</option>
      <option *ngFor="let option of options" [value]="option">{{ option }}</option>
    </select>
    <div id="{{ errorId }}" class="invalid-feedback d-block" *ngIf="showError" aria-live="polite">
      {{ errorText }}
    </div>
  `,
  styles: [`
    .form-select {
      min-height: 2.5rem;
      display: block;
      color: #212529;
      background-color: #ffffff;
      background-image: none;
      appearance: auto;
      -webkit-appearance: menulist;
      -moz-appearance: menulist;
    }
    .required-indicator {
      margin-left: 0.15rem;
    }
  `],
})
/**
 * Komponente: Form Select Feld mit Optionen, Pflichtvalidierung und Fehlerausgabe.
 */
export class DropdownComponent implements ControlValueAccessor, Validator {
  private readonly instanceId = ++dropdownInstanceCounter;
  @HostBinding('attr.id') externalId: string | null = null;
  private resolvedControlId = `dropdown-field-${this.instanceId}`;

  @Input()
  set id(value: string) {
    this.resolvedControlId = value || `dropdown-field-${this.instanceId}`;
  }

  @Input()
  set controlId(value: string) {
    this.resolvedControlId = value || `dropdown-field-${this.instanceId}`;
  }

  @Input() label = '';
  @Input() ariaLabel = '';
  @Input() options: readonly string[] = [];
  @Input() placeholder = 'Bitte auswählen';
  @Input() required = false;
  @Input() errorText = 'Bitte wählen Sie eine Option aus.';
  @Input() errorId = `dropdown-error-${this.instanceId}`;
  @Output() valueChange = new EventEmitter<string>();

  value = '';
  disabled = false;
  touched = false;
  dirty = false;

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};
  private onValidatorChange: () => void = () => {};

  get id(): string {
    return this.resolvedControlId;
  }

  get showError(): boolean {
    return this.required && !this.value && (this.touched || this.dirty);
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
    if (this.required && !this.value) {
      return { required: true };
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
