import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bytes',
})
export class KageBytesPipe implements PipeTransform {
  transform(
    value: number | null | undefined,
    decimalPlaces: number = 2
  ): string {
    if (value == null || isNaN(value)) return '0 Bytes';

    if (value === 0) return '0 Bytes';

    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB'];
    const i = Math.floor(Math.log(value) / Math.log(1024));
    const result = parseFloat(
      (value / Math.pow(1024, i)).toFixed(decimalPlaces)
    );

    return `${result} ${sizes[i]}`;
  }
}
