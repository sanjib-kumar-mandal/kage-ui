import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  inject,
  input,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { register } from 'swiper/element/bundle';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-typescript';
import { isPlatformBrowser } from '@angular/common';

register();

@Component({
  selector: 'app-code-preview',
  imports: [FormsModule],
  templateUrl: './code-preview.component.html',
  styleUrl: './code-preview.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CodePreviewComponent implements AfterViewInit {
  @ViewChild('swiperContainer', { read: ElementRef })
  swiperContainer!: ElementRef;
  @ViewChild('tsBlock', { static: true }) tsBlock!: ElementRef<HTMLElement>;
  @ViewChild('htmlBlock', { static: true }) htmlBlock!: ElementRef<HTMLElement>;
  @ViewChild('scssBlock', { static: true }) scssBlock!: ElementRef<HTMLElement>;
  scssCode = input<string>();
  htmlCode = input<string>();
  tsCode = input<string>();
  activeTab = 0;

  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const swiperParams = {
        slidesPerView: 1,
        speed: 400,
        spaceBetween: 100,
      };
      Object.assign(this.swiperContainer.nativeElement, swiperParams);
      this.swiperContainer?.nativeElement?.initialize();
      this.highlight();
    }
  }

  slideChanged() {
    this.activeTab = this.swiperContainer.nativeElement.swiper.activeIndex;
  }

  changeSlide(i: number) {
    this.swiperContainer.nativeElement.swiper.slideTo(i, 400);
  }

  highlight() {
    this.htmlBlock.nativeElement.innerHTML = Prism.highlight(
      this.htmlCode() ?? '',
      Prism.languages['markup'],
      'markup'
    );
    this.scssBlock.nativeElement.innerHTML = Prism.highlight(
      this.scssCode() ?? '',
      Prism.languages['scss'],
      'scss'
    );
    this.tsBlock.nativeElement.innerHTML = Prism.highlight(
      this.tsCode() ?? '',
      Prism.languages['typescript'],
      'typescript'
    );
  }
}
