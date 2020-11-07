(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+jxx":
/*!***************************************************************************!*\
  !*** ./src/app/components/listado-reservas/listado-reservas.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListadoReservasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoReservasComponent", function() { return ListadoReservasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_listado_reservas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./listado-reservas.component.html */ "xHZo");
/* harmony import */ var _listado_reservas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listado-reservas.component.scss */ "kiek");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ListadoReservasComponent = class ListadoReservasComponent {
    constructor(loadingController) {
        this.loadingController = loadingController;
        this.reservas = [];
        this.elegirReserva = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() { this.presentLoading('Cargando reservas...', 2000); }
    seleccionarReserva(reserva) {
        this.elegirReserva.emit(reserva);
    }
    presentLoading(message, duration) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message,
                duration,
                spinner: 'crescent'
            });
            yield loading.present();
        });
    }
};
ListadoReservasComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
ListadoReservasComponent.propDecorators = {
    reservas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    elegirReserva: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
ListadoReservasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-listado-reservas',
        template: _raw_loader_listado_reservas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_listado_reservas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListadoReservasComponent);



/***/ }),

/***/ "/MG/":
/*!*******************************************************************!*\
  !*** ./src/app/components/form-reserva/form-reserva.component.ts ***!
  \*******************************************************************/
/*! exports provided: FormReservaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormReservaComponent", function() { return FormReservaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_form_reserva_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./form-reserva.component.html */ "QBM/");
/* harmony import */ var _form_reserva_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-reserva.component.scss */ "zHf1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_reserva_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/reserva.service */ "QzLQ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_mesa_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/mesa.service */ "R+YK");
/* harmony import */ var _clases_mesa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../clases/mesa */ "sV09");
/* harmony import */ var src_app_clases_cliente__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/clases/cliente */ "tDE8");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highcharts */ "6n/F");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_clases_pedido__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/clases/pedido */ "tUIk");
/* harmony import */ var src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/pedido.service */ "KG2h");
/* harmony import */ var src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/uivisual.service */ "KPCj");














var OpcionForm;
(function (OpcionForm) {
    OpcionForm["ALTA"] = "Alta";
    OpcionForm["MODIFICACION"] = "Modificaci\u00F3n";
    OpcionForm["BAJA"] = "Baja";
})(OpcionForm || (OpcionForm = {}));
let FormReservaComponent = class FormReservaComponent {
    constructor(fb, reservaService, toastController, mesasService, pedidosService, UIVisual) {
        this.fb = fb;
        this.reservaService = reservaService;
        this.toastController = toastController;
        this.mesasService = mesasService;
        this.pedidosService = pedidosService;
        this.UIVisual = UIVisual;
        this.fechaActual = this.getIsoLocalTime(new Date);
        /* this.cliente =   TRAER CLIENTE ACTUAL*/
        this.cliente = src_app_clases_cliente__WEBPACK_IMPORTED_MODULE_9__["Cliente"].CrearCliente('01', 'carlitos', 'gonzales', '123456789', 'none', 'example@gmail.com', true, src_app_clases_cliente__WEBPACK_IMPORTED_MODULE_9__["EstadoAceptacion"].Aceptado, false);
        this.crearForm();
        this.leerPedidos();
        this.leerMesas();
    }
    ngOnChanges() {
        this.rellenarFormulario();
    }
    rellenarFormulario() {
        try {
            if (this.pedido && this.opcion != OpcionForm.ALTA) {
                this.reservaForm.setValue({
                    cliente: this.cliente,
                    mesa: this.pedido.mesa,
                    date: new Date(this.pedido.fechaInicio).toISOString(),
                });
            }
            else {
                this.reservaForm.reset();
            }
            if (this.opcion == OpcionForm.BAJA) {
                this.reservaForm.disable();
            }
            else {
                this.reservaForm.enable();
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    crearForm() {
        this.reservaForm = this.fb.group({
            cliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: this.cliente }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            mesa: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: _clases_mesa__WEBPACK_IMPORTED_MODULE_8__["Mesa"] }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
    }
    crear() {
        if (this.asignarCliente(this.cliente)) {
            let date = this.getDateObject();
            let hora = date.getHours().toString();
            if (date.getMinutes() < 10) {
                hora += ':0' + date.getMinutes().toString();
            }
            else {
                hora += ':' + date.getMinutes().toString();
            }
            let fecha = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
            let timeStamp = this.toTimeStamp(date);
            /* console.log(this.toTimeStamp(date));
            console.log(this.toDate(timeStamp));
            console.log(fecha, hora); */
            let pedido = src_app_clases_pedido__WEBPACK_IMPORTED_MODULE_11__["Pedido"].CrearPedido("_", this.reservaForm.controls['cliente'].value, this.reservaForm.controls['mesa'].value, [], timeStamp, 0, 0, src_app_clases_pedido__WEBPACK_IMPORTED_MODULE_11__["EstadoPedido"].RESERVADO, true);
            // let pedido = Reserva.CrearReserva(
            //   this.reservaForm.controls['mesa'].value,
            //   this.reservaForm.controls['cliente'].value,
            //   fecha,
            //   hora,
            //   timeStamp,
            //   ''
            // )
            // pedido.stringISO = this.reservaForm.controls['date'].value;
            // this.reservaService.crear(pedido).then(() => { this.presentToast('Reserva exitosa.', 2000) });
            this.pedidosService.crear(pedido).then(() => { src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_13__["UIVisualService"].presentToast('Reserva exitosa.'); });
        }
    }
    //a pesar de que el usuario no puede elegir los segundos el stringISO que devuelve ion-datetime siempre es distinto
    //entonces creo un nuevo date pasando los segundos y milisigundos como 0.
    getDateObject() {
        let stringISO = this.reservaForm.controls['date'].value;
        let timeStamp = Date.parse(stringISO);
        let anio = Number.parseInt(Object(highcharts__WEBPACK_IMPORTED_MODULE_10__["dateFormat"])('%Y', timeStamp));
        let mes = Number.parseInt(Object(highcharts__WEBPACK_IMPORTED_MODULE_10__["dateFormat"])('%m', timeStamp));
        let dia = Number.parseInt(Object(highcharts__WEBPACK_IMPORTED_MODULE_10__["dateFormat"])('%e', timeStamp));
        let horas = Number.parseInt(Object(highcharts__WEBPACK_IMPORTED_MODULE_10__["dateFormat"])('%k', timeStamp));
        let minutos = Number.parseInt(Object(highcharts__WEBPACK_IMPORTED_MODULE_10__["dateFormat"])('%M', timeStamp));
        let newDate = new Date(anio, mes - 1, dia, horas, minutos, 0, 0);
        return newDate;
    }
    /**
     * convierte un objeto Date a timeStamp expresado en segundos
     * @param date
     */
    toTimeStamp(date) {
        return date.getTime() / 1000000;
    }
    toDate(timeStamp) {
        let date = new Date(timeStamp * 1000);
        return date;
    }
    leerMesasDisponibles() {
        let date = this.getDateObject();
        let timeStamp = this.toTimeStamp(date);
        let reservasFechaYHoraElegida = this.filtrarReservas(timeStamp);
        this.mesasDisponibles = this.todasLasMesas.filter(mesa => {
            if (reservasFechaYHoraElegida.length >= 1) {
                let estaReservada = false;
                reservasFechaYHoraElegida.forEach(pedido => {
                    /*  console.log(mesa);
                     console.log(pedido.mesa); */
                    if (pedido.mesa.id == mesa.id) {
                        /*  console.log('Mesa ocupada', mesa); */
                        estaReservada = true;
                    }
                });
                if (!estaReservada) {
                    return mesa;
                }
            }
            else {
                return mesa;
            }
        });
    }
    /**
     * Filtra las reservas que hay para el dia elegido y la hora elegida +- 10 minutos.
     * (podrian ser 40, o el tiempo estipulado para que una persona coma)
     * Luego ya se puede reservar otra vez
     * @param timeStamp El timeStamp de la pedido que se quiere hacer.
     */
    filtrarReservas(timeStamp) {
        let tiempoPromedioDeOcupacionDeMesa = this.sumarMinutos(timeStamp, 10);
        let tiempoPromedioDeOcupacionDeMesaNegativo = this.restarMinutos(timeStamp, 10); //para no tomen esa mesa antes del tiempo estipulado para que una persona coma
        console.log('tiempoPromedioDeOcupacionDeMesa', this.toDate(tiempoPromedioDeOcupacionDeMesa).toLocaleString());
        console.log('tiempoPromedioDeOcupacionDeMesaNegativo', this.toDate(tiempoPromedioDeOcupacionDeMesaNegativo).toLocaleString());
        let reservasFechaYHoraElegida = this.pedidos.filter(pedido => {
            if (pedido.fechaInicio >= tiempoPromedioDeOcupacionDeMesaNegativo && pedido.fechaInicio <= tiempoPromedioDeOcupacionDeMesa) {
                /* console.log('tiempoPromedioDeOcupacionDeMesaNegativo', tiempoPromedioDeOcupacionDeMesaNegativo);
                console.log('tiempoPromedioDeOcupacionDeMesa', tiempoPromedioDeOcupacionDeMesa);
                console.log(pedido.timeStamp); */
                return pedido;
            }
        });
        console.log('Reservas para la FechaYHoraElegida', reservasFechaYHoraElegida);
        return reservasFechaYHoraElegida;
    }
    leerPedidos() {
        this.pedidosService.leer().then(pedidos => {
            this.pedidos = pedidos.filter(pedido => pedido.estado == src_app_clases_pedido__WEBPACK_IMPORTED_MODULE_11__["EstadoPedido"].RESERVADO);
        });
    }
    leerMesas() {
        this.mesasService.leer().then(mesas => { this.todasLasMesas = mesas; console.log('Todas las mesas: ', this.todasLasMesas); });
    }
    /**Funcion para agregar minutos a un timeStamp
    * @param timeStamp TimeStamp
    * @param minutosAAgregar Minutos a agregar
    * @returns TimeStamp con los minutos agregados
    */
    sumarMinutos(timeStamp, minutosASumar) {
        let nuevoHorario = timeStamp + (minutosASumar * 60);
        return nuevoHorario;
    }
    restarMinutos(timeStamp, minutosARestar) {
        let nuevoHorario = timeStamp - (minutosARestar * 60);
        return nuevoHorario;
    }
    modificarReserva() {
        console.log("Modificando Reserva-------");
        // let stringISO = this.reservaForm.controls['date'].value;
        let date = this.getDateObject();
        // let hora = date.getHours().toString() + ':' + date.getMinutes().toString();
        // let fecha = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        let timeStamp = this.toTimeStamp(date);
        this.pedido.mesa = this.reservaForm.get("mesa").value;
        this.pedido.fechaInicio = timeStamp;
        // this.pedido.fecha = fecha;
        // this.pedido.hora = hora;
        // this.pedido.timeStamp = timeStamp;
        // this.pedido.stringISO = stringISO;
        // this.reservaService
        //   .actualizar(this.pedido)
        //   .then(() =>
        //   {
        //     this.presentToast("Modificación exitosa", 2000);
        //     console.log("Modificado correctamente.");
        //   })
        //   .catch(() => this.presentToast("No se pudo modificar", 2000));
    }
    borrarReserva() {
        console.log("Baja de pedido------");
        if (this.pedido) {
            this.pedido.isActive = false;
            this.pedidosService
                .actualizar(this.pedido)
                .then(() => {
                src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_13__["UIVisualService"].presentToast("Baja realizada");
                this.reservaForm.reset();
            })
                .catch(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_13__["UIVisualService"].presentToast("No se pudo realizar baja"));
        }
    }
    asignarCliente(cliente) {
        this.reservaForm.controls['cliente'].setValue(cliente);
        if (this.reservaForm.controls['cliente'].value) {
            return true;
        }
        return false;
    }
    getIsoLocalTime(date) {
        let isoLocalTime = date.getFullYear().toString() + '-';
        if ((date.getMonth() + 1) < 10) {
            isoLocalTime += '0' + (date.getMonth() + 1) + '-';
        }
        else {
            isoLocalTime += (date.getMonth() + 1) + '-';
        }
        if (date.getDate() < 10) {
            isoLocalTime += '0' + (date.getDate()) + 'T';
        }
        else {
            isoLocalTime += date.getDate() + 'T';
        }
        isoLocalTime += date.toLocaleTimeString();
        console.log('Mi ISOtimeString', isoLocalTime);
        return isoLocalTime;
    }
    presentToast(message, duration) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration,
            });
            toast.present();
        });
    }
};
FormReservaComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_reserva_service__WEBPACK_IMPORTED_MODULE_5__["ReservaService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _services_mesa_service__WEBPACK_IMPORTED_MODULE_7__["MesaService"] },
    { type: src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_12__["PedidoService"] },
    { type: src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_13__["UIVisualService"] }
];
FormReservaComponent.propDecorators = {
    opcion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    pedido: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
FormReservaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-form-reserva',
        template: _raw_loader_form_reserva_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_form_reserva_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FormReservaComponent);



/***/ }),

/***/ "/PmD":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/detalle-reserva/detalle-reserva.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ion-activatable centrado\">\r\n  <ion-card mode=\"ios\" color=\"dark\">\r\n    <ion-card-header>\r\n      <ion-card-title>Reserva: {{reserva.cliente.nombre}}</ion-card-title>\r\n    </ion-card-header>\r\n\r\n    <ion-card-content>\r\n      <ion-chip color=\"success\" mode=\"ios\" outline=\"true\">\r\n        <ion-label>Reservado para {{reserva.fechaInicio | date: 'shortDate'}} </ion-label>\r\n      </ion-chip>\r\n      <ion-chip color=\"success\" mode=\"ios\" outline=\"true\">\r\n        <ion-label>A las {{reserva.fechaInicio | date: 'shortTime'}} hs</ion-label>\r\n      </ion-chip>\r\n      <ion-chip color=\"success\" mode=\"ios\" outline=\"true\">\r\n        <ion-label>Mesa Seleccionada: {{reserva.mesa.numero}}</ion-label>\r\n      </ion-chip>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n</div>");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Fede\Proyectos\PPS\2020_TP_PPS_Comanda_2_cuatri\src\main.ts */"zUnb");


/***/ }),

/***/ "0/8o":
/*!*****************************************************************!*\
  !*** ./src/app/components/form-mesas/form-mesas.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS1tZXNhcy9mb3JtLW1lc2FzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "0ceX":
/*!*******************************************!*\
  !*** ./src/app/services/roles.service.ts ***!
  \*******************************************/
/*! exports provided: RolesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesService", function() { return RolesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _clases_cliente__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clases/cliente */ "tDE8");
/* harmony import */ var _clases_empleado__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../clases/empleado */ "de4J");
/* harmony import */ var _clases_jefe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../clases/jefe */ "Gy7f");





let RolesService = class RolesService {
    isCliente(usuario) {
        return usuario instanceof _clases_cliente__WEBPACK_IMPORTED_MODULE_2__["Cliente"];
    }
    isEmpleado(usuario) {
        return usuario instanceof _clases_empleado__WEBPACK_IMPORTED_MODULE_3__["Empleado"];
    }
    isJefe(usuario) {
        return usuario instanceof _clases_jefe__WEBPACK_IMPORTED_MODULE_4__["Jefe"];
    }
    isClientePendiente(usuario) {
        if (usuario instanceof _clases_cliente__WEBPACK_IMPORTED_MODULE_2__["Cliente"]) {
            return usuario.estado === _clases_cliente__WEBPACK_IMPORTED_MODULE_2__["EstadoAceptacion"].Pendiente;
        }
        return false;
    }
    isClienteAceptado(usuario) {
        if (usuario instanceof _clases_cliente__WEBPACK_IMPORTED_MODULE_2__["Cliente"]) {
            return usuario.estado === _clases_cliente__WEBPACK_IMPORTED_MODULE_2__["EstadoAceptacion"].Aceptado;
        }
        return false;
    }
    isClienteRechazado(usuario) {
        if (usuario instanceof _clases_cliente__WEBPACK_IMPORTED_MODULE_2__["Cliente"]) {
            return usuario.estado === _clases_cliente__WEBPACK_IMPORTED_MODULE_2__["EstadoAceptacion"].Rechazado;
        }
        return false;
    }
    isClienteAnonimo(usuario) {
        if (usuario instanceof _clases_cliente__WEBPACK_IMPORTED_MODULE_2__["Cliente"]) {
            return usuario.estado == _clases_cliente__WEBPACK_IMPORTED_MODULE_2__["EstadoAceptacion"].Anonimo;
        }
        return false;
    }
    isEmpleadoBartender(usuario) {
        if (usuario instanceof _clases_empleado__WEBPACK_IMPORTED_MODULE_3__["Empleado"]) {
            return usuario.tipo === _clases_empleado__WEBPACK_IMPORTED_MODULE_3__["TipoEmpleado"].Bartender;
        }
        return false;
    }
    isEmpleadoCocinero(usuario) {
        if (usuario instanceof _clases_empleado__WEBPACK_IMPORTED_MODULE_3__["Empleado"]) {
            return usuario.tipo === _clases_empleado__WEBPACK_IMPORTED_MODULE_3__["TipoEmpleado"].Cocinero;
        }
        return false;
    }
    isEmpleadoMozo(usuario) {
        if (usuario instanceof _clases_empleado__WEBPACK_IMPORTED_MODULE_3__["Empleado"]) {
            return usuario.tipo === _clases_empleado__WEBPACK_IMPORTED_MODULE_3__["TipoEmpleado"].Mozo;
        }
        return false;
    }
    isJefeDueno(usuario) {
        if (usuario instanceof _clases_jefe__WEBPACK_IMPORTED_MODULE_4__["Jefe"]) {
            return usuario.tipo === _clases_jefe__WEBPACK_IMPORTED_MODULE_4__["TipoJefe"].Dueno;
        }
        return false;
    }
    isJefeSupervisor(usuario) {
        if (usuario instanceof _clases_jefe__WEBPACK_IMPORTED_MODULE_4__["Jefe"]) {
            return usuario.tipo === _clases_jefe__WEBPACK_IMPORTED_MODULE_4__["TipoJefe"].Supervisor;
        }
        return false;
    }
};
RolesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
    //TODO: do its functions static
], RolesService);



/***/ }),

/***/ "1Qa6":
/*!***********************************!*\
  !*** ./src/app/clases/usuario.ts ***!
  \***********************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
class Usuario {
}


/***/ }),

/***/ "205c":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-mesas/form-mesas.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding-bottom contenido\" color=\"dark\">\r\n  <form #formulario=\"ngForm\">\r\n\r\n    <ion-list mode=\"ios\" lines=\"none\">\r\n\r\n      <ion-list-header color=\"dark\">\r\n        <ion-label>{{opcion}} Mesa</ion-label>\r\n      </ion-list-header>\r\n\r\n      <ion-item color=\"dark\">\r\n        <ion-label position=\"floating\">Número de mesa</ion-label>\r\n        <ion-input type=\"number\" name=\"name\" [(ngModel)]=\"mesa.numero\" [placeholder]=\"mesa.numero\"\r\n                   [disabled]=\"opcion == 'Baja'\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item color=\"dark\">\r\n        <ion-label position=\"floating\">Capacidad de comensales</ion-label>\r\n        <ion-input type=\"number\" name=\"comensales\" [(ngModel)]=\"mesa.comensales\" [placeholder]=\"mesa.comensales\"\r\n                   [pattern]=\"emailPattern\" [disabled]=\"opcion == 'Baja'\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item color=\"dark\">\r\n        <ion-label>Tipo de mesa</ion-label>\r\n        <ion-select value=\"mesa.estado\" multiple=\"false\" name=\"tipoMesa\" [placeholder]=\"mesa.tipo\"\r\n                    [(ngModel)]=\"mesa.tipo\"\r\n                    [disabled]=\"opcion == 'Baja'\" [interfaceOptions]=\"popoverOptions\" interface=\"popover\" required>\r\n          <ion-select-option value=\"Vip\">V.I.P.</ion-select-option>\r\n          <ion-select-option value=\"Normal\">Normal</ion-select-option>\r\n          <ion-select-option value=\"Discapacitados\">Discapacitados</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <ion-item *ngIf=\"imgPreview\" color=\"dark\">\r\n        <img [src]=\"imgPreview | safe: 'url'\" alt=\"Foto de la mesa\">\r\n      </ion-item>\r\n\r\n      <ion-item color=\"dark\">\r\n        <ion-button (click)=\"sacarFoto()\" fill=\"solid\" size=\"medium\" color=\"dark\"\r\n                    [disabled]=\"opcion == 'Baja'\">\r\n          Subir foto\r\n          <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\r\n        </ion-button>\r\n\r\n      </ion-item>\r\n\r\n      <ion-item *ngIf=\"mesa.foto\" color=\"dark\">\r\n        <ion-img [src]=\"mesa.foto.url\"></ion-img>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n  </form>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar class=\"botones-form\" color=\"dark\">\r\n    <!-- Se muestra accion segun tipo de llamado al formulario -->\r\n    <ion-button (click)=\"crearMesa()\" color=\"primary\" expand=\"block\" size=\"large\"\r\n                type=\"submit\" [disabled]=\"formulario.invalid && !mesa.foto\"\r\n                *ngIf=\"opcion == 'Alta'\">\r\n      Crear\r\n    </ion-button>\r\n\r\n    <ion-button (click)=\"modificarMesa()\" color=\"dark\" expand=\"block\" size=\"large\"\r\n                type=\"submit\" [disabled]=\"formulario.invalid\"\r\n                *ngIf=\"opcion == 'Modificación'\">\r\n      Modificar\r\n    </ion-button>\r\n\r\n    <ion-button (click)=\"borrarMesa()\" color=\"dark\" expand=\"block\" size=\"large\"\r\n                type=\"submit\" *ngIf=\"opcion == 'Baja'\">\r\n      Eliminar\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "yxfS");
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.scss */ "oHuE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() { }
};
HeaderComponent.ctorParameters = () => [];
HeaderComponent.propDecorators = {
    titulo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    paginaAnterior: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HeaderComponent);



/***/ }),

/***/ "3/jR":
/*!*********************************************************************!*\
  !*** ./src/app/components/detalle-jefe/detalle-jefe.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWxsZS1qZWZlL2RldGFsbGUtamVmZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "3LTz":
/*!***************************************************************************!*\
  !*** ./src/app/components/detalle-producto/detalle-producto.component.ts ***!
  \***************************************************************************/
/*! exports provided: DetalleProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleProductoComponent", function() { return DetalleProductoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalle_producto_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalle-producto.component.html */ "Ns8T");
/* harmony import */ var _detalle_producto_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalle-producto.component.scss */ "EgiI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/uivisual.service */ "KPCj");






let DetalleProductoComponent = class DetalleProductoComponent {
    constructor(popoverController, UIVisual) {
        this.popoverController = popoverController;
        this.UIVisual = UIVisual;
    }
    ngOnInit() { }
    verFoto(ev, foto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_5__["UIVisualService"].verFoto(ev, foto);
        });
    }
};
DetalleProductoComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_5__["UIVisualService"] }
];
DetalleProductoComponent.propDecorators = {
    producto: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
DetalleProductoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalle-producto',
        template: _raw_loader_detalle_producto_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalle_producto_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetalleProductoComponent);



/***/ }),

/***/ "4kP8":
/*!*******************************************!*\
  !*** ./src/app/pages/carta/carta.page.ts ***!
  \*******************************************/
/*! exports provided: CartaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartaPage", function() { return CartaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_carta_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./carta.page.html */ "Si/e");
/* harmony import */ var _carta_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carta.page.scss */ "RADS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/producto.service */ "GPUG");






let CartaPage = class CartaPage {
    constructor(modalController, productoService, toastController) {
        this.modalController = modalController;
        this.productoService = productoService;
        this.toastController = toastController;
        this.productos = [];
        this.productosElegidos = [];
    }
    ngOnInit() {
        this.generarCarta();
    }
    generarCarta() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.productos = yield this.productoService.traerTodos();
            console.log(this.productos);
        });
    }
    agregar(producto) {
        console.log(producto);
        this.productosElegidos.push(producto);
        this.presentToast(`Se agregó ${producto.nombre} al pedido`);
    }
    cerrar() {
        this.modalController.dismiss(this.productosElegidos);
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration: 2000
            });
            toast.present();
        });
    }
};
CartaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_5__["ProductoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
CartaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-carta',
        template: _raw_loader_carta_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_carta_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CartaPage);



/***/ }),

/***/ "4ud6":
/*!*************************************************************************!*\
  !*** ./src/app/components/detalle-reserva/detalle-reserva.component.ts ***!
  \*************************************************************************/
/*! exports provided: DetalleReservaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleReservaComponent", function() { return DetalleReservaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalle_reserva_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalle-reserva.component.html */ "/PmD");
/* harmony import */ var _detalle_reserva_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalle-reserva.component.scss */ "7/+V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DetalleReservaComponent = class DetalleReservaComponent {
    constructor() { }
    ngOnInit() { }
};
DetalleReservaComponent.ctorParameters = () => [];
DetalleReservaComponent.propDecorators = {
    reserva: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
DetalleReservaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalle-reserva',
        template: _raw_loader_detalle_reserva_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalle_reserva_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetalleReservaComponent);



/***/ }),

/***/ "4ybE":
/*!*************************************************************************************!*\
  !*** ./src/app/components/lista-platos-cliente/lista-platos-cliente.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdGEtcGxhdG9zLWNsaWVudGUvbGlzdGEtcGxhdG9zLWNsaWVudGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "5Phj":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-producto/form-producto.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding-bottom contenido\" color=\"dark\">\r\n  <form  [formGroup]=\"registroForm\" novalidate>\r\n    <ion-list mode=\"ios\" lines=\"none\">\r\n\r\n      <ion-item color=\"dark\">\r\n        <ion-label position=\"floating\">Nombre</ion-label>\r\n        <ion-input type=\"text\" name=\"name\" formControlName=\"nombre\" required>\r\n        </ion-input>\r\n        <div\r\n          *ngIf=\"registroForm.controls['nombre'].invalid && (registroForm.controls['nombre'].dirty || registroForm.controls['nombre'].touched)\"\r\n          class=\"alert alert-danger\">\r\n          <div *ngIf=\"registroForm.controls['nombre'].errors.required\">\r\n            Nombre es requerido.\r\n          </div>\r\n        </div>\r\n      </ion-item>\r\n\r\n\r\n      <ion-item color=\"dark\">\r\n        <ion-label>Descripcion</ion-label>\r\n        <ion-input class=\"form-control\" formControlName=\"descripcion\" type=\"text\" required>\r\n        </ion-input>\r\n        <div\r\n          *ngIf=\"registroForm.controls['descripcion'].invalid && (registroForm.controls['descripcion'].dirty || registroForm.controls['descripcion'].touched)\"\r\n          class=\"alert alert-danger\">\r\n          <div *ngIf=\"registroForm.controls['descripcion'].errors.required\">\r\n            Descricion es requerida.\r\n          </div>\r\n        </div>\r\n      </ion-item>\r\n\r\n      <ion-item color=\"dark\">\r\n        <ion-label position=\"floating\">Tiempo de elaboracion (minutos):</ion-label>\r\n        <ion-input type=\"number\" name=\"name\" formControlName=\"minutosDeElaboracion\" required>\r\n        </ion-input>\r\n        <div\r\n          *ngIf=\"registroForm.controls['minutosDeElaboracion'].invalid && (registroForm.controls['minutosDeElaboracion'].dirty || registroForm.controls['minutosDeElaboracion'].touched)\"\r\n          class=\"alert alert-danger\">\r\n          <div *ngIf=\"registroForm.controls['minutosDeElaboracion'].errors.required\">\r\n            Tiempo de elaboracion es requerido.\r\n          </div>\r\n          <div *ngIf=\"registroForm.controls['minutosDeElaboracion'].errors.pattern\">\r\n            El Tiempo de elaboracion solo debe contener numeros.\r\n          </div>\r\n        </div>\r\n      </ion-item>\r\n\r\n      <ion-item color=\"dark\">\r\n        <ion-label position=\"floating\">Precio:</ion-label>\r\n        <ion-input type=\"number\" name=\"name\" formControlName=\"precio\" required>\r\n        </ion-input>\r\n        <div\r\n          *ngIf=\"registroForm.controls['precio'].invalid && (registroForm.controls['precio'].dirty || registroForm.controls['precio'].touched)\"\r\n          class=\"alert alert-danger\">\r\n          <div *ngIf=\"registroForm.controls['precio'].errors.required\">\r\n            Precio es requerido.\r\n          </div>\r\n          <div *ngIf=\"registroForm.controls['precio'].errors.pattern\">\r\n            El precio solo debe contener numeros.\r\n          </div>\r\n        </div>\r\n      </ion-item>\r\n\r\n      <ion-item color=\"dark\" *ngFor=\"let foto of imgPreview; let i=index\">\r\n        <ion-button (click)=\"subirFoto(i)\" fill=\"solid\" size=\"small\" color=\"dark\"\r\n                    [disabled]=\"opcion == 'Baja'\" >\r\n                    Foto {{i+1}}\r\n          <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\r\n        </ion-button>\r\n        <img *ngIf=\"foto\" [src]=\"foto | safe: 'url'\" (click)=\"subirFoto(i)\">\r\n\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n\r\n\r\n    <ion-button (click)=\"registrar()\" color=\"dark\" expand=\"block\" type=\"submit\"\r\n      [disabled]=\"registroForm.pristine || registroForm.invalid\" *ngIf=\"opcion == 'Alta'\">\r\n      Crear\r\n    </ion-button>\r\n\r\n    <ion-button (click)=\"modificarProducto()\" color=\"dark\" expand=\"block\" type=\"submit\"\r\n      [disabled]=\"registroForm.pristine || registroForm.invalid\" *ngIf=\"opcion == 'Modificación'\">\r\n      Modificar\r\n    </ion-button>\r\n\r\n    <ion-button (click)=\"borrarProducto()\" color=\"dark\" expand=\"block\" type=\"submit\" *ngIf=\"opcion == 'Baja'\">\r\n      Eliminar\r\n    </ion-button>\r\n  </form>\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "5RfW":
/*!**********************************************!*\
  !*** ./src/app/services/empleado.service.ts ***!
  \**********************************************/
/*! exports provided: EmpleadoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpleadoService", function() { return EmpleadoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _clases_empleado__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../clases/empleado */ "de4J");
var EmpleadoService_1;




let EmpleadoService = EmpleadoService_1 = class EmpleadoService {
    constructor(firebase) {
        this.firebase = firebase;
    }
    crear(empleado, uid) {
        empleado.id = uid;
        //TODO: eliminar cuando tenga implementado la carga de imagenes
        empleado.foto = "-";
        empleado.isActive = true;
        console.log(empleado);
        return this.firebase.database
            .ref("empleados/" + empleado.id)
            .set(empleado)
            .catch(console.error);
    }
    actualizar(empleado) {
        return this.firebase.database
            .ref("empleados/" + empleado.id)
            .update(empleado);
    }
    borradoLogico(empleado) {
        empleado.isActive = false;
        return this.actualizar(empleado);
    }
    leer() {
        let empleados = [];
        console.info("Fetch de todos los empleados");
        return new Promise((resolve) => {
            this.firebase.database.ref("empleados").on("value", (snapshot) => {
                empleados = [];
                snapshot.forEach((child) => {
                    var data = child.val();
                    empleados.push(_clases_empleado__WEBPACK_IMPORTED_MODULE_3__["Empleado"].CrearEmpleado(data.id, data.nombre, data.apellido, data.dni, data.foto, data.email, data.isActive, data.tipo, data.cuil));
                });
                EmpleadoService_1.empleados = empleados.filter(e => e.isActive);
                resolve(EmpleadoService_1.empleados);
            });
        });
    }
    leerPorID(id) {
        return new Promise(resolve => {
            this.firebase.database.ref(`empleados/${id}`).once('value').then(snapshot => {
                if (snapshot.val() === null || snapshot.val() === undefined) {
                    console.log("Empleado not found");
                    resolve(null);
                }
                else {
                    let data = snapshot.val();
                    const empleado = _clases_empleado__WEBPACK_IMPORTED_MODULE_3__["Empleado"].CrearEmpleado(data.id, data.nombre, data.apellido, data.dni, data.foto, data.email, data.isActive, data.tipo, data.cuil);
                    resolve(empleado);
                }
            });
        });
    }
};
EmpleadoService.empleados = [];
EmpleadoService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
];
EmpleadoService = EmpleadoService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], EmpleadoService);



/***/ }),

/***/ "6P09":
/*!*******************************************************!*\
  !*** ./src/app/components/splash/splash.component.ts ***!
  \*******************************************************/
/*! exports provided: SplashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashComponent", function() { return SplashComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_splash_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./splash.component.html */ "hSM4");
/* harmony import */ var _splash_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splash.component.scss */ "U6He");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let SplashComponent = class SplashComponent {
    constructor(viewCtrl, splashScreen) {
        this.viewCtrl = viewCtrl;
        this.splashScreen = splashScreen;
        this.splashScreen.hide();
        setTimeout(() => {
            this.viewCtrl.dismiss();
        }, 5000);
    }
    ngOnInit() { }
};
SplashComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"] }
];
SplashComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-splash',
        template: _raw_loader_splash_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_splash_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SplashComponent);



/***/ }),

/***/ "7+Lc":
/*!*************************************************************************!*\
  !*** ./src/app/components/detalle-cliente/detalle-cliente.component.ts ***!
  \*************************************************************************/
/*! exports provided: DetalleClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleClienteComponent", function() { return DetalleClienteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalle_cliente_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalle-cliente.component.html */ "Ia4I");
/* harmony import */ var _detalle_cliente_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalle-cliente.component.scss */ "UMFH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DetalleClienteComponent = class DetalleClienteComponent {
    constructor() { }
    ngOnInit() { }
    //TODO: tomar foto del cliente
    sacarFoto() {
        console.log("Sacar foto");
    }
};
DetalleClienteComponent.ctorParameters = () => [];
DetalleClienteComponent.propDecorators = {
    cliente: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
DetalleClienteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalle-cliente',
        template: _raw_loader_detalle_cliente_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalle_cliente_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetalleClienteComponent);



/***/ }),

/***/ "7/+V":
/*!***************************************************************************!*\
  !*** ./src/app/components/detalle-reserva/detalle-reserva.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWxsZS1yZXNlcnZhL2RldGFsbGUtcmVzZXJ2YS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "7mdY":
/*!**********************************!*\
  !*** ./src/app/clases/imagen.ts ***!
  \**********************************/
/*! exports provided: Imagen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Imagen", function() { return Imagen; });
class Imagen {
    Imagen() {
    }
    static CrearImagen(id, base64, url, fecha, rutaStorage) {
        let imagen = new Imagen();
        imagen.id = id;
        imagen.base64 = base64;
        imagen.url = url;
        imagen.fecha = fecha;
        imagen.rutaStorage = rutaStorage;
        return imagen;
    }
}


/***/ }),

/***/ "7pTb":
/*!*********************************************************************!*\
  !*** ./src/app/components/listado-jefes/listado-jefes.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListadoJefesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoJefesComponent", function() { return ListadoJefesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_listado_jefes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./listado-jefes.component.html */ "OWJL");
/* harmony import */ var _listado_jefes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listado-jefes.component.scss */ "aTCf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ListadoJefesComponent = class ListadoJefesComponent {
    constructor(loadingController) {
        this.loadingController = loadingController;
        this.jefes = [];
        this.seleccionarJefe = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.loadingTime = 2000;
    }
    ngOnInit() {
        this.presentLoading('Cargando jefes...');
    }
    /**
     * Método para enviar jefe seleccionado
     * @param jefe Jefe seleccionado
     */
    seleccionarJefeDelListado(jefe) {
        this.seleccionarJefe.emit(jefe);
    }
    //TODO: do this method generic for all lists
    presentLoading(message, duration) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (duration === undefined || duration <= 0) {
                duration = this.loadingTime;
            }
            const loading = yield this.loadingController.create({
                message,
                duration,
                spinner: 'crescent'
            });
            yield loading.present();
        });
    }
};
ListadoJefesComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
ListadoJefesComponent.propDecorators = {
    jefes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    seleccionarJefe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
ListadoJefesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-listado-jefes',
        template: _raw_loader_listado_jefes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_listado_jefes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListadoJefesComponent);



/***/ }),

/***/ "97Z+":
/*!******************************************!*\
  !*** ./src/app/services/jefe.service.ts ***!
  \******************************************/
/*! exports provided: JefeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JefeService", function() { return JefeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _clases_jefe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../clases/jefe */ "Gy7f");
var JefeService_1;




let JefeService = JefeService_1 = class JefeService {
    constructor(firebase) {
        this.firebase = firebase;
    }
    crear(jefe, uid) {
        jefe.id = uid;
        //TODO: eliminar cuando tenga implementado la carga de imagenes
        jefe.foto = "-";
        jefe.isActive = true;
        console.log(jefe);
        return this.firebase.database
            .ref("jefes/" + jefe.id)
            .set(jefe)
            .catch(console.error);
    }
    actualizar(jefe) {
        return this.firebase.database
            .ref("jefes/" + jefe.id)
            .update(jefe);
    }
    borradoLogico(jefe) {
        jefe.isActive = false;
        return this.actualizar(jefe);
    }
    leer() {
        let jefes = [];
        console.info("Fetch de todos los jefes");
        return new Promise((resolve) => {
            this.firebase.database.ref("jefes").on("value", (snapshot) => {
                jefes = [];
                snapshot.forEach((child) => {
                    var data = child.val();
                    jefes.push(_clases_jefe__WEBPACK_IMPORTED_MODULE_3__["Jefe"].CrearJefe(data.id, data.nombre, data.apellido, data.dni, data.foto, data.email, data.isActive, data.tipo, data.cuil));
                });
                JefeService_1.jefes = jefes.filter(e => e.isActive);
                resolve(JefeService_1.jefes);
            });
        });
    }
    leerPorID(id) {
        return new Promise(resolve => {
            this.firebase.database.ref(`jefes/${id}`).once('value').then(snapshot => {
                if (snapshot.val() === null || snapshot.val() === undefined) {
                    console.log("Jefe not found");
                    resolve(null);
                }
                else {
                    let data = snapshot.val();
                    const jefe = _clases_jefe__WEBPACK_IMPORTED_MODULE_3__["Jefe"].CrearJefe(data.id, data.nombre, data.apellido, data.dni, data.foto, data.email, data.isActive, data.tipo, data.cuil);
                    resolve(jefe);
                }
            });
        });
    }
};
JefeService.jefes = [];
JefeService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
];
JefeService = JefeService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], JefeService);



/***/ }),

/***/ "9fm6":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/escaner/escaner.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tab-button (click)=\"escanear()\"\r\n                *ngIf=\"rolService.isClienteAceptado(usuario) || \r\nrolService.isClienteAnonimo(usuario) || \r\nrolService.isEmpleadoMozo(usuario)\" color=\"success\">\r\n  <ion-icon name=\"qr-code-sharp\"></ion-icon>\r\n  <ion-label>Escáner QR</ion-label>\r\n</ion-tab-button>");

/***/ }),

/***/ "9smp":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-clientes/form-clientes.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding-bottom contenido\" color=\"dark\">\r\n  <form #formulario=\"ngForm\">\r\n\r\n    <ion-list mode=\"ios\">\r\n\r\n      <ion-list-header>\r\n        <ion-label>{{opcion}} Cliente</ion-label>\r\n      </ion-list-header>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Nombre</ion-label>\r\n        <ion-input type=\"text\" name=\"nombre\" [(ngModel)]=\"cliente.nombre\" [placeholder]=\"cliente.nombre\"\r\n                   [disabled]=\"opcion == 'Baja'\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Apellido</ion-label>\r\n        <ion-input type=\"text\" name=\"apellido\" [(ngModel)]=\"cliente.apellido\" [placeholder]=\"cliente.apellido\"\r\n                   [disabled]=\"opcion == 'Baja'\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">DNI</ion-label>\r\n        <ion-input type=\"number\" name=\"dni\" [(ngModel)]=\"cliente.dni\" [placeholder]=\"cliente.dni\"\r\n                   [disabled]=\"opcion == 'Baja'\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Email</ion-label>\r\n      <ion-input type=\"text\" name=\"email\" [(ngModel)]=\"cliente.email\" [placeholder]=\"cliente.email\"\r\n                 [disabled]=\"opcion == 'Baja'\" required>\r\n      </ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Contraseña</ion-label>\r\n      <ion-input type=\"password\" name=\"password\" [(ngModel)]=\"cliente.password\" [placeholder]=\"cliente.password\"\r\n                 [disabled]=\"opcion == 'Baja'\" required>\r\n      </ion-input>\r\n    </ion-item>\r\n\r\n\r\n  </form>\r\n  <!-- Se muestra accion segun tipo de llamado al formulario -->\r\n  <ion-button (click)=\"altaCliente()\" color=\"dark\" expand=\"block\" type=\"submit\" size=\"large\"\r\n              [disabled]=\"formulario.invalid\" *ngIf=\"opcion == 'Alta'\">\r\n    Crear\r\n  </ion-button>\r\n\r\n  <ion-button (click)=\"modificarCliente()\" color=\"dark\" expand=\"block\" type=\"submit\" size=\"large\"\r\n              [disabled]=\"formulario.invalid\" *ngIf=\"opcion == 'Modificación'\">\r\n    Modificar\r\n  </ion-button>\r\n\r\n  <ion-button (click)=\"borrarCliente()\" color=\"dark\" expand=\"block\" type=\"submit\" size=\"large\"\r\n              *ngIf=\"opcion == 'Baja'\">\r\n    Eliminar\r\n  </ion-button>\r\n</ion-content>");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyD_MLjLqoz_-P9E7My_LxpTwVd2ncrmZy8",
        authDomain: "tp2-comanda-pps.firebaseapp.com",
        databaseURL: "https://tp2-comanda-pps.firebaseio.com",
        projectId: "tp2-comanda-pps",
        storageBucket: "tp2-comanda-pps.appspot.com",
        messagingSenderId: "186663344195",
        appId: "1:186663344195:web:98d1d508b5aa7b301b1cf6"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BL/c":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/listado-clientes/listado-clientes.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid fixed>\r\n  <ion-row class=\"contenido\" *ngFor=\"let cliente of clientes\">\r\n    <ion-col size=\"12\" size-lg=\"6\" (click)=\"seleccionarClienteDelListado(cliente)\" color=\"dark\"\r\n             class=\"ion-justify-content-center\">\r\n\r\n      <app-detalle-cliente [cliente]=\"cliente\"></app-detalle-cliente>\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ "CNyR":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-empleados/form-empleados.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding-bottom contenido\" color=\"dark\">\r\n  <form #formulario=\"ngForm\">\r\n\r\n    <ion-list mode=\"ios\" lines=\"none\">\r\n\r\n      <ion-list-header>\r\n        <ion-label>{{opcion}} Empleado</ion-label>\r\n      </ion-list-header>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Nombre</ion-label>\r\n        <ion-input type=\"text\" name=\"nombre\" [(ngModel)]=\"empleado.nombre\" [placeholder]=\"empleado.nombre\"\r\n                   [disabled]=\"opcion == 'Baja'\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Apellido</ion-label>\r\n        <ion-input type=\"text\" name=\"apellido\" [(ngModel)]=\"empleado.apellido\" [placeholder]=\"empleado.apellido\"\r\n                   [disabled]=\"opcion == 'Baja'\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">DNI</ion-label>\r\n        <ion-input type=\"number\" name=\"dni\" [(ngModel)]=\"empleado.dni\" [placeholder]=\"empleado.dni\"\r\n                   [disabled]=\"opcion == 'Baja'\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">CUIL</ion-label>\r\n        <ion-input type=\"string\" name=\"cuil\" [(ngModel)]=\"empleado.cuil\" [placeholder]=\"empleado.cuil\"\r\n                   [disabled]=\"opcion == 'Baja'\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Email</ion-label>\r\n        <ion-input type=\"text\" name=\"email\" [(ngModel)]=\"empleado.email\" [placeholder]=\"empleado.email\"\r\n                   [disabled]=\"opcion == 'Baja'\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Contraseña</ion-label>\r\n        <ion-input type=\"password\" name=\"password\" [(ngModel)]=\"empleado.password\" [placeholder]=\"empleado.password\"\r\n                   [disabled]=\"opcion == 'Baja'\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-item>\r\n      <ion-label>Tipo de empleado</ion-label>\r\n      <ion-select value=\"empleado.tipo\" multiple=\"false\" name=\"tipoEmpleado\" [placeholder]=\"empleado.tipo\"\r\n                  [(ngModel)]=\"empleado.tipo\" [disabled]=\"opcion == 'Baja'\" [interfaceOptions]=\"popoverOptions\"\r\n                  interface=\"popover\"\r\n                  required>\r\n        <ion-select-option value=\"Cocinero\">Cocinero</ion-select-option>\r\n        <ion-select-option value=\"Bartender\">Bartender</ion-select-option>\r\n        <ion-select-option value=\"Mozo\">Mozo</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n  </form>\r\n  <!-- Se muestra accion segun tipo de llamado al formulario -->\r\n  <ion-button (click)=\"altaEmpleado()\" color=\"dark\" expand=\"block\" type=\"submit\" size=\"large\"\r\n              [disabled]=\"formulario.invalid\" *ngIf=\"opcion == 'Alta'\">\r\n    Crear\r\n  </ion-button>\r\n\r\n  <ion-button (click)=\"modificarEmpleado()\" color=\"dark\" expand=\"block\" type=\"submit\" size=\"large\"\r\n              [disabled]=\"formulario.invalid\" *ngIf=\"opcion == 'Modificación'\">\r\n    Modificar\r\n  </ion-button>\r\n\r\n  <ion-button (click)=\"borrarEmpleado()\" color=\"dark\" expand=\"block\" type=\"submit\" size=\"large\"\r\n              *ngIf=\"opcion == 'Baja'\">\r\n    Eliminar\r\n  </ion-button>\r\n</ion-content>");

/***/ }),

/***/ "Ce3Y":
/*!*****************************************************************************!*\
  !*** ./src/app/components/listado-productos/listado-productos.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ListadoProductosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoProductosComponent", function() { return ListadoProductosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_listado_productos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./listado-productos.component.html */ "vd6x");
/* harmony import */ var _listado_productos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listado-productos.component.scss */ "XfQS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ListadoProductosComponent = class ListadoProductosComponent {
    constructor(loadingController, modalController) {
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.productos = [];
        this.elegirProducto = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() { this.presentLoading('Cargando productos...', 2000); }
    seleccionarProducto(producto) {
        this.elegirProducto.emit(producto);
    }
    presentLoading(message, duration) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message,
                duration,
                spinner: 'crescent'
            });
            yield loading.present();
        });
    }
};
ListadoProductosComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ListadoProductosComponent.propDecorators = {
    productos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    elegirProducto: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
ListadoProductosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-listado-productos',
        template: _raw_loader_listado_productos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_listado_productos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListadoProductosComponent);



/***/ }),

/***/ "DDQj":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/listado-mesas/listado-mesas.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid fixed>\r\n  <ion-row class=\"contenido\" *ngFor=\"let mesa of mesas\">\r\n    <ion-col size=\"12\" size-lg=\"6\" (click)=\"seleccionarMesa(mesa)\" color=\"dark\"\r\n             class=\"ion-justify-content-center\">\r\n\r\n      <app-detalle-mesa [mesa]=\"mesa\"></app-detalle-mesa>\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ "DemK":
/*!***********************************************************!*\
  !*** ./src/app/components/escaner/escaner.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXNjYW5lci9lc2NhbmVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "EgiI":
/*!*****************************************************************************!*\
  !*** ./src/app/components/detalle-producto/detalle-producto.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWxsZS1wcm9kdWN0by9kZXRhbGxlLXByb2R1Y3RvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "GPUG":
/*!**********************************************!*\
  !*** ./src/app/services/producto.service.ts ***!
  \**********************************************/
/*! exports provided: ProductoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoService", function() { return ProductoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _clases_producto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../clases/producto */ "VJYV");
/* harmony import */ var _codigo_qr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./codigo-qr.service */ "qko+");
var ProductoService_1;





let ProductoService = ProductoService_1 = class ProductoService {
    constructor(db, escanerQR) {
        this.db = db;
        this.escanerQR = escanerQR;
        this.rutaDB = '/productos';
        this.referenciaProductos = null;
        try {
            this.referenciaProductos = db.list(this.rutaDB);
        }
        catch (error) {
            console.log("Error: ", error);
        }
    }
    traerTodos() {
        try {
            let productos = [];
            const fetch = new Promise(resolve => {
                this.db.database.ref('productos').on('value', (snapshot) => {
                    productos = [];
                    snapshot.forEach((child) => {
                        var data = child.val();
                        productos.push(new _clases_producto__WEBPACK_IMPORTED_MODULE_3__["Producto"](data));
                    });
                    ProductoService_1.productos = productos.filter(producto => producto.isActive == true);
                    resolve(ProductoService_1.productos);
                });
            });
            return fetch;
        }
        catch (error) {
            console.log("Error: ", error);
        }
    }
    registrar(producto) {
        try {
            producto.isActive = true;
            return this.referenciaProductos
                .push(producto)
                .then((snapshot) => producto.id = snapshot.key)
                .then(() => this.actualizar(producto))
                .catch(console.error);
        }
        catch (error) {
            console.log("No se pudo registrar: ", error);
        }
    }
    actualizar(producto) {
        return new Promise((resolve, reject) => {
            resolve(this.db.database.ref('productos/' + producto.id)
                .update(producto)
                .then(() => console.info("Actualizacion exitosa"))
                .catch(() => console.info("No se pudo actualizar")));
        });
    }
    eliminar(producto) {
        try {
            producto.isActive = false;
            return this.actualizar(producto)
                .then(() => {
                console.info("Borrado");
            });
        }
        catch (error) {
            console.log("No se pudo Borrar: ", error);
        }
    }
};
ProductoService.productos = [];
ProductoService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _codigo_qr_service__WEBPACK_IMPORTED_MODULE_4__["CodigoQRService"] }
];
ProductoService = ProductoService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductoService);



/***/ }),

/***/ "Gy7f":
/*!********************************!*\
  !*** ./src/app/clases/jefe.ts ***!
  \********************************/
/*! exports provided: TipoJefe, Jefe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoJefe", function() { return TipoJefe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jefe", function() { return Jefe; });
/* harmony import */ var _usuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuario */ "1Qa6");

var TipoJefe;
(function (TipoJefe) {
    TipoJefe["Dueno"] = "Dueno";
    TipoJefe["Supervisor"] = "Supervisor";
})(TipoJefe || (TipoJefe = {}));
class Jefe extends _usuario__WEBPACK_IMPORTED_MODULE_0__["Usuario"] {
    static CrearJefe(id, nombre, apellido, dni, foto, email, isActive, tipo, cuil) {
        let jefe = new Jefe();
        jefe.id = id;
        jefe.nombre = nombre;
        jefe.apellido = apellido;
        jefe.dni = dni;
        jefe.foto = foto;
        jefe.email = email;
        jefe.isActive = isActive;
        jefe.tipo = tipo;
        jefe.cuil = cuil;
        return jefe;
    }
}


/***/ }),

/***/ "IDAD":
/*!*****************************************************************!*\
  !*** ./src/app/components/form-pedido/form-pedido.component.ts ***!
  \*****************************************************************/
/*! exports provided: FormPedidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPedidoComponent", function() { return FormPedidoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_form_pedido_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./form-pedido.component.html */ "cM4s");
/* harmony import */ var _form_pedido_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-pedido.component.scss */ "YYJ8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_clases_pedido__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/clases/pedido */ "tUIk");
/* harmony import */ var src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/pedido.service */ "KG2h");
/* harmony import */ var src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/uivisual.service */ "KPCj");








var OpcionForm;
(function (OpcionForm) {
    OpcionForm["ALTA"] = "Alta";
    OpcionForm["MODIFICACION"] = "Modificaci\u00F3n";
    OpcionForm["BAJA"] = "Baja";
})(OpcionForm || (OpcionForm = {}));
let FormPedidoComponent = class FormPedidoComponent {
    constructor(pedidoService, modalController, toastController, UIVisual) {
        this.pedidoService = pedidoService;
        this.modalController = modalController;
        this.toastController = toastController;
        this.UIVisual = UIVisual;
        this.opcion = OpcionForm.ALTA;
        this.pedido = new src_app_clases_pedido__WEBPACK_IMPORTED_MODULE_5__["Pedido"]();
    }
    ngOnInit() {
        if (this.opcion == 'Alta') {
            this.pedido = new src_app_clases_pedido__WEBPACK_IMPORTED_MODULE_5__["Pedido"]();
        }
    }
    alta() {
        console.log("Alta pedido");
        console.log(this.pedido);
        if (this.pedido && !this.pedido.id) {
            // Alta de mesa en DB
            this.pedidoService.crear(this.pedido)
                .then(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"].presentToast('Alta exitosa'))
                .catch(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"].presentToast('No se pudo realizar el alta'));
        }
    }
    modificacion() {
        if (this.pedido) {
            this.pedidoService.actualizar(this.pedido)
                .then(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"].presentToast('Modificación exitosa'))
                .catch(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"].presentToast('No se pudo modificar'));
        }
        console.log("Modificacion pedido");
        console.log(this.pedido);
    }
    cierre() {
        console.log("Baja pedido");
        console.log(this.pedido);
        if (this.pedido) {
            this.pedidoService.borrar(this.pedido)
                .then(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"].presentToast('Baja realizada'))
                .catch(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"].presentToast('No se pudo realizar baja'));
        }
    }
    mostrarCarta() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("Ver carta");
            const data = yield src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"].verCarta();
            this.pedido.productos.push(...data);
            this.pedido.calcularTotal();
            console.log(data);
        });
    }
    actualizarPlatos(productos) {
        this.pedido.productos = productos;
    }
    mostrarPlatos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"].verPlatos(this.pedido.productos);
        });
    }
};
FormPedidoComponent.ctorParameters = () => [
    { type: src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_6__["PedidoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"] }
];
FormPedidoComponent.propDecorators = {
    reserva: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    opcion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    pedido: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
FormPedidoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-form-pedido',
        template: _raw_loader_form_pedido_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_form_pedido_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FormPedidoComponent);



/***/ }),

/***/ "IT5Z":
/*!*********************************************************************!*\
  !*** ./src/app/components/form-clientes/form-clientes.component.ts ***!
  \*********************************************************************/
/*! exports provided: FormClientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormClientesComponent", function() { return FormClientesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_form_clientes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./form-clientes.component.html */ "9smp");
/* harmony import */ var _form_clientes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-clientes.component.scss */ "Pofr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_clases_cliente__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/clases/cliente */ "tDE8");
/* harmony import */ var src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cliente.service */ "teE5");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/uivisual.service */ "KPCj");








var OpcionForm;
(function (OpcionForm) {
    OpcionForm["ALTA"] = "Alta";
    OpcionForm["MODIFICACION"] = "Modificaci\u00F3n";
    OpcionForm["BAJA"] = "Baja";
})(OpcionForm || (OpcionForm = {}));
let FormClientesComponent = class FormClientesComponent {
    constructor(clienteService, authService, UIVisual) {
        this.clienteService = clienteService;
        this.authService = authService;
        this.UIVisual = UIVisual;
    }
    ngOnInit() {
        if (this.opcion == "Alta") {
            this.cliente = new src_app_clases_cliente__WEBPACK_IMPORTED_MODULE_4__["Cliente"]();
        }
    }
    /**
     * Alta de cliente
     */
    altaCliente() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.cliente && !this.cliente.id) {
                this.authService
                    .onRegisterCliente(this.cliente)
                    .then(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"].presentToast('Alta exitosa'))
                    .catch(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"].presentToast('No se pudo realizar el alta'));
            }
            else {
                src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"].presentToast('Cliente existente');
            }
        });
    }
    /**
     *  Modificacion de cliente
     */
    modificarCliente() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Modificar Cliente');
            if (this.cliente) {
                // Se actualiza Mesa en DB
                this.clienteService
                    .actualizar(this.cliente)
                    .then(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"].presentToast('Modificación exitosa'))
                    .catch(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"].presentToast('No se pudo modificar'));
            }
        });
    }
    /**
     * Baja lógica de cliente
     */
    borrarCliente() {
        console.log("Baja cliente");
        if (this.cliente) {
            this.clienteService
                .borradoLogico(this.cliente)
                .then(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"].presentToast('Baja realizada'))
                .catch(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"].presentToast('No se pudo realizar baja'));
        }
    }
};
FormClientesComponent.ctorParameters = () => [
    { type: src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_5__["ClienteService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"] }
];
FormClientesComponent.propDecorators = {
    opcion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    cliente: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
FormClientesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-form-clientes",
        template: _raw_loader_form_clientes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_form_clientes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FormClientesComponent);



/***/ }),

/***/ "Ia4I":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/detalle-cliente/detalle-cliente.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ion-activatable centrado\">\r\n  <ion-card mode=\"ios\" color=\"dark\">\r\n    <ion-card-header>\r\n      <ion-card-title>Cliente: {{ cliente.nombre }} {{ cliente.apellido }}</ion-card-title>\r\n    </ion-card-header>\r\n\r\n    <!-- TODO: show images-->\r\n    <!--ion-img [src]=\"cliente.foto.url\"></ion-img-->\r\n\r\n    <ion-card-content>\r\n      <ion-chip color=\"light\" mode=\"ios\" outline=\"true\">\r\n        <ion-label>DNI:{{ cliente.dni }}</ion-label>\r\n      </ion-chip>\r\n    </ion-card-content>\r\n    <ion-button (click)=\"sacarFoto()\" size=\"large\" expand=\"block\" fill=\"solid\" color=\"success\">\r\n      Sacar foto\r\n    </ion-button>\r\n  </ion-card>\r\n</div>");

/***/ }),

/***/ "Iw3i":
/*!***************************************************************************!*\
  !*** ./src/app/components/listado-clientes/listado-clientes.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListadoClientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoClientesComponent", function() { return ListadoClientesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_listado_clientes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./listado-clientes.component.html */ "BL/c");
/* harmony import */ var _listado_clientes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listado-clientes.component.scss */ "MvHx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ListadoClientesComponent = class ListadoClientesComponent {
    constructor(loadingController) {
        this.loadingController = loadingController;
        this.clientes = [];
        this.seleccionarCliente = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.loadingTime = 2000;
    }
    ngOnInit() {
        this.presentLoading('Cargando clientes...');
    }
    /**
     * Método para enviar cliente seleccionado
     * @param cliente Cliente seleccionado
     */
    seleccionarClienteDelListado(cliente) {
        this.seleccionarCliente.emit(cliente);
    }
    //TODO: do this method generic for all lists
    presentLoading(message, duration) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (duration === undefined || duration <= 0) {
                duration = this.loadingTime;
            }
            const loading = yield this.loadingController.create({
                message,
                duration,
                spinner: 'crescent'
            });
            yield loading.present();
        });
    }
};
ListadoClientesComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
ListadoClientesComponent.propDecorators = {
    clientes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    seleccionarCliente: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
ListadoClientesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-listado-clientes',
        template: _raw_loader_listado_clientes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_listado_clientes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListadoClientesComponent);



/***/ }),

/***/ "K+8f":
/*!*********************************************************************!*\
  !*** ./src/app/components/form-producto/form-producto.component.ts ***!
  \*********************************************************************/
/*! exports provided: FormProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProductoComponent", function() { return FormProductoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_form_producto_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./form-producto.component.html */ "5Phj");
/* harmony import */ var _form_producto_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-producto.component.scss */ "ulBd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_clases_producto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/clases/producto */ "VJYV");
/* harmony import */ var src_app_services_imagen_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/imagen.service */ "bSsp");
/* harmony import */ var src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/producto.service */ "GPUG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_clases_imagen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/clases/imagen */ "7mdY");










var OpcionForm;
(function (OpcionForm) {
    OpcionForm["ALTA"] = "Alta";
    OpcionForm["MODIFICACION"] = "Modificaci\u00F3n";
    OpcionForm["BAJA"] = "Baja";
})(OpcionForm || (OpcionForm = {}));
let FormProductoComponent = class FormProductoComponent {
    constructor(fb, productoService, imagenService, toastController, loadingController) {
        this.fb = fb;
        this.productoService = productoService;
        this.imagenService = imagenService;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.popoverOptions = {
            header: "Seleccione el tipo",
            translucent: true,
            cancelText: "Cerrar",
            okText: "Guardar",
        };
        this.fotos = new Array(3);
        this.imgPreview = new Array(3);
        this.crearForm();
    }
    ngOnChanges() {
        this.rellenarFormulario();
    }
    rellenarFormulario() {
        try {
            if (this.producto && this.opcion != OpcionForm.ALTA) {
                this.registroForm.setValue({
                    nombre: this.producto.nombre,
                    descripcion: this.producto.descripcion,
                    minutosDeElaboracion: this.producto.minutosDeElaboracion,
                    precio: this.producto.precio,
                    fotos: this.producto.fotos,
                });
                this.fotos = this.producto.fotos;
            }
            else {
                this.registroForm.reset();
                this.fotos = [];
            }
            if (this.opcion == OpcionForm.BAJA) {
                this.registroForm.disable();
            }
            else {
                this.registroForm.enable();
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    crearForm() {
        this.registroForm = this.fb.group({
            nombre: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            descripcion: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            minutosDeElaboracion: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[0-9]*$"),
                ],
            ],
            precio: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[0-9]*$")]],
            fotos: [""],
        });
    }
    subirFoto(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const foto = yield this.imagenService.sacarFoto();
            this.imgPreview[index] = `data:image/jpeg;base64,${foto.base64}`;
            let imagen = new src_app_clases_imagen__WEBPACK_IMPORTED_MODULE_9__["Imagen"]();
            imagen.base64 = foto.base64;
            imagen.fecha = foto.fecha;
            this.fotos[index] = imagen;
            console.log(this.fotos);
        });
    }
    registrar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.presentLoading("Guardando...", 5000);
            const imagenesGuardadas = yield this.imagenService.crearArrayImagenes(this.fotos, "/productos");
            console.log(imagenesGuardadas);
            this.registroForm.get("fotos").setValue(imagenesGuardadas);
            this.productoService.registrar(new src_app_clases_producto__WEBPACK_IMPORTED_MODULE_5__["Producto"](this.registroForm.value))
                .then(() => {
                this.presentToast("Alta exitosa", 2000);
                console.log("Registrado correctamente.");
            })
                .catch((error) => {
                this.presentToast("No se pudo realizar el alta", 2000);
                console.error("No se pudo realizar el alta.", error);
            });
        });
    }
    modificarProducto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("Modificando Producto-------");
            this.producto.nombre = this.registroForm.get("nombre").value;
            this.producto.descripcion = this.registroForm.get("descripcion").value;
            this.producto.minutosDeElaboracion = this.registroForm.get("minutosDeElaboracion").value;
            this.producto.precio = this.registroForm.get("precio").value;
            this.producto.fotos = this.registroForm.get("fotos").value;
            this.productoService
                .actualizar(this.producto)
                .then(() => {
                this.presentToast("Modificación exitosa", 2000);
                console.log("Modificado correctamente.");
            })
                .catch(() => this.presentToast("No se pudo modificar", 2000));
        });
    }
    borrarProducto() {
        console.log("Baja de producto------");
        if (this.producto) {
            this.producto.isActive = false;
            this.productoService
                .actualizar(this.producto)
                .then(() => {
                this.presentToast("Baja realizada", 2000);
                this.registroForm.reset();
            })
                .catch(() => this.presentToast("No se pudo realizar baja", 2000));
        }
    }
    presentToast(message, duration) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration,
            });
            toast.present();
        });
    }
    presentLoading(message, duration) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message,
                duration,
                spinner: 'bubbles'
            });
            yield loading.present();
        });
    }
};
FormProductoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_7__["ProductoService"] },
    { type: src_app_services_imagen_service__WEBPACK_IMPORTED_MODULE_6__["ImagenService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] }
];
FormProductoComponent.propDecorators = {
    opcion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    producto: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
FormProductoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-form-producto",
        template: _raw_loader_form_producto_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_form_producto_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FormProductoComponent);



/***/ }),

/***/ "KG2h":
/*!********************************************!*\
  !*** ./src/app/services/pedido.service.ts ***!
  \********************************************/
/*! exports provided: PedidoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoService", function() { return PedidoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _clases_pedido__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../clases/pedido */ "tUIk");
var PedidoService_1;




let PedidoService = PedidoService_1 = class PedidoService {
    constructor(firebase) {
        this.firebase = firebase;
    }
    /**
     * Método para realizar Alta en DB
     * @param pedido instancia de Pedido
     */
    crear(pedido) {
        console.log(pedido);
        pedido.isActive = true;
        return this.firebase.database.ref('pedidos')
            .push(pedido)
            .then((snapshot) => pedido.id = snapshot.key)
            .then(() => this.actualizar(pedido))
            .catch(console.error);
    }
    /**
     * Método para realizar Modificacion en DB
     * @param pedido instancia de Pedido
     */
    actualizar(pedido) {
        return this.firebase.database.ref('pedidos/' + pedido.id).update(pedido);
    }
    /**
     * Método para realizar Baja lógica en DB
     * @param pedido instancia de Pedido
     */
    borrar(pedido) {
        pedido.isActive = false;
        return this.firebase.database.ref('pedidos/' + pedido.id).update(pedido);
    }
    /**
     * Método para realizar Fetch de todas las mesas en DB
     */
    leer() {
        let pedidos = [];
        console.info("Fetch de todas los pedidos");
        const fetch = new Promise(resolve => {
            this.firebase.database.ref('pedidos').on('value', (snapshot) => {
                pedidos = [];
                snapshot.forEach((child) => {
                    var data = child.val();
                    pedidos.push(_clases_pedido__WEBPACK_IMPORTED_MODULE_3__["Pedido"].CrearPedido(data.id, data.cliente, data.mesa, data.productos, data.fechaInicio, data.fechaFin, data.valorTotal, data.estado, data.isActive));
                });
                PedidoService_1.pedidos = pedidos.filter(pedido => pedido.isActive);
                resolve(PedidoService_1.pedidos);
            });
        });
        return fetch;
    }
    /**
     * Método para realizar Fetch de una mesa en DB
     * @param id UID del registro a obtener
     */
    fetch(id) {
        return this.firebase.database.ref(`pedidos/${id}`).once('value');
    }
};
PedidoService.pedidos = [];
PedidoService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
];
PedidoService = PedidoService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PedidoService);



/***/ }),

/***/ "KPCj":
/*!**********************************************!*\
  !*** ./src/app/services/uivisual.service.ts ***!
  \**********************************************/
/*! exports provided: UIVisualService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIVisualService", function() { return UIVisualService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pages_carta_carta_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/carta/carta.page */ "4kP8");
/* harmony import */ var _components_foto_foto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/foto/foto.component */ "wH85");
/* harmony import */ var _components_lista_platos_cliente_lista_platos_cliente_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/lista-platos-cliente/lista-platos-cliente.component */ "YZZB");
var UIVisualService_1;






/**
 * Clase para centralizar lógica de componentes de UI de Ionic
 * Los métodos de modals y popovers deben estar encapsulados en las clases clientes
 */
let UIVisualService = UIVisualService_1 = class UIVisualService {
    constructor(modalController, toastController, alertController, actionSheetController, popoverController) {
        this.modalController = modalController;
        this.toastController = toastController;
        this.alertController = alertController;
        this.actionSheetController = actionSheetController;
        this.popoverController = popoverController;
        UIVisualService_1.UI = this;
    }
    static presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield UIVisualService_1.UI.toastController.create({
                message,
                duration: UIVisualService_1.DURACION_TOAST,
            });
            toast.present();
        });
    }
    static presentAlert(header, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield UIVisualService_1.UI.alertController.create({
                header,
                message,
                buttons: ['Cerrar']
            });
            yield alert.present();
        });
    }
    static presentActionSheet(rol, handlers) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // TODO: Modificar cuando se implemente servicio de Roles
            let botones = this.generarBotones(rol, handlers);
            console.log(botones);
            // Botones por defecto para cualquier Rol
            botones.push({
                text: 'Cancelar',
                icon: 'close',
                role: 'cancel',
                handler: () => console.log('Cancel clicked')
            });
            const actionSheet = yield UIVisualService_1.UI.actionSheetController.create({
                header: 'Opciones',
                mode: 'ios',
                translucent: true,
                buttons: botones
            });
            yield actionSheet.present();
        });
    }
    static generarBotones(rol, handlers) {
        // Codigo a modo de ejemplo
        let botonesGenerados = [];
        switch (rol) {
            case 'Usuario':
                handlers.solicitar.boton = {
                    text: 'Solicitar',
                    icon: 'hand-left-sharp',
                    handler: () => handlers.solicitar.handler()
                };
                if (handlers.solicitar)
                    botonesGenerados.push(handlers.solicitar.boton);
                handlers.mostrarPlatos.boton = {
                    text: 'Mostrar Platos',
                    icon: 'fast-food-outline',
                    handler: () => handlers.mostrarPlatos.handler(handlers.mostrarPlatos.params)
                };
                if (handlers.mostrarPlatos)
                    botonesGenerados.push(handlers.mostrarPlatos.boton);
                break;
        }
        return botonesGenerados;
    }
    static verCarta() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield UIVisualService_1.UI.modalController.create({
                component: _pages_carta_carta_page__WEBPACK_IMPORTED_MODULE_3__["CartaPage"],
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            return data;
        });
    }
    static verPlatos(productos) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield UIVisualService_1.UI.modalController.create({
                component: _components_lista_platos_cliente_lista_platos_cliente_component__WEBPACK_IMPORTED_MODULE_5__["ListaPlatosClienteComponent"],
                componentProps: { productos: productos }
            });
            yield modal.present();
        });
    }
    static verFoto(ev, foto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield UIVisualService_1.UI.popoverController.create({
                component: _components_foto_foto_component__WEBPACK_IMPORTED_MODULE_4__["FotoComponent"],
                animated: true,
                event: ev,
                translucent: false,
                componentProps: {
                    img: foto
                }
            });
            yield popover.present();
        });
    }
};
UIVisualService.DURACION_TOAST = 2000;
UIVisualService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
UIVisualService = UIVisualService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UIVisualService);



/***/ }),

/***/ "KiqU":
/*!***************************************************************************!*\
  !*** ./src/app/components/detalle-empleado/detalle-empleado.component.ts ***!
  \***************************************************************************/
/*! exports provided: DetalleEmpleadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleEmpleadoComponent", function() { return DetalleEmpleadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalle_empleado_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalle-empleado.component.html */ "LAh9");
/* harmony import */ var _detalle_empleado_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalle-empleado.component.scss */ "y06/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DetalleEmpleadoComponent = class DetalleEmpleadoComponent {
    constructor() { }
    ngOnInit() { }
    //TODO: tomar foto del empleado
    sacarFoto() {
        console.log("Sacar foto");
    }
};
DetalleEmpleadoComponent.ctorParameters = () => [];
DetalleEmpleadoComponent.propDecorators = {
    empleado: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
DetalleEmpleadoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalle-empleado',
        template: _raw_loader_detalle_empleado_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalle_empleado_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetalleEmpleadoComponent);



/***/ }),

/***/ "L12R":
/*!*********************************************************!*\
  !*** ./src/app/components/escaner/escaner.component.ts ***!
  \*********************************************************/
/*! exports provided: EscanerQRComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscanerQRComponent", function() { return EscanerQRComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_escaner_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./escaner.component.html */ "9fm6");
/* harmony import */ var _escaner_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./escaner.component.scss */ "DemK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_codigo_qr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/codigo-qr.service */ "qko+");
/* harmony import */ var src_app_services_roles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/roles.service */ "0ceX");







let EscanerQRComponent = class EscanerQRComponent {
    constructor(escanerQR, router, rolService) {
        this.escanerQR = escanerQR;
        this.router = router;
        this.rolService = rolService;
    }
    ngOnInit() { }
    escanear() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Ya debe existir un usuario logueado
            const scan = yield this.escanerQR.escanear("Escanee el código QR", 'QR_CODE');
            this.procesarQR(scan);
        });
    }
    procesarQR(scan) {
        let textoQR = scan.text.split(':');
        let entidad = textoQR[1];
        let id = textoQR[2];
        console.log(textoQR);
        console.log(`Entidad: ${entidad}`);
        console.log(`ID: ${id}`);
        switch (entidad) {
            case 'Mesa':
                console.log(entidad);
                this.router.navigate(['/home/info-mesa', id]);
                break;
            case 'Producto':
                console.log(entidad);
                break;
            case 'Ingreso':
                console.log(entidad);
                this.router.navigate(['/home/info-ingreso']);
                break;
        }
    }
};
EscanerQRComponent.ctorParameters = () => [
    { type: src_app_services_codigo_qr_service__WEBPACK_IMPORTED_MODULE_5__["CodigoQRService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_roles_service__WEBPACK_IMPORTED_MODULE_6__["RolesService"] }
];
EscanerQRComponent.propDecorators = {
    usuario: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
EscanerQRComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-escanerQR',
        template: _raw_loader_escaner_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_escaner_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EscanerQRComponent);



/***/ }),

/***/ "L1bQ":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-jefes/form-jefes.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding-bottom contenido\" color=\"dark\">\r\n  <form #formulario=\"ngForm\">\r\n\r\n    <ion-list mode=\"ios\" lines=\"none\">\r\n\r\n      <ion-list-header>\r\n        <ion-label>{{opcion}} Jefe</ion-label>\r\n      </ion-list-header>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Nombre</ion-label>\r\n        <ion-input type=\"text\" name=\"nombre\" [(ngModel)]=\"jefe.nombre\" [placeholder]=\"jefe.nombre\"\r\n                   [disabled]=\"opcion == 'Baja'\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Apellido</ion-label>\r\n        <ion-input type=\"text\" name=\"apellido\" [(ngModel)]=\"jefe.apellido\" [placeholder]=\"jefe.apellido\"\r\n                   [disabled]=\"opcion == 'Baja'\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">DNI</ion-label>\r\n        <ion-input type=\"number\" name=\"dni\" [(ngModel)]=\"jefe.dni\" [placeholder]=\"jefe.dni\"\r\n                   [disabled]=\"opcion == 'Baja'\"\r\n                   required>\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">CUIL</ion-label>\r\n        <ion-input type=\"string\" name=\"cuil\" [(ngModel)]=\"jefe.cuil\" [placeholder]=\"jefe.cuil\"\r\n                   [disabled]=\"opcion == 'Baja'\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Email</ion-label>\r\n        <ion-input type=\"text\" name=\"email\" [(ngModel)]=\"jefe.email\" [placeholder]=\"jefe.email\"\r\n                   [disabled]=\"opcion == 'Baja'\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Contraseña</ion-label>\r\n        <ion-input type=\"password\" name=\"password\" [(ngModel)]=\"jefe.password\" [placeholder]=\"jefe.password\"\r\n                   [disabled]=\"opcion == 'Baja'\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-item>\r\n      <ion-label>Tipo de jefe</ion-label>\r\n      <ion-select value=\"jefe.tipo\" multiple=\"false\" name=\"tipoJefe\" [placeholder]=\"jefe.tipo\" [(ngModel)]=\"jefe.tipo\"\r\n                  [disabled]=\"opcion == 'Baja'\" [interfaceOptions]=\"popoverOptions\" interface=\"popover\" required>\r\n        <ion-select-option value=\"Dueno\">Dueño</ion-select-option>\r\n        <ion-select-option value=\"Supervisor\">Supervisor</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n\r\n  </form>\r\n  <!-- Se muestra accion segun tipo de llamado al formulario -->\r\n  <ion-button (click)=\"altaJefe()\" color=\"dark\" expand=\"block\" type=\"submit\" size=\"large\"\r\n              [disabled]=\"formulario.invalid\" *ngIf=\"opcion == 'Alta'\">\r\n    Crear\r\n  </ion-button>\r\n\r\n  <ion-button (click)=\"modificarJefe()\" color=\"dark\" expand=\"block\" type=\"submit\" size=\"large\"\r\n              [disabled]=\"formulario.invalid\" *ngIf=\"opcion == 'Modificación'\">\r\n    Modificar\r\n  </ion-button>\r\n\r\n  <ion-button (click)=\"borrarJefe()\" color=\"dark\" expand=\"block\" type=\"submit\" size=\"large\"\r\n              *ngIf=\"opcion == 'Baja'\">\r\n    Eliminar\r\n  </ion-button>\r\n</ion-content>");

/***/ }),

/***/ "LAh9":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/detalle-empleado/detalle-empleado.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ion-activatable centrado\">\r\n  <ion-card mode=\"ios\" color=\"dark\">\r\n    <ion-card-header>\r\n      <ion-card-title>Empleado: {{ empleado.nombre }} {{ empleado.apellido }}</ion-card-title>\r\n    </ion-card-header>\r\n\r\n    <!-- TODO: show images-->\r\n    <!--ion-img [src]=\"empleado.foto.url\"></ion-img-->\r\n\r\n    <ion-card-content color=\"dark\">\r\n      <ion-chip color=\"light\" mode=\"ios\" outline=\"true\">\r\n        <ion-label>Tipo:{{ empleado.tipo }}</ion-label>\r\n      </ion-chip>\r\n      <ion-chip color=\"light\" mode=\"ios\" outline=\"true\">\r\n        <ion-label>DNI:{{ empleado.dni }}</ion-label>\r\n      </ion-chip>\r\n      <ion-chip color=\"light\" mode=\"ios\" outline=\"true\">\r\n        <ion-label>CUIL:{{ empleado.cuil }}</ion-label>\r\n      </ion-chip>\r\n    </ion-card-content>\r\n    <ion-button (click)=\"sacarFoto()\" size=\"large\" expand=\"block\" fill=\"solid\" color=\"light\">\r\n      Sacar foto\r\n    </ion-button>\r\n    <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\r\n  </ion-card>\r\n</div>");

/***/ }),

/***/ "M52Y":
/*!*********************************************************************!*\
  !*** ./src/app/components/listado-mesas/listado-mesas.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListadoMesasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoMesasComponent", function() { return ListadoMesasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_listado_mesas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./listado-mesas.component.html */ "DDQj");
/* harmony import */ var _listado_mesas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listado-mesas.component.scss */ "Q6fI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ListadoMesasComponent = class ListadoMesasComponent {
    constructor(loadingController) {
        this.loadingController = loadingController;
        this.mesas = [];
        this.elegirMesa = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
        this.presentLoading('Cargando mesas...', 2000);
    }
    /**
     * Método para enviar mesa seleccionada
     * @param mesa Mesa seleccionada
     */
    seleccionarMesa(mesa) {
        this.elegirMesa.emit(mesa);
    }
    /**
     * Método para presentar loading
     * @param message Mensaje del componente
     * @param duration Duracion del presentacion del mensaje
     */
    presentLoading(message, duration) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message,
                duration,
                spinner: 'crescent'
            });
            yield loading.present();
        });
    }
};
ListadoMesasComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
ListadoMesasComponent.propDecorators = {
    mesas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    elegirMesa: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
ListadoMesasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-listado-mesas',
        template: _raw_loader_listado_mesas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_listado_mesas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListadoMesasComponent);



/***/ }),

/***/ "MC74":
/*!*******************************************************************************!*\
  !*** ./src/app/components/listado-empleados/listado-empleados.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdGFkby1lbXBsZWFkb3MvbGlzdGFkby1lbXBsZWFkb3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "MvHx":
/*!*****************************************************************************!*\
  !*** ./src/app/components/listado-clientes/listado-clientes.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdGFkby1jbGllbnRlcy9saXN0YWRvLWNsaWVudGVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "Ns8T":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/detalle-producto/detalle-producto.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ion-activatable centrado\">\r\n  <ion-card color=\"dark\">\r\n    <ion-card-content>\r\n\r\n      <ion-label>\r\n        <h1>{{producto.nombre}}</h1>\r\n      </ion-label>\r\n      <ion-text class=\"ion-text-sm-left\">\r\n        <p>\r\n          <small>{{producto.descripcion}}</small>\r\n        </p>\r\n        <p>\r\n          Tiempo de elaboracion: {{producto.minutosDeElaboracion}} minutos\r\n        </p>\r\n      </ion-text>\r\n\r\n      <ion-label>\r\n        <h5>Precio: ${{producto.precio}}</h5>\r\n      </ion-label>\r\n\r\n\r\n    </ion-card-content>\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col *ngFor=\"let foto of producto.fotos\" (click)=\"verFoto($event, foto)\">\r\n          <img style=\"max-height: 80px;\" src=\"{{foto.url}}\" alt=\"{{producto.nombre}}\">\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\r\n  </ion-card>\r\n</div>");

/***/ }),

/***/ "OP59":
/*!*****************************************************!*\
  !*** ./src/app/components/foto/foto.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm90by9mb3RvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "OWJL":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/listado-jefes/listado-jefes.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid fixed>\r\n  <ion-row class=\"contenido\" *ngFor=\"let jefe of jefes\">\r\n    <ion-col size=\"12\" size-lg=\"6\" (click)=\"seleccionarJefeDelListado(jefe)\" color=\"dark\"\r\n             class=\"ion-justify-content-center\">\r\n\r\n      <app-detalle-jefe [jefe]=\"jefe\"></app-detalle-jefe>\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ "P6PU":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/detalle-mesa/detalle-mesa.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ion-activatable centrado\">\r\n  <ion-card color=\"dark\">\r\n    <ion-card-header>\r\n      <ion-card-title>Mesa:{{ mesa.numero }}</ion-card-title>\r\n    </ion-card-header>\r\n\r\n    <ion-img class=\"contenido\" [src]=\"mesa.foto.url\"></ion-img>\r\n\r\n    <ion-card-content color=\"dark\">\r\n      <ion-chip color=\"light\" mode=\"ios\" outline=\"true\">\r\n        <ion-label>Tipo:{{ mesa.tipo }}</ion-label>\r\n      </ion-chip>\r\n      <ion-chip color=\"light\" mode=\"ios\" outline=\"true\">\r\n        <ion-label>Personas:{{ mesa.comensales }}</ion-label>\r\n      </ion-chip>\r\n      <ion-chip color=\"light\" mode=\"ios\" outline=\"true\">\r\n        <ion-label>Disponible:{{ mesa.isAvailable }}</ion-label>\r\n      </ion-chip>\r\n    </ion-card-content>\r\n    <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\r\n  </ion-card>\r\n</div>");

/***/ }),

/***/ "PaxZ":
/*!***********************************************************************!*\
  !*** ./src/app/components/form-empleados/form-empleados.component.ts ***!
  \***********************************************************************/
/*! exports provided: FormEmpleadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEmpleadosComponent", function() { return FormEmpleadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_form_empleados_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./form-empleados.component.html */ "CNyR");
/* harmony import */ var _form_empleados_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-empleados.component.scss */ "oPqm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_clases_empleado__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/clases/empleado */ "de4J");
/* harmony import */ var src_app_services_empleado_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/empleado.service */ "5RfW");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/uivisual.service */ "KPCj");








var OpcionForm;
(function (OpcionForm) {
    OpcionForm["ALTA"] = "Alta";
    OpcionForm["MODIFICACION"] = "Modificaci\u00F3n";
    OpcionForm["BAJA"] = "Baja";
})(OpcionForm || (OpcionForm = {}));
let FormEmpleadosComponent = class FormEmpleadosComponent {
    constructor(empleadoService, authService, UIVisual) {
        this.empleadoService = empleadoService;
        this.authService = authService;
        this.UIVisual = UIVisual;
        this.popoverOptions = {
            header: "Seleccione el tipo",
            okText: "Guardar",
        };
    }
    ngOnInit() {
        if (this.opcion == "Alta") {
            this.empleado = new src_app_clases_empleado__WEBPACK_IMPORTED_MODULE_4__["Empleado"]();
        }
    }
    /**
     * Alta de empleado
     */
    altaEmpleado() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.empleado && !this.empleado.id) {
                this.authService
                    .onRegisterEmpleado(this.empleado)
                    .then(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"].presentToast('Alta exitosa'))
                    .catch(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"].presentToast('No se pudo realizar el alta'));
            }
            else {
                src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"].presentToast('Empleado existente');
            }
        });
    }
    /**
     *  Modificacion de empleado
     */
    modificarEmpleado() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Modificar Empleado');
            if (this.empleado) {
                // Se actualiza Mesa en DB
                this.empleadoService
                    .actualizar(this.empleado)
                    .then(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"].presentToast('Modificación exitosa'))
                    .catch(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"].presentToast('No se pudo modificar'));
            }
        });
    }
    /**
     * Baja lógica de empleado
     */
    borrarEmpleado() {
        console.log("Baja empleado");
        if (this.empleado) {
            this.empleadoService
                .borradoLogico(this.empleado)
                .then(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"].presentToast('Baja realizada'))
                .catch(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"].presentToast('No se pudo realizar baja'));
        }
    }
};
FormEmpleadosComponent.ctorParameters = () => [
    { type: src_app_services_empleado_service__WEBPACK_IMPORTED_MODULE_5__["EmpleadoService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"] }
];
FormEmpleadosComponent.propDecorators = {
    opcion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    empleado: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
FormEmpleadosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-form-empleados",
        template: _raw_loader_form_empleados_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_form_empleados_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FormEmpleadosComponent);



/***/ }),

/***/ "Pofr":
/*!***********************************************************************!*\
  !*** ./src/app/components/form-clientes/form-clientes.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS1jbGllbnRlcy9mb3JtLWNsaWVudGVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "Q6fI":
/*!***********************************************************************!*\
  !*** ./src/app/components/listado-mesas/listado-mesas.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdGFkby1tZXNhcy9saXN0YWRvLW1lc2FzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "QBM/":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-reserva/form-reserva.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"reservaForm\">\r\n\r\n  <ion-list mode=\"ios\" lines=\"none\">\r\n\r\n    <ion-list-header>\r\n      <ion-label>{{opcion}} Reserva</ion-label>\r\n      <ion-label><small>Cliente {{cliente.nombre}}</small></ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>Fecha y Hora</ion-label>\r\n      <ion-datetime cancelText=\"Cancelar\" doneText=\"Confirmar\" formControlName=\"date\" display-format=\"D MMM YYYY H:mm\"\r\n        [min]=\"fechaActual\" display-timezone=\"utc\" minuteValues=\"0,5,10,15,20,25,30,35,40,45,50,55\"\r\n        pickerFormat=\"D MMM YYYY H:mm\" placeholder=\"Seleccione Fecha y Hora\" (ionChange)=\"leerMesasDisponibles()\">\r\n      </ion-datetime>\r\n    </ion-item>\r\n\r\n    <!-- Validar que la mesa este disponible para ese dia y para ese horario -->\r\n    <ion-select class=\"round\" placeholder=\"Seleccione Mesa\" okText=\"Confirmar\" cancelText=\"Cancelar\"\r\n      [disabled]=\"reservaForm.controls['date'].invalid\" formControlName=\"mesa\">\r\n      <ion-select-option *ngFor=\"let mesa of mesasDisponibles\" [value]='mesa'>\r\n        Mesa: {{mesa.numero}} Cant.: {{mesa.comensales}}\r\n      </ion-select-option>\r\n    </ion-select>\r\n\r\n  </ion-list>\r\n\r\n  <!-- Se muestra accion segun tipo de llamado al formulario -->\r\n  <ion-button (click)=\"crear()\" color=\"dark\" expand=\"block\" type=\"submit\" *ngIf=\"opcion == 'Alta'\"\r\n  [disabled]=\"reservaForm.controls['mesa'].invalid\">\r\n    Crear\r\n  </ion-button>\r\n\r\n  <ion-button (click)=\"modificarReserva()\" color=\"dark\" expand=\"block\" type=\"submit\"\r\n    [disabled]=\"reservaForm.pristine || reservaForm.invalid\" *ngIf=\"opcion == 'Modificación'\">\r\n    Modificar\r\n  </ion-button>\r\n\r\n  <ion-button (click)=\"borrarReserva()\" color=\"dark\" expand=\"block\" type=\"submit\" *ngIf=\"opcion == 'Baja'\">\r\n    Eliminar\r\n  </ion-button>\r\n\r\n</form>");

/***/ }),

/***/ "QQjj":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/listado-pedidos/listado-pedidos.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid fixed>\r\n  <ion-row class=\"contenido\" *ngFor=\"let pedido of pedidos\">\r\n    <ion-col size=\"12\" size-lg=\"6\" (click)=\"seleccionarPedido(pedido)\" color=\"dark\"\r\n             class=\"ion-justify-content-center\">\r\n\r\n      <app-detalle-pedido [pedido]=\"pedido\"></app-detalle-pedido>\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ "QzLQ":
/*!*********************************************!*\
  !*** ./src/app/services/reserva.service.ts ***!
  \*********************************************/
/*! exports provided: ReservaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservaService", function() { return ReservaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _clases_reserva__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../clases/reserva */ "S3MP");
var ReservaService_1;




let ReservaService = ReservaService_1 = class ReservaService {
    constructor(firebase) {
        this.firebase = firebase;
    }
    /**
     * Método para realizar Alta en DB
     * @param reserva instancia de Reserva
     */
    crear(reserva) {
        console.log(reserva);
        reserva.isActive = true;
        return this.firebase.database.ref('reservas')
            .push(reserva)
            .then((snapshot) => reserva.id = snapshot.key)
            .then(() => this.actualizar(reserva))
            .catch(console.error);
    }
    /**
     * Método para realizar Modificacion en DB
     * @param reserva instancia de Reserva
     */
    actualizar(reserva) {
        return this.firebase.database.ref('reservas/' + reserva.id).update(reserva);
    }
    /**
     * Método para realizar Baja lógica en DB
     * @param reserva instancia de Reserva
     */
    borrar(reserva) {
        reserva.isActive = false;
        return this.firebase.database.ref('reservas/' + reserva.id).update(reserva);
    }
    /**
     * Método para realizar Fetch de todas las reservas en DB
     */
    leer() {
        let reservas = [];
        console.info("Fetch de todas las reservas");
        const fetch = new Promise(resolve => {
            this.firebase.database.ref('reservas').on('value', (snapshot) => {
                reservas = [];
                snapshot.forEach((child) => {
                    var data = child.val();
                    reservas.push(new _clases_reserva__WEBPACK_IMPORTED_MODULE_3__["Reserva"](data));
                });
                ReservaService_1.reservas = reservas.filter(reserva => reserva.isActive);
                resolve(ReservaService_1.reservas);
            });
        });
        return fetch;
    }
    /**
     * Método para realizar Fetch de una reserva en DB
     * @param id UID del registro a obtener
     */
    fetch(id) {
        return this.firebase.database.ref(`reservas/${id}`).once('value');
    }
};
ReservaService.reservas = [];
ReservaService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
];
ReservaService = ReservaService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ReservaService);



/***/ }),

/***/ "R+YK":
/*!******************************************!*\
  !*** ./src/app/services/mesa.service.ts ***!
  \******************************************/
/*! exports provided: MesaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesaService", function() { return MesaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _clases_mesa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../clases/mesa */ "sV09");
/* harmony import */ var _codigo_qr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./codigo-qr.service */ "qko+");
var MesaService_1;





let MesaService = MesaService_1 = class MesaService {
    constructor(firebase, escanerQR) {
        this.firebase = firebase;
        this.escanerQR = escanerQR;
    }
    /**
     * Método para realizar Alta en DB
     * @param mesa instancia de Mesa
     */
    crear(mesa) {
        console.log(mesa);
        mesa.isActive = true;
        mesa.isAvailable = true;
        return this.firebase.database.ref('mesas')
            .push(mesa)
            .then((snapshot) => mesa.id = snapshot.key)
            .then(() => this.actualizar(mesa))
            .catch(console.error);
    }
    /**
     * Método para realizar Modificacion en DB
     * @param mesa instancia de Mesa
     */
    actualizar(mesa) {
        return new Promise((resolve, reject) => {
            //Generacion de QR
            this.escanerQR.generar(mesa, mesa.id).then(() => {
                resolve(this.firebase.database.ref('mesas/' + mesa.id).update(mesa));
            }).catch(error => reject(error));
        });
    }
    /**
     * Método para realizar Baja lógica en DB
     * @param mesa instancia de Mesa
     */
    borrar(mesa) {
        mesa.isActive = false;
        return this.firebase.database.ref('mesas/' + mesa.id).update(mesa);
    }
    /**
     * Método para realizar Fetch de todas las mesas en DB
     */
    leer() {
        let mesas = [];
        console.info("Fetch de todas las mesas");
        const fetch = new Promise(resolve => {
            this.firebase.database.ref('mesas').on('value', (snapshot) => {
                mesas = [];
                snapshot.forEach((child) => {
                    var data = child.val();
                    mesas.push(_clases_mesa__WEBPACK_IMPORTED_MODULE_3__["Mesa"].CrearMesa(data.id, data.numero, data.comensales, data.tipo, data.foto, data.codigoQR, data.isAvailable, data.isActive));
                });
                MesaService_1.mesas = mesas.filter(mesa => mesa.isActive);
                resolve(MesaService_1.mesas);
            });
        });
        return fetch;
    }
    /**
     * Método para realizar Fetch de una mesa en DB
     * @param id UID del registro a obtener
     */
    fetch(id) {
        return new Promise(resolve => {
            this.firebase.database.ref(`mesas/${id}`).once('value').then(snapshot => {
                let data = snapshot.val();
                const mesa = _clases_mesa__WEBPACK_IMPORTED_MODULE_3__["Mesa"].CrearMesa(data.id, data.numero, data.comensales, data.tipo, data.foto, data.codigoQR, data.isAvailable, data.isActive);
                resolve(mesa);
            });
        });
    }
};
MesaService.mesas = [];
MesaService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _codigo_qr_service__WEBPACK_IMPORTED_MODULE_4__["CodigoQRService"] }
];
MesaService = MesaService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MesaService);



/***/ }),

/***/ "RADS":
/*!*********************************************!*\
  !*** ./src/app/pages/carta/carta.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcnRhL2NhcnRhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "RE5y":
/*!***************************************************************!*\
  !*** ./src/app/components/form-jefes/form-jefes.component.ts ***!
  \***************************************************************/
/*! exports provided: FormJefesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormJefesComponent", function() { return FormJefesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_form_jefes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./form-jefes.component.html */ "L1bQ");
/* harmony import */ var _form_jefes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-jefes.component.scss */ "inwZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_clases_jefe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/clases/jefe */ "Gy7f");
/* harmony import */ var src_app_services_jefe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/jefe.service */ "97Z+");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/uivisual.service */ "KPCj");








var OpcionForm;
(function (OpcionForm) {
    OpcionForm["ALTA"] = "Alta";
    OpcionForm["MODIFICACION"] = "Modificaci\u00F3n";
    OpcionForm["BAJA"] = "Baja";
})(OpcionForm || (OpcionForm = {}));
let FormJefesComponent = class FormJefesComponent {
    constructor(jefeService, authService, UIVisual) {
        this.jefeService = jefeService;
        this.authService = authService;
        this.UIVisual = UIVisual;
        this.popoverOptions = {
            header: "Seleccione el tipo",
            okText: "Guardar",
        };
    }
    ngOnInit() {
        if (this.opcion == "Alta") {
            this.jefe = new src_app_clases_jefe__WEBPACK_IMPORTED_MODULE_4__["Jefe"]();
        }
    }
    /**
     * Alta de jefe
     */
    altaJefe() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.jefe && !this.jefe.id) {
                this.authService
                    .onRegisterJefe(this.jefe)
                    .then(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"].presentToast('Alta exitosa'))
                    .catch(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"].presentToast('No se pudo realizar el alta'));
            }
            else {
                src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"].presentToast('Empleado existente');
            }
        });
    }
    /**
     *  Modificacion de jefe
     */
    modificarJefe() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Modificar Jefe');
            if (this.jefe) {
                // Se actualiza Mesa en DB
                this.jefeService
                    .actualizar(this.jefe)
                    .then(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"].presentToast('Modificación exitosa'))
                    .catch(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"].presentToast('No se pudo modificar'));
            }
        });
    }
    /**
     * Baja lógica de jefe
     */
    borrarJefe() {
        console.log("Baja jefe");
        if (this.jefe) {
            this.jefeService
                .borradoLogico(this.jefe)
                .then(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"].presentToast('Baja realizada'))
                .catch(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"].presentToast('No se pudo realizar baja'));
        }
    }
};
FormJefesComponent.ctorParameters = () => [
    { type: src_app_services_jefe_service__WEBPACK_IMPORTED_MODULE_5__["JefeService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_7__["UIVisualService"] }
];
FormJefesComponent.propDecorators = {
    opcion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    jefe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
FormJefesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-form-jefes",
        template: _raw_loader_form_jefes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_form_jefes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FormJefesComponent);



/***/ }),

/***/ "S3MP":
/*!***********************************!*\
  !*** ./src/app/clases/reserva.ts ***!
  \***********************************/
/*! exports provided: Reserva */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reserva", function() { return Reserva; });
class Reserva {
    constructor(init) {
        if (init) {
            Object.assign(this, init);
        }
    }
    static CrearReserva(mesa, cliente, fecha, hora, timeStamp, id) {
        let reserva = new Reserva();
        reserva.id = id;
        reserva.mesa = mesa;
        reserva.cliente = cliente;
        reserva.fecha = fecha;
        reserva.hora = hora;
        reserva.timeStamp = timeStamp;
        return reserva;
    }
}


/***/ }),

/***/ "Si/e":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/carta/carta.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"success\">\r\n    <ion-title>Carta</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"fondo\">\r\n\r\n  <app-listado-productos [productos]=\"productos\" (elegirProducto)=\"agregar($event)\">\r\n  </app-listado-productos>\r\n\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar color=\"warning\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"cerrar()\" expand=\"block\">\r\n        <ion-icon size=\"large\" slot=\"icon-only\" name=\"arrow-back-circle\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-label>Seleccionados:{{productosElegidos.length}}</ion-label>\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _components_splash_splash_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/splash/splash.component */ "6P09");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, modalCtrl, router) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.modalCtrl = modalCtrl;
        this.router = router;
        platform.ready().then(() => {
            this.presentModal().then(() => this.router.navigate(['/auth-page']));
        });
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.statusBar.styleDefault();
            const modal = yield this.modalCtrl.create({
                component: _components_splash_splash_component__WEBPACK_IMPORTED_MODULE_7__["SplashComponent"],
            });
            return yield modal.present();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "U6He":
/*!*********************************************************!*\
  !*** ./src/app/components/splash/splash.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".splash #logo {\n  min-width: -webkit-fit-content !important;\n  min-width: -moz-fit-content !important;\n  min-width: fit-content !important;\n  min-height: -webkit-fit-content !important;\n  min-height: -moz-fit-content !important;\n  min-height: fit-content !important;\n}\n.splash #logo .cls-1 {\n  opacity: 0;\n  transform: rotate3d(1, 1, 0, 50deg);\n  -webkit-animation: 1s 0.2s ease fadeInAndSpin;\n          animation: 1s 0.2s ease fadeInAndSpin;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.splash #logo .cls-2 {\n  opacity: 0;\n  transform: rotate3d(1, 1, 0, 60deg);\n  -webkit-animation: 1s 0.4s ease fadeInAndSpin;\n          animation: 1s 0.4s ease fadeInAndSpin;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.splash #logo .cls-3 {\n  opacity: 0;\n  transform: rotate3d(1, 1, 0, 50deg);\n  -webkit-animation: 1s 0.6s ease fadeInAndSpin;\n          animation: 1s 0.6s ease fadeInAndSpin;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.splash #logo .cls-4 {\n  opacity: 0;\n  transform: rotate3d(1, 1, 0, 60deg);\n  -webkit-animation: 1s 0.8s ease fadeInAndSpin;\n          animation: 1s 0.8s ease fadeInAndSpin;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.splash #logo .cls-5, .splash #logo .cls-6 {\n  opacity: 0;\n  -webkit-animation: 2s 1.5s linear fadeIn;\n          animation: 2s 1.5s linear fadeIn;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n@-webkit-keyframes fadeInAndSpin {\n  100% {\n    opacity: 1;\n    transform: rotate3d(1, 1, 0, 0deg);\n  }\n}\n@keyframes fadeInAndSpin {\n  100% {\n    opacity: 1;\n    transform: rotate3d(1, 1, 0, 0deg);\n  }\n}\n@-webkit-keyframes fadeIn {\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  100% {\n    opacity: 1;\n  }\n}\n.modal-wrapper {\n  display: flex !important;\n  justify-content: center !important;\n  align-content: center !important;\n  height: 100% !important;\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zcGxhc2gvc3BsYXNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBRUkseUNBQUE7RUFBQSxzQ0FBQTtFQUFBLGlDQUFBO0VBQ0EsMENBQUE7RUFBQSx1Q0FBQTtFQUFBLGtDQUFBO0FBSFI7QUFNUTtFQUNJLFVBQUE7RUFDQSxtQ0FBQTtFQUNBLDZDQUFBO1VBQUEscUNBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0FBSlo7QUFPUTtFQUNJLFVBQUE7RUFDQSxtQ0FBQTtFQUNBLDZDQUFBO1VBQUEscUNBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0FBTFo7QUFRUTtFQUNJLFVBQUE7RUFDQSxtQ0FBQTtFQUNBLDZDQUFBO1VBQUEscUNBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0FBTlo7QUFTUTtFQUNJLFVBQUE7RUFDQSxtQ0FBQTtFQUNBLDZDQUFBO1VBQUEscUNBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0FBUFo7QUFVUTtFQUNJLFVBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtBQVJaO0FBY0E7RUFFSTtJQUNJLFVBQUE7SUFDQSxrQ0FBQTtFQVpOO0FBQ0Y7QUFPQTtFQUVJO0lBQ0ksVUFBQTtJQUNBLGtDQUFBO0VBWk47QUFDRjtBQWdCQTtFQUVJO0lBQ0ksVUFBQTtFQWZOO0FBQ0Y7QUFXQTtFQUVJO0lBQ0ksVUFBQTtFQWZOO0FBQ0Y7QUFtQkE7RUFDSSx3QkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBakJKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zcGxhc2gvc3BsYXNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwbGFzaHtcclxuXHJcblxyXG4gICAgI2xvZ28ge1xyXG5cclxuICAgICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLmNscy0xIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUzZCgxLCAxLCAwLCA1MGRlZyk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogMXMgMC4ycyBlYXNlIGZhZGVJbkFuZFNwaW47XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNscy0yIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUzZCgxLCAxLCAwLCA2MGRlZyk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogMXMgMC40cyBlYXNlIGZhZGVJbkFuZFNwaW47XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNscy0zIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUzZCgxLCAxLCAwLCA1MGRlZyk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogMXMgMC42cyBlYXNlIGZhZGVJbkFuZFNwaW47XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNscy00IHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUzZCgxLCAxLCAwLCA2MGRlZyk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogMXMgMC44cyBlYXNlIGZhZGVJbkFuZFNwaW47XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNscy01LCAuY2xzLTYge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IDJzIDEuNXMgbGluZWFyIGZhZGVJbjtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW5BbmRTcGluIHtcclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMSwgMSwgMCwgMGRlZyk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5tb2RhbC13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "UMFH":
/*!***************************************************************************!*\
  !*** ./src/app/components/detalle-cliente/detalle-cliente.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWxsZS1jbGllbnRlL2RldGFsbGUtY2xpZW50ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "VJYV":
/*!************************************!*\
  !*** ./src/app/clases/producto.ts ***!
  \************************************/
/*! exports provided: Producto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Producto", function() { return Producto; });
class Producto {
    constructor(init) {
        if (init) {
            Object.assign(this, init);
        }
    }
    static CrearProducto(id, nombre, descripcion, fotos, minutosDeElaboracion, precio, tipo, codigoQr) {
        let producto = new Producto();
        producto.id = id;
        producto.nombre = nombre;
        producto.descripcion = descripcion;
        producto.fotos = fotos;
        producto.minutosDeElaboracion = minutosDeElaboracion;
        producto.precio = precio;
        producto.tipo = tipo;
        producto.codigoQr = codigoQr;
        return producto;
    }
}


/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ "XS8i":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/detalle-pedido/detalle-pedido.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card (click)=\"mostrarOpciones()\" color=\"dark\" class=\"centrado\">\r\n\r\n  <ion-card-content color=\"dark\">\r\n    <ion-item>\r\n\r\n\r\n      <ion-thumbnail slot=\"end\">\r\n        <img [src]=\"pedido.mesa.foto.url\" />\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h4>Estado:{{pedido.estado}}</h4>\r\n        <p>\r\n          Cliente:{{pedido.cliente.nombre}}\r\n        </p>\r\n        <p>\r\n          Mesa:{{pedido.mesa.numero}}\r\n        </p>\r\n        <p>\r\n          Hora de inicio:{{pedido.fechaInicio | date: 'shortTime'}}\r\n        </p>\r\n      </ion-label>\r\n\r\n\r\n    </ion-item>\r\n  </ion-card-content>\r\n</ion-card>");

/***/ }),

/***/ "XfQS":
/*!*******************************************************************************!*\
  !*** ./src/app/components/listado-productos/listado-productos.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdGFkby1wcm9kdWN0b3MvbGlzdGFkby1wcm9kdWN0b3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "YXps":
/*!*******************************************************************!*\
  !*** ./src/app/components/detalle-jefe/detalle-jefe.component.ts ***!
  \*******************************************************************/
/*! exports provided: DetalleJefeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleJefeComponent", function() { return DetalleJefeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalle_jefe_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalle-jefe.component.html */ "k3lB");
/* harmony import */ var _detalle_jefe_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalle-jefe.component.scss */ "3/jR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DetalleJefeComponent = class DetalleJefeComponent {
    constructor() { }
    ngOnInit() { }
    //TODO: tomar foto del jefe
    sacarFoto() {
        console.log("Sacar foto");
    }
};
DetalleJefeComponent.ctorParameters = () => [];
DetalleJefeComponent.propDecorators = {
    jefe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
DetalleJefeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalle-jefe',
        template: _raw_loader_detalle_jefe_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalle_jefe_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetalleJefeComponent);



/***/ }),

/***/ "YYJ8":
/*!*******************************************************************!*\
  !*** ./src/app/components/form-pedido/form-pedido.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS1wZWRpZG8vZm9ybS1wZWRpZG8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "YYwF":
/*!************************************!*\
  !*** ./src/app/pipes/safe.pipe.ts ***!
  \************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



let SafePipe = class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
};
SafePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safe'
    })
], SafePipe);



/***/ }),

/***/ "YZZB":
/*!***********************************************************************************!*\
  !*** ./src/app/components/lista-platos-cliente/lista-platos-cliente.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ListaPlatosClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaPlatosClienteComponent", function() { return ListaPlatosClienteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_platos_cliente_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista-platos-cliente.component.html */ "gX5N");
/* harmony import */ var _lista_platos_cliente_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista-platos-cliente.component.scss */ "4ybE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ListaPlatosClienteComponent = class ListaPlatosClienteComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.enviarProductos = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() { }
    removerPlato(index) {
        const nuevaLista = this.productos.filter((p, i) => i != index);
        this.productos = nuevaLista;
        this.enviarProductos.emit(this.productos);
    }
    entregarPlato(index) {
        console.log(this.productos[index]);
        this.enviarProductos.emit(this.productos);
    }
    cerrar() {
        this.modalController.dismiss(this.productos);
    }
};
ListaPlatosClienteComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ListaPlatosClienteComponent.propDecorators = {
    productos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    enviarProductos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
ListaPlatosClienteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lista-platos-cliente',
        template: _raw_loader_lista_platos_cliente_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_platos_cliente_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListaPlatosClienteComponent);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "WdVq");
/* harmony import */ var _services_profile_guard_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/profile-guard.service */ "zNKl");










// Firebase




// Plugins




let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__["AngularFireDatabaseModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebaseConfig),
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__["AngularFireStorageModule"]
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_15__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_14__["SplashScreen"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_16__["BarcodeScanner"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__["AngularFireDatabase"],
            _services_profile_guard_service__WEBPACK_IMPORTED_MODULE_17__["ProfileGuardService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "aTCf":
/*!***********************************************************************!*\
  !*** ./src/app/components/listado-jefes/listado-jefes.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdGFkby1qZWZlcy9saXN0YWRvLWplZmVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "bSsp":
/*!********************************************!*\
  !*** ./src/app/services/imagen.service.ts ***!
  \********************************************/
/*! exports provided: ImagenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagenService", function() { return ImagenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _clases_imagen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clases/imagen */ "7mdY");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);







const { Camera } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];
let ImagenService = class ImagenService {
    constructor(storage, firebaseDB) {
        this.storage = storage;
        this.firebaseDB = firebaseDB;
    }
    /**
     * Subir foto del almacenamiento del dispositivo
     */
    sacarFoto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let imagen = new _clases_imagen__WEBPACK_IMPORTED_MODULE_2__["Imagen"]();
            const image = yield Camera.getPhoto({
                quality: 90,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["CameraResultType"].Base64,
                correctOrientation: true,
                source: _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["CameraSource"].Prompt,
                promptLabelHeader: "Subir foto",
                promptLabelCancel: "Cancelar",
                promptLabelPhoto: "Subir desde galería",
                promptLabelPicture: "Nueva foto",
            });
            imagen.base64 = image.base64String;
            imagen.fecha = new Date().toUTCString();
            return imagen;
        });
    }
    /**
     * Registra una imagen en la base de datos y la devuelve con su respectivo id y su url
     *  @imagen Imagen que se desea guardar
     * @rutaCarpetaStorage Ruta de la base de datos donde guardar el array, ej '/productos'
     */
    crearUnaImagen(imagen, rutaCarpetaStorage) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                let carpeta = rutaCarpetaStorage;
                // Se sube imagen a Base de Datos
                const imagenDB = this.crear(imagen);
                imagenDB.then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    // Se guarda imagen en el Storage
                    const imagenStorage = yield this.guardarImagen(imagen, carpeta);
                    const URL = yield imagenStorage.ref.getDownloadURL();
                    imagen.url = URL;
                    imagen.rutaStorage = imagenStorage.ref.child(`${rutaCarpetaStorage}/${imagen.id}`).toString();
                    resolve(imagen);
                }))
                    .catch(console.error);
            });
        });
    }
    /**
     * Registra un array de imagenes en la base de datos, Guardando el archivo en Firebase.Storage y lo devuelve con sus respectivos id y url
     * @imagenes Array<Imagen> el array que se decea guardar
     * @rutaCarpetaStorage Ruta de la base de datos donde guardar el array, ej '/productos'
     */
    crearArrayImagenes(imagenes, rutaCarpetaStorage) {
        return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Se sube imagen a Base de Datos
            for (let imagen of imagenes) {
                yield this.crear(imagen);
                let imagenStorage = yield this.guardarImagen(imagen, rutaCarpetaStorage);
                let URL = yield imagenStorage.ref.getDownloadURL();
                imagen.url = URL;
                imagen.rutaStorage = imagenStorage.ref.child(`${rutaCarpetaStorage}/${imagen.id}`).toString();
            }
            resolve(imagenes);
        }));
    }
    guardarImagen(imagen, carpeta) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("Guardar imagen-----------------------");
            const metadata = {
                contentType: "image/jpeg",
            };
            // Se sube imagen al Firebase Storage
            return this.storage
                .ref(`${carpeta}/${imagen.id}`)
                .putString(imagen.base64, firebase__WEBPACK_IMPORTED_MODULE_6__["storage"].StringFormat.BASE64, metadata);
        });
    }
    /**
     * Crea una referencia en la carpeta imagenes de la base de datos (Realtime data base), y devuelve el parametro imagen pero con el id de referencia
     */
    crear(imagen) {
        return this.firebaseDB.database.ref("imagenes")
            .push()
            .then((snapshot) => {
            imagen.id = snapshot.key;
            console.log('Creado correctamente');
            this.actualizar(imagen);
        })
            .catch(() => console.info("No se pudo realizar alta"));
    }
    actualizar(imagen) {
        return this.firebaseDB.database.ref("imagenes/" + imagen.id).update(imagen);
    }
    borrar(imagen) {
        return this.firebaseDB.database.ref("imagenes/" + imagen.id).remove();
    }
};
ImagenService.ctorParameters = () => [
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"] }
];
ImagenService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], ImagenService);



/***/ }),

/***/ "cM4s":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-pedido/form-pedido.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding-bottom contenido\" color=\"dark\">\r\n\r\n  <form #formulario=\"ngForm\">\r\n\r\n    <ion-list mode=\"ios\">\r\n\r\n      <ion-list-header color=\"dark\">\r\n        <ion-label>{{opcion}} Pedido</ion-label>\r\n      </ion-list-header>\r\n\r\n      <ion-item color=\"dark\">\r\n        <!-- <ion-label>Mesa asignada:{{pedido.mesa.numero}}</ion-label> -->\r\n        <ion-label>MESA ASIGNADA</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item color=\"dark\">\r\n        <ion-label>\r\n          <h4>Cliente</h4>\r\n          <!-- <p>\r\n            {{pedido.cliente.nombre}} {{pedido.cliente.apellido}}\r\n            {{pedido.cliente.dni}}\r\n          </p> -->\r\n          <p>\r\n            CLIENTE ASOCIADO\r\n          </p>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item color=\"dark\">\r\n        <ion-label>Fecha y Hora</ion-label>\r\n        <ion-datetime cancelText=\"Cancelar\" doneText=\"Confirmar\" display-format=\"D MMM YYYY H:mm\"\r\n                      [min]=\"fechaActual\" display-timezone=\"utc\" minuteValues=\"0,5,10,15,20,25,30,35,40,45,50,55\"\r\n                      pickerFormat=\"D MMM YYYY H:mm\" placeholder=\"Seleccione Fecha y Hora\">\r\n        </ion-datetime><!--  (click)=\" leerMesasDisponibles()\"[disabled]=\"reservaForm.controls['fecha'].invalid\" -->\r\n      </ion-item>\r\n\r\n      <ion-item color=\"dark\">\r\n        <ion-label>HORA PEDIDO</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item color=\"dark\">\r\n        <ion-label>Total : $ {{pedido.calcularTotal()}}</ion-label>\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n\r\n  </form>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar class=\"botones-form\" color=\"dark\">\r\n\r\n    <ion-button *ngIf=\"pedido.productos.length > 0\" (click)=\"mostrarPlatos()\" expand=\"block\" color=\"dark\"\r\n                size=\"large\">\r\n      Ver Platos\r\n    </ion-button>\r\n\r\n    <ion-button (click)=\"mostrarCarta()\" expand=\"block\" color=\"warning\" size=\"large\" *ngIf=\"opcion != 'Baja'\">\r\n      Ver Carta\r\n    </ion-button>\r\n\r\n    <!-- Se muestra accion segun tipo de llamado al formulario -->\r\n    <ion-button (click)=\"alta()\" color=\"tertiary\" expand=\"block\" type=\"submit\" [disabled]=\"formulario.invalid\"\r\n                size=\"large\"\r\n                *ngIf=\"opcion == 'Alta'\">\r\n      Pedir\r\n    </ion-button>\r\n\r\n    <ion-button (click)=\"modificacion()\" color=\"primary\" expand=\"block\" type=\"submit\" [disabled]=\"formulario.invalid\"\r\n                size=\"large\" *ngIf=\"opcion == 'Modificación'\">\r\n      Modificar\r\n    </ion-button>\r\n\r\n    <ion-button (click)=\"cierre()\" color=\"dark\" expand=\"block\" type=\"submit\" size=\"large\" *ngIf=\"opcion == 'Baja'\">\r\n      Cerrar\r\n    </ion-button>\r\n\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "dGQJ":
/*!***************************************************************************!*\
  !*** ./src/app/components/listado-pedidos/listado-pedidos.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdGFkby1wZWRpZG9zL2xpc3RhZG8tcGVkaWRvcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "de4J":
/*!************************************!*\
  !*** ./src/app/clases/empleado.ts ***!
  \************************************/
/*! exports provided: TipoEmpleado, Empleado */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoEmpleado", function() { return TipoEmpleado; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Empleado", function() { return Empleado; });
/* harmony import */ var _usuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuario */ "1Qa6");

var TipoEmpleado;
(function (TipoEmpleado) {
    TipoEmpleado["Bartender"] = "Bartender";
    TipoEmpleado["Cocinero"] = "Cocinero";
    TipoEmpleado["Mozo"] = "Mozo";
})(TipoEmpleado || (TipoEmpleado = {}));
class Empleado extends _usuario__WEBPACK_IMPORTED_MODULE_0__["Usuario"] {
    static CrearEmpleado(id, nombre, apellido, dni, foto, email, isActive, tipo, cuil) {
        let empleado = new Empleado();
        empleado.id = id;
        empleado.nombre = nombre;
        empleado.apellido = apellido;
        empleado.dni = dni;
        empleado.foto = foto;
        empleado.email = email;
        empleado.isActive = isActive;
        empleado.tipo = tipo;
        empleado.cuil = cuil;
        return empleado;
    }
}


/***/ }),

/***/ "dmHp":
/*!***********************************************************************!*\
  !*** ./src/app/components/detalle-pedido/detalle-pedido.component.ts ***!
  \***********************************************************************/
/*! exports provided: DetallePedidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallePedidoComponent", function() { return DetallePedidoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalle_pedido_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalle-pedido.component.html */ "XS8i");
/* harmony import */ var _detalle_pedido_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalle-pedido.component.scss */ "g/Qt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/uivisual.service */ "KPCj");






let DetallePedidoComponent = class DetallePedidoComponent {
    constructor(actionSheetController, modalController, UIVisual) {
        this.actionSheetController = actionSheetController;
        this.modalController = modalController;
        this.UIVisual = UIVisual;
        //this.pedido.calcularTotal();
    }
    ngOnInit() { }
    confirmar() {
        console.log("Se confirma el pedido");
    }
    entregar() {
        console.log("Pedido entregado");
    }
    recibir() {
        console.log("Se recibe pedido en la mesa");
    }
    mostrarOpciones() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_5__["UIVisualService"].presentActionSheet('Usuario', {
                mostrarPlatos: { handler: src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_5__["UIVisualService"].verPlatos, params: this.pedido.productos },
                solicitar: { handler: this.solicitar() },
                confirmar: { handler: null },
                entregar: { handler: null },
                recibir: { handler: null },
                cerrar: { handler: null },
            });
        });
    }
    solicitar() {
        console.log("Se solicita el pedido");
    }
};
DetallePedidoComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_5__["UIVisualService"] }
];
DetallePedidoComponent.propDecorators = {
    pedido: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
DetallePedidoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalle-pedido',
        template: _raw_loader_detalle_pedido_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalle_pedido_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetallePedidoComponent);



/***/ }),

/***/ "g/Qt":
/*!*************************************************************************!*\
  !*** ./src/app/components/detalle-pedido/detalle-pedido.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWxsZS1wZWRpZG8vZGV0YWxsZS1wZWRpZG8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "gX5N":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/lista-platos-cliente/lista-platos-cliente.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"warning\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"cerrar()\" expand=\"block\">\r\n        <ion-icon size=\"large\" slot=\"icon-only\" name=\"arrow-back-circle\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Detalle del pedido</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-list>\r\n\r\n\r\n    <ion-item-sliding *ngFor=\"let producto of productos; let i = index\">\r\n\r\n      <ion-item-options side=\"start\">\r\n        <ion-item-option (click)=\"removerPlato(i)\" color=\"danger\">\r\n          <ion-icon slot=\"icon-only\" name=\"close-circle\"></ion-icon>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option (click)=\"entregarPlato(i)\" color=\"success\">\r\n          <ion-icon slot=\"icon-only\" name=\"checkmark\"></ion-icon>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n\r\n      <ion-item>\r\n\r\n        <ion-label>\r\n          <h3>{{producto.nombre}}</h3>\r\n          <p>$ {{producto.precio}}</p>\r\n        </ion-label>\r\n        <ion-thumbnail slot=\"end\">\r\n          <img [src]=\"producto.fotos[0].url\" />\r\n        </ion-thumbnail>\r\n\r\n      </ion-item>\r\n\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n</ion-content>");

/***/ }),

/***/ "hSM4":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/splash/splash.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"splash modal-wrapper\" center>\r\n\r\n  <div class=\"splash modal-wrapper\">\r\n\r\n    <svg id=\"logo\" width=\"297\" height=\"418.00000000000006\" xmlns=\"http://www.w3.org/2000/svg\"\r\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n      <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->\r\n      <defs>\r\n        <linearGradient spreadMethod=\"pad\" y2=\"0\" x2=\"1\" y1=\"0\" x1=\"0\" id=\"svg_6\">\r\n          <stop stop-color=\"#fff\" offset=\"1\" />\r\n          <stop stop-color=\"#000000\" offset=\"1\" />\r\n        </linearGradient>\r\n      </defs>\r\n      <g>\r\n        <title>background</title>\r\n        <rect fill=\"url(#svg_6)\" id=\"canvas_background\" height=\"420\" width=\"299\" y=\"-1\" x=\"-1\" />\r\n      </g>\r\n      <g>\r\n        <title>Layer 1</title>\r\n        <image class=\"cls-1\" stroke=\"null\"\r\n          xlink:href=\"data:image/png;base64,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\"\r\n          id=\"svg_26\" height=\"128\" width=\"144\" y=\"183.97933\" x=\"77.31573\" />\r\n        <style>\r\n          tspan {\r\n            white-space: pre\r\n          }\r\n        </style>\r\n        <style>\r\n          tspan {\r\n            white-space: pre\r\n          }\r\n        </style>\r\n        <style>\r\n          tspan {\r\n            white-space: pre\r\n          }\r\n        </style>\r\n        <style>\r\n          tspan {\r\n            white-space: pre\r\n          }\r\n\r\n          .shp0 {\r\n            fill: #ecf7ea\r\n          }\r\n        </style>\r\n        <style>\r\n          tspan {\r\n            white-space: pre\r\n          }\r\n\r\n          .shp0 {\r\n            fill: #96f39c\r\n          }\r\n        </style>\r\n        <style>\r\n          tspan {\r\n            white-space: pre\r\n          }\r\n\r\n          .shp0 {\r\n            fill: #c35bf6\r\n          }\r\n        </style>\r\n        <style>\r\n          tspan {\r\n            white-space: pre\r\n          }\r\n\r\n          .shp0 {\r\n            fill: #96f39c\r\n          }\r\n        </style>\r\n        <style>\r\n          tspan {\r\n            white-space: pre\r\n          }\r\n\r\n          .shp0 {\r\n            fill: #c35bf6\r\n          }\r\n        </style>\r\n        <style>\r\n          tspan {\r\n            white-space: pre\r\n          }\r\n\r\n          .shp0 {\r\n            fill: #ecf7ea\r\n          }\r\n        </style>\r\n        <style transform=\"matrix(0.08604443768395331,0,0,0.08604443768395331,0,0) \">\r\n          tspan {\r\n            white-space: pre\r\n          }\r\n        </style>\r\n        <g stroke=\"null\" id=\"svg_7\">\r\n          <path stroke=\"null\"\r\n            d=\"m37.98312,117.5791l0,5.39297l-2.24972,0l0,-14.94418l3.97349,0q0.88172,0 1.74424,0.30453q0.86252,0.30453 1.53693,0.91221q0.6936,0.60768 1.10567,1.47974q0.43126,0.85269 0.43126,1.92685q0,1.13507 -0.35576,2.06804q-0.35704,0.91221 -0.99433,1.54065q-0.63729,0.62844 -1.53693,0.97312q-0.89963,0.34606 -1.9861,0.34606l-1.66874,0zm1.68665,-7.70602l-1.68665,0l0,5.92036l2.06161,0q0.41207,0 0.80621,-0.14119q0.41207,-0.16196 0.74991,-0.50663q0.33784,-0.34467 0.54387,-0.95374q0.20603,-0.62844 0.20603,-1.54065q0,-0.36544 -0.09342,-0.83192q-0.0947,-0.48587 -0.39415,-0.91221q-0.28154,-0.44572 -0.80621,-0.72949q-0.52468,-0.30453 -1.3872,-0.30453zm9.56068,-2.65634l0,12.26707q0,0.69073 0.16892,1.09493q0.16892,0.3862 0.46837,0.5883q0.29945,0.18272 0.6744,0.24362q0.39415,0.06091 0.84333,0.06091l0,1.50051q-0.24314,0.04014 -0.50548,0.06091q-0.20603,0.02076 -0.48757,0.04014q-0.28154,0 -0.56179,0q-0.28154,0 -0.56307,-0.01938q-0.28154,-0.02076 -0.50548,-0.06091q-0.63729,-0.14258 -0.99433,-0.60906q-0.35576,-0.46649 -0.5426,-1.03402q-0.18812,-0.5883 -0.24442,-1.13507q-0.03711,-0.54816 -0.03711,-0.8513l0,-0.24362l0,-11.90302l2.28683,0zm12.22247,9.57059l0,2.63696l0,0.16196q0,0.16196 0.01792,0.48587q0.0192,0.30453 0.0755,0.62844q0.05631,0.32529 0.16892,0.5883q0.13053,0.26439 0.33656,0.34467l-0.5989,1.35932q-0.24442,0 -0.52468,-0.12181q-0.26362,-0.12181 -0.52596,-0.34467q-0.24314,-0.22286 -0.43126,-0.48725q-0.16764,-0.28377 -0.26234,-0.60768q-0.13053,0.34467 -0.46837,0.64782q-0.31865,0.28515 -0.73071,0.52739q-0.41207,0.22286 -0.89963,0.34467q-0.46837,0.12181 -0.88172,0.12181q-0.63729,0 -1.23748,-0.18272q-0.58099,-0.18133 -1.03016,-0.58691q-0.45046,-0.40558 -0.7128,-1.07555q-0.24314,-0.66858 -0.24314,-1.6417q0,-0.93297 0.35576,-1.60294q0.37495,-0.68935 0.93674,-1.11431q0.58227,-0.44572 1.31298,-0.64921q0.73071,-0.22286 1.48062,-0.22286l1.59323,0q0,-0.99388 -0.09342,-1.58218q-0.09342,-0.58691 -0.31865,-0.8513q-0.22523,-0.28377 -0.56307,-0.34467q-0.31865,-0.08029 -0.76782,-0.08029q-0.41207,0 -0.78702,0.12043q-0.35704,0.10243 -0.67568,0.26439q-0.29945,0.14119 -0.5426,0.32391q-0.22523,0.18272 -0.33784,0.28377l-0.84333,-1.39808q0.18684,-0.22425 0.56179,-0.44711q0.37495,-0.24362 0.86252,-0.42496q0.48757,-0.18272 1.04936,-0.28377q0.58099,-0.12181 1.20036,-0.12181q0.56179,0 1.08647,0.12181q0.54387,0.12043 0.97514,0.40558q0.45046,0.28377 0.7691,0.76963q0.33656,0.46649 0.46837,1.1766q0.13053,0.70873 0.16892,1.4396q0.05631,0.71011 0.05631,1.41884zm-2.24972,3.44674l0,-2.79753l-1.20036,0q-0.37495,0 -0.78702,0.08167q-0.41207,0.08029 -0.76782,0.30315q-0.35704,0.22286 -0.60018,0.64921q-0.22523,0.40558 -0.22523,1.05479q0,1.01326 0.41207,1.45898q0.43126,0.44711 1.23748,0.44711q0.56307,0 1.06855,-0.32529q0.52468,-0.32391 0.86252,-0.87207zm14.58352,2.33243l0,0.40558l-2.28683,0l0,-6.2249q0,-0.68935 -0.05631,-1.31779q-0.05631,-0.62844 -0.26234,-1.11569q-0.20603,-0.48587 -0.56179,-0.75025q-0.35704,-0.28377 -0.99433,-0.28377q-0.20603,0 -0.5426,0.06091q-0.31865,0.06091 -0.67568,0.18272q-0.33656,0.12181 -0.65521,0.30453q-0.30073,0.18133 -0.45046,0.42496l0,0.12181l0,0.04014l0,4.50153l0,0.04153l0,4.01428l-2.26764,0l0,-11.43653l2.02449,0l0.24314,1.15583q0.22523,-0.22286 0.56179,-0.44572q0.35704,-0.24362 0.7691,-0.42634q0.41207,-0.18133 0.84333,-0.28377q0.43126,-0.12181 0.84333,-0.12181q0.84461,0 1.42559,0.3862q0.58099,0.38482 1.16197,0.99249q0.31865,0.34606 0.48757,0.81116q0.18684,0.44711 0.26234,0.95374q0.09342,0.48587 0.11261,0.99388q0.01792,0.50663 0.01792,0.99249l0,6.0228zm7.55538,-11.15276q1.27459,0 2.24844,0.56892q0.97514,0.54677 1.59451,1.47974q0.63729,0.91221 0.89963,2.12895q0.28026,1.19598 0.11261,2.49439l-7.34935,0q0,0.64782 0.22523,1.19598q0.22523,0.54677 0.60018,0.95235q0.39415,0.3862 0.91883,0.60906q0.54387,0.22286 1.16197,0.22286q0.20603,0 0.50548,-0.04014q0.31865,-0.06091 0.65649,-0.18272q0.35576,-0.14258 0.6936,-0.34467q0.35576,-0.20348 0.61938,-0.48725l0.82413,1.35932q-0.6181,0.83054 -1.44351,1.25688q-0.82413,0.42634 -2.09872,0.42634q-1.03144,0 -1.93108,-0.44711q-0.89963,-0.46649 -1.53693,-1.25688q-0.63857,-0.7904 -1.01225,-1.84518q-0.37495,-1.05479 -0.37495,-2.27153q0,-1.19598 0.37495,-2.24938q0.37367,-1.07555 0.99305,-1.86595q0.63729,-0.7904 1.49981,-1.2375q0.86252,-0.46649 1.81846,-0.46649zm-2.41864,4.88773l5.17385,0q0,-0.54816 -0.18684,-1.07555q-0.18812,-0.52739 -0.52596,-0.95235q-0.31865,-0.42634 -0.78702,-0.66997q-0.46837,-0.263 -1.01225,-0.28377q-0.58099,0 -1.06855,0.24362q-0.48757,0.24362 -0.84333,0.64921q-0.35576,0.40558 -0.56179,0.97312q-0.18812,0.54816 -0.18812,1.11569zm10.23508,5.75841l0.95594,-1.64308q0.37495,0.28377 0.88172,0.52739q0.52468,0.24362 1.3117,0.24362q1.03144,0 1.61243,-0.34467q0.58099,-0.34467 0.58099,-1.01464q0,-0.48587 -0.33784,-0.76963q-0.33656,-0.30453 -0.86252,-0.50663q-0.50548,-0.22286 -1.10567,-0.40558q-0.58099,-0.20348 -1.08647,-0.48725q-0.99433,-0.56754 -1.49981,-1.19598q-0.48757,-0.62844 -0.48757,-1.66246q0,-0.85269 0.31865,-1.50051q0.33656,-0.64921 0.86252,-1.07555q0.52468,-0.44572 1.19908,-0.66858q0.6744,-0.22286 1.36801,-0.22286q0.93802,0 1.72504,0.22286q0.78702,0.2021 1.51901,0.71011l-0.73199,1.68184q-0.56179,-0.34467 -1.21828,-0.4651q-0.65521,-0.14258 -1.29378,-0.14258q-0.6936,0 -1.10567,0.34467q-0.39287,0.32391 -0.39287,1.03402q0,0.54816 0.35576,0.87207q0.37495,0.30453 0.95594,0.54677q0.58099,0.24362 1.23748,0.48725q0.65521,0.24362 1.21828,0.62844q0.58099,0.36544 0.95594,0.93297q0.37495,0.56754 0.37495,1.46037q0,0.87207 -0.31865,1.51989q-0.31865,0.64921 -0.86252,1.07555q-0.54387,0.42496 -1.25539,0.62844q-0.7128,0.2021 -1.51901,0.2021q-0.48757,0 -0.89963,-0.01938q-0.41207,-0.04153 -0.80621,-0.14258q-0.39287,-0.10105 -0.78702,-0.30453q-0.39415,-0.2021 -0.86252,-0.54677z\"\r\n            fill=\"#000000\" id=\"svg_4\" />\r\n        </g>\r\n        <style transform=\"matrix(0.16993257770057912,0,0,0.16993257770057912,0,0) \">\r\n          tspan {\r\n            white-space: pre\r\n          }\r\n        </style>\r\n        <g stroke=\"null\" id=\"svg_13\">\r\n          <path stroke=\"null\"\r\n            d=\"m130.5682,101.38898l-3.20768,0l-4.70835,-15.45005l2.81743,0l3.51652,13.26099l3.72147,-13.26099l2.79637,0l-4.93576,15.45005zm12.54436,-11.96863q1.39818,0 2.46788,0.58498q1.0697,0.56221 1.74773,1.52152q0.69909,0.93796 0.98687,2.18905q0.30884,1.22974 0.12353,2.56481l-8.06062,0q0,0.66611 0.24707,1.22974q0.24567,0.56221 0.65698,0.97924q0.43237,0.3971 1.00793,0.62626q0.59662,0.22915 1.27465,0.22915q0.22601,0 0.5559,-0.04128q0.34955,-0.06263 0.71875,-0.18788q0.39166,-0.1466 0.76086,-0.3544q0.39166,-0.20923 0.67944,-0.50101l0.90405,1.39769q-0.67804,0.85399 -1.58349,1.29237q-0.90405,0.43838 -2.30223,0.43838q-1.13146,0 -2.11833,-0.45973q-0.98687,-0.47966 -1.68596,-1.29237q-0.69909,-0.81271 -1.11041,-1.89727q-0.41131,-1.08456 -0.41131,-2.33565q0,-1.22974 0.41131,-2.31288q0.41131,-1.10591 1.08935,-1.91862q0.69909,-0.81271 1.64525,-1.27244q0.94616,-0.47966 1.9948,-0.47966zm-2.65318,5.02571l5.67556,0q0,-0.56363 -0.20495,-1.10591q-0.20636,-0.54228 -0.57556,-0.97924q-0.34955,-0.43838 -0.86474,-0.68888q-0.51379,-0.27043 -1.11041,-0.29178q-0.63733,0 -1.17217,0.2505q-0.53344,0.2505 -0.9251,0.66753q-0.39026,0.41703 -0.61627,1.00059q-0.20636,0.56363 -0.20636,1.14719zm17.97285,-4.98301l0,2.62601q-0.57556,-0.16653 -1.39818,-0.18645q-0.7398,0 -1.48101,0.18645q-0.71875,0.16795 -1.15112,0.58498l0,4.46066l0,0.0427l0,4.1276l-2.48753,0l0,-11.7594l2.22081,0l0.26672,1.20981q0.30884,-0.31313 0.63733,-0.56363q0.34955,-0.24908 0.80157,-0.39568q0.45343,-0.16653 1.0697,-0.2505q0.61767,-0.08255 1.52172,-0.08255zm11.06335,5.4826l0,2.71141l0,0.16653q0,0.16653 0.02106,0.49958q0.01965,0.31313 0.08142,0.64618q0.06177,0.33448 0.1853,0.60491q0.14459,0.27185 0.3706,0.3544l-0.65838,1.39769q-0.26813,0 -0.57556,-0.12525q-0.28778,-0.12525 -0.57556,-0.3544q-0.26813,-0.22915 -0.47308,-0.50101q-0.1853,-0.29178 -0.28778,-0.62483q-0.14459,0.3544 -0.51519,0.66611q-0.34955,0.2932 -0.80157,0.54228q-0.45202,0.22915 -0.98687,0.3544q-0.51379,0.12525 -0.96581,0.12525q-0.7005,0 -1.35747,-0.18788q-0.63733,-0.18645 -1.13146,-0.60348q-0.49414,-0.41703 -0.78192,-1.10591q-0.26672,-0.68746 -0.26672,-1.68805q0,-0.95931 0.39026,-1.64819q0.41131,-0.70881 1.02899,-1.14577q0.63733,-0.45831 1.4389,-0.66753q0.80157,-0.22915 1.6242,-0.22915l1.74773,0q0,-1.02194 -0.10248,-1.62684q-0.10248,-0.60348 -0.34955,-0.87534q-0.24707,-0.29178 -0.61627,-0.3544q-0.34955,-0.08255 -0.84368,-0.08255q-0.45202,0 -0.86334,0.12383q-0.39026,0.10533 -0.7398,0.27185q-0.32989,0.14518 -0.59662,0.33305q-0.24707,0.18788 -0.3706,0.29178l-0.9251,-1.43754q0.20495,-0.23058 0.61627,-0.45973q0.41131,-0.2505 0.94616,-0.43696q0.53485,-0.18788 1.15252,-0.29178q0.63733,-0.12525 1.31536,-0.12525q0.61627,0 1.19323,0.12525q0.59521,0.12383 1.06829,0.41703q0.49414,0.29178 0.84368,0.79136q0.3706,0.47966 0.51379,1.20981q0.14459,0.72874 0.1853,1.48024q0.06177,0.73016 0.06177,1.45889zm-2.46788,3.54405l0,-2.87651l-1.31536,0q-0.41131,0 -0.86474,0.08398q-0.45202,0.08255 -0.84228,0.31171q-0.39166,0.22915 -0.65838,0.66753q-0.24707,0.41703 -0.24707,1.08456q0,1.04186 0.45343,1.50017q0.47168,0.45973 1.35607,0.45973q0.61767,0 1.17217,-0.33448q0.57556,-0.33305 0.94616,-0.89669z\"\r\n            fill=\"#000000\" id=\"svg_11\" />\r\n        </g>\r\n        <style transform=\"matrix(0.1557975638007472,0,0,0.1557975638007472,0,0) \">\r\n          tspan {\r\n            white-space: pre\r\n          }\r\n        </style>\r\n        <g stroke=\"null\" id=\"svg_19\">\r\n          <path stroke=\"null\"\r\n            d=\"m207.214,71.6991l-6.751,0l0,4.33274l6.13381,0l0,1.53093l-6.13381,0l0,4.49972l6.751,0l0,1.69919l-9.18033,0l0,-13.76176l9.18033,0l0,1.69919zm4.04163,14.71397l1.39479,-1.28873q0.19848,0.3174 0.49756,0.52263q0.31811,0.2065 0.63758,0.31868q0.3385,0.1109 0.65661,0.16699q0.3385,0.03824 0.59816,0.03824q1.23438,0 1.93041,-0.67305q0.6974,-0.67177 0.6974,-2.29575l0,-0.48566l0,-0.03824l0.02039,-0.09305q0,-0.01785 -0.02039,-0.03697q0,-0.01912 0,-0.03697q-0.05982,0.24219 -0.35889,0.48439q-0.27869,0.24347 -0.71643,0.4487q-0.43774,0.18611 -0.99511,0.29828q-0.55737,0.11217 -1.15553,0.11217q-1.11474,0 -1.9508,-0.44742q-0.83742,-0.46782 -1.39479,-1.23264q-0.55737,-0.7661 -0.81567,-1.75528q-0.25965,-0.98917 -0.25965,-2.07268q0,-1.45699 0.41871,-2.44617q0.43774,-0.98917 1.09435,-1.60613q0.677,-0.63481 1.49403,-0.89612q0.83606,-0.26132 1.63269,-0.26132q0.97608,0 1.77272,0.3174q0.81567,0.3174 1.23438,0.84003l0.25965,-1.06438l2.15064,0l-0.02039,10.53165q-0.08021,1.13959 -0.49756,1.94138q-0.39832,0.80307 -1.0359,1.3257q-0.63758,0.52391 -1.47364,0.74698q-0.83606,0.22435 -1.79175,0.22435q-1.1161,0 -2.21046,-0.35437q-1.07532,-0.37349 -1.79311,-1.23264zm6.57156,-7.99115q0,-0.74698 -0.19848,-1.38179q-0.19984,-0.63481 -0.53834,-1.12047q-0.3385,-0.48566 -0.83606,-0.7661q-0.49756,-0.28044 -1.07532,-0.28044q-0.5968,0 -1.09571,0.29956q-0.47717,0.27916 -0.81567,0.76483q-0.3385,0.48566 -0.51795,1.13959q-0.17945,0.65393 -0.17945,1.38179q0,0.74698 0.17945,1.41875q0.19848,0.65393 0.53698,1.13959q0.35889,0.48566 0.83742,0.78395q0.49756,0.28044 1.09435,0.28044q0.61719,0 1.09571,-0.28044q0.47852,-0.29828 0.79663,-0.78395q0.3385,-0.50478 0.51795,-1.17656q0.19848,-0.67305 0.19848,-1.41875zm10.83342,-5.30407q1.35401,0 2.3899,0.52391q1.0359,0.50351 1.69251,1.36266q0.677,0.84003 0.95569,1.9605q0.29908,1.10135 0.11963,2.29703l-7.80593,0q0,0.59656 0.23926,1.10135q0.2379,0.50351 0.63622,0.877q0.41871,0.35564 0.97608,0.56087q0.57776,0.20523 1.23438,0.20523q0.21887,0 0.53834,-0.03697q0.3385,-0.05609 0.6974,-0.16826q0.37793,-0.1313 0.73546,-0.3174q0.37929,-0.18738 0.65797,-0.4487l0.87548,1.25176q-0.65661,0.76483 -1.53345,1.15744q-0.87548,0.39261 -2.22949,0.39261q-1.09571,0 -2.0514,-0.41173q-0.95569,-0.42958 -1.63269,-1.15744q-0.677,-0.72786 -1.07532,-1.69919q-0.39832,-0.97133 -0.39832,-2.0918q0,-1.10135 0.39832,-2.0714q0.39832,-0.99045 1.05493,-1.71831q0.677,-0.72786 1.59327,-1.13959q0.91627,-0.42958 1.93177,-0.42958zm-2.56935,4.501l5.49624,0q0,-0.50478 -0.19848,-0.99045q-0.19984,-0.48566 -0.55737,-0.877q-0.3385,-0.39261 -0.83742,-0.61696q-0.49756,-0.24219 -1.07532,-0.26132q-0.61719,0 -1.13378,0.22435q-0.51795,0.22435 -0.89723,0.59784q-0.37793,0.37349 -0.5968,0.89612q-0.19984,0.50478 -0.19984,1.02742zm19.2375,0.44742l0,2.42832l0,0.14914q0,0.14914 0.01903,0.44742q0.02039,0.28044 0.08021,0.57872q0.05982,0.29956 0.17945,0.54175q0.13866,0.24347 0.35889,0.3174l-0.63758,1.25176q-0.25965,0 -0.55737,-0.11217q-0.27869,-0.11217 -0.55873,-0.3174q-0.25829,-0.20523 -0.45677,-0.4487q-0.17945,-0.26132 -0.28005,-0.5596q-0.13866,0.3174 -0.49756,0.59656q-0.3385,0.26259 -0.77624,0.48566q-0.43774,0.20523 -0.95569,0.3174q-0.49756,0.11217 -0.93666,0.11217q-0.677,0 -1.31322,-0.16826q-0.61855,-0.16699 -1.09571,-0.54048q-0.47852,-0.37349 -0.75721,-0.99045q-0.25829,-0.61568 -0.25829,-1.51181q0,-0.85915 0.37793,-1.47611q0.39832,-0.63481 0.99647,-1.02614q0.61719,-0.41046 1.39343,-0.59784q0.77624,-0.20523 1.57288,-0.20523l1.69251,0q0,-0.91524 -0.09924,-1.45699q-0.09924,-0.54048 -0.3385,-0.78395q-0.23926,-0.26132 -0.5968,-0.3174q-0.3385,-0.07393 -0.81703,-0.07393q-0.43774,0 -0.83606,0.1109q-0.37929,0.09433 -0.71779,0.24347q-0.31811,0.13002 -0.5764,0.29828q-0.23926,0.16826 -0.35889,0.26132l-0.89587,-1.28746q0.19848,-0.2065 0.5968,-0.41173q0.39832,-0.22435 0.91627,-0.39134q0.51795,-0.16826 1.11474,-0.26132q0.61719,-0.11217 1.27516,-0.11217q0.5968,0 1.15417,0.11217q0.57776,0.1109 1.0359,0.37349q0.47852,0.26132 0.81703,0.70874q0.35753,0.42958 0.49756,1.0835q0.14002,0.65265 0.17945,1.3257q0.05982,0.65393 0.05982,1.30658zm-2.3899,3.17403l0,-2.57619l-1.27516,0q-0.39832,0 -0.83606,0.07521q-0.43774,0.07393 -0.81567,0.27916q-0.37929,0.20523 -0.63758,0.59784q-0.23926,0.37349 -0.23926,0.97133q0,0.93309 0.43774,1.34354q0.45813,0.41173 1.31458,0.41173q0.59816,0 1.13514,-0.29956q0.55737,-0.29828 0.91627,-0.80307z\"\r\n            fill=\"#000000\" id=\"svg_17\" />\r\n        </g>\r\n        <g id=\"svg_24\">\r\n          <defs>\r\n            <image class=\"cls-2\" id=\"svg_23\" height=\"1024\" width=\"1024\" />\r\n          </defs>\r\n          <style transform=\"matrix(0.016862059667958285,0,0,0.016862059667958285,0,0) \">\r\n            tspan {\r\n              white-space: pre\r\n            }\r\n          </style>\r\n        </g>\r\n        <image class=\"cls-3\" stroke=\"null\"\r\n          xlink:href=\"data:image/png;base64,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\"\r\n          id=\"svg_25\" height=\"128.42589\" width=\"125.46496\" y=\"183.33286\" x=\"83.95304\" />\r\n        <image class=\"cls-6\" stroke=\"null\"\r\n          xlink:href=\"data:image/png;base64,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\"\r\n          id=\"svg_27\" height=\"105.16973\" width=\"106.29182\" y=\"197.62914\" x=\"95.60318\" />\r\n      </g>\r\n    </svg>\r\n\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "iTUp":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./safe.pipe */ "YYwF");




let PipesModule = class PipesModule {
};
PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipe"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipe"]
        ]
    })
], PipesModule);



/***/ }),

/***/ "inwZ":
/*!*****************************************************************!*\
  !*** ./src/app/components/form-jefes/form-jefes.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS1qZWZlcy9mb3JtLWplZmVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _splash_splash_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./splash/splash.component */ "6P09");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "2MiI");
/* harmony import */ var _form_mesas_form_mesas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-mesas/form-mesas.component */ "jcV/");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _listado_mesas_listado_mesas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./listado-mesas/listado-mesas.component */ "M52Y");
/* harmony import */ var _form_producto_form_producto_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-producto/form-producto.component */ "K+8f");
/* harmony import */ var _listado_productos_listado_productos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./listado-productos/listado-productos.component */ "Ce3Y");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");
/* harmony import */ var _detalle_mesa_detalle_mesa_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./detalle-mesa/detalle-mesa.component */ "mqnL");
/* harmony import */ var _form_clientes_form_clientes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./form-clientes/form-clientes.component */ "IT5Z");
/* harmony import */ var _listado_clientes_listado_clientes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./listado-clientes/listado-clientes.component */ "Iw3i");
/* harmony import */ var _detalle_cliente_detalle_cliente_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./detalle-cliente/detalle-cliente.component */ "7+Lc");
/* harmony import */ var _form_empleados_form_empleados_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./form-empleados/form-empleados.component */ "PaxZ");
/* harmony import */ var _listado_empleados_listado_empleados_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./listado-empleados/listado-empleados.component */ "nPMz");
/* harmony import */ var _detalle_empleado_detalle_empleado_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./detalle-empleado/detalle-empleado.component */ "KiqU");
/* harmony import */ var _form_jefes_form_jefes_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./form-jefes/form-jefes.component */ "RE5y");
/* harmony import */ var _listado_jefes_listado_jefes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./listado-jefes/listado-jefes.component */ "7pTb");
/* harmony import */ var _detalle_jefe_detalle_jefe_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./detalle-jefe/detalle-jefe.component */ "YXps");
/* harmony import */ var _form_reserva_form_reserva_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./form-reserva/form-reserva.component */ "/MG/");
/* harmony import */ var _listado_reservas_listado_reservas_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./listado-reservas/listado-reservas.component */ "+jxx");
/* harmony import */ var _listado_pedidos_listado_pedidos_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./listado-pedidos/listado-pedidos.component */ "pDsL");
/* harmony import */ var _form_pedido_form_pedido_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./form-pedido/form-pedido.component */ "IDAD");
/* harmony import */ var _detalle_pedido_detalle_pedido_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./detalle-pedido/detalle-pedido.component */ "dmHp");
/* harmony import */ var _detalle_reserva_detalle_reserva_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./detalle-reserva/detalle-reserva.component */ "4ud6");
/* harmony import */ var _foto_foto_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./foto/foto.component */ "wH85");
/* harmony import */ var _detalle_producto_detalle_producto_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./detalle-producto/detalle-producto.component */ "3LTz");
/* harmony import */ var _lista_platos_cliente_lista_platos_cliente_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./lista-platos-cliente/lista-platos-cliente.component */ "YZZB");
/* harmony import */ var _escaner_escaner_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./escaner/escaner.component */ "L12R");













// Usuarios



















let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _splash_splash_component__WEBPACK_IMPORTED_MODULE_3__["SplashComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
            _foto_foto_component__WEBPACK_IMPORTED_MODULE_28__["FotoComponent"],
            _escaner_escaner_component__WEBPACK_IMPORTED_MODULE_31__["EscanerQRComponent"],
            // Mesa
            _detalle_mesa_detalle_mesa_component__WEBPACK_IMPORTED_MODULE_12__["DetalleMesaComponent"],
            _form_mesas_form_mesas_component__WEBPACK_IMPORTED_MODULE_5__["FormMesasComponent"],
            _listado_mesas_listado_mesas_component__WEBPACK_IMPORTED_MODULE_8__["ListadoMesasComponent"],
            // Productos
            _detalle_producto_detalle_producto_component__WEBPACK_IMPORTED_MODULE_29__["DetalleProductoComponent"],
            _form_producto_form_producto_component__WEBPACK_IMPORTED_MODULE_9__["FormProductoComponent"],
            _listado_productos_listado_productos_component__WEBPACK_IMPORTED_MODULE_10__["ListadoProductosComponent"],
            //Reservas
            _form_reserva_form_reserva_component__WEBPACK_IMPORTED_MODULE_22__["FormReservaComponent"],
            _listado_reservas_listado_reservas_component__WEBPACK_IMPORTED_MODULE_23__["ListadoReservasComponent"],
            _detalle_reserva_detalle_reserva_component__WEBPACK_IMPORTED_MODULE_27__["DetalleReservaComponent"],
            // Usuarios
            _form_clientes_form_clientes_component__WEBPACK_IMPORTED_MODULE_13__["FormClientesComponent"],
            _listado_clientes_listado_clientes_component__WEBPACK_IMPORTED_MODULE_14__["ListadoClientesComponent"],
            _detalle_cliente_detalle_cliente_component__WEBPACK_IMPORTED_MODULE_15__["DetalleClienteComponent"],
            _form_empleados_form_empleados_component__WEBPACK_IMPORTED_MODULE_16__["FormEmpleadosComponent"],
            _listado_empleados_listado_empleados_component__WEBPACK_IMPORTED_MODULE_17__["ListadoEmpleadosComponent"],
            _detalle_empleado_detalle_empleado_component__WEBPACK_IMPORTED_MODULE_18__["DetalleEmpleadoComponent"],
            _form_jefes_form_jefes_component__WEBPACK_IMPORTED_MODULE_19__["FormJefesComponent"],
            _listado_jefes_listado_jefes_component__WEBPACK_IMPORTED_MODULE_20__["ListadoJefesComponent"],
            _detalle_jefe_detalle_jefe_component__WEBPACK_IMPORTED_MODULE_21__["DetalleJefeComponent"],
            //Pedidos
            _listado_pedidos_listado_pedidos_component__WEBPACK_IMPORTED_MODULE_24__["ListadoPedidosComponent"],
            _form_pedido_form_pedido_component__WEBPACK_IMPORTED_MODULE_25__["FormPedidoComponent"],
            _detalle_pedido_detalle_pedido_component__WEBPACK_IMPORTED_MODULE_26__["DetallePedidoComponent"],
            _lista_platos_cliente_lista_platos_cliente_component__WEBPACK_IMPORTED_MODULE_30__["ListaPlatosClienteComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"]
        ],
        exports: [
            _splash_splash_component__WEBPACK_IMPORTED_MODULE_3__["SplashComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
            _foto_foto_component__WEBPACK_IMPORTED_MODULE_28__["FotoComponent"],
            _escaner_escaner_component__WEBPACK_IMPORTED_MODULE_31__["EscanerQRComponent"],
            // Mesa
            _form_mesas_form_mesas_component__WEBPACK_IMPORTED_MODULE_5__["FormMesasComponent"],
            _detalle_mesa_detalle_mesa_component__WEBPACK_IMPORTED_MODULE_12__["DetalleMesaComponent"],
            _listado_mesas_listado_mesas_component__WEBPACK_IMPORTED_MODULE_8__["ListadoMesasComponent"],
            //Reservas
            _form_reserva_form_reserva_component__WEBPACK_IMPORTED_MODULE_22__["FormReservaComponent"],
            _listado_reservas_listado_reservas_component__WEBPACK_IMPORTED_MODULE_23__["ListadoReservasComponent"],
            _detalle_reserva_detalle_reserva_component__WEBPACK_IMPORTED_MODULE_27__["DetalleReservaComponent"],
            // Producto
            _detalle_producto_detalle_producto_component__WEBPACK_IMPORTED_MODULE_29__["DetalleProductoComponent"],
            _listado_productos_listado_productos_component__WEBPACK_IMPORTED_MODULE_10__["ListadoProductosComponent"],
            _form_producto_form_producto_component__WEBPACK_IMPORTED_MODULE_9__["FormProductoComponent"],
            // Usuarios
            _form_clientes_form_clientes_component__WEBPACK_IMPORTED_MODULE_13__["FormClientesComponent"],
            _listado_clientes_listado_clientes_component__WEBPACK_IMPORTED_MODULE_14__["ListadoClientesComponent"],
            _detalle_cliente_detalle_cliente_component__WEBPACK_IMPORTED_MODULE_15__["DetalleClienteComponent"],
            _form_empleados_form_empleados_component__WEBPACK_IMPORTED_MODULE_16__["FormEmpleadosComponent"],
            _listado_empleados_listado_empleados_component__WEBPACK_IMPORTED_MODULE_17__["ListadoEmpleadosComponent"],
            _detalle_empleado_detalle_empleado_component__WEBPACK_IMPORTED_MODULE_18__["DetalleEmpleadoComponent"],
            _form_jefes_form_jefes_component__WEBPACK_IMPORTED_MODULE_19__["FormJefesComponent"],
            _listado_jefes_listado_jefes_component__WEBPACK_IMPORTED_MODULE_20__["ListadoJefesComponent"],
            _detalle_jefe_detalle_jefe_component__WEBPACK_IMPORTED_MODULE_21__["DetalleJefeComponent"],
            //Pedidos
            _listado_pedidos_listado_pedidos_component__WEBPACK_IMPORTED_MODULE_24__["ListadoPedidosComponent"],
            _form_pedido_form_pedido_component__WEBPACK_IMPORTED_MODULE_25__["FormPedidoComponent"],
            _detalle_pedido_detalle_pedido_component__WEBPACK_IMPORTED_MODULE_26__["DetallePedidoComponent"],
            _lista_platos_cliente_lista_platos_cliente_component__WEBPACK_IMPORTED_MODULE_30__["ListaPlatosClienteComponent"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "jcV/":
/*!***************************************************************!*\
  !*** ./src/app/components/form-mesas/form-mesas.component.ts ***!
  \***************************************************************/
/*! exports provided: FormMesasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormMesasComponent", function() { return FormMesasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_form_mesas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./form-mesas.component.html */ "205c");
/* harmony import */ var _form_mesas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-mesas.component.scss */ "0/8o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_clases_imagen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/clases/imagen */ "7mdY");
/* harmony import */ var src_app_clases_mesa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/clases/mesa */ "sV09");
/* harmony import */ var src_app_services_imagen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/imagen.service */ "bSsp");
/* harmony import */ var src_app_services_mesa_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/mesa.service */ "R+YK");
/* harmony import */ var src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/uivisual.service */ "KPCj");










var OpcionForm;
(function (OpcionForm) {
    OpcionForm["ALTA"] = "Alta";
    OpcionForm["MODIFICACION"] = "Modificaci\u00F3n";
    OpcionForm["BAJA"] = "Baja";
})(OpcionForm || (OpcionForm = {}));
let FormMesasComponent = class FormMesasComponent {
    constructor(mesaService, imagenService, toastController, UIVisual) {
        this.mesaService = mesaService;
        this.imagenService = imagenService;
        this.toastController = toastController;
        this.UIVisual = UIVisual;
        this.popoverOptions = {
            header: 'Seleccione el tipo',
            translucent: true,
        };
    }
    ngOnInit() {
        if (this.opcion == 'Alta') {
            this.mesa = new src_app_clases_mesa__WEBPACK_IMPORTED_MODULE_6__["Mesa"]();
        }
    }
    /**
     * Método para tomar foto y previsualizar
     */
    sacarFoto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const foto = yield this.imagenService.sacarFoto();
            this.imgPreview = `data:image/jpeg;base64,${foto.base64}`;
            this.auxiliarFoto = new src_app_clases_imagen__WEBPACK_IMPORTED_MODULE_5__["Imagen"]();
            this.auxiliarFoto.base64 = foto.base64;
            this.auxiliarFoto.fecha = foto.fecha;
        });
    }
    /**
     * Alta de mesa
     */
    crearMesa() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.mesa && !this.mesa.id) {
                // Se guarda imagen en DB y Storage
                const imagenGuardada = yield this.imagenService.crearUnaImagen(this.auxiliarFoto, '/mesas');
                this.mesa.foto = imagenGuardada;
                // Alta de mesa en DB
                this.mesaService.crear(this.mesa)
                    .then(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_9__["UIVisualService"].presentToast('Alta exitosa'))
                    .catch(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_9__["UIVisualService"].presentToast('No se pudo realizar el alta'));
            }
            else {
                src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_9__["UIVisualService"].presentToast('Mesa existente');
            }
        });
    }
    /**
     *  Modificacion de mesa
     */
    modificarMesa() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Modificar Mesa');
            if (this.mesa) {
                // Si se carga nueva Imagen
                if (this.auxiliarFoto) {
                    // Se guarda imagen en DB y Storage
                    const imagenGuardada = yield this.imagenService.crearUnaImagen(this.auxiliarFoto, '/mesas');
                    this.mesa.foto = imagenGuardada;
                }
                // Se actualiza Mesa en DB
                this.mesaService.actualizar(this.mesa)
                    .then(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_9__["UIVisualService"].presentToast('Modificación exitosa'))
                    .catch(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_9__["UIVisualService"].presentToast('No se pudo modificar'));
            }
        });
    }
    /**
     * Baja lógica de mesa
     */
    borrarMesa() {
        console.log('Baja de mesa');
        if (this.mesa) {
            // TODO: Borrar imagen de DB y Storage
            // this.imagenService.borrar(this.mesa.foto)
            this.mesaService.borrar(this.mesa)
                .then(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_9__["UIVisualService"].presentToast('Baja realizada'))
                .catch(() => src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_9__["UIVisualService"].presentToast('No se pudo realizar baja'));
        }
    }
};
FormMesasComponent.ctorParameters = () => [
    { type: src_app_services_mesa_service__WEBPACK_IMPORTED_MODULE_8__["MesaService"] },
    { type: src_app_services_imagen_service__WEBPACK_IMPORTED_MODULE_7__["ImagenService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_9__["UIVisualService"] }
];
FormMesasComponent.propDecorators = {
    opcion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    mesa: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
FormMesasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-form-mesas',
        template: _raw_loader_form_mesas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_form_mesas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FormMesasComponent);



/***/ }),

/***/ "k3lB":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/detalle-jefe/detalle-jefe.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ion-activatable card-jefe\">\r\n  <ion-card mode=\"ios\" color=\"dark\">\r\n    <ion-card-header>\r\n      <ion-card-title>Jefe: {{ jefe.nombre }} {{ jefe.apellido }}</ion-card-title>\r\n    </ion-card-header>\r\n\r\n    <!-- TODO: show images-->\r\n    <!--ion-img [src]=\"jefe.foto.url\"></ion-img-->\r\n\r\n    <ion-card-content>\r\n      <ion-chip color=\"light\" mode=\"ios\" outline=\"true\">\r\n        <ion-label>Tipo:{{ jefe.tipo }}</ion-label>\r\n      </ion-chip>\r\n      <ion-chip color=\"light\" mode=\"ios\" outline=\"true\">\r\n        <ion-label>DNI:{{ jefe.dni }}</ion-label>\r\n      </ion-chip>\r\n      <ion-chip color=\"light\" mode=\"ios\" outline=\"true\">\r\n        <ion-label>CUIL:{{ jefe.cuil }}</ion-label>\r\n      </ion-chip>\r\n    </ion-card-content>\r\n    <ion-button (click)=\"sacarFoto()\" size=\"large\" expand=\"block\" fill=\"solid\" color=\"light\">\r\n      Sacar foto\r\n    </ion-button>\r\n  </ion-card>\r\n</div>");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "kOHe":
/*!*********************************************************************!*\
  !*** ./src/app/components/detalle-mesa/detalle-mesa.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWxsZS1tZXNhL2RldGFsbGUtbWVzYS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "kiek":
/*!*****************************************************************************!*\
  !*** ./src/app/components/listado-reservas/listado-reservas.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdGFkby1yZXNlcnZhcy9saXN0YWRvLXJlc2VydmFzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cliente.service */ "teE5");
/* harmony import */ var _empleado_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./empleado.service */ "5RfW");
/* harmony import */ var _jefe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jefe.service */ "97Z+");
var AuthService_1;






let AuthService = AuthService_1 = class AuthService {
    constructor(afAuth, clienteService, empleadoService, jefeService) {
        this.afAuth = afAuth;
        this.clienteService = clienteService;
        this.empleadoService = empleadoService;
        this.jefeService = jefeService;
        this.isLogged = false;
        //afAuth.authState.subscribe(user => this.isLogged = user);
    }
    onLogin(usuario) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const credential = yield this.afAuth.signInWithEmailAndPassword(usuario.email, usuario.password);
                this.isLogged = true;
                return credential.user.uid;
            }
            catch (error) {
                console.log('Login failed', error);
            }
        });
    }
    onLoginAnonymously() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const credential = yield this.afAuth.signInAnonymously();
                this.isLogged = true;
                return credential.user.uid;
            }
            catch (error) {
                console.log('Login Anonymously failed', error);
            }
        });
    }
    onLoginTesting(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const credential = yield this.afAuth.signInWithEmailAndPassword(email, password);
                this.isLogged = true;
                return credential.user.uid;
            }
            catch (error) {
                console.log('Login failed', error);
            }
        });
    }
    onRegisterCliente(cliente) {
        return new Promise((resolve, reject) => {
            this.afAuth.createUserWithEmailAndPassword(cliente.email, cliente.password)
                .then(response => {
                cliente.password = null;
                this.clienteService.crear(cliente, response.user.uid);
                resolve(response);
            }, error => reject(error));
        });
    }
    onRegisterEmpleado(empleado) {
        return new Promise((resolve, reject) => {
            this.afAuth.createUserWithEmailAndPassword(empleado.email, empleado.password)
                .then(response => {
                empleado.password = null;
                this.empleadoService.crear(empleado, response.user.uid);
                resolve(response);
            }, error => reject(error));
        });
    }
    onRegisterJefe(jefe) {
        return new Promise((resolve, reject) => {
            this.afAuth.createUserWithEmailAndPassword(jefe.email, jefe.password)
                .then(response => {
                jefe.password = null;
                this.jefeService.crear(jefe, response.user.uid);
                resolve(response);
            }, error => reject(error));
        });
    }
    onLogout() {
        try {
            this.afAuth.signOut();
            this.isLogged = false;
            AuthService_1.usuario = null;
        }
        catch (error) {
            console.log('Logout failed', error);
        }
    }
};
AuthService.usuario = null;
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"] },
    { type: _empleado_service__WEBPACK_IMPORTED_MODULE_4__["EmpleadoService"] },
    { type: _jefe_service__WEBPACK_IMPORTED_MODULE_5__["JefeService"] }
];
AuthService = AuthService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "lo5X":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/foto/foto.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-skeleton-text *ngIf=\"!img\" animated style=\"width: 50%\"></ion-skeleton-text>\r\n<img *ngIf=\"img\" [src]=\"img.url\" alt=\"\">");

/***/ }),

/***/ "mA1N":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/listado-empleados/listado-empleados.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid fixed>\r\n  <ion-row class=\"contenido\" *ngFor=\"let empleado of empleados\">\r\n    <ion-col size=\"12\" size-lg=\"6\" (click)=\"seleccionarEmpleadoDelListado(empleado)\" color=\"dark\"\r\n             class=\"ion-justify-content-center\">\r\n\r\n      <app-detalle-empleado [empleado]=\"empleado\"></app-detalle-empleado>\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ "mqnL":
/*!*******************************************************************!*\
  !*** ./src/app/components/detalle-mesa/detalle-mesa.component.ts ***!
  \*******************************************************************/
/*! exports provided: DetalleMesaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleMesaComponent", function() { return DetalleMesaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalle_mesa_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalle-mesa.component.html */ "P6PU");
/* harmony import */ var _detalle_mesa_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalle-mesa.component.scss */ "kOHe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DetalleMesaComponent = class DetalleMesaComponent {
    constructor() { }
    ngOnInit() { }
};
DetalleMesaComponent.ctorParameters = () => [];
DetalleMesaComponent.propDecorators = {
    mesa: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
DetalleMesaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalle-mesa',
        template: _raw_loader_detalle_mesa_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalle_mesa_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetalleMesaComponent);



/***/ }),

/***/ "nPMz":
/*!*****************************************************************************!*\
  !*** ./src/app/components/listado-empleados/listado-empleados.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ListadoEmpleadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoEmpleadosComponent", function() { return ListadoEmpleadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_listado_empleados_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./listado-empleados.component.html */ "mA1N");
/* harmony import */ var _listado_empleados_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listado-empleados.component.scss */ "MC74");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ListadoEmpleadosComponent = class ListadoEmpleadosComponent {
    constructor(loadingController) {
        this.loadingController = loadingController;
        this.empleados = [];
        this.seleccionarEmpleado = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.loadingTime = 2000;
    }
    ngOnInit() {
        this.presentLoading('Cargando empleados...');
    }
    /**
     * Método para enviar empleado seleccionado
     * @param empleado Empleado seleccionado
     */
    seleccionarEmpleadoDelListado(empleado) {
        this.seleccionarEmpleado.emit(empleado);
    }
    //TODO: do this method generic for all lists
    presentLoading(message, duration) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (duration === undefined || duration <= 0) {
                duration = this.loadingTime;
            }
            const loading = yield this.loadingController.create({
                message,
                duration,
                spinner: 'crescent'
            });
            yield loading.present();
        });
    }
};
ListadoEmpleadosComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
ListadoEmpleadosComponent.propDecorators = {
    empleados: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    seleccionarEmpleado: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
ListadoEmpleadosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-listado-empleados',
        template: _raw_loader_listado_empleados_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_listado_empleados_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListadoEmpleadosComponent);



/***/ }),

/***/ "oHuE":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "oPqm":
/*!*************************************************************************!*\
  !*** ./src/app/components/form-empleados/form-empleados.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS1lbXBsZWFkb3MvZm9ybS1lbXBsZWFkb3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "pDsL":
/*!*************************************************************************!*\
  !*** ./src/app/components/listado-pedidos/listado-pedidos.component.ts ***!
  \*************************************************************************/
/*! exports provided: ListadoPedidosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoPedidosComponent", function() { return ListadoPedidosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_listado_pedidos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./listado-pedidos.component.html */ "QQjj");
/* harmony import */ var _listado_pedidos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listado-pedidos.component.scss */ "dGQJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/uivisual.service */ "KPCj");





let ListadoPedidosComponent = class ListadoPedidosComponent {
    constructor(UIVisual) {
        this.UIVisual = UIVisual;
        this.elegirPedido = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() { }
    seleccionarPedido(pedido) {
        this.elegirPedido.emit(pedido);
    }
};
ListadoPedidosComponent.ctorParameters = () => [
    { type: src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_4__["UIVisualService"] }
];
ListadoPedidosComponent.propDecorators = {
    pedidos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    elegirPedido: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
ListadoPedidosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-listado-pedidos',
        template: _raw_loader_listado_pedidos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_listado_pedidos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListadoPedidosComponent);



/***/ }),

/***/ "qko+":
/*!***********************************************!*\
  !*** ./src/app/services/codigo-qr.service.ts ***!
  \***********************************************/
/*! exports provided: Formato, CodigoQRService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Formato", function() { return Formato; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodigoQRService", function() { return CodigoQRService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _imagen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imagen.service */ "bSsp");
/* harmony import */ var _clases_imagen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../clases/imagen */ "7mdY");
/* harmony import */ var _ionic_native_barcode_scanner_ngx___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx/ */ "WdVq");





var Formato;
(function (Formato) {
    Formato["PDF_417"] = "PDF_417";
    Formato["QR_CODE"] = "QR_CODE"; // Formato de QR común 
})(Formato || (Formato = {}));
let CodigoQRService = class CodigoQRService {
    constructor(barcodeScanner, imagenService) {
        this.barcodeScanner = barcodeScanner;
        this.imagenService = imagenService;
    }
    /**
     * Método para leer un código QR
     * @param prompt Mensaje para mostrar al Usuario
     * @param formats Formato de lectura : PDF_417 , QR_CODE
     * @returns Retorna la informacion del QR como string
     */
    escanear(prompt, formats) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("Leer QR");
            let scannerOpts = {
                prompt,
                formats,
                showTorchButton: true,
            };
            const scan = yield this.barcodeScanner.scan(scannerOpts);
            return scan;
        });
    }
    /**
     * Método para generar QR
     * @param elemento Objeto con data para generar QR
     * @param id UID que identificará al objeto
     */
    generar(elemento, id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data = `BEGIN:${elemento.constructor.name}%3A${id}`;
            // Se genera el código QR
            const ruta = `http://api.qrserver.com/v1/create-qr-code/?data=${data}&size=300x300&format=svg`;
            // Se convierte URL del código en string BASE64
            const base64 = yield this.convertirUrlABase64(ruta, "image/jpeg");
            // Se crea Imagen y se guarda en Storage
            let imagen = _clases_imagen__WEBPACK_IMPORTED_MODULE_3__["Imagen"].CrearImagen(id, base64.slice(23), "_", new Date().toUTCString(), "_");
            const imagenQR = yield this.imagenService.guardarImagen(imagen, "qr-mesas");
            // Se asocia URL del código QR 
            elemento.codigoQR = yield imagenQR.ref.getDownloadURL();
        });
    }
    /**
     * Método para convertir URL de imagen en string base64
     * @param url Ruta de la imagen para convertir en base64
     * @param outputFormat Formato de la imagen
     */
    convertirUrlABase64(url, outputFormat) {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.crossOrigin = 'Anonymous';
            img.onload = function () {
                let canvas = document.createElement('CANVAS');
                let ctx = canvas.getContext('2d');
                let dataURL;
                canvas.height = img.height;
                canvas.width = img.width;
                ctx.drawImage(img, 0, 0);
                dataURL = canvas.toDataURL(outputFormat);
                //callback(dataURL);
                canvas = null;
                resolve(dataURL);
            };
            img.src = url;
        });
    }
};
CodigoQRService.ctorParameters = () => [
    { type: _ionic_native_barcode_scanner_ngx___WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"] },
    { type: _imagen_service__WEBPACK_IMPORTED_MODULE_2__["ImagenService"] }
];
CodigoQRService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CodigoQRService);



/***/ }),

/***/ "sV09":
/*!********************************!*\
  !*** ./src/app/clases/mesa.ts ***!
  \********************************/
/*! exports provided: TipoMesa, Mesa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoMesa", function() { return TipoMesa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mesa", function() { return Mesa; });
var TipoMesa;
(function (TipoMesa) {
    TipoMesa["VIP"] = "Vip";
    TipoMesa["Discapacitados"] = "Discapacitados";
    TipoMesa["Normal"] = "Normal";
})(TipoMesa || (TipoMesa = {}));
class Mesa {
    static CrearMesa(id, numero, comensales, tipo, foto, codigoQR, isAvailable, isActive) {
        let mesa = new Mesa();
        mesa.id = id;
        mesa.numero = numero;
        mesa.comensales = comensales;
        mesa.tipo = tipo;
        mesa.foto = foto;
        mesa.codigoQR = codigoQR;
        mesa.isAvailable = isAvailable;
        mesa.isActive = isActive;
        return mesa;
    }
    setImage(imagen) {
        this.foto.base64 = imagen.base64;
        this.foto.url = imagen.url;
        this.foto.fecha = imagen.fecha;
        this.foto.rutaStorage = imagen.rutaStorage;
    }
}


/***/ }),

/***/ "tDE8":
/*!***********************************!*\
  !*** ./src/app/clases/cliente.ts ***!
  \***********************************/
/*! exports provided: EstadoAceptacion, Cliente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoAceptacion", function() { return EstadoAceptacion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cliente", function() { return Cliente; });
/* harmony import */ var _usuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuario */ "1Qa6");

var EstadoAceptacion;
(function (EstadoAceptacion) {
    EstadoAceptacion["Pendiente"] = "Pendiente";
    EstadoAceptacion["Aceptado"] = "Aceptado";
    EstadoAceptacion["Rechazado"] = "Rechazado";
    EstadoAceptacion["Anonimo"] = "An\u00F3nimo";
})(EstadoAceptacion || (EstadoAceptacion = {}));
class Cliente extends _usuario__WEBPACK_IMPORTED_MODULE_0__["Usuario"] {
    static CrearCliente(id, nombre, apellido, dni, foto, email, isActive, estado, enListaDeEspera) {
        let cliente = new Cliente();
        cliente.id = id;
        cliente.nombre = nombre;
        cliente.apellido = apellido;
        cliente.dni = dni;
        cliente.foto = foto;
        cliente.email = email;
        cliente.isActive = isActive;
        cliente.estado = estado;
        cliente.enListaDeEspera = enListaDeEspera;
        return cliente;
    }
}


/***/ }),

/***/ "tUIk":
/*!**********************************!*\
  !*** ./src/app/clases/pedido.ts ***!
  \**********************************/
/*! exports provided: EstadoPedido, Pedido */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoPedido", function() { return EstadoPedido; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pedido", function() { return Pedido; });
var EstadoPedido;
(function (EstadoPedido) {
    EstadoPedido["RESERVADO"] = "Reservado";
    EstadoPedido["SOLICITADO"] = "Solicitado";
    EstadoPedido["PENDIENTE"] = "Pendiente";
    EstadoPedido["EN_PROGRESO"] = "En progreso";
    EstadoPedido["ENTREGADO"] = "Entregado";
    EstadoPedido["CERRADO"] = "Cerrado";
})(EstadoPedido || (EstadoPedido = {}));
class Pedido {
    constructor() {
        this.fechaInicio = 0;
        this.fechaFin = 0;
        this.productos = [];
    }
    static CrearPedido(id, cliente, mesa, productos, fechaInicio, fechaFin, valorTotal, estado, isActive) {
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
        return pedido;
    }
    calcularTotal() {
        this.valorTotal = 0;
        this.productos.forEach(producto => {
            this.valorTotal = this.valorTotal + producto.precio;
        });
        return this.valorTotal;
    }
    cambiarEstado() {
        switch (this.estado) {
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


/***/ }),

/***/ "teE5":
/*!*********************************************!*\
  !*** ./src/app/services/cliente.service.ts ***!
  \*********************************************/
/*! exports provided: ClienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteService", function() { return ClienteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _clases_cliente__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../clases/cliente */ "tDE8");
var ClienteService_1;




let ClienteService = ClienteService_1 = class ClienteService {
    constructor(firebase) {
        this.firebase = firebase;
    }
    crear(cliente, uid) {
        cliente.id = uid;
        //TODO: eliminar cuando tenga implementado la carga de imagenes
        cliente.foto = "-";
        cliente.isActive = true;
        cliente.estado = _clases_cliente__WEBPACK_IMPORTED_MODULE_3__["EstadoAceptacion"].Pendiente;
        cliente.enListaDeEspera = false;
        console.log(cliente);
        return this.firebase.database
            .ref("clientes/" + cliente.id)
            .set(cliente)
            .catch(console.error);
    }
    crearAnonimo(cliente) {
        console.log(cliente);
        return this.firebase.database
            .ref("clientes/" + cliente.id)
            .set(cliente)
            .catch(console.error);
    }
    actualizar(cliente) {
        return this.firebase.database
            .ref("clientes/" + cliente.id)
            .update(cliente);
    }
    borradoLogico(cliente) {
        cliente.isActive = false;
        return this.actualizar(cliente);
    }
    leer() {
        let clientes = [];
        console.info("Fetch de todos los clientes");
        return new Promise((resolve) => {
            this.firebase.database.ref("clientes").on("value", (snapshot) => {
                clientes = [];
                snapshot.forEach((child) => {
                    var data = child.val();
                    clientes.push(_clases_cliente__WEBPACK_IMPORTED_MODULE_3__["Cliente"].CrearCliente(data.id, data.nombre, data.apellido, data.dni, data.foto, data.email, data.isActive, data.estado, data.enListaDeEspera));
                });
                ClienteService_1.clientes = clientes.filter(e => e.isActive);
                resolve(ClienteService_1.clientes);
            });
        });
    }
    leerPorID(id) {
        return new Promise(resolve => {
            this.firebase.database.ref(`clientes/${id}`).once('value').then(snapshot => {
                if (snapshot.val() === null || snapshot.val() === undefined) {
                    console.log("Cliente not found");
                    resolve(null);
                }
                else {
                    let data = snapshot.val();
                    const cliente = _clases_cliente__WEBPACK_IMPORTED_MODULE_3__["Cliente"].CrearCliente(data.id, data.nombre, data.apellido, data.dni, data.foto, data.email, data.isActive, data.estado, data.enListaDeEspera);
                    resolve(cliente);
                }
            });
        });
    }
};
ClienteService.clientes = [];
ClienteService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
];
ClienteService = ClienteService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], ClienteService);



/***/ }),

/***/ "ulBd":
/*!***********************************************************************!*\
  !*** ./src/app/components/form-producto/form-producto.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input[type=text], input[type=password] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n}\n\n/* Set a style for all buttons */\n\nbutton {\n  background-color: #4CAF50;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n}\n\n/* Extra styles for the cancel button */\n\n.cancelbtn {\n  padding: 14px 20px;\n  background-color: #f44336;\n}\n\n/* Float cancel and signup buttons and add an equal width */\n\n.cancelbtn, .signupbtn {\n  float: left;\n  width: 50%;\n}\n\n/* Add padding to container elements */\n\n.container {\n  padding: 16px;\n}\n\n/* The Modal (background) */\n\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */\n  padding-top: 60px;\n}\n\n/* Modal Content/Box */\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 5% auto 15% auto;\n  /* 5% from the top, 15% from the bottom and centered */\n  border: 1px solid #888;\n  width: 98%;\n  /* Could be more or less, depending on screen size */\n}\n\n/* The Close Button (x) */\n\n.close {\n  position: absolute;\n  right: 35px;\n  top: 15px;\n  color: #000;\n  font-size: 40px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: red;\n  cursor: pointer;\n}\n\n/* Clear floats */\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n/* Change styles for cancel button and signup button on extra small screens */\n\n@media screen and (max-width: 300px) {\n  .cancelbtn, .signupbtn {\n    width: 100%;\n  }\n}\n\n.alert {\n  padding: 2%;\n  background-color: rgba(255, 0, 0, 0.665);\n  border-radius: 10px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtLXByb2R1Y3RvL2Zvcm0tcHJvZHVjdG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUEsZ0NBQUE7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQSx1Q0FBQTs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQSwyREFBQTs7QUFDQTtFQUF1QixXQUFBO0VBQVcsVUFBQTtBQUdsQzs7QUFEQSxzQ0FBQTs7QUFDQTtFQUNJLGFBQUE7QUFJSjs7QUFEQSwyQkFBQTs7QUFDQTtFQUNJLGFBQUE7RUFBZSxzQkFBQTtFQUNmLGVBQUE7RUFBaUIsa0JBQUE7RUFDakIsVUFBQTtFQUFZLGVBQUE7RUFDWixPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFBYSxlQUFBO0VBQ2IsWUFBQTtFQUFjLGdCQUFBO0VBQ2QsY0FBQTtFQUFnQiw0QkFBQTtFQUNoQix1QkFBQTtFQUE4QixtQkFBQTtFQUM5QixvQ0FBQTtFQUFtQyxxQkFBQTtFQUNuQyxpQkFBQTtBQVlKOztBQVRBLHNCQUFBOztBQUNBO0VBQ0kseUJBQUE7RUFDQSx3QkFBQTtFQUEwQixzREFBQTtFQUMxQixzQkFBQTtFQUNBLFVBQUE7RUFBWSxvREFBQTtBQWNoQjs7QUFYQSx5QkFBQTs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBY0o7O0FBWEE7O0VBRUksVUFBQTtFQUNBLGVBQUE7QUFjSjs7QUFYQSxpQkFBQTs7QUFDQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQWNKOztBQVhBLDZFQUFBOztBQUNBO0VBQ0k7SUFDRyxXQUFBO0VBY0w7QUFDRjs7QUFYQTtFQUNJLFdBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQWFKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3JtLXByb2R1Y3RvL2Zvcm0tcHJvZHVjdG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vKiBFeHRyYSBzdHlsZXMgZm9yIHRoZSBjYW5jZWwgYnV0dG9uICovXHJcbi5jYW5jZWxidG4ge1xyXG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxufVxyXG5cclxuLyogRmxvYXQgY2FuY2VsIGFuZCBzaWdudXAgYnV0dG9ucyBhbmQgYWRkIGFuIGVxdWFsIHdpZHRoICovXHJcbi5jYW5jZWxidG4sLnNpZ251cGJ0biB7ZmxvYXQ6bGVmdDt3aWR0aDo1MCV9XHJcblxyXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXIgZWxlbWVudHMgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXHJcbi5tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbn1cclxuXHJcbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgICBtYXJnaW46IDUlIGF1dG8gMTUlIGF1dG87IC8qIDUlIGZyb20gdGhlIHRvcCwgMTUlIGZyb20gdGhlIGJvdHRvbSBhbmQgY2VudGVyZWQgKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICB3aWR0aDogOTglOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xyXG59XHJcblxyXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICh4KSAqL1xyXG4uY2xvc2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDM1cHg7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2xvc2U6aG92ZXIsXHJcbi5jbG9zZTpmb2N1cyB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBDbGVhciBmbG9hdHMgKi9cclxuLmNsZWFyZml4OjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuLyogQ2hhbmdlIHN0eWxlcyBmb3IgY2FuY2VsIGJ1dHRvbiBhbmQgc2lnbnVwIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAgICAuY2FuY2VsYnRuLCAuc2lnbnVwYnRuIHtcclxuICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWxlcnR7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjY2NSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxufSJdfQ== */");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-home-home-module */ "pages-home-home-module").then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "99Un")).then(m => m.HomePageModule)
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() | components-register-register-module */[__webpack_require__.e("common"), __webpack_require__.e("components-register-register-module")]).then(__webpack_require__.bind(null, /*! ./components/register/register.module */ "3+Ob")).then(m => m.RegisterPageModule)
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | components-login-login-module */[__webpack_require__.e("common"), __webpack_require__.e("components-login-login-module")]).then(__webpack_require__.bind(null, /*! ./components/login/login.module */ "qYmF")).then(m => m.LoginPageModule)
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-home-home-module */ "pages-home-home-module").then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "99Un")).then(m => m.HomePageModule)
    },
    {
        path: 'auth-page',
        loadChildren: () => Promise.all(/*! import() | pages-auth-page-auth-page-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-auth-page-auth-page-module")]).then(__webpack_require__.bind(null, /*! ./pages/auth-page/auth-page.module */ "clKO")).then(m => m.AuthPagePageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "vd6x":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/listado-productos/listado-productos.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid fixed>\r\n  <ion-row class=\"contenido\" *ngFor=\"let producto of productos\">\r\n    <ion-col size=\"12\" size-lg=\"6\" (click)=\"seleccionarProducto(producto)\" color=\"dark\"\r\n             class=\"ion-justify-content-center\">\r\n\r\n      <app-detalle-producto [producto]=\"producto\"></app-detalle-producto>\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ "wH85":
/*!***************************************************!*\
  !*** ./src/app/components/foto/foto.component.ts ***!
  \***************************************************/
/*! exports provided: FotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FotoComponent", function() { return FotoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_foto_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./foto.component.html */ "lo5X");
/* harmony import */ var _foto_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foto.component.scss */ "OP59");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let FotoComponent = class FotoComponent {
    constructor() {
    }
    ngOnInit() { }
};
FotoComponent.ctorParameters = () => [];
FotoComponent.propDecorators = {
    img: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
FotoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-foto',
        template: _raw_loader_foto_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_foto_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FotoComponent);



/***/ }),

/***/ "xHZo":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/listado-reservas/listado-reservas.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid fixed>\r\n  <ion-row class=\"contenido\" *ngFor=\"let reserva of reservas\">\r\n    <ion-col size=\"12\" size-lg=\"6\" (click)=\"seleccionarReserva(reserva)\" color=\"dark\"\r\n             class=\"ion-justify-content-center\">\r\n\r\n      <app-detalle-reserva [reserva]=\"reserva\"></app-detalle-reserva>\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ "y06/":
/*!*****************************************************************************!*\
  !*** ./src/app/components/detalle-empleado/detalle-empleado.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWxsZS1lbXBsZWFkby9kZXRhbGxlLWVtcGxlYWRvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "yxfS":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" translucent>\r\n  <ion-toolbar color=\"medium\">\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n\r\n    <ion-title text-capitalize>{{ titulo }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>");

/***/ }),

/***/ "zHf1":
/*!*********************************************************************!*\
  !*** ./src/app/components/form-reserva/form-reserva.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS1yZXNlcnZhL2Zvcm0tcmVzZXJ2YS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "zNKl":
/*!***************************************************!*\
  !*** ./src/app/services/profile-guard.service.ts ***!
  \***************************************************/
/*! exports provided: ProfileGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileGuardService", function() { return ProfileGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "lGQG");
/* harmony import */ var _roles_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./roles.service */ "0ceX");





let ProfileGuardService = class ProfileGuardService {
    constructor(router, rolesService) {
        this.router = router;
        this.rolesService = rolesService;
    }
    /**
    * Método para validar navegación según perfil del Usuario
    * @param route La ruta hacia la cual se desea navegar
    */
    canActivate(route, state) {
        this.usuario = _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"].usuario;
        let activar = false;
        let ruta;
        // Sólo a modo de ejemplo
        console.log(state);
        if (state) {
            ruta = state.url;
            console.log(ruta);
            switch (ruta) {
                case "/home/inicio":
                    activar = true;
                    break;
                case "/home/tab1":
                    // Esto cambiaría con el servicio de Roles / Perfiles
                    if (this.rolesService.isJefe(this.usuario)) {
                        activar = true;
                    }
                    break;
                case "/home/tab2":
                    if (this.rolesService.isCliente(this.usuario)) {
                        activar = true;
                    }
                    break;
                case "/home/tab3":
                    if (this.rolesService.isEmpleado(this.usuario)) {
                        activar = true;
                    }
                    break;
                // Acá se agregarían rutas restantes a validar
            }
        }
        // Se puede navegar a una página definida para caso que no cumpla la validacion
        //this.router.navigate(["tabs"]);
        return activar;
    }
};
ProfileGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _roles_service__WEBPACK_IMPORTED_MODULE_4__["RolesService"] }
];
ProfileGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProfileGuardService);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map