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
  selector: 'app-textarea',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
  template: `
    <label [for]="id" class="form-label">
      {{ label }}
      <span *ngIf="required" class="required-indicator" aria-hidden="true" aria-disabled="true">*</span>
    </label>
    <textarea
      [id]="id"
      class="form-control"
      [rows]="rows"
      [ngModel]="value"
      (ngModelChange)="onValueChange($event)"
      [ngModelOptions]="{ standalone: true }"
      [disabled]="disabled"
      [required]="required"
      [attr.aria-required]="required ? 'true' : null"
      [attr.aria-label]="ariaLabel || label"
      [attr.minlength]="minlength"
      [placeholder]="placeholder"
      [attr.aria-invalid]="showError ? 'true' : null"
      [attr.aria-describedby]="ariaDescribedBy"
      (blur)="markTouched()"
    ></textarea>

    <div id="{{ requiredErrorId }}" class="invalid-feedback d-block" *ngIf="showRequiredError" aria-live="polite">
      {{ requiredErrorText }}
    </div>
    <div id="{{ minlengthErrorId }}" class="invalid-feedback d-block" *ngIf="showMinlengthError" aria-live="polite">
      {{ minlengthErrorText }}
    </div>
  `,
  styles: [`
    .required-indicator {
      margin-left: 0.15rem;
    }
  `],
})
export class TextareaComponent implements ControlValueAccessor, Validator {
  @Input() id = 'textarea-field';
  @Input() label = '';
  @Input() ariaLabel = '';
  @Input() rows = 4;
  @Input() placeholder = '';
  @Input() required = false;
  @Input() minlength = 0;
  @Input() requiredErrorText = 'Dieses Feld ist erforderlich.';
  @Input() minlengthErrorText = '';
  @Input() requiredErrorId = 'textarea-required-error';
  @Input() minlengthErrorId = 'textarea-minlength-error';

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

  get showMinlengthError(): boolean {
    const control = this.ngControl?.control;
    return !!control && !!control.errors?.['minlength'] && (control.touched || control.dirty);
  }

  get ariaDescribedBy(): string | null {
    if (this.showRequiredError) {
      return this.requiredErrorId;
    }
    if (this.showMinlengthError) {
      return this.minlengthErrorId;
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

  validate(_: AbstractControl): ValidationErrors | null {
    if (this.required && !this.value.trim()) {
      return { required: true };
    }

    if (this.minlength > 0 && this.value.trim().length < this.minlength) {
      return {
        minlength: {
          requiredLength: this.minlength,
          actualLength: this.value.trim().length,
        },
      };
    }

    return null;
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
