import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../place.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-places',
  templateUrl: './user-places.component.html',
  styleUrls: ['./user-places.component.css'],
})
export class UserPlacesComponent implements OnInit {
  // places: Place[] | undefined;
  places: Place[] = [];

  isFetched = false;
  isError = '';

  placesService = inject(PlacesService);
  subscriptions: Subscription[] = [];

  constructor() {}

  onRemovePlace(place: Place) {
    console.log(place);
    this.subscriptions.push(
      this.placesService.removeUserPlace(place).subscribe()
    );
  }

  ngOnInit(): void {
    this.isFetched = true;

    this.subscriptions.push(
      this.placesService.loadedUserPlaces$.subscribe(
        (places) => (this.places = places)
      )
    );

    this.subscriptions.push(
      this.placesService.loadUserPlaces().subscribe({
        error: (err) => {
          this.isError = err.message;
          this.isFetched = false;
        },
        complete: () => (this.isFetched = false),
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
