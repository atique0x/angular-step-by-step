import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { App } from './app';
import { Header } from './header/header';
import { User } from './user/user';
import { TaskModule } from './task/task.module';
import { SharedModule } from './shared/card/shared.module';

@NgModule({
  declarations: [App, Header, User],
  bootstrap: [App],
  imports: [BrowserModule, SharedModule, TaskModule],
})
export class AppModule {}
