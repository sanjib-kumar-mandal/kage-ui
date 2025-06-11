import { Directive, HostListener, inject, input } from '@angular/core';
import { KageToastCtrl } from '../../services/toast/toast.service';

@Directive({
  selector: '[kageCopy]',
})
export class KageCopyDirective {
  kageCopy = input<string>('');
  private toast = inject(KageToastCtrl);

  @HostListener('click')
  onClick(): void {
    if (!this.kageCopy()) {
      this.toast.show({
        message: `No text provided to copy.`,
        duration: 2500,
        position: 'top-right',
        type: 'warning',
      });
      console.warn('No text provided to copy.');
      return;
    }

    navigator.clipboard
      .writeText(this.kageCopy())
      .then(() => {
        this.toast.show({
          message: `Copied`,
          duration: 2500,
          position: 'top-right',
          type: 'success',
        });
      })
      .catch((err) => {
        this.toast.show({
          message: `Failed to copy`,
          duration: 2500,
          position: 'top-right',
          type: 'danger',
        });
        console.error('Failed to copy text: ', err);
      });
  }
}
