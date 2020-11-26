import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Sesion } from '../clases/sesion';
import { Usuario } from '../clases/usuario';
import { IDatabase } from '../interfaces/IDatabase';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LogService
{
  public static sesionActual: Sesion;

  constructor(public firebase: AngularFireDatabase) { }

  iniciarSesion(usuario: firebase.User)
  {

    let fechaActual = Date.now() - (new Date().getTimezoneOffset() * 60000);
    let sesion = new Sesion({
      id: this.firebase.createPushId(),
      idUsuario: usuario.uid,
      fechaInicio: fechaActual
    });

    console.log(sesion);
    LogService.sesionActual = sesion;

    // return this.firebase.database.ref('sesiones/' + sesion.id)
    //   .set(sesion)
    //   .catch(console.error);
  }

  cerrarSesion(usuario: firebase.User)
  {
    let fechaActual = Date.now() - (new Date().getTimezoneOffset() * 60000);

    // LogService.sesionActual.fechaFin = fechaActual;
    // console.log(LogService.sesionActual);
    // console.log("Duración", LogService.sesionActual.calcularDuracion());

    // return this.firebase.database.ref("sesiones/" + LogService.sesionActual.id)
    //   .update(LogService.sesionActual);
  }

  actualizar(sesion: Sesion): Promise<any>
  {
    return new Promise((resolve, reject) =>
    {
      resolve(this.firebase.database.ref('sesiones/' + sesion.id).update(sesion));
    })
  }


  leer(): Promise<Sesion[]>
  {
    throw new Error('Method not implemented.');
  }
  borrar(elemento: Sesion): Promise<any>
  {
    throw new Error('Method not implemented.');
  }
  leerPorId(id: string): Promise<Sesion>
  {
    throw new Error('Method not implemented.');
  }
}
