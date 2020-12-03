import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Pedido, EstadoPedido } from 'src/app/clases/pedido';
import { Reserva } from 'src/app/clases/reserva';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { RolesService } from 'src/app/services/roles.service';
import { UIVisualService } from 'src/app/services/uivisual.service';

@Component({
  selector: 'app-listado-delivery',
  templateUrl: './listado-delivery.component.html',
  styleUrls: ['./listado-delivery.component.scss'],
})
export class ListadoDeliveryComponent implements OnInit
{

  @Input() pedidosDelivery: Pedido[] = [];
  @Output() elegirPedidoDelivery: EventEmitter<Reserva> = new EventEmitter<Reserva>();
  usuario: Usuario;

  constructor(
    private loadingController: LoadingController,
    private rolService: RolesService,
    private visual: UIVisualService,
    private pedidoService: PedidoService,
  ) { }

  ngOnInit()
  {
    UIVisualService.loading(2000);
    this.usuario = AuthService.usuario;
  }

  ngDoCheck()
  {
    if (this.rolService.isJefe(this.usuario))
    {
      this.pedidosDelivery = this.pedidosDelivery.filter(reserva => reserva.estado == EstadoPedido.RESERVADO)
    } else
    {
      this.pedidosDelivery = this.pedidosDelivery.filter(reserva => reserva.cliente.id == this.usuario.id)
    }
  }

  seleccionarReserva(reserva: Reserva)
  {
    this.elegirPedidoDelivery.emit(reserva);
  }

  confirmarPedidoDelivery(reserva: Pedido)
  {
    reserva.estado = EstadoPedido.ASIGNADO;
    this.pedidoService.actualizar(reserva).then(() =>
    {
      UIVisualService.presentToast('Reserva Confirmada.');
    })
  }

  rechazarPedidoDelivery(reserva: Pedido)
  {
    reserva.isActive = false;
    reserva.fechaFin = Date.now();
    this.pedidoService.actualizar(reserva).then(() =>
    {
      //Avisar al cliente
      UIVisualService.presentToast('Reserva Rechazada.');
    })
  }

}
