import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightService } from './services/flights/flight.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    FlightService
  ]
})
export class CoreModule { }
