import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "src/app/material/material.module";
import {ReservationTableComponent} from "./reservation-table/reservation-table.component";
import {ReservationCreateComponent} from "./reservation-create/reservation-create.component";
import {NavbarComponent} from "../../../shared/navbar/components/navbar/navbar.component";
import {NavbarModule} from "../../../shared/navbar/navbar.module";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { ReservationHostComponent } from './reservation-host/reservation-host.component';
import {FooterModule} from "../../../shared/footer/footer.module";


const routes: Routes = [
  { path: 'reservations', component: ReservationTableComponent },
  { path: 'reservations/create', component: ReservationCreateComponent },
  {path : 'reservations/host', component: ReservationHostComponent}

];

@NgModule({
  declarations: [
    ReservationTableComponent,
    ReservationCreateComponent,
    ReservationHostComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NavbarModule,
    MatDatepickerModule,
    FooterModule
  ],
  exports: [RouterModule, ReservationTableComponent, ReservationCreateComponent]
})
export class ReservationModule { }
