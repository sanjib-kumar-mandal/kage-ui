import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'kage-bread-crumb',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KageBreadCrumb {
  label = input<string>();
  href = input<string>();
}
