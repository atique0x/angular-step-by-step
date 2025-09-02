import { Component, inject, Input } from '@angular/core';

import { type Task } from './each-task.model';

import { TaskService } from '../task.service';

@Component({
  selector: 'app-each-task',
  standalone: false,
  templateUrl: './each-task.html',
  styleUrl: './each-task.css',
})
export class EachTask {
  @Input() selectedTask!: Task;
  taskService: TaskService = inject(TaskService);

  onCompleteTask() {
    this.taskService.removeTask(this.selectedTask.id);
  }
}
