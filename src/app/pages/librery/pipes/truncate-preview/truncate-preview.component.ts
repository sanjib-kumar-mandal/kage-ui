import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs } from 'kage-ui';

@Component({
  selector: 'app-truncate-preview',
  imports: [CodePreviewComponent, KageBreadCrumb, KageBreadCrumbs],
  templateUrl: './truncate-preview.component.html',
  styleUrl: './truncate-preview.component.scss',
})
export class TruncatePreviewComponent {
  tsCode = ``;
  htmlCode = `
    <!-- Truncate to 10 characters -->
    <p>{{ 'This is a long sentence that needs truncation.' | truncate:10 }}</p>
    <!-- Output: "This is a ..." -->

    <!-- Custom suffix -->
    <p>{{ 'Stick UI is awesome' | truncate:8:' >>' }}</p>
    <!-- Output: "Stick UI >>" -->

    <!-- No truncation needed -->
    <p>{{ 'Short' | truncate:10 }}</p>
    <!-- Output: "Short" -->
  `;
  scssCode = `No SCSS`;
}
