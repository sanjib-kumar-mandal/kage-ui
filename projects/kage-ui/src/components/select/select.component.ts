import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  forwardRef,
  HostListener,
  input,
  output,
  QueryList,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { KageOption } from '../option/option.component';

@Component({
  selector: 'kage-select',
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KageSelect),
      multi: true,
    },
  ],
})
export class KageSelect implements ControlValueAccessor, AfterContentInit {
  placeholder = input<string>('Select...');
  multiple = input<boolean>(false);
  valueChange = output<any>();
  name = input.required<string>();

  @ContentChildren(KageOption) options!: QueryList<KageOption>;

  isOpen = false;
  focusedIndex: number = -1;
  selectedValues: any[] = [];

  private onChange = (_: any) => {};
  private onTouched = () => {};

  constructor(private elRef: ElementRef, private cdr: ChangeDetectorRef) {}

  ngAfterContentInit() {
    this.options.forEach((option) => {
      option.select = () => this.toggleSelection(option);
      option.multiple.set(this.multiple());
      option.name.set(this.name());
    });
    this.updateOptionStates();
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.focusedIndex = 0;
    }
  }

  closeDropdown() {
    this.isOpen = false;
  }

  toggleSelection(option: KageOption) {
    if (this.multiple()) {
      const index = this.selectedValues.indexOf(option.value());
      if (index === -1) {
        this.selectedValues.push(option.value());
      } else {
        this.selectedValues.splice(index, 1);
      }
    } else {
      this.selectedValues = [option.value()];
      this.closeDropdown();
    }

    this.updateOptionStates();
    this.emitChanges();
  }

  updateOptionStates() {
    this.options?.forEach((opt) => {
      opt.selected = this.selectedValues.includes(opt.value);
      opt.multiple.set(this.multiple());
    });
    this.cdr.markForCheck();
  }

  emitChanges() {
    const emitValue = this.multiple()
      ? this.selectedValues
      : this.selectedValues[0] ?? null;
    this.onChange(emitValue);
    this.valueChange.emit(emitValue);
  }

  writeValue(value: any): void {
    if (this.multiple() && Array.isArray(value)) {
      this.selectedValues = value;
    } else if (!this.multiple() && value != null) {
      this.selectedValues = [value];
    } else {
      this.selectedValues = [];
    }
    this.updateOptionStates();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: Event) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.closeDropdown();
    }
  }

  @HostListener('keydown.arrowDown', ['$event']) onArrowDown(e: KeyboardEvent) {
    if (!this.isOpen) return;
    e.preventDefault();
    this.focusedIndex = Math.min(
      this.focusedIndex + 1,
      this.options.length - 1
    );
  }

  @HostListener('keydown.arrowUp', ['$event']) onArrowUp(e: KeyboardEvent) {
    if (!this.isOpen) return;
    e.preventDefault();
    this.focusedIndex = Math.max(this.focusedIndex - 1, 0);
  }

  @HostListener('keydown.enter', ['$event']) onEnter(e: KeyboardEvent) {
    if (this.isOpen && this.focusedIndex >= 0) {
      const focused = this.options.toArray()[this.focusedIndex];
      this.toggleSelection(focused);
    }
  }

  @HostListener('keydown.escape') onEscape() {
    this.closeDropdown();
  }

  get displayLabel(): string {
    const labels = this.options
      ?.filter((opt) => this.selectedValues.includes(opt.value()))
      .map((opt) => opt.label());
    return labels.length ? labels.join(', ') : this.placeholder();
  }

  getAriaSelected(value: any): 'true' | 'false' {
    return this.selectedValues.includes(value) ? 'true' : 'false';
  }
}
