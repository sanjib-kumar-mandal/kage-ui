import { NgClass, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  input,
  output,
  QueryList,
} from '@angular/core';
import { KageFabItem } from './fab-button-expand-item.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'kage-fab-button',
  imports: [NgClass, NgTemplateOutlet, RouterLink],
  templateUrl: './fab-button.component.html',
  styleUrl: './fab-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KageFab {
  @ContentChildren(KageFabItem)
  expandItems!: QueryList<KageFabItem>;

  color = input<
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger'
    | 'success'
    | 'warning'
    | 'info'
  >();
  position = input<'top-right' | 'top-left' | 'bottom-left' | 'bottom-right'>(
    'bottom-left'
  );
  cssClass = input<string>();

  onClick = output<Event>();
  onChange = output<string>();

  clicked(event: Event) {
    this.onClick.emit(event);
  }

  onChangeEffect(event: any) {
    const checked = event.target.checked;
    this.onChange.emit(checked ? 'opened' : 'closed');
  }
}
