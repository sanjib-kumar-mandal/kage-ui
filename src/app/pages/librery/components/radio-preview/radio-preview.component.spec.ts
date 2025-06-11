import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioPreviewComponent } from './radio-preview.component';

describe('RadioPreviewComponent', () => {
  let component: RadioPreviewComponent;
  let fixture: ComponentFixture<RadioPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
