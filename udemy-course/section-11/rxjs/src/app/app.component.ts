import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rxjs';
  count = 0;

  customInterval$ = new Observable((subscriber) => {
    setInterval(() => {
      subscriber.next('message');
      subscriber.next(++this.count);
    }, 1000);
  });

  onClick() {
    this.customInterval$.subscribe((val) => {
      console.log(val);
    });
  }
}
