import { Component, OnInit } from '@angular/core';
import {ReservationDto} from "../../../../core/dtos/reservationDto";
import {ReservationService} from "../../../../core/services/reservation.service";
import {Router} from "@angular/router";
import {AccommodationDto} from "../../../../core/dtos/accommodationDto";
import {AccommodationService} from "../../../../core/services/accommodation.service";

@Component({
  selector: 'app-accommodation-create',
  templateUrl: './accommodation-create.component.html',
  styleUrls: ['./accommodation-create.component.css']
})
export class AccommodationCreateComponent implements OnInit {


  public accommodation: AccommodationDto = new AccommodationDto();
  constructor(private  accommodationService: AccommodationService, private router: Router) {
    this.accommodation.hostId = 1;}

  public createAccommodation(){
    this.accommodationService.create(this.accommodation).subscribe({
        next: res => {
          console.log(res);
          alert("created accommodation with id "+res.id)

        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  private isValidInput(): boolean {

  return true;}
  ngOnInit(): void {
  }

}
