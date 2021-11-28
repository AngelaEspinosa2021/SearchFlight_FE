import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  baserUrl: string = 'https://localhost:44365/api/Flights';

  constructor(private http: HttpClient) { }

  getFlights(){
    return this.http.get(this.baserUrl);
  }
}
