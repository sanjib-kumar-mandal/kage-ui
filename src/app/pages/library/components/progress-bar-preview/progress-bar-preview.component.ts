import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs, KageProgressBar } from 'kage-ui';

@Component({
  selector: 'app-progress-bar-preview',
  imports: [
    CodePreviewComponent,
    KageBreadCrumb,
    KageBreadCrumbs,
    KageProgressBar,
  ],
  templateUrl: './progress-bar-preview.component.html',
  styleUrl: './progress-bar-preview.component.scss',
})
export class ProgressBarPreviewComponent {
  htmlCode = `
    <kage-progress-bar color="secondary"></kage-progress-bar>
    <kage-progress-bar color="danger" [value]="30" mode="determinate"></kage-progress-bar>
    <kage-progress-bar color="success" mode="buffer" [value]="20"></kage-progress-bar>
  `;
  tsCode = `
  import { Component } from '@angular/core';
  import { KageProgressBar } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageProgressBar, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;
}
