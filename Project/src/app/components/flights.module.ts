import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "src/app/material/material.module";

import { FlightsViewComponent } from './flights-view/flights-view.component';
import { FlightInfoComponent } from './flight-info/flight-info.component';

const routes: Routes = [
  { path: 'flights', component: FlightsViewComponent },
 // { path: 'flights/add', component: CreateRoomComponent },
  { path: 'flights/:id', component: FlightInfoComponent },
];

@NgModule({
  declarations: [
    FlightsViewComponent,
    FlightInfoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class FlightsModule { }
