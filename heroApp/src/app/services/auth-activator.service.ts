import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthActivatorService implements CanActivate{

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    if (!this.authService.isLoggedIn()) {
      alert("Log in om verder te gaan");
      this.router.navigate(['/auth']);      
    }
    return this.authService.isLoggedIn();
  }

}
