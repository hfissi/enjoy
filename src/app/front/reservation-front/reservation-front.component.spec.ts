import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationFrontComponent } from './reservation-front.component';

describe('ReservationFrontComponent', () => {
  let component: ReservationFrontComponent;
  let fixture: ComponentFixture<ReservationFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
