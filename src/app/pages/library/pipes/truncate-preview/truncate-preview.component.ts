import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs, KageTruncatePipe } from 'kage-ui';

@Component({
  selector: 'app-truncate-preview',
  imports: [
    CodePreviewComponent,
    KageBreadCrumb,
    KageBreadCrumbs,
    KageTruncatePipe,
  ],
  templateUrl: './truncate-preview.component.html',
  styleUrl: './truncate-preview.component.scss',
})
export class TruncatePreviewComponent {
  tsCode = `
  import { Component } from '@angular/core';
  import { KageTruncatePipe } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageTruncatePipe, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;
  htmlCode = `
    <!-- Truncate to 10 characters -->
    <p>{{ 'This is a long sentence that needs truncation.' | truncate:10 }}</p>
    <!-- Output: "This is a ..." -->

    <!-- Custom suffix -->
    <p>{{ 'Kage UI is awesome' | truncate:8:' >>' }}</p>
    <!-- Output: "Kage UI >>" -->

    <!-- No truncation needed -->
    <p>{{ 'Short' | truncate:10 }}</p>
    <!-- Output: "Short" -->
  `;
  scssCode = ``;
}
