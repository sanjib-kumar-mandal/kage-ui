import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repeat',
})
export class KageRepeatPipe implements PipeTransform {
  transform(value: string | null | undefined, count: number = 1): string {
    if (!value || count <= 0) return '';
    return value.repeat(count);
  }
}
