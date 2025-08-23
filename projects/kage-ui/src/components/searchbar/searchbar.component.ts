import {
  Component,
  forwardRef,
  input,
  OnInit,
  output,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { KageIcon } from '../icon/icon.component';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'kage-searchbar',
  imports: [KageIcon],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KageSearchbar),
      multi: true,
    },
  ],
})
export class KageSearchbar implements ControlValueAccessor, OnInit {
  placeholder = input<string>('Search...');
  debounce = input<number>(300);
  autofocus = input<boolean>(false);
  disabled = input<boolean>(false);
  showClear = input<boolean>(true);

  search = output<string>();

  value = '';
  isDisabled = signal(this.disabled());
  onChange = (value: string) => {};
  onTouched = () => {};

  private input$ = new Subject<string>();

  ngOnInit(): void {
    this.input$.pipe(debounceTime(this.debounce())).subscribe((val) => {
      this.search.emit(val);
    });
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
    this.input$.next(this.value);
  }

  clear(): void {
    this.value = '';
    this.onChange(this.value);
    this.input$.next(this.value);
  }

  writeValue(value: string): void {
    this.value = value ?? '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.isDisabled.set(Boolean(disabled));
  }
}
