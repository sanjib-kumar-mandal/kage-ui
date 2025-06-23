import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglePreviewComponent } from './toggle-preview.component';

describe('TogglePreviewComponent', () => {
  let component: TogglePreviewComponent;
  let fixture: ComponentFixture<TogglePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TogglePreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogglePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
