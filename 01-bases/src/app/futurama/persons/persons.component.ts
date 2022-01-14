import { Component, Input} from '@angular/core';

import { FuturamaService } from '../services/futurama.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',

})
export class PersonsComponent  {


  //@Input() persons: Personaje [] = [];
 
  get persons(){
    return this.FuturamaService.persons;
  }

  constructor (private FuturamaService: FuturamaService)
   {
this.FuturamaService

   }

}
