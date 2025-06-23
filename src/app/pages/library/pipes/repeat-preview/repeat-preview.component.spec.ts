import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatPreviewComponent } from './repeat-preview.component';

describe('RepeatPreviewComponent', () => {
  let component: RepeatPreviewComponent;
  let fixture: ComponentFixture<RepeatPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepeatPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepeatPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
