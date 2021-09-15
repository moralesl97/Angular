import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../classes/producto';

@Component({
  selector: 'app-matematico-result',
  templateUrl: './matematico-result.component.html',
  styleUrls: ['./matematico-result.component.css']
})
export class MatematicoResultComponent implements OnInit {

  constructor() { }

  @Input() resultadoAMostrar: number;
  producto = new Producto();

  ngOnInit(): void {
  }

}
