import { NgClass } from '@angular/common';
import {
  Component,
  forwardRef,
  HostListener,
  input,
  model,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { KageRippleDirective } from '../../directives/directives';

@Component({
  selector: 'kage-button',
  imports: [NgClass, KageRippleDirective],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KageButton),
      multi: true,
    },
  ],
})
export class KageButton implements ControlValueAccessor {
  cssClass = input<string>();
  type = input<'button' | 'submit' | 'reset'>('button');
  color = input<
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger'
    | 'success'
    | 'warning'
    | 'info'
    | 'medium'
  >('primary');
  // Disabled state
  disabled = input<boolean>();
  isDisabled = signal(this.disabled());
  // Loading
  loading = input<boolean>(false);
  iconRight = input<boolean>(false);
  // Button mode
  fill = input<'clear' | 'outline' | 'solid'>('outline');

  private onChange = (value: any) => {};
  private onTouched = () => {};
  value: any;

  get getRippleColor() {
    if (this.color() === 'primary') {
      return `var(--color-primary)`;
    } else if (this.color() === 'secondary') {
      return `var(--color-secondary)`;
    } else if (this.color() === 'tertiary') {
      return `var(--color-tertiary)`;
    } else if (this.color() === 'success') {
      return `var(--color-success)`;
    } else if (this.color() === 'warning') {
      return `var(--color-warning)`;
    } else if (this.color() === 'danger') {
      return `var(--color-danger)`;
    } else if (this.color() === 'info') {
      return `var(--color-info)`;
    } else if (this.color() === 'medium') {
      return `var(--color-medium)`;
    } else {
      return `var(--color-medium)`;
    }
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    console.log(isDisabled);
    this.isDisabled.set(Boolean(isDisabled));
  }

  handleClick() {
    if (!this.isDisabled() && !this.loading()) {
      this.onTouched();
      this.onChange(true);
    }
  }

  @HostListener('keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (
      (event.key === 'Enter' || event.key === ' ') &&
      !this.isDisabled() &&
      !this.loading()
    ) {
      event.preventDefault();
      this.handleClick();
    }
  }

  @HostListener('click', ['$event'])
  onHostClick(event: MouseEvent) {
    if (this.isDisabled()) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }
}
