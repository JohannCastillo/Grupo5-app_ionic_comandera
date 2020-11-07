(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "+HcX":
    /*!************************************************!*\
      !*** ./src/app/components/login/login.page.ts ***!
      \************************************************/

    /*! exports provided: LoginPage */

    /***/
    function HcX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.page.html */
      "m/sW");
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.page.scss */
      "Af1y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_clases_usuario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/clases/usuario */
      "1Qa6");
      /* harmony import */


      var src_app_clases_cliente__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/clases/cliente */
      "tDE8");
      /* harmony import */


      var src_app_services_jefe_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/jefe.service */
      "97Z+");
      /* harmony import */


      var src_app_services_empleado_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/empleado.service */
      "5RfW");
      /* harmony import */


      var src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/cliente.service */
      "teE5");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var LoginPage = /*#__PURE__*/function () {
        // constructor(private authService: AuthService, private router: Router) { }
        function LoginPage(authService, router, jefeService, empleadoService, clienteService, modalController, actionSheetController) {
          _classCallCheck(this, LoginPage);

          this.authService = authService;
          this.router = router;
          this.jefeService = jefeService;
          this.empleadoService = empleadoService;
          this.clienteService = clienteService;
          this.modalController = modalController;
          this.actionSheetController = actionSheetController;
          this.usuario = new src_app_clases_usuario__WEBPACK_IMPORTED_MODULE_5__["Usuario"]();
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onLoginAnonymously",
          value: function onLoginAnonymously() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var uid, cliente;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.authService.onLoginAnonymously();

                    case 2:
                      uid = _context.sent;

                      if (uid) {
                        console.log('Cliente anonimo logueado!');
                        cliente = src_app_clases_cliente__WEBPACK_IMPORTED_MODULE_6__["Cliente"].CrearCliente(uid, "Anónimo", " ", "0", "-", " ", true, src_app_clases_cliente__WEBPACK_IMPORTED_MODULE_6__["EstadoAceptacion"].Anonimo, false);
                        console.log(cliente);
                        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].usuario = cliente;
                        this.clienteService.crearAnonimo(cliente);
                        this.cerrar();
                        this.router.navigate(['/home']);
                      }

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onLogin",
          value: function onLogin() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var uid, cliente, empleado, jefe, clientePromise, empleadoPromise, jefePromise;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.authService.onLogin(this.usuario);

                    case 2:
                      uid = _context2.sent;

                      if (!uid) {
                        _context2.next = 21;
                        break;
                      }

                      console.log('Usuario logueado!');
                      clientePromise = this.clienteService.leerPorID(uid).then(function (c) {
                        return cliente = c;
                      });
                      empleadoPromise = this.empleadoService.leerPorID(uid).then(function (c) {
                        return empleado = c;
                      });
                      jefePromise = this.jefeService.leerPorID(uid).then(function (c) {
                        return jefe = c;
                      });
                      _context2.next = 10;
                      return clientePromise;

                    case 10:
                      _context2.next = 12;
                      return empleadoPromise;

                    case 12:
                      _context2.next = 14;
                      return jefePromise;

                    case 14:
                      console.log(cliente);
                      console.log(empleado);
                      console.log(jefe);

                      if (cliente) {
                        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].usuario = cliente;
                      } else if (empleado) {
                        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].usuario = empleado;
                      } else if (jefe) {
                        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].usuario = jefe;
                      } else {
                        console.log("usuario no encontrado"); // mostrar error en pantalla
                      }

                      console.log(_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].usuario);
                      this.cerrar();
                      this.router.navigate(['/home']);

                    case 21:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "onLoginTesting",
          value: function onLoginTesting(rol) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var uid;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.t0 = rol;
                      _context3.next = _context3.t0 === "Cliente" ? 3 : _context3.t0 === "Supervisor" ? 10 : _context3.t0 === "Duenio" ? 17 : _context3.t0 === "Mozo" ? 24 : _context3.t0 === "Bartender" ? 31 : _context3.t0 === "Cocinero" ? 38 : 45;
                      break;

                    case 3:
                      _context3.next = 5;
                      return this.authService.onLoginTesting("cliente@mail.com", "111111");

                    case 5:
                      uid = _context3.sent;
                      _context3.next = 8;
                      return this.clienteService.leerPorID(uid);

                    case 8:
                      _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].usuario = _context3.sent;
                      return _context3.abrupt("break", 45);

                    case 10:
                      _context3.next = 12;
                      return this.authService.onLoginTesting("supervisor@mail.com", "111111");

                    case 12:
                      uid = _context3.sent;
                      _context3.next = 15;
                      return this.jefeService.leerPorID(uid);

                    case 15:
                      _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].usuario = _context3.sent;
                      return _context3.abrupt("break", 45);

                    case 17:
                      _context3.next = 19;
                      return this.authService.onLoginTesting("duenio@mail.com", "111111");

                    case 19:
                      uid = _context3.sent;
                      _context3.next = 22;
                      return this.jefeService.leerPorID(uid);

                    case 22:
                      _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].usuario = _context3.sent;
                      return _context3.abrupt("break", 45);

                    case 24:
                      _context3.next = 26;
                      return this.authService.onLoginTesting("mozo@mail.com", "111111");

                    case 26:
                      uid = _context3.sent;
                      _context3.next = 29;
                      return this.empleadoService.leerPorID(uid);

                    case 29:
                      _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].usuario = _context3.sent;
                      return _context3.abrupt("break", 45);

                    case 31:
                      _context3.next = 33;
                      return this.authService.onLoginTesting("bartender@mail.com", "111111");

                    case 33:
                      uid = _context3.sent;
                      _context3.next = 36;
                      return this.empleadoService.leerPorID(uid);

                    case 36:
                      _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].usuario = _context3.sent;
                      return _context3.abrupt("break", 45);

                    case 38:
                      _context3.next = 40;
                      return this.authService.onLoginTesting("cocinero@mail.com", "111111");

                    case 40:
                      uid = _context3.sent;
                      _context3.next = 43;
                      return this.empleadoService.leerPorID(uid);

                    case 43:
                      _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].usuario = _context3.sent;
                      return _context3.abrupt("break", 45);

                    case 45:
                      console.log(_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].usuario);
                      this.cerrar();
                      this.router.navigate(['/home']);

                    case 48:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "cerrar",
          value: function cerrar() {
            this.modalController.dismiss();
          }
        }, {
          key: "mostrarRoles",
          value: function mostrarRoles() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.actionSheetController.create({
                        header: 'Perfiles',
                        mode: "ios",
                        translucent: true,
                        buttons: [{
                          text: 'Cliente',
                          handler: function handler() {
                            _this.onLoginTesting("Cliente");
                          }
                        }, {
                          text: 'Supervisor',
                          handler: function handler() {
                            _this.onLoginTesting("Supervisor");
                          }
                        }, {
                          text: 'Dueño',
                          handler: function handler() {
                            _this.onLoginTesting("Duenio");
                          }
                        }, {
                          text: 'Mozo',
                          handler: function handler() {
                            _this.onLoginTesting("Mozo");
                          }
                        }, {
                          text: 'Cocinero',
                          handler: function handler() {
                            _this.onLoginTesting("Cocinero");
                          }
                        }, {
                          text: 'Bartender',
                          handler: function handler() {
                            _this.onLoginTesting("Bartender");
                          }
                        }, {
                          text: 'Cerrar',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cerrar');
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context4.sent;
                      _context4.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: src_app_services_jefe_service__WEBPACK_IMPORTED_MODULE_7__["JefeService"]
        }, {
          type: src_app_services_empleado_service__WEBPACK_IMPORTED_MODULE_8__["EmpleadoService"]
        }, {
          type: src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_9__["ClienteService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ActionSheetController"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginPage);
      /***/
    },

    /***/
    "2c9M":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function c9M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "6i10":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function i10(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "Af1y":
    /*!**************************************************!*\
      !*** ./src/app/components/login/login.page.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function Af1y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "FD/9":
    /*!********************************************************!*\
      !*** ./src/app/components/register/register.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function FD9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "HGan":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/explore-container/explore-container.module.ts ***!
      \*********************************************************************/

    /*! exports provided: ExploreContainerComponentModule */

    /***/
    function HGan(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExploreContainerComponentModule", function () {
        return ExploreContainerComponentModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _explore_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./explore-container.component */
      "XnsX");

      var ExploreContainerComponentModule = function ExploreContainerComponentModule() {
        _classCallCheck(this, ExploreContainerComponentModule);
      };

      ExploreContainerComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]]
      })], ExploreContainerComponentModule);
      /***/
    },

    /***/
    "MJOv":
    /*!******************************************************!*\
      !*** ./src/app/components/register/register.page.ts ***!
      \******************************************************/

    /*! exports provided: RegisterPage */

    /***/
    function MJOv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
        return RegisterPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.page.html */
      "km9s");
      /* harmony import */


      var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register.page.scss */
      "FD/9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/auth.service */
      "lGQG");
      /* harmony import */


      var _clases_cliente__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../clases/cliente */
      "tDE8");
      /* harmony import */


      var src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/uivisual.service */
      "KPCj");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var RegisterPage = /*#__PURE__*/function () {
        // constructor(private authService: AuthService, private router: Router) { }
        function RegisterPage(authService, UIVisual, modalController) {
          _classCallCheck(this, RegisterPage);

          this.authService = authService;
          this.UIVisual = UIVisual;
          this.modalController = modalController;
          this.cliente = new _clases_cliente__WEBPACK_IMPORTED_MODULE_5__["Cliente"]();
        }

        _createClass(RegisterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onRegister",
          value: function onRegister() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (this.cliente && !this.cliente.id) {
                        this.authService.onRegisterCliente(this.cliente).then(function () {
                          return src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_6__["UIVisualService"].presentToast('Alta exitosa');
                        })["catch"](function () {
                          return src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_6__["UIVisualService"].presentToast('No se pudo realizar el alta');
                        }); // this.router.navigateByUrl('/');
                      } else {
                        src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_6__["UIVisualService"].presentToast('Cliente existente');
                      }

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "cerrar",
          value: function cerrar() {
            this.modalController.dismiss();
          }
        }]);

        return RegisterPage;
      }();

      RegisterPage.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: src_app_services_uivisual_service__WEBPACK_IMPORTED_MODULE_6__["UIVisualService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }];
      };

      RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RegisterPage);
      /***/
    },

    /***/
    "NqGI":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function NqGI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  if (!delegate) {
                    _context6.next = 2;
                    break;
                  }

                  return _context6.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context6.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context6.next = 11;
                    break;
                  }

                  _context6.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context6.abrupt("return", el);

                case 12:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "U/uv":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function UUv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-92848855.js */
      "sxy2");
      /* harmony import */


      var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-eea61379.js */
      "ItpF");
      /* harmony import */


      var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-7b8ba70a.js */
      "2c9M");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "XnsX":
    /*!************************************************************************!*\
      !*** ./src/app/pages/explore-container/explore-container.component.ts ***!
      \************************************************************************/

    /*! exports provided: ExploreContainerComponent */

    /***/
    function XnsX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExploreContainerComponent", function () {
        return ExploreContainerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_explore_container_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./explore-container.component.html */
      "aRCn");
      /* harmony import */


      var _explore_container_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./explore-container.component.scss */
      "hTsW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ExploreContainerComponent = /*#__PURE__*/function () {
        function ExploreContainerComponent() {
          _classCallCheck(this, ExploreContainerComponent);
        }

        _createClass(ExploreContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ExploreContainerComponent;
      }();

      ExploreContainerComponent.ctorParameters = function () {
        return [];
      };

      ExploreContainerComponent.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      ExploreContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-explore-container',
        template: _raw_loader_explore_container_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_explore_container_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ExploreContainerComponent);
      /***/
    },

    /***/
    "aRCn":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/explore-container/explore-container.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aRCn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"container\">\r\n  <strong>{{ name }}</strong>\r\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\r\n</div>";
      /***/
    },

    /***/
    "hTsW":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/explore-container/explore-container.component.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function hTsW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXhwbG9yZS1jb250YWluZXIvZXhwbG9yZS1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLHFCQUFBO0FBRkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9leHBsb3JlLWNvbnRhaW5lci9leHBsb3JlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4jY29udGFpbmVyIHAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuXHJcbiAgY29sb3I6ICM4YzhjOGM7XHJcblxyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "km9s":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function km9s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"medium\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"cerrar()\">\r\n        <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Registro</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"fondo\">\r\n  <div id=\"container\" class=\"contenido\">\r\n    <form #formulario=\"ngForm\">\r\n      <ion-list class=\"ion-no-padding\" color=\"dark\">\r\n        <ion-item color=\"dark\">\r\n          <ion-label position=\"floating\">\r\n            Nombre\r\n          </ion-label>\r\n          <ion-input type=\"text\" name=\"nombre\" minlength=\"2\" [(ngModel)]=\"cliente.nombre\" type=\"text\"></ion-input>\r\n        </ion-item>\r\n        <ion-item color=\"dark\">\r\n          <ion-label position=\"floating\">\r\n            Apellido\r\n          </ion-label>\r\n          <ion-input type=\"text\" name=\"apellido\" minlength=\"2\" [(ngModel)]=\"cliente.apellido\" type=\"text\"></ion-input>\r\n        </ion-item>\r\n        <ion-item color=\"dark\">\r\n          <ion-label position=\"floating\">\r\n            DNI\r\n          </ion-label>\r\n          <ion-input type=\"text\" minlength=\"7\" maxlength=\"8\" name=\"dni\" [(ngModel)]=\"cliente.dni\"></ion-input>\r\n        </ion-item>\r\n        <ion-item color=\"dark\">\r\n          <ion-label position=\"floating\">\r\n            Email\r\n          </ion-label>\r\n          <ion-input type=\"email\" name=\"email\" minlength=\"6\" [(ngModel)]=\"cliente.email\"></ion-input>\r\n        </ion-item>\r\n        <ion-item color=\"dark\">\r\n          <ion-label position=\"floating\">\r\n            Contraseña\r\n          </ion-label>\r\n          <ion-input type=\"password\" name=\"password\" minlength=\"6\" [(ngModel)]=\"cliente.password\"></ion-input>\r\n        </ion-item>\r\n        <ion-button size=\"large\" (click)=\"onRegister()\" expand=\"full\" color=\"danger\"\r\n                    [disabled]=\"formulario.invalid\">\r\n          Registro\r\n        </ion-button>\r\n      </ion-list>\r\n    </form>\r\n\r\n  </div>\r\n</ion-content>";
      /***/
    },

    /***/
    "m/sW":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.page.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function mSW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"medium\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"cerrar()\">\r\n        <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Iniciar Sesión</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"fondo\">\r\n  <div id=\"container\" class=\"contenido\">\r\n    <form #formulario=\"ngForm\">\r\n      <ion-list class=\"ion-no-padding ion-no-margin\" color=\"dark\">\r\n        <ion-item color=\"dark\">\r\n          <ion-label>\r\n            Email\r\n          </ion-label>\r\n          <ion-input type=\"email\" name=\"email\" [(ngModel)]=\"usuario.email\"></ion-input>\r\n        </ion-item>\r\n        <ion-item color=\"dark\">\r\n          <ion-label>\r\n            Contraseña\r\n          </ion-label>\r\n          <ion-input type=\"password\" name=\"password\" [min]=\"6\" [(ngModel)]=\"usuario.password\"></ion-input>\r\n        </ion-item>\r\n        <ion-button size=\"medium\" (click)=\"onLoginAnonymously()\" expand=\"full\" color=\"medium\">Anónimo</ion-button>\r\n\r\n        <ion-button size=\"large\" (click)=\"onLogin()\" expand=\"full\" color=\"danger\">Iniciar Sesión</ion-button>\r\n      </ion-list>\r\n    </form>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-button (click)=\"mostrarRoles()\" expand=\"full\" fill=\"clear\" size=\"large\" color=\"danger\">\r\n      Login de testing\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>";
      /***/
    },

    /***/
    "sPtc":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function sPtc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context7.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context7.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context7.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context7.abrupt("return", false);

                case 6:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map