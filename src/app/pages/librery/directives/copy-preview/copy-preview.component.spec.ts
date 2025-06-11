import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyPreviewComponent } from './copy-preview.component';

describe('CopyPreviewComponent', () => {
  let component: CopyPreviewComponent;
  let fixture: ComponentFixture<CopyPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
