import {
  Component,
  ElementRef,
  inject,
  input,
  OnChanges,
  Renderer2,
} from '@angular/core';
import { ICONS } from './icon.registry';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'kage-icon',
  imports: [],
  template: '',
})
export class KageIcon implements OnChanges {
  name = input<string>();
  svgSrc = input<string>();
  size = input<number>();

  private renderer = inject(Renderer2);
  private elementRef = inject(ElementRef);
  private http = inject(HttpClient);

  ngOnChanges() {
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
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'height',
      `${this.size() ?? 20}px`
    );
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'min-width',
      `${this.size() ?? 20}px`
    );
    this.renderer.setStyle(this.elementRef.nativeElement, 'display', `flex`);
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'align-items',
      `center`
    );
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'justify-content',
      `center`
    );
    this.elementRef.nativeElement.innerHTML = svgContent;
    // this.renderer.appendChild(this.elementRef.nativeElement, div);
  }
}
