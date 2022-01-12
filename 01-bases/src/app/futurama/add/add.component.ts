import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/futurama.interface';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',

})
export class AddComponent {
  
  @Input() persons: Personaje[]= []; 

  @Input ()newPerson: Personaje = {
    name:'',
    age: 0,
    
  }
  
  add() {

    if (this.newPerson.name.trim().length === 0)
     { return; }

  console.log(this.newPerson);


  this.persons.push(this.newPerson);
  this.newPerson= {
   name: '',
   age: 0


  }

}
}
