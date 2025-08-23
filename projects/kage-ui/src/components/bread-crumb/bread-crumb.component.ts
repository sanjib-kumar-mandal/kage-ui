import { Component, input } from '@angular/core';

@Component({
  selector: 'kage-bread-crumb',
  template: '',
})
export class KageBreadCrumb {
  label = input<string>();
  href = input<string>();
}
