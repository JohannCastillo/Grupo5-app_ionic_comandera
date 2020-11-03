import { Cliente } from './cliente';
import { Mesa } from './mesa';
import { Producto } from './producto';

export enum EstadoPedido
{
    RESERVADO = "Reservado", // Estado de reserva
    SOLICITADO = "Solicitado", // Cliente solicita pedido 
    PENDIENTE = "Pendiente", // Pedido confirmado por mozo 
    EN_PROGRESO = "En progreso", // Recibido por cocina y barra
    ENTREGADO = "Entregado", // Recibido en mesa
    CERRADO = "Cerrado", // Cobrado
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

    constructor()
    {
        this.fechaInicio = 0;
        this.fechaFin = 0;
        this.productos = [];
    }

    public static CrearPedido(id: string, cliente: Cliente, mesa: Mesa, productos: Producto[],
        fechaInicio: number, fechaFin: number, valorTotal: number, estado: EstadoPedido,
        isActive: boolean)
    {
        let pedido = new Pedido();

        pedido.id = id;
        pedido.cliente = cliente;
        pedido.mesa = mesa;
        pedido.productos = productos;
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

        this.productos.forEach(producto =>
        {
            this.valorTotal = this.valorTotal + producto.precio;
        });
        return this.valorTotal;
    }

    public cambiarEstado()
    {
        switch (this.estado)
        {
            case EstadoPedido.RESERVADO:
                this.estado = EstadoPedido.SOLICITADO;
                break;
            case EstadoPedido.SOLICITADO:
                this.estado = EstadoPedido.PENDIENTE;
                break;
            case EstadoPedido.PENDIENTE:
                this.estado = EstadoPedido.EN_PROGRESO;
                break;
            case EstadoPedido.EN_PROGRESO:
                this.estado = EstadoPedido.ENTREGADO;
                break;
            case EstadoPedido.ENTREGADO:
                this.estado = EstadoPedido.CERRADO;
                break;
        }
    }
}