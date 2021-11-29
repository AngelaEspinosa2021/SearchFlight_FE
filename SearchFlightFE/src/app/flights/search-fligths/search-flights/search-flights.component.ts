import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent{

  constructor() { }

 fligthForm = new FormGroup({
   departureStation: new FormControl('', Validators.required),
   arrivalStation: new FormControl('', Validators.required),
   departureDate: new FormControl ('', Validators.required)   
 })

 onSubmit(){
   console.log(this.fligthForm.value);
 }

}
