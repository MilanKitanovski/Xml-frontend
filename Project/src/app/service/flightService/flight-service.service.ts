import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Flight} from "../../model/flight";

import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

  apiHost: string = 'http://localhost:5000/flight';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.apiHost + '/all', {headers: this.headers}).pipe(
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

  getFlight(id: string): Observable<Flight> {
    return this.http.get<Flight>('http://localhost:5000/flight/flight'+ id, {headers: this.headers});
  }

  /*
  * getFlight(id: string | null): Observable<Flight> {
    if (id === '') {
      return of(this.initializeFlight());
    }
    const url = `http://localhost:5100/flight/${id}`;
    return this.http.get<Flight>(url)
      .pipe(
        catchError(this.handleError)
      );
  }
  *
  * private initializeFlight(): Flight {
    return {
        id: "";
        airportDestination : "";
  airportDeparture :  "";
  departureTime :   "2022-12-12T00:00:05Z";
  duration : 10;
  ticketPrice : 10;
  capacity : 10;
    };
    * */

  deleteFlight(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + '/' + id, {headers: this.headers}).pipe(
      catchError(this.handleError)
    );
  }

  createFlight(flight: any): Observable<any> {
    return this.http.post<any>(this.apiHost + '/create', flight, {headers: this.headers}).pipe(
      catchError(this.handleError)
    );
  }
}
