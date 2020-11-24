import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from '../clases/cliente';
import { Empleado, TipoEmpleado } from '../clases/empleado';
import { Jefe, TipoJefe } from '../clases/jefe';
import { Usuario } from '../clases/usuario';
import { AuthService } from './auth.service';
import { RolesService } from './roles.service';
import { UIVisualService } from './uivisual.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuardService implements CanActivate
{
  usuario: Usuario;

  constructor(private router: Router,
    private rolesService: RolesService,
    private UIVisual: UIVisualService) { }

  /**
  * Método para validar navegación según perfil del Usuario
  * @param route La ruta hacia la cual se desea navegar
  */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
  {
    this.usuario = AuthService.usuario;
    let activar: boolean = false;
    let ruta;
    // Sólo a modo de ejemplo
    console.log(state);

    if (state)
    {
      ruta = state.url;
      console.log(ruta);

      switch (ruta)
      {
        case "/home/inicio":

          break;
        case "/home":
          if (!this.rolesService.isClientePendiente(this.usuario) ||
            !this.rolesService.isClienteRechazado(this.usuario))
          {
            activar = true;
          }
          else
          {
            UIVisualService.presentToast(`El usuario está en estado ${(<Cliente>this.usuario).estado}`)
          }
          break;
        default:
          activar = true;
          break;
        // Acá se agregarían rutas restantes a validar
      }
    }
    // Se puede navegar a una página definida para caso que no cumpla la validacion
    //this.router.navigate(["tabs"]);
    return activar;
  }







}
