import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BytesPreviewComponent } from './bytes-preview.component';

describe('BytesPreviewComponent', () => {
  let component: BytesPreviewComponent;
  let fixture: ComponentFixture<BytesPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BytesPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BytesPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
