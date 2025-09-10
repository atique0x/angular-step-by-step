import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  loggedIn = true;

  isAuthenticated(): Promise<boolean> {
    const promise: Promise<boolean> = new Promise((res, rej) => {
      setTimeout(() => {
        res(this.loggedIn);
      }, 500);
    });
    return promise;
  }
  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }
}
