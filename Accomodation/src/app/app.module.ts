import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";
import { HospitalModule } from "./modules/hospital/hospital.module";
import { PagesModule } from "./modules/pages/pages.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReservationModule} from "./modules/components/reservation/reservation.module";
import {AccommodationModule} from "./modules/components/accommodation/accommodation.module";
import { FooterComponent } from './shared/footer/footer.component';
import { SearchComponent } from './modules/components/search/search.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MaterialModule,
        PagesModule,
        HospitalModule,
        ReservationModule,
        AccommodationModule,
        FormsModule
    ],
    providers: [],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
