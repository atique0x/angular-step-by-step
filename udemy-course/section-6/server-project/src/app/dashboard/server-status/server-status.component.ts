import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css'],
})
export class ServerStatusComponent implements OnInit, AfterViewInit, OnDestroy {
  currentStatus: `online` | `offline` | `unknown` = 'offline';
  private intervalId?: NodeJS.Timeout;

  constructor() {
    console.log('-----From Constructor-----');
  }

  ngOnInit(): void {
    console.log('-----From ngOnInit-----');
    this.intervalId = setInterval(() => {
      const rndm = Math.random() * 10;
      // console.log(rndm);
      if (rndm < 5) {
        this.currentStatus = 'online';
        // this.ngOnDestroy();
      } else if (rndm < 9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 2000);
  }

  ngAfterViewInit() {
    console.log('------ngAfterViewInit------');
  }
  ngOnDestroy(): void {
    // console.log('-------Destroyed-------');
    clearInterval(this.intervalId);
  }
}
