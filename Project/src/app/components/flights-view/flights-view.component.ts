import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Flight } from "../../model/flight";
import { FlightServiceService } from '../../service/flightService/flight-service.service';
import {FlightsModule} from "../flights.module";
import {error} from "@angular/compiler-cli/src/transformers/util";
@Component({
  selector: 'app-flights-view',
  templateUrl: './flights-view.component.html',
  styleUrls: ['./flights-view.component.css']
})
export class FlightsViewComponent implements OnInit {

  pageTitle = 'Flights List';
  filteredFlights: Flight[] = [];
  errorMessage = '';
  public dataSource = new MatTableDataSource<Flight>();
  public displayedColumns = ['id', 'destination', 'departure' ,'departureTime', 'duration', 'ticketPrice', 'delete'];
  public flights: Flight[] = [];

  constructor(private flightService: FlightServiceService, private router: Router) { }

  ngOnInit(): void {
    this.flightService.getFlights().subscribe(res => {
      this.flights = res;
      this.dataSource.data = this.flights;
    })
  }

  public chooseFlight(id: string) {
    this.router.navigate(['/flights/', id]);
  }


  public deleteFlight(id: number) {
    this.flightService.deleteFlight(id).subscribe(res => {
      this.flightService.getFlights().subscribe(res => {
        this.flights = res;
        this.dataSource.data = this.flights;
      })
    })
  }

  public addFlight() {
    this.router.navigate(['/flights/add']);
  }

/*
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredFlights = this.listFilter ? this.performFilter(this.listFilter) : this.employees;
  }
  performFilter(filterBy: string): Flight[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.flights.filter((flight: Flight) =>
      flight.airportDestination.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }*/


}
