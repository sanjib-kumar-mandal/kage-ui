import { Component, input } from '@angular/core';

@Component({
  selector: 'kage-option',
  template: '',
  styles: '',
})
export class KageOption {
  value = input<any>();
  label = input<string>('');
}
