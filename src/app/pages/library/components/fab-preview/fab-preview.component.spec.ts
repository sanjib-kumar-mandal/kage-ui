import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabPreviewComponent } from './fab-preview.component';

describe('FabPreviewComponent', () => {
  let component: FabPreviewComponent;
  let fixture: ComponentFixture<FabPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FabPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
