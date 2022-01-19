import { Component} from '@angular/core';

import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';


@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent  {

 
term:    string= '';
ifError: boolean =false;
countries: Country []= [];


  constructor(private CountriesService: CountriesService) { }

 
  search(term:string) {

    this.ifError= false;
    this.term= term;
 
    this.CountriesService.searchCountry(this.term)
    .subscribe((countriesresp) => {
 
     this.countries = countriesresp;
   console.log(this.countries)
      
    },(err)=> { 
     this.ifError= true;
     this.countries  = [];
     
    });
 
    }

}
