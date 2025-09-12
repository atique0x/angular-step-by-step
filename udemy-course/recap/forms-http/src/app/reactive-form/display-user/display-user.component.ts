import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../user.model';
import { UserHttpService } from '../user-http.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css'],
})
export class DisplayUserComponent implements OnInit, OnDestroy {
  allUsers: User[] = [];
  private userSub!: Subscription;

  constructor(private userHttpService: UserHttpService) {}

  ngOnInit(): void {
    this.userHttpService.fetchUser();
    this.userSub = this.userHttpService.users.subscribe((data) => {
      this.allUsers = data;
    });
  }

  onDeleteUser(id: string | undefined) {
    id ? this.userHttpService.removeUser(id) : '';
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe(); // cleanup
  }
}
