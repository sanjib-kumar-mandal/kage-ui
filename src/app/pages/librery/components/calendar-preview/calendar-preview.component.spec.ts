import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarPreviewComponent } from './calendar-preview.component';

describe('CalendarPreviewComponent', () => {
  let component: CalendarPreviewComponent;
  let fixture: ComponentFixture<CalendarPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
