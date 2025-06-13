import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import {
  KageBreadCrumb,
  KageBreadCrumbs,
  KageRadio,
  KageRadioGroup,
} from 'kage-ui';

@Component({
  selector: 'app-radio-preview',
  imports: [
    CodePreviewComponent,
    KageBreadCrumb,
    KageBreadCrumbs,
    KageRadio,
    KageRadioGroup,
  ],
  templateUrl: './radio-preview.component.html',
  styleUrl: './radio-preview.component.scss',
})
export class RadioPreviewComponent {
  htmlCode = `
    <kage-radio-group name="colorChoice" [disabled]="false">
        <kage-radio color="primary" value="primary">Primary</kage-radio>
        <kage-radio color="secondary" value="secondary">Secondary</kage-radio>
        <kage-radio color="tertiary" value="tertiary">Tertiary</kage-radio>
        <kage-radio color="warning" value="warning">Warning</kage-radio>
        <kage-radio color="info" value="blue">Info</kage-radio>
        <kage-radio value="danger" color="danger" [disabled]="true">Danger</kage-radio>
        <kage-radio value="success" color="success">Success</kage-radio>
    </kage-radio-group>
  `;
  scssCode = ``;
  tsCode = `
  import { Component } from '@angular/core';
  import { KageRadio, KageRadioGroup } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageRadio, KageRadioGroup, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;
}
