import { NgTemplateOutlet } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ComponentRef,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'kage-drawer-host',
  imports: [NgTemplateOutlet],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
})
export class KageDrawerHost implements AfterViewInit {
  @Input() content!: TemplateRef<any>;
  @Input() position: 'left' | 'right' = 'left';
  @Input() width = '300px';
  @Input() mode: 'template' | 'component' = 'template';

  @Input() dynamicComponentType?: Type<any>;
  @Input() dynamicInputs: Record<string, any> = {};
  @Input() dynamicOutputs: Record<string, (...args: any[]) => void> = {};

  @Output() closed = new EventEmitter<void>();

  @ViewChild('vc', { read: ViewContainerRef }) vcRef!: ViewContainerRef;
  private cmpRef?: ComponentRef<any>;

  isOpen = false;

  ngAfterViewInit() {
    setTimeout(() => {
      this.isOpen = true;
    });

    if (this.mode === 'component' && this.dynamicComponentType) {
      this.vcRef.clear();
      this.cmpRef = this.vcRef.createComponent(this.dynamicComponentType);
      Object.entries(this.dynamicInputs).forEach(
        ([k, v]) => (this.cmpRef!.instance[k] = v)
      );
      Object.entries(this.dynamicOutputs).forEach(([key, fn]) => {
        if (this.cmpRef!.instance[key]?.subscribe) {
          this.cmpRef!.instance[key].subscribe(fn);
        }
      });
    }
  }

  close() {
    this.isOpen = false;
    setTimeout(() => this.closed.emit(), 300);
  }

  onEsc(event: KeyboardEvent) {
    if (event.key === 'Escape') this.close();
  }
}
