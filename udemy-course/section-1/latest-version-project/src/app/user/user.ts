import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input()
  id!: string;

  @Input()
  avatar!: string;

  @Input()
  name!: string;

  @Output()
  select = new EventEmitter<string>();

  // @Input() user!: { id: number; name: string; avatar: string };
  get imagePath() {
    return `users/${this.avatar}`;
  }
  get userName() {
    return this.name;
  }

  onSelectUser() {
    console.log(this.select.emit);
    this.select.emit(this.id);
  }
}
