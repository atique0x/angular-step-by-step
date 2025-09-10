import { inject, Injectable } from '@angular/core';
import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, map, tap, throwError } from 'rxjs';
import { ModalService } from '../shared/modal.service';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  // private userPlaces: Place[] = [];
  private userPlacesSubject = new BehaviorSubject<Place[]>([]);
  loadedUserPlaces$ = this.userPlacesSubject.asObservable();

  httpClient = inject(HttpClient);
  errorService = inject(ModalService);

  // get loadedUserPlaces(): Place[] {
  //   return this.userPlaces;
  // }

  loadAvailablePlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/places',
      'Error on fetching data'
    );
  }

  loadUserPlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/user-places',
      'Error on fetching favorite places data'
    ).pipe(
      tap({
        next: (places) => {
          this.userPlacesSubject.next(places);
        },
      })
    );
  }

  addPlaceToUserPlaces(place: Place) {
    const prevPlaces = this.userPlacesSubject.value;
    const checkPlace = prevPlaces.find((p) => p.id === place.id);
    if (!checkPlace) {
      this.userPlacesSubject.next([...prevPlaces, place]);
    }

    return this.httpClient
      .put('http://localhost:3000/user-places', {
        placeId: place.id,
      })
      .pipe(
        catchError(() => {
          this.userPlacesSubject.next(prevPlaces);
          this.errorService.showError('Failed to store selected place');
          return throwError(() => new Error('Failed to store selected place'));
        })
      );
  }

  removeUserPlace(place: Place) {
    const prevPlaces = this.userPlacesSubject.value;
    if (prevPlaces.find((p) => p.id === place.id)) {
      this.userPlacesSubject.next(prevPlaces.filter((p) => p.id !== place.id));
    }

    return this.httpClient
      .delete('http://localhost:3000/user-places/' + place.id)
      .pipe(
        catchError(() => {
          this.userPlacesSubject.next(prevPlaces);
          this.errorService.showError('Failed to store user place');
          return throwError(() => new Error('Failed to store user place'));
        })
      );
  }

  private fetchPlaces(url: string, errorMessage: string) {
    return this.httpClient.get<{ places: Place[] }>(url).pipe(
      map((response) => {
        return response.places;
      }),
      catchError((error) => {
        console.log(error);
        return throwError(() => {
          return new Error(errorMessage);
        });
      })
    );
  }
}
