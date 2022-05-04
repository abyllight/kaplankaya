"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Residents_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ResidentModal.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ResidentModal.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ResidentModal",
  props: {
    dialog: Boolean,
    resident: Object
  },
  data: function data() {
    return {
      loading_reg: false
    };
  },
  computed: {
    fullName: function fullName() {
      return this.resident.lastName + ' ' + this.resident.firstName;
    },
    status: function status() {
      return this.resident.status === 1 ? 'Confirmed' : 'New';
    },
    statusColor: function statusColor() {
      return this.resident.status === 1 ? 'amber' : 'green';
    },
    villaAddress: function villaAddress() {
      return this.resident.address ? this.resident.address.house.street.name + ', ' + this.resident.address.house.name : '';
    },
    villaApartment: function villaApartment() {
      return this.resident.address ? this.resident.address.apartment : '';
    }
  },
  methods: {
    regenerateResident: function regenerateResident() {
      this.loading_reg = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Residents.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Residents.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ResidentModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ResidentModal */ "./resources/js/components/ResidentModal.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Residents",
  components: {
    ResidentModal: _components_ResidentModal__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      items: [],
      headers: [{
        text: '#',
        value: 'index'
      }, {
        text: 'Name',
        value: 'fullName'
      }, {
        text: 'Phone',
        value: 'numberPhone'
      }, {
        text: 'Email',
        value: 'email'
      }, {
        text: 'Villa',
        value: 'villaNumber'
      }],
      loading: true,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      fullName: null,
      phone: null,
      email: null,
      addresses: [],
      address: null,
      villa: null,
      roles: [],
      role: null,
      statuses: [{
        name: 'Confirmed',
        value: 1
      }, {
        name: 'New',
        value: 0
      }],
      status: null,
      dialog: false,
      resident: {}
    };
  },
  created: function created() {
    this.fetchResidents();
  },
  methods: {
    fetchResidents: function fetchResidents() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get('https://api.test.kaplankaya.app/api/web/residents', {
                  params: {
                    OSIId: _this.$store.state.user_id,
                    PageNumber: 1,
                    PageSize: 10000,
                    FullName: _this.fullName,
                    NumberPhone: _this.phone,
                    VillaNumber: _this.villa
                  }
                }).then(function (response) {
                  _this.items = response.data.data;
                  _this.loading = false;
                })["catch"](function (error) {
                  _this.$store.dispatch('showAlert', {
                    isVisible: true,
                    msg: error.response.data.Message,
                    color: 'error',
                    type: 'error'
                  });
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    openModal: function openModal(item) {
      this.resident = item;
      this.dialog = true;
    },
    closeModal: function closeModal() {
      this.resident = {};
      this.dialog = false;
    },
    getStatus: function getStatus(status) {
      return status === 1 ? 'Confirmed' : 'New';
    }
  }
});

/***/ }),

/***/ "./resources/js/components/ResidentModal.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/ResidentModal.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ResidentModal_vue_vue_type_template_id_9608773c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResidentModal.vue?vue&type=template&id=9608773c& */ "./resources/js/components/ResidentModal.vue?vue&type=template&id=9608773c&");
/* harmony import */ var _ResidentModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResidentModal.vue?vue&type=script&lang=js& */ "./resources/js/components/ResidentModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResidentModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResidentModal_vue_vue_type_template_id_9608773c___WEBPACK_IMPORTED_MODULE_0__.render,
  _ResidentModal_vue_vue_type_template_id_9608773c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ResidentModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Residents.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/Residents.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Residents_vue_vue_type_template_id_aaa5272c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Residents.vue?vue&type=template&id=aaa5272c& */ "./resources/js/pages/Residents.vue?vue&type=template&id=aaa5272c&");
/* harmony import */ var _Residents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Residents.vue?vue&type=script&lang=js& */ "./resources/js/pages/Residents.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Residents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Residents_vue_vue_type_template_id_aaa5272c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Residents_vue_vue_type_template_id_aaa5272c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Residents.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/ResidentModal.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/ResidentModal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResidentModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResidentModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ResidentModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResidentModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Residents.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/Residents.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Residents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Residents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Residents.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Residents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ResidentModal.vue?vue&type=template&id=9608773c&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/ResidentModal.vue?vue&type=template&id=9608773c& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResidentModal_vue_vue_type_template_id_9608773c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResidentModal_vue_vue_type_template_id_9608773c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResidentModal_vue_vue_type_template_id_9608773c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResidentModal.vue?vue&type=template&id=9608773c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ResidentModal.vue?vue&type=template&id=9608773c&");


/***/ }),

/***/ "./resources/js/pages/Residents.vue?vue&type=template&id=aaa5272c&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/Residents.vue?vue&type=template&id=aaa5272c& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Residents_vue_vue_type_template_id_aaa5272c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Residents_vue_vue_type_template_id_aaa5272c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Residents_vue_vue_type_template_id_aaa5272c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Residents.vue?vue&type=template&id=aaa5272c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Residents.vue?vue&type=template&id=aaa5272c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ResidentModal.vue?vue&type=template&id=9608773c&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ResidentModal.vue?vue&type=template&id=9608773c& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "text-center" },
    [
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "500" },
          model: {
            value: _vm.dialog,
            callback: function ($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog",
          },
        },
        [
          _c(
            "v-card",
            { attrs: { disabled: _vm.loading_reg, loading: _vm.loading_reg } },
            [
              _c("v-card-title", { staticClass: "mb-2" }, [
                _vm._v(
                  "\n                " + _vm._s(_vm.fullName) + "\n            "
                ),
              ]),
              _vm._v(" "),
              _c(
                "v-card-subtitle",
                [
                  _c(
                    "v-chip",
                    {
                      attrs: {
                        label: "",
                        small: "",
                        dark: "",
                        color: _vm.statusColor,
                      },
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.status) +
                          "\n                "
                      ),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-row",
                    [
                      _c("v-col", [
                        _c("h4", [_vm._v("Phone")]),
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.resident.numberPhone) +
                            "\n                    "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("v-col", [
                        _c("h4", [_vm._v("Email")]),
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.resident.email) +
                            "\n                    "
                        ),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-col", [
                        _c("h4", [_vm._v("Villa number")]),
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.resident.villaNumber) +
                            "\n                    "
                        ),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary", text: "" },
                      on: {
                        click: function ($event) {
                          return _vm.$emit("close-modal")
                        },
                      },
                    },
                    [_vm._v("\n                    Close\n                ")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Residents.vue?vue&type=template&id=aaa5272c&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Residents.vue?vue&type=template&id=aaa5272c& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { staticClass: "d-flex justify-space-between align-center" },
            [_c("h1", [_vm._v("Residents")])]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { staticClass: "mb-n4", attrs: { cols: "6", lg: "3" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          placeholder: "Full name",
                          outlined: "",
                          dense: "",
                          clearable: "",
                        },
                        on: { change: _vm.fetchResidents },
                        model: {
                          value: _vm.fullName,
                          callback: function ($$v) {
                            _vm.fullName = $$v
                          },
                          expression: "fullName",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { staticClass: "mb-n4", attrs: { cols: "6", lg: "3" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          placeholder: "Phone number",
                          outlined: "",
                          dense: "",
                          clearable: "",
                        },
                        on: { change: _vm.fetchResidents },
                        model: {
                          value: _vm.phone,
                          callback: function ($$v) {
                            _vm.phone = $$v
                          },
                          expression: "phone",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { staticClass: "mb-n4", attrs: { cols: "6", lg: "3" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          placeholder: "Email",
                          outlined: "",
                          dense: "",
                          clearable: "",
                        },
                        on: { change: _vm.fetchResidents },
                        model: {
                          value: _vm.email,
                          callback: function ($$v) {
                            _vm.email = $$v
                          },
                          expression: "email",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { staticClass: "mb-n4", attrs: { cols: "6", lg: "3" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          placeholder: "Villa",
                          outlined: "",
                          dense: "",
                          clearable: "",
                        },
                        on: { change: _vm.fetchResidents },
                        model: {
                          value: _vm.villa,
                          callback: function ($$v) {
                            _vm.villa = $$v
                          },
                          expression: "villa",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "text-center pt-2 pb-5" },
                [
                  _c("v-pagination", {
                    attrs: { color: "brand", length: _vm.pageCount },
                    model: {
                      value: _vm.page,
                      callback: function ($$v) {
                        _vm.page = $$v
                      },
                      expression: "page",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c("v-data-table", {
                staticClass: "elevation-1",
                staticStyle: { cursor: "pointer" },
                attrs: {
                  headers: _vm.headers,
                  items: _vm.items,
                  page: _vm.page,
                  "items-per-page": _vm.itemsPerPage,
                  loading: _vm.loading,
                  "loading-text": "Loading... Please wait",
                  "hide-default-footer": "",
                },
                on: {
                  "update:page": function ($event) {
                    _vm.page = $event
                  },
                  "page-count": function ($event) {
                    _vm.pageCount = $event
                  },
                  "click:row": _vm.openModal,
                },
                scopedSlots: _vm._u([
                  {
                    key: "item.index",
                    fn: function (ref) {
                      var index = ref.index
                      return [
                        _vm._v(
                          "\n                    " +
                            _vm._s(index + 1) +
                            "\n                "
                        ),
                      ]
                    },
                  },
                ]),
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("resident-modal", {
        attrs: { dialog: _vm.dialog, resident: _vm.resident },
        on: { "close-modal": _vm.closeModal },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);