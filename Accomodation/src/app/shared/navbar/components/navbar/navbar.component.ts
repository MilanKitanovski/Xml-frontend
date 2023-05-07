import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/core/models/user';
import {HttpClient} from "@angular/common/http";


//import { AuthService } from 'src/app/core/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements  OnInit {

  //private authService: AuthService, u konstruktor
  constructor(
    private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {

    /* this.userSub = this.authService.user.subscribe(user =>{
       this.isLogged = !!user
       this.name = user.email
     }); */
    this.LoggedAdmin = 'user.Admin'
    this.name = 'user.email';
  }

//  private userSub: Subscription;
  isLogged: boolean = false
  isToggled: boolean= false
  name: string = ''
  LoggedAdmin: any;


  isLoggedHost():boolean{
    // if(this.LoggedAdmin!= name) return false
    return true;
  }
  isLoggedGuest():boolean{
    // if(this.LoggedAdmin!= name) return false
    return false;
  }
  ngOnDestroy(): void {
    //  this.userSub.unsubscribe();
  }

  onHome(){
    this.router.navigate(['/'])
  }

  onLogout(){
    //  this.authService.logout();
  }

  onToggle(){
    this.isToggled = !this.isToggled;
  }

}
