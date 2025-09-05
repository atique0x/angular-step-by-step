import { Component, inject } from '@angular/core';
import { TaskService } from './tasks/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'services';
  // taskService: TaskService = inject(TaskService);
}
