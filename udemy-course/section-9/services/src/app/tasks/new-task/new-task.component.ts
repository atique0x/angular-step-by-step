import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent implements OnInit {
  @ViewChild('form') formEl!: ElementRef<HTMLFormElement>;

  private taskService: TaskService = inject(TaskService);

  onAddTask(title: string, description: string) {
    this.taskService.addTask({ title, description });
    this.formEl?.nativeElement.reset();
  }
  constructor() {}

  ngOnInit(): void {}
}
