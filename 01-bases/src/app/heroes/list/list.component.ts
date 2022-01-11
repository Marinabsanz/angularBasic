import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',

})
export class ListComponent  {


public heroes: string []= [ 'Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
public heroDeleted:string = '';



deleteHero() {

this.heroDeleted= this.heroes.shift() || '';

  }
}


