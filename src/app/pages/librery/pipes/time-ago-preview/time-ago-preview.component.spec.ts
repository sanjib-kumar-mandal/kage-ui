import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeAgoPreviewComponent } from './time-ago-preview.component';

describe('TimeAgoPreviewComponent', () => {
  let component: TimeAgoPreviewComponent;
  let fixture: ComponentFixture<TimeAgoPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeAgoPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeAgoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
