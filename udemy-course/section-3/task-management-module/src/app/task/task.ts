import { Component, Input } from '@angular/core';

import { type NewAddTask } from './task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input() selectedUser!: { id: string; name: string; avatar: string };
  addTaskVisibility: boolean = false;
  private taskService: TaskService;
  constructor(taskService: TaskService) {
    this.taskService = taskService;
    taskService.saveTask();
  }

  get selectedTask() {
    return this.taskService.getUserTask(this.selectedUser.id);
  }

  onAddTask() {
    this.addTaskVisibility = true;
  }

  onCloseTask() {
    this.addTaskVisibility = false;
  }

  onCreateTask(task: NewAddTask) {
    this.taskService.addTask(task, this.selectedUser.id);
    this.addTaskVisibility = false;
  }
}
