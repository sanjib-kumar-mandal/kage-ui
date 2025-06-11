import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs, KageSearchbar } from 'kage-ui';

@Component({
  selector: 'app-searchbar-preview',
  imports: [
    CodePreviewComponent,
    KageBreadCrumb,
    KageBreadCrumbs,
    KageSearchbar,
  ],
  templateUrl: './searchbar-preview.component.html',
  styleUrl: './searchbar-preview.component.scss',
})
export class SearchbarPreviewComponent {
  htmlCode = `<k-searchbar></k-searchbar>\n<k-searchbar [disabled]="true"></k-searchbar>`;
  scssCode = ``;
}
