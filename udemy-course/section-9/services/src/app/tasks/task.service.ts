import { inject, Injectable } from '@angular/core';
import { Task, TaskStatus } from './task.model';
import { LogginService } from '../loggin.service';

@Injectable({ providedIn: 'root' })
export class TaskService {
  tasks: Task[] = this.getLocalStorage() || [];
  readonly alltasks = this.tasks;
  loggingService: LogginService = inject(LogginService);

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toFixed(5),
      status: 'OPEN',
    };
    this.tasks.push(newTask);
    this.setLocalStorage();
    this.loggingService.logged(`TASK ADDED ${taskData.title}`);
  }

  updateTaskStatus(updateStatus: { taskId: string; newStatus: TaskStatus }) {
    const task = this.tasks.find((t) => t.id === updateStatus.taskId);
    if (task) {
      task.status = updateStatus.newStatus;
      console.log(this.tasks);
      this.loggingService.logged(`TASK UPDATED ${updateStatus.taskId}`);
    }
    this.setLocalStorage();
  }

  setLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getLocalStorage(): Task[] {
    const storedTask = localStorage.getItem('tasks');
    return storedTask ? JSON.parse(storedTask) : [];
  }
}
