import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPeviewComponent } from './input-peview.component';

describe('InputPeviewComponent', () => {
  let component: InputPeviewComponent;
  let fixture: ComponentFixture<InputPeviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputPeviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
