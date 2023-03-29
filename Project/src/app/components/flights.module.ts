import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "src/app/material/material.module";
import { FlightsViewComponent } from './flights-view/flights-view.component';
import { FlightInfoComponent } from './flight-info/flight-info.component';
import { FlightCreateComponent } from './flight-create/flight-create.component';
import { FlightsUserComponent } from './flights-user/flights-user.component';
import { TicketsViewComponent } from './tickets-view/tickets-view.component';

const routes: Routes = [
  { path: 'flights', component: FlightsViewComponent },
  { path: 'flights/add', component: FlightCreateComponent },
  { path: 'flights/:id', component: FlightInfoComponent },
  { path: 'flights/user/:userId', component: FlightsUserComponent},
  { path: 'tickets/:userId', component: TicketsViewComponent},
];

@NgModule({
  declarations: [
    FlightsViewComponent,
    FlightInfoComponent,
    FlightCreateComponent,
    FlightsUserComponent,
    TicketsViewComponent,
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
