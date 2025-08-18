import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  forwardRef,
  ElementRef,
  ViewChild,
  AfterViewInit,
  input,
  model,
  inject,
  PLATFORM_ID,
  output,
  effect,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'kage-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KageInput),
      multi: true,
    },
  ],
})
export class KageInput implements ControlValueAccessor, AfterViewInit {
  label = input<string>('');
  name = input<string>('');
  type = input<string>('text');
  placeholder = input<string>('');
  disabled = model<boolean>(false);
  readonly = input<boolean>(false);
  autoFocus = input<boolean>(false);
  debounce = input<number>();
  autocomplete = input<InputAutoComplete>('off');
  cssClass = input<string>();

  valueChanged = output<string>();

  maxLength = input<number>();

  @ViewChild('inputField') inputRef!: ElementRef;
  private debouncer = new Subject<string>();

  value: string = '';

  private platformId = inject(PLATFORM_ID);

  onChange = (_: any) => {};
  onTouched = () => {};

  ngAfterViewInit(): void {
    // As these are specifically client side events or tasks
    // this needs to check for pltformBrowser
    if (isPlatformBrowser(this.platformId)) {
      // Work on debounce
      this.debouncer
        .pipe(debounceTime(this.debounce() ?? 0))
        .subscribe((val) => this.valueChanged.emit(val));
      // Set up the focus on element
      if (this.autoFocus()) {
        setTimeout(() => this.inputRef?.nativeElement?.focus(), 100);
      }
    }
  }

  writeValue(val: any): void {
    this.value = val ?? '';
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

  handleInput(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    this.updateValue(input);
  }

  updateValue(val: string): void {
    this.value = val;
    this.onChange(val);
    this.onTouched();
    this.debouncer.next(val);
  }
}

export type InputAutoComplete =
  | 'on'
  | 'off'
  | 'address-line1'
  | 'address-line2'
  | 'address-line3'
  | 'address-level1'
  | 'address-level2'
  | 'address-level3'
  | 'address-level4'
  | 'street-address'
  | 'country'
  | 'country-name'
  | 'postal-code'
  | 'name'
  | 'additional-name'
  | 'family-name'
  | 'given-name'
  | 'honoric-prefix'
  | 'honoric-suffix'
  | 'nickname'
  | 'organization-title'
  | 'username'
  | 'new-password'
  | 'current-password'
  | 'bday'
  | 'bday-day'
  | 'bday-month'
  | 'bday-year'
  | 'sex'
  | 'one-time-code'
  | 'organization'
  | 'cc-name'
  | 'cc-given-name'
  | 'cc-additional-name'
  | 'cc-family-name'
  | 'cc-number'
  | 'cc-exp'
  | 'cc-exp-month'
  | 'cc-exp-year'
  | 'cc-csc'
  | 'cc-type'
  | 'transaction-currency'
  | 'transaction-amount'
  | 'language'
  | 'url'
  | 'email'
  | 'photo'
  | 'tel'
  | 'tel-country-code'
  | 'tel-national'
  | 'tel-area-code'
  | 'tel-local'
  | 'tel-local-prefix'
  | 'tel-local-suffix'
  | 'tel-extension'
  | 'impp';
