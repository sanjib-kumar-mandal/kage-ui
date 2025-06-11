import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs } from 'kage-ui';

@Component({
  selector: 'app-ordinate-preview',
  imports: [CodePreviewComponent, KageBreadCrumb, KageBreadCrumbs],
  templateUrl: './ordinate-preview.component.html',
  styleUrl: './ordinate-preview.component.scss',
})
export class OrdinatePreviewComponent {
  tsCode = ``;
  htmlCode = `
    <p>{{ 1 | ordinate }}</p>     <!-- 1st -->
    <p>{{ 2 | ordinate }}</p>     <!-- 2nd -->
    <p>{{ 3 | ordinate }}</p>     <!-- 3rd -->
    <p>{{ 4 | ordinate }}</p>     <!-- 4th -->
    <p>{{ 11 | ordinate }}</p>    <!-- 11th -->
    <p>{{ 23 | ordinate }}</p>    <!-- 23rd -->
  `;
  scssCode = `No SCSS`;
}
