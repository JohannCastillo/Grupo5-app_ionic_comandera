import { Injectable } from "@angular/core";
import { Cliente, EstadoAceptacion } from '../clases/cliente';
import { Empleado, TipoEmpleado } from '../clases/empleado';
import { Jefe, TipoJefe } from '../clases/jefe';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: "root",
})
//TODO: do its functions static
export class RolesService
{
  isCliente(usuario: Usuario): boolean
  {
    return usuario instanceof Cliente;
  }

  isEmpleado(usuario: Usuario): boolean
  {
    return usuario instanceof Empleado;
  }

  isJefe(usuario: Usuario): boolean
  {
    return usuario instanceof Jefe;
  }

  isClientePendiente(usuario: Usuario): boolean
  {
    if (usuario instanceof Cliente)
    {
      return usuario.estado === EstadoAceptacion.Pendiente;
    }
    return false;
  }

  isClienteAceptado(usuario: Usuario): boolean
  {
    if (usuario instanceof Cliente)
    {
      return usuario.estado === EstadoAceptacion.Aceptado;
    }
    return false;
  }

  isClienteRechazado(usuario: Usuario): boolean
  {
    if (usuario instanceof Cliente)
    {
      return usuario.estado === EstadoAceptacion.Rechazado;
    }
    return false;
  }

  isClienteAnonimo(usuario: Usuario): boolean
  {
    if (usuario instanceof Cliente)
    {
      return usuario.estado === EstadoAceptacion.Anonimo;
    }
    return false;
  }

  isEmpleadoBartender(usuario: Usuario): boolean
  {
    if (usuario instanceof Empleado)
    {
      return usuario.tipo === TipoEmpleado.Bartender;
    }
    return false;
  }

  isEmpleadoCocinero(usuario: Usuario): boolean
  {
    if (usuario instanceof Empleado)
    {
      return usuario.tipo === TipoEmpleado.Cocinero;
    }
    return false;
  }

  isEmpleadoMozo(usuario: Usuario): boolean
  {
    if (usuario instanceof Empleado)
    {
      return usuario.tipo === TipoEmpleado.Mozo;
    }
    return false;
  }

  isJefeDueno(usuario: Usuario): boolean
  {
    if (usuario instanceof Jefe)
    {
      return usuario.tipo === TipoJefe.Dueno;
    }
    return false;
  }

  isJefeSupervisor(usuario: Usuario): boolean
  {
    if (usuario instanceof Jefe)
    {
      return usuario.tipo === TipoJefe.Supervisor;
    }
    return false;
  }
}