import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { InfoMessageComponent } from './info-message/info-message.component';
import { MessageComponent } from './message/message.component';
import { MessageListComponent } from './message/message-list/message-list.component';
import { NewMessageComponent } from './message/new-message/new-message.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    InfoMessageComponent,
    MessageComponent,
    MessageListComponent,
    NewMessageComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
