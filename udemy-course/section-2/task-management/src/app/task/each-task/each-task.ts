import { Component, EventEmitter, inject, Input, input, Output } from '@angular/core';
import { type Task } from './each-task.model';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-each-task',
  imports: [Card, DatePipe],
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
