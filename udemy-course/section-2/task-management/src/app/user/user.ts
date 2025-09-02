import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Users } from './user.model';
import { Card } from '../shared/card/card';

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) user!: Users;
  @Input() selected!: boolean;
  @Output() sendId = new EventEmitter<string>();

  get imagePath() {
    return 'users/' + this.user.avatar;
  }

  onSelectUser() {
    console.log(this.user.name, this.user.id);
    this.sendId.emit(this.user.id);
  }
}
