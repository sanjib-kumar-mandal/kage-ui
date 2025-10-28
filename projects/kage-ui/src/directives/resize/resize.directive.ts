import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  inject,
  Input,
  input,
  NgZone,
  OnDestroy,
  OnInit,
  output,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { debounceTime, Subject, throttleTime } from 'rxjs';

type ClassCondition = { width?: number; height?: number; className: string };

@Directive({
  selector: '[kageResized]',
})
export class KageResizeDirective implements OnInit, OnDestroy {
  observeWidth = input<boolean>(true);
  observeHeight = input<boolean>(true);
  debounceTime = input<number>(100);
  resizeMode = input<'debounce' | 'throttle'>('debounce');

  minWidthClass = input<ClassCondition>();
  maxWidthClass = input<ClassCondition>();
  minHeightClass = input<ClassCondition>();
  maxHeightClass = input<ClassCondition>();
  @Input() onResize?: (rect: DOMRectReadOnly) => void;
  kageResized = output<DOMRectReadOnly>();

  private resizeSubject = new Subject<DOMRectReadOnly>();
  private observer?: ResizeObserver;

  private readonly el = inject(ElementRef);
  private readonly zone = inject(NgZone);
  private readonly renderer = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const stream =
        this.resizeMode() === 'throttle'
          ? this.resizeSubject.pipe(throttleTime(this.debounceTime()))
          : this.resizeSubject.pipe(debounceTime(this.debounceTime()));

      stream.subscribe((rect) => {
        this.kageResized.emit(rect);
        if (this.onResize) this.onResize(rect);
        this.applyClasses(rect);
      });

      this.zone.runOutsideAngular(() => {
        this.observer = new ResizeObserver((entries) => {
          for (const entry of entries) {
            const rect = entry.contentRect;
            if (
              (this.observeWidth() && rect.width !== 0) ||
              (this.observeHeight() && rect.height !== 0)
            ) {
              this.resizeSubject.next(rect);
            }
          }
        });

        this.observer.observe(this.el.nativeElement);
      });
    }
  }

  private applyClasses(rect: DOMRectReadOnly): void {
    const el = this.el.nativeElement;

    const applyClass = (
      condition: ClassCondition | undefined,
      match: boolean
    ) => {
      if (!condition) return;
      const hasClass = el.classList.contains(condition.className);
      if (match && !hasClass) {
        this.renderer.addClass(el, condition.className);
      } else if (!match && hasClass) {
        this.renderer.removeClass(el, condition.className);
      }
    };

    applyClass(
      this.minWidthClass(),
      !!this.minWidthClass()?.width &&
        rect.width >= this.minWidthClass()?.width!
    );
    applyClass(
      this.maxWidthClass(),
      !!this.maxWidthClass()?.width &&
        rect.width <= this.maxWidthClass()?.width!
    );
    applyClass(
      this.minHeightClass(),
      !!this.minHeightClass()?.height &&
        rect.height >= this.minHeightClass()?.height!
    );
    applyClass(
      this.maxHeightClass(),
      !!this.maxHeightClass()?.height &&
        rect.height <= this.maxHeightClass()?.height!
    );
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.resizeSubject.complete();
  }
}
