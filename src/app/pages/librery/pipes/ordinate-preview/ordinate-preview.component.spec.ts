import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinatePreviewComponent } from './ordinate-preview.component';

describe('OrdinatePreviewComponent', () => {
  let component: OrdinatePreviewComponent;
  let fixture: ComponentFixture<OrdinatePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdinatePreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdinatePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
