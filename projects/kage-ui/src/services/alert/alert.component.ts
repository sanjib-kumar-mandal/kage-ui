import { Component, output, model } from '@angular/core';
import { AlertOptions, AlertButton } from './alert.model';
import { FormsModule } from '@angular/forms';
import { KageButton } from '../../components/button/button.component';
import { KageInput } from '../../components/input/input.component';

@Component({
  selector: 'k-alert-host',
  imports: [FormsModule, KageButton, KageInput],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class KageAlertHost {
  options = model<AlertOptions>();
  result = output<{
    values: Record<string, string>;
    button: AlertButton | null;
  }>();
  close = output<void>();

  inputValues: Record<string, string> = {};

  ngOnInit() {
    // Pre-fill default values
    this.options()!.inputs?.forEach((input) => {
      this.inputValues[input.name] = input.value || '';
    });
  }

  async handle(button: AlertButton) {
    if (button.handler) {
      await button.handler();
    }

    this.result.emit({ values: this.inputValues, button });
    this.close.emit();
  }

  onBackdrop() {
    if (this.options()!.dismissible) {
      this.result.emit({ values: this.inputValues, button: null });
      this.close.emit();
    }
  }
}
