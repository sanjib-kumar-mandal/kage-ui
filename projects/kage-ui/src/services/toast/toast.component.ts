import {
  Component,
  EventEmitter,
  input,
  Input,
  model,
  Output,
} from '@angular/core';
import { KageToastType } from './toast.model';
import { KageIcon } from '../../components/icon/icon.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'k-toast-host',
  template: `
    <div class="k-toast-container" [ngClass]="[type()]">
      <p>{{ message() }}</p>
      <div class="icon" (click)="dismiss.emit()">
        <kage-icon name="remove"></kage-icon>
      </div>
    </div>
  `,
  styleUrls: ['./toast.component.scss'],
  imports: [KageIcon, NgClass],
})
export class KageToastHost {
  message = input<string>('');
  type = input<KageToastType>('info');
  @Output() dismiss = new EventEmitter<void>();
}
