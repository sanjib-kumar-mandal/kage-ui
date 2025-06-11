import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs } from 'kage-ui';

@Component({
  selector: 'app-capitalize-preview',
  imports: [CodePreviewComponent, KageBreadCrumb, KageBreadCrumbs],
  templateUrl: './capitalize-preview.component.html',
  styleUrl: './capitalize-preview.component.scss',
})
export class CapitalizePreviewComponent {
  tsCode = ``;
  htmlCode = `
    <p>{{ 'hello world from Stick UI' | capitalize }}</p>
    <!-- Output: "Hello World From Stick UI" -->
  `;
  scssCode = `No SCSS`;
}
