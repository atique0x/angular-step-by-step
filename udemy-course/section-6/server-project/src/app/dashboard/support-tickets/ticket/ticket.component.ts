import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Tickets } from '../support-tickets.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent implements OnInit {
  @Input() ticket?: Tickets;
  @Output() marked = new EventEmitter();

  onMarked(id?: string) {
    console.log('marked', id);
    this.marked.emit(id);
  }

  constructor() {}

  ngOnInit(): void {}
}
