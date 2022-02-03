import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = 'marina benitez';
  age: number= 33;
  obj={
    name: 'marina'
  }


showName() {
  console.log(this.name);
  console.log(this.age);
  console.log(this.obj);
}



}