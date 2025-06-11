import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
})
export class KageTimeAgoPipe implements PipeTransform {
  transform(value: Date | string | number): string {
    const now = new Date();
    const date = new Date(value);
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000); // seconds

    if (isNaN(diff)) return '';

    const units: [number, string][] = [
      [60, 'second'],
      [60, 'minute'],
      [24, 'hour'],
      [7, 'day'],
      [4.34524, 'week'],
      [12, 'month'],
      [Infinity, 'year'],
    ];

    let i = 0;
    let count = diff;

    while (i < units.length && count >= units[i][0]) {
      count = Math.floor(count / units[i][0]);
      i++;
    }

    const unit = units[i][1];
    return `${count} ${unit}${count !== 1 ? 's' : ''} ago`;
  }
}
