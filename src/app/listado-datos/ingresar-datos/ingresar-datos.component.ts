import { Component } from '@angular/core';

@Component({
  selector: 'app-ingresar-datos',
  templateUrl: './ingresar-datos.component.html',
  styleUrls: ['./ingresar-datos.component.css']
})
export class IngresarDatosComponent {
  // Creamos la variable que contendra los datos
  // datos!:String[];
  datos = ['Angular'];

  //creamos la funcion que almacenara los datos ingresado 
  addData(txtdato:String){
    this.datos.push(String(txtdato));
  }
}
