import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Mesa } from 'src/app/clases/mesa';
import { MesaService } from 'src/app/services/mesa.service';

@Component({
  selector: 'app-mesas-mas-usadas',
  templateUrl: './mesas-mas-usadas.component.html',
  styleUrls: ['./mesas-mas-usadas.component.scss'],
})
export class MesasMasUsadasComponent implements OnInit
{
  public highchart;
  public data;
  public mesas: Mesa[];
  public chart;
  public updateFromInput = false;
  public Highcharts = Highcharts;
  public chartConstructor = 'chart';
  public chartOptions;
  public chartCallback;

  constructor() { }

  ngOnInit() 
  {
    this.mesas = MesaService.mesas;
    this.crearGrafico();
  }

  procesarDatos()
  {

    // this.meses.forEach(foto => 
    // {
    //   if (new Date(foto.fecha).getDay() == dia) 
    //   {
    //     console.log(foto);

    //     if (foto.votos.length > mayorVotos) 
    //     {
    //       mayorVotos = foto.votos.length;
    //       imgSrc = foto.url;
    //       auxiliar = {
    //         name: new Date(foto.fecha).toISOString(),
    //         y: foto.votos.length
    //       };
    //     }
    //   }
    // });
    // if(auxiliar)
    // {
    //   this.assets.push(imgSrc);
    //   votosPorDia.push(auxiliar);
    // }


    // this.data = votosPorDia;
    // console.log(this.data);
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
