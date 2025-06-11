import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverPreviewComponent } from './popover-preview.component';

describe('PopoverPreviewComponent', () => {
  let component: PopoverPreviewComponent;
  let fixture: ComponentFixture<PopoverPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopoverPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopoverPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
