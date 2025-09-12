import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserHttpService {
  baseUrl = 'https://user-form-b84d9-default-rtdb.firebaseio.com/';
  constructor(private http: HttpClient) {}

  usersSubject = new BehaviorSubject<User[]>([]);
  users = this.usersSubject.asObservable();

  createUser(user: User) {
    this.http.post(`${this.baseUrl}users.json`, user).subscribe({
      next: (response) => {
        console.log(response);
        this.fetchUser();
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Task Added');
      },
    });
  }

  fetchUser() {
    this.http
      .get<{ [key: string]: User }>(`${this.baseUrl}users.json`)
      .pipe(
        map((response) => {
          let users: User[] = [];
          for (let key in response) {
            if (response.hasOwnProperty(key)) {
              users.push({ ...response[key], id: key });
            }
          }
          return users;
        })
      )
      .subscribe({
        next: (response) => {
          this.usersSubject.next(response);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('Task Added');
        },
      });
  }

  getUserById(id: string) {
    return this.http.get<User>(`${this.baseUrl}users/${id}.json`);
  }

  removeUser(id: string) {
    this.http.delete(`${this.baseUrl}users/${id}.json`).subscribe({
      next: (res) => {
        console.log('Respone: ', res);
        this.fetchUser();
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Task Added');
      },
    });
  }

  updateUserData(id: string, user: User) {
    this.http.patch(`${this.baseUrl}users/${id}.json`, user).subscribe({
      next: (res) => {
        console.log('Respone Update: ', res);
        this.fetchUser();
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Task Added');
      },
    });
  }
}
