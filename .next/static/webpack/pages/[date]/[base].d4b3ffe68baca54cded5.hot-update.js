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
    alert("here");
    setBaseValue(rates[base]);
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
        setCompareBaseValue(baseValue * compareBaseRate);
        break;

      case "compareBaseValue":
        setCompareBaseValue(value);
        alert(compareBaseValue / compareBaseRate);
        setCompareBaseValue(compareBaseValue / compareBaseRate);
        break;

      default:
        return;
    }
  };

  const handleCompareBaseChange = e => {
    setCompareBase(e.target.value);
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
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fas fa-calendar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }), " ", value, console.log(value));

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: "bg-dark text-light p-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    className: "mb-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, "Showing results for ", base), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_7___default.a, {
    selected: new Date(date),
    customInput: __jsx(CustomDatePickerInput, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 72
      }
    }),
    className: "form-control",
    onChange: date => handleDateChange(date),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    className: "bg-light p-4",
    style: {
      margin: "0 0px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    md: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, __jsx(_components_form_Select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    handleChange: handleBaseChange,
    base: base,
    options: Object.keys(rates),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    md: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
      lineNumber: 84,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    md: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_FormGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"].Append, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
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
      lineNumber: 94,
      columnNumber: 27
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    md: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_FormGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"].Append, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
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
      lineNumber: 106,
      columnNumber: 29
    }
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, __jsx(_components_RatesTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
    rates: rates,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1tkYXRlXS9bYmFzZV0uanMiXSwibmFtZXMiOlsiZ2V0RGF0ZVN0cmluZyIsImRhdGUiLCJ5IiwiZ2V0RnVsbFllYXIiLCJtIiwiZ2V0TW9udGgiLCJkIiwiZ2V0RGF0ZSIsIkJhc2UiLCJwcm9wcyIsImNvbXBhcmVCYXNlIiwic2V0Q29tcGFyZUJhc2UiLCJ1c2VTdGF0ZSIsImJhc2VWYWx1ZSIsInNldEJhc2VWYWx1ZSIsImNvbXBhcmVCYXNlVmFsdWUiLCJzZXRDb21wYXJlQmFzZVZhbHVlIiwiY29tcGFyZUJhc2VSYXRlIiwic2V0Q29tcGFyZUJhc2VSYXRlIiwiYmFzZSIsInJhdGVzIiwiZGF0YSIsInVzZUVmZmVjdCIsImFsZXJ0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRsZUNvbXBhcmVCYXNlQ2hhbmdlIiwiaGFuZGxlQmFzZUNoYW5nZSIsInB1c2giLCJoYW5kbGVEYXRlQ2hhbmdlIiwiQ3VzdG9tRGF0ZVBpY2tlcklucHV0Iiwib25DbGljayIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwibWFyZ2luIiwiT2JqZWN0Iiwia2V5cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUdDLElBQUksSUFBSTtBQUMxQixRQUFNQyxDQUFDLEdBQUdELElBQUksQ0FBQ0UsV0FBTCxFQUFWO0FBQ0EsUUFBTUMsQ0FBQyxHQUFHSCxJQUFJLENBQUNJLFFBQUwsS0FBa0IsQ0FBNUI7QUFDQSxRQUFNQyxDQUFDLEdBQUdMLElBQUksQ0FBQ00sT0FBTCxFQUFWO0FBQ0EsU0FBT0wsQ0FBQyxHQUFHLEdBQUosR0FBVUUsQ0FBVixHQUFjLEdBQWQsR0FBb0JFLENBQTNCO0FBQ0gs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QUEsSUFOSixDQURKLENBREosQ0FuQkosQ0FQSixFQXVDSSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhEQUFEO0FBQVksU0FBSyxFQUFFTixLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixDQXZDSixDQURKO0FBK0NILENBbEdEOztHQUFNWixJO1VBY2FpQixxRDs7O0tBZGJqQixJOztBQTRHU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2RhdGVdL1tiYXNlXS5kNGIzZmZlNjhiYWNhNTRjZGVkNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xvYWRpbmdcIjtcclxuaW1wb3J0IEVycm9yIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Vycm9yXCI7XHJcbmltcG9ydCBSYXRlc1RhYmxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1JhdGVzVGFibGVcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mb3JtL1NlbGVjdFwiO1xyXG5pbXBvcnQge0NvbCwgUm93LCBDb250YWluZXJ9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcInJlYWN0LWRhdGVwaWNrZXJcIjtcclxuaW1wb3J0IEZvcm1Hcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1Hcm91cFwiO1xyXG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0lucHV0R3JvdXBcIjtcclxuXHJcbmNvbnN0IGdldERhdGVTdHJpbmcgPSBkYXRlID0+IHtcclxuICAgIGNvbnN0IHkgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBtID0gZGF0ZS5nZXRNb250aCgpICsgMTtcclxuICAgIGNvbnN0IGQgPSBkYXRlLmdldERhdGUoKTtcclxuICAgIHJldHVybiB5ICsgXCItXCIgKyBtICsgXCItXCIgKyBkO1xyXG59XHJcblxyXG5jb25zdCBCYXNlID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbY29tcGFyZUJhc2UsIHNldENvbXBhcmVCYXNlXSA9IHVzZVN0YXRlKFwiRVVSXCIpO1xyXG4gICAgY29uc3QgW2Jhc2VWYWx1ZSwgc2V0QmFzZVZhbHVlXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW2NvbXBhcmVCYXNlVmFsdWUsIHNldENvbXBhcmVCYXNlVmFsdWVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbY29tcGFyZUJhc2VSYXRlLCBzZXRDb21wYXJlQmFzZVJhdGVdID0gdXNlU3RhdGUoMik7XHJcbiAgICBjb25zdCB7YmFzZSwgZGF0ZSwgcmF0ZXN9ID0gcHJvcHMuZGF0YTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhbGVydChcImhlcmVcIilcclxuICAgICAgICBzZXRCYXNlVmFsdWUocmF0ZXNbYmFzZV0pXHJcbiAgICB9LFtyYXRlc10pO1xyXG5cclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcclxuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgc3dpdGNoKG5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImJhc2VWYWx1ZVwiOlxyXG4gICAgICAgICAgICAgICAgc2V0QmFzZVZhbHVlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHNldENvbXBhcmVCYXNlVmFsdWUoYmFzZVZhbHVlICogY29tcGFyZUJhc2VSYXRlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgXCJjb21wYXJlQmFzZVZhbHVlXCI6XHJcbiAgICAgICAgICAgICAgICBzZXRDb21wYXJlQmFzZVZhbHVlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGNvbXBhcmVCYXNlVmFsdWUgLyBjb21wYXJlQmFzZVJhdGUpXHJcbiAgICAgICAgICAgICAgICBzZXRDb21wYXJlQmFzZVZhbHVlKGNvbXBhcmVCYXNlVmFsdWUgLyBjb21wYXJlQmFzZVJhdGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDb21wYXJlQmFzZUNoYW5nZSA9IGUgPT4ge1xyXG4gICAgICAgIHNldENvbXBhcmVCYXNlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVCYXNlQ2hhbmdlID0gZSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC8ke2RhdGV9LyR7ZS50YXJnZXQudmFsdWV9YClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVEYXRlQ2hhbmdlID0gZGF0ZSA9PiB7XHJcblxyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvJHtnZXREYXRlU3RyaW5nKGRhdGUpfS8ke2Jhc2V9YClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBDdXN0b21EYXRlUGlja2VySW5wdXQgPSAoeyB2YWx1ZSwgb25DbGljayB9KSA9PiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNhbGVuZGFyXCI+PC9pPiB7dmFsdWV9e2NvbnNvbGUubG9nKHZhbHVlKX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17XCJiZy1kYXJrIHRleHQtbGlnaHQgcC01XCJ9PlxyXG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT17XCJtYi01XCJ9PlxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+U2hvd2luZyByZXN1bHRzIGZvciB7YmFzZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIHNlbGVjdGVkPXtuZXcgRGF0ZShkYXRlKX0gY3VzdG9tSW5wdXQ9ezxDdXN0b21EYXRlUGlja2VySW5wdXQgLz59IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXtkYXRlID0+IGhhbmRsZURhdGVDaGFuZ2UoZGF0ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYmctbGlnaHQgcC00XCIgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG1kPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0IGhhbmRsZUNoYW5nZT17aGFuZGxlQmFzZUNoYW5nZX0gYmFzZT17YmFzZX0gb3B0aW9ucz17T2JqZWN0LmtleXMocmF0ZXMpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG1kPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0IGhhbmRsZUNoYW5nZT17aGFuZGxlQ29tcGFyZUJhc2VDaGFuZ2V9IGJhc2U9e2NvbXBhcmVCYXNlfSBvcHRpb25zPXtPYmplY3Qua2V5cyhyYXRlcyl9IGNvbXBhcmUgLz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBtZD1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLkFwcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiYXNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuQXBwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtiYXNlVmFsdWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IG5hbWU9XCJiYXNlVmFsdWVcIiBjbGFzc05hbWU9e1wiZm9ybS1jb250cm9sXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG1kPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuQXBwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb21wYXJlQmFzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5BcHBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17Y29tcGFyZUJhc2VWYWx1ZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gbmFtZT1cImNvbXBhcmVCYXNlVmFsdWVcIiBjbGFzc05hbWU9e1wiZm9ybS1jb250cm9sXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhdGVzVGFibGUgcmF0ZXM9e3JhdGVzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHtkYXRlLCBiYXNlfSA9IGNvbnRleHQucGFyYW1zO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5leGNoYW5nZXJhdGVzYXBpLmlvLyR7ZGF0ZX0/YmFzZT0ke2Jhc2V9YClcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXN1bHQuZGF0YTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtkYXRhfSxcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCYXNlOyJdLCJzb3VyY2VSb290IjoiIn0=