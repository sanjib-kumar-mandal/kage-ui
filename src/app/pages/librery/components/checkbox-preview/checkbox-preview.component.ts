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
  htmlCode = `<k-checkbox>Default Checkbox</k-checkbox>\n<k-checkbox color="warning">Warning Checkbox</k-checkbox>\n<k-checkbox color="success">Success Checkbox</k-checkbox>\n<k-checkbox color="danger">Danger Checkbox</k-checkbox>`;
  scssCode = ``;
  tsCode = ``;
}
