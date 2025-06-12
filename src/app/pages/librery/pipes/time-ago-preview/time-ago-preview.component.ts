import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs, KageTimeAgoPipe } from 'kage-ui';

@Component({
  selector: 'app-time-ago-preview',
  imports: [
    CodePreviewComponent,
    KageBreadCrumb,
    KageBreadCrumbs,
    KageTimeAgoPipe,
  ],
  templateUrl: './time-ago-preview.component.html',
  styleUrl: './time-ago-preview.component.scss',
})
export class TimeAgoPreviewComponent {
  publishedDate = new Date(Date.now() - 3600 * 1000 * 3);
  tsCode = `
  import { Component } from '@angular/core';
  import { KageTimeAgoPipe } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageTimeAgoPipe, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {
    publishedDate = new Date(Date.now() - 3600 * 1000 * 3);
  }
  `;
  htmlCode = `
    <h2>Time Ago Example</h2>
    <p>Published: {{ publishedDate | timeAgo }}</p>
    <!-- 3 hours ago -->
  `;
  scssCode = ``;
}
