import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  templateUrl: './rect.component.html',
  styleUrls: ['./rect.component.css'],
})
export class RectComponent implements OnInit {
  @Input() height!: string;
  @Input() width!: string;

  @Output() heightChange = new EventEmitter();
  @Output() widthChange = new EventEmitter();

  onReset() {
    console.log('Clicked');
    this.heightChange.emit('100');
    this.widthChange.emit('100');
  }

  constructor() {}

  ngOnInit(): void {}
}
