import { Component, inject, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task, TaskStatusOptions } from '../task.model';

@Component({
  selector: 'app-task-lists',
  templateUrl: './task-lists.component.html',
  styleUrls: ['./task-lists.component.css'],
})
export class TaskListsComponent implements OnInit {
  private taskService: TaskService = inject(TaskService);

  selectedFilter: string = 'all';
  tasks: Task[] = this.taskService.alltasks;
  taskoptions = TaskStatusOptions;

  onChangeTasksFilter(filter: string) {
    this.selectedFilter = filter;

    switch (this.selectedFilter) {
      case 'open':
        this.tasks = this.taskService.alltasks.filter(
          (task) => task.status === 'OPEN'
        );
        break;

      case 'in-progress':
        this.tasks = this.taskService.alltasks.filter(
          (task) => task.status === 'IN_PROGRESS'
        );
        break;

      case 'done':
        this.tasks = this.taskService.alltasks.filter(
          (task) => task.status === 'DONE'
        );
        break;

      default:
        this.tasks = this.taskService.alltasks;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
