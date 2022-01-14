import { Component, Input, Output, EventEmitter} from '@angular/core';

import { Personaje } from '../interfaces/futurama.interface';
import { FuturamaService } from '../services/futurama.service';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',

})
export class AddComponent {
  

  //@Output () onNewPerson: EventEmitter<Personaje> = new EventEmitter();
  
  @Input () newPerson: Personaje = {
    name:'',
    age: 0,
    
  }
  
constructor(private FuturamaService: FuturamaService){}

  add() {

    if (this.newPerson.name.trim().length === 0)
     { return; }

  //this.onNewPerson.emit(this.newPerson)
  this.FuturamaService.addPerson(this.newPerson);

  this.newPerson= {
   name: '',
   age: 0


  }

}
}
