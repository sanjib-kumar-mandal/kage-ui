import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs, KageCalendar } from 'kage-ui';

@Component({
  selector: 'app-calendar-preview',
  imports: [
    CodePreviewComponent,
    KageCalendar,
    FormsModule,
    KageBreadCrumb,
    KageBreadCrumbs,
  ],
  templateUrl: './calendar-preview.component.html',
  styleUrl: './calendar-preview.component.scss',
})
export class CalendarPreviewComponent {
  htmlCode = ``;
  scssCode = ``;
  tsCode = ``;

  dateSelected: any;

  dateChanged(event: any) {
    console.log(this.dateSelected);
  }
}
