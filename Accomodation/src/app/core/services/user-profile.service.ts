import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserProfileDto } from '../dtos/userProfileDto';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  apiHost: string = 'http://localhost:8080/users';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {
  }

  get(id: number): Observable<UserProfileDto> {
    return this.http.get<UserProfileDto>(this.apiHost + '/getUserByID/' + id, {headers: this.headers});
  }

  updateUserProfile(userProfile: UserProfileDto): Observable<UserProfileDto> {
    return this.http.put<UserProfileDto>(this.apiHost + '/updatee', userProfile, {headers: this.headers});
  }

  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(() => errorMessage);
  }
}
