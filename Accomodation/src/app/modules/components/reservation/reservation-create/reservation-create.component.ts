import { Component, OnInit } from '@angular/core';
import {Reservation} from "../../../../core/models/reservation";
import {ReservationService} from "../../../../core/services/reservation.service";
import {Router} from "@angular/router";
import {ReservationDto} from "../../../../core/dtos/reservationDto";

@Component({
  selector: 'app-reservation-create',
  templateUrl: './reservation-create.component.html',
  styleUrls: ['./reservation-create.component.css']
})
export class ReservationCreateComponent implements OnInit {

  public reservation: ReservationDto = new ReservationDto();
  constructor(private  reservationService: ReservationService, private router: Router) {
    this.reservation.accommodationId = '1';
  this.reservation.guestId = '1';
  this.reservation.accepted = false;
  this.reservation.totalPrice = 100;}

  public createReservation(){
    if (!this.isValidInput()) return alert('invalid input');
//provera da li se automatski prihvata
    this.reservationService.createReservation(this.reservation).subscribe(res => {
      this.router.navigate(['/reservations']);
    });
  }

  public acceptReservation(id: number) {
    //automatsko prihvatanje
    this.reservationService.autoAccept(this.reservation).subscribe();
  }
  private isValidInput(): boolean {
    return this.reservation?.numGuests.toString() != ''
  }
  ngOnInit(): void {
  }

}
