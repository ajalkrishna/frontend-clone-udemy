import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachCourseComponent } from './each-course.component';

describe('EachCourseComponent', () => {
  let component: EachCourseComponent;
  let fixture: ComponentFixture<EachCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EachCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
