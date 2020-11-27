import { EstadoAceptacion } from './cliente';
import { Imagen } from './imagen';
import { Usuario } from './usuario';

interface DatosUsuario
{
    id: string,
    foto: Imagen,
    nombre: string,
    apellido: string,
    estado: EstadoAceptacion
}

export class Mensaje
{
    id: string;
    texto: string;
    usuario: DatosUsuario;
    fecha: string;
    chatId: string;
    mesa?: number;

    public static CrearMensaje(id: string, texto: string, usuario: DatosUsuario,
        fecha: string, chatId: string, mesa?: number)
    {
        let mensaje = new Mensaje();

        mensaje.id = id;
        mensaje.texto = texto;
        mensaje.usuario = usuario;
        mensaje.fecha = fecha;
        mensaje.chatId = chatId;
        mensaje.mesa = mesa;

        return mensaje;
    }
}