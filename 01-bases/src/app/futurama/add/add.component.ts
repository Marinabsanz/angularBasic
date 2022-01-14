import { Component, Input, Output, EventEmitter} from '@angular/core';

import { Personaje } from '../interfaces/futurama.interface';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',

})
export class AddComponent {
  

  @Output () onNewPerson: EventEmitter<Personaje> = new EventEmitter();
  
  @Input () newPerson: Personaje = {
    name:'',
    age: 0,
    
  }
  
  add() {

    if (this.newPerson.name.trim().length === 0)
     { return; }

  this.onNewPerson.emit(this.newPerson)

  this.newPerson= {
   name: '',
   age: 0


  }

}
}
