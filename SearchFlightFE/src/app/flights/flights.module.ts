import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FlightsComponent } from './flights/flights.component';
import { SearchFlightsComponent } from './search-fligths/search-flights.component';

import { FlightsRoutingModule } from './flights-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    FlightsComponent,
    SearchFlightsComponent
  ],
  imports: [
    CommonModule,
    FlightsRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]  
})

export class FlightsModule { }
