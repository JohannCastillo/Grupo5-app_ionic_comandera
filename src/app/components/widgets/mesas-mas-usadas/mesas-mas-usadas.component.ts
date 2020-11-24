import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Mesa } from 'src/app/clases/mesa';
import { Pedido } from 'src/app/clases/pedido';
import { MesaService } from 'src/app/services/mesa.service';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-mesas-mas-usadas',
  templateUrl: './mesas-mas-usadas.component.html',
  styleUrls: ['./mesas-mas-usadas.component.scss'],
})
export class MesasMasUsadasComponent implements OnInit
{
  public highchart;
  public data: any[];
  public chart;
  public updateFromInput = false;
  public Highcharts = Highcharts;
  public chartConstructor = 'chart';
  public chartOptions;
  public chartCallback;
  public pedidos: Pedido[];

  constructor() { }

  ngOnInit() 
  {
    this.pedidos = PedidoService.pedidos;
    this.procesarDatos();
    this.crearGrafico();
  }

  procesarDatos()
  {
    let auxiliar;
    let mesas: Map<number, number> = new Map<number, number>();

    this.pedidos.forEach(pedido => 
    {
      if (!mesas.has(pedido.mesa.numero))
      {
        mesas.set(pedido.mesa.numero, 1);
      }
      else
      {
        mesas.set(pedido.mesa.numero, mesas.get(pedido.mesa.numero) + 1);
      }
    });

    console.log(mesas);
  }

  crearGrafico()
  {


    this.chartCallback = (chart) =>
    {
      setTimeout(() =>
      {
        chart.reflow();
        this.chartOptions = {
          chart: {
            type: 'column',
          },
          title: {
            text: 'Fruit Consumption'
          },
          xAxis: {
            categories: [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12]
          },
          yAxis: {
            title: {
              text: 'Fruit eaten'
            }
          },
          series: [{
            name: 'Jane',
            data: [1, 0, 4, 1, 2, 3, 6, 7, 8, 4, 1, 6]
          }, {
            name: 'John',
            data: [1, 0, 4, 1, 2, 3, 6, 7, 8, 4, 1, 6]
          }]
        };
      }, 0);
    };
    this.chartOptions = {};
  }

}
