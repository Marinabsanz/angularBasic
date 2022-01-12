
import { Component} from '@angular/core';
import { Personaje } from '../interfaces/futurama.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  persons: Personaje []= [ { 
    name: 'Fry',
    age: 30,
  },

  { name: 'Lila',
  age: 29,

  },
  ];

  newPerson: Personaje = {

    name: 'Zoidberg',
    age: 50,
  }
}