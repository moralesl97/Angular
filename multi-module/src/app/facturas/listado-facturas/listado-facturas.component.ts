import { Component, OnInit } from '@angular/core';
import { FacturasService } from '../facturas.service';
import { Factura } from '../../models/factura';

@Component({
  selector: 'app-listado-facturas',
  templateUrl: './listado-facturas.component.html',
  styleUrls: ['./listado-facturas.component.css']
})
export class ListadoFacturasComponent implements OnInit {

  constructor(private facturasService:FacturasService) { }

  facturas:Factura[] = [];
  nuevaFactura:Factura = new Factura();
  idFactura:number;
  facturaEncontrada:Factura;

  ngOnInit(): void {
    this.facturas = this.facturasService.obtenerFacturas();
  }

  agregarFactura(){
    this.facturasService.agregarFactura(this.nuevaFactura);
    this.nuevaFactura = new Factura();
  }

  buscarFactura(){
    console.log(this.facturasService.buscarFactura(this.idFactura));
    this.facturaEncontrada = this.facturasService.buscarFactura(this.idFactura);
  }


}
