import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent {

  @Output()onEnter: EventEmitter<string>= new EventEmitter();

  term: string = '';


  search(){
this.onEnter.emit(this.term)
  }


}

///Al dar click, se acciona función search, la cual dispara el evento onEnter
//Este onEnter en el html escucha al padre y dispara la función
