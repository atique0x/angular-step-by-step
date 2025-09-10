import { Component, inject } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'directive-deep-drive';

  private authService: AuthService = inject(AuthService);

  get permission() {
    return this.authService.activePermission;
  }
}
