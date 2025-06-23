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
  htmlCode = `
    <kage-segment [options]="options" (onSegmentChange)="segmentChanged($event)" [(ngModel)]="tabId">
        <p>Tab {{tabId}}</p>
    </kage-segment>
  `;
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
  export class AppExampleComponent {
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
