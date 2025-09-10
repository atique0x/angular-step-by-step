import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  email = '';
  password = '';
  valuePermission = '';
  private authService = inject(AuthService);

  onSubmit() {
    this.authService.authenticate(this.email, this.password);
    this.valuePermission = this.authService.activePermission;
  }
  constructor() {}

  ngOnInit(): void {}
}
