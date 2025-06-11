import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizeDirectivePreviewComponent } from './resize-directive-preview.component';

describe('ResizeDirectivePreviewComponent', () => {
  let component: ResizeDirectivePreviewComponent;
  let fixture: ComponentFixture<ResizeDirectivePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResizeDirectivePreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResizeDirectivePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
