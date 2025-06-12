import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';

import { KageBreadCrumb, KageBreadCrumbs, KageInput, KageIcon } from 'kage-ui';

@Component({
  selector: 'app-input-peview',
  imports: [
    CodePreviewComponent,
    KageBreadCrumb,
    KageBreadCrumbs,
    KageInput,
    KageIcon,
  ],
  templateUrl: './input-peview.component.html',
  styleUrl: './input-peview.component.scss',
})
export class InputPeviewComponent {
  htmlCode = `<k-input></k-input>\n<k-input>\n\t<mat-icon svgIcon="k-icon-mail" slot="icon-start"></mat-icon>\n</k-input>\n<k-input placeholder="Password" type="password">\n\t<mat-icon svgIcon="k-icon-eye" slot="icon-end"></mat-icon>\n</k-input>\n<k-input>\n\t<mat-icon svgIcon="k-icon-eye" slot="icon-end"></mat-icon>\n\t<p slot="hint">Place your hint here</p>\n</k-input>\n<k-input label="Lebel here">\n\t<mat-icon svgIcon="k-icon-eye" slot="icon-end"></mat-icon>\n\t<p slot="hint">Place your hint here</p>\n\t<p slot="error" style="color: red;">Place your error here</p>\n</k-input>`;
  scssCode = ``;
  tsCode = `
  import { Component } from '@angular/core';
  import { KageInput } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageInput, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;
}
