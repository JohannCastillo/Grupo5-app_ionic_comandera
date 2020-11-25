import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import theme from 'highcharts/themes/dark-unica';
import { Pedido } from 'src/app/clases/pedido';
import { Dia, Serie } from 'src/app/pages/estadisticas/estadisticas.page';
import { PedidoService } from 'src/app/services/pedido.service';



@Component({
  selector: 'app-clientes-por-dia',
  templateUrl: './clientes-por-dia.component.html',
  styleUrls: ['./clientes-por-dia.component.scss'],
})
export class ClientesPorDiaComponent implements OnInit
{
  public highchart;
  public data;
  public chart;
  public updateFromInput = false;
  public Highcharts = Highcharts;
  public chartConstructor = 'chart';
  public chartOptions;
  public chartCallback;
  public pedidos: Pedido[] = [];
  public semana: Dia[] = [Dia.Domingo, Dia.Lunes, Dia.Martes, Dia.Miercoles, Dia.Jueves,
  Dia.Viernes, Dia.Sabado];

  constructor() { }

  ngOnInit() 
  {
    this.pedidos = PedidoService.pedidos;
    this.procesarDatos();
    this.crearGrafico();
  }

  procesarDatos()
  {
    let clientes: number[] = [];

    this.semana.forEach(dia => 
    {
      let cantidad = 0;

      this.pedidos.forEach(pedido => 
      {
        if (new Date(pedido.fechaInicio).getDay() == dia && pedido.cliente)
        {
          cantidad++;
        }
      });
      clientes.push(cantidad);
    });

    this.data = clientes;
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
        this.chartOptions = {
          chart: {
            type: 'spline'
          },
          title: {
            text: 'Cliente por día'
          },
          credits: {
            enabled: false
          },
          xAxis: {
            categories: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
          },
          yAxis: {
            title: {
              text: 'Cantidad de clientes'
            },
            plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
            }]
          },
          tooltip: {
            shape: "square",
            borderRadius: 15,
          },
          legend: {
            enabled: false
          },
          plotOptions: {
            spline: {
              marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
              }
            }
          },
          series: [{
            name: 'Clientes',
            marker: {
              symbol: 'square'
            },
            data: this.data
          }]
        };
      }, 0);
    };
    this.chartOptions = {};
  }

}
