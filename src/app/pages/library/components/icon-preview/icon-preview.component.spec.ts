import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPreviewComponent } from './icon-preview.component';

describe('IconPreviewComponent', () => {
  let component: IconPreviewComponent;
  let fixture: ComponentFixture<IconPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
