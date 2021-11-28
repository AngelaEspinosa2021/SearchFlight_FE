import { Component, NgModule, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})

@NgModule({
  imports: [
    SharedModule
  ]
})

export class FlightsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
