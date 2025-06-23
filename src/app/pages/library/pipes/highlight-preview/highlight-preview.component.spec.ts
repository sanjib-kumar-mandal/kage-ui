import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightPreviewComponent } from './highlight-preview.component';

describe('HighlightPreviewComponent', () => {
  let component: HighlightPreviewComponent;
  let fixture: ComponentFixture<HighlightPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
