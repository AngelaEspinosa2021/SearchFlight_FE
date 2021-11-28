import { Component, NgModule, OnInit } from '@angular/core';
import { FlightService } from 'src/app/core/services/flights/flight.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})

export class FlightsComponent implements OnInit {

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
  }

}
