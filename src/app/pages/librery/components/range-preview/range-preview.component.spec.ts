import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangePreviewComponent } from './range-preview.component';

describe('RangePreviewComponent', () => {
  let component: RangePreviewComponent;
  let fixture: ComponentFixture<RangePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RangePreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
