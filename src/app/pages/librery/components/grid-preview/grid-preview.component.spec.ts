import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPreviewComponent } from './grid-preview.component';

describe('GridPreviewComponent', () => {
  let component: GridPreviewComponent;
  let fixture: ComponentFixture<GridPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
