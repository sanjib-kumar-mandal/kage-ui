import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarPreviewComponent } from './progress-bar-preview.component';

describe('ProgressBarPreviewComponent', () => {
  let component: ProgressBarPreviewComponent;
  let fixture: ComponentFixture<ProgressBarPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressBarPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressBarPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
