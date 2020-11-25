import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit()
  {
  }

}
