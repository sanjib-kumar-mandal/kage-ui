import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs, KageCard, KageImageFallbackDirective } from 'kage-ui';

@Component({
  selector: 'app-image-fallback',
  imports: [KageBreadCrumb, KageBreadCrumbs, CodePreviewComponent, KageCard, KageImageFallbackDirective],
  templateUrl: './image-fallback.component.html',
  styleUrl: './image-fallback.component.scss'
})
export class ImageFallbackComponent {
  tsCode = `
  import { Component } from '@angular/core';
  import { KageImageFallbackDirective } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageImageFallbackDirective, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;
  htmlCode = `
    <kage-card>
        <div slot="card-image" style="height: 220px;display: flex;align-items: center;justify-content: center;background: color-mix(in srgb, var(--color-background) 90%, var(--color-medium) 10%);">
            <img [kageImageFallback]="'assets/no-image.png'" src="assets/features/image-fallback.png" alt="">
        </div>
        <h2 slot="card-title">Image Fallback</h2>
        <p slot="card-content" class="line-limit-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi autem id illum mollitia sunt quis perspiciatis eaque amet delectus labore voluptas iure exercitationem laboriosam, sit, nostrum dolores, iste repellat tempore?</p>
    </kage-card>
  `;
  scssCode = ``;
}
