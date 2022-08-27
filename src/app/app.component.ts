import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'programa-angular';
  datos: Array<any>;
  datosMenorFechaInicial: Array<any>;
  tipo: string = 'cerrado';
  movimiento1: Array<any>;
  movimiento2:Array<any>;
  sumaMov1Entrada: number = 0;
  sumaMov2Salidas: number = 0;
  existInicial : number = 0;
  existFinal : number = 0;

  constructor(){
    this.datos = [
      {articulo:1 , fecha: '2021-02-10', mov: 1, cantidad:120},
      {articulo:2 , fecha: '2021-04-12', mov: 2, cantidad:100},
      {articulo:3 , fecha: '2021-02-13', mov: 1, cantidad:130},
      {articulo:4 , fecha: '2021-03-14', mov: 2, cantidad:40},
      {articulo:5 , fecha: '2021-10-15', mov: 1, cantidad:150},
      {articulo:6 , fecha: '2021-07-16', mov: 2, cantidad:60},
      {articulo:7 , fecha: '2021-08-20', mov: 2, cantidad:70},
    ];
    this.datosMenorFechaInicial = this.datos.filter(fecha => fecha.fecha < '2021-05-05');
    this.movimiento1 = this.datosMenorFechaInicial.filter(mov => mov.mov === 1);
    this.movimiento2 = this.datosMenorFechaInicial.filter(mov => mov.mov === 2);

  }
  ngOnInit(): void {
  }
  ver(){

  }
  SendDataonChangeFinal(event: any){

  }
  SendDataonChangeInicial(event: any){
    this.movimiento1.forEach(element => {
      this.sumaMov1Entrada += element.cantidad;
    });
 
    this.movimiento2.forEach(element =>{
     this.sumaMov2Salidas += element.cantidad;
    });
 
    //this.datosMenorFechaInicial.forEach(element =>{
      this.existInicial = this.sumaMov1Entrada - this.sumaMov2Salidas;
      this.existFinal = this.existInicial + this.sumaMov1Entrada - this.sumaMov2Salidas;
    //});    
  }
}
