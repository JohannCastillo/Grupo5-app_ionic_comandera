import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Pedido } from 'src/app/clases/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
import theme from 'highcharts/themes/dark-unica';


@Component({
  selector: 'app-mesas-mas-usadas',
  templateUrl: './mesas-mas-usadas.component.html',
  styleUrls: ['./mesas-mas-usadas.component.scss'],
})
export class MesasMasUsadasComponent implements OnInit
{
  public highchart;
  public data: { name: string, y: number }[] = [];
  public chart;
  public updateFromInput = false;
  public Highcharts = Highcharts;
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
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
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
            data: this.data
          }]
        };
      }, 0);
    };
    this.chartOptions = {};
  }

}
