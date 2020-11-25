import { Component, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Producto } from "src/app/clases/producto";
import { ImagenService } from "src/app/services/imagen.service";
import { ProductoService } from "src/app/services/producto.service";
import { Imagen } from 'src/app/clases/imagen';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/clases/usuario';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/clases/empleado';
import { UIVisualService } from 'src/app/services/uivisual.service';

enum OpcionForm
{
  ALTA = "Alta",
  MODIFICACION = "Modificación",
  BAJA = "Baja",
}

@Component({
  selector: "app-form-producto",
  templateUrl: "./form-producto.component.html",
  styleUrls: ["./form-producto.component.scss"],
})
export class FormProductoComponent
{
  usuario: Empleado = <Empleado>AuthService.usuario;
  @Input() opcion: OpcionForm;
  @Input() producto: Producto = new Producto();
  popoverOptions = {
    translucent: true,
    cancelText: "Cerrar",
    okText: "Guardar",
  };

  confirmaClave;
  EstadoRegistro;
  fotos: Imagen[] = new Array<Imagen>(3);
  imgPreview: string[] = new Array<string>(3);

  registroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private imagenService: ImagenService,
    private UIVisual: UIVisualService
  )
  {
    this.crearForm();
  }

  ngOnChanges()
  {
    this.rellenarFormulario();
  }

  rellenarFormulario()
  {
    try
    {
      if (this.producto.id && this.opcion != OpcionForm.ALTA)
      {
        this.registroForm.setValue({
          nombre: this.producto.nombre,
          descripcion: this.producto.descripcion,
          minutosDeElaboracion: this.producto.minutosDeElaboracion,
          tipo: this.producto.tipo,
          precio: this.producto.precio,
          fotos: this.producto.fotos,
        });
        this.fotos = this.producto.fotos;
      } else
      {
        this.registroForm.reset();
        this.fotos = [];
      }

      if (this.opcion == OpcionForm.BAJA)
      {
        this.registroForm.disable();
      } else
      {
        this.registroForm.enable();
      }
    } catch (error)
    {
      console.error(error);
    }
  }

  crearForm()
  {
    this.registroForm = this.fb.group({
      nombre: ["", Validators.required],
      descripcion: ["", Validators.required],
      minutosDeElaboracion: [
        "",
        [
          Validators.required,
          Validators.minLength,
          Validators.pattern("^[0-9]*$"),
        ],
      ],
      tipo: [""],
      precio: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      fotos: [""],
    });
  }


  async subirFoto(index: number)
  {
    const foto = await this.imagenService.sacarFoto();

    this.imgPreview[index] = `data:image/jpeg;base64,${foto.base64}`;

    let imagen = new Imagen();
    imagen.base64 = foto.base64;
    imagen.fecha = foto.fecha;

    this.fotos[index] = imagen;
    console.log(this.fotos);
  }

  async registrar()
  {
    UIVisualService.loading(10000);
    let imagenesGuardadas = await this.imagenService.crearArrayImagenes(this.fotos, "/productos");

    console.log(imagenesGuardadas);
    this.registroForm.get("fotos").setValue(imagenesGuardadas);
    this.registroForm.get("tipo").setValue(this.usuario.tipo);

    this.productoService.registrar(new Producto(this.registroForm.value))
      .then(() =>
      {
        UIVisualService.presentToast("Alta exitosa");
        this.crearForm();
        this.imgPreview = new Array<string>(3);
        console.log("Registrado correctamente.");
      })
      .catch((error) =>
      {
        UIVisualService.presentToast("No se pudo realizar el alta");
        console.error("No se pudo realizar el alta.", error);
      });
  }



  async modificarProducto()
  {
    console.log("Modificando Producto-------");

    if (this.producto.isActive)
    {
      this.producto.nombre = this.registroForm.get("nombre").value;
      this.producto.descripcion = this.registroForm.get("descripcion").value;
      this.producto.minutosDeElaboracion = this.registroForm.get(
        "minutosDeElaboracion"
      ).value;
      this.producto.precio = this.registroForm.get("precio").value;
      this.producto.fotos = this.registroForm.get("fotos").value;

      this.productoService
        .actualizar(this.producto)
        .then(() =>
        {
          UIVisualService.presentToast("Modificación exitosa");
          console.log("Modificado correctamente.");
        })
        .catch(() => UIVisualService.presentToast("No se pudo modificar"));
    }
  }

  borrarProducto()
  {
    console.log("Baja de producto------");
    if (this.producto.isActive)
    {
      this.producto.isActive = false;
      this.productoService
        .actualizar(this.producto)
        .then(() =>
        {
          UIVisualService.presentToast("Baja realizada");
          this.registroForm.reset();
        })
        .catch(() => UIVisualService.presentToast("No se pudo realizar baja"));
    }
    else
    {
      UIVisualService.presentToast("Debe seleccionar un item del listado");
    }
  }



}
