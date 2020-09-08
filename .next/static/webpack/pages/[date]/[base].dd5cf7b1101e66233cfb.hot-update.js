webpackHotUpdate_N_E("pages/[date]/[base]",{

/***/ "./src/pages/[date]/[base].js":
/*!************************************!*\
  !*** ./src/pages/[date]/[base].js ***!
  \************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Loading */ "./src/components/Loading.js");
/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Error */ "./src/components/Error.js");
/* harmony import */ var _components_RatesTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/RatesTable */ "./src/components/RatesTable.js");
/* harmony import */ var _components_form_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/form/Select */ "./src/components/form/Select.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_FormGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/FormGroup */ "./node_modules/react-bootstrap/esm/FormGroup.js");
/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/InputGroup */ "./node_modules/react-bootstrap/esm/InputGroup.js");
var _jsxFileName = "C:\\Users\\cilur\\Documents\\webzo\\currency-exchange-contest\\src\\pages\\[date]\\[base].js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const getDateString = date => {
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  return y + "-" + m + "-" + d;
};

const Base = props => {
  _s();

  const {
    0: compareBase,
    1: setCompareBase
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("EUR");
  const {
    0: baseValue,
    1: setBaseValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: compareBaseValue,
    1: setCompareBaseValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: compareBaseRate,
    1: setCompareBaseRate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(2);
  const {
    base,
    date,
    rates
  } = props.data;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setCompareBaseValue(rates[compareBase]);
    setCompareBaseRate(rates[compareBase]);
    setBaseValue(1);
  }, [rates]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  const handleChange = e => {
    const {
      name,
      value
    } = e.target;

    switch (name) {
      case "baseValue":
        setBaseValue(value);
        setCompareBaseValue(value * compareBaseRate);
        break;

      case "compareBaseValue":
        setCompareBaseValue(value);
        setBaseValue(value / compareBaseRate);
        break;

      default:
        return;
    }
  };

  const handleCompareBaseChange = e => {
    setCompareBase(e.target.value);
    setCompareBaseRate(rates[e.target.value]);
    setCompareBaseValue(baseValue * rates[e.target.value]);
  };

  const handleBaseChange = e => {
    router.push(`/${date}/${e.target.value}`);
  };

  const handleDateChange = date => {
    router.push(`/${getDateString(date)}/${base}`);
  };

  const CustomDatePickerInput = ({
    value,
    onClick
  }) => __jsx("button", {
    className: "btn btn-primary",
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fas fa-calendar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }), " ", value, console.log(value));

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: "bg-dark text-light p-5",
    style: {
      borderTopRightRadius: "50px",
      borderBottomLeftRadius: "50px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    className: "mb-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, "Showing results for ", base, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    md: "2",
    className: "float-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 25
    }
  }, __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_7___default.a, {
    selected: new Date(date),
    customInput: __jsx(CustomDatePickerInput, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 80
      }
    }),
    className: "form-control",
    onChange: date => handleDateChange(date),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 29
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    md: "2",
    className: "float-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  }, __jsx(_components_form_Select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    handleChange: handleBaseChange,
    base: base,
    options: Object.keys(rates),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 29
    }
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    className: "bg-light p-4",
    style: {
      margin: "0 0px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    md: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    md: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, __jsx(_components_form_Select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    handleChange: handleCompareBaseChange,
    base: compareBase,
    options: Object.keys(rates),
    compare: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    md: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_FormGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"].Append, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 31
    }
  }, base)), __jsx("input", {
    type: "text",
    value: baseValue,
    onChange: handleChange,
    name: "baseValue",
    className: "form-control",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 27
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    md: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_FormGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"].Append, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 33
    }
  }, compareBase)), __jsx("input", {
    type: "text",
    value: compareBaseValue,
    onChange: handleChange,
    name: "compareBaseValue",
    className: "form-control",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 29
    }
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }, __jsx(_components_RatesTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
    rates: rates,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 21
    }
  }))));
};

_s(Base, "MntwY16nc2737c2kTe4PceTes44=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = Base;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Base);

var _c;

$RefreshReg$(_c, "Base");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1tkYXRlXS9bYmFzZV0uanMiXSwibmFtZXMiOlsiZ2V0RGF0ZVN0cmluZyIsImRhdGUiLCJ5IiwiZ2V0RnVsbFllYXIiLCJtIiwiZ2V0TW9udGgiLCJkIiwiZ2V0RGF0ZSIsIkJhc2UiLCJwcm9wcyIsImNvbXBhcmVCYXNlIiwic2V0Q29tcGFyZUJhc2UiLCJ1c2VTdGF0ZSIsImJhc2VWYWx1ZSIsInNldEJhc2VWYWx1ZSIsImNvbXBhcmVCYXNlVmFsdWUiLCJzZXRDb21wYXJlQmFzZVZhbHVlIiwiY29tcGFyZUJhc2VSYXRlIiwic2V0Q29tcGFyZUJhc2VSYXRlIiwiYmFzZSIsInJhdGVzIiwiZGF0YSIsInVzZUVmZmVjdCIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVDb21wYXJlQmFzZUNoYW5nZSIsImhhbmRsZUJhc2VDaGFuZ2UiLCJwdXNoIiwiaGFuZGxlRGF0ZUNoYW5nZSIsIkN1c3RvbURhdGVQaWNrZXJJbnB1dCIsIm9uQ2xpY2siLCJjb25zb2xlIiwibG9nIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzIiwiRGF0ZSIsIk9iamVjdCIsImtleXMiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsYUFBYSxHQUFHQyxJQUFJLElBQUk7QUFDMUIsUUFBTUMsQ0FBQyxHQUFHRCxJQUFJLENBQUNFLFdBQUwsRUFBVjtBQUNBLFFBQU1DLENBQUMsR0FBR0gsSUFBSSxDQUFDSSxRQUFMLEtBQWtCLENBQTVCO0FBQ0EsUUFBTUMsQ0FBQyxHQUFHTCxJQUFJLENBQUNNLE9BQUwsRUFBVjtBQUNBLFNBQU9MLENBQUMsR0FBRyxHQUFK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QUFEO0FBQUssTUFBRSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsa0VBQUQsQ0FBWSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGtFQUFELENBQVksSUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tmLFdBREwsQ0FESixDQURKLEVBTUk7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixTQUFLLEVBQUVLLGdCQUExQjtBQUE0QyxZQUFRLEVBQUVVLFlBQXREO0FBQW9FLFFBQUksRUFBQyxrQkFBekU7QUFBNEYsYUFBUyxFQUFFLGNBQXZHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixDQURKLENBREosQ0FsQkosQ0FkSixFQTZDSSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhEQUFEO0FBQVksU0FBSyxFQUFFTCxLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixDQTdDSixDQURKO0FBcURILENBMUdEOztHQUFNWixJO1VBZWFnQixxRDs7O0tBZmJoQixJOztBQW9IU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2RhdGVdL1tiYXNlXS5kZDVjZjdiMTEwMWU2NjIzM2NmYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xvYWRpbmdcIjtcclxuaW1wb3J0IEVycm9yIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Vycm9yXCI7XHJcbmltcG9ydCBSYXRlc1RhYmxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1JhdGVzVGFibGVcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mb3JtL1NlbGVjdFwiO1xyXG5pbXBvcnQge0NvbCwgUm93LCBDb250YWluZXJ9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcInJlYWN0LWRhdGVwaWNrZXJcIjtcclxuaW1wb3J0IEZvcm1Hcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1Hcm91cFwiO1xyXG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0lucHV0R3JvdXBcIjtcclxuXHJcbmNvbnN0IGdldERhdGVTdHJpbmcgPSBkYXRlID0+IHtcclxuICAgIGNvbnN0IHkgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBtID0gZGF0ZS5nZXRNb250aCgpICsgMTtcclxuICAgIGNvbnN0IGQgPSBkYXRlLmdldERhdGUoKTtcclxuICAgIHJldHVybiB5ICsgXCItXCIgKyBtICsgXCItXCIgKyBkO1xyXG59XHJcblxyXG5jb25zdCBCYXNlID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbY29tcGFyZUJhc2UsIHNldENvbXBhcmVCYXNlXSA9IHVzZVN0YXRlKFwiRVVSXCIpO1xyXG4gICAgY29uc3QgW2Jhc2VWYWx1ZSwgc2V0QmFzZVZhbHVlXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW2NvbXBhcmVCYXNlVmFsdWUsIHNldENvbXBhcmVCYXNlVmFsdWVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbY29tcGFyZUJhc2VSYXRlLCBzZXRDb21wYXJlQmFzZVJhdGVdID0gdXNlU3RhdGUoMik7XHJcbiAgICBjb25zdCB7YmFzZSwgZGF0ZSwgcmF0ZXN9ID0gcHJvcHMuZGF0YTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRDb21wYXJlQmFzZVZhbHVlKHJhdGVzW2NvbXBhcmVCYXNlXSlcclxuICAgICAgICBzZXRDb21wYXJlQmFzZVJhdGUocmF0ZXNbY29tcGFyZUJhc2VdKVxyXG4gICAgICAgIHNldEJhc2VWYWx1ZSgxKTtcclxuICAgIH0sW3JhdGVzXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldDtcclxuICAgICAgICBzd2l0Y2gobmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYmFzZVZhbHVlXCI6XHJcbiAgICAgICAgICAgICAgICBzZXRCYXNlVmFsdWUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0Q29tcGFyZUJhc2VWYWx1ZSh2YWx1ZSAqIGNvbXBhcmVCYXNlUmF0ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIFwiY29tcGFyZUJhc2VWYWx1ZVwiOlxyXG4gICAgICAgICAgICAgICAgc2V0Q29tcGFyZUJhc2VWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRCYXNlVmFsdWUodmFsdWUgLyBjb21wYXJlQmFzZVJhdGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDb21wYXJlQmFzZUNoYW5nZSA9IGUgPT4ge1xyXG4gICAgICAgIHNldENvbXBhcmVCYXNlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBzZXRDb21wYXJlQmFzZVJhdGUocmF0ZXNbZS50YXJnZXQudmFsdWVdKVxyXG4gICAgICAgIHNldENvbXBhcmVCYXNlVmFsdWUoYmFzZVZhbHVlICogcmF0ZXNbZS50YXJnZXQudmFsdWVdKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUJhc2VDaGFuZ2UgPSBlID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaChgLyR7ZGF0ZX0vJHtlLnRhcmdldC52YWx1ZX1gKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZURhdGVDaGFuZ2UgPSBkYXRlID0+IHtcclxuXHJcbiAgICAgICAgcm91dGVyLnB1c2goYC8ke2dldERhdGVTdHJpbmcoZGF0ZSl9LyR7YmFzZX1gKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEN1c3RvbURhdGVQaWNrZXJJbnB1dCA9ICh7IHZhbHVlLCBvbkNsaWNrIH0pID0+IChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2FsZW5kYXJcIj48L2k+IHt2YWx1ZX17Y29uc29sZS5sb2codmFsdWUpfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtcImJnLWRhcmsgdGV4dC1saWdodCBwLTVcIn0gc3R5bGU9e3sgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IFwiNTBweFwiLCBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiBcIjUwcHhcIiwgIH19PlxyXG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT17XCJtYi01XCJ9PlxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+U2hvd2luZyByZXN1bHRzIGZvciB7YmFzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17XCIyXCJ9IGNsYXNzTmFtZT17XCJmbG9hdC1yaWdodFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIHNlbGVjdGVkPXtuZXcgRGF0ZShkYXRlKX0gY3VzdG9tSW5wdXQ9ezxDdXN0b21EYXRlUGlja2VySW5wdXQgLz59IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXtkYXRlID0+IGhhbmRsZURhdGVDaGFuZ2UoZGF0ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXtcIjJcIn0gY2xhc3NOYW1lPXtcImZsb2F0LXJpZ2h0XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBoYW5kbGVDaGFuZ2U9e2hhbmRsZUJhc2VDaGFuZ2V9IGJhc2U9e2Jhc2V9IG9wdGlvbnM9e09iamVjdC5rZXlzKHJhdGVzKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYmctbGlnaHQgcC00XCIgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0IGhhbmRsZUNoYW5nZT17aGFuZGxlQ29tcGFyZUJhc2VDaGFuZ2V9IGJhc2U9e2NvbXBhcmVCYXNlfSBvcHRpb25zPXtPYmplY3Qua2V5cyhyYXRlcyl9IGNvbXBhcmUgLz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLkFwcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiYXNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuQXBwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtiYXNlVmFsdWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IG5hbWU9XCJiYXNlVmFsdWVcIiBjbGFzc05hbWU9e1wiZm9ybS1jb250cm9sXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuQXBwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb21wYXJlQmFzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5BcHBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17Y29tcGFyZUJhc2VWYWx1ZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gbmFtZT1cImNvbXBhcmVCYXNlVmFsdWVcIiBjbGFzc05hbWU9e1wiZm9ybS1jb250cm9sXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhdGVzVGFibGUgcmF0ZXM9e3JhdGVzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHtkYXRlLCBiYXNlfSA9IGNvbnRleHQucGFyYW1zO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5leGNoYW5nZXJhdGVzYXBpLmlvLyR7ZGF0ZX0/YmFzZT0ke2Jhc2V9YClcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXN1bHQuZGF0YTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtkYXRhfSxcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCYXNlOyJdLCJzb3VyY2VSb290IjoiIn0=