import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from 'src/app/core/services/flights/flight.service';
import { FlightInterface } from 'src/app/interfaces/FlightInterface';



@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})

export class SearchFlightsComponent{

  dataSource!: MatTableDataSource<any[]>;
 bookedFlights = null;
 displayedColumns: string[]= ['departureStation', 'arrivalStation', 'departureDate', 'actions'];

 constructor(private flightService: FlightService,
              private route: ActivatedRoute) { }

 flightForm = new FormGroup({
   departureStation: new FormControl('', Validators.required),
   arrivalStation: new FormControl('', Validators.required),
   departureDate: new FormControl ('', Validators.required)   
 })

 onSubmit(){
   const form = this.flightForm.value;
   this.flightService.searchFlights(form.departureStation, form.arrivalStation, form.departureDate).subscribe((data: any) => {
      {
        this.bookedFlights = data
        this.dataSource = new MatTableDataSource(data);
        console.log(data);
      }        
   })
 }
 BookFlight(){

 }


}
