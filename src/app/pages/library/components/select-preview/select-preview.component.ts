import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import {
  KageBreadCrumb,
  KageBreadCrumbs,
  KageSelect,
  KageOption,
  KageIcon,
} from 'kage-ui';

@Component({
  selector: 'app-select-preview',
  imports: [
    CodePreviewComponent,
    KageBreadCrumb,
    KageBreadCrumbs,
    KageSelect,
    KageOption,
    KageIcon,
  ],
  templateUrl: './select-preview.component.html',
  styleUrl: './select-preview.component.scss',
})
export class SelectPreviewComponent {
  htmlCode = `
    <kage-select placeholder="Choose fruits" [disabled]="true">
        <kage-icon name="document" slot="icon-start" [depth]="3"></kage-icon>
        @for (fruit of ['Apple', 'Banana', 'Orange']; track $index) {
            <kage-option [value]="fruit" [label]="fruit"></kage-option>
        }
    </kage-select>
    <kage-select placeholder="Choose fruits">
        <kage-icon name="document" slot="icon-start" [depth]="3"></kage-icon>
        @for (fruit of ['Apple', 'Banana', 'Orange']; track $index) {
            <kage-option [value]="fruit" [label]="fruit"></kage-option>
        }
        <kage-icon name="person" slot="icon-end" [depth]="3"></kage-icon>
    </kage-select>
    <kage-select placeholder="Choose fruits">
        @for (fruit of ['Apple', 'Banana', 'Orange']; track $index) {
            <kage-option [value]="fruit" [label]="fruit"></kage-option>
        }
        <kage-icon name="person" slot="icon-end" [depth]="3"></kage-icon>
    </kage-select>
  `;
  scssCode = ``;
  tsCode = `
  import { Component } from '@angular/core';
  import { KageSelect, KageOption } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageSelect, KageOption, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;
}
