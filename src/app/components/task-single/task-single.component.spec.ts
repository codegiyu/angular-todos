import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSingleComponent } from './task-single.component';

describe('TaskSingleComponent', () => {
  let component: TaskSingleComponent;
  let fixture: ComponentFixture<TaskSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskSingleComponent]
    });
    fixture = TestBed.createComponent(TaskSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
