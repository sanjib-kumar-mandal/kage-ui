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
  htmlCode = `
    <kage-input [maxLength]="100"></kage-input>
    <kage-input style="display: block; margin-top: 20px;">
        <kage-icon name="mail" slot="icon-start" [depth]="2"></kage-icon>
    </kage-input>
    <kage-input style="display: block; margin-top: 20px;" placeholder="Password" type="password">
        <kage-icon name="eye" slot="icon-end" [depth]="2"></kage-icon>
    </kage-input>
    <kage-input style="display: block; margin-top: 20px;">
        <kage-icon name="eye" slot="icon-end" [depth]="2"></kage-icon>
        <p slot="hint">Place your hint here</p>
    </kage-input>
    <kage-input style="display: block; margin-top: 20px;" label="Lebel here">
        <kage-icon name="eye" slot="icon-end" [depth]="2"></kage-icon>
        <p slot="hint">Place your hint here</p>
        <p slot="error" style="color: red;">Place your error here</p>
    </kage-input>
  `;
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
