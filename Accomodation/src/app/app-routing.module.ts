import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/pages/home/home.component";
import {LogInComponent} from "./modules/pages/log-in/log-in.component";
import {RegisterComponent} from "./modules/pages/register/register.component";
import {UserProfileComponent} from "./modules/components/user-profile/user-profile.component";
import {AuthGuardGuard} from "./shared/auth-guard.guard";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'user-profile', component: UserProfileComponent, canActivate:[AuthGuardGuard], data: {role: ['HOST', 'GUEST']}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
