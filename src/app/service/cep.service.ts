import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  url: string = 'http://localhost:4000/dev/get-cep';

  constructor(private http: HttpClient) { }

  getCep(cep: string) {
    return this.http.get<any>(`${this.url}/${cep}`)
      .toPromise();
  }

}

