import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs, KageChip } from 'kage-ui';

@Component({
  selector: 'app-chip-preview',
  imports: [CodePreviewComponent, KageBreadCrumb, KageBreadCrumbs, KageChip],
  templateUrl: './chip-preview.component.html',
  styleUrl: './chip-preview.component.scss',
})
export class ChipPreviewComponent {
  htmlCode = `<k-chip>Chip</k-chip>\n<k-chip color="danger" [removable]="true">Chip</k-chip>\n<k-chip color="success">Chip</k-chip>\n<k-chip color="warning">Chip</k-chip>\n<k-chip shape="radial">Chip</k-chip>\n<k-chip color="danger" shape="radial">Chip</k-chip>\n<k-chip color="success" shape="radial" [removable]="true">Chip</k-chip>\n<k-chip color="warning" shape="radial">Chip</k-chip>`;
  scssCode = ``;
  tsCode = `
  import { Component } from '@angular/core';
  import { KageChip } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageChip, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;
}
