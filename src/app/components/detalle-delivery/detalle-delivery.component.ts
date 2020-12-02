import { Component, Input, OnInit } from '@angular/core';
import { Pedido } from 'src/app/clases/pedido';

@Component({
  selector: 'app-detalle-delivery',
  templateUrl: './detalle-delivery.component.html',
  styleUrls: ['./detalle-delivery.component.scss'],
})
export class DetalleDeliveryComponent implements OnInit {

  @Input() delivery: Pedido;

  constructor() { }

  ngOnInit() {}

}
