import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs, KageProgressBar } from 'kage-ui';

@Component({
  selector: 'app-progress-bar-preview',
  imports: [
    CodePreviewComponent,
    KageBreadCrumb,
    KageBreadCrumbs,
    KageProgressBar,
  ],
  templateUrl: './progress-bar-preview.component.html',
  styleUrl: './progress-bar-preview.component.scss',
})
export class ProgressBarPreviewComponent {
  htmlCode = `<k-progress-bar></k-progress-bar>\n<k-progress-bar [value]="30" mode="determinate"></k-progress-bar>\n<k-progress-bar mode="buffer" [value]="20"></k-progress-bar>`;
}
