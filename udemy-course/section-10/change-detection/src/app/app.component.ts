import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'change-detection';
  get debugOutput() {
    console.log('[AppComponent] "debugOutput" binding re-evaluated.');
    return 'AppComponent Component Debug Output';
  }
}
