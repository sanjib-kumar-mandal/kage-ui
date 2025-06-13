import { Directive, ElementRef, HostListener, input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[kageImageFallback]'
})
export class KageImageFallbackDirective {

  fallbackUrl = input<string>('', { alias: 'kageImageFallback' });

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  
  @HostListener('error')
  loadFallbackOnError() {
    if (this.el.nativeElement.tagName.toLowerCase() === 'img') {
      this.renderer.setAttribute(this.el.nativeElement, 'src', this.fallbackUrl());
    }
  }

}
