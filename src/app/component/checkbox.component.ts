import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';

let checkboxInstanceCounter = 0;

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule],
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
        [class.is-invalid]="showError"
        [checked]="value"
        [disabled]="disabled"
        [required]="required"
        [attr.aria-label]="ariaLabel || null"
        [attr.aria-invalid]="showError ? 'true' : null"
        [attr.aria-describedby]="ariaDescribedBy"
        (change)="onCheckedChange($event)"
        (blur)="markTouched()"
      />
      <label class="form-check-label" [for]="id">
        {{ label }}
        <span *ngIf="required" class="required-indicator" aria-hidden="true">*</span>
        <span *ngIf="showOptionalIndicator && !required" class="optional-indicator" aria-hidden="true">
          {{ optionalText }}
        </span>
      </label>
    </div>

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

export class CheckboxComponent implements ControlValueAccessor, Validator {
  private readonly instanceId = ++checkboxInstanceCounter;
  @Input() id = `checkbox-field-${this.instanceId}`;
  @Input() label = '';
  @Input() ariaLabel = '';
  @Input() required = false;
  @Input() showOptionalIndicator = false;
  @Input() optionalText = '(optional)';
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
    return this.required && !this.value ? { required: true } : null;
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onValidatorChange = fn;
  }

  onCheckedChange(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;

    this.value = checked;
    this.dirty = true;
    this.onChange(checked);
    this.onValidatorChange();
    this.valueChange.emit(checked);
  }

  markTouched(): void {
    this.touched = true;
    this.onTouched();
  }
}
