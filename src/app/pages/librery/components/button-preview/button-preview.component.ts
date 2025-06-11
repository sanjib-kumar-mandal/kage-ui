import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs, KageButton } from 'kage-ui';

@Component({
  selector: 'app-button-preview',
  imports: [CodePreviewComponent, KageBreadCrumb, KageBreadCrumbs, KageButton],
  templateUrl: './button-preview.component.html',
  styleUrl: './button-preview.component.scss',
})
export class ButtonPreviewComponent {
  htmlCode = `<k-button color="danger" [loading]="true">Button</k-button>\n<k-button color="success">Button</k-button>\n<k-button color="warning">Button</k-button>`;
  scssCode = ``;
}
