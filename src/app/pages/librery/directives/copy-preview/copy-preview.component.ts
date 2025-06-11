import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs, KageCopyDirective } from 'kage-ui';

@Component({
  selector: 'app-copy-preview',
  imports: [
    CodePreviewComponent,
    KageCopyDirective,
    KageBreadCrumb,
    KageBreadCrumbs,
  ],
  templateUrl: './copy-preview.component.html',
  styleUrl: './copy-preview.component.scss',
})
export class CopyPreviewComponent {
  htmlCode = `<p [kCopy]="'text here'">Click to copy</p>`;
  scssCode = ``;
  tsCode = ``;
}
