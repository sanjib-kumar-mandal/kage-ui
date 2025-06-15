import { NgClass } from '@angular/common';
import { Component, input, model } from '@angular/core';
import { KageRadioGroup } from '../radio-group/radio-group.component';

@Component({
  selector: 'kage-radio',
  imports: [NgClass],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss',
})
export class KageRadio {
  value = input<any>();
  disabled = model<boolean>(false);
  color = input<
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
  >('primary');
  checked = false;
  cssClass = input<string>();

  name = '';
  private group!: KageRadioGroup;

  setGroup(group: KageRadioGroup) {
    this.group = group;
    this.name = group.name();
  }

  setDisabled(disabled: boolean) {
    this.disabled.set(disabled);
  }

  onSelect() {
    if (this.group) {
      if (!this.disabled()) {
        this.group.selectValue(this.value());
      }
    } else {
      throw new Error('Radio buttons must be wrapped by <k-radio-group>');
    }
  }
}
