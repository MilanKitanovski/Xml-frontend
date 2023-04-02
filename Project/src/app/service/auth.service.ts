import { Injectable } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper : JwtHelperService) { }

  public isAuthenticated(){
    const token = localStorage.getItem("token");
    return !this.jwtHelper._isTokenExpired(<string>token);
  }
}
