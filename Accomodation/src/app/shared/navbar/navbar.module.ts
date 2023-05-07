import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarButtonComponent } from './components/navbar-button/navbar-button.component';
import { MaterialModule } from '../material/material.module';
import {RouterLinkActive} from "@angular/router";



@NgModule({
  declarations: [
    NavbarComponent,
    NavbarButtonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterLinkActive
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
