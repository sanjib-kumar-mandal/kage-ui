import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadCrumbsPreviewComponent } from './bread-crumbs-preview.component';

describe('BreadCrumbsPreviewComponent', () => {
  let component: BreadCrumbsPreviewComponent;
  let fixture: ComponentFixture<BreadCrumbsPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadCrumbsPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadCrumbsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
