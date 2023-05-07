import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {Reservation} from "../models/reservation";
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  apiHost: string = 'http://localhost:5028/api/reservation';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }
  getAll(): Observable<Reservation[]> {
  return this.http.get<Reservation[]>(this.apiHost + '/all', {headers: this.headers}).pipe(
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
  getByHostId(id: number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiHost + '/host' + id, {headers: this.headers}).pipe(
      catchError(this.handleError)
    );
  }
  getByGuestId(id: number): Observable<Reservation[]> {
  return this.http.get<Reservation[]>(this.apiHost + '/guest' + id, {headers: this.headers}).pipe(
  catchError(this.handleError)
);
}
  cancel(reservation: any): Observable<any> {
    return this.http.put<Reservation>(this.apiHost + '/guestCancel', reservation, {headers: this.headers});
  }
  autoAccept(reservation: any): Observable<any> {
    return this.http.put<any>(this.apiHost + '/autoAccept', reservation, {headers: this.headers});
  }
  acceptReservation(reservation: any): Observable<any> {
    return this.http.put<any>(this.apiHost + '/accept' , reservation, {headers: this.headers});
  }

}
