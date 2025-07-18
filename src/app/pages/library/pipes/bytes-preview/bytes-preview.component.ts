import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs } from 'kage-ui';

@Component({
  selector: 'app-bytes-preview',
  imports: [CodePreviewComponent, KageBreadCrumb, KageBreadCrumbs],
  templateUrl: './bytes-preview.component.html',
  styleUrl: './bytes-preview.component.scss',
})
export class BytesPreviewComponent {
  tsCode = `
  import { Component } from '@angular/core';
  import { KageBytesPipe } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageBytesPipe, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;
  htmlCode = `
    <p>{{ 1048576 | bytes }}</p>
    <!-- Output: "1 MB" -->

    <p>{{ 2048 | bytes:0 }}</p>
    <!-- Output: "2 KB" -->
  `;
  scssCode = ``;
}
