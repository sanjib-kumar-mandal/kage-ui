import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs } from 'kage-ui';

@Component({
  selector: 'app-slugify-preview',
  imports: [CodePreviewComponent, KageBreadCrumb, KageBreadCrumbs],
  templateUrl: './slugify-preview.component.html',
  styleUrl: './slugify-preview.component.scss',
})
export class SlugifyPreviewComponent {
  tsCode = `
    title = 'My Awesome Blog Post!';
  `;
  htmlCode = `
    <h2>Slugify Example</h2>
    <p>Original: {{ title }}</p>
    <!-- Original: My Awesome Blog Post! -->
    <p>Slug: {{ title | slugify }}</p>
    <!-- Slug: my-awesome-blog-post -->
  `;
  scssCode = `No SCSS`;
}
