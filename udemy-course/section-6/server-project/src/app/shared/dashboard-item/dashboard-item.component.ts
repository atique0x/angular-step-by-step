import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.css'],
  // encapsulation: ViewEncapsulation.None,
  // host: {
  //   class: 'dashboard-item',
  // },
})
export class DashboardItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() image!: { src: string; alt: string };
  @Input() title!: string;
}
