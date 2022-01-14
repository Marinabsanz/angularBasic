
import {Component, Input }from '@angular/core';

@Component({ 
selector: 'app-contador',
template: `

<h1>{{title}}</h1>

<h2> Acumulo o descuento multiplicando por el número <strong> {{base}} </strong></h2>

<button (click)= acumular(base)>+{{base}}</button>

<button (click)= 'acumular(-base)'>-{{base}}</button>

<span> {{number}} </span>

<!--haciéndolo modo js. Debajo+ limpio añadiendo métodos
     <button (click)= 'number=number+1;'> +1 </button>
<button (click)= 'number=number-1'>-1 </button>      -->
<!--         
<span> {{number}} </span>
<button (click)= sume()> +1</button>
<button (click)= resta()> -1</button>
 Le añadirçiamos en el archivo ts   en la clase, estas funciones
sume() {
  this.number+=1
}
 resta() {
 this.number+=-1
 }
 -->

`
})

export class ContadorComponent {

    public title:string = 'Contador App';
    public number: number = 0;
    public base: number = 2;
   
   
   acumular (valor:number) {
     this.number +=valor;
   }

}