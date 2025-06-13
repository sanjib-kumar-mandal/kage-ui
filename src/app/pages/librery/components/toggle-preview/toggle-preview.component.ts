import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs, KageToggle } from 'kage-ui';

@Component({
  selector: 'app-toggle-preview',
  imports: [CodePreviewComponent, KageBreadCrumb, KageBreadCrumbs, KageToggle],
  templateUrl: './toggle-preview.component.html',
  styleUrl: './toggle-preview.component.scss',
})
export class TogglePreviewComponent {
  htmlCode = `
    <kage-toggle [disabled]="true">Disabled here</kage-toggle>
    <kage-toggle color="primary">Primary</kage-toggle>
    <kage-toggle color="secondary">Secondary</kage-toggle>
    <kage-toggle color="tertiary">Tertiary</kage-toggle>
    <kage-toggle color="success">Success</kage-toggle>
    <kage-toggle color="danger">Danger</kage-toggle>
    <kage-toggle color="warning">Warning</kage-toggle>
    <kage-toggle color="info">Info</kage-toggle>
  `;
  scssCode = ``;
  tsCode = `
  import { Component } from '@angular/core';
  import { KageToggle } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageToggle, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;
}
