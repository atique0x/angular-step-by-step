import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../model/task.model';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent {
  @Output() isClosedTask: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() taskDetails: Task | undefined;

  onCloseTask() {
    this.isClosedTask.emit(false);
  }
}
