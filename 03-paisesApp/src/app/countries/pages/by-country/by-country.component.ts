import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries.interface';


@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

term:    string= '';
ifError: boolean =false;
countries: Country []= [];
countriesSuggested: Country[]=[];
showSuggestions: boolean= false;

  constructor(private CountriesService: CountriesService) { }

  //esto queda anticuado en v rxjs nueva

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

   sugestions(term:string){

    this.ifError= false;
    this.term =term;
    this.showSuggestions = true;
    

    this.CountriesService.searchCountry(term)
    .subscribe(countries=> this.countriesSuggested = countries.splice(0,5))
              //(ifError)=> this.countriesSuggested= [])

   }


   searchSuggested(term:string)
{
this.search(term); 

}
}
