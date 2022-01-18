import { Component, NgModule } from "@angular/core"; 
import { RouterModule, Routes } from "@angular/router";
import { ByCountryComponent } from './countries/by-country/by-country.component';
import { ByRegionComponent } from './countries/by-region/by-region.component';
import { ByCapitalComponent } from './countries/by-capital/by-capital.component';
import { WatchCountryComponent } from './countries/watch-country/watch-country.component';
//import { NotFoundComponent } from './countries/not-found/not-found.component';



const routes: Routes = [
{
    path:'',
    component: ByCountryComponent,
    pathMatch: 'full'
},

{
    path:'region',
    component: ByRegionComponent,
},
{
    path:'capital',
    component: ByCapitalComponent
},
{
    path: 'pais/:id',
    component: WatchCountryComponent
},
{
    path: '**',
    redirectTo: ''
   
}

];

@NgModule({

 imports:[
     RouterModule.forRoot(routes)

 ],

 exports:[
     RouterModule

 ]


})
export class AppRoutingModule{  }