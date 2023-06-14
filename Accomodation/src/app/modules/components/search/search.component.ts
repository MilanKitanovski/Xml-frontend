import { Component, OnInit } from '@angular/core';
import { AccommodationService } from 'src/app/core/services/accommodation.service'
import {Accommodation} from "../../../core/models/accommodation";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  guestNum: number = 0;
  location: number = 0;
  startDate: string = '';
  endDate: string = '';
  totalPrice: number = 0;

  searchedAccommodations: Accommodation[] = [];
  accommodationTotalPrices: { [accommodationId: string]: number } = {};

  constructor(private accommodationService: AccommodationService, private router: Router) { }

  searchAccommodations(): void {
    this.accommodationService.search(this.guestNum, this.location, this.startDate, this.endDate)
      .subscribe((accommodations: Accommodation[]) => {
        this.searchedAccommodations = accommodations;
      //  this.calculateTotalPrice();
      });
  }
  chooseAccommodation(id: string) {

    this.router.navigate(['/accommodation/', id]);
  }

  // calculateTotalPrice(): void {
  //   this.searchedAccommodations.forEach((accommodation: Accommodation) => {
  //     this.accommodationService.getTotalPrice(accommodation.id, this.guestNum, this.startDate, this.endDate)
  //       .subscribe((totalPrice: number) => {
  //         this.accommodationTotalPrices[accommodation.id] = totalPrice;
  //       });
  //   });
  // }


}


