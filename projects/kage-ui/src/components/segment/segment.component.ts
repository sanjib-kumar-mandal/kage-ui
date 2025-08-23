import { Component, forwardRef, input, output, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface KageSegmentOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

@Component({
  selector: 'kage-segment',
  imports: [],
  templateUrl: './segment.component.html',
  styleUrl: './segment.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KageSegment),
      multi: true,
    },
  ],
  host: {
    role: 'radiogroup',
    tabindex: '0',
    '(keydown)': 'onKeyDown($event)',
  },
})
export class KageSegment implements ControlValueAccessor {
  options = input<Array<string> | Array<KageSegmentOption>>([]);
  disabled = input<boolean>(false);

  onSegmentChange = output<string | number>();

  selectedValue!: string | number;
  isDisabled = signal(this.disabled());

  private onChange = (value: string | number) => {};
  private onTouched = () => {};

  get normalizedOptions(): Array<KageSegmentOption> {
    return this.options().map((opt) =>
      typeof opt === 'string' ? { label: opt, value: opt } : opt
    );
  }

  select(value: string | number, disabled = false) {
    if (disabled || this.isDisabled()) return;
    this.selectedValue = value;
    this.onSegmentChange.emit(value);
    this.onChange(value);
    this.onTouched();
  }

  onKeyDown(e: KeyboardEvent) {
    const index = this.normalizedOptions.findIndex(
      (o) => o.value === this.selectedValue
    );
    let nextIndex = index;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      nextIndex = (index + 1) % this.normalizedOptions.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      nextIndex =
        (index - 1 + this.normalizedOptions.length) %
        this.normalizedOptions.length;
    } else {
      return;
    }

    const next = this.normalizedOptions[nextIndex];
    if (!next.disabled) {
      this.select(next.value);
    }
    e.preventDefault();
  }

  writeValue(val: string | number): void {
    this.selectedValue = val;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled.set(Boolean(isDisabled));
  }
}
