import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import {
  KageBreadCrumb,
  KageBreadCrumbs,
  KageSegment,
  KageSegmentOption,
} from 'kage-ui';

@Component({
  selector: 'app-segment-preview',
  imports: [
    CodePreviewComponent,
    KageSegment,
    FormsModule,
    KageBreadCrumbs,
    KageBreadCrumb,
  ],
  templateUrl: './segment-preview.component.html',
  styleUrl: './segment-preview.component.scss',
})
export class SegmentPreviewComponent {
  htmlCode = `<k-segment \n[options]="options" \n(onSegmentChange)="segmentChanged($event)" \n[(ngModel)]="tabId">\n\t<p>Content</p>\n</k-segment>`;
  scssCode = ``;
  tsCode = `
  import { Component } from '@angular/core';
  import { KageSegment } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageSegment, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;

  tabId = '2';

  options: Array<KageSegmentOption> = [
    { label: 'Active', value: '1' },
    { label: 'Normal', value: '2' },
    { label: 'Disabled', value: '3', disabled: true },
  ];

  segmentChanged(event: any) {
    console.log('Segment changed', event);
  }
}
