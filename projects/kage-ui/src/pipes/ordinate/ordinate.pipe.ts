import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinate',
})
export class KageOrdinatePipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value == null || isNaN(value)) return '';

    const suffix = this.getOrdinalSuffix(value);
    return `${value}${suffix}`;
  }

  private getOrdinalSuffix(n: number): string {
    const lastDigit = n % 10;
    const lastTwoDigits = n % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) return 'th';

    switch (lastDigit) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }
}
