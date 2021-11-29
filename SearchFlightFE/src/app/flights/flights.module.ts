import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightsComponent } from './flights/flights.component';
import { FlightService } from '../core/services/flights/flight.service';
import { FlightsRoutingModule } from './flights-routing.module';
import { MaterialModule } from '../material/material.module';
import { SearchFlightsComponent } from './search-fligths/search-flights/search-flights.component';



@NgModule({
  declarations: [
    FlightsComponent,
    SearchFlightsComponent
  ],
  imports: [
    CommonModule,
    FlightsRoutingModule,
    MaterialModule   
  ],
  exports: [
    FlightsComponent
  ]
})
export class FlightsModule { }
