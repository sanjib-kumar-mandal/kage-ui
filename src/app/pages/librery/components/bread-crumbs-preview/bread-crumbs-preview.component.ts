import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs } from 'kage-ui';

@Component({
  selector: 'app-bread-crumbs-preview',
  imports: [CodePreviewComponent, KageBreadCrumb, KageBreadCrumbs, RouterLink],
  templateUrl: './bread-crumbs-preview.component.html',
  styleUrl: './bread-crumbs-preview.component.scss',
})
export class BreadCrumbsPreviewComponent {
  htmlCode = `<k-bread-crumbs>
        <k-bread-crumb label="Test" [routerLink]="'/ui-components'" [queryParams]="{opr: 'bread-crumb'}"></k-bread-crumb>
        <k-bread-crumb label="Test" href="#test"></k-bread-crumb>
        <k-bread-crumb label="Test" href="#test"></k-bread-crumb>
        <k-bread-crumb label="Test" href="#test"></k-bread-crumb>
    </k-bread-crumbs>`;
  scssCode = ``;
  tsCode = `
      import { Component } from '@angular/core';
      import { KageBreadCrumb, KageBreadCrumbs } from 'kage-ui';
      ...

      @Component({
        selector: 'app-example',
        imports: [ KageBreadCrumb, KageBreadCrumbs, ... ],
        templateUrl: '...',
        styleUrl: '...',
      })
      export class AppExampleComponent {}
  `;
}
