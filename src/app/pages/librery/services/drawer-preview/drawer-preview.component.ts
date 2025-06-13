import { Component, TemplateRef } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import {
  KageBreadCrumb,
  KageBreadCrumbs,
  KageButton,
  KageDrawerCtrl,
} from 'kage-ui';

@Component({
  selector: 'app-drawer-preview',
  imports: [CodePreviewComponent, KageBreadCrumb, KageBreadCrumbs, KageButton],
  templateUrl: './drawer-preview.component.html',
  styleUrl: './drawer-preview.component.scss',
})
export class DrawerPreviewComponent {
  htmlCode = `
    <ng-template #drawerTplRight>
      <div style="padding: 20px;">This is a drawer template!</div>
    </ng-template>
    <ng-template #drawerTplLeft>
      <div style="padding: 20px;">This is a drawer template!</div>
    </ng-template>
    <kage-button (click)="openRight(drawerTplRight)">Open Drawer Right</kage-button>
    <kage-button (click)="openLeft(drawerTplLeft)">Open Drawer Left</kage-button>
  `;
  tsCode = `
  import { Component } from '@angular/core';
  import { KageDrawerCtrl } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {
  
    constructor(private drawer: KageDrawerCtrl) {}

    openRight(template: TemplateRef<any>) {
      this.drawer.openFromTemplate(template, {
        position: 'right',
        width: '320px',
      });
    }

    openLeft(template: TemplateRef<any>) {
      this.drawer.openFromTemplate(template, {
        position: 'left',
        width: '320px',
      });
    }
  }
  `;
  constructor(private drawer: KageDrawerCtrl) {}

  openRight(template: TemplateRef<any>) {
    this.drawer.openFromTemplate(template, {
      position: 'right',
      width: '320px',
    });
  }

  openLeft(template: TemplateRef<any>) {
    this.drawer.openFromTemplate(template, {
      position: 'left',
      width: '320px',
    });
  }
}
