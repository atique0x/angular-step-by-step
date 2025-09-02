import { Component, Input } from '@angular/core';
import { EachTask } from './each-task/each-task';
import { NgFor } from '@angular/common';
import { NewTask } from './new-task/new-task';
import { NgIf } from '@angular/common';
import { type NewAddTask } from './task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  imports: [EachTask, NgFor, NewTask, NgIf],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input() selectedUser!: { id: string; name: string; avatar: string };
  addTaskVisibility: boolean = false;
  private taskService: TaskService;
  constructor(taskService: TaskService) {
    this.taskService = taskService;
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
