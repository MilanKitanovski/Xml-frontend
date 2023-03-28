import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
 selectedIndex: number = 0;

  constructor() {}

    ngOnInit(): void {}
  /*
    handleNext(): void {
    //  if (this.feedbacks.length > this.selectedIndex + 1) {
    //    this.selectedIndex = this.selectedIndex + 1;
    }
    }

   /* handleBack(): void {
      if (this.selectedIndex > 0) {
        this.selectedIndex = this.selectedIndex - 1;
      }
    }*/
}
