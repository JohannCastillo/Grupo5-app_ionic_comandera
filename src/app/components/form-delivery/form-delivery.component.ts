import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/clases/cliente';
import { Mesa } from 'src/app/clases/mesa';
import { Pedido, EstadoPedido } from 'src/app/clases/pedido';
import { AuthService } from 'src/app/services/auth.service';
import { DateService } from 'src/app/services/date.service';
import { MesaService } from 'src/app/services/mesa.service';
import { NotificationsService } from 'src/app/services/notifications.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { RolesService } from 'src/app/services/roles.service';
import { UIVisualService } from 'src/app/services/uivisual.service';
enum OpcionForm
{
  ALTA = "Alta",
  MODIFICACION = "Modificación",
  BAJA = "Baja",
}
@Component({
  selector: 'app-form-delivery',
  templateUrl: './form-delivery.component.html',
  styleUrls: ['./form-delivery.component.scss'],
})
export class FormDeliveryComponent implements OnInit
{

  @Input() opcion: OpcionForm;
  @Input() pedido: Pedido;
  cliente: Cliente;

  constructor(private pedidoService: PedidoService, private UIVisual: UIVisualService,
    private router: Router, private notificationService: NotificationsService) { this.cliente = AuthService.usuario as Cliente }

  ngOnInit()
  {
    this.pedido = new Pedido();
  }

  alta()
  {
    this.pedido.cliente = this.cliente;
    this.pedido.fechaInicio = Date.now();
    this.pedido.isDelivery = true;   
    this.pedido.estado =  EstadoPedido.RESERVADO;
    this.pedidoService.crear(this.pedido).then(() =>
    {
      this.notificationService.enviarNotificacion(
        'Nuevo pedido de delivery', `El cliente ${this.cliente.nombre} ${this.cliente.apellido} acaba de hacer un pedido de delivery`,
        '/home/menu-delivery',
        'jefes'
      ).then().catch(() => UIVisualService.presentToast('No se envio la notificacion.'))
      UIVisualService.presentToast('Solicitud de delivery exitosa.');
    });
  }

  modificacion()
  {
    if (this.pedido)
    {
      this.pedidoService.actualizar(this.pedido)
        .then(() =>
        {
          UIVisualService.presentToast('Modificación exitosa');
          this.router.navigate(['/home/inicio']);
        })
        .catch(() => UIVisualService.presentToast('No se pudo modificar'));
    }

  }

  baja()
  {
    if (this.pedido)
    {
      this.pedidoService.borrar(this.pedido)
        .then(() =>
        {
          UIVisualService.presentToast('Baja realizada');
          this.router.navigate(['/home/inicio']);
        })
        .catch(() => UIVisualService.presentToast('No se pudo realizar baja'));
    }
  }


  async mostrarCarta()
  {
    console.log("Ver carta");

    const data = await UIVisualService.verCarta();

    this.pedido.productos = this.pedido.productos ? this.pedido.productos : [];
    this.pedido.productos.push(...data);
    this.pedido.calcularTotal();
  }

  async mostrarDetalle()
  {
    UIVisualService.verPlatos(this.pedido);
    this.pedido.calcularTotal();
  }

}
