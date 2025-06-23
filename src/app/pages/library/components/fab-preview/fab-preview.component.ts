import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';

import {
  KageBreadCrumb,
  KageBreadCrumbs,
  KageFab,
  KageFabItem,
  KageIcon,
} from 'kage-ui';

@Component({
  selector: 'app-fab-preview',
  imports: [
    CodePreviewComponent,
    MatIconModule,
    KageBreadCrumb,
    KageBreadCrumbs,
    KageFab,
    KageFabItem,
    KageIcon,
  ],
  templateUrl: './fab-preview.component.html',
  styleUrl: './fab-preview.component.scss',
})
export class FabPreviewComponent {
  htmlCode = `
  <kage-fab-button color="success" position="top-right">
      <kage-fab-item color="danger"><kage-icon name="home" [depth]="3"></kage-icon></kage-fab-item>
      <kage-fab-item><kage-icon name="terminal" [depth]="3"></kage-icon></kage-fab-item>
  </kage-fab-button>
  <kage-fab-button color="danger" position="top-left">
      <kage-icon [depth]="3" slot="icon" name="home"></kage-icon>
      <kage-fab-item [disabled]="true"><kage-icon name="home" [depth]="3"></kage-icon></kage-fab-item>
      <kage-fab-item><kage-icon name="terminal" [depth]="3"></kage-icon></kage-fab-item>
  </kage-fab-button>
  <kage-fab-button color="warning" position="bottom-left">
      <kage-icon [depth]="3" slot="icon" name="person"></kage-icon>
      <kage-fab-item color="danger"><kage-icon name="person" [depth]="3"></kage-icon></kage-fab-item>
      <kage-fab-item><kage-icon name="download" [depth]="3"></kage-icon></kage-fab-item>
  </kage-fab-button>
  <kage-fab-button position="bottom-right">
      <kage-icon [depth]="3" slot="icon" name="chevron-down" [depth]="3"></kage-icon>
      <kage-fab-item><kage-icon name="terminal" [depth]="3"></kage-icon></kage-fab-item>
      <kage-fab-item [disabled]="true"><kage-icon name="terminal"></kage-icon></kage-fab-item>
  </kage-fab-button>
  `;
  tsCode = `
    import { Component } from '@angular/core';
    import { KageCheckbox } from 'kage-ui';
    ...

    @Component({
      selector: 'app-example',
      imports: [ KageFab, KageFabItem, ... ],
      templateUrl: '...',
      styleUrl: '...',
    })
    export class AppExampleComponent {}
  `;
}
