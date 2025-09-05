import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogginService {
  logged(msg: string) {
    const date = new Date().toLocaleTimeString();
    console.log(`[${date}]: ${msg}`);
  }
  constructor() {}
}
