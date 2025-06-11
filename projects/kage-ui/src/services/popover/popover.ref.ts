import { ComponentRef, EmbeddedViewRef } from '@angular/core';
import { Subject } from 'rxjs';

export class KagePopoverRef {
  private closed$ = new Subject<any>();
  private componentRef?: ComponentRef<any>;
  private viewRef?: EmbeddedViewRef<any>;

  close(result?: any) {
    this.componentRef?.destroy();
    this.viewRef?.destroy();
    this.closed$.next(result);
    this.closed$.complete();
  }

  afterClosed() {
    return this.closed$.asObservable();
  }

  _setComponent(componentRef: ComponentRef<any>) {
    this.componentRef = componentRef;
  }

  _setView(viewRef: EmbeddedViewRef<any>) {
    this.viewRef = viewRef;
  }
}
