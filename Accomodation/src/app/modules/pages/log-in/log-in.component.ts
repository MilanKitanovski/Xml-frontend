import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/auth/services/auth.service";
import {LoginRequest} from "../../../core/auth/dtos/login-request";
import {Router} from "@angular/router";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent{


  loginForm = new LoginRequest('', '')



  constructor(private authService: AuthService, private router: Router) {}

  login() {
    console.log(this.loginForm)
    this.authService.signIn(this.loginForm).subscribe({
      next: res => {
        console.log(res);
        this.authService.setAuth(res.token)
        this.authService.redirectHome();
      },
      error: err => {
        console.log(err);
      }
    });

  }
  register() {
    this.router.navigate(['/register']);
  }

}
