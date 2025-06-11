import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs, KageToggle } from 'kage-ui';

@Component({
  selector: 'app-toggle-preview',
  imports: [CodePreviewComponent, KageBreadCrumb, KageBreadCrumbs, KageToggle],
  templateUrl: './toggle-preview.component.html',
  styleUrl: './toggle-preview.component.scss',
})
export class TogglePreviewComponent {
  htmlCode = ``;
  scssCode = ``;
  tsCode = ``;
}
