import { Component, OnInit } from '@angular/core';
import {Reservation} from "../../../../core/models/reservation";
import {ReservationService} from "../../../../core/services/reservation.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ReservationDto} from "../../../../core/dtos/reservationDto";
import {AccommodationService} from "../../../../core/services/accommodation.service";
import {MatCalendarCellCssClasses, MatDatepicker} from "@angular/material/datepicker";

@Component({
  selector: 'app-reservation-create',
  templateUrl: './reservation-create.component.html',
  styleUrls: ['./reservation-create.component.css']
})
export class ReservationCreateComponent implements OnInit {
   public totalPrice: any;
   public picker: MatDatepicker<any> | undefined;
  public reservation: ReservationDto = new ReservationDto();
  public reservedDates: Date[] = [];
public reservedDateSliced: Date[] = [];
  minDate = new Date(2023, 5, 16);
  constructor(private accommodationService: AccommodationService, private route: ActivatedRoute,private  reservationService: ReservationService, private router: Router) {
   // this.reservation.accommodationId = '1';
  this.reservation.guestId = '1';
  this.reservation.accepted = false;
 }



  public createReservation(){
    if (!this.isValidInput()) return alert('invalid input');
    if (this.reservation.endDate < this.reservation.startDate ) return alert('Reservation end day must be after start');
    this.reservation.totalPrice = this.totalPrice;
    this.reservation.accepted = false;
    this.reservation.startDate = this.changeDate(this.reservation.startDate);
    this.reservation.endDate = this.changeDate(this.reservation.endDate);
    this.reservationService.createReservation(this.reservation).subscribe(res => {
    //  this.router.navigate(['/reservations']);
      alert("created pending reservation with id "+res.id+ " for " +res.numGuests +" guests!")
    });
  }


  nonAvailableDates: Date[] = [
    new Date('2023-06-27'),
    new Date('2023-06-26')
  ];

  disabled: boolean = false;

  dateFilters: (date: Date | null) => boolean = (date: Date | null) => {
    if (!date) return false; // early exit if date is null
    let excludedDates: Date[] = this.reservedDateSliced;
    const dateString = date.toDateString();
    return !excludedDates.some(excludedDate => excludedDate.toDateString() === dateString);
  }

  private isValidInput(): boolean {
    return this.reservation?.numGuests.toString() != ''
  }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.reservation.accommodationId = (params['id']);

      this.reservationService.notAvailableDates(params['id']).subscribe(res => {
        this.reservedDates = res;
        this.reservedDateSliced = this.reservedDates.map(date =>new Date(date))
        console.log(this.reservedDateSliced);
      });
    });

  }
  changeDate(element : any): string {
    const outputDate = new Date(
      element.getTime() -
      element.getTimezoneOffset() * 60 * 1000 +
      10 * 60 * 60 * 1000 +
      30 * 60 * 1000
    );
    const formattedDate = outputDate.toISOString().slice(0, 19);
    return formattedDate.toString();
  }

  TotalPrice() {
    this.reservationService.totalPrice(this.reservation.accommodationId.toString(),
      this.changeDate(this.reservation.startDate),
      this.changeDate(this.reservation.endDate),
      this.reservation.numGuests).subscribe(res => {
    this.totalPrice = res
      console.log(res)
      });
  }
}
