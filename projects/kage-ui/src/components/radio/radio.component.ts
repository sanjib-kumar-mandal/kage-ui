import { NgClass } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { KageRadioGroup } from '../radio-group/radio-group.component';

@Component({
  selector: 'kage-radio',
  imports: [NgClass],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss',
})
export class KageRadio {
  value = input<any>();
  disabled = input<boolean>(false);
  isDisabled = signal(this.disabled());
  color = input<
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'medium'
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
    this.isDisabled.set(disabled);
  }

  onSelect() {
    if (this.group) {
      if (!this.isDisabled()) {
        this.group.selectValue(this.value());
      }
    } else {
      throw new Error('Radio buttons must be wrapped by <k-radio-group>');
    }
  }
}
