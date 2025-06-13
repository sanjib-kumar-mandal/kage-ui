import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';

import { KageBreadCrumb, KageBreadCrumbs, KageRange } from 'kage-ui';

@Component({
  selector: 'app-range-preview',
  imports: [CodePreviewComponent, KageBreadCrumb, KageBreadCrumbs, KageRange],
  templateUrl: './range-preview.component.html',
  styleUrl: './range-preview.component.scss',
})
export class RangePreviewComponent {
  htmlCode = `
    <kage-range></kage-range>
    <kage-range color="danger" [showTooltip]="true"></kage-range>
    <kage-range color="success" [showTooltip]="true"></kage-range>
    <kage-range color="warning" [showTooltip]="true"></kage-range>
  `;
  scssCode = ``;
  tsCode = `
  import { Component } from '@angular/core';
  import { KageRange } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageRange, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;
}
