import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs, KageIcon } from 'kage-ui';

@Component({
  selector: 'app-icon-preview',
  imports: [KageBreadCrumb, KageBreadCrumbs, KageIcon, CodePreviewComponent],
  templateUrl: './icon-preview.component.html',
  styleUrl: './icon-preview.component.scss',
})
export class IconPreviewComponent {
  htmlCode = `
  <div class="line">
      <kage-icon name="home"></kage-icon>
      <kage-icon name="home" [depth]="2"></kage-icon>
      <kage-icon name="home" [depth]="3"></kage-icon>
      <kage-icon name="home" [depth]="4"></kage-icon>
      <kage-icon name="home" [depth]="5"></kage-icon>
      <kage-icon name="home" [depth]="6"></kage-icon>
  </div>
  <div class="line">
      <kage-icon name="add" [color]="'primary'"></kage-icon>
      <kage-icon name="add" [depth]="2" [color]="'secondary'"></kage-icon>
      <kage-icon name="add" [depth]="3" [color]="'tertiary'"></kage-icon>
      <kage-icon name="add" [depth]="4" [color]="'success'"></kage-icon>
      <kage-icon name="add" [depth]="5" [color]="'danger'"></kage-icon>
      <kage-icon name="add" [depth]="6" [color]="'warning'"></kage-icon>
  </div>
  `;
  scssCode = `
    .line{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
    }
  `;
  tsCode = `
    import { Component } from '@angular/core';
    import { KageIcon } from 'kage-ui';
    ...

    @Component({
      selector: 'app-example',
      imports: [ KageIcon, ... ],
      templateUrl: '...',
      styleUrl: '...',
    })
    export class AppExampleComponent {}
  `;
}
