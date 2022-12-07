import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCommentReponseComponent } from './display-comment-reponse.component';

describe('DisplayCommentReponseComponent', () => {
  let component: DisplayCommentReponseComponent;
  let fixture: ComponentFixture<DisplayCommentReponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCommentReponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCommentReponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
