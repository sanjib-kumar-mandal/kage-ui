import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class KageTruncatePipe implements PipeTransform {
  transform(
    value: string | null | undefined,
    limit: number = 20,
    suffix: string = '...'
  ): string {
    if (!value || typeof value !== 'string') return '';
    if (value.length <= limit) return value;
    return value.slice(0, limit) + suffix;
  }
}
