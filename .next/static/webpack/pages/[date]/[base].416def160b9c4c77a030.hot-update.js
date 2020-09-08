webpackHotUpdate_N_E("pages/[date]/[base]",{

/***/ "./src/components/form/Select.js":
/*!***************************************!*\
  !*** ./src/components/form/Select.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/InputGroup */ "./node_modules/react-bootstrap/esm/InputGroup.js");
/* harmony import */ var react_bootstrap_FormGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/FormGroup */ "./node_modules/react-bootstrap/esm/FormGroup.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
var _jsxFileName = "C:\\Users\\cilur\\Documents\\webzo\\currency-exchange-contest\\src\\components\\form\\Select.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Select = ({
  options,
  base,
  handleChange,
  compare
}) => {
  const generateOptions = options.map((option, key) => __jsx("option", {
    key: key,
    value: option,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 58
    }
  }, option));
  let helpText;

  if (compare) {
    helpText = __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__["default"].Text, {
      muted: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 20
      }
    }, "Compare rates against another currency");
  }

  return __jsx(react_bootstrap_FormGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_1__["default"].Prepend, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_1__["default"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fas fa-coins",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 38
    }
  }))), __jsx("select", {
    name: "base",
    value: base,
    className: "form-control",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, generateOptions), helpText));
};

_c = Select;
/* harmony default export */ __webpack_exports__["default"] = (Select);

var _c;

$RefreshReg$(_c, "Select");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9ybS9TZWxlY3QuanMiXSwibmFtZXMiOlsiU2VsZWN0Iiwib3B0aW9ucyIsImJhc2UiLCJoYW5kbGVDaGFuZ2UiLCJjb21wYXJlIiwiZ2VuZXJhdGVPcHRpb25zIiwibWFwIiwib3B0aW9uIiwia2V5IiwiaGVscFRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUNDLFNBQUQ7QUFBVUMsTUFBVjtBQUFnQkMsY0FBaEI7QUFBOEJDO0FBQTlCLENBQUQsS0FBNEM7QUFDdkQsUUFBTUMsZUFBZSxHQUFHSixPQUFPLENBQUNLLEdBQVIsQ0FBWSxDQUFDQyxNQUFELEVBQVNDLEdBQVQsS0FBaUI7QUFBUSxPQUFHLEVBQUVBLEdBQWI7QUFBa0IsU0FBSyxFQUFFRCxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtDQSxNQUFsQyxDQUE3QixDQUF4QjtBQUNBLE1BQUlFLFFBQUo7O0FBQ0EsTUFBR0wsT0FBSCxFQUFZO0FBQ1JLLFlBQVEsR0FBRyxNQUFDLDREQUFELENBQU0sSUFBTjtBQUFXLFdBQUssTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnREFBWDtBQUdIOztBQUNELFNBQ0ksTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxrRUFBRCxDQUFZLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsa0VBQUQsQ0FBWSxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUI7QUFBRyxhQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQWpCLENBREosQ0FESixFQUlJO0FBQVEsUUFBSSxFQUFDLE1BQWI7QUFBb0IsU0FBSyxFQUFFUCxJQUEzQjtBQUFpQyxhQUFTLEVBQUMsY0FBM0M7QUFBMEQsWUFBUSxFQUFFQyxZQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tFLGVBREwsQ0FKSixFQU9LSSxRQVBMLENBREosQ0FESjtBQWFILENBckJEOztLQUFNVCxNO0FBd0JTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bZGF0ZV0vW2Jhc2VdLjQxNmRlZjE2MGI5YzRjNzdhMDMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9JbnB1dEdyb3VwXCI7XHJcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtR3JvdXBcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCI7XHJcblxyXG5jb25zdCBTZWxlY3QgPSAoe29wdGlvbnMsIGJhc2UsIGhhbmRsZUNoYW5nZSwgY29tcGFyZX0pID0+IHtcclxuICAgIGNvbnN0IGdlbmVyYXRlT3B0aW9ucyA9IG9wdGlvbnMubWFwKChvcHRpb24sIGtleSkgPT4gPG9wdGlvbiBrZXk9e2tleX0gdmFsdWU9e29wdGlvbn0+e29wdGlvbn08L29wdGlvbj4pO1xyXG4gICAgbGV0IGhlbHBUZXh0O1xyXG4gICAgaWYoY29tcGFyZSkge1xyXG4gICAgICAgIGhlbHBUZXh0ID0gPEZvcm0uVGV4dCBtdXRlZD5cclxuICAgICAgICAgICAgQ29tcGFyZSByYXRlcyBhZ2FpbnN0IGFub3RoZXIgY3VycmVuY3lcclxuICAgICAgICA8L0Zvcm0uVGV4dD5cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlRleHQ+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNvaW5zXCI+PC9pPjwvSW5wdXRHcm91cC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJiYXNlXCIgdmFsdWU9e2Jhc2V9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtnZW5lcmF0ZU9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIHtoZWxwVGV4dH1cclxuICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0OyJdLCJzb3VyY2VSb290IjoiIn0=