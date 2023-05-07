import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { AccommodationHomepageComponent } from './home/accommodation-homepage/accommodation-homepage.component';
import { OurServicesComponent } from './home/our-services/our-services.component';
import {FooterModule} from "../../shared/footer/footer.module";
@NgModule({
  declarations: [
    HomeComponent,
    LogInComponent,
    RegisterComponent,
    CarouselComponent,
    AccommodationHomepageComponent,
    OurServicesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FooterModule
  ]
})
export class PagesModule { }
