import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs, KageCapitalizePipe } from 'kage-ui';

@Component({
  selector: 'app-capitalize-preview',
  imports: [
    CodePreviewComponent,
    KageBreadCrumb,
    KageBreadCrumbs,
    KageCapitalizePipe,
  ],
  templateUrl: './capitalize-preview.component.html',
  styleUrl: './capitalize-preview.component.scss',
})
export class CapitalizePreviewComponent {
  tsCode = `
  import { Component } from '@angular/core';
  import { KageCapitalizePipe } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageCapitalizePipe, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;
  htmlCode = `<p>{{ 'hello world from Kage UI' | capitalize }}</p>`;
  scssCode = ``;
}
