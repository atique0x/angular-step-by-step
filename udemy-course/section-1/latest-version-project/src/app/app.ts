import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';

import { DUMMY_USERS } from './user/dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, User],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('latest-version-project');

  users = DUMMY_USERS;

  selectUser(id: string) {
    console.log(event);
    console.log('Select', id);
  }
}
