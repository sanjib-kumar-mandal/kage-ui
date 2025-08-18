import {
  AfterViewInit,
  Component,
  effect,
  ElementRef,
  inject,
  input,
  Renderer2,
} from '@angular/core';
import { ICONS } from './icon.registry';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'kage-icon',
  imports: [],
  template: '',
  styles: `
    :host{
      display: flex;
      align-items: center;
      justify-content: center;
      width: max-content;
    }
  `,
})
export class KageIcon implements AfterViewInit {
  name = input<string>();
  svgSrc = input<string>();
  size = input<number>();
  depth = input<number>();
  color = input<
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'medium'
  >();

  private renderer = inject(Renderer2);
  private elementRef = inject(ElementRef);
  private http = inject(HttpClient);

  constructor() {
    effect(() => this.decide());
  }

  ngAfterViewInit() {
    this.decide();
  }

  private decide() {
    const svgSrc = this.svgSrc();
    const iconName = this.name();
    if (svgSrc) {
      firstValueFrom(this.http.get(svgSrc, { responseType: 'text' }))
        .then((rawSvg: string) => this.insertSvg(rawSvg))
        .catch((err) =>
          console.warn(`Failed to load SVG from URI: ${svgSrc}`, err)
        );
    } else if (iconName) {
      this.insertSvg(ICONS[iconName ?? '']);
    } else {
      console.warn(
        `Icon "${iconName}" not found in registry, and no svgSrc provided.`
      );
    }
  }

  private insertSvg(svgContent: string) {
    const calculateIconDepth = (depth?: number) => {
      if (depth) {
        // If depth is already defined then nothing to do
        return depth;
      } else {
        if (this.size()) {
          return Math.ceil(this.size()! % 20);
        } else {
          return 1;
        }
      }
    };
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'style',
      `height: ${this.size() ?? 20}px; --kage-icon-depth: ${calculateIconDepth(
        this.depth()
      )}; color: ${
        this.color() ? 'var(--color-' + this.color() + ')' : 'inherit'
      }`
    );

    this.elementRef.nativeElement.innerHTML = svgContent;
    // this.renderer.appendChild(this.elementRef.nativeElement, div);
  }
}
