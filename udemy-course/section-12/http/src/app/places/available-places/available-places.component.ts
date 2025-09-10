import { Component, inject, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { Subscription } from 'rxjs';
import { PlacesService } from '../place.service';
@Component({
  selector: 'app-available-places',
  templateUrl: './available-places.component.html',
  styleUrls: ['./available-places.component.css'],
})
export class AvailablePlacesComponent implements OnInit {
  places: Place[] | undefined;

  isFetched = false;
  isError = '';

  placesService = inject(PlacesService);
  subscription!: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.isFetched = true;
    this.subscription = this.placesService.loadAvailablePlaces().subscribe({
      next: (places) => {
        this.places = places;
      },
      error: (err) => {
        this.isError = err.message;
      },
      complete: () => {
        this.isFetched = false;
      },
    });
  }

  onSelectPlace(place: Place) {
    this.placesService.addPlaceToUserPlaces(place).subscribe({
      next: (data) => {
        console.log('Data post', data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
