import { Cliente } from './cliente';
import { Mesa } from './mesa';
import { Producto } from './producto';

export enum EstadoPedido
{
    RESERVADO = "Reservado", // Estado de reserva
    ASIGNADO = "Asignado", // Pedido con mesa asignada sin productos
    SOLICITADO = "Solicitado", // Cliente solicita pedido 
    EN_PROGRESO = "En progreso", // Recibido por cocina y barra
    LISTO = "Listo", // Listo para ser entregado
    ENTREGADO = "Entregado", // Recibido en mesa
    CERRADO = "Cerrado", // Listo para cobrar
    PAGADO = "Pagado" // Aprobado por mozo
}

export class Pedido
{
    id: string;
    productos: Producto[];
    cliente: Cliente;
    mesa: Mesa;
    valorTotal: number;
    fechaInicio: number;
    fechaFin: number;
    estado: EstadoPedido;
    isActive: boolean;
    propina?: number;
    idMozo: string;
    isDelivery: boolean;

    public constructor(init?: Partial<Pedido>)
    {
        if (init)
        {
            Object.assign(this, init);
            this.cliente = new Cliente(init.cliente);
            this.mesa = new Mesa(init.mesa);
        }
        else
        {
            console.log("TEST");
            this.productos = [];
            this.isActive = true;
            this.propina = 0;
            this.idMozo = '';
        }
    }


    public static CrearPedido(id: string, cliente: Cliente, mesa: Mesa,
        productos: Producto[], fechaInicio: number, fechaFin: number, valorTotal: number,
        estado: EstadoPedido, isActive: boolean)
    {
        let pedido = new Pedido();

        pedido.id = id;
        pedido.cliente = new Cliente(cliente);
        pedido.mesa = new Mesa(mesa);
        pedido.productos = productos ? productos : [];
        pedido.valorTotal = valorTotal;
        pedido.fechaInicio = fechaInicio;
        pedido.fechaFin = fechaFin;
        pedido.estado = estado;
        pedido.isActive = isActive;

        return pedido
    }

    public calcularTotal()
    {
        this.valorTotal = 0;

        if (this.productos)
        {
            this.productos.forEach(producto =>
            {
                console.log(producto);
                this.valorTotal = this.valorTotal + producto.precio;
            });
        }
        console.log(this.valorTotal);
        console.log(this.propina);
        this.valorTotal = this.valorTotal * (1 + this.propina / 100);
        return this.valorTotal;
    }

    public isReady(): boolean
    {
        for (const producto of this.productos) 
        {
            if (!producto.isReady)
            {
                return false;
            }
        }
        return true;
    }

    public cambiarEstado()
    {
        switch (this.estado)
        {
            case EstadoPedido.RESERVADO:
                this.estado = EstadoPedido.ASIGNADO;
                break;
            case EstadoPedido.ASIGNADO:
                this.estado = EstadoPedido.SOLICITADO;
                break;
            case EstadoPedido.SOLICITADO:
                this.estado = EstadoPedido.EN_PROGRESO;
                break;
            case EstadoPedido.EN_PROGRESO:
                this.estado = EstadoPedido.LISTO;
                break;
            case EstadoPedido.LISTO:
                this.estado = EstadoPedido.ENTREGADO;
                break;
            case EstadoPedido.ENTREGADO:
                this.estado = EstadoPedido.CERRADO;
                break;
            case EstadoPedido.CERRADO:
                this.estado = EstadoPedido.PAGADO;
                break;
        }
    }

}