import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs, KageRepeatPipe } from 'kage-ui';

@Component({
  selector: 'app-repeat-preview',
  imports: [
    CodePreviewComponent,
    KageBreadCrumb,
    KageBreadCrumbs,
    KageRepeatPipe,
  ],
  templateUrl: './repeat-preview.component.html',
  styleUrl: './repeat-preview.component.scss',
})
export class RepeatPreviewComponent {
  tsCode = `
  import { Component } from '@angular/core';
  import { KageRepeatPipe } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageRepeatPipe, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;
  htmlCode = `
    <!-- Repeat a character -->
    <p>{{ '*' | repeat:5 }}</p> 

    <!-- Repeat a string -->
    <p>{{ 'Hi ' | repeat:3 }}</p> 

    <!-- Repeat dynamic content -->
    <p>{{ user.emoji | repeat:user.count }}</p>
  `;
  scssCode = ``;
}
