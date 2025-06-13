import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';

import { KageBreadCrumb, KageBreadCrumbs, KageCheckbox } from 'kage-ui';

@Component({
  selector: 'app-checkbox-preview',
  imports: [
    KageBreadCrumb,
    KageBreadCrumbs,
    KageCheckbox,
    CodePreviewComponent,
  ],
  templateUrl: './checkbox-preview.component.html',
  styleUrl: './checkbox-preview.component.scss',
})
export class CheckboxPreviewComponent {
  htmlCode = `
    <kage-checkbox>Default Checkbox</kage-checkbox>
    <kage-checkbox color="primary">Primary Checkbox</kage-checkbox>
    <kage-checkbox color="secondary">Secondary Checkbox</kage-checkbox>
    <kage-checkbox color="tertiary">Tertiary Checkbox</kage-checkbox>
    <kage-checkbox color="warning">Warning Checkbox</kage-checkbox>
    <kage-checkbox color="success">Success Checkbox</kage-checkbox>
    <kage-checkbox color="danger">Danger Checkbox</kage-checkbox>
    <kage-checkbox color="info">Info Checkbox</kage-checkbox>
  `;
  scssCode = ``;
  tsCode = `
  import { Component } from '@angular/core';
  import { KageCheckbox } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageCheckbox, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;
}
