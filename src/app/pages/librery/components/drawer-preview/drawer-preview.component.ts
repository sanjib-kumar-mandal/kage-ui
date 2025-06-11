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
