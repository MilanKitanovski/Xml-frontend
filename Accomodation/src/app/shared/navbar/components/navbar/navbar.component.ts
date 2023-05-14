import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../../../core/auth/services/auth.service";
import {User} from "../../../../core/auth/models/user";


//import { AuthService } from 'src/app/core/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements  OnInit {

  getUserSubscription = new Subscription();
  user: User | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.getUserSubscription.unsubscribe()
  }

  ngOnInit() {
  /*  this.user = this.authService.getUser();
    this.getUserSubscription = this.authService.getUserObservable().subscribe({
      next: (result) => {
        this.user = result
      }
    }) */
  }

  login() {
    this.router.navigate(['/login'])
  }

  logout() {
    this.authService.logout()
  }

  goToHomePage() {
    this.router.navigate([''])
  }

  goToAccountsPage() {
    this.router.navigate(['/accounts'])
  }
  goToAccommodationsPage() {
    this.router.navigate(['/accommodations'])
  }


  goToMyAccommodationsPageHost() {
    this.router.navigate(['/accommodations/host'])
  }

  goToReservationsPageHost() {
    this.router.navigate(['/reservations/host'])
  }
  goToReservationsPageGuest() {
    this.router.navigate(['/reservations/guest'])
  }
  goToAccommodationsCreateHost(){
    this.router.navigate(['/accommodations/create'])
  }

  loggedHost() {
    return true;
  }

  loggedGuest() {
    return false;
  }
}
