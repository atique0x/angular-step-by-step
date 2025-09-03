import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { SupportTicketsComponent } from './dashboard/support-tickets/support-tickets.component';
import { DashboardItemComponent } from './shared/dashboard-item/dashboard-item.component';
import { NewTicketComponent } from './dashboard/support-tickets/new-ticket/new-ticket.component';
import { ButtonComponent } from './shared/button/button.component';
import { ControlComponent } from './shared/control/control.component';
import { FormsModule } from '@angular/forms';
import { TicketComponent } from './dashboard/support-tickets/ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServerStatusComponent,
    TrafficComponent,
    SupportTicketsComponent,
    DashboardItemComponent,
    NewTicketComponent,
    ButtonComponent,
    ControlComponent,
    TicketComponent,
  ],
  imports: [FormsModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
