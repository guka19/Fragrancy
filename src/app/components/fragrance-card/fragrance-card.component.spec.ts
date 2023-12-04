import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FragranceCardComponent } from './fragrance-card.component';

describe('FragranceCardComponent', () => {
  let component: FragranceCardComponent;
  let fixture: ComponentFixture<FragranceCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FragranceCardComponent]
    });
    fixture = TestBed.createComponent(FragranceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
