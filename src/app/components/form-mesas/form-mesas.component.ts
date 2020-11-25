import { Component, Input, OnInit } from '@angular/core'
import { Imagen } from 'src/app/clases/imagen'
import { Mesa } from 'src/app/clases/mesa'
import { ImagenService } from 'src/app/services/imagen.service'
import { MesaService } from 'src/app/services/mesa.service'
import { UIVisualService } from 'src/app/services/uivisual.service'

enum OpcionForm
{
    ALTA = 'Alta',
    MODIFICACION = 'Modificación',
    BAJA = 'Baja',
}

@Component({
    selector: 'app-form-mesas',
    templateUrl: './form-mesas.component.html',
    styleUrls: ['./form-mesas.component.scss'],
})
export class FormMesasComponent implements OnInit
{
    @Input() opcion: OpcionForm
    @Input() mesa: Mesa
    popoverOptions = {
        mode: "md",
        translucent: true,
    }
    codigoQR: any
    auxiliarFoto: Imagen
    imgPreview: string

    constructor(
        private mesaService: MesaService,
        private imagenService: ImagenService,
        private UIVisual: UIVisualService

    ) { }

    ngOnInit(): void
    {
        if (this.opcion == 'Alta')
        {
            this.mesa = new Mesa()
        }
        else
        {
            this.imgPreview = `data:image/jpeg;base64,${this.mesa.foto.base64}`
        }
    }

    /**
     * Método para tomar foto y previsualizar
     */
    async sacarFoto()
    {
        const foto = await this.imagenService.sacarFoto()

        this.imgPreview = `data:image/jpeg;base64,${foto.base64}`

        this.auxiliarFoto = new Imagen();
        this.auxiliarFoto.base64 = foto.base64;
        this.auxiliarFoto.fecha = foto.fecha;
    }

    /**
     * Alta de mesa
     */
    async crearMesa()
    {
        if (this.mesa && !this.mesa.id)
        {
            UIVisualService.loading(4000);
            // Se guarda imagen en DB y Storage
            let imagenGuardada = await this.imagenService.crearUnaImagen(
                this.auxiliarFoto,
                '/mesas'
            )
            this.mesa.foto = imagenGuardada;

            // Alta de mesa en DB
            this.mesaService.crear(this.mesa)
                .then(() =>
                {
                    UIVisualService.presentToast('Alta exitosa');
                    this.mesa = new Mesa();
                    this.imgPreview = null;
                })
                .catch(() => UIVisualService.presentToast('No se pudo realizar el alta'));
        }
        else
        {
            UIVisualService.presentToast('Mesa existente')
        }
    }

    /**
     *  Modificacion de mesa
     */
    async modificarMesa()
    {
        console.log('Modificar Mesa')

        if (this.mesa)
        {
            // Si se carga nueva Imagen
            if (this.auxiliarFoto)
            {
                // Se guarda imagen en DB y Storage
                const imagenGuardada = await this.imagenService.crearUnaImagen(
                    this.auxiliarFoto,
                    '/mesas'
                )
                this.mesa.foto = imagenGuardada
            }
            // Se actualiza Mesa en DB
            this.mesaService.actualizar(this.mesa)
                .then(() => UIVisualService.presentToast('Modificación exitosa'))
                .catch(() => UIVisualService.presentToast('No se pudo modificar'))
        }
    }

    /**
     * Baja lógica de mesa
     */
    borrarMesa()
    {
        console.log('Baja de mesa')
        if (this.mesa)
        {
            // TODO: Borrar imagen de DB y Storage
            // this.imagenService.borrar(this.mesa.foto)
            this.mesaService.borrar(this.mesa)
                .then(() => UIVisualService.presentToast('Baja realizada'))
                .catch(() => UIVisualService.presentToast('No se pudo realizar baja'));
        }
    }



}
