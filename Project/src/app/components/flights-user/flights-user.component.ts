import { Component, OnInit } from '@angular/core';
import {Flight} from "../../model/flight";
import {MatTableDataSource} from "@angular/material/table";
import {FlightServiceService} from "../../service/flightService/flight-service.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {TicketServiceService} from "../../service/flightService/ticket-service.service";

@Component({
  selector: 'app-flights-user',
  templateUrl: './flights-user.component.html',
  styleUrls: ['./flights-user.component.css']
})
export class FlightsUserComponent implements OnInit {

  pageTitle = 'Flights List';
  errorMessage = '';
  public dataSource = new MatTableDataSource<Flight>();
  public displayedColumns = ['destination', 'departure' ,'departureTime', 'duration', 'ticketPrice'];
  public flights: Flight[] = [];
  amount: any;
  public userId: string | undefined;


  constructor(private flightService: FlightServiceService, private ticketService: TicketServiceService, private router: Router) { }

  ngOnInit(): void {
    this.flightService.getAvailableFlights().subscribe(res => {
      this.flights = res;
      this.dataSource.data = this.flights;
       this.userId = "user677";
    })
  };

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

  public tickets() {
    this.router.navigate(['/tickets/' + this.userId]);
  }

  public buyTicket(id: any){
  }
}
