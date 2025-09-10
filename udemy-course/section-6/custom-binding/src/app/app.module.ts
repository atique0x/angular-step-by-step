import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RectComponent } from './rect/rect.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, RectComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
