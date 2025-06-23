import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs, KageHighlightPipe } from 'kage-ui';

@Component({
  selector: 'app-highlight-preview',
  imports: [
    CodePreviewComponent,
    KageBreadCrumb,
    KageBreadCrumbs,
    KageHighlightPipe,
  ],
  templateUrl: './highlight-preview.component.html',
  styleUrl: './highlight-preview.component.scss',
})
export class HighlightPreviewComponent {
  description = 'Kage UI is a powerful library for building web apps.';
  searchTerm = 'Kage';
  tsCode = `
  import { Component } from '@angular/core';
  import { KageHighlightPipe } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageHighlightPipe, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {
    description = 'Kage UI is a powerful library for building web apps.';
    searchTerm = 'Kage';
  }
  `;
  htmlCode = `<p [innerHTML]="description | highlight:searchTerm"></p>`;
  scssCode = ``;
}
