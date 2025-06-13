import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';

import { KageBreadCrumb, KageBreadCrumbs, KageFab, KageFabItem } from 'kage-ui';

@Component({
  selector: 'app-fab-preview',
  imports: [
    CodePreviewComponent,
    MatIconModule,
    KageBreadCrumb,
    KageBreadCrumbs,
    KageFab,
    KageFabItem,
  ],
  templateUrl: './fab-preview.component.html',
  styleUrl: './fab-preview.component.scss',
})
export class FabPreviewComponent {
  htmlCode = `
  <div class="fab-container">
      <kage-fab-button color="success" position="top-right">
          <mat-icon slot='icon' fontIcon="add"></mat-icon>
          <kage-fab-item color="danger"><mat-icon fontIcon="home"></mat-icon></kage-fab-item>
          <kage-fab-item><mat-icon fontIcon="refresh"></mat-icon></kage-fab-item>
      </kage-fab-button>
      <kage-fab-button color="danger" position="top-left">
          <mat-icon slot='icon' fontIcon="add"></mat-icon>
          <kage-fab-item [disabled]="true"><mat-icon fontIcon="sync"></mat-icon></kage-fab-item>
          <kage-fab-item><mat-icon fontIcon="terminal"></mat-icon></kage-fab-item>
      </kage-fab-button>
      <kage-fab-button color="warning" position="bottom-left">
          <mat-icon slot='icon' fontIcon="add"></mat-icon>
          <kage-fab-item><mat-icon fontIcon="file_open"></mat-icon></kage-fab-item>
          <kage-fab-item><mat-icon fontIcon="downloading"></mat-icon></kage-fab-item>
      </kage-fab-button>
      <kage-fab-button position="bottom-right">
          <mat-icon slot='icon' fontIcon="add"></mat-icon>
          <kage-fab-item><mat-icon fontIcon="token"></mat-icon></kage-fab-item>
          <kage-fab-item [disabled]="true"><mat-icon fontIcon="assistant_navigation"></mat-icon></kage-fab-item>
      </kage-fab-button>
  </div>
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
