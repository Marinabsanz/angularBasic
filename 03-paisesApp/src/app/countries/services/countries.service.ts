import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Country } from '../interfaces/countries.interface';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  



  constructor(private http: HttpClient) {   }


  searchCountry(term: string): Observable<any[]> {

    const url= `${this.apiUrl}/name/${term}`;
    return this.http.get<any[]>(url)
    
  }

  searchCapital(term: string): Observable<any[]> {

    const url= `${this.apiUrl}/capital/${term}`;
    return this.http.get<any[]>(url)
    
  }

  searchbyRegion(term: string): Observable<any[]> {

    const url= `${this.apiUrl}/region/${term}`;
    return this.http.get<any[]>(url)
    
  }



}
