import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarPreviewComponent } from './avatar-preview.component';

describe('AvatarPreviewComponent', () => {
  let component: AvatarPreviewComponent;
  let fixture: ComponentFixture<AvatarPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
