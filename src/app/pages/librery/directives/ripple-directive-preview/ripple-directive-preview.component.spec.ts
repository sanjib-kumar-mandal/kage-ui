import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RippleDirectivePreviewComponent } from './ripple-directive-preview.component';

describe('RippleDirectivePreviewComponent', () => {
  let component: RippleDirectivePreviewComponent;
  let fixture: ComponentFixture<RippleDirectivePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RippleDirectivePreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RippleDirectivePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
