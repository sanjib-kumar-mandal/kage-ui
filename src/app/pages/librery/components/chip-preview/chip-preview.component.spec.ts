import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipPreviewComponent } from './chip-preview.component';

describe('ChipPreviewComponent', () => {
  let component: ChipPreviewComponent;
  let fixture: ComponentFixture<ChipPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
