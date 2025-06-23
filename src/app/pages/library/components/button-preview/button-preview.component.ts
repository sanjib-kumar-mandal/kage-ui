import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs, KageButton } from 'kage-ui';

@Component({
  selector: 'app-button-preview',
  imports: [CodePreviewComponent, KageBreadCrumb, KageBreadCrumbs, KageButton],
  templateUrl: './button-preview.component.html',
  styleUrl: './button-preview.component.scss',
})
export class ButtonPreviewComponent {
  htmlCode = `
  <kage-button color="primary">Primary</kage-button>
  <kage-button color="secondary">Secondary</kage-button>
  <kage-button color="tertiary">Tertiary</kage-button>
  <kage-button color="danger" [loading]="true">Danger</kage-button>
  <kage-button color="success">Success</kage-button>
  <kage-button color="warning">Warning</kage-button>
  <kage-button color="info">Info</kage-button>
  <kage-button color="primary" fill="clear">Clear</kage-button>
  `;
  scssCode = ``;
  tsCode = `
  import { Component } from '@angular/core';
  import { KageButton } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageButton, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;
}
