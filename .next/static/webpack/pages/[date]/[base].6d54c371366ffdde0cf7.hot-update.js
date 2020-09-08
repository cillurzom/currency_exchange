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
  }, "Showing results for ", base, __jsx("div", {
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
  }), __jsx(_components_form_Select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    handleChange: handleBaseChange,
    base: base,
    options: Object.keys(rates),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
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
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    md: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    md: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
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
      lineNumber: 90,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    md: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_FormGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"].Append, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
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
      lineNumber: 100,
      columnNumber: 27
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    md: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_FormGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"].Append, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
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
      lineNumber: 112,
      columnNumber: 29
    }
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, __jsx(_components_RatesTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
    rates: rates,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1tkYXRlXS9bYmFzZV0uanMiXSwibmFtZXMiOlsiZ2V0RGF0ZVN0cmluZyIsImRhdGUiLCJ5IiwiZ2V0RnVsbFllYXIiLCJtIiwiZ2V0TW9udGgiLCJkIiwiZ2V0RGF0ZSIsIkJhc2UiLCJwcm9wcyIsImNvbXBhcmVCYXNlIiwic2V0Q29tcGFyZUJhc2UiLCJ1c2VTdGF0ZSIsImJhc2VWYWx1ZSIsInNldEJhc2VWYWx1ZSIsImNvbXBhcmVCYXNlVmFsdWUiLCJzZXRDb21wYXJlQmFzZVZhbHVlIiwiY29tcGFyZUJhc2VSYXRlIiwic2V0Q29tcGFyZUJhc2VSYXRlIiwiYmFzZSIsInJhdGVzIiwiZGF0YSIsInVzZUVmZmVjdCIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVDb21wYXJlQmFzZUNoYW5nZSIsImhhbmRsZUJhc2VDaGFuZ2UiLCJwdXNoIiwiaGFuZGxlRGF0ZUNoYW5nZSIsIkN1c3RvbURhdGVQaWNrZXJJbnB1dCIsIm9uQ2xpY2siLCJjb25zb2xlIiwibG9nIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzIiwiRGF0ZSIsIk9iamVjdCIsImtleXMiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsYUFBYSxHQUFHQyxJQUFJLElBQUk7QUFDMUIsUUFBTUMsQ0FBQyxHQUFHRCxJQUFJLENBQUNFLFdBQUwsRUFBVjtBQUNBLFFBQU1DLENBQUMsR0FBR0gsSUFBSSxDQUFDSSxRQUFMLEtBQWtCLENBQTVCO0FBQ0EsUUFBTUMsQ0FBQyxHQUFHTCxJQUFJLENBQUNNLE9BQUwsRUFBVjtBQUNBLFNBQU9MLENBQUMsR0FBRyxHQUFK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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGtFQUFELENBQVksTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxrRUFBRCxDQUFZLElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLZixXQURMLENBREosQ0FESixFQU1JO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsU0FBSyxFQUFFSyxnQkFBMUI7QUFBNEMsWUFBUSxFQUFFVSxZQUF0RDtBQUFvRSxRQUFJLEVBQUMsa0JBQXpFO0FBQTRGLGFBQVMsRUFBRSxjQUF2RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosQ0FESixDQURKLENBbEJKLENBWkosRUEyQ0ksTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFZLFNBQUssRUFBRUwsS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosQ0EzQ0osQ0FESjtBQW1ESCxDQXhHRDs7R0FBTVosSTtVQWVhZ0IscUQ7OztLQWZiaEIsSTs7QUFrSFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tkYXRlXS9bYmFzZV0uNmQ1NGMzNzEzNjZmZmRkZTBjZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nXCI7XHJcbmltcG9ydCBFcnJvciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9FcnJvclwiO1xyXG5pbXBvcnQgUmF0ZXNUYWJsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9SYXRlc1RhYmxlXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9TZWxlY3RcIjtcclxuaW1wb3J0IHtDb2wsIFJvdywgQ29udGFpbmVyfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XHJcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtR3JvdXBcIjtcclxuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9JbnB1dEdyb3VwXCI7XHJcblxyXG5jb25zdCBnZXREYXRlU3RyaW5nID0gZGF0ZSA9PiB7XHJcbiAgICBjb25zdCB5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbSA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICBjb25zdCBkID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgICByZXR1cm4geSArIFwiLVwiICsgbSArIFwiLVwiICsgZDtcclxufVxyXG5cclxuY29uc3QgQmFzZSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2NvbXBhcmVCYXNlLCBzZXRDb21wYXJlQmFzZV0gPSB1c2VTdGF0ZShcIkVVUlwiKTtcclxuICAgIGNvbnN0IFtiYXNlVmFsdWUsIHNldEJhc2VWYWx1ZV0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFtjb21wYXJlQmFzZVZhbHVlLCBzZXRDb21wYXJlQmFzZVZhbHVlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2NvbXBhcmVCYXNlUmF0ZSwgc2V0Q29tcGFyZUJhc2VSYXRlXSA9IHVzZVN0YXRlKDIpO1xyXG4gICAgY29uc3Qge2Jhc2UsIGRhdGUsIHJhdGVzfSA9IHByb3BzLmRhdGE7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0Q29tcGFyZUJhc2VWYWx1ZShyYXRlc1tjb21wYXJlQmFzZV0pXHJcbiAgICAgICAgc2V0Q29tcGFyZUJhc2VSYXRlKHJhdGVzW2NvbXBhcmVCYXNlXSlcclxuICAgICAgICBzZXRCYXNlVmFsdWUoMSk7XHJcbiAgICB9LFtyYXRlc10pO1xyXG5cclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcclxuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgc3dpdGNoKG5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImJhc2VWYWx1ZVwiOlxyXG4gICAgICAgICAgICAgICAgc2V0QmFzZVZhbHVlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHNldENvbXBhcmVCYXNlVmFsdWUodmFsdWUgKiBjb21wYXJlQmFzZVJhdGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSBcImNvbXBhcmVCYXNlVmFsdWVcIjpcclxuICAgICAgICAgICAgICAgIHNldENvbXBhcmVCYXNlVmFsdWUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0QmFzZVZhbHVlKHZhbHVlIC8gY29tcGFyZUJhc2VSYXRlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ29tcGFyZUJhc2VDaGFuZ2UgPSBlID0+IHtcclxuICAgICAgICBzZXRDb21wYXJlQmFzZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgc2V0Q29tcGFyZUJhc2VSYXRlKHJhdGVzW2UudGFyZ2V0LnZhbHVlXSlcclxuICAgICAgICBzZXRDb21wYXJlQmFzZVZhbHVlKGJhc2VWYWx1ZSAqIHJhdGVzW2UudGFyZ2V0LnZhbHVlXSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVCYXNlQ2hhbmdlID0gZSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC8ke2RhdGV9LyR7ZS50YXJnZXQudmFsdWV9YClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVEYXRlQ2hhbmdlID0gZGF0ZSA9PiB7XHJcblxyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvJHtnZXREYXRlU3RyaW5nKGRhdGUpfS8ke2Jhc2V9YClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBDdXN0b21EYXRlUGlja2VySW5wdXQgPSAoeyB2YWx1ZSwgb25DbGljayB9KSA9PiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNhbGVuZGFyXCI+PC9pPiB7dmFsdWV9e2NvbnNvbGUubG9nKHZhbHVlKX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17XCJiZy1kYXJrIHRleHQtbGlnaHQgcC01XCJ9IHN0eWxlPXt7IGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBcIjUwcHhcIiwgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogXCI1MHB4XCIsICB9fT5cclxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9e1wibWItNVwifT5cclxuICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPlNob3dpbmcgcmVzdWx0cyBmb3Ige2Jhc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImZsb2F0LXJpZ2h0XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgc2VsZWN0ZWQ9e25ldyBEYXRlKGRhdGUpfSBjdXN0b21JbnB1dD17PEN1c3RvbURhdGVQaWNrZXJJbnB1dCAvPn0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e2RhdGUgPT4gaGFuZGxlRGF0ZUNoYW5nZShkYXRlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgaGFuZGxlQ2hhbmdlPXtoYW5kbGVCYXNlQ2hhbmdlfSBiYXNlPXtiYXNlfSBvcHRpb25zPXtPYmplY3Qua2V5cyhyYXRlcyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImJnLWxpZ2h0IHAtNFwiIHN0eWxlPXt7IG1hcmdpbjogXCIwIDBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPENvbCBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdCBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNvbXBhcmVCYXNlQ2hhbmdlfSBiYXNlPXtjb21wYXJlQmFzZX0gb3B0aW9ucz17T2JqZWN0LmtleXMocmF0ZXMpfSBjb21wYXJlIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5BcHBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmFzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLkFwcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17YmFzZVZhbHVlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBuYW1lPVwiYmFzZVZhbHVlXCIgY2xhc3NOYW1lPXtcImZvcm0tY29udHJvbFwifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLkFwcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29tcGFyZUJhc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuQXBwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2NvbXBhcmVCYXNlVmFsdWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IG5hbWU9XCJjb21wYXJlQmFzZVZhbHVlXCIgY2xhc3NOYW1lPXtcImZvcm0tY29udHJvbFwifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYXRlc1RhYmxlIHJhdGVzPXtyYXRlc30gLz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgICBjb25zdCB7ZGF0ZSwgYmFzZX0gPSBjb250ZXh0LnBhcmFtcztcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkuZXhjaGFuZ2VyYXRlc2FwaS5pby8ke2RhdGV9P2Jhc2U9JHtiYXNlfWApXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzdWx0LmRhdGE7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7ZGF0YX0sXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQmFzZTsiXSwic291cmNlUm9vdCI6IiJ9