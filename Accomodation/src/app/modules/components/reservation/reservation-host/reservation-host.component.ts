import { Component, OnInit } from '@angular/core';
import {User} from "../../../../core/models/user";
import {MatTableDataSource} from "@angular/material/table";
import {Reservation} from "../../../../core/models/reservation";
import {ReservationService} from "../../../../core/services/reservation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reservation-host',
  templateUrl: './reservation-host.component.html',
  styleUrls: ['./reservation-host.component.css']
})
export class ReservationHostComponent  implements OnInit {

  user: User | null = null;
  pageTitle = 'Flights List';
  errorMessage = '';
  public dataSource = new MatTableDataSource<Reservation>();
  public displayedColumns = ['id', 'accommodationId', 'guestId', 'startDate', 'endDate', 'numGuests', 'accepted', 'totalPrice','accept'];
  public reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService, private router: Router) { }

  ngOnInit(): void {
    this.reservationService.getByHostId(1).subscribe(res => {
      this.reservations = res.sort((a,b) => 0 - (a > b ? 1 : -1));
      //opadajuce .sort((a,b) => 0 - (a > b ? -1 : 1));
      this.dataSource.data = this.reservations;
      /* this.user = this.authService.getUser();
    this.getUserSubscription = this.authService.getUserObservable().subscribe({
      next: (result) => {
        this.user = result
      }
    })*/
    })
  }


  public acceptReservation(reservation: Reservation ) {
    //rucno prihvatanje
    this.reservationService.acceptReservation(reservation).subscribe(res => {
      this.reservationService.getByHostId(1).subscribe(res => {
        this.reservations = res;
        this.dataSource.data = this.reservations;
      })
    })
  }

  chooseReservation() {

  }

  public disabled(reservation: Reservation){
    //nije obrisana i nije jos prihvacena
    if (reservation.accepted == false){
      return false;
    }
    return true;
  }
}
