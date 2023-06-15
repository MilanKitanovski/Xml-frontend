import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  logout(): void {
    localStorage.setItem("token", "")
    console.log(localStorage.getItem("token"));
  }

  getToken(): string | null {
    if (localStorage.getItem("token") == "") {
      return "";
    } else {
      return localStorage.getItem("token");
    }
  }
}
