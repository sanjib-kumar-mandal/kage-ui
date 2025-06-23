import { Component, inject } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import {
  KageBreadCrumb,
  KageBreadCrumbs,
  KageToastCtrl,
  KageButton,
} from 'kage-ui';

@Component({
  selector: 'app-toast-preview',
  imports: [CodePreviewComponent, KageButton, KageBreadCrumb, KageBreadCrumbs],
  templateUrl: './toast-preview.component.html',
  styleUrl: './toast-preview.component.scss',
})
export class ToastPreviewComponent {
  htmlCode = `
  <kage-button (click)="infoToast()">Info Toast</kage-button>
  <kage-button (click)="errorToast()">Error Toast</kage-button>
  <kage-button (click)="successToast()">Success Toast</kage-button>
  <kage-button (click)="warningToast()">Warning Toast</kage-button>
  `;
  scssCode = ``;
  tsCode = `
  import { Component } from '@angular/core';
  import { KageButton, KageToastCtrl } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageButton, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {
    private toast = inject(KageToastCtrl);

    infoToast() {
      this.toast.show({
        message: 'New notification!',
        type: 'info',
        position: 'bottom-right',
        duration: 0, // persists until manually dismissed
      });
    }

    errorToast() {
      this.toast.show({
        message: 'Something went wrong!',
        type: 'danger',
        position: 'bottom-left',
        duration: 5000,
      });
    }

    successToast() {
      this.toast.show({
        message: 'Saved successfully!',
        type: 'success',
        position: 'top-right',
        duration: 3000,
      });
    }

    warningToast() {
      this.toast.show({
        message: 'New notification!',
        type: 'warning',
        position: 'top-left',
        duration: 0, // persists until manually dismissed
      });
    }
  }
  `;
  private toast = inject(KageToastCtrl);

  infoToast() {
    this.toast.show({
      message: 'New notification!',
      type: 'info',
      position: 'bottom-right',
      duration: 0, // persists until manually dismissed
    });
  }

  errorToast() {
    this.toast.show({
      message: 'Something went wrong!',
      type: 'danger',
      position: 'bottom-left',
      duration: 5000,
    });
  }

  successToast() {
    this.toast.show({
      message: 'Saved successfully!',
      type: 'success',
      position: 'top-right',
      duration: 3000,
    });
  }

  warningToast() {
    this.toast.show({
      message: 'New notification!',
      type: 'warning',
      position: 'top-left',
      duration: 0, // persists until manually dismissed
    });
  }
}
