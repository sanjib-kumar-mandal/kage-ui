import {
  ChangeDetectionStrategy,
  Component,
  effect,
  forwardRef,
  inject,
  input,
  LOCALE_ID,
  output,
  signal,
} from '@angular/core';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
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
  imports: [FormsModule, ReactiveFormsModule, KageIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KageCalendar {
  private localId = inject(LOCALE_ID);
  selectionMode = input<'single' | 'range' | 'multiple'>('single');
  showTimePicker = input<boolean>(false);
  timeFormat = input<'12h' | '24h'>('24h');
  locale = input<string>(this.localId);

  currentDate = signal(new Date());
  selected = signal<Date | [Date, Date] | Date[] | null>(null);
  from = signal<Date | null>(null);
  to = signal<Date | null>(null);

  hour = signal(0);
  minute = signal(0);
  meridian = signal<'AM' | 'PM'>('AM');

  months = Array.from({ length: 12 }, (_, i) =>
    new Date(2000, i, 1).toLocaleString(this.locale() ?? this.localId, {
      month: 'long',
    })
  );
  yearRange = Array.from(
    { length: 101 },
    (_, i) => new Date().getFullYear() - 50 + i
  );

  onChange = (_: any) => {};
  onTouched = () => {};

  onSelected = output<any>();

  get year() {
    return this.currentDate().getFullYear();
  }

  get month() {
    return this.currentDate().getMonth();
  }

  get daysMatrix() {
    const first = new Date(this.year, this.month, 1);
    const last = new Date(this.year, this.month + 1, 0);
    const matrix: (Date | null)[][] = [];
    let week: (Date | null)[] = [];

    for (let i = 0; i < first.getDay(); i++) week.push(null);
    for (let d = 1; d <= last.getDate(); d++) {
      const date = new Date(this.year, this.month, d);
      week.push(date);
      if (week.length === 7) {
        matrix.push(week);
        week = [];
      }
    }
    while (week.length < 7) week.push(null);
    if (week.some(Boolean)) matrix.push(week);
    return matrix;
  }

  get weekNumbers() {
    return this.daysMatrix.map((week) => {
      const firstDay = week.find((d) => !!d);
      return firstDay ? this.getWeekNumber(firstDay) : '';
    });
  }

  constructor() {
    effect(() => {
      this.onSelected.emit(this.selected());
    });
  }

  getWeekNumber(date: Date): number {
    const temp = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const dayNum = temp.getDay() || 7;
    temp.setDate(temp.getDate() + 4 - dayNum);
    const yearStart = new Date(temp.getFullYear(), 0, 1);
    return Math.ceil(
      ((temp.getTime() - yearStart.getTime()) / 86400000 + 1) / 7
    );
  }

  isSelected(date: Date | null): boolean {
    if (!date || !this.selected()) return false;
    if (this.selectionMode() === 'single') {
      return this.compareDates(this.selected() as Date, date);
    } else if (this.selectionMode() === 'range') {
      const [from, to] = this.selected() as [Date, Date];
      return from && to && date >= from && date <= to;
    } else if (this.selectionMode() === 'multiple') {
      return (this.selected() as Date[]).some((d) =>
        this.compareDates(d, date)
      );
    } else {
      return false;
    }
  }

  compareDates(d1: Date, d2: Date): boolean {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  }

  selectDate(date: Date) {
    if (this.selectionMode() === 'single') {
      const finalDate = this.combineWithTime(date);
      this.selected.set(finalDate);
      this.onChange(finalDate);
    } else if (this.selectionMode() === 'range') {
      const fromVal = this.from();
      const toVal = this.to();
      if (!fromVal || (fromVal && toVal)) {
        this.from.set(date);
        this.to.set(null);
        this.selected.set(null);
      } else {
        const newTo = date >= fromVal ? date : fromVal;
        const newFrom = date >= fromVal ? fromVal : date;
        const range: [Date, Date] = [
          this.combineWithTime(newFrom),
          this.combineWithTime(newTo),
        ];
        this.selected.set(range);
        this.from.set(newFrom);
        this.to.set(newTo);
        this.onChange(range);
      }
    } else if (this.selectionMode() === 'multiple') {
      let selectedDates = (this.selected() as Date[] | null) || [];
      const exists = selectedDates.find((d) => this.compareDates(d, date));
      if (exists) {
        selectedDates = selectedDates.filter(
          (d) => !this.compareDates(d, date)
        );
      } else {
        selectedDates = [...selectedDates, this.combineWithTime(date)];
      }
      this.selected.set(selectedDates);
      this.onChange(selectedDates);
    }
    this.onTouched();
  }

  combineWithTime(date: Date): Date {
    const h =
      this.timeFormat() === '12h'
        ? this.meridian() === 'PM'
          ? (this.hour() % 12) + 12
          : this.hour() % 12
        : this.hour();
    const m = this.minute();
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), h, m);
  }

  prevMonth() {
    this.currentDate.set(new Date(this.year, this.month - 1, 1));
  }

  nextMonth() {
    this.currentDate.set(new Date(this.year, this.month + 1, 1));
  }

  setMonth(event: any) {
    let index = +(event.target as HTMLSelectElement).value;
    this.currentDate.set(new Date(this.year, index, 1));
  }

  setYear(event: any) {
    let year = +(event.target as HTMLSelectElement).value;
    this.currentDate.set(new Date(year, this.month, 1));
  }

  writeValue(obj: Date | [Date, Date] | null): void {
    if (!obj) {
      this.selected.set(null);
      this.from.set(null);
      this.to.set(null);
      return;
    }
    this.selected.set(obj);
    if (this.selectionMode() === 'range') {
      const [f, t] = obj as [Date, Date];
      this.from.set(f);
      this.to.set(t);
    } else {
      const d = obj as Date;
      this.hour.set(d.getHours());
      this.minute.set(d.getMinutes());
      this.meridian.set(d.getHours() >= 12 ? 'PM' : 'AM');
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  isToday(day: any) {
    return (
      new Date(day).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0)
    );
  }
}
