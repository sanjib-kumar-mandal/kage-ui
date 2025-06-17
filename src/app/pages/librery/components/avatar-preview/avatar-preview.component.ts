import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs, KageAvatar } from 'kage-ui';

@Component({
  selector: 'app-avatar-preview',
  imports: [CodePreviewComponent, KageBreadCrumb, KageBreadCrumbs, KageAvatar],
  templateUrl: './avatar-preview.component.html',
  styleUrl: './avatar-preview.component.scss',
})
export class AvatarPreviewComponent {
  htmlCode = `
  <kage-avatar [src]="'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykzoZeCE0p7LeuyHnLYCdPP2jju9d5PaMeA&s'"></kage-avatar>
  <kage-avatar class="radial-avatar" [src]="'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykzoZeCE0p7LeuyHnLYCdPP2jju9d5PaMeA&s'"></kage-avatar>
  `;
  scssCode = `
  .radial-avatar{
    --kage-avatar-border-radius: 50%
  }
  `;
  tsCode = `
    import { Component } from '@angular/core';
    import { KageAvatar } from 'kage-ui';
    ...

    @Component({
      selector: 'app-example',
      imports: [ KageAvatar, ... ],
      templateUrl: '...',
      styleUrl: '...',
    })
    export class AppExampleComponent {}
  `;
}
