import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TempleteDrivenFormComponent } from './templete-driven-form/templete-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DashboardComponent } from './http-client/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'templete-form', component: TempleteDrivenFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
