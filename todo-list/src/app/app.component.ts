import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Todo-App';
  taskList = [
    'Arrived ESS',
    "Note Today's Materials",
    'Start Study',
    'Create Mini Project',
  ];
}
