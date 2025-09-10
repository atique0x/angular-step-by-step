import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  // imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Input() taskShow!: boolean;
  @Input() userId!: string;
  @Output() closeTask = new EventEmitter();
  taskService: TaskService = inject(TaskService);

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCloseTask() {
    this.closeTask.emit();
  }

  onSubmit() {
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate,
      },
      this.userId
    );
    this.closeTask.emit();
  }
}
