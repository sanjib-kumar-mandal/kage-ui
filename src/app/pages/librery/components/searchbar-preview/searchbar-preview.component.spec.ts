import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarPreviewComponent } from './searchbar-preview.component';

describe('SearchbarPreviewComponent', () => {
  let component: SearchbarPreviewComponent;
  let fixture: ComponentFixture<SearchbarPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchbarPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchbarPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
