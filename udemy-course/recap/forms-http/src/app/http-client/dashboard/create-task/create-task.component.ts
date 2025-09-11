import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../../model/task.model';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements AfterViewInit {
  @Output()
  CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  EmitTaskData: EventEmitter<Task> = new EventEmitter<Task>();

  @ViewChild('taskForm') form!: NgForm;

  @Input() isEditMode: boolean = false;
  @Input() selectTask!: Task;

  constructor() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.form.form.patchValue(this.selectTask);
    });
  }

  OnCloseForm() {
    this.CloseForm.emit(false);
  }

  onFormSubmit() {
    this.EmitTaskData.emit(this.form.value);
    this.OnCloseForm();
    // console.log(this.form.value);
  }
}
