import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageRippleDirective, KageBreadCrumb, KageBreadCrumbs } from 'kage-ui';

@Component({
  selector: 'app-ripple-directive-preview',
  imports: [
    CodePreviewComponent,
    KageBreadCrumb,
    KageBreadCrumbs,
    KageRippleDirective,
  ],
  templateUrl: './ripple-directive-preview.component.html',
  styleUrl: './ripple-directive-preview.component.scss',
})
export class RippleDirectivePreviewComponent {
  htmlCode = `<div style="width: 100px; height: 20px; border: 2px solid red;" kRipple [rippleColor]="'red'">Click me</div>`;
  scssCode = ``;
  tsCode = ``;
}
