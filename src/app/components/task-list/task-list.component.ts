import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem 
} from '@angular/cdk/drag-drop';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import {  } from '@angular/common';
import { SingleTask, AllTasks } from 'src/app/services/global-state.service';
import { TaskSingleComponent } from '../task-single/task-single.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, NgFor, CdkDrag, CommonModule, TaskSingleComponent]
})
export class TaskListComponent implements OnInit {
  taskBackground: string = ""
  constructor() {}

  @Input() tasksArray: SingleTask[] = [];
  @Input() taskGroup: string = "";

  ngOnInit(): void {
    if (this.taskGroup === "todo") {
      this.taskBackground = "#0000FF15"
    } else if (this.taskGroup === "doing") {
      this.taskBackground = "#3CB37115"
    } else if (this.taskGroup === "done") {
      this.taskBackground = "#FF000015"
    }
  }

  drop(event: CdkDragDrop<SingleTask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.previousIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }
  }
}
