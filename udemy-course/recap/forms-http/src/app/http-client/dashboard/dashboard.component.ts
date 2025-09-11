import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task.model';
import { TasksService } from '../tasks.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  showCreateTaskForm: boolean = false;
  allTasks: Task[] = [];
  isFetching: boolean = false;
  isEditMode: boolean = false;
  selectedTask!: Task;
  currentTaskId: string | undefined;

  showDetails: boolean = false;
  showTask!: Task;

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.fetchAllTasks();
    this.tasksService.errorMessage.subscribe((res) => {
      this.showError(res);
    });
  }

  OpenCreateTaskForm() {
    this.showCreateTaskForm = true;
    this.isEditMode = false;
    this.selectedTask = {
      assigned: '',
      created: '',
      description: '',
      priority: '',
      status: '',
      title: '',
    };
  }

  CloseCreateTaskForm() {
    this.showCreateTaskForm = false;
  }

  onCreateOrUpdateTask(task: Task) {
    if (!this.isEditMode) {
      this.tasksService.createTask(task);
    } else {
      console.log('Update');
      this.tasksService.updateTask(this.currentTaskId, task);
    }
  }

  fetchAllTasks() {
    this.isFetching = true;
    this.tasksService.fetchTasks().subscribe({
      next: (tasks) => {
        this.allTasks = tasks;
        this.isFetching = false;
      },
      error: (err) => {
        this.showError(err);
      },
    });
  }

  onDeleteTask(id: string | undefined) {
    if (id) {
      this.tasksService.deleteTask(id);
    }
  }

  onEditTask(id: string | undefined) {
    this.showCreateTaskForm = true;
    this.isEditMode = true;
    this.currentTaskId = id;

    const task = this.allTasks.find((task) => task.id === id);
    if (task) {
      this.selectedTask = task;
    }
  }

  onShowTaskDetail(id: string | undefined) {
    if (id) {
      this.showDetails = true;
      this.tasksService.fetchTask(id).subscribe((task) => {
        this.showTask = task;
      });
    }
  }

  onClearTask() {
    this.tasksService.clearTasks();
  }

  showError(err: HttpErrorResponse) {
    console.log('Error Occurs:', err.message);
  }

  onCloseTask(isClose: boolean) {
    this.showDetails = isClose;
  }
}
