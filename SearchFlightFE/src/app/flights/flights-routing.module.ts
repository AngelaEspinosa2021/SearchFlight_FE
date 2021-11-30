import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { SearchFlightsComponent } from './search-fligths/search-flights.component';

const routes: Routes = [
    {
      path: '',
      component: SearchFlightsComponent
    },
    {
      path: 'searchFlights',
      component: SearchFlightsComponent
    }
  ];

  @NgModule({
      imports: [
        RouterModule.forChild(routes),
      ],
      exports: [
        RouterModule
      ]
  })

  export class FlightsRoutingModule {}