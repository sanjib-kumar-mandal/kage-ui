import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalizePreviewComponent } from './capitalize-preview.component';

describe('CapitalizePreviewComponent', () => {
  let component: CapitalizePreviewComponent;
  let fixture: ComponentFixture<CapitalizePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapitalizePreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapitalizePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
