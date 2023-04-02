import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
import decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate{

  constructor(private auth: AuthService,
              private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const expectedRole = route.data['expectedRole'];
    const token = localStorage.getItem("token")
    if (typeof token === "string") {
      const tokenPayload : any = decode(token);
      if(!this.auth.isAuthenticated() || tokenPayload.role !== expectedRole){
        this.router.navigate(["login"]);
        return false;
      }else{
        return true;
      }
    }
    this.router.navigate(["login"]);
    return false;
  }
}
