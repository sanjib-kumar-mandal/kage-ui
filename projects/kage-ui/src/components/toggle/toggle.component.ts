import { NgClass } from '@angular/common';
import { Component, effect, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'kage-toggle',
  imports: [NgClass],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KageToggle),
      multi: true,
    },
  ],
})
export class KageToggle implements ControlValueAccessor {
  color = input<
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger'
    | 'success'
    | 'warning'
    | 'info'
    | 'medium'
  >();
  // Disabled
  disabled = input<boolean>(false);
  isDisabled = signal(this.disabled());
  // Checked
  checked = input<boolean>(false);
  private _checkedSignal = signal(this.checked());

  private onChange = (value: boolean) => {};
  private onTouched = () => {};

  constructor() {
    // Sync external input `checked` with internal state
    effect(() => {
      this._checkedSignal.set(this.checked());
    });
  }

  // =========== Control value accessor =============== //
  writeValue(value: boolean): void {
    this._checkedSignal.set(value);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled.set(Boolean(isDisabled));
  }

  // ========= Handle toggle ============= //
  handleToggle(event: any) {
    const newValue = event.target.checked;
    this._checkedSignal.set(newValue);
    this.onChange(newValue);
    this.onTouched();
  }

  // Getter for template binding
  get isChecked() {
    return this._checkedSignal();
  }
}
