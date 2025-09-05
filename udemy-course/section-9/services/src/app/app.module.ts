import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { TaskListsComponent } from './tasks/task-lists/task-lists.component';
import { TaskItemComponent } from './tasks/task-lists/task-item/task-item.component';
import { FormsModule } from '@angular/forms';
import { TaskService } from './tasks/task.service';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    NewTaskComponent,
    TaskListsComponent,
    TaskItemComponent,
  ],
  imports: [BrowserModule, FormsModule],
  // providers: [TaskService],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
