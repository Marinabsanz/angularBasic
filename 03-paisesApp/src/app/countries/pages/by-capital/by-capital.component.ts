import { Component } from '@angular/core';

import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';
@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent  {

  term: string= '';
  ifError: boolean= false;
  countries: Country[]=[];


  constructor(private CountriesService: CountriesService) { }


  search(term:string) {

    this.ifError= false;
    this.term= term;
 
    this.CountriesService.searchCapital(this.term)
    .subscribe((countriesresp) => {
 
     this.countries = countriesresp;

      
    },(err)=> { 
     this.ifError= true;
     this.countries  = [];
     
    });
 
    }
 
}
