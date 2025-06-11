import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageViewDirectivePreviewComponent } from './image-view-directive-preview.component';

describe('ImageViewDirectivePreviewComponent', () => {
  let component: ImageViewDirectivePreviewComponent;
  let fixture: ComponentFixture<ImageViewDirectivePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageViewDirectivePreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageViewDirectivePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
