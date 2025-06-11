import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruncatePreviewComponent } from './truncate-preview.component';

describe('TruncatePreviewComponent', () => {
  let component: TruncatePreviewComponent;
  let fixture: ComponentFixture<TruncatePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TruncatePreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruncatePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
