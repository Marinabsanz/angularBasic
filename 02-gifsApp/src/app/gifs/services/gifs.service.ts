import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

private _historic: string [] = [];


get historic() {

return [...this._historic]
}
searchGifs(query: string= ''){

query = query.trim().toLowerCase();

 //evitar repeticiones en la búsqueda
  if (!this._historic.includes(query)){
    this._historic.unshift(query);
  }  
  this._historic= this._historic.splice(0,10);

  console.log(this._historic)
}

}


