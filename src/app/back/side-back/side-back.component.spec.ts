import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBackComponent } from './side-back.component';

describe('SideBackComponent', () => {
  let component: SideBackComponent;
  let fixture: ComponentFixture<SideBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
