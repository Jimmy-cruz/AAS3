import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoDatosModule } from './listado-datos/listado-datos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ListadoDatosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
