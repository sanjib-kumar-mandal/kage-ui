import { Component, output, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertOptions, AlertButton } from './alert.model';
import { KageButton, KageInput } from '../../components/components';

@Component({
  selector: 'kage-alert-host',
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
    // Pre-fill default input values
    this.options()?.inputs?.forEach((input) => {
      this.inputValues[input.name] = input.value ?? '';
    });
  }

  async handle(button: AlertButton) {
    if (button.handler) {
      await button.handler(this.inputValues); // pass input values
    }

    this.result.emit({ values: this.inputValues, button });
    this.close.emit();
  }

  onBackdrop() {
    if (this.options()?.dismissible) {
      this.result.emit({ values: this.inputValues, button: null });
      this.close.emit();
    }
  }

  trackByIndex = (index: number) => index;
}
