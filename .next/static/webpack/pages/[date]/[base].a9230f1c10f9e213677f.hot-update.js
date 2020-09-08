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
      borderTopRightRadius: "50%"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1tkYXRlXS9bYmFzZV0uanMiXSwibmFtZXMiOlsiZ2V0RGF0ZVN0cmluZyIsImRhdGUiLCJ5IiwiZ2V0RnVsbFllYXIiLCJtIiwiZ2V0TW9udGgiLCJkIiwiZ2V0RGF0ZSIsIkJhc2UiLCJwcm9wcyIsImNvbXBhcmVCYXNlIiwic2V0Q29tcGFyZUJhc2UiLCJ1c2VTdGF0ZSIsImJhc2VWYWx1ZSIsInNldEJhc2VWYWx1ZSIsImNvbXBhcmVCYXNlVmFsdWUiLCJzZXRDb21wYXJlQmFzZVZhbHVlIiwiY29tcGFyZUJhc2VSYXRlIiwic2V0Q29tcGFyZUJhc2VSYXRlIiwiYmFzZSIsInJhdGVzIiwiZGF0YSIsInVzZUVmZmVjdCIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVDb21wYXJlQmFzZUNoYW5nZSIsImhhbmRsZUJhc2VDaGFuZ2UiLCJwdXNoIiwiaGFuZGxlRGF0ZUNoYW5nZSIsIkN1c3RvbURhdGVQaWNrZXJJbnB1dCIsIm9uQ2xpY2siLCJjb25zb2xlIiwibG9nIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJEYXRlIiwiT2JqZWN0Iiwia2V5cyIsIm1hcmdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUdDLElBQUksSUFBSTtBQUMxQixRQUFNQyxDQUFDLEdBQUdELElBQUksQ0FBQ0UsV0FBTCxFQUFWO0FBQ0EsUUFBTUMsQ0FBQyxHQUFHSCxJQUFJLENBQUNJLFFBQUwsS0FBa0IsQ0FBNUI7QUFDQSxRQUFNQyxDQUFDLEdBQUdMLElBQUksQ0FBQ00sT0FBTCxFQUFWO0FBQ0EsU0FBT0wsQ0FBQyxHQUFHLEdBQUosR0FBVUUsQ0FBVixHQUFjLEdBQWQsR0FB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QUFBO0FBQUEsS0FDSSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGtFQUFELENBQVksTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxrRUFBRCxDQUFZLElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLZixXQURMLENBREosQ0FESixFQU1JO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsU0FBSyxFQUFFSyxnQkFBMUI7QUFBNEMsWUFBUSxFQUFFVSxZQUF0RDtBQUFvRSxRQUFJLEVBQUMsa0JBQXpFO0FBQTRGLGFBQVMsRUFBRSxjQUF2RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosQ0FESixDQURKLENBbEJKLENBZEosRUE2Q0ksTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFZLFNBQUssRUFBRUwsS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosQ0E3Q0osQ0FESjtBQXFESCxDQTFHRDs7R0FBTVosSTtVQWVhZ0IscUQ7OztLQWZiaEIsSTs7QUFvSFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tkYXRlXS9bYmFzZV0uYTkyMzBmMWMxMGY5ZTIxMzY3N2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nXCI7XHJcbmltcG9ydCBFcnJvciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9FcnJvclwiO1xyXG5pbXBvcnQgUmF0ZXNUYWJsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9SYXRlc1RhYmxlXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9TZWxlY3RcIjtcclxuaW1wb3J0IHtDb2wsIFJvdywgQ29udGFpbmVyfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XHJcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtR3JvdXBcIjtcclxuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9JbnB1dEdyb3VwXCI7XHJcblxyXG5jb25zdCBnZXREYXRlU3RyaW5nID0gZGF0ZSA9PiB7XHJcbiAgICBjb25zdCB5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbSA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICBjb25zdCBkID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgICByZXR1cm4geSArIFwiLVwiICsgbSArIFwiLVwiICsgZDtcclxufVxyXG5cclxuY29uc3QgQmFzZSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2NvbXBhcmVCYXNlLCBzZXRDb21wYXJlQmFzZV0gPSB1c2VTdGF0ZShcIkVVUlwiKTtcclxuICAgIGNvbnN0IFtiYXNlVmFsdWUsIHNldEJhc2VWYWx1ZV0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFtjb21wYXJlQmFzZVZhbHVlLCBzZXRDb21wYXJlQmFzZVZhbHVlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2NvbXBhcmVCYXNlUmF0ZSwgc2V0Q29tcGFyZUJhc2VSYXRlXSA9IHVzZVN0YXRlKDIpO1xyXG4gICAgY29uc3Qge2Jhc2UsIGRhdGUsIHJhdGVzfSA9IHByb3BzLmRhdGE7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0Q29tcGFyZUJhc2VWYWx1ZShyYXRlc1tjb21wYXJlQmFzZV0pXHJcbiAgICAgICAgc2V0Q29tcGFyZUJhc2VSYXRlKHJhdGVzW2NvbXBhcmVCYXNlXSlcclxuICAgICAgICBzZXRCYXNlVmFsdWUoMSk7XHJcbiAgICB9LFtyYXRlc10pO1xyXG5cclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcclxuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgc3dpdGNoKG5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImJhc2VWYWx1ZVwiOlxyXG4gICAgICAgICAgICAgICAgc2V0QmFzZVZhbHVlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHNldENvbXBhcmVCYXNlVmFsdWUodmFsdWUgKiBjb21wYXJlQmFzZVJhdGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSBcImNvbXBhcmVCYXNlVmFsdWVcIjpcclxuICAgICAgICAgICAgICAgIHNldENvbXBhcmVCYXNlVmFsdWUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0QmFzZVZhbHVlKHZhbHVlIC8gY29tcGFyZUJhc2VSYXRlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ29tcGFyZUJhc2VDaGFuZ2UgPSBlID0+IHtcclxuICAgICAgICBzZXRDb21wYXJlQmFzZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgc2V0Q29tcGFyZUJhc2VSYXRlKHJhdGVzW2UudGFyZ2V0LnZhbHVlXSlcclxuICAgICAgICBzZXRDb21wYXJlQmFzZVZhbHVlKGJhc2VWYWx1ZSAqIHJhdGVzW2UudGFyZ2V0LnZhbHVlXSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVCYXNlQ2hhbmdlID0gZSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC8ke2RhdGV9LyR7ZS50YXJnZXQudmFsdWV9YClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVEYXRlQ2hhbmdlID0gZGF0ZSA9PiB7XHJcblxyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvJHtnZXREYXRlU3RyaW5nKGRhdGUpfS8ke2Jhc2V9YClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBDdXN0b21EYXRlUGlja2VySW5wdXQgPSAoeyB2YWx1ZSwgb25DbGljayB9KSA9PiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNhbGVuZGFyXCI+PC9pPiB7dmFsdWV9e2NvbnNvbGUubG9nKHZhbHVlKX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17XCJiZy1kYXJrIHRleHQtbGlnaHQgcC01XCJ9IHN0eWxlPXt7IGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBcIjUwJVwiIH19PlxyXG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT17XCJtYi01XCJ9PlxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+U2hvd2luZyByZXN1bHRzIGZvciB7YmFzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17XCIyXCJ9IGNsYXNzTmFtZT17XCJmbG9hdC1yaWdodFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIHNlbGVjdGVkPXtuZXcgRGF0ZShkYXRlKX0gY3VzdG9tSW5wdXQ9ezxDdXN0b21EYXRlUGlja2VySW5wdXQgLz59IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXtkYXRlID0+IGhhbmRsZURhdGVDaGFuZ2UoZGF0ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXtcIjJcIn0gY2xhc3NOYW1lPXtcImZsb2F0LXJpZ2h0XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBoYW5kbGVDaGFuZ2U9e2hhbmRsZUJhc2VDaGFuZ2V9IGJhc2U9e2Jhc2V9IG9wdGlvbnM9e09iamVjdC5rZXlzKHJhdGVzKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYmctbGlnaHQgcC00XCIgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0IGhhbmRsZUNoYW5nZT17aGFuZGxlQ29tcGFyZUJhc2VDaGFuZ2V9IGJhc2U9e2NvbXBhcmVCYXNlfSBvcHRpb25zPXtPYmplY3Qua2V5cyhyYXRlcyl9IGNvbXBhcmUgLz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLkFwcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiYXNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuQXBwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtiYXNlVmFsdWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IG5hbWU9XCJiYXNlVmFsdWVcIiBjbGFzc05hbWU9e1wiZm9ybS1jb250cm9sXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuQXBwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb21wYXJlQmFzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5BcHBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17Y29tcGFyZUJhc2VWYWx1ZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gbmFtZT1cImNvbXBhcmVCYXNlVmFsdWVcIiBjbGFzc05hbWU9e1wiZm9ybS1jb250cm9sXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhdGVzVGFibGUgcmF0ZXM9e3JhdGVzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHtkYXRlLCBiYXNlfSA9IGNvbnRleHQucGFyYW1zO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5leGNoYW5nZXJhdGVzYXBpLmlvLyR7ZGF0ZX0/YmFzZT0ke2Jhc2V9YClcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXN1bHQuZGF0YTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtkYXRhfSxcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCYXNlOyJdLCJzb3VyY2VSb290IjoiIn0=