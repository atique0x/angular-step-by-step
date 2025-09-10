import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService) {}
  router = inject(Router);
  logIn = false;

  ngOnInit() {}

  onServerLoad(id: number) {
    this.router.navigate(['/servers', id, 'edit'], {
      queryParams: { allowEdit: 1 },
      fragment: 'loading',
    });
  }
  onLogin() {
    this.authService.login();
    this.logIn = this.authService.loggedIn;
  }

  onLogout() {
    this.authService.logout();
    this.logIn = this.authService.loggedIn;
  }
}
