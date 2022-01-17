import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {


private apiKey: string = '6RSpIq9Qp5iiCEUwO5v0jYmbOA78ftZn'
private _historic: string [] = [];

public results: Gif[]= [];



get historic() {

return [...this._historic]
}

constructor(private http: HttpClient){
}

searchGifs(query: string= ''){

query = query.trim().toLowerCase();

 //evitar repeticiones en la búsqueda
  if (!this._historic.includes(query)){
    this._historic.unshift(query);
    this._historic= this._historic.splice(0,10);
}

this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=6RSpIq9Qp5iiCEUwO5v0jYmbOA78ftZn&q=~${ query }&limit=10` )
.subscribe( (response) => {

console.log( response.data )
this.results = response.data;


});


}

}


//MODO JS puro con fetch
//fetch ('https://api.giphy.com/v1/gifs/search?api_key=6RSpIq9Qp5iiCEUwO5v0jYmbOA78ftZn&q=harry potter')
//.then (resp => {
//resp.json().then(data=>{
// console.log(data); }) })