import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { FuturamaModule } from './futurama/futurama.module';

@NgModule({
  declarations: [
    AppComponent,
    
   
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    FuturamaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
