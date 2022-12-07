import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddavisComponent } from './addavis.component';

describe('AddavisComponent', () => {
  let component: AddavisComponent;
  let fixture: ComponentFixture<AddavisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddavisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddavisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
