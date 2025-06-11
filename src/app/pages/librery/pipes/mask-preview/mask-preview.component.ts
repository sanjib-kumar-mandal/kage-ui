import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs } from 'kage-ui';

@Component({
  selector: 'app-mask-preview',
  imports: [CodePreviewComponent, KageBreadCrumb, KageBreadCrumbs],
  templateUrl: './mask-preview.component.html',
  styleUrl: './mask-preview.component.scss',
})
export class MaskPreviewComponent {
  tsCode = ``;
  htmlCode = `
    <!-- Mask all but last 4 digits of card -->
    <p>{{ '1234567812345678' | mask:'*':0:4 }}</p>
    <!-- Output: ************5678 -->

    <!-- Mask email address (keep 2 start + domain) -->
    <p>{{ 'john.doe@example.com' | mask:'*':2:12 }}</p>
    <!-- Output: jo*********@example.com -->

    <!-- Mask everything -->
    <p>{{ 'SecretValue' | mask }}</p>
    <!-- Output: *********** -->
  `;
  scssCode = `No SCSS`;
}
