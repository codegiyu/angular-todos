import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-single',
  templateUrl: './task-single.component.html',
  standalone: true,
  styleUrls: ['./task-single.component.scss'],
  imports: [CommonModule]
})
export class TaskSingleComponent {

  constructor() {}

  @Input() background: string = "";
  @Input() title: string = "";
  @Input() description: string = "";
}
