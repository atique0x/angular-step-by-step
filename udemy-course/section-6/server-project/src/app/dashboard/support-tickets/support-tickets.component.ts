import { Component, OnInit } from '@angular/core';
import { ticketData, Tickets } from './support-tickets.model';

@Component({
  selector: 'app-support-tickets',
  templateUrl: './support-tickets.component.html',
  styleUrls: ['./support-tickets.component.css'],
})
export class SupportTicketsComponent implements OnInit {
  tickets: Tickets[] = [];

  onTicketData(data: ticketData) {
    console.log(data);
    this.tickets.push({
      id: `${this.tickets.length + 1}`,
      title: data.title,
      message: data.message,
      status: 'open',
    });
    console.log(this.tickets);
  }

  onMarked(id: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id) {
        return { ...ticket, status: 'close' };
      }
      return ticket;
    });
    console.log('From Support Ticket Marked', id);
  }

  constructor() {}

  ngOnInit(): void {}
}
