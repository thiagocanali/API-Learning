import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url: string = 'http://localhost:4000/dev/get-weather';
  kellyKey: string = '92706046'; 

  constructor(private http: HttpClient) { }

  weatherCatch(cityName: string) {
    return this.http.get<any>(`${this.url}/${this.kellyKey}/${cityName}`)
      .toPromise();
  }
}