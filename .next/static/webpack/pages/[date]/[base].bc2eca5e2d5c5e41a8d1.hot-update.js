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
  }, "Showing results for ", base), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    className: "float-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 25
    }
  }, __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_7___default.a, {
    selected: new Date(date),
    customInput: __jsx(CustomDatePickerInput, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 80
      }
    }),
    className: "form-control",
    onChange: date => handleDateChange(date),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 29
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 25
    }
  }, __jsx(_components_form_Select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    handleChange: handleBaseChange,
    base: base,
    options: Object.keys(rates),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    md: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    md: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
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
      lineNumber: 93,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    md: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_FormGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"].Append, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
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
      lineNumber: 103,
      columnNumber: 27
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    md: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_FormGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"].Append, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
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
      lineNumber: 115,
      columnNumber: 29
    }
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, __jsx(_components_RatesTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
    rates: rates,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1tkYXRlXS9bYmFzZV0uanMiXSwibmFtZXMiOlsiZ2V0RGF0ZVN0cmluZyIsImRhdGUiLCJ5IiwiZ2V0RnVsbFllYXIiLCJtIiwiZ2V0TW9udGgiLCJkIiwiZ2V0RGF0ZSIsIkJhc2UiLCJwcm9wcyIsImNvbXBhcmVCYXNlIiwic2V0Q29tcGFyZUJhc2UiLCJ1c2VTdGF0ZSIsImJhc2VWYWx1ZSIsInNldEJhc2VWYWx1ZSIsImNvbXBhcmVCYXNlVmFsdWUiLCJzZXRDb21wYXJlQmFzZVZhbHVlIiwiY29tcGFyZUJhc2VSYXRlIiwic2V0Q29tcGFyZUJhc2VSYXRlIiwiYmFzZSIsInJhdGVzIiwiZGF0YSIsInVzZUVmZmVjdCIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVDb21wYXJlQmFzZUNoYW5nZSIsImhhbmRsZUJhc2VDaGFuZ2UiLCJwdXNoIiwiaGFuZGxlRGF0ZUNoYW5nZSIsIkN1c3RvbURhdGVQaWNrZXJJbnB1dCIsIm9uQ2xpY2siLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsIk9iamVjdCIsImtleXMiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsYUFBYSxHQUFHQyxJQUFJLElBQUk7QUFDMUIsUUFBTUMsQ0FBQyxHQUFHRCxJQUFJLENBQUNFLFdBQUwsRUFBVjtBQUNBLFFBQU1DLENBQUMsR0FBR0gsSUFBSSxDQUFDSSxRQUFMLEtBQWtCLENBQTVCO0FBQ0EsUUFBTUMsQ0FBQyxHQUFHTCxJQUFJLENBQUNNLE9BQUwsRUFBVjtBQUNBLFNBQU9MLENBQUMsR0FBRyxHQUFKLEdBQVVFLENBQVYsR0FBYyxHQUFkLEdBQW9CRSxDQUEzQjtBQUNILENBTEQ7O0FBT0EsTUFBTUUsSUFBSSxHQUFJQyxLQUFELElBQVc7QUFBQTs7QUFDcEIsUUFBTTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDQyxzREFBUSxDQUFDLEtBQUQsQ0FBOUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJGLHNEQUFRLENBQUMsQ0FBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDRyxnQkFBRDtBQUFBLE9BQW1CQztBQUFuQixNQUEwQ0osc0RBQVEsQ0FBQyxDQUFELENBQXhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLGVBQUQ7QUFBQSxPQUFrQkM7QUFBbEIsTUFBd0NOLHNEQUFRLENBQUMsQ0FBRCxDQUF0RDtBQUNBLFFBQU07QUFBQ08sUUFBRDtBQUFPbEIsUUFBUDtBQUFhbUI7QUFBYixNQUFzQlgsS0FBSyxDQUFDWSxJQUFsQztBQUdBQyx5REFBUyxDQUFDLE1BQU07QUFDWk4sdUJBQW1CLENBQUNJLEtBQUssQ0FBQ1YsV0FBRCxDQUFOLENBQW5CO0FBQ0FRLHNCQUFrQixDQUFDRSxLQUFLLENBQUNWLFdBQUQsQ0FBTixDQUFsQjtBQUNBSSxnQkFBWSxDQUFDLENBQUQsQ0FBWjtBQUNILEdBSlEsRUFJUCxDQUFDTSxLQUFELENBSk8sQ0FBVDtBQU9BLFFBQU1HLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsUUFBTUMsWUFBWSxHQUFHQyxDQUFDLElBQUk7QUFDdEIsVUFBTTtBQUFDQyxVQUFEO0FBQU9DO0FBQVAsUUFBZ0JGLENBQUMsQ0FBQ0csTUFBeEI7O0FBQ0EsWUFBT0YsSUFBUDtBQUNJLFdBQUssV0FBTDtBQUNJYixvQkFBWSxDQUFDYyxLQUFELENBQVo7QUFDQVosMkJBQW1CLENBQUNZLEtBQUssR0FBR1gsZUFBVCxDQUFuQjtBQUNBOztBQUNKLFdBQUssa0JBQUw7QUFDSUQsMkJBQW1CLENBQUNZLEtBQUQsQ0FBbkI7QUFDQWQsb0JBQVksQ0FBQ2MsS0FBSyxHQUFHWCxlQUFULENBQVo7QUFDQTs7QUFDSjtBQUFTO0FBVGI7QUFXSCxHQWJEOztBQWVBLFFBQU1hLHVCQUF1QixHQUFHSixDQUFDLElBQUk7QUFDakNmLGtCQUFjLENBQUNlLENBQUMsQ0FBQ0csTUFBRixDQUFTRCxLQUFWLENBQWQ7QUFDQVYsc0JBQWtCLENBQUNFLEtBQUssQ0FBQ00sQ0FBQyxDQUFDRyxNQUFGLENBQVNELEtBQVYsQ0FBTixDQUFsQjtBQUNBWix1QkFBbUIsQ0FBQ0gsU0FBUyxHQUFHTyxLQUFLLENBQUNNLENBQUMsQ0FBQ0csTUFBRixDQUFTRCxLQUFWLENBQWxCLENBQW5CO0FBQ0gsR0FKRDs7QUFNQSxRQUFNRyxnQkFBZ0IsR0FBR0wsQ0FBQyxJQUFJO0FBQzFCSCxVQUFNLENBQUNTLElBQVAsQ0FBYSxJQUFHL0IsSUFBSyxJQUFHeUIsQ0FBQyxDQUFDRyxNQUFGLENBQVNELEtBQU0sRUFBdkM7QUFDSCxHQUZEOztBQUlBLFFBQU1LLGdCQUFnQixHQUFHaEMsSUFBSSxJQUFJO0FBRTdCc0IsVUFBTSxDQUFDUyxJQUFQLENBQWEsSUFBR2hDLGFBQWEsQ0FBQ0MsSUFBRCxDQUFPLElBQUdrQixJQUFLLEVBQTVDO0FBQ0gsR0FIRDs7QUFLQSxRQUFNZSxxQkFBcUIsR0FBRyxDQUFDO0FBQUVOLFNBQUY7QUFBU087QUFBVCxHQUFELEtBQzFCO0FBQVEsYUFBUyxFQUFDLGlCQUFsQjtBQUFvQyxXQUFPLEVBQUVBLE9BQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxpQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosT0FDeUNQLEtBRHpDLEVBQ2dEUSxPQUFPLENBQUNDLEdBQVIsQ0FBWVQsS0FBWixDQURoRCxDQURKOztBQU1BLFNBQ0ksTUFBQyx5REFBRDtBQUFXLGFBQVMsRUFBRSx3QkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUUsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQXlCVCxJQUF6QixDQURKLEVBRUksTUFBQyxtREFBRDtBQUFLLGFBQVMsRUFBRSxhQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtREFBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHVEQUFEO0FBQVksWUFBUSxFQUFFLElBQUltQixJQUFKLENBQVNyQyxJQUFULENBQXRCO0FBQXNDLGVBQVcsRUFBRSxNQUFDLHFCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBbkQ7QUFBOEUsYUFBUyxFQUFDLGNBQXhGO0FBQXVHLFlBQVEsRUFBRUEsSUFBSSxJQUFJZ0MsZ0JBQWdCLENBQUNoQyxJQUFELENBQXpJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBSUksTUFBQyxtREFBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLCtEQUFEO0FBQVEsZ0JBQVksRUFBRThCLGdCQUF0QjtBQUF3QyxRQUFJLEVBQUVaLElBQTlDO0FBQW9ELFdBQU8sRUFBRW9CLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZcEIsS0FBWixDQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FKSixDQUZKLENBREosQ0FESixFQWVJLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUE4QixTQUFLLEVBQUU7QUFBRXFCLFlBQU0sRUFBRTtBQUFWLEtBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1EQUFEO0FBQUssTUFBRSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBR0ksTUFBQyxtREFBRDtBQUFLLE1BQUUsRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQVEsZ0JBQVksRUFBRVgsdUJBQXRCO0FBQStDLFFBQUksRUFBRXBCLFdBQXJEO0FBQWtFLFdBQU8sRUFBRTZCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZcEIsS0FBWixDQUEzRTtBQUErRixXQUFPLE1BQXRHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUhKLEVBTUksTUFBQyxtREFBRDtBQUFLLE1BQUUsRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGtFQUFELENBQVksTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxrRUFBRCxDQUFZLElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLRCxJQURMLENBREosQ0FESixFQU1JO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsU0FBSyxFQUFFTixTQUExQjtBQUFxQyxZQUFRLEVBQUVZLFlBQS9DO0FBQTZELFFBQUksRUFBQyxXQUFsRTtBQUE4RSxhQUFTLEVBQUUsY0FBekY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLENBREosQ0FERixDQU5KLEVBa0JJLE1BQUMsbURBQUQ7QUFBSyxNQUFFLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxrRUFBRCxDQUFZLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsa0VBQUQsQ0FBWSxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS2YsV0FETCxDQURKLENBREosRUFNSTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFNBQUssRUFBRUssZ0JBQTFCO0FBQTRDLFlBQVEsRUFBRVUsWUFBdEQ7QUFBb0UsUUFBSSxFQUFDLGtCQUF6RTtBQUE0RixhQUFTLEVBQUUsY0FBdkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLENBREosQ0FESixDQWxCSixDQWZKLEVBOENJLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOERBQUQ7QUFBWSxTQUFLLEVBQUVMLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLENBOUNKLENBREo7QUFzREgsQ0EzR0Q7O0dBQU1aLEk7VUFlYWdCLHFEOzs7S0FmYmhCLEk7O0FBcUhTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bZGF0ZV0vW2Jhc2VdLmJjMmVjYTVlMmQ1YzVlNDFhOGQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTG9hZGluZ1wiO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRXJyb3JcIjtcclxuaW1wb3J0IFJhdGVzVGFibGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUmF0ZXNUYWJsZVwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm0vU2VsZWN0XCI7XHJcbmltcG9ydCB7Q29sLCBSb3csIENvbnRhaW5lcn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwicmVhY3QtZGF0ZXBpY2tlclwiO1xyXG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybUdyb3VwXCI7XHJcbmltcG9ydCBJbnB1dEdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvSW5wdXRHcm91cFwiO1xyXG5cclxuY29uc3QgZ2V0RGF0ZVN0cmluZyA9IGRhdGUgPT4ge1xyXG4gICAgY29uc3QgeSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG0gPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgY29uc3QgZCA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgcmV0dXJuIHkgKyBcIi1cIiArIG0gKyBcIi1cIiArIGQ7XHJcbn1cclxuXHJcbmNvbnN0IEJhc2UgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtjb21wYXJlQmFzZSwgc2V0Q29tcGFyZUJhc2VdID0gdXNlU3RhdGUoXCJFVVJcIik7XHJcbiAgICBjb25zdCBbYmFzZVZhbHVlLCBzZXRCYXNlVmFsdWVdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbY29tcGFyZUJhc2VWYWx1ZSwgc2V0Q29tcGFyZUJhc2VWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtjb21wYXJlQmFzZVJhdGUsIHNldENvbXBhcmVCYXNlUmF0ZV0gPSB1c2VTdGF0ZSgyKTtcclxuICAgIGNvbnN0IHtiYXNlLCBkYXRlLCByYXRlc30gPSBwcm9wcy5kYXRhO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldENvbXBhcmVCYXNlVmFsdWUocmF0ZXNbY29tcGFyZUJhc2VdKVxyXG4gICAgICAgIHNldENvbXBhcmVCYXNlUmF0ZShyYXRlc1tjb21wYXJlQmFzZV0pXHJcbiAgICAgICAgc2V0QmFzZVZhbHVlKDEpO1xyXG4gICAgfSxbcmF0ZXNdKTtcclxuXHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XHJcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgIHN3aXRjaChuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlVmFsdWVcIjpcclxuICAgICAgICAgICAgICAgIHNldEJhc2VWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRDb21wYXJlQmFzZVZhbHVlKHZhbHVlICogY29tcGFyZUJhc2VSYXRlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgXCJjb21wYXJlQmFzZVZhbHVlXCI6XHJcbiAgICAgICAgICAgICAgICBzZXRDb21wYXJlQmFzZVZhbHVlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHNldEJhc2VWYWx1ZSh2YWx1ZSAvIGNvbXBhcmVCYXNlUmF0ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNvbXBhcmVCYXNlQ2hhbmdlID0gZSA9PiB7XHJcbiAgICAgICAgc2V0Q29tcGFyZUJhc2UoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHNldENvbXBhcmVCYXNlUmF0ZShyYXRlc1tlLnRhcmdldC52YWx1ZV0pXHJcbiAgICAgICAgc2V0Q29tcGFyZUJhc2VWYWx1ZShiYXNlVmFsdWUgKiByYXRlc1tlLnRhcmdldC52YWx1ZV0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQmFzZUNoYW5nZSA9IGUgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvJHtkYXRlfS8ke2UudGFyZ2V0LnZhbHVlfWApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRGF0ZUNoYW5nZSA9IGRhdGUgPT4ge1xyXG5cclxuICAgICAgICByb3V0ZXIucHVzaChgLyR7Z2V0RGF0ZVN0cmluZyhkYXRlKX0vJHtiYXNlfWApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgQ3VzdG9tRGF0ZVBpY2tlcklucHV0ID0gKHsgdmFsdWUsIG9uQ2xpY2sgfSkgPT4gKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17b25DbGlja30+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jYWxlbmRhclwiPjwvaT4ge3ZhbHVlfXtjb25zb2xlLmxvZyh2YWx1ZSl9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e1wiYmctZGFyayB0ZXh0LWxpZ2h0IHAtNVwifT5cclxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9e1wibWItNVwifT5cclxuICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPlNob3dpbmcgcmVzdWx0cyBmb3Ige2Jhc2V9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT17XCJmbG9hdC1yaWdodFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBzZWxlY3RlZD17bmV3IERhdGUoZGF0ZSl9IGN1c3RvbUlucHV0PXs8Q3VzdG9tRGF0ZVBpY2tlcklucHV0IC8+fSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17ZGF0ZSA9PiBoYW5kbGVEYXRlQ2hhbmdlKGRhdGUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IGhhbmRsZUNoYW5nZT17aGFuZGxlQmFzZUNoYW5nZX0gYmFzZT17YmFzZX0gb3B0aW9ucz17T2JqZWN0LmtleXMocmF0ZXMpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYmctbGlnaHQgcC00XCIgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0IGhhbmRsZUNoYW5nZT17aGFuZGxlQ29tcGFyZUJhc2VDaGFuZ2V9IGJhc2U9e2NvbXBhcmVCYXNlfSBvcHRpb25zPXtPYmplY3Qua2V5cyhyYXRlcyl9IGNvbXBhcmUgLz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLkFwcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiYXNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuQXBwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtiYXNlVmFsdWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IG5hbWU9XCJiYXNlVmFsdWVcIiBjbGFzc05hbWU9e1wiZm9ybS1jb250cm9sXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuQXBwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb21wYXJlQmFzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5BcHBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17Y29tcGFyZUJhc2VWYWx1ZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gbmFtZT1cImNvbXBhcmVCYXNlVmFsdWVcIiBjbGFzc05hbWU9e1wiZm9ybS1jb250cm9sXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhdGVzVGFibGUgcmF0ZXM9e3JhdGVzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHtkYXRlLCBiYXNlfSA9IGNvbnRleHQucGFyYW1zO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5leGNoYW5nZXJhdGVzYXBpLmlvLyR7ZGF0ZX0/YmFzZT0ke2Jhc2V9YClcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXN1bHQuZGF0YTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtkYXRhfSxcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCYXNlOyJdLCJzb3VyY2VSb290IjoiIn0=