import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from 'src/app/core/services/flights/flight.service';


@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent{

 bookedFlights = null;

 constructor(private flightService: FlightService,
              private route: ActivatedRoute) { }

 flightForm = new FormGroup({
   departureStation: new FormControl('', Validators.required),
   arrivalStation: new FormControl('', Validators.required),
   departureDate: new FormControl ('', Validators.required)   
 })

 onSubmit(){
   console.log(this.flightForm.value);
   const form = this.flightForm.value;
   this.flightService.searchFlights(form.departureStation, form.arrivalStation, form.departureDate).subscribe((data:any) => {
      console.log(data);
      {this.bookedFlights = data}
   })
 }

}
