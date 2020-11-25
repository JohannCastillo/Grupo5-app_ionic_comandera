import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Mesa } from 'src/app/clases/mesa';
import { UIVisualService } from 'src/app/services/uivisual.service';

@Component({
  selector: 'app-listado-mesas',
  templateUrl: './listado-mesas.component.html',
  styleUrls: ['./listado-mesas.component.scss'],
})
export class ListadoMesasComponent implements OnInit
{
  @Input() mesas: Mesa[] = [];
  @Output() elegirMesa: EventEmitter<Mesa> = new EventEmitter<Mesa>();

  constructor()
  { }

  ngOnInit() 
  {
    UIVisualService.loading(2000);
  }

  /**
   * Método para enviar mesa seleccionada
   * @param mesa Mesa seleccionada
   */
  seleccionarMesa(mesa: Mesa)
  {
    this.elegirMesa.emit(mesa);
  }



}
