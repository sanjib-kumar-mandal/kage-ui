import { NgClass } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'kage-accordion',
  imports: [NgClass],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KageAccordion implements AfterViewInit {
  @ViewChild('header', { read: ElementRef }) header!: ElementRef;
  @ViewChild('content', { read: ElementRef }) content!: ElementRef;

  cssClass = input<string>();
  color = input<
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger'
    | 'success'
    | 'warning'
    | 'info'
  >();
  expanded = input<boolean>(false);

  private renderer = inject(Renderer2);

  ngAfterViewInit(): void {
    fromEvent(this.header.nativeElement, 'click').subscribe({
      next: (_) => {
        const currentHeight = getComputedStyle(
          this.content.nativeElement
        ).maxHeight;
        const scrollHeight = this.content.nativeElement.scrollHeight;

        if (parseInt(currentHeight)) {
          this.renderer.setStyle(
            this.header.nativeElement,
            'background',
            'transparent'
          );
          this.renderer.setStyle(
            this.content.nativeElement,
            'maxHeight',
            '0px'
          );
        } else {
          this.renderer.setStyle(
            this.header.nativeElement,
            'background',
            'color-mix(in srgb, var(--border-color) 20%, transparent 80%)'
          );
          this.renderer.setStyle(
            this.content.nativeElement,
            'maxHeight',
            `${scrollHeight}px`
          );
        }
      },
    });

    if (this.expanded()) {
      this.header.nativeElement.click();
    }
  }
}
