import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash/splash.component';
import { HeaderComponent } from './header/header.component';
import { FormMesasComponent } from './form-mesas/form-mesas.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoMesasComponent } from './listado-mesas/listado-mesas.component';
import { FormProductoComponent } from './form-producto/form-producto.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { PipesModule } from '../pipes/pipes.module';
import { DetalleMesaComponent } from './detalle-mesa/detalle-mesa.component';
import { HighchartsChartModule } from 'highcharts-angular';

// Usuarios
import { FormClientesComponent } from './form-clientes/form-clientes.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { DetalleClienteComponent } from './detalle-cliente/detalle-cliente.component';
import { FormEmpleadosComponent } from './form-empleados/form-empleados.component';
import { ListadoEmpleadosComponent } from './listado-empleados/listado-empleados.component';
import { DetalleEmpleadoComponent } from './detalle-empleado/detalle-empleado.component';
import { FormJefesComponent } from './form-jefes/form-jefes.component';
import { ListadoJefesComponent } from './listado-jefes/listado-jefes.component';
import { DetalleJefeComponent } from './detalle-jefe/detalle-jefe.component';

import { FormReservaComponent } from './form-reserva/form-reserva.component';
import { ListadoReservasComponent } from './listado-reservas/listado-reservas.component';
import { ListadoPedidosComponent } from './listado-pedidos/listado-pedidos.component';
import { FormPedidoComponent } from './form-pedido/form-pedido.component';
import { DetallePedidoComponent } from './detalle-pedido/detalle-pedido.component';
import { DetalleReservaComponent } from './detalle-reserva/detalle-reserva.component';
import { FotoComponent } from './foto/foto.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { ListaPlatosClienteComponent } from './lista-platos-cliente/lista-platos-cliente.component';
import { EscanerQRComponent } from './escaner/escaner.component';
import { ChatComponent } from './chat/chat.component';
import { PedidoSlideComponent } from './pedido-slide/pedido-slide.component';
import { FacturaComponent } from './factura/factura.component';
import { EncuestaClienteComponent } from './encuesta-cliente/encuesta-cliente.component';
import { EncuestaEmpleadoComponent } from './encuesta-empleado/encuesta-empleado.component';
import { EncuestaSupervisorComponent } from './encuesta-supervisor/encuesta-supervisor.component';
import { PopoverUsuariosComponent } from './popover-usuarios/popover-usuarios.component';
import { MesasMasUsadasComponent } from './widgets/mesas-mas-usadas/mesas-mas-usadas.component';
import { ClientesPorDiaComponent } from './widgets/clientes-por-dia/clientes-por-dia.component';
import { AnonimosPorDiaComponent } from './widgets/anonimos-por-dia/anonimos-por-dia.component';
import { MozoMayorPedidoComponent } from './widgets/mozo-mayor-pedido/mozo-mayor-pedido.component';
import { PlatoMasPedidoComponent } from './widgets/plato-mas-pedido/plato-mas-pedido.component';
import { IngresosClientesComponent } from './widgets/ingresos-clientes/ingresos-clientes.component';
import { ClientesRechazadosPorDiaComponent } from "./widgets/clientes-rechazados-por-dia/clientes-rechazados-por-dia.component";
import { PedidosPorDiaComponent } from "./widgets/pedidos-por-dia/pedidos-por-dia.component";
import { ReservasPorDiaComponent } from "./widgets/reservas-por-dia/reservas-por-dia.component";
import { MapaComponent } from './mapa/mapa.component';
import { ListadoDeliveryComponent } from './listado-delivery/listado-delivery.component';
import { FormDeliveryComponent } from './form-delivery/form-delivery.component';
import { DetalleDeliveryComponent } from './detalle-delivery/detalle-delivery.component';


@NgModule({
  declarations: [
    SplashComponent,
    HeaderComponent,
    FotoComponent,
    EscanerQRComponent,
    ChatComponent,
    MapaComponent,
    // Mesa
    DetalleMesaComponent,
    FormMesasComponent,
    ListadoMesasComponent,
    // Productos
    DetalleProductoComponent,
    FormProductoComponent,
    ListadoProductosComponent,
    //Reservas
    FormReservaComponent,
    ListadoReservasComponent,
    DetalleReservaComponent,
    // Usuarios
    FormClientesComponent,
    ListadoClientesComponent,
    DetalleClienteComponent,
    FormEmpleadosComponent,
    ListadoEmpleadosComponent,
    DetalleEmpleadoComponent,
    FormJefesComponent,
    ListadoJefesComponent,
    DetalleJefeComponent,
    //Pedidos
    ListadoPedidosComponent,
    FormPedidoComponent,
    DetallePedidoComponent,
    ListaPlatosClienteComponent,
    PedidoSlideComponent,
    FacturaComponent,
    //Encuestas
    EncuestaClienteComponent,
    EncuestaEmpleadoComponent,
    EncuestaSupervisorComponent,
    PopoverUsuariosComponent,
    //Graficos
    MesasMasUsadasComponent,
    AnonimosPorDiaComponent,
    ClientesPorDiaComponent,
    MozoMayorPedidoComponent,
    PlatoMasPedidoComponent,
    IngresosClientesComponent,
    ClientesRechazadosPorDiaComponent,
    PedidosPorDiaComponent,
    ReservasPorDiaComponent,
    //Delivery
    ListadoDeliveryComponent,
    FormDeliveryComponent,
    DetalleDeliveryComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    HighchartsChartModule
  ],
  exports: [
    SplashComponent,
    HeaderComponent,
    FotoComponent,
    EscanerQRComponent,
    ChatComponent,
    MapaComponent,
    // Mesa
    FormMesasComponent,
    DetalleMesaComponent,
    ListadoMesasComponent,
    //Reservas
    FormReservaComponent,
    ListadoReservasComponent,
    DetalleReservaComponent,
    // Producto
    DetalleProductoComponent,
    ListadoProductosComponent,
    FormProductoComponent,
    // Usuarios
    FormClientesComponent,
    ListadoClientesComponent,
    DetalleClienteComponent,
    FormEmpleadosComponent,
    ListadoEmpleadosComponent,
    DetalleEmpleadoComponent,
    FormJefesComponent,
    ListadoJefesComponent,
    DetalleJefeComponent,
    //Pedidos
    ListadoPedidosComponent,
    FormPedidoComponent,
    DetallePedidoComponent,
    ListaPlatosClienteComponent,
    PedidoSlideComponent,
    FacturaComponent,
    //Encuestas
    EncuestaClienteComponent,
    EncuestaEmpleadoComponent,
    EncuestaSupervisorComponent,
    PopoverUsuariosComponent,
    //Graficos
    MesasMasUsadasComponent,
    AnonimosPorDiaComponent,
    ClientesPorDiaComponent,
    MozoMayorPedidoComponent,
    PlatoMasPedidoComponent,
    IngresosClientesComponent,
    ClientesRechazadosPorDiaComponent,
    PedidosPorDiaComponent,
    ReservasPorDiaComponent,
    //Delivery
    ListadoDeliveryComponent,
    FormDeliveryComponent,
    DetalleDeliveryComponent,
  ]
})
export class ComponentsModule { }