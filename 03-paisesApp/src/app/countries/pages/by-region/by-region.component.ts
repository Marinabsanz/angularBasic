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

 
regions: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC']
regionActive: string= '';
countries: Country[]=[];

  constructor(private CountriesService: CountriesService) {}
  

 activeRegion(region:string) {

   if (region === this.regionActive){ return;}
   this.regionActive= region;
   this.countries=[];


   this.CountriesService.searchbyRegion(region)
   .subscribe(countries => ( 
   this.countries = countries)

   )
 } 


  }