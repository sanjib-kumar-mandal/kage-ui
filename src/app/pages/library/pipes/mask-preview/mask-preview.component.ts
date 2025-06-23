import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs, KageMaskPipe } from 'kage-ui';

@Component({
  selector: 'app-mask-preview',
  imports: [
    CodePreviewComponent,
    KageBreadCrumb,
    KageBreadCrumbs,
    KageMaskPipe,
  ],
  templateUrl: './mask-preview.component.html',
  styleUrl: './mask-preview.component.scss',
})
export class MaskPreviewComponent {
  tsCode = `
  import { Component } from '@angular/core';
  import { KageMaskPipe } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageMaskPipe, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;
  htmlCode = `
    <!-- Mask all but last 4 digits of card -->
    <p>{{ '1234567812345678' | mask:'*':0:4 }}</p>

    <!-- Mask email address (keep 2 start + domain) -->
    <p>{{ 'john.doe@example.com' | mask:'*':2:12 }}</p>

    <!-- Mask everything -->
    <p>{{ 'SecretValue' | mask }}</p>
  `;
  scssCode = ``;
}
