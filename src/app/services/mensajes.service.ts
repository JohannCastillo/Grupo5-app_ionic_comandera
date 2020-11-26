import { Injectable } from '@angular/core';
import { Mensaje } from '../clases/mensaje';
import { IDatabase } from '../interfaces/IDatabase';
import { AngularFireDatabase } from "@angular/fire/database";

export interface MetadataMensaje
{
  chatId: string,
  mesa: number
}

@Injectable({
  providedIn: 'root'
})
export class MensajesService implements IDatabase<Mensaje>
{
  public static mensajes: Mensaje[] = [];

  constructor(public firebase: AngularFireDatabase) { }

  public generarToken()
  {
    return this.firebase.createPushId();
  }

  crear(mensaje: Mensaje): Promise<any>
  {
    mensaje.id = this.firebase.createPushId();

    return this.firebase.database.ref('mensajes/' + mensaje.id)
      .set(mensaje)
      .catch(console.error);
  }
  actualizar(mensaje: Mensaje): Promise<any>
  {
    return this.firebase.database.ref('mensajes/' + mensaje.id).update(mensaje);
  }

  async leer(): Promise<Mensaje[]>
  {
    let mensajes: Mensaje[] = [];

    const fetch = new Promise<Mensaje[]>(resolve =>
    {
      this.firebase.database.ref('mensajes').on('value', (snapshot) =>
      {
        mensajes = [];
        snapshot.forEach((child) =>
        {
          var data: Mensaje = child.val();
          mensajes.push(Mensaje.CrearMensaje(data.id, data.texto, data.usuario,
            data.fecha, data.chatId, data.mesa));
        });
        MensajesService.mensajes = mensajes.sort(this.ordenarConsultas);
        resolve(MensajesService.mensajes);
      })
    });
    return fetch;
  }

  borrar(mensaje: Mensaje): Promise<any>
  {
    return this.firebase.database.ref("mensajes/" + mensaje.id).remove();
  }

  leerPorId(id: string): Promise<Mensaje>
  {
    return new Promise<Mensaje>(resolve =>
    {
      this.firebase.database.ref(`mensajes/${id}`).once('value').then(snapshot =>
      {
        let data: Mensaje = snapshot.val();
        const mensaje = Mensaje.CrearMensaje(data.id, data.texto, data.usuario,
          data.fecha, data.chatId, data.mesa);
        resolve(mensaje);
      });
    })
  }


  ordenarConsultas(mensajeA: Mensaje, mensajeB: Mensaje): number
  {
    if (Date.parse(mensajeA.fecha) > Date.parse(mensajeB.fecha))
    {
      return 1;
    }
    else if (Date.parse(mensajeA.fecha) < Date.parse(mensajeB.fecha))
    {
      return -1;
    }
    else
    {
      return 0;
    }
  }

}
