
import { Component, Input, OnInit } from '@angular/core'
import { Jefe } from "src/app/clases/jefe";
import { JefeService } from "src/app/services/jefe.service";
import { AuthService } from "src/app/services/auth.service";
import { UIVisualService } from "src/app/services/uivisual.service"
import { Imagen } from 'src/app/clases/imagen';
import { ImagenService } from 'src/app/services/imagen.service';

enum OpcionForm
{
  ALTA = "Alta",
  MODIFICACION = "Modificación",
  BAJA = "Baja",
}

@Component({
  selector: "app-form-jefes",
  templateUrl: "./form-jefes.component.html",
  styleUrls: ["./form-jefes.component.scss"],
})
export class FormJefesComponent implements OnInit
{
  @Input() opcion: OpcionForm;
  @Input() jefe: Jefe;

  auxiliarFoto: Imagen
  imgPreview: string

  popoverOptions = {
    header: "Seleccione el tipo",
    okText: "Guardar",
  };

  constructor(private jefeService: JefeService, private authService: AuthService, private UIVisual: UIVisualService,
    private imagenService: ImagenService) { }

  ngOnInit(): void
  {
    if (this.opcion == "Alta")
    {
      this.jefe = new Jefe()
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
   * Alta de jefe
   */
  async altaJefe()
  {
    if (this.jefe && !this.jefe.id)
    {
      UIVisualService.loading(5000);
      // Se guarda imagen en DB y Storage
      let imagenGuardada = await this.imagenService.crearUnaImagen(
        this.auxiliarFoto,
        '/jefes'
      )
      this.jefe.foto = imagenGuardada;

      this.authService
        .onRegisterJefe(this.jefe)
        .then(() =>
        {
          UIVisualService.presentToast('Alta exitosa');
          this.jefe = new Jefe();
          this.imgPreview = null;
        })
        .catch(() => UIVisualService.presentToast('No se pudo realizar el alta'))
    }
    else
    {
      UIVisualService.presentToast('Empleado existente')
    }
  }

  /**
   *  Modificacion de jefe
   */
  async modificarJefe()
  {
    console.log('Modificar Jefe')

    if (this.jefe.id)
    {
      // Se actualiza Mesa en DB
      this.jefeService
        .actualizar(this.jefe)
        .then(() => UIVisualService.presentToast('Modificación exitosa'))
        .catch(() => UIVisualService.presentToast('No se pudo modificar'))
    }
    else
    {
      UIVisualService.presentToast('Seleccione una persona del listado');
    }
  }

  /**
   * Baja lógica de jefe
   */
  borrarJefe()
  {
    console.log("Baja jefe");

    if (this.jefe.id)
    {
      this.jefeService
        .borradoLogico(this.jefe)
        .then(() => UIVisualService.presentToast('Baja realizada'))
        .catch(() => UIVisualService.presentToast('No se pudo realizar baja'))
    }
    else
    {
      UIVisualService.presentToast('Seleccione una persona del listado');
    }
  }
}
