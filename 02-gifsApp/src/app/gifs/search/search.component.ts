import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {


//le asigno !  -> non null asertion operator
  @ViewChild('txtSearch') txtSearch!:ElementRef<HTMLInputElement>;

 constructor(private GifsService: GifsService){
 }


search() {

const value = this.txtSearch.nativeElement.value;

if (value.trim().length== 0){
  return  ; 
}

this.GifsService.searchGifs(value)


this.txtSearch.nativeElement.value ='';
  



//en JS diríamos x ej
//document.querySelector('input').value = '';

}

}
