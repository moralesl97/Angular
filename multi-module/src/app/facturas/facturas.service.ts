import { Injectable } from '@angular/core';
import { Factura } from '../models/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  facturas:Factura[] = [
    {id:1, fecha:'3/9/2021', cliente:3, monto:5000},
    {id:2, fecha:'5/9/2021', cliente:2, monto:100000},
    {id:3, fecha:'7/9/2021', cliente:1, monto:3560},
  ]

  constructor() { }

  obtenerFacturas():Factura[]{
    return this.facturas;
  }

  agregarFactura(factura:Factura){
    this.facturas.push(factura);
  }

  buscarFactura(id:number):Factura{
    let facturaEncontrada:Factura;

    this.facturas.forEach(f => {
        if(f.id == id){
          facturaEncontrada = f;
        }
    });
    return facturaEncontrada;
  }
}
