import { Component, OnInit } from '@angular/core';
import { Operacion } from '../../classes/operacion';

@Component({
  selector: 'app-matematico',
  templateUrl: './matematico.component.html',
  styleUrls: ['./matematico.component.css']
})
export class MatematicoComponent implements OnInit {

  numero1:number;
  numero2:number;
  total:number;
  operacion:string="sum";
  operaciones:Operacion[] = [{nombre:"Suma", valor:"sum"}, {nombre:"Resta", valor:"res"}, {nombre:"Multiplicacion", valor:"mult"}, {nombre:"Division", valor:"div"}]

  constructor() { }

  ngOnInit(): void {
  }

  calcularResultado(){
    if(this.numero1 != undefined && this.numero2 != undefined)
    { 
      switch(this.operacion){
        case "sum":
          this.total = this.numero1 + this.numero2;
          break;
        case "res":
          this.total = this.numero1 - this.numero2;
          break;
        case "mult":
          this.total = this.numero1 * this.numero2;
          break;
        case "div":
          this.total = this.numero1 / this.numero2;
          break;
      }
    }
}

}
