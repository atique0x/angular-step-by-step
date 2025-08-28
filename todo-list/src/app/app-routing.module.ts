import { TaskListComponent } from './task-list/task-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderComponent } from './calender/calender.component';

const routes: Routes = [
  { component: TaskListComponent, path: '' },
  { component: CalenderComponent, path: 'calender' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
