import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';

import { KageBreadCrumb, KageBreadCrumbs, KageResizeDirective } from 'kage-ui';

@Component({
  selector: 'app-resize-directive-preview',
  imports: [
    CodePreviewComponent,
    KageBreadCrumb,
    KageBreadCrumbs,
    KageResizeDirective,
  ],
  templateUrl: './resize-directive-preview.component.html',
  styleUrl: './resize-directive-preview.component.scss',
})
export class ResizeDirectivePreviewComponent {
  htmlCode = `
  <div
      [debounceTime]="150"
      resizeMode="throttle"
      [observeWidth]="true"
      [observeHeight]="true"
      [minWidthClass]="{ width: 400, className: 'wide' }"
      [maxWidthClass]="{ width: 300, className: 'narrow' }"
      [minHeightClass]="{ height: 300, className: 'tall' }"
      [maxHeightClass]="{ height: 150, className: 'short' }"
      [onResize]="handleResize"
      (kageResized)="onResize($event)"
      class="box"
  >
    Resize me!
  </div>
  `;
  tsCode = `
  import { Component } from '@angular/core';
  import { KageResizeDirective } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageResizeDirective, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;

  handleResize() {
    console.log('Handle own');
  }

  onResize(event: any) {
    console.log(event);
  }
}
