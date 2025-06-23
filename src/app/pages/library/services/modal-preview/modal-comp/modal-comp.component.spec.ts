import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCompComponent } from './modal-comp.component';

describe('ModalCompComponent', () => {
  let component: ModalCompComponent;
  let fixture: ComponentFixture<ModalCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
