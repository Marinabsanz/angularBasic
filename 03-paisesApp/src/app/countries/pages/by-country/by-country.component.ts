import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

term:string= '';
ifError: boolean =false;

  constructor(private CountriesService: CountriesService) { }

  //esto queda anticuado en v rxjs nueva
   search() {
   this.ifError= false;
   this.CountriesService.searchCountry(this.term)
   .subscribe((countriesresp) => {

    console.log(countriesresp)
     
   },(countriesresp)=> { 
    this.ifError= true;
   });


   }

}
