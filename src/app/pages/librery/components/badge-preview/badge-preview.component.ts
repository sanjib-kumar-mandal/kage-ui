import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs, KageBadge } from 'kage-ui';

@Component({
  selector: 'app-badge-preview',
  imports: [CodePreviewComponent, KageBreadCrumb, KageBreadCrumbs, KageBadge],
  templateUrl: './badge-preview.component.html',
  styleUrl: './badge-preview.component.scss',
})
export class BadgePreviewComponent {
  htmlCode = `
    <kage-badge>1K</kage-badge>
    <kage-badge color="primary">10K</kage-badge>
    <kage-badge color="secondary">100K</kage-badge>
    <kage-badge color="tertiary">1000K</kage-badge>
    <kage-badge color="danger">10000K</kage-badge>
    <kage-badge color="success">50000K</kage-badge>
    <kage-badge color="warning">100000K</kage-badge>
    <kage-badge color="info">500000K</kage-badge>
  `;
  tsCode = `
      import { Component } from '@angular/core';
      import { KageBadge } from 'kage-ui';
      ...

      @Component({
        selector: 'app-example',
        imports: [ KageBadge, ... ],
        templateUrl: '...',
        styleUrl: '...',
      })
      export class AppExampleComponent {}
    `;
}
