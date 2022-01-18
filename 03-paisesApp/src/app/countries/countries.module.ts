import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalComponent } from './by-capital/by-capital.component';
import { ByCountryComponent } from './by-country/by-country.component';
import { ByRegionComponent } from './by-region/by-region.component';
import { WatchCountryComponent } from './watch-country/watch-country.component';



@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    WatchCountryComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    WatchCountryComponent

  ]
})
export class CountriesModule { }
