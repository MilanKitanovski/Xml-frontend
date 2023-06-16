import { Component, OnInit } from '@angular/core';
import {ReservationDto} from "../../../../core/dtos/reservationDto";
import {AccommodationService} from "../../../../core/services/accommodation.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ReservationService} from "../../../../core/services/reservation.service";

@Component({
  selector: 'app-reservation-search',
  templateUrl: './reservation-search.component.html',
  styleUrls: ['./reservation-search.component.css']
})
export class ReservationSearchComponent implements OnInit {

  public totalPrice: any;
  public reservation: ReservationDto = new ReservationDto();
  constructor(private accommodationService: AccommodationService, private route: ActivatedRoute,private  reservationService: ReservationService, private router: Router) {
    // this.reservation.accommodationId = '1';
    this.reservation.guestId = '1';
    this.reservation.accepted = false;
    this.reservation.totalPrice = 100;}



  public createReservation(){
    if (!this.isValidInput()) return alert('invalid input');
//provera da li se automatski prihvata
    this.reservationService.createReservation(this.reservation).subscribe(res => {
      //  this.router.navigate(['/reservations']);
      alert("created pending reservation with id "+res.id+ " for " +res.numGuests +" guests!")
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
    this.route.params.subscribe((params: Params) => {
      this.reservation.accommodationId = (params['id']);
      this.reservation.startDate = (params['start']);
        this.reservation.endDate=(params['end']);
          this.reservation.numGuests=(params['number']);
    });
  }

  TotalPrice() {
    this.reservationService.totalPrice(this.reservation.accommodationId.toString(),
      this.reservation.startDate,
      this.reservation.endDate,
      this.reservation.numGuests).subscribe(res => {
      this.totalPrice = res
      console.log(res)
    });
  }
}
