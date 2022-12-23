import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloComponent } from './titulo/titulo.component';
import { IngresarDatosComponent } from './ingresar-datos/ingresar-datos.component';
import { MostrarDatosComponent } from './mostrar-datos/mostrar-datos.component';



@NgModule({
  declarations: [
    TituloComponent,
    IngresarDatosComponent,
    MostrarDatosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TituloComponent,
    IngresarDatosComponent,
    MostrarDatosComponent
  ]
})
export class ListadoDatosModule { }
