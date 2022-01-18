import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {


private apiKey: string = '6RSpIq9Qp5iiCEUwO5v0jYmbOA78ftZn'
private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
private _historic: string [] = [];

public results: Gif[]= [];

get historic() {
  
return [...this._historic]
}

constructor(private http: HttpClient ) {

  this._historic = JSON.parse(localStorage.getItem('historic')!) || [];
  this.results = JSON.parse(localStorage.getItem('results')!) || [];
 //otra opción
 //if (localStorage.getItem('historic')) {
 //this._historic = JSON.parse(localStorage.getItem('historic')!) ;}

}

searchGifs(query: string= ''){

query = query.trim().toLowerCase();

 //evitar repeticiones en la búsqueda
  if (!this._historic.includes(query)){
    this._historic.unshift(query);
    this._historic= this._historic.splice(0,10);

   localStorage.setItem('historic', JSON.stringify(this._historic));

}

const params = new HttpParams()
.set('api_key', this.apiKey)
.set('limit', '10')
.set('q', query );


this.http.get<SearchGifsResponse>(`${ this.serviceUrl }/search`, { params } )
.subscribe( (response) => {
this.results = response.data;
localStorage.setItem('results', JSON.stringify(this.results))


});


}

}


//MODO JS puro con fetch
//fetch ('https://api.giphy.com/v1/gifs/search?api_key=6RSpIq9Qp5iiCEUwO5v0jYmbOA78ftZn&q=harry potter')
//.then (resp => {
//resp.json().then(data=>{
// console.log(data); }) })