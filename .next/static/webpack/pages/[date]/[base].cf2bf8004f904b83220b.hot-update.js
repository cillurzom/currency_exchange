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
  }))), __jsx(Select, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9ybS9TZWxlY3QuanMiXSwibmFtZXMiOlsiU2VsZWN0Iiwib3B0aW9ucyIsImJhc2UiLCJoYW5kbGVDaGFuZ2UiLCJjb21wYXJlIiwiZ2VuZXJhdGVPcHRpb25zIiwibWFwIiwib3B0aW9uIiwia2V5IiwiaGVscFRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUNDLFNBQUQ7QUFBVUMsTUFBVjtBQUFnQkMsY0FBaEI7QUFBOEJDO0FBQTlCLENBQUQsS0FBNEM7QUFDdkQsUUFBTUMsZUFBZSxHQUFHSixPQUFPLENBQUNLLEdBQVIsQ0FBWSxDQUFDQyxNQUFELEVBQVNDLEdBQVQsS0FBaUI7QUFBUSxPQUFHLEVBQUVBLEdBQWI7QUFBa0IsU0FBSyxFQUFFRCxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtDQSxNQUFsQyxDQUE3QixDQUF4QjtBQUNBLE1BQUlFLFFBQUo7O0FBQ0EsTUFBR0wsT0FBSCxFQUFZO0FBQ1JLLFlBQVEsR0FBRyxNQUFDLDREQUFELENBQU0sSUFBTjtBQUFXLFdBQUssTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnREFBWDtBQUdIOztBQUNELFNBQ0ksTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxrRUFBRCxDQUFZLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsa0VBQUQsQ0FBWSxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUI7QUFBRyxhQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQWpCLENBREosQ0FESixFQUlJLE1BQUMsTUFBRDtBQUFRLFFBQUksRUFBQyxNQUFiO0FBQW9CLFNBQUssRUFBRVAsSUFBM0I7QUFBaUMsYUFBUyxFQUFDLGNBQTNDO0FBQTBELFlBQVEsRUFBRUMsWUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLRSxlQURMLENBSkosRUFPS0ksUUFQTCxDQURKLENBREo7QUFhSCxDQXJCRDs7S0FBTVQsTTtBQXdCU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2RhdGVdL1tiYXNlXS5jZjJiZjgwMDRmOTA0YjgzMjIwYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBJbnB1dEdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvSW5wdXRHcm91cFwiO1xyXG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybUdyb3VwXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5cclxuY29uc3QgU2VsZWN0ID0gKHtvcHRpb25zLCBiYXNlLCBoYW5kbGVDaGFuZ2UsIGNvbXBhcmV9KSA9PiB7XHJcbiAgICBjb25zdCBnZW5lcmF0ZU9wdGlvbnMgPSBvcHRpb25zLm1hcCgob3B0aW9uLCBrZXkpID0+IDxvcHRpb24ga2V5PXtrZXl9IHZhbHVlPXtvcHRpb259PntvcHRpb259PC9vcHRpb24+KTtcclxuICAgIGxldCBoZWxwVGV4dDtcclxuICAgIGlmKGNvbXBhcmUpIHtcclxuICAgICAgICBoZWxwVGV4dCA9IDxGb3JtLlRleHQgbXV0ZWQ+XHJcbiAgICAgICAgICAgIENvbXBhcmUgcmF0ZXMgYWdhaW5zdCBhbm90aGVyIGN1cnJlbmN5XHJcbiAgICAgICAgPC9Gb3JtLlRleHQ+XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5UZXh0PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1jb2luc1wiPjwvaT48L0lucHV0R3JvdXAuVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdCBuYW1lPVwiYmFzZVwiIHZhbHVlPXtiYXNlfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICB7Z2VuZXJhdGVPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICB7aGVscFRleHR9XHJcbiAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDsiXSwic291cmNlUm9vdCI6IiJ9