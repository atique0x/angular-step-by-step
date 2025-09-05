import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() messages!: string[];

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
