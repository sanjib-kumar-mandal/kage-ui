
import {
  AfterViewInit,
  Component,
  ComponentRef,
  Inject,
  OnDestroy,
  output,
  ViewChild,
  ViewContainerRef,
  DOCUMENT
} from '@angular/core';

@Component({
  selector: 'kage-modal-host',
  template: `
    <div class="k-modal-backdrop" (click)="onBackdropClick($event)">
      <div class="k-modal-content" tabindex="0">
        <button class="k-modal-close-btn" (click)="close()">&times;</button>
        <ng-container #container></ng-container>
      </div>
    </div>
  `,
  styleUrls: ['./modal.component.scss'],
  imports: [],
})
export class KageModalHost implements AfterViewInit, OnDestroy {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;
  closed = output<void>();
  private activeComponentRef?: ComponentRef<unknown>;
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngAfterViewInit() {
    this.document.body.style.overflow = 'hidden';
  }

  close() {
    this.closed.emit();
  }

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.close();
    }
  }

  inject<T>(compRef: ComponentRef<T>) {
    this.container.clear();
    this.activeComponentRef = compRef;
    this.container.insert(compRef.hostView);
  }

  ngOnDestroy() {
    this.container.clear();
    this.document.body.style.overflow = '';
  }
}
