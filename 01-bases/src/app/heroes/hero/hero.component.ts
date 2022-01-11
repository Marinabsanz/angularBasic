import { Component } from "@angular/core";





@Component( { 
selector: 'app-hero',
templateUrl: 'hero.component.html'
})

export class HeroComponent{

public name: string= 'Ironman';
public age:number= 45;


get nameCapitlized(): string{
    return this.name.toUpperCase();
}



getName(): string {

return ` ${this.name}:${this.age}`
};

changeName():void{

this.name= 'Spiderman';
}

changeAge():void {

    this.age = 30;
}

}

//equivalente:
//return this.nombre+'-'this.edad.toString()