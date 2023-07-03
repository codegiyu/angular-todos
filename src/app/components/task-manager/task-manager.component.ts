import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalStateService } from 'src/app/services/global-state.service';
import { CdkDropListGroup } from '@angular/cdk/drag-drop';
import { TaskListComponent } from '../task-list/task-list.component';
import { SectionHeadingComponent } from '../section-heading/section-heading.component';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss'],
  standalone: true,
  imports: [CdkDropListGroup, TaskListComponent, SectionHeadingComponent]
})
export class TaskManagerComponent {
  tasks!: any;

  constructor(
    private _router: Router,
    private state: GlobalStateService
  ) {
    this.tasks = this.state.getAllTasks()
  }

  goToAddTask() {
    this._router.navigateByUrl("add-task");
  }
}
