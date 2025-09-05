import {
  Directive,
  inject,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
})
export class AuthDirective {
  @Input('appAuth') userType!: string;
  authService: AuthService = inject(AuthService);
  templateRef = inject(TemplateRef);
  viewContainerRef = inject(ViewContainerRef);

  constructor() {}

  ngOnInit() {
    if (this.currentLoggedIn === this.userType) {
      console.log('Guest Logged');
      console.log(this.templateRef);
      console.log(this.viewContainerRef);
    } else {
      console.log('Guest Removed');
    }
  }

  get currentLoggedIn() {
    return this.authService.activePermission;
  }
}
