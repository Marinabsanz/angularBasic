import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { HeroesModule } from './heroes/heroes.module';

const routes: Routes = [
  {
    path: '404',
    component: ErrorPageComponent,
  },
 
  { 
    path:'auth',
    loadChildren:()=> import('./auth/auth.module').then(module => module.AuthModule)


  },
  { 
    path:'heroes',
    loadChildren:()=> import('./heroes/heroes.module').then(module => module.HeroesModule)


  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
