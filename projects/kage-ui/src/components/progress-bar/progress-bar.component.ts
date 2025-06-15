import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'kage-progress-bar',
  imports: [NgClass],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KageProgressBar {
  mode = input<'determinate' | 'buffer' | 'indeterminate'>('indeterminate');
  value = input<number>(0);
  color = input<
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'warning'
    | 'danger'
    | 'success'
    | 'info'
  >('primary');
}
