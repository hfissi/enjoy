import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListreponseComponent } from './listreponse.component';

describe('ListreponseComponent', () => {
  let component: ListreponseComponent;
  let fixture: ComponentFixture<ListreponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListreponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListreponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
