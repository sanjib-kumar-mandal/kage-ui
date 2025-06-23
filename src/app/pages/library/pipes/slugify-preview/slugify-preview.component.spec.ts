import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlugifyPreviewComponent } from './slugify-preview.component';

describe('SlugifyPreviewComponent', () => {
  let component: SlugifyPreviewComponent;
  let fixture: ComponentFixture<SlugifyPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlugifyPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlugifyPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
