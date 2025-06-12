import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import {
  KageBreadCrumb,
  KageBreadCrumbs,
  KageImageViewDirective,
} from 'kage-ui';

@Component({
  selector: 'app-image-view-directive-preview',
  imports: [
    CodePreviewComponent,
    KageBreadCrumb,
    KageBreadCrumbs,
    KageImageViewDirective,
  ],
  templateUrl: './image-view-directive-preview.component.html',
  styleUrl: './image-view-directive-preview.component.scss',
})
export class ImageViewDirectivePreviewComponent {
  htmlCode = `<img style="width: 200px; height: 160px;" kImageView src="https://images.pexels.com/photos/8563018/pexels-photo-8563018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="">`;
  scssCode = ``;
  tsCode = `
  import { Component } from '@angular/core';
  import { KageImageViewDirective } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageImageViewDirective, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;
}
