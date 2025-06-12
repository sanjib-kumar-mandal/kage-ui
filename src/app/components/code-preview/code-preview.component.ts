import { Component, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-typescript';

@Component({
  selector: 'app-code-preview',
  imports: [FormsModule],
  templateUrl: './code-preview.component.html',
  styleUrl: './code-preview.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CodePreviewComponent {
  scssCode = input<string>();
  htmlCode = input<string>();
  tsCode = input<string>();
  activeTab = 0;

  highLight(type: 'html' | 'scss' | 'ts') {
    if (type === 'ts') {
      return Prism.highlight(
        this.tsCode()!,
        Prism.languages['typescript'],
        'typescript'
      );
    } else if (type === 'html') {
      return Prism.highlight(
        this.htmlCode()!,
        Prism.languages['markup'],
        'markup'
      );
    } else if (type === 'scss') {
      return Prism.highlight(this.scssCode()!, Prism.languages['scss'], 'scss');
    } else {
      return '';
    }
  }
}
