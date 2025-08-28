import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenderComponent } from './calender.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [CalenderComponent],
  imports: [CommonModule, MatDatepickerModule, MatNativeDateModule],
  exports: [CalenderComponent],
})
export class CalenderModule {}
