
import { Component} from '@angular/core';
import { Personaje } from '../interfaces/futurama.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  newPerson: Personaje = {
    name: 'Zoidberg',
    age: 50,
  }
    
constructor (){}

}