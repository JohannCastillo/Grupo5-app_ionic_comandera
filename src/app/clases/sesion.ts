export class Sesion
{
    id: string;
    idUsuario: string;
    fechaInicio: number;
    fechaFin: number;

    constructor(init?: Partial<Sesion>)
    {
        if (init)
        {
            Object.assign(this, init);
        }
    }

    public static CrearSesion(idUsuario: string, fechaInicio: number, id?: string, fechaFin?: number)
    {
        let sesion = new Sesion();

        sesion.idUsuario = idUsuario;
        sesion.fechaInicio = fechaInicio;
        sesion.id = id ? id : null;
        sesion.fechaFin = fechaFin ? fechaFin : null;

        return sesion;
    }

    public calcularDuracion()
    {
        if (this.fechaFin)
        {
            return this.fechaFin - this.fechaInicio;
        }
        return 0;
    }
}