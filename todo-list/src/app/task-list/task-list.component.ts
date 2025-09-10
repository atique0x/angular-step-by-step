import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  taskList: Task[] = [
    new Task('Arrived ESS'),
    new Task("Note Today's Materials"),
    new Task('Start Study'),
    new Task('Create Mini Project'),
  ];

  addTask(newTask: string) {
    if (!newTask) {
      alert('Please write the task first');
      return;
    }

    this.taskList.push(new Task(newTask));
    console.log('Clicked: ', newTask);
  }
  removeTask(existingTask: Task) {
    let confirmed: boolean = confirm(
      `Do you want to remove task ${existingTask.title}`
    );
    if (confirmed) {
      this.taskList = this.taskList.filter((task) => task !== existingTask);
    }
  }
  completeTask(existingTask: Task) {
    let confirmed: boolean = confirm(
      `Are you to complete ${existingTask.title}`
    );
    if (confirmed) {
      existingTask.isDone = !existingTask.isDone;
    }
  }
}

class Task {
  public isDone = false;
  constructor(public title: string) {
    this.title = title;
  }
}
