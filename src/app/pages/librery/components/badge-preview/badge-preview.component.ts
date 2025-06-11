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
  htmlCode = `<k-badge>100K</k-badge>\n<k-badge color="danger">10K</k-badge>\n<k-badge color="success">50K</k-badge>\n<k-badge color="warning">100K</k-badge>`;
}
