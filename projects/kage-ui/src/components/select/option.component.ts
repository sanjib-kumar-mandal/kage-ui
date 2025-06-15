import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'kage-option',
  template: '',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KageOption {
  value = input<any>();
  label = input<string>('');
}
