import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import theme from 'highcharts/themes/dark-unica';
import { Cliente } from 'src/app/clases/cliente';
import { Pedido } from 'src/app/clases/pedido';
import { Dia, Serie } from 'src/app/pages/estadisticas/estadisticas.page';
import { PedidoService } from 'src/app/services/pedido.service';
import { RolesService } from 'src/app/services/roles.service';
@Component({
  selector: 'app-clientes-rechazados-por-dia',
  templateUrl: './clientes-rechazados-por-dia.component.html',
  styleUrls: ['./clientes-rechazados-por-dia.component.scss'],
})
export class ClientesRechazadosPorDiaComponent implements OnInit
{

  public highchart;
  public data;
  public chart;
  public updateFromInput = false;
  public Highcharts = Highcharts;
  public chartConstructor = 'chart';
  public chartOptions;
  public chartCallback;
  public pedidos: Pedido[] = []
  public semana: Dia[] = [Dia.Domingo, Dia.Lunes, Dia.Martes, Dia.Miercoles, Dia.Jueves,
  Dia.Viernes, Dia.Sabado];
  private XCategories: Array<any>;

  constructor(private rolService: RolesService) { }

  ngOnInit() 
  {
    /* this.pedidos = PedidoService.pedidos;
    console.log(this.pedidos); */
    this.procesarDatos();
    this.crearGrafico();
  }

  procesarDatos()
  {
    let anonimos: number[] = [];
    let InicioDeActividades = new Date(2020,11,1);
    let hoy = new Date();
    console.log('Rechazados por dia',InicioDeActividades.toLocaleString(),'HASTA',hoy.toLocaleString());
    /* do {
      console.log(InicioDeActividades.toLocaleDateString());
      console.log(InicioDeActividades.getTime());
      console.log(hoy.getTime());
      InicioDeActividades = this.sumarDias(InicioDeActividades, 1);
      console.log(InicioDeActividades.getTime());
    } while (InicioDeActividades.getTime() < hoy.getTime()); */
    this.XCategories
/*     this.semana.forEach(dia => 
    {
      let cantidad = 0;

      this.pedidos.forEach(pedido => 
      {
        let anonimo = this.rolService.isClienteAnonimo(<Cliente>pedido.cliente)

        if (new Date(pedido.fechaInicio).getDay() == dia && anonimo)
        {
          cantidad++;
        }
      });
      anonimos.push(cantidad);
    });

    this.data = anonimos;
    console.log(this.data); */
  }
       
sumarDias(fecha, dias){
  fecha.setDate(fecha.getDate() + dias);
  return fecha;
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
            type: 'area'
          },
          accessibility: {
            description: 'cantidad de clientes rechazados por dia'
          },
          title: {
            text: 'Clientes rechazados por dia'
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
            data: [150,200,500,300]
          }]
        };
      }, 0);
    };
    this.chartOptions = {};
  }

}
