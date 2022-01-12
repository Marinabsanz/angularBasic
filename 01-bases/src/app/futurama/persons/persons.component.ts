import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/futurama.interface';


@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',

})
export class PersonsComponent  {


  @Input() persons: Personaje [] = [];


  
}
