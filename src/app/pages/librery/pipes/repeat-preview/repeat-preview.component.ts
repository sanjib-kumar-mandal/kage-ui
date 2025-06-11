import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs } from 'kage-ui';

@Component({
  selector: 'app-repeat-preview',
  imports: [CodePreviewComponent, KageBreadCrumb, KageBreadCrumbs],
  templateUrl: './repeat-preview.component.html',
  styleUrl: './repeat-preview.component.scss',
})
export class RepeatPreviewComponent {
  tsCode = ``;
  htmlCode = `
    <!-- Repeat a character -->
    <p>{{ '*' | repeat:5 }}</p> 
    <!-- Output: ***** -->

    <!-- Repeat a string -->
    <p>{{ 'Hi ' | repeat:3 }}</p> 
    <!-- Output: Hi Hi Hi  -->

    <!-- Repeat dynamic content -->
    <p>{{ user.emoji | repeat:user.count }}</p>
  `;
  scssCode = `No SCSS`;
}
