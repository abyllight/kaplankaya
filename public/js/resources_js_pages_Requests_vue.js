"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Requests_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Requests.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Requests.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  name: "Osi",
  data: function data() {
    return {
      headers: [{
        text: '#'
      }, {
        text: 'Status',
        value: 'status'
      }, {
        text: 'Category',
        value: 'category'
      }, {
        text: 'Address',
        value: 'address'
      }, {
        text: 'Villa',
        value: 'villa'
      }, {
        text: 'Executor',
        value: 'executor'
      }, {
        text: 'Date of execution'
      }, {
        text: 'Rating'
      }],
      tickets: [],
      loading: true,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      statuses: [],
      status: null,
      categories: [],
      category: null,
      addresses: [],
      address: null,
      executors: [],
      executor: null,
      villas: [],
      villa: null,
      date1: null,
      date2: null,
      date3: null,
      menu1: false,
      menu2: false,
      menu3: false
    };
  },
  created: function created() {
    this.fetchTickets();
  },
  methods: {
    fetchTickets: function fetchTickets() {
      var _this = this;

      axios.get('https://api.kaplankaya.app/api/Tickets/GetAllWeb', {
        params: {
          OSIId: '3a2bb30a-83a5-4ea4-a4f0-f8d83c814a8e',
          PageNumber: 1,
          PageSize: 10000
        }
      }).then(function (response) {
        _this.tickets = response.data.data;
        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/Requests.vue":
/*!*****************************************!*\
  !*** ./resources/js/pages/Requests.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Requests_vue_vue_type_template_id_2a642f66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Requests.vue?vue&type=template&id=2a642f66& */ "./resources/js/pages/Requests.vue?vue&type=template&id=2a642f66&");
/* harmony import */ var _Requests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Requests.vue?vue&type=script&lang=js& */ "./resources/js/pages/Requests.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Requests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Requests_vue_vue_type_template_id_2a642f66___WEBPACK_IMPORTED_MODULE_0__.render,
  _Requests_vue_vue_type_template_id_2a642f66___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Requests.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Requests.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/pages/Requests.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Requests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Requests.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Requests.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Requests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Requests.vue?vue&type=template&id=2a642f66&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/Requests.vue?vue&type=template&id=2a642f66& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Requests_vue_vue_type_template_id_2a642f66___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Requests_vue_vue_type_template_id_2a642f66___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Requests_vue_vue_type_template_id_2a642f66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Requests.vue?vue&type=template&id=2a642f66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Requests.vue?vue&type=template&id=2a642f66&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Requests.vue?vue&type=template&id=2a642f66&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Requests.vue?vue&type=template&id=2a642f66& ***!
  \***************************************************************************************************************************************************************************************************************/
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
            [
              _c("h1", [_vm._v("Requests")]),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "mr-3",
                      attrs: { elevation: "0", outlined: "", small: "" },
                    },
                    [
                      _c("v-icon", { attrs: { left: "" } }, [
                        _vm._v("mdi-file"),
                      ]),
                      _vm._v(
                        "\n                    Upload to Excel\n                "
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        elevation: "0",
                        color: "orange lighten-4",
                        small: "",
                      },
                    },
                    [
                      _c("v-icon", { attrs: { left: "" } }, [
                        _vm._v("mdi-plus"),
                      ]),
                      _vm._v(
                        "\n                    Submit Request\n                "
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]
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
                      _c("v-select", {
                        attrs: {
                          items: _vm.statuses,
                          placeholder: "Status",
                          outlined: "",
                          dense: "",
                          clearable: "",
                        },
                        model: {
                          value: _vm.status,
                          callback: function ($$v) {
                            _vm.status = $$v
                          },
                          expression: "status",
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
                      _c("v-select", {
                        attrs: {
                          items: _vm.categories,
                          placeholder: "Category",
                          outlined: "",
                          dense: "",
                          clearable: "",
                        },
                        model: {
                          value: _vm.category,
                          callback: function ($$v) {
                            _vm.category = $$v
                          },
                          expression: "category",
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
                      _c("v-select", {
                        attrs: {
                          items: _vm.addresses,
                          placeholder: "Address",
                          outlined: "",
                          dense: "",
                          clearable: "",
                        },
                        model: {
                          value: _vm.address,
                          callback: function ($$v) {
                            _vm.address = $$v
                          },
                          expression: "address",
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
                          items: _vm.villas,
                          placeholder: "Villa",
                          outlined: "",
                          dense: "",
                          clearable: "",
                        },
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
                "v-row",
                [
                  _c(
                    "v-col",
                    { staticClass: "mb-n4", attrs: { cols: "6", lg: "3" } },
                    [
                      _c(
                        "v-menu",
                        {
                          attrs: {
                            "close-on-content-click": false,
                            "nudge-right": 40,
                            transition: "scale-transition",
                            "offset-y": "",
                            "min-width": "auto",
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "activator",
                              fn: function (ref) {
                                var on = ref.on
                                var attrs = ref.attrs
                                return [
                                  _c(
                                    "v-text-field",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          attrs: {
                                            label: "Execution period (from)",
                                            "prepend-icon": "mdi-calendar",
                                            readonly: "",
                                            outlined: "",
                                            dense: "",
                                            clearable: "",
                                          },
                                          model: {
                                            value: _vm.date1,
                                            callback: function ($$v) {
                                              _vm.date1 = $$v
                                            },
                                            expression: "date1",
                                          },
                                        },
                                        "v-text-field",
                                        attrs,
                                        false
                                      ),
                                      on
                                    )
                                  ),
                                ]
                              },
                            },
                          ]),
                          model: {
                            value: _vm.menu1,
                            callback: function ($$v) {
                              _vm.menu1 = $$v
                            },
                            expression: "menu1",
                          },
                        },
                        [
                          _vm._v(" "),
                          _c("v-date-picker", {
                            on: {
                              input: function ($event) {
                                _vm.menu1 = false
                              },
                            },
                            model: {
                              value: _vm.date1,
                              callback: function ($$v) {
                                _vm.date1 = $$v
                              },
                              expression: "date1",
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
                    "v-col",
                    { staticClass: "mb-n4", attrs: { cols: "6", lg: "3" } },
                    [
                      _c(
                        "v-menu",
                        {
                          attrs: {
                            "close-on-content-click": false,
                            "nudge-right": 40,
                            transition: "scale-transition",
                            "offset-y": "",
                            "min-width": "auto",
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "activator",
                              fn: function (ref) {
                                var on = ref.on
                                var attrs = ref.attrs
                                return [
                                  _c(
                                    "v-text-field",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          attrs: {
                                            label: "Execution period (to)",
                                            "prepend-icon": "mdi-calendar",
                                            readonly: "",
                                            outlined: "",
                                            dense: "",
                                            clearable: "",
                                          },
                                          model: {
                                            value: _vm.date2,
                                            callback: function ($$v) {
                                              _vm.date2 = $$v
                                            },
                                            expression: "date2",
                                          },
                                        },
                                        "v-text-field",
                                        attrs,
                                        false
                                      ),
                                      on
                                    )
                                  ),
                                ]
                              },
                            },
                          ]),
                          model: {
                            value: _vm.menu2,
                            callback: function ($$v) {
                              _vm.menu2 = $$v
                            },
                            expression: "menu2",
                          },
                        },
                        [
                          _vm._v(" "),
                          _c("v-date-picker", {
                            on: {
                              input: function ($event) {
                                _vm.menu2 = false
                              },
                            },
                            model: {
                              value: _vm.date2,
                              callback: function ($$v) {
                                _vm.date2 = $$v
                              },
                              expression: "date2",
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
                    "v-col",
                    { attrs: { cols: "6", lg: "3" } },
                    [
                      _c("v-select", {
                        attrs: {
                          items: _vm.executors,
                          placeholder: "Executor",
                          outlined: "",
                          dense: "",
                          clearable: "",
                        },
                        model: {
                          value: _vm.executor,
                          callback: function ($$v) {
                            _vm.executor = $$v
                          },
                          expression: "executor",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6", lg: "3" } },
                    [
                      _c(
                        "v-menu",
                        {
                          attrs: {
                            "close-on-content-click": false,
                            "nudge-right": 40,
                            transition: "scale-transition",
                            "offset-y": "",
                            "min-width": "auto",
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "activator",
                              fn: function (ref) {
                                var on = ref.on
                                var attrs = ref.attrs
                                return [
                                  _c(
                                    "v-text-field",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          attrs: {
                                            label: "Picker without buttons",
                                            "prepend-icon": "mdi-calendar",
                                            readonly: "",
                                            outlined: "",
                                            dense: "",
                                            clearable: "",
                                          },
                                          model: {
                                            value: _vm.date3,
                                            callback: function ($$v) {
                                              _vm.date3 = $$v
                                            },
                                            expression: "date3",
                                          },
                                        },
                                        "v-text-field",
                                        attrs,
                                        false
                                      ),
                                      on
                                    )
                                  ),
                                ]
                              },
                            },
                          ]),
                          model: {
                            value: _vm.menu3,
                            callback: function ($$v) {
                              _vm.menu3 = $$v
                            },
                            expression: "menu3",
                          },
                        },
                        [
                          _vm._v(" "),
                          _c("v-date-picker", {
                            on: {
                              input: function ($event) {
                                _vm.menu3 = false
                              },
                            },
                            model: {
                              value: _vm.date3,
                              callback: function ($$v) {
                                _vm.date3 = $$v
                              },
                              expression: "date3",
                            },
                          }),
                        ],
                        1
                      ),
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
                    attrs: { length: _vm.pageCount },
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
                attrs: {
                  headers: _vm.headers,
                  items: _vm.tickets,
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
                },
                scopedSlots: _vm._u([
                  {
                    key: "item.index",
                    fn: function (ref) {
                      var index = ref.index
                      return [
                        _vm._v(
                          "\n                   " +
                            _vm._s(index + 1) +
                            "\n               "
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);