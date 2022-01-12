import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component} from '@angular/core';

interface Personaje {

  name:string;
  age:number;
}

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
  ]

  newPerson: Personaje = {
    name:'',
    age: 0,
    
  }
  
  add() {

    if (this.newPerson.name.trim().length === 0)
     { return; }

  console.log(this.newPerson)
  }

}

