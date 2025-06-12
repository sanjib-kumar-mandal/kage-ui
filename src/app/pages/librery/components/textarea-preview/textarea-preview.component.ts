import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs, KageTextarea } from 'kage-ui';

@Component({
  selector: 'app-textarea-preview',
  imports: [
    CodePreviewComponent,
    KageBreadCrumb,
    KageBreadCrumbs,
    KageTextarea,
  ],
  templateUrl: './textarea-preview.component.html',
  styleUrl: './textarea-preview.component.scss',
})
export class TextareaPreviewComponent {
  htmlCode = ``;
  scssCode = ``;
  tsCode = `
  import { Component } from '@angular/core';
  import { KageTextarea } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageTextarea, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;
}
