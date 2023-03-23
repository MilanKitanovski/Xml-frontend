import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import {Flight} from "../../model/flight";

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

  apiHost: string = 'http://localhost:5100/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.apiHost + '/flights/all', {headers: this.headers});
  }

  getFlight(id: number): Observable<Flight> {
    return this.http.get<Flight>(this.apiHost + '/flights/' + id, {headers: this.headers});
  }

  deleteFlight(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + '/flights/' + id, {headers: this.headers});
  }

  createFlight(room: any): Observable<any> {
    return this.http.post<any>(this.apiHost + '/flights/', room, {headers: this.headers});
  }
}
