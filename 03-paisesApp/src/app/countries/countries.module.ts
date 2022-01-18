import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalComponent } from './by-capital/by-capital.component';
import { ByCountryComponent } from './by-country/by-country.component';
import { ByRegionComponent } from './by-region/by-region.component';
import { WatchCountryComponent } from './watch-country/watch-country.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    WatchCountryComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    WatchCountryComponent,
    NotFoundComponent

  ]
})
export class CountriesModule { }
