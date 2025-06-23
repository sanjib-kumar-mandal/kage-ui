import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import {
  KageBreadCrumb,
  KageBreadCrumbs,
  KageGrid,
  KageRow,
  KageCol,
} from 'kage-ui';

@Component({
  selector: 'app-grid-preview',
  imports: [
    CodePreviewComponent,
    KageBreadCrumb,
    KageBreadCrumbs,
    KageGrid,
    KageRow,
    KageCol,
  ],
  templateUrl: './grid-preview.component.html',
  styleUrl: './grid-preview.component.scss',
})
export class GridPreviewComponent {
  htmlCode = `
    <kage-grid>
        <kage-row>
            <kage-col [span]="6"><p>Col 1</p></kage-col>
            <kage-col [span]="6"> Col 2</kage-col>
        </kage-row>
        <kage-row>
            <kage-col [span]="12">Col 3</kage-col>
        </kage-row>
    </kage-grid>
  `;
  tsCode = `
  import { Component } from '@angular/core';
  import { KageGrid, KageRow, KageCol } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageGrid, KageRow, KageCol, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;
}
