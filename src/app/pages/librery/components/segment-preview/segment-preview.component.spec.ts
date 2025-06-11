import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentPreviewComponent } from './segment-preview.component';

describe('SegmentPreviewComponent', () => {
  let component: SegmentPreviewComponent;
  let fixture: ComponentFixture<SegmentPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegmentPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegmentPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
