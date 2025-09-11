import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TempleteDrivenFormComponent } from './templete-driven-form/templete-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { HeaderComponent } from './http-client/header/header.component';
import { FooterComponent } from './http-client/footer/footer.component';
import { DashboardComponent } from './http-client/dashboard/dashboard.component';
import { CreateTaskComponent } from './http-client/dashboard/create-task/create-task.component';
import { TaskDetailsComponent } from './http-client/dashboard/task-details/task-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TempleteDrivenFormComponent,
    ReactiveFormComponent,
    HttpClientComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    CreateTaskComponent,
    TaskDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
