import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageComponent implements OnInit {
  @Input() newCount!: string;
  constructor() {}

  ngOnInit(): void {}
  messages: string[] = [];
  // rndm = Math.random().toFixed(2);
  get debugOutput() {
    console.log('[Messages] "debugOutput" binding re-evaluated.');
    // console.log(this.rndm);
    // return this.rndm;
    return 'Messages Component Debug Output';
  }

  onAddMessage(message: string) {
    this.messages = [...this.messages, message];
  }
}
