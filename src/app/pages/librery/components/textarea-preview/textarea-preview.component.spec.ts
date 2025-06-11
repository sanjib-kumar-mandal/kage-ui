import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaPreviewComponent } from './textarea-preview.component';

describe('TextareaPreviewComponent', () => {
  let component: TextareaPreviewComponent;
  let fixture: ComponentFixture<TextareaPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextareaPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextareaPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
