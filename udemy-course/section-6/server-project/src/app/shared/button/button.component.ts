import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[appButton]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() buttonTitle!: string;
  @Input() buttonIcon!: string;
}
