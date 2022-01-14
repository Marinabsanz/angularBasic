import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MainPageComponent } from './main-page/main-page.component';
import { PersonsComponent } from './persons/persons.component';
import { AddComponent } from './add/add.component';
import { FuturamaService } from './services/futurama.service';



@NgModule({
  declarations: [  

    MainPageComponent, PersonsComponent, AddComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],

  providers: [
   FuturamaService
  ],

  exports: [
    MainPageComponent
  ]
})
export class FuturamaModule { }
