import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import {
  KageBreadCrumb,
  KageBreadCrumbs,
  KageSelect,
  KageOption,
} from 'kage-ui';

@Component({
  selector: 'app-select-preview',
  imports: [
    CodePreviewComponent,
    KageBreadCrumb,
    KageBreadCrumbs,
    KageSelect,
    KageOption,
  ],
  templateUrl: './select-preview.component.html',
  styleUrl: './select-preview.component.scss',
})
export class SelectPreviewComponent {
  htmlCode = ``;
  scssCode = ``;
  tsCode = `
  import { Component } from '@angular/core';
  import { KageSelect, KageOption } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageSelect, KageOption, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;
}
