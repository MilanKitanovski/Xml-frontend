import {Time} from "@angular/common";

export class Flight {
  id: number = 0;
  airportDestination : number = 0;
  airportDeparture : number = 0;
  departureTime :  string = '';
  duration : string = '';
  ticketPrice : number = 0;
  capacity : number = 0;

  public constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.airportDeparture = obj.airportDeparture;
      this.airportDestination = obj.airportDestination;
      this.duration = obj.duration;
      this.ticketPrice = obj.ticketPrice;
      this.capacity = obj.capacity;
      this.departureTime = obj.departureTime;
    }
  }
}
