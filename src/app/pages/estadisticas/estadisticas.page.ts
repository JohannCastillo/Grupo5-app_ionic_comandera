import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';

export interface Serie
{
  name: string,
  data: any,
}

export enum Dia
{
  Domingo,
  Lunes,
  Martes,
  Miercoles,
  Jueves,
  Viernes,
  Sabado
}

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})
export class EstadisticasPage implements OnInit
{

  constructor(private empleadosService: EmpleadoService) { }

  async ngOnInit()
  {
    await this.empleadosService.leer();
  }

}
