import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'kage-fab-item',
  template: '<ng-template #content><ng-content></ng-content></ng-template>',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KageFabItem {
  title = input<string>();
  color = input<'danger' | 'success' | 'warning'>();
  redirectURI = input<string>();
  disabled: InputSignal<boolean> = input<boolean>(false);
  @ViewChild('content', { read: TemplateRef }) content!: TemplateRef<any>;
}
