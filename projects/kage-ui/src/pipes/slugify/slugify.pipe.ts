import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slugify',
})
export class KageSlugifyPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) return '';
    return value
      .toLowerCase()
      .trim()
      .replace(/[\s_]+/g, '-') // spaces/underscores → dash
      .replace(/[^\w\-]+/g, '') // remove non-word characters
      .replace(/\-\-+/g, '-') // collapse multiple dashes
      .replace(/^-+|-+$/g, ''); // trim leading/trailing dash
  }
}
