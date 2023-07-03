import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GlobalStateService } from 'src/app/services/global-state.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {

  constructor(
    private _router: Router,
    private state: GlobalStateService
  ) {}

  addTaskForm = new FormGroup({
    title: new FormControl("", [Validators.required, Validators.maxLength(15)]),
    description: new FormControl("", [Validators.required, Validators.maxLength(15)])
  })

  get title() {
    return this.addTaskForm.get("title");
  }
  get description() {
    return this.addTaskForm.get("description");
  }

  addTask() {
    const prevState: any = this.state.getAllTasks()
    const allTasks = prevState.source._value
    
    allTasks.todo.push(this.addTaskForm.value)

    this._router.navigateByUrl("")
  }
}
