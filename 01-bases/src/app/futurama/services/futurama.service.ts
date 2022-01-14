import { Injectable } from "@angular/core";

import { Personaje } from '../interfaces/futurama.interface';

@Injectable()
export class FuturamaService{
private _persons: Personaje []= [ { 
    name: 'Fry',
    age: 30,
  },

  { name: 'Lila',
  age: 29,
  },
  ];

    get persons(): Personaje[] {
        return [...this._persons];
    }
constructor () {}

addPerson(personaje:Personaje){
    this._persons.push(personaje);

}



}

