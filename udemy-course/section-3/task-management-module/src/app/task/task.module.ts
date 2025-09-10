import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EachTask } from './each-task/each-task';
import { NewTask } from './new-task/new-task';
import { Task } from './task';
import { Card } from '../shared/card/card';
import { SharedModule } from '../shared/card/shared.module';

@NgModule({
  declarations: [Task, EachTask, NewTask],
  exports: [Task],
  imports: [FormsModule, CommonModule, SharedModule],
})
export class TaskModule {}
