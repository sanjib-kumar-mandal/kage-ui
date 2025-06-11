import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs } from 'kage-ui';

@Component({
  selector: 'app-highlight-preview',
  imports: [CodePreviewComponent, KageBreadCrumb, KageBreadCrumbs],
  templateUrl: './highlight-preview.component.html',
  styleUrl: './highlight-preview.component.scss',
})
export class HighlightPreviewComponent {
  tsCode = `
    description = 'Angular is a powerful framework for building web apps.';
    searchTerm = 'angular';
  `;
  htmlCode = `
    <p [innerHTML]="description | highlight:searchTerm"></p>
  `;
  scssCode = `No SCSS`;
}
