import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  effect,
  ElementRef,
  inject,
  input,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-typescript';
import { isPlatformBrowser } from '@angular/common';
import { KageCopyDirective, KageIcon } from "kage-ui";

@Component({
  selector: 'app-code-preview',
  imports: [FormsModule],
  templateUrl: './code-preview.component.html',
  styleUrl: './code-preview.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CodePreviewComponent implements AfterViewInit {
  @ViewChild('tsBlock', { static: true }) tsBlock!: ElementRef<HTMLElement>;
  @ViewChild('htmlBlock', { static: true }) htmlBlock!: ElementRef<HTMLElement>;
  @ViewChild('scssBlock', { static: true }) scssBlock!: ElementRef<HTMLElement>;
  scssCode = input<string>();
  htmlCode = input<string>();
  tsCode = input<string>();
  activeTab = 0;

  private platformId = inject(PLATFORM_ID);

  constructor() {
    effect(() => this.highlight());
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.highlight();
    }
  }

  highlight() {
    if (isPlatformBrowser(this.platformId)) {
      // HTML
      if (this.htmlCode()) {
        this.htmlBlock.nativeElement.innerHTML = Prism.highlight(this.htmlCode()!, Prism.languages['markup'], 'markup');
      } else {
        this.htmlBlock.nativeElement.innerHTML = '<p style="color: #865955;">No HTML</p>';
      }
      // SCSS 
      if (this.scssCode()) {
        this.scssBlock.nativeElement.innerHTML = Prism.highlight(this.scssCode()!, Prism.languages['scss'], 'scss');
      } else {
        this.scssBlock.nativeElement.innerHTML = '<p style="color: #865955;">No SCSS</p>';
      }
      // Typescript
      if (this.tsCode()) {
        this.tsBlock.nativeElement.innerHTML = Prism.highlight(this.tsCode()!, Prism.languages['typescript'], 'typescript');
      } else {
        this.tsBlock.nativeElement.innerHTML = '<p style="color: #865955;">No Typescript Code</p>';
      }
    }
  }
}
