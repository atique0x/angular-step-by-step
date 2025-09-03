type Status = 'open' | 'close';

export interface Tickets {
  id: string;
  title: string;
  message: string;
  status: Status;
}

export interface ticketData {
  title: string;
  message: string;
}
