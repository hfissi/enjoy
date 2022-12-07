import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsFrontComponent } from './deals-front.component';

describe('DealsFrontComponent', () => {
  let component: DealsFrontComponent;
  let fixture: ComponentFixture<DealsFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealsFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealsFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
