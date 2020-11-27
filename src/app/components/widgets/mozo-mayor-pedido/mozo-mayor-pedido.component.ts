import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import theme from 'highcharts/themes/dark-unica';

import { Empleado } from 'src/app/clases/empleado';
import { Pedido } from 'src/app/clases/pedido';
import { Dia } from 'src/app/pages/estadisticas/estadisticas.page';
import { PedidoService } from 'src/app/services/pedido.service';

Highcharts.setOptions({
  colors: Highcharts.map(Highcharts.getOptions().colors, function (color)
  {
    return {
      radialGradient: {
        cx: 0.5,
        cy: 0.3,
        r: 0.7
      },
      stops: [
        [0, color],
        [1, Highcharts.color(color).brighten(-0.3).get('rgb')] // darken
      ]
    };
  })
});

@Component({
  selector: 'app-mozo-mayor-pedido',
  templateUrl: './mozo-mayor-pedido.component.html',
  styleUrls: ['./mozo-mayor-pedido.component.scss'],
})
export class MozoMayorPedidoComponent implements OnInit
{
  public highchart;
  public data: any[] = [];
  public chart;
  public updateFromInput = false;
  public Highcharts = Highcharts;
  public chartConstructor = 'chart';
  public chartOptions;
  public chartCallback;
  public pedidos: Pedido[] = [];
  @Input() public mozos: Empleado[];
  public semana: Dia[] = [Dia.Domingo, Dia.Lunes, Dia.Martes, Dia.Miercoles, Dia.Jueves,
  Dia.Viernes, Dia.Sabado];

  constructor() { }

  ngOnInit() 
  {
    this.pedidos = PedidoService.pedidos;
    console.log(this.mozos);
    this.procesarDatos();
    this.crearGrafico();
  }

  async procesarDatos()
  {
    let mozos: Map<string, number> = new Map<string, number>();

    this.pedidos.forEach(pedido => 
    {
      if (pedido.idMozo.length > 0 && !mozos.has(pedido.idMozo))
      {
        mozos.set(pedido.idMozo, 1);
      }
      else
      {
        mozos.set(pedido.idMozo, mozos.get(pedido.idMozo) + 1);
      }
    });

    console.log(mozos);

    this.mozos.forEach(m =>
    {
      this.data.push({ name: `${m.nombre} ${m.apellido}`, y: mozos.get(m.id) });
    });

    console.log(this.data);
  }

  crearGrafico()
  {
    theme(Highcharts);
    this.chartCallback = (chart) =>
    {
      setTimeout(() => 
      {
        chart.reflow();
        this.chartOptions =
        {
          chart: {
            type: 'pie'
          },
          title: {
            text: 'Cantidad de pedidos por Mozo'
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
                format: '<b>{point.name}</b>: {point.y} ',
                connectorColor: 'silver'
              }
            }
          },
          series: [{
            name: 'Pedidos',
            colorByPoint: true,
            type: undefined,
            data: this.data
          }]
        }
      }, 0);
    };
    this.chartOptions = {};
  }


}
