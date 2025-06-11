import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskPreviewComponent } from './mask-preview.component';

describe('MaskPreviewComponent', () => {
  let component: MaskPreviewComponent;
  let fixture: ComponentFixture<MaskPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaskPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaskPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
