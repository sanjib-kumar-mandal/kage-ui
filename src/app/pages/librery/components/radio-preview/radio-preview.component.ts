import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import {
  KageBreadCrumb,
  KageBreadCrumbs,
  KageRadio,
  KageRadioGroup,
} from 'kage-ui';

@Component({
  selector: 'app-radio-preview',
  imports: [
    CodePreviewComponent,
    KageBreadCrumb,
    KageBreadCrumbs,
    KageRadio,
    KageRadioGroup,
  ],
  templateUrl: './radio-preview.component.html',
  styleUrl: './radio-preview.component.scss',
})
export class RadioPreviewComponent {
  htmlCode = ``;
  scssCode = ``;
  tsCode = ``;
}
