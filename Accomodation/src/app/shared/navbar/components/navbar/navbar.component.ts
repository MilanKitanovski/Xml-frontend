import {Component, Host, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../../../core/auth/services/auth.service";
import {User} from "../../../../core/auth/models/user";
import {Register} from "../../../../core/auth/models/register";

//import { AuthService } from 'src/app/core/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  //private authService: AuthService, u konstruktor
  constructor(
    private http: HttpClient,
    private router: Router) { }
  token = localStorage.getItem("token")

  ngOnInit(): void {

    /* this.userSub = this.authService.user.subscribe(user =>{
       this.isLogged = !!user
       this.name = user.email
     }); */
  //  this.User =
 //   this.name = 'user.email';
  }

//  private userSub: Subscription;
  isLogged: boolean = false
  isToggled: boolean= false
  name: string = ''
  User: any;


  isLoggedHost():boolean{
    // if(this.LoggedHost!= name) return false
    return false;
  }
  isLoggedGuest():boolean{
    // if(this.LoggedGuest!= name) return false
    return true;
  }
  ngOnDestroy(): void {
    //  this.userSub.unsubscribe();
  }

  onHome(){
    this.router.navigate(['/'])
  }

  profile(){
    this.router.navigate(['/profile'])
  }
  onLogout(){
    localStorage.clear();
  }

  onToggle(){
    this.isToggled = !this.isToggled;
  }

  ReservationsHost() {
    this.router.navigate(['/reservations/host/1'])

  }

  ReservationsGuest() {
    this.router.navigate(['/reservations/guest/1'])
  }

  Accommodations() {
    this.router.navigate(['/accommodations'])
  }

  AccommodationsHost() {

    this.router.navigate(['/accommodations/host'])
  }

  Add() {
    this.router.navigate(['/accommodations/create'])

  }
}

