import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/clases/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
import * as Highcharts from 'highcharts';
import theme from 'highcharts/themes/dark-unica';
import highcharts3D from 'highcharts/highcharts-3d';


highcharts3D(Highcharts);

@Component({
  selector: 'app-mesas-mas-usadas',
  templateUrl: './mesas-mas-usadas.component.html',
  styleUrls: ['./mesas-mas-usadas.component.scss'],
})
export class MesasMasUsadasComponent implements OnInit
{
  public Highcharts = Highcharts;
  public highchart;
  public data: { name: string, y: number }[] = [];
  public chart;
  public updateFromInput = false;
  public chartConstructor = 'chart';
  public chartOptions;
  public chartCallback;
  public pedidos: Pedido[] = [];

  constructor() { }

  ngOnInit() 
  {
    this.pedidos = PedidoService.pedidos;
    this.procesarDatos();
    this.crearGrafico();
  }

  procesarDatos()
  {
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
    mesas.forEach((value, key) =>
    {
      this.data.push({ name: `Mesa:${key}`, y: value });
    });
  }

  crearGrafico()
  {

    theme(Highcharts);
    this.chartCallback = (chart) =>
    {
      setTimeout(() =>
      {
        chart.reflow();
        this.chartOptions = {
          chart: {
            type: 'pie'
          },
          options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
          },
          title: {
            text: 'Mesas más usadas'
          },
          credits: {
            enabled: false
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.y}</b>'
          },
          plotOptions: {
            pie: {
              innerSize: 60,
              depth: 45,
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.y}',
                style: {
                  color: 'black'
                }
              }
            }
          },
          series: [{
            name: 'Pedidos',
            colorByPoint: true,
            type: undefined,
            data: this.data //[{K,V},{},{},{}]
          }]
        };
      }, 0);
    };
    this.chartOptions = {};
  }

}
