import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "src/app/material/material.module";
import {NavbarComponent} from "../../../shared/navbar/components/navbar/navbar.component";
import {NavbarModule} from "../../../shared/navbar/navbar.module";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {AccommodationAllComponent} from "./accommodation-all/accommodation-all.component";
import {AccommodationCreateComponent} from "./accommodation-create/accommodation-create.component";
import {AccommodationViewComponent} from "./accommodation-view/accommodation-view.component";


const routes: Routes = [
  { path: 'accommodations', component: AccommodationAllComponent },
  { path: 'accommodation/create', component: AccommodationCreateComponent },
  {path : 'accommodation/:id', component: AccommodationViewComponent}

];

@NgModule({
  declarations: [
    AccommodationCreateComponent,
    AccommodationViewComponent,
    AccommodationAllComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NavbarModule,
    MatDatepickerModule
  ],
  exports: [RouterModule]
})
export class AccommodationModule { }
