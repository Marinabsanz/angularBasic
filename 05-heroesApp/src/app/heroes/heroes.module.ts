import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



//Propios 
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { HeroesRoutingModule } from './heroes-routing.module';

//Angular Material
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    HeroComponent,
    HomeComponent,
    ListComponent,
    
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
