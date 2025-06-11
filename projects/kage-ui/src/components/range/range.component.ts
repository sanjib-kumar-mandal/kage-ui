import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  input,
  model,
  output,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'kage-range',
  imports: [],
  templateUrl: './range.component.html',
  styleUrl: './range.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KageRange),
      multi: true,
    },
  ],
})
export class KageRange {
  min = input<number>(0);
  max = input<number>(100);
  step = input<number>(1);
  disabled = model<boolean>(false);
  ticks = input<boolean | Array<string>>(false);
  vertical = input<boolean>(false);
  showTooltip = input<boolean>(false);
  valueChange = output<number>();
  focus = output<void>();
  blur = output<void>();
  color = input<
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
  >();

  value = 0;

  private onChange = (value: number) => {};
  private onTouched = () => {};
  private valueChange$ = new Subject<number>();

  constructor() {
    this.valueChange$.pipe(debounceTime(100)).subscribe((val) => {
      this.valueChange.emit(val);
      this.onChange(val);
    });
  }

  get tickArray(): number[] {
    const ticks = [];
    for (let i = this.min(); i <= this.max(); i += this.step()) {
      ticks.push(i);
    }
    return ticks;
  }

  get tickLabels(): string[] {
    return Array.isArray(this.ticks()) ? (this.ticks() as any) : [];
  }

  get hasLabeledTicks(): boolean {
    return Array.isArray(this.ticks());
  }

  get tooltipPosition(): string {
    const percentage =
      ((this.value - this.min()) / (this.max() - this.min())) * 100;
    return this.vertical()
      ? `top: ${100 - percentage}%;`
      : `left: ${percentage}%;`;
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = +input.value;
    this.valueChange$.next(this.value);
  }

  onFocus() {
    this.focus.emit();
  }

  onBlur() {
    this.onTouched();
    this.blur.emit();
  }

  writeValue(val: number): void {
    this.value = val ?? 0;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(Boolean(isDisabled));
  }
}
