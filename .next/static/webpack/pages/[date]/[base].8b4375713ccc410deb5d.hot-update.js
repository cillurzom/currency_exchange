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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1tkYXRlXS9bYmFzZV0uanMiXSwibmFtZXMiOlsiZ2V0RGF0ZVN0cmluZyIsImRhdGUiLCJ5IiwiZ2V0RnVsbFllYXIiLCJtIiwiZ2V0TW9udGgiLCJkIiwiZ2V0RGF0ZSIsIkJhc2UiLCJwcm9wcyIsImNvbXBhcmVCYXNlIiwic2V0Q29tcGFyZUJhc2UiLCJ1c2VTdGF0ZSIsImJhc2VWYWx1ZSIsInNldEJhc2VWYWx1ZSIsImNvbXBhcmVCYXNlVmFsdWUiLCJzZXRDb21wYXJlQmFzZVZhbHVlIiwiY29tcGFyZUJhc2VSYXRlIiwic2V0Q29tcGFyZUJhc2VSYXRlIiwiYmFzZSIsInJhdGVzIiwiZGF0YSIsInVzZUVmZmVjdCIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJhbGVydCIsImhhbmRsZUNvbXBhcmVCYXNlQ2hhbmdlIiwiaGFuZGxlQmFzZUNoYW5nZSIsInB1c2giLCJoYW5kbGVEYXRlQ2hhbmdlIiwiQ3VzdG9tRGF0ZVBpY2tlcklucHV0Iiwib25DbGljayIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwibWFyZ2luIiwiT2JqZWN0Iiwia2V5cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUdDLElBQUksSUFBSTtBQUMxQixRQUFNQyxDQUFDLEdBQUdELElBQUksQ0FBQ0UsV0FBTCxFQUFWO0FBQ0EsUUFBTUMsQ0FBQyxHQUFHSCxJQUFJLENBQUNJLFFBQUwsS0FBa0IsQ0FBNUI7QUFDQSxRQUFNQyxDQUFDLEdBQUdMLElBQUksQ0FBQ00sT0FBTCxFQUFWO0FBQ0EsU0FBT0wsQ0FBQyxHQUFHLEdBQUosR0FBVUUsQ0FBVixHQUFjLEdBQWQsR0FBb0JFLENBQTNCO0FBQ0gs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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosQ0FESixDQURKLENBbkJKLENBUEosRUF1Q0ksTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFZLFNBQUssRUFBRUwsS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosQ0F2Q0osQ0FESjtBQStDSCxDQWxHRDs7R0FBTVosSTtVQWNhZ0IscUQ7OztLQWRiaEIsSTs7QUE0R1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tkYXRlXS9bYmFzZV0uOGI0Mzc1NzEzY2NjNDEwZGViNWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nXCI7XHJcbmltcG9ydCBFcnJvciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9FcnJvclwiO1xyXG5pbXBvcnQgUmF0ZXNUYWJsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9SYXRlc1RhYmxlXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9TZWxlY3RcIjtcclxuaW1wb3J0IHtDb2wsIFJvdywgQ29udGFpbmVyfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XHJcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtR3JvdXBcIjtcclxuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9JbnB1dEdyb3VwXCI7XHJcblxyXG5jb25zdCBnZXREYXRlU3RyaW5nID0gZGF0ZSA9PiB7XHJcbiAgICBjb25zdCB5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbSA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICBjb25zdCBkID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgICByZXR1cm4geSArIFwiLVwiICsgbSArIFwiLVwiICsgZDtcclxufVxyXG5cclxuY29uc3QgQmFzZSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2NvbXBhcmVCYXNlLCBzZXRDb21wYXJlQmFzZV0gPSB1c2VTdGF0ZShcIkVVUlwiKTtcclxuICAgIGNvbnN0IFtiYXNlVmFsdWUsIHNldEJhc2VWYWx1ZV0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFtjb21wYXJlQmFzZVZhbHVlLCBzZXRDb21wYXJlQmFzZVZhbHVlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2NvbXBhcmVCYXNlUmF0ZSwgc2V0Q29tcGFyZUJhc2VSYXRlXSA9IHVzZVN0YXRlKDIpO1xyXG4gICAgY29uc3Qge2Jhc2UsIGRhdGUsIHJhdGVzfSA9IHByb3BzLmRhdGE7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0Q29tcGFyZUJhc2VWYWx1ZShyYXRlc1tjb21wYXJlQmFzZV0pXHJcbiAgICAgICAgc2V0Q29tcGFyZUJhc2VSYXRlKHJhdGVzW2NvbXBhcmVCYXNlXSlcclxuICAgIH0sW3JhdGVzXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldDtcclxuICAgICAgICBzd2l0Y2gobmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYmFzZVZhbHVlXCI6XHJcbiAgICAgICAgICAgICAgICBzZXRCYXNlVmFsdWUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0Q29tcGFyZUJhc2VWYWx1ZShiYXNlVmFsdWUgKiBjb21wYXJlQmFzZVJhdGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSBcImNvbXBhcmVCYXNlVmFsdWVcIjpcclxuICAgICAgICAgICAgICAgIHNldENvbXBhcmVCYXNlVmFsdWUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoY29tcGFyZUJhc2VWYWx1ZSAvIGNvbXBhcmVCYXNlUmF0ZSlcclxuICAgICAgICAgICAgICAgIHNldENvbXBhcmVCYXNlVmFsdWUoY29tcGFyZUJhc2VWYWx1ZSAvIGNvbXBhcmVCYXNlUmF0ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNvbXBhcmVCYXNlQ2hhbmdlID0gZSA9PiB7XHJcbiAgICAgICAgc2V0Q29tcGFyZUJhc2UoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUJhc2VDaGFuZ2UgPSBlID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaChgLyR7ZGF0ZX0vJHtlLnRhcmdldC52YWx1ZX1gKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZURhdGVDaGFuZ2UgPSBkYXRlID0+IHtcclxuXHJcbiAgICAgICAgcm91dGVyLnB1c2goYC8ke2dldERhdGVTdHJpbmcoZGF0ZSl9LyR7YmFzZX1gKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEN1c3RvbURhdGVQaWNrZXJJbnB1dCA9ICh7IHZhbHVlLCBvbkNsaWNrIH0pID0+IChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2FsZW5kYXJcIj48L2k+IHt2YWx1ZX17Y29uc29sZS5sb2codmFsdWUpfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtcImJnLWRhcmsgdGV4dC1saWdodCBwLTVcIn0+XHJcbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPXtcIm1iLTVcIn0+XHJcbiAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5TaG93aW5nIHJlc3VsdHMgZm9yIHtiYXNlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgc2VsZWN0ZWQ9e25ldyBEYXRlKGRhdGUpfSBjdXN0b21JbnB1dD17PEN1c3RvbURhdGVQaWNrZXJJbnB1dCAvPn0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e2RhdGUgPT4gaGFuZGxlRGF0ZUNoYW5nZShkYXRlKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJiZy1saWdodCBwLTRcIiBzdHlsZT17eyBtYXJnaW46IFwiMCAwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3QgaGFuZGxlQ2hhbmdlPXtoYW5kbGVCYXNlQ2hhbmdlfSBiYXNlPXtiYXNlfSBvcHRpb25zPXtPYmplY3Qua2V5cyhyYXRlcyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3QgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDb21wYXJlQmFzZUNoYW5nZX0gYmFzZT17Y29tcGFyZUJhc2V9IG9wdGlvbnM9e09iamVjdC5rZXlzKHJhdGVzKX0gY29tcGFyZSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG1kPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuQXBwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jhc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5BcHBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2Jhc2VWYWx1ZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gbmFtZT1cImJhc2VWYWx1ZVwiIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2xcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5BcHBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbXBhcmVCYXNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLkFwcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtjb21wYXJlQmFzZVZhbHVlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBuYW1lPVwiY29tcGFyZUJhc2VWYWx1ZVwiIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2xcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICA8UmF0ZXNUYWJsZSByYXRlcz17cmF0ZXN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gICAgY29uc3Qge2RhdGUsIGJhc2V9ID0gY29udGV4dC5wYXJhbXM7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLmV4Y2hhbmdlcmF0ZXNhcGkuaW8vJHtkYXRlfT9iYXNlPSR7YmFzZX1gKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3VsdC5kYXRhO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge2RhdGF9LFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJhc2U7Il0sInNvdXJjZVJvb3QiOiIifQ==