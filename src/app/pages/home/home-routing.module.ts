import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileGuardService } from 'src/app/services/profile-guard.service';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    canActivate: [ProfileGuardService],
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'menu-producto',
        loadChildren: () => import('../menu-producto/menu-producto.module').then(m => m.MenuProductoPageModule)
      },
      {
        path: 'menu-cliente',
        loadChildren: () => import('../menu-cliente/menu-cliente.module').then(m => m.MenuClientePageModule)
      },
      {
        path: 'menu-empleado',
        loadChildren: () => import('../menu-empleado/menu-empleado.module').then(m => m.MenuEmpleadoPageModule)
      },
      {
        path: 'menu-mesa',
        loadChildren: () => import('../menu-mesa/menu-mesa.module').then(m => m.MenuMesaPageModule)
      },
      {
        path: 'menu-jefe',
        loadChildren: () => import('../menu-jefe/menu-jefe.module').then(m => m.MenuJefePageModule)
      },
      {
        path: 'carta',
        loadChildren: () => import('../carta/carta.module').then(m => m.CartaPageModule)
      },
      {
        path: 'menu-pedidos',
        loadChildren: () => import('../menu-pedidos/menu-pedidos.module').then(m => m.MenuPedidosPageModule)
      },
      {
        path: 'menu-pedidos/:id',
        loadChildren: () => import('../menu-pedidos/menu-pedidos.module').then(m => m.MenuPedidosPageModule)
      },
      {
        path: 'menu-reserva',
        loadChildren: () => import('../menu-reserva/menu-reserva.module').then(m => m.MenuReservaPageModule)
      },
      {
        path: 'lista-de-espera',
        loadChildren: () => import('../lista-de-espera/lista-de-espera.module').then(m => m.ListaDeEsperaPageModule)
      },
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: 'info-ingreso',
        loadChildren: () => import('../info-ingreso/info-ingreso.module').then(m => m.InfoIngresoPageModule)
      },
      {
        path: 'info-mesa/:mesa/:pedido',
        loadChildren: () => import('../info-mesa/info-mesa.module').then(m => m.InfoMesaPageModule)
      },
      {
        path: 'sala-chat',
        loadChildren: () => import('../sala-chat/sala-chat.module').then(m => m.SalaChatPageModule)
      },
      {
        path: 'clientes-pendientes',
        loadChildren: () => import('../clientes-pendientes/clientes-pendientes.module').then(m => m.ClientesPendientesPageModule)
      },
      {
        path: 'consultas',
        loadChildren: () => import('../consultas/consultas.module').then(m => m.ConsultasPageModule)
      },
      {
        path: 'encuesta',
        loadChildren: () => import('../encuesta/encuesta.module').then(m => m.EncuestaPageModule)
      },
      {
        path: 'estadisticas',
        loadChildren: () => import('../estadisticas/estadisticas.module').then(m => m.EstadisticasPageModule)
      },
      {
        path: '',
        redirectTo: '/home/inicio',
        pathMatch: 'full'
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
