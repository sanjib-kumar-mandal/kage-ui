import {
  ApplicationRef,
  createComponent,
  EmbeddedViewRef,
  EnvironmentInjector,
  inject,
  Injectable,
  TemplateRef,
  Type,
} from '@angular/core';
import { KagePopoverRef } from './popover.ref';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class KagePopoverCtrl {
  private activePopover?: HTMLElement;
  private outsideClickHandler?: (e: MouseEvent) => void;
  private appRef = inject(ApplicationRef);
  private envInjector = inject(EnvironmentInjector);
  private document = inject(DOCUMENT);

  open<T>(config: {
    content: Type<T> | TemplateRef<any>;
    data?: any;
    trigger?: MouseEvent | HTMLElement;
    offsetX?: number;
    offsetY?: number;
    closeOnOutsideClick?: boolean;
  }): KagePopoverRef {
    const popoverRef = new KagePopoverRef();
    let element: HTMLElement;
    // Handle TemplateRef
    if (config.content instanceof TemplateRef) {
      const viewRef = config.content.createEmbeddedView({
        $implicit: config.data,
        popoverRef,
      });
      this.appRef.attachView(viewRef);
      element = viewRef.rootNodes[0] as HTMLElement;
      popoverRef._setView(viewRef);
    } else {
      const componentRef = createComponent(config.content, {
        environmentInjector: this.envInjector,
      });

      if (config.data) {
        Object.assign(componentRef.instance!, config.data);
      }

      if ('popoverRef' in (componentRef.instance as any)) {
        (componentRef.instance as any).popoverRef = popoverRef;
      }

      this.appRef.attachView(componentRef.hostView);
      element = (componentRef.hostView as EmbeddedViewRef<any>)
        .rootNodes[0] as HTMLElement;
      popoverRef._setComponent(componentRef);
    }

    // Add to DOM
    element.style.position = 'absolute';
    element.style.zIndex = '9999';
    element.style.opacity = '0';
    element.style.transition = 'opacity 150ms ease';
    this.disablePageScroll();
    this.document.body.appendChild(element);

    this.activePopover = element;

    setTimeout(() => {
      requestAnimationFrame(() => {
        const { top, left } = this.calculateSmartPosition(
          config.trigger,
          element,
          config.offsetX ?? 8,
          config.offsetY ?? 8
        );
        element.style.top = `${top}px`;
        element.style.left = `${left}px`;
        element.style.opacity = '1';
      });
      this.enablePageScroll();
    });

    // Optional: Close on outside click
    if (config.closeOnOutsideClick) {
      this.outsideClickHandler = (e: MouseEvent) => {
        if (
          this.activePopover &&
          !this.activePopover.contains(e.target as Node)
        ) {
          popoverRef.close();
        }
      };
      this.document.addEventListener('mousedown', this.outsideClickHandler);
    }
    popoverRef.afterClosed().subscribe(() => this.destroyPopover());
    return popoverRef;
  }

  private calculateSmartPosition(
    trigger: MouseEvent | HTMLElement | undefined,
    popoverEl: HTMLElement,
    offsetX: number,
    offsetY: number
  ): { top: number; left: number } {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const spacing = 8;

    const pw = popoverEl.offsetWidth;
    const ph = popoverEl.offsetHeight;

    let tx = 0,
      ty = 0,
      tw = 0,
      th = 0;

    if (trigger instanceof MouseEvent) {
      tx = trigger.clientX;
      ty = trigger.clientY;
    } else if (trigger instanceof HTMLElement) {
      const rect = trigger.getBoundingClientRect();
      tx = rect.left;
      ty = rect.top;
      tw = rect.width;
      th = rect.height;
    }

    // Determine edge proximity (25% margins)
    const edgeThresholdX = vw * 0.25;
    const edgeThresholdY = vh * 0.25;

    const nearLeft = tx < edgeThresholdX;
    const nearRight = tx > vw - edgeThresholdX;
    const nearTop = ty < edgeThresholdY;
    const nearBottom = ty > vh - edgeThresholdY;

    // Default: right + bottom
    let left = tx + tw + offsetX;
    let top = ty + th + offsetY;

    if (nearRight) {
      left = tx - pw - offsetX;
      console.log('Position left', left);
    } else if (nearLeft) {
      left = tx + tw + offsetX;
    }

    if (nearBottom) {
      top = ty - ph - offsetY;
    } else if (nearTop) {
      top = ty + th + offsetY;
    }

    // Clamp inside viewport
    left = Math.max(spacing, Math.min(left, vw - pw - spacing));
    top = Math.max(spacing, Math.min(top, vh - ph - spacing));

    return { top, left };
  }

  private destroyPopover() {
    if (this.activePopover?.parentElement) {
      this.activePopover.parentElement.removeChild(this.activePopover);
    }
    this.activePopover = undefined;

    if (this.outsideClickHandler) {
      this.document.removeEventListener('mousedown', this.outsideClickHandler);
      this.outsideClickHandler = undefined;
    }
  }

  private disablePageScroll(): void {
    this.document.body.style.overflow = 'hidden';
  }

  private enablePageScroll(): void {
    this.document.body.style.overflow = '';
  }
}
