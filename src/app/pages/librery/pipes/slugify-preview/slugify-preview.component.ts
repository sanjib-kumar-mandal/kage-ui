import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs, KageSlugifyPipe } from 'kage-ui';

@Component({
  selector: 'app-slugify-preview',
  imports: [
    CodePreviewComponent,
    KageBreadCrumb,
    KageBreadCrumbs,
    KageSlugifyPipe,
  ],
  templateUrl: './slugify-preview.component.html',
  styleUrl: './slugify-preview.component.scss',
})
export class SlugifyPreviewComponent {
  title = 'My Awesome Blog Post!';
  tsCode = `
  import { Component } from '@angular/core';
  import { KageSlugifyPipe } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageSlugifyPipe, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {
    title = 'My Awesome Blog Post!';
  }
  `;
  htmlCode = `
    <h2>Slugify Example</h2>
    <p>Original: {{ title }}</p>
    <!-- Original: My Awesome Blog Post! -->
    <p>Slug: {{ title | slugify }}</p>
    <!-- Slug: my-awesome-blog-post -->
  `;
  scssCode = ``;
}
