import { Component, NgModule, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FlightService } from 'src/app/core/services/flights/flight.service';
import { FlightInterface } from '../../interfaces/FlightInterface';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})

export class FlightsComponent implements OnInit {

  dataSource: any= [];
  displayedColumns: string[]= ['departureStation', 'arrivalStation', 'departureDate', 'transport', 'price', 'currency'];

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.flightService.getFlights().subscribe((data:any) => {
      this.dataSource = new MatTableDataSource<FlightInterface>(data.result as FlightInterface[]);
      console.log(data);
    });
  }

}
