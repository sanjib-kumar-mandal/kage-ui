import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  forwardRef,
  HostListener,
  input,
  OnDestroy,
  output,
  QueryList,
  signal,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { KageOption } from './option.component';
import { startWith, Subject, takeUntil } from 'rxjs';
import { KageIcon } from '../icon/icon.component';

@Component({
  selector: 'kage-select',
  imports: [KageIcon],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KageSelect),
      multi: true,
    },
  ],
})
export class KageSelect
  implements ControlValueAccessor, AfterContentInit, OnDestroy
{
  @ViewChild('container') containerRef!: ElementRef;
  @ContentChildren(KageOption) childrens!: QueryList<KageOption>;

  private obsDestroyer$ = new Subject<void>();

  label = input<string>();
  placeholder = input<string>('Select...');
  disabled = input<boolean>(false);
  isDisabled = signal(this.disabled());
  cssClass = input<string>();
  valueChange = output<any>();

  isOpen = false;
  selectedOption: any = null;
  focusedIndex = -1;
  options: Array<{ label: string; value: any }> = [];

  onChange = (value: any) => {};
  onTouched = () => {};

  ngAfterContentInit(): void {
    this.childrens.changes
      .pipe(startWith(null), takeUntil(this.obsDestroyer$))
      .subscribe({
        next: () => {
          this.options = this.childrens.map((el) => ({
            label: el.label(),
            value: el.value(),
          }));
        },
      });
  }

  toggleDropdown() {
    if (this.isDisabled()) {
      return;
    }
    this.isOpen = !this.isOpen;
  }

  selectOption(option: any, index: number) {
    this.selectedOption = option;
    this.isOpen = false;
    this.focusedIndex = index;
    this.onChange(option.value);
    this.valueChange.emit(option.value);
    this.onTouched();
  }

  onKeyDown(event: KeyboardEvent) {
    if (!this.isOpen && ['ArrowDown', 'ArrowUp'].includes(event.key)) {
      this.isOpen = true;
    }

    if (this.isOpen) {
      const max = this.options.length - 1;
      if (event.key === 'ArrowDown') {
        this.focusedIndex =
          this.focusedIndex + 1 > max ? 0 : this.focusedIndex + 1;
        event.preventDefault();
      } else if (event.key === 'ArrowUp') {
        this.focusedIndex =
          this.focusedIndex - 1 < 0 ? max : this.focusedIndex - 1;
        event.preventDefault();
      } else if (event.key === 'Enter' && this.focusedIndex >= 0) {
        this.selectOption(this.options[this.focusedIndex], this.focusedIndex);
        event.preventDefault();
      } else if (event.key === 'Escape') {
        this.isOpen = false;
      }
    }
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent) {
    if (!this.containerRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  writeValue(value: any): void {
    this.selectedOption =
      this.options.find((opt) => opt.value === value) || null;
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

  ngOnDestroy(): void {
    this.obsDestroyer$.next();
    this.obsDestroyer$.complete();
  }
}
