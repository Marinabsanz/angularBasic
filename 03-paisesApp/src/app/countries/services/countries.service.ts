import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

import {tap} from 'rxjs/operators';

import { Country } from '../interfaces/countries.interface';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v2';
  




  constructor(private http: HttpClient) {   }


  searchCountry(term: string): Observable<Country[]> {

    const url= `${this.apiUrl}/name/${term}`;

    return this.http.get<Country[]>(url)
    
  }

  searchCapital(term: string): Observable<Country[]> {

    const url= `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url)
    
  }

  searchbyRegion(region: string): Observable<Country[]> {

    const url= `${this.apiUrl}/regionalbloc/${ region }`;
    return this.http.get<Country[]>(url)
    
  }


  getCountryDetails(id:string): Observable<Country[]>{
  
    const url= `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url)

  }

}
