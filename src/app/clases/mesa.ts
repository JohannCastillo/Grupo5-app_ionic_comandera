import { IEscaneable } from '../interfaces/IEscaneable';
import { Imagen } from './imagen';

export enum TipoMesa
{
    VIP = 'Vip',
    Discapacitados = 'Discapacitados',
    Normal = 'Normal'
}

export class Mesa implements IEscaneable
{
    id: string;
    numero: number;
    comensales: number;
    tipo: TipoMesa;
    foto: Imagen;
    codigoQR: string;
    isAvailable: boolean;
    isActive: boolean;

    constructor(init?: Partial<Mesa>)
    {
        if (init)
        {
            Object.assign(this, init);
        }
    }

    public static CrearMesa(id: string, numero: number, comensales: number, tipo: TipoMesa,
        foto: Imagen, codigoQR: string, isAvailable: boolean,
        isActive: boolean)
    {
        let mesa = new Mesa();

        mesa.id = id;
        mesa.numero = numero;
        mesa.comensales = comensales;
        mesa.tipo = tipo;
        mesa.foto = foto;
        mesa.codigoQR = codigoQR;
        mesa.isAvailable = isAvailable;
        mesa.isActive = isActive;

        return mesa;
    }

    public setImage(imagen: Imagen)
    {
        this.foto.base64 = imagen.base64;
        this.foto.url = imagen.url;
        this.foto.fecha = imagen.fecha;
        this.foto.rutaStorage = imagen.rutaStorage;
    }
}


