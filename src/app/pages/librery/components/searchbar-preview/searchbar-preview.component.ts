import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs, KageSearchbar } from 'kage-ui';

@Component({
  selector: 'app-searchbar-preview',
  imports: [
    CodePreviewComponent,
    KageBreadCrumb,
    KageBreadCrumbs,
    KageSearchbar,
  ],
  templateUrl: './searchbar-preview.component.html',
  styleUrl: './searchbar-preview.component.scss',
})
export class SearchbarPreviewComponent {
  htmlCode = `
    <kage-searchbar></kage-searchbar>
    <kage-searchbar [disabled]="true"></kage-searchbar>
  `;
  scssCode = ``;
  tsCode = `
  import { Component } from '@angular/core';
  import { KageSearchbar } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageSearchbar, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;
}
