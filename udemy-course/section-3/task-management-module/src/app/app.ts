import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { DUMMY_USERS } from './user/dummy-users';
// import { User } from './user/user';
// import { Task } from './task/task';
// import { NgFor } from '@angular/common';
// import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: false,
  // imports: [Header, User, Task, NgFor, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('task-management');

  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectId(id: string) {
    this.selectedUserId = id;
  }
}
