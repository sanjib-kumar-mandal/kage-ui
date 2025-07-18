import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[kageRipple]',
})
export class KageRippleDirective {
  rippleColor = input<string>();

  private container!: HTMLElement;
  private keyframesInjected = false;

  private el = inject(ElementRef<HTMLElement>);
  private renderer = inject(Renderer2);
  private document = inject(DOCUMENT);
  private platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.setAttribute(this.el.nativeElement, 'ripple-host', '');
      this.container = this.renderer.createElement('span');
      this.renderer.addClass(this.container, 'ripple-container');
      this.renderer.setStyle(this.container, 'position', 'absolute');
      this.renderer.appendChild(this.el.nativeElement, this.container);
      this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
      this.renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');
    }
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    const rippleColor = this.rippleColor() ?? 'var(--color-primary)';

    const ripple = this.renderer.createElement('span');
    const rect = this.el.nativeElement.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    this.renderer.setStyle(ripple, 'position', 'absolute');
    this.renderer.setStyle(ripple, 'border-radius', '50%');
    this.renderer.setStyle(ripple, 'width', `${size}px`);
    this.renderer.setStyle(ripple, 'height', `${size}px`);
    this.renderer.setStyle(ripple, 'left', `${x}px`);
    this.renderer.setStyle(ripple, 'top', `${y}px`);
    this.renderer.setStyle(ripple, 'background-color', rippleColor);
    this.renderer.setStyle(ripple, 'transform', 'scale(0)');
    this.renderer.setStyle(ripple, 'opacity', '0.75');
    this.renderer.setStyle(ripple, 'pointer-events', 'none');
    this.renderer.setStyle(ripple, 'animation', 'ripple 600ms ease-out');

    this.injectRippleKeyframes();

    this.renderer.appendChild(this.container, ripple);

    setTimeout(() => {
      this.renderer.removeChild(this.container, ripple);
    }, 600);
  }

  private injectRippleKeyframes() {
    if (this.keyframesInjected) return;
    const style = this.renderer.createElement('style');
    style.innerHTML = `
      @keyframes ripple {
        to {
          transform: scale(2);
          opacity: 0;
        }
      }
    `;
    this.renderer.appendChild(this.document.head, style);
    this.keyframesInjected = true;
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this.container.remove();
    }
  }
}
