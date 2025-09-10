import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlacesComponent } from './places/places.component';
import { AvailablePlacesComponent } from './places/available-places/available-places.component';
import { PlacesContainerComponent } from './places/places-container/places-container.component';
import { UserPlacesComponent } from './places/user-places/user-places.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './shared/modal/modal.component';
import { ErrorModalComponent } from './shared/modal/error-modal/error-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    AvailablePlacesComponent,
    PlacesContainerComponent,
    UserPlacesComponent,
    ModalComponent,
    ErrorModalComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
