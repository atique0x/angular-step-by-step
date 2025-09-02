import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css'],
})
export class ServerStatusComponent implements OnInit {
  currentStatus: `online` | `offline` | `unknown` = 'offline';

  constructor() {
    setInterval(() => {
      const rndm = Math.random() * 10;
      console.log(rndm);
      if (rndm < 5) {
        this.currentStatus = 'online';
      } else if (rndm < 9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 2000);
  }

  ngOnInit(): void {}
}
