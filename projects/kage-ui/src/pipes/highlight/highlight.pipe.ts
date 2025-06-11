import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
})
export class KageHighlightPipe implements PipeTransform {
  transform(text: string, search: string, tag: string = 'mark'): string {
    if (!search || !text) return text;

    const escapedSearch = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(escapedSearch, 'gi');

    return text.replace(regex, (match) => `<${tag}>${match}</${tag}>`);
  }
}
