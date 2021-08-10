import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url: string = 'http://localhost:4000/dev/get-weather';
  kellyKey: string = '92706046'; 
  //&city_name=

  constructor(private http: HttpClient) {

    const headers = new Headers();

   }

  weatherCatch(cityName: string) {
    let headers = {'Content-Type':'application/json'}
    return this.http.get<any>(`${this.url}/${this.kellyKey}/${cityName}`)
      .toPromise();
  }
}