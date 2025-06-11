import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import {
  KageBreadCrumb,
  KageBreadCrumbs,
  KageSelect,
  KageOption,
} from 'kage-ui';

@Component({
  selector: 'app-select-preview',
  imports: [
    CodePreviewComponent,
    KageBreadCrumb,
    KageBreadCrumbs,
    KageSelect,
    KageOption,
  ],
  templateUrl: './select-preview.component.html',
  styleUrl: './select-preview.component.scss',
})
export class SelectPreviewComponent {
  htmlCode = ``;
  scssCode = ``;
}
