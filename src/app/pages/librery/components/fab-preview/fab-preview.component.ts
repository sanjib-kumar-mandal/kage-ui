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
  htmlCode = `<k-fab-button color="success" position="top-right">
            <mat-icon slot='icon' fontIcon="add"></mat-icon>
            <k-fab-button-expand-item color="danger"><mat-icon fontIcon="home"></mat-icon></k-fab-button-expand-item>
            <k-fab-button-expand-item><mat-icon fontIcon="refresh"></mat-icon></k-fab-button-expand-item>
        </k-fab-button>
        <k-fab-button color="danger" position="top-left">
            <mat-icon slot='icon' fontIcon="add"></mat-icon>
            <k-fab-button-expand-item [disabled]="true"><mat-icon fontIcon="sync"></mat-icon></k-fab-button-expand-item>
            <k-fab-button-expand-item><mat-icon fontIcon="terminal"></mat-icon></k-fab-button-expand-item>
        </k-fab-button>
        <k-fab-button color="warning" position="bottom-left">
            <mat-icon slot='icon' fontIcon="add"></mat-icon>
            <k-fab-button-expand-item><mat-icon fontIcon="file_open"></mat-icon></k-fab-button-expand-item>
            <k-fab-button-expand-item><mat-icon fontIcon="downloading"></mat-icon></k-fab-button-expand-item>
        </k-fab-button>
        <k-fab-button position="bottom-right">
            <mat-icon slot='icon' fontIcon="add"></mat-icon>
            <k-fab-button-expand-item><mat-icon fontIcon="token"></mat-icon></k-fab-button-expand-item>
            <k-fab-button-expand-item [disabled]="true"><mat-icon fontIcon="assistant_navigation"></mat-icon></k-fab-button-expand-item>
        </k-fab-button>`;
}
