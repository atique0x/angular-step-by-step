import {
  ChangeDetectionStrategy,
  Component,
  inject,
  NgZone,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit {
  count = 0;

  private zone = inject(NgZone);

  constructor() {}

  ngOnInit(): void {
    console.log('NG ON INIT');
    setTimeout(() => {
      console.log('--------TIME: 3s--------');
      this.count = 0;
    }, 3000);
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        console.log('--------TIME: 4s--------');
      }, 4000);
    });
  }

  get debugOutput() {
    console.log('[Counter] "debugOutput" binding re-evaluated.');
    return 'Counter Component Debug Output';
  }

  onDecrement() {
    this.count = this.count - 1;
  }

  onIncrement() {
    this.count = this.count + 1;
  }
}
