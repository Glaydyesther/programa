import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'programa-angular';
  datos: Array<any>;
  fechaInicial: any;
  info: any;
  art: any;
  existInit:any;
  entrada:any;
  salida: any;
  existFinal: any;

  tipo: string = 'cerrado';
 

  constructor(){
    this.datos = [
      {articulo:1 , fecha: '2021-02-10', mov: 1, cantidad:20},
      {articulo:2 , fecha: '2021-04-12', mov: 2, cantidad:100},
      {articulo:3 , fecha: '2021-02-13', mov: 1, cantidad:30},
      {articulo:4 , fecha: '2021-03-14', mov: 2, cantidad:40},
      {articulo:5 , fecha: '2021-10-15', mov: 1, cantidad:50},
      {articulo:6 , fecha: '2021-07-16', mov: 2, cantidad:60},
      {articulo:7 , fecha: '2021-08-20', mov: 2, cantidad:70},
    ];
 
  }
  ngOnInit(): void {
      this.ver(); 
  }
  ver(){
    this.datos.forEach(element => {
      if('2021-05-05' > element.fecha){
      this.art = element.articulo;
      this.existInit=element.cantidad - element.cantidad;     
      }
     
      
    });
  }
  SendDataonChangeFinal(event: any){
    
   


  }
  SendDataonChangeInicial(event: any){
   this.fechaInicial = event.target.value;    
    console.log(this.fechaInicial);
    this.datos.forEach(element => {
      if('2021-05-05' > element.fecha){
      }
     
      
    });
   
    
  }
}
