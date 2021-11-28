import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightsComponent } from './flights/flights.component';
import { FlightService } from '../core/services/flights/flight.service';
import { FlightsRoutingModule } from './flights-routing.module';



@NgModule({
  declarations: [
    FlightsComponent
  ],
  imports: [
    CommonModule,
    FlightsRoutingModule   
  ],
  exports: [
    FlightsComponent
  ]
})
export class FlightsModule { }
