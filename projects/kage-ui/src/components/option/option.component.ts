import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input,
  model,
} from '@angular/core';

@Component({
  selector: 'kage-option',
  imports: [NgClass],
  templateUrl: './option.component.html',
  styleUrl: './option.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KageOption {
  value = input<any>();
  label = input<string>('');
  multiple = model<boolean>(false);
  name = model<string>();
  @HostBinding('class.selected') selected = false;

  select = () => {};
}
