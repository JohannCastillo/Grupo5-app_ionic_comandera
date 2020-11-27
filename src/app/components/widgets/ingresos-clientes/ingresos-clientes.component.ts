import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import theme from 'highcharts/themes/dark-unica';

import { Sesion } from 'src/app/clases/sesion';
import { Dia } from 'src/app/pages/estadisticas/estadisticas.page';
import { LogService } from 'src/app/services/log.service';

interface Serie
{
  name: string,
  data: number[]
}

@Component({
  selector: 'app-ingresos-clientes',
  templateUrl: './ingresos-clientes.component.html',
  styleUrls: ['./ingresos-clientes.component.scss'],
})
export class IngresosClientesComponent implements OnInit
{
  public highchart;
  public data: any[] = [];
  public chart;
  public updateFromInput = false;
  public Highcharts = Highcharts;
  public chartConstructor = 'chart';
  public chartOptions;
  public chartCallback;
  public dias: Dia[] = [];
  public sesiones: Sesion[];
  private XCategories: Array<any>;
  public semana: Dia[] = [Dia.Domingo, Dia.Lunes, Dia.Martes, Dia.Miercoles, Dia.Jueves,
  Dia.Viernes, Dia.Sabado];

  constructor() { }

  ngOnInit() 
  {
    this.sesiones = LogService.sesiones;
    this.procesarDatos();
    this.crearGrafico();
  }

  async procesarDatos()
  {
    // Ordeno las sesiones por día
    this.data = this.sesiones.sort((a, b) => this.ordenarDias(a, b)).reverse();
    let sesiones: Serie[] = [];
    let aux = [];

    this.data.forEach(sesion =>
    {
      console.log(new Date(sesion.fechaInicio).getHours());

      let auxSesion = sesiones.filter(s => s.name == sesion.idUsuario)[0];
      let auxSesiones = sesiones.filter(s => s.name != sesion.idUsuario);
      if (auxSesion)
      {
        auxSesion.data.push(new Date(sesion.fechaInicio).getHours());
        auxSesiones.push(auxSesion);
      }
      sesiones = auxSesiones;

    });

    this.data = sesiones;
    console.log(this.data);


    // // Por cada fecha de inicio obtengo el día
    // // El array de día contendrá dias diferentes para las categorias
    // for (let index = 0; index < this.data.length; index++) 
    // {
    //   const element: Sesion = this.data[index];
    //   const diaSemana = new Date(element.fechaInicio).getDay();

    //   console.log(diaSemana);
    //   console.log(element);

    //   // if(!sesiones.has(element.idUsuario))
    //   // {
    //   //   sesiones.set(element.idUsuario,)
    //   // }

    //   // Al estar ordenado de manera descendente va a guardar el último logueo del día
    //   if (!this.dias.includes(diaSemana))
    //   {
    //     console.log("Se agrega a la data");
    //     this.dias.push(diaSemana);
    //     aux.push(new Date(element.fechaInicio));
    //   }
    // }
    // console.log(aux);
    // //this.data = aux.reverse().map(fecha => (<Date>fecha).getHours());
    // this.XCategories = this.dias.map(dia => Dia[dia]).reverse();

    // console.log(this.data);
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
            type: "area"
          },
          title: {
            text: "Inicios de sesión de usuarios"
          },
          credits: {
            enabled: false
          },
          yAxis: {
            title: {
              text: "Horarios"
            },
          },
          xAxis: {
            allowDecimals: false,
            labels: {
              formatter: function ()
              {
                return this.value; // clean, unformatted number for year
              }
            },
          },
          plotOptions: {
            area: {
              pointStart: 0,
              marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                  hover: {
                    enabled: true
                  }
                }
              }
            }
          },
          tooltip: {
            valueSuffix: " hr"
          },
          series: this.data
        }
      }, 0);
    };
    this.chartOptions = {};
  }

  ordenarDias(diaA: Sesion, diaB: Sesion) 
  {
    if (diaA.fechaInicio > diaB.fechaInicio)
    {
      return 1;
    }
    else if (diaA.fechaInicio < diaB.fechaInicio)
    {
      return -1;
    }
    else
    {
      return 0;
    }
  }

}
