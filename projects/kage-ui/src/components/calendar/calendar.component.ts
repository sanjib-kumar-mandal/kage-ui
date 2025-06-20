import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  input,
  model,
  output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { KageIcon } from '../icon/icon.component';

@Component({
  selector: 'kage-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KageCalendar),
      multi: true,
    },
  ],
  imports: [DatePipe, KageIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KageCalendar implements ControlValueAccessor {
  mode = input<'single' | 'range' | 'multiple'>('single');
  disabled = model<boolean>(false);
  disabledDateFn = input<(date: Date | null) => boolean>();
  invalidDateFn = input<(date: Date | null) => boolean>();
  // Element function
  onChange = (_: any) => {};
  onTouched = () => {};
  // Output Events
  kageChange = output<void>();
  kageTouched = output<void>();
  // Local variable
  calendar: Array<Array<Date | null>> = [];
  value: any = {};
  private range: any = {};
  private multipleDates: Array<Date> = [];

  constructor() {
    const d = new Date();
    this.createCalendar(d.getMonth(), d.getFullYear());
  }

  // Default options
  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.kageTouched.emit();
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
    this.kageChange.emit();
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled.set(Boolean(isDisabled));
  }

  onBlur(): void {
    this.onTouched();
  }

  /**
   * Adjust class based on boolean values
   * @param date - Disable date
   * @returns - boolean
   */
  isDateMultiple(date: Date | null) {
    if (date) {
      const toDateString = (date: Date) =>
        new Date(date).toISOString().split('T')[0];
      return this.multipleDates.some(
        (d) => toDateString(d) === toDateString(date)
      );
    }
    return false;
  }
  /**
   * Adjust class based on boolean values
   * @param date - Disable date
   * @returns - boolean
   */
  isDateSelected(date: Date | null) {
    if (date && this.value?.hasOwnProperty('selected')) {
      const d = new Date(this.value.selected);
      return (
        date.getDate() === d.getDate() &&
        date.getMonth() === d.getMonth() &&
        date.getFullYear() === d.getFullYear()
      );
    }
    return false;
  }
  /**
   * Modify calendar based on these
   * @param date - Date
   * @returns - Booelan
   */
  isInRange(date: Date | null) {
    if (date) {
      const dateObj = this.range;
      if (dateObj.hasOwnProperty('start') && dateObj?.hasOwnProperty('end')) {
        return date >= new Date(dateObj.start) && date <= new Date(dateObj.end);
      }
      return false;
    }
    return false;
  }
  /**
   * Adjust class based on boolean values
   * @param date - Disable date
   * @returns - boolean
   */
  isDateDisabled(date: Date | null) {
    const fn = this.disabledDateFn();
    if (fn) {
      return fn(date);
    }
    return false;
  }
  /**
   * Depends on user which date to be set as invalid
   * @param date - Date
   * @returns - Boolean
   */
  isinvalidDate(date: Date | null) {
    const fn = this.invalidDateFn();
    if (fn) {
      return fn(date);
    }
    return false;
  }
  /**
   * Today validation
   * @param date - For any date
   * @returns - boolean
   */
  isToday(date: Date | null): boolean {
    if (date) {
      const today = new Date();
      return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      );
    }
    return false;
  }
  /**
   * Calculate and recalculate date
   * @param date
   */
  dateClicked(date: Date | null) {
    if (date) {
      if (this.mode() === 'single') {
        const obj = { selected: date };
        if (!this.isDateDisabled(date) && !this.isinvalidDate(date)) {
          this.writeValue(obj);
          this.onChange(obj);
        }
      } else if (this.mode() === 'range') {
        if (!this.isDateDisabled(date) && !this.isinvalidDate(date)) {
          if (this.range?.hasOwnProperty('start')) {
            if (this.range?.hasOwnProperty('end')) {
              delete this.range.end;
              Object.assign(this.range, { start: date });
              this.onChange(this.range);
            } else {
              Object.assign(this.range, { end: date });
              this.writeValue(this.range);
              this.onChange(this.range);
            }
          } else {
            Object.assign(this.range, { start: date });
            this.onChange(this.range);
          }
        }
      } else if (this.mode() === 'multiple') {
        if (!this.isDateDisabled(date) && !this.isinvalidDate(date)) {
          const toDateString = (date: Date) =>
            new Date(date).toISOString().split('T')[0];
          const index = this.multipleDates.findIndex(
            (d) => toDateString(d) === toDateString(date)
          );
          if (index === -1) {
            this.multipleDates.push(date);
          } else {
            this.multipleDates.splice(index, 1);
          }
          this.writeValue(this.multipleDates);
          this.onChange(this.multipleDates);
        }
      }
    }
  }

  /**
   * Calendar navigation next month
   */
  nextMonth() {
    const currentCalendar = this.calendar[1][0];
    if (currentCalendar?.getMonth() === 11) {
      const month = 0;
      const year = (currentCalendar?.getFullYear() ?? 0) + 1;
      this.createCalendar(month, year);
    } else {
      const month = (currentCalendar?.getMonth() ?? 0) + 1;
      const year = currentCalendar?.getFullYear();
      this.createCalendar(month, year!);
    }
  }
  /**
   * Calendar navigation prev month
   */
  prevMonth() {
    const currentCalendar = this.calendar[1][0];
    if (currentCalendar?.getMonth() === 0) {
      const month = 11;
      const year = (currentCalendar?.getFullYear() ?? 0) - 1;
      this.createCalendar(month, year);
    } else {
      const month = (currentCalendar?.getMonth() ?? 0) - 1;
      const year = currentCalendar?.getFullYear();
      this.createCalendar(month, year!);
    }
  }
  // Create calendar dates
  createCalendar(month: number, year: number) {
    // Create date object
    const date = new Date();
    date.setFullYear(year);
    date.setMonth(month);
    date.setDate(1);
    // last date of a month
    const lastDate = new Date(year, month + 1, 0);
    // get week day of the date
    const weekDay = date.getDay();
    const output = [];
    let arr = [];
    if (weekDay) {
      for (let wk = 0; wk < weekDay; wk++) {
        arr.push(null);
      }
    }
    for (let i = 0; i < lastDate.getDate(); i++) {
      const addedDate = new Date();
      addedDate.setFullYear(year);
      addedDate.setMonth(month);
      addedDate.setDate(i + 1);
      arr.push(addedDate);
      if (arr.length === 7 || i + 1 === lastDate.getDate()) {
        output.push(arr);
        arr = [];
      }
    }
    // check if last array is filled or not
    const lastArr = output[output.length - 1];
    if (lastArr.length !== 7) {
      const extraArr = new Array(7 - lastArr.length).fill(null);
      output.splice(output.length - 1, 1, lastArr.concat(extraArr));
    }
    this.calendar = output;
  }
}
