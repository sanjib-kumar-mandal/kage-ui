import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs, KageOrdinatePipe } from 'kage-ui';

@Component({
  selector: 'app-ordinate-preview',
  imports: [
    CodePreviewComponent,
    KageBreadCrumb,
    KageBreadCrumbs,
    KageOrdinatePipe,
  ],
  templateUrl: './ordinate-preview.component.html',
  styleUrl: './ordinate-preview.component.scss',
})
export class OrdinatePreviewComponent {
  tsCode = `
  import { Component } from '@angular/core';
  import { KageOrdinatePipe } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageOrdinatePipe, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;
  htmlCode = `
    <p>{{ 1 | ordinate }}</p>    
    <p>{{ 2 | ordinate }}</p>    
    <p>{{ 3 | ordinate }}</p>    
    <p>{{ 4 | ordinate }}</p>    
    <p>{{ 11 | ordinate }}</p>   
    <p>{{ 23 | ordinate }}</p>   
  `;
  scssCode = ``;
}
