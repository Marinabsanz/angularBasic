import { Component, OnInit } from '@angular/core';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/countries.interface';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-watch-country',
  templateUrl: './watch-country.component.html',
  styles: [
  ]
})
export class WatchCountryComponent implements OnInit {

country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private CountriesService: CountriesService
       
    ) { }

  ngOnInit(): void {
     
  this.activatedRoute.params
  .pipe (
    switchMap( ({ id } ) => this.CountriesService.getCountryDetails (id) ),
  tap (console.log)
  )
 .subscribe (country => this.country = country );
  

  }

}
