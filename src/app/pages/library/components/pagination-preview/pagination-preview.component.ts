import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs, KagePagination } from 'kage-ui';

@Component({
  selector: 'app-pagination-preview',
  imports: [
    KagePagination,
    KageBreadCrumbs,
    KageBreadCrumb,
    CodePreviewComponent,
  ],
  templateUrl: './pagination-preview.component.html',
  styleUrl: './pagination-preview.component.scss',
})
export class PaginationPreviewComponent {
  pagination = {
    totalPages: 10,
    currentPage: 3,
  };
  htmlCode = `
    <kage-pagination [info]="pagination" color="primary"></kage-pagination>
    <kage-pagination [info]="pagination" color="secondary"></kage-pagination>
    <kage-pagination [info]="pagination" color="tertiary"></kage-pagination>
    <kage-pagination [info]="pagination" color="success"></kage-pagination>
    <kage-pagination [info]="pagination" color="danger"></kage-pagination>
    <kage-pagination [info]="pagination" color="warning"></kage-pagination>
    <kage-pagination [info]="pagination" color="info"></kage-pagination>
    <kage-pagination [info]="pagination" color="medium"></kage-pagination>
  `;
  scssCode = ``;
  tsCode = `
    export class ExampleComponent {
      pagination = {
        totalPages: 10,
        currentPage: 3,
      };
    }
  `;
}
