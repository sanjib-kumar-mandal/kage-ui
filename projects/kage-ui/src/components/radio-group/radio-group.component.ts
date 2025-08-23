import {
  AfterContentInit,
  Component,
  ContentChildren,
  effect,
  forwardRef,
  input,
  QueryList,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { KageRadio } from '../radio/radio.component';

@Component({
  selector: 'kage-radio-group',
  imports: [],
  template: `
    <div class="kage-radio-group" [class.disabled]="isDisabled()">
      <ng-content></ng-content>
    </div>
  `,
  styleUrl: './radio-group.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KageRadioGroup),
      multi: true,
    },
  ],
})
export class KageRadioGroup implements ControlValueAccessor, AfterContentInit {
  name = input<string>('');
  disabled = input<boolean>(false);
  isDisabled = signal(this.disabled());

  @ContentChildren(KageRadio) radios!: QueryList<KageRadio>;

  private _value: any;
  private onChange = (value: any) => {};
  private onTouched = () => {};

  constructor() {
    effect(() => this.updateDisabled());
  }

  ngAfterContentInit(): void {
    if (!this.radios || this.radios.length === 0) {
      throw new Error('No <k-radio> found inside <k-radio-group>');
    }

    this.radios.forEach((radio) => {
      radio.setGroup(this);
    });

    this.updateSelection();
    this.updateDisabled();
  }

  writeValue(value: any): void {
    this._value = value;
    this.updateSelection();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled.set(Boolean(isDisabled));
    this.updateDisabled();
  }

  selectValue(value: any) {
    if (!this.isDisabled()) {
      this._value = value;
      this.updateSelection();
      this.onChange(value);
      this.onTouched();
    }
  }

  private updateSelection() {
    this.radios?.forEach((r) => (r.checked = r.value() === this._value));
  }

  private updateDisabled() {
    this.radios?.forEach((r) => r.setDisabled(this.disabled()));
  }
}
