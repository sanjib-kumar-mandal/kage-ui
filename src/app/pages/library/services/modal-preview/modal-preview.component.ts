import { Component, inject } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import {
  KageBreadCrumb,
  KageBreadCrumbs,
  KageButton,
  KageModalCtrl,
} from 'kage-ui';
import { ModalCompComponent } from './modal-comp/modal-comp.component';

@Component({
  selector: 'app-modal-preview',
  imports: [CodePreviewComponent, KageButton, KageBreadCrumb, KageBreadCrumbs],
  templateUrl: './modal-preview.component.html',
  styleUrl: './modal-preview.component.scss',
})
export class ModalPreviewComponent {
  private modalService = inject(KageModalCtrl);
  showModal() {
    this.modalService.open(ModalCompComponent);
  }

  tsCode = `
  import { Component } from '@angular/core';
  import { KageButton, KageModalCtrl } from 'kage-ui';
  import { ModalCompComponent } from 'path-to-my-modal-component';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageButton, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {
    private modalService = inject(KageModalCtrl);
    showModal() {
      this.modalService.open(MyModalComponent);
    }
  }
  `;
  htmlCode = `<kage-button (click)="showModal()">Click me</kage-button>`;
  scssCode = ``;
}
