import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'kage-row',
  imports: [NgClass],
  templateUrl: './row.component.html',
  styleUrl: './row.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KageRow {
  align = input<'start' | 'center' | 'end'>('start');
  justify = input<'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'>(
    'start'
  );

  get alignClass() {
    return 'align-' + this.align();
  }

  get justifyClass() {
    return 'justify-' + this.justify();
  }
}
