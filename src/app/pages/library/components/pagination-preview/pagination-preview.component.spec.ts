import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationPreviewComponent } from './pagination-preview.component';

describe('PaginationPreviewComponent', () => {
  let component: PaginationPreviewComponent;
  let fixture: ComponentFixture<PaginationPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
