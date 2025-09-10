import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { FormsModule } from '@angular/forms';
import { SafeLinkDirective } from './safe-link.directive';
import { AuthDirective } from './auth/auth.directive';

@NgModule({
  declarations: [AppComponent, AuthComponent, LearningResourcesComponent, SafeLinkDirective, AuthDirective],
  imports: [FormsModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
