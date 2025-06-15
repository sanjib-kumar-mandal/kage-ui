import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  input,
  model,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'kage-checkbox',
  imports: [NgClass],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KageCheckbox),
      multi: true,
    },
  ],
})
export class KageCheckbox implements ControlValueAccessor {
  label = input<string>('');
  color = input<
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
  >();
  disabled = model<boolean>(false);
  checked = false;
  name = input<string>();
  id = input<string>();
  cssClass = input<string>();

  private onChange = (value: boolean) => {};
  private onTouched = () => {};

  writeValue(value: any): void {
    this.checked = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled.set(Boolean(isDisabled));
  }

  toggleChecked(): void {
    this.checked = !this.checked;
    this.onChange(this.checked);
    this.onTouched();
  }
}
