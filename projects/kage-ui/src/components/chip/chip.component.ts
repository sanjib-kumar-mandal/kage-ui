import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { KageIcon } from '../icon/icon.component';

@Component({
  selector: 'kage-chip',
  imports: [KageIcon],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KageChip {
  color = input<
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger'
    | 'success'
    | 'warning'
    | 'info'
  >();

  onRemove = output<void>();
  removable = input<boolean>(false);
  removeIconDepth = input<number>();

  removeChip() {
    this.onRemove.emit();
  }
}
