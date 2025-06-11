import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerPreviewComponent } from './drawer-preview.component';

describe('DrawerPreviewComponent', () => {
  let component: DrawerPreviewComponent;
  let fixture: ComponentFixture<DrawerPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawerPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawerPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
