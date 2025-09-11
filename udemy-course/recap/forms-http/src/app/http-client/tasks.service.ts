import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './model/task.model';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  errorMessage = new Subject<HttpErrorResponse>();
  constructor(private http: HttpClient) {}

  createTask(task: Task) {
    this.http
      .post(
        'https://http-client-494dd-default-rtdb.firebaseio.com/tasks.json',
        task
      )
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (err) => {
          this.errorMessage.next(err);
        },
        complete: () => {
          console.log('Task Added');
        },
      });
  }

  fetchTasks() {
    return this.http
      .get<{ [key: string]: Task }>(
        'https://http-client-494dd-default-rtdb.firebaseio.com/tasks.json'
      )
      .pipe(
        map((response) => {
          let tasks: Task[] = [];
          for (let key in response) {
            if (response.hasOwnProperty(key)) {
              tasks.push({ ...response[key], id: key });
            }
          }
          return tasks;
        })
      );
  }

  updateTask(id: string | undefined, task: Task) {
    this.http
      .put(
        'https://http-client-494dd-default-rtdb.firebaseio.com/tasks/' +
          id +
          '.json',
        task
      )
      .subscribe({
        next: (res) => {
          console.log('Respone Update: ', res);
        },
        error: (err) => {
          this.errorMessage.next(err);
        },
        complete: () => {
          console.log('Task Added');
        },
      });
  }

  deleteTask(id: string) {
    this.http
      .delete(
        'https://http-client-494dd-default-rtdb.firebaseio.com/tasks/' +
          id +
          '.json'
      )
      .subscribe({
        next: (res) => {
          console.log('Respone: ', res);
        },
        error: (err) => {
          this.errorMessage.next(err);
        },
        complete: () => {
          console.log('Task Added');
        },
      });
  }

  clearTasks() {
    this.http
      .delete(
        'https://http-client-494dd-default-rtdb.firebaseio.com/tasks/.json'
      )
      .subscribe({
        next: (res) => {
          console.log('Respone: ', res);
        },
        error: (err) => {
          this.errorMessage.next(err);
        },
        complete: () => {
          console.log('Task Added');
        },
      });
  }

  fetchTask(id: string) {
    return this.http
      .get<Task>(
        'https://http-client-494dd-default-rtdb.firebaseio.com/tasks/' +
          id +
          '.json'
      )
      .pipe(
        map((response) => {
          return { ...response, id: id };
        })
      );
  }
}
