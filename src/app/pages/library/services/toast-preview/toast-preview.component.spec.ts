import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastPreviewComponent } from './toast-preview.component';

describe('ToastPreviewComponent', () => {
  let component: ToastPreviewComponent;
  let fixture: ComponentFixture<ToastPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
