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
  htmlCode = `
  <kage-calendar 
      [mode]="'single'"
      [(ngModel)]="dateSelected" 
      [disabledDateFn]="datesToDisable" 
      [invalidDateFn]="invalidDate">
  </kage-calendar>
  `;
  scssCode = ``;
  tsCode = `
  import { Component } from '@angular/core';
  import { KageCalendar } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageCalendar, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {
    dateSelected: any;

    dateChanged(event: any) {
      console.log(this.dateSelected);
    }

    datesToDisable(date: Date | null) {
      const dateToDisable = new Date('2025-06-25');
      if (date) {
        return (
          date.getDate() === dateToDisable.getDate() &&
          date.getMonth() === dateToDisable.getMonth() &&
          date.getFullYear() === dateToDisable.getFullYear()
        );
      } else {
        return false;
      }
    }

    invalidDate(date: Date | null) {
      const invalidDate = new Date('2025-07-12');
      if (date) {
        return (
          date.getDate() === invalidDate.getDate() &&
          date.getMonth() === invalidDate.getMonth() &&
          date.getFullYear() === invalidDate.getFullYear()
        );
      } else {
        return false;
      }
    }
  }
  `;

  dateSelected: any;

  dateChanged(event: any) {
    console.log(this.dateSelected);
  }

  datesToDisable(date: Date | null) {
    const dateToDisable = new Date('2025-06-25');
    if (date) {
      return (
        date.getDate() === dateToDisable.getDate() &&
        date.getMonth() === dateToDisable.getMonth() &&
        date.getFullYear() === dateToDisable.getFullYear()
      );
    } else {
      return false;
    }
  }

  invalidDate(date: Date | null) {
    const invalidDate = new Date('2025-07-12');
    if (date) {
      return (
        date.getDate() === invalidDate.getDate() &&
        date.getMonth() === invalidDate.getMonth() &&
        date.getFullYear() === invalidDate.getFullYear()
      );
    } else {
      return false;
    }
  }
}
