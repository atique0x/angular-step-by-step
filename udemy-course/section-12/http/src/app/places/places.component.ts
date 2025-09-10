import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { PlacesService } from './place.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css'],
})
export class PlacesComponent implements OnInit {
  @Input() places!: Place[];
  @Output() selectPlace = new EventEmitter<Place>();

  onSelectPlace(place: Place) {
    this.selectPlace.emit(place);
  }

  constructor() {}

  ngOnInit(): void {}
}
