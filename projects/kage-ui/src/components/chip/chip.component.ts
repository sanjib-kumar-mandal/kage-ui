import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { KageIcon } from '../icon/icon.component';

@Component({
  selector: 'kage-chip',
  imports: [NgClass, KageIcon],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KageChip {
  removable = input<boolean>(false);
  color = input<
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger'
    | 'success'
    | 'warning'
    | 'info'
  >();
  shape = input<'radial' | 'sharp'>('sharp');

  onRemove = output<void>();

  removeChip() {
    this.onRemove.emit();
  }
}
