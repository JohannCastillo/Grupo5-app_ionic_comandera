import { Component, OnInit } from '@angular/core';
import { Empleado, TipoEmpleado } from 'src/app/clases/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { LogService } from 'src/app/services/log.service';

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
  mozos: Empleado[] = [];

  constructor(private logService: LogService) { }

  ngOnInit()
  {
    this.mozos = EmpleadoService.empleados.filter(e => e.tipo == TipoEmpleado.Mozo);
    this.logService.leer();
  }

}
