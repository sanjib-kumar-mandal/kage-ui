
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  inject,
  input,
  model,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { KageIcon } from '../icon/icon.component';
import { KRippleDirective } from '../../directives/ripple/ripple.directive';
import { KPopoverController } from '../../services/popover/popover.service';
import { KageCalendar } from './calendar.component';

@Component({
  selector: 'k-date-picker',
  imports: [KageIcon, KRippleDirective],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerComponent implements ControlValueAccessor {
  @ViewChild('popoverTpl') popoverTpl!: TemplateRef<any>;
  placeholder = input<string>();
  label = input<string>();
  disabled = model<boolean>();
  value: any = new Date();

  @ViewChild('calendarTemp') calendarTemp!: TemplateRef<any>;

  private popover = inject(KPopoverController);

  writeValue(obj: any): void {}

  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {
    this.disabled.set(Boolean(isDisabled));
  }

  openCalendar(event: any) {
    const ref = this.popover.open({
      content: KageCalendar,
      data: { selected: this.value },
      trigger: event,
      closeOnOutsideClick: true,
    });
    ref.afterClosed().subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
}
