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
  htmlCode = `
    <kage-chip>Chip</kage-chip>
    <kage-chip color="danger" [removable]="true">Danger</kage-chip>
    <kage-chip color="success">Success</kage-chip>
    <kage-chip color="warning">Warning</kage-chip>
    <kage-chip color="primary">Primary</kage-chip>
    <kage-chip color="secondary">Secondary</kage-chip>
    <kage-chip color="tertiary">Tertiary</kage-chip>
    <kage-chip color="info">Info</kage-chip>

    <kage-chip shape="radial">Chip</kage-chip>
    <kage-chip color="danger" shape="radial">Chip</kage-chip>
    <kage-chip color="success" shape="radial" [removable]="true">Chip</kage-chip>
    <kage-chip color="warning" shape="radial">Chip</kage-chip>
    <kage-chip color="primary" shape="radial">Primary</kage-chip>
    <kage-chip color="secondary" shape="radial">Secondary</kage-chip>
    <kage-chip color="tertiary" shape="radial">Tertiary</kage-chip>
    <kage-chip color="info" shape="radial">Info</kage-chip>
  `;
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
