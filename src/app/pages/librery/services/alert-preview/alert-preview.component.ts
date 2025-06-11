import { Component, inject } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import {
  KageBreadCrumb,
  KageBreadCrumbs,
  KageAlertCtrl,
  KageButton,
} from 'kage-ui';

@Component({
  selector: 'app-alert-preview',
  imports: [CodePreviewComponent, KageBreadCrumb, KageBreadCrumbs, KageButton],
  templateUrl: './alert-preview.component.html',
  styleUrl: './alert-preview.component.scss',
})
export class AlertPreviewComponent {
  private alert = inject(KageAlertCtrl);

  async prompt() {
    const result = await this.alert.show({
      title: 'Login Required',
      message: 'Please enter your credentials.',
      dismissible: true,
      inputs: [
        { name: 'username', label: 'Username', placeholder: 'Enter username' },
        {
          name: 'password',
          label: 'Password',
          type: 'password',
          placeholder: 'Enter password',
        },
      ],
      buttons: [
        { label: 'Cancel', role: 'cancel', color: 'danger' },
        { label: 'Login', role: 'confirm', color: 'success', primary: true },
      ],
    });
  }
}
