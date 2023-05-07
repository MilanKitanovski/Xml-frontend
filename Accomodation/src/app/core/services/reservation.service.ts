import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {Reservation} from "../models/reservation";
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  public searchResponse: any[] = [];
  apiHost: string = 'http://localhost:5028/api/reservation';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAll(): Observable<Reservation[]> {
  return this.http.get<Reservation[]>(this.apiHost + '/all', {headers: this.headers}).pipe(
  catchError(this.handleError)
);
}

  deleteReservation(id: number): Observable<any> {
    return this.http.delete<any>(this.apiHost + '/' + id, {headers: this.headers}).pipe(
      catchError(this.handleError)
    );
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

  createReservation(reservationDto: any): Observable<any> {
    return this.http.post<any>(this.apiHost + '/createReservation', reservationDto, {headers: this.headers}).pipe(
      catchError(this.handleError)
    );
  }
}
