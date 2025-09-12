import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TempleteDrivenFormComponent } from './templete-driven-form/templete-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DashboardComponent } from './http-client/dashboard/dashboard.component';
import { DisplayUserComponent } from './reactive-form/display-user/display-user.component';
import { UpdateFormComponent } from './reactive-form/update-form/update-form.component';

const routes: Routes = [
  // { path: '', component: DashboardComponent },
  { path: '', component: ReactiveFormComponent },
  { path: 'users', component: DisplayUserComponent },
  { path: 'edituser/:id', component: UpdateFormComponent },
  // { path: 'templete-form', component: TempleteDrivenFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
