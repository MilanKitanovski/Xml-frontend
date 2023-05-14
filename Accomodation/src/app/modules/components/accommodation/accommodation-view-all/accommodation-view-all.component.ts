import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Reservation} from "../../../../core/models/reservation";
import {ReservationService} from "../../../../core/services/reservation.service";
import {Router} from "@angular/router";
import {Accommodation} from "../../../../core/models/accommodation";
import {AccommodationService} from "../../../../core/services/accommodation.service";
import {observable} from "rxjs";
import {User} from "../../../../core/auth/models/user";

var observable1 = observable;

@Component({
  selector: 'app-accommodation-view-all',
  templateUrl: './accommodation-view-all.component.html',
  styleUrls: ['./accommodation-view-all.component.scss']
})
export class AccommodationViewAllComponent implements OnInit {

  user: User | null = null;
  errorMessage = '';
  image:string = '';

  path: string = "url('src/assets/images/" + this.image + ");";
public accommodations: Accommodation[] = [];

  public dataSource = new MatTableDataSource<Accommodation>();
  accommodation: Accommodation | undefined;

  constructor(private accommodationService: AccommodationService, private router: Router) { }

  ngOnInit(): void {
    this.accommodationService.getAll().subscribe(res => {
      this.accommodations = res;
      let firstAcommodation = new Accommodation();
      this.accommodations.push(firstAcommodation);
      this.dataSource.data = this.accommodations;
      /* this.user = this.authService.getUser();
    this.getUserSubscription = this.authService.getUserObservable().subscribe({
      next: (result) => {
        this.user = result
      }
    })*/
    })
  }

  chooseAccommodation(id: string) {

    this.router.navigate(['/accommodation/', id]);
  }
}
