"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Bills_Bills_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Bills/Bills.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Bills/Bills.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Bills",
  data: function data() {
    return {
      items: [],
      headers: [{
        text: '#',
        value: 'index'
      }, {
        text: 'Resident',
        value: 'residentFullName'
      }, {
        text: 'Phone',
        value: 'residentPhoneNumber'
      }, {
        text: 'Amount',
        value: 'amount'
      }, {
        text: 'Status',
        value: 'status'
      }],
      loading: true,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      resident_id: null,
      resident_name: null
    };
  },
  created: function created() {
    this.fetchBills();
  },
  methods: {
    fetchBills: function fetchBills() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get('https://api.test.kaplankaya.app/api/web/services/requests/bills', {
                  params: {
                    PageNumber: 1,
                    PageSize: 10000,
                    ResidentName: _this.resident_name,
                    VillaNumber: _this.villa,
                    ResidentId: _this.resident_id
                  }
                }).then(function (response) {
                  _this.items = response.data.data;
                  _this.loading = false;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    editItem: function editItem(item) {
      this.$router.push({
        name: 'bills_edit',
        params: {
          id: item.referenceId
        }
      });
    },
    getStatus: function getStatus(status) {
      if (status === 1) {
        return 'Await';
      } else if (status === 2) {
        return 'New';
      } else if (status === 3) {
        return 'Completed';
      } else {
        return 'Error';
      }
    },
    getStatusColor: function getStatusColor(status) {
      if (status === 1) {
        return 'deep-orange';
      } else if (status === 2) {
        return 'green';
      } else if (status === 3) {
        return 'blue';
      } else {
        return 'red';
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/Bills/Bills.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/Bills/Bills.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Bills_vue_vue_type_template_id_66f37330___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bills.vue?vue&type=template&id=66f37330& */ "./resources/js/pages/Bills/Bills.vue?vue&type=template&id=66f37330&");
/* harmony import */ var _Bills_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bills.vue?vue&type=script&lang=js& */ "./resources/js/pages/Bills/Bills.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Bills_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Bills_vue_vue_type_template_id_66f37330___WEBPACK_IMPORTED_MODULE_0__.render,
  _Bills_vue_vue_type_template_id_66f37330___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Bills/Bills.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Bills/Bills.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Bills/Bills.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bills_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Bills.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Bills/Bills.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bills_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Bills/Bills.vue?vue&type=template&id=66f37330&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/Bills/Bills.vue?vue&type=template&id=66f37330& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bills_vue_vue_type_template_id_66f37330___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bills_vue_vue_type_template_id_66f37330___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bills_vue_vue_type_template_id_66f37330___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Bills.vue?vue&type=template&id=66f37330& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Bills/Bills.vue?vue&type=template&id=66f37330&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Bills/Bills.vue?vue&type=template&id=66f37330&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Bills/Bills.vue?vue&type=template&id=66f37330& ***!
  \******************************************************************************************************************************************************************************************************************/
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
              _c("h1", [_vm._v("Bills")]),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c(
                    "v-btn",
                    { attrs: { color: "brand", dark: "", to: "bills/create" } },
                    [
                      _c("v-icon", { attrs: { left: "" } }, [
                        _vm._v("mdi-plus"),
                      ]),
                      _vm._v(
                        "\n                    Add bill\n                "
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
                  "click:row": _vm.editItem,
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
                  {
                    key: "item.title",
                    fn: function (ref) {
                      var item = ref.item
                      return [
                        _c("span", { staticClass: "font-weight-bold" }, [
                          _vm._v(_vm._s(item.title)),
                        ]),
                      ]
                    },
                  },
                  {
                    key: "item.status",
                    fn: function (ref) {
                      var item = ref.item
                      return [
                        _c(
                          "v-chip",
                          {
                            attrs: {
                              label: "",
                              small: "",
                              dark: "",
                              color: _vm.getStatusColor(item.status),
                            },
                          },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.getStatus(item.status)) +
                                "\n                    "
                            ),
                          ]
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