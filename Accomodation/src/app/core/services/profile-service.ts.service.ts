import { Injectable } from '@angular/core';
import {SignInRequestPayload} from "../../modules/pages/log-in/login-request";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserProfileDto} from "../dtos/userDto";

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceTsService {

  baseUrl = 'http://localhost:5245'

  constructor(private http: HttpClient) { }


  changeUser(user: UserProfileDto): Observable<any>{
    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
      "Authorization" : "Bearer " + localStorage.getItem("token"), //autorizacija
    });
    let options = {headers:headers};
    return this.http.put(this.baseUrl +'/api/users/update-user/' + user.id, user, options);
  }

}
