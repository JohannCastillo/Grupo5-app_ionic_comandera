
import { Component, Input, OnInit } from '@angular/core'
import { Cliente } from "src/app/clases/cliente";
import { ClienteService } from "src/app/services/cliente.service";
import { AuthService } from "src/app/services/auth.service";
import { UIVisualService } from "src/app/services/uivisual.service"
import { Imagen } from 'src/app/clases/imagen';
import { ImagenService } from 'src/app/services/imagen.service';
import { INotificacion } from 'src/app/interfaces/INotification';
import { NotificationsService } from 'src/app/services/notifications.service';

enum OpcionForm
{
  ALTA = "Alta",
  MODIFICACION = "Modificación",
  BAJA = "Baja",
}

@Component({
  selector: "app-form-clientes",
  templateUrl: "./form-clientes.component.html",
  styleUrls: ["./form-clientes.component.scss"],
})
export class FormClientesComponent implements OnInit
{
  @Input() opcion: OpcionForm;
  @Input() cliente: Cliente;

  auxiliarFoto: Imagen
  imgPreview: string

  constructor(private clienteService: ClienteService, private authService: AuthService, private UIVisual: UIVisualService,
    private imagenService: ImagenService,
    private notifications: NotificationsService
  ) { }

  ngOnInit(): void
  {
    if (this.opcion == "Alta")
    {
      this.cliente = new Cliente()
    }
  }

  async sacarFoto()
  {
    const foto = await this.imagenService.sacarFoto()

    this.imgPreview = `data:image/jpeg;base64,${foto.base64}`

    this.auxiliarFoto = new Imagen();
    this.auxiliarFoto.base64 = foto.base64;
    this.auxiliarFoto.fecha = foto.fecha;
  }

  /**
   * Alta de cliente
   */
  async altaCliente()
  {
    if (this.cliente && !this.cliente.id)
    {
      UIVisualService.loading(5000);
      // Se guarda imagen en DB y Storage
      let imagenGuardada = await this.imagenService.crearUnaImagen(
        this.auxiliarFoto,
        '/clientes'
      )
      this.cliente.foto = imagenGuardada;
      console.log(this.cliente);

      this.authService
        .onRegisterCliente(this.cliente)
        .then(() =>
        {
          this.notifications.enviarNotificacion('Nuevo Cliente', `El cliente ${this.cliente.nombre} ${this.cliente.apellido} se acaba de registrar`, '/home/clientes-pendientes', 'jefes');
          UIVisualService.presentToast('Alta exitosa');
          this.cliente = new Cliente();
          this.imgPreview = null;
        })
        .catch(() => UIVisualService.presentToast('No se pudo realizar el alta'))
    }
    else
    {
      UIVisualService.presentToast('Cliente existente')
    }
  }

  /**
   *  Modificacion de cliente
   */
  async modificarCliente()
  {
    console.log('Modificar Cliente')

    if (this.cliente.id)
    {
      // Se actualiza Mesa en DB
      this.clienteService
        .actualizar(this.cliente)
        .then(() => UIVisualService.presentToast('Modificación exitosa'))
        .catch(() => UIVisualService.presentToast('No se pudo modificar'))
    }
    else
    {
      UIVisualService.presentToast('Seleccione un cliente del listado');
    }
  }

  /**
   * Baja lógica de cliente
   */
  borrarCliente()
  {
    console.log("Baja cliente");

    if (this.cliente.id)
    {
      this.clienteService
        .borradoLogico(this.cliente)
        .then(() => UIVisualService.presentToast('Baja realizada'))
        .catch(() => UIVisualService.presentToast('No se pudo realizar baja'))
    }
    else
    {
      UIVisualService.presentToast('Seleccione un cliente del listado');
    }
  }
}
