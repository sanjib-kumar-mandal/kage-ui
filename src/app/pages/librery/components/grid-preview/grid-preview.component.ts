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
export class GridPreviewComponent {}
