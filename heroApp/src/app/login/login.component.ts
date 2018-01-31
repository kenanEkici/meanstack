import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedIn: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loggedIn = this.authService.isLoggedIn();
  }

  login() {
    if (this.loggedIn){
      this.authService.logout();
      this.loggedIn = this.authService.isLoggedIn();
    } else {      
      this.authService.login();
      this.loggedIn = this.authService.isLoggedIn();
    }
  }

}
