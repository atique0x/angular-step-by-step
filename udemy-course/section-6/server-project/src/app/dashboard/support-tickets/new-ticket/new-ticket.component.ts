import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { ticketData, Tickets } from '../support-tickets.model';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css'],
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form?: ElementRef;
  // @ContentChild('form') form?: ElementRef; //Undefiend

  // enteredTitle: string = '';
  // enteredRequest: string = '';

  // onSubmit() {
  //   console.log(this.enteredTitle, this.enteredRequest);
  // }

  @Output() ticketData = new EventEmitter();

  ngAfterViewInit(): void {
    console.log('NG VIEW INIT');
    console.log(this.form);
  }

  ngOnInit(): void {
    console.log('NG ON INIT');
    console.log(this.form);
  }

  onSubmit(
    titleElement: HTMLInputElement,
    requestElement: HTMLTextAreaElement
  ) {
    console.log(titleElement.value, requestElement.value);
    const ticketData: ticketData = {
      title: titleElement.value,
      message: requestElement.value,
    };
    this.ticketData.emit(ticketData);

    this.form?.nativeElement.reset();
  }

  constructor() {}
}
