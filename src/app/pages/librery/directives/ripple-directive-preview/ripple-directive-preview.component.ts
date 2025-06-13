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
  htmlCode = `<div kageRipple [rippleColor]="'red'">Click me</div>`;
  scssCode = `
    div {
      display: inline-block; 
      padding: 7px 15px; 
      border: 2px solid red;
    }
  `;
  tsCode = `
  import { Component } from '@angular/core';
  import { KageRippleDirective } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageRippleDirective, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;
}
