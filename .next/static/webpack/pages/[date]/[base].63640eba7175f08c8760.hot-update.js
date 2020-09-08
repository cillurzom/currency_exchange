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
  }, "Showing results for ", base), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_7___default.a, {
    selected: new Date(date),
    customInput: __jsx(CustomDatePickerInput, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 72
      }
    }),
    className: "form-control",
    onChange: date => handleDateChange(date),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
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
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    md: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx(_components_form_Select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    handleChange: handleBaseChange,
    base: base,
    options: Object.keys(rates),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    md: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
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
      lineNumber: 86,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    md: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_FormGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"].Append, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
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
      lineNumber: 96,
      columnNumber: 27
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    md: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_FormGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"].Append, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
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
      lineNumber: 108,
      columnNumber: 29
    }
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, __jsx(_components_RatesTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
    rates: rates,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1tkYXRlXS9bYmFzZV0uanMiXSwibmFtZXMiOlsiZ2V0RGF0ZVN0cmluZyIsImRhdGUiLCJ5IiwiZ2V0RnVsbFllYXIiLCJtIiwiZ2V0TW9udGgiLCJkIiwiZ2V0RGF0ZSIsIkJhc2UiLCJwcm9wcyIsImNvbXBhcmVCYXNlIiwic2V0Q29tcGFyZUJhc2UiLCJ1c2VTdGF0ZSIsImJhc2VWYWx1ZSIsInNldEJhc2VWYWx1ZSIsImNvbXBhcmVCYXNlVmFsdWUiLCJzZXRDb21wYXJlQmFzZVZhbHVlIiwiY29tcGFyZUJhc2VSYXRlIiwic2V0Q29tcGFyZUJhc2VSYXRlIiwiYmFzZSIsInJhdGVzIiwiZGF0YSIsInVzZUVmZmVjdCIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJhbGVydCIsImhhbmRsZUNvbXBhcmVCYXNlQ2hhbmdlIiwiaGFuZGxlQmFzZUNoYW5nZSIsInB1c2giLCJoYW5kbGVEYXRlQ2hhbmdlIiwiQ3VzdG9tRGF0ZVBpY2tlcklucHV0Iiwib25DbGljayIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwibWFyZ2luIiwiT2JqZWN0Iiwia2V5cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUdDLElBQUksSUFBSTtBQUMxQixRQUFNQyxDQUFDLEdBQUdELElBQUksQ0FBQ0UsV0FBTCxFQUFWO0FBQ0EsUUFBTUMsQ0FBQyxHQUFHSCxJQUFJLENBQUNJLFFBQUwsS0FBa0IsQ0FBNUI7QUFDQSxRQUFNQyxDQUFDLEdBQUdMLElBQUksQ0FBQ00sT0FBTCxFQUFWO0FBQ0EsU0FBT0wsQ0FBQyxHQUFHLEdBQUosR0FBVUUsQ0FBVixHQUFjLEdBQWQsR0FBb0JFLENBQTNCO0FBQ0gs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S2YsV0FETCxDQURKLENBREosRUFNSTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFNBQUssRUFBRUssZ0JBQTFCO0FBQTRDLFlBQVEsRUFBRVUsWUFBdEQ7QUFBb0UsUUFBSSxFQUFDLGtCQUF6RTtBQUE0RixhQUFTLEVBQUUsY0FBdkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLENBREosQ0FESixDQW5CSixDQVBKLEVBdUNJLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOERBQUQ7QUFBWSxTQUFLLEVBQUVMLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLENBdkNKLENBREo7QUErQ0gsQ0FwR0Q7O0dBQU1aLEk7VUFjYWdCLHFEOzs7S0FkYmhCLEk7O0FBOEdTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bZGF0ZV0vW2Jhc2VdLjYzNjQwZWJhNzE3NWYwOGM4NzYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTG9hZGluZ1wiO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRXJyb3JcIjtcclxuaW1wb3J0IFJhdGVzVGFibGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUmF0ZXNUYWJsZVwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm0vU2VsZWN0XCI7XHJcbmltcG9ydCB7Q29sLCBSb3csIENvbnRhaW5lcn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwicmVhY3QtZGF0ZXBpY2tlclwiO1xyXG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybUdyb3VwXCI7XHJcbmltcG9ydCBJbnB1dEdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvSW5wdXRHcm91cFwiO1xyXG5cclxuY29uc3QgZ2V0RGF0ZVN0cmluZyA9IGRhdGUgPT4ge1xyXG4gICAgY29uc3QgeSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG0gPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgY29uc3QgZCA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgcmV0dXJuIHkgKyBcIi1cIiArIG0gKyBcIi1cIiArIGQ7XHJcbn1cclxuXHJcbmNvbnN0IEJhc2UgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtjb21wYXJlQmFzZSwgc2V0Q29tcGFyZUJhc2VdID0gdXNlU3RhdGUoXCJFVVJcIik7XHJcbiAgICBjb25zdCBbYmFzZVZhbHVlLCBzZXRCYXNlVmFsdWVdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbY29tcGFyZUJhc2VWYWx1ZSwgc2V0Q29tcGFyZUJhc2VWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtjb21wYXJlQmFzZVJhdGUsIHNldENvbXBhcmVCYXNlUmF0ZV0gPSB1c2VTdGF0ZSgyKTtcclxuICAgIGNvbnN0IHtiYXNlLCBkYXRlLCByYXRlc30gPSBwcm9wcy5kYXRhO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldENvbXBhcmVCYXNlVmFsdWUocmF0ZXNbY29tcGFyZUJhc2VdKVxyXG4gICAgICAgIHNldENvbXBhcmVCYXNlUmF0ZShyYXRlc1tjb21wYXJlQmFzZV0pXHJcbiAgICB9LFtyYXRlc10pO1xyXG5cclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcclxuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgc3dpdGNoKG5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImJhc2VWYWx1ZVwiOlxyXG4gICAgICAgICAgICAgICAgc2V0QmFzZVZhbHVlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHNldENvbXBhcmVCYXNlVmFsdWUoYmFzZVZhbHVlICogY29tcGFyZUJhc2VSYXRlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgXCJjb21wYXJlQmFzZVZhbHVlXCI6XHJcbiAgICAgICAgICAgICAgICBzZXRDb21wYXJlQmFzZVZhbHVlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGNvbXBhcmVCYXNlVmFsdWUgLyBjb21wYXJlQmFzZVJhdGUpXHJcbiAgICAgICAgICAgICAgICBzZXRDb21wYXJlQmFzZVZhbHVlKGNvbXBhcmVCYXNlVmFsdWUgLyBjb21wYXJlQmFzZVJhdGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDb21wYXJlQmFzZUNoYW5nZSA9IGUgPT4ge1xyXG4gICAgICAgIHNldENvbXBhcmVCYXNlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBzZXRDb21wYXJlQmFzZVJhdGUocmF0ZXNbZS50YXJnZXQudmFsdWVdKVxyXG4gICAgICAgIHNldENvbXBhcmVCYXNlVmFsdWUoYmFzZVZhbHVlICogcmF0ZXNbZS50YXJnZXQudmFsdWVdKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUJhc2VDaGFuZ2UgPSBlID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaChgLyR7ZGF0ZX0vJHtlLnRhcmdldC52YWx1ZX1gKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZURhdGVDaGFuZ2UgPSBkYXRlID0+IHtcclxuXHJcbiAgICAgICAgcm91dGVyLnB1c2goYC8ke2dldERhdGVTdHJpbmcoZGF0ZSl9LyR7YmFzZX1gKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEN1c3RvbURhdGVQaWNrZXJJbnB1dCA9ICh7IHZhbHVlLCBvbkNsaWNrIH0pID0+IChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2FsZW5kYXJcIj48L2k+IHt2YWx1ZX17Y29uc29sZS5sb2codmFsdWUpfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtcImJnLWRhcmsgdGV4dC1saWdodCBwLTVcIn0+XHJcbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPXtcIm1iLTVcIn0+XHJcbiAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5TaG93aW5nIHJlc3VsdHMgZm9yIHtiYXNlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgc2VsZWN0ZWQ9e25ldyBEYXRlKGRhdGUpfSBjdXN0b21JbnB1dD17PEN1c3RvbURhdGVQaWNrZXJJbnB1dCAvPn0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e2RhdGUgPT4gaGFuZGxlRGF0ZUNoYW5nZShkYXRlKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJiZy1saWdodCBwLTRcIiBzdHlsZT17eyBtYXJnaW46IFwiMCAwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3QgaGFuZGxlQ2hhbmdlPXtoYW5kbGVCYXNlQ2hhbmdlfSBiYXNlPXtiYXNlfSBvcHRpb25zPXtPYmplY3Qua2V5cyhyYXRlcyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3QgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDb21wYXJlQmFzZUNoYW5nZX0gYmFzZT17Y29tcGFyZUJhc2V9IG9wdGlvbnM9e09iamVjdC5rZXlzKHJhdGVzKX0gY29tcGFyZSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG1kPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuQXBwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jhc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5BcHBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2Jhc2VWYWx1ZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gbmFtZT1cImJhc2VWYWx1ZVwiIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2xcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5BcHBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbXBhcmVCYXNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLkFwcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtjb21wYXJlQmFzZVZhbHVlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBuYW1lPVwiY29tcGFyZUJhc2VWYWx1ZVwiIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2xcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICA8UmF0ZXNUYWJsZSByYXRlcz17cmF0ZXN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gICAgY29uc3Qge2RhdGUsIGJhc2V9ID0gY29udGV4dC5wYXJhbXM7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLmV4Y2hhbmdlcmF0ZXNhcGkuaW8vJHtkYXRlfT9iYXNlPSR7YmFzZX1gKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3VsdC5kYXRhO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge2RhdGF9LFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJhc2U7Il0sInNvdXJjZVJvb3QiOiIifQ==