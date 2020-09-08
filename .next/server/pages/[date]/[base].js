module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/kYR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./src/components/Loading.js
var Loading = __webpack_require__("QLAq");

// EXTERNAL MODULE: external "react-bootstrap/Alert"
var Alert_ = __webpack_require__("s5eF");
var Alert_default = /*#__PURE__*/__webpack_require__.n(Alert_);

// CONCATENATED MODULE: ./src/components/Error.js
var __jsx = external_react_default.a.createElement;



const Error = ({
  errorMsg
}) => __jsx(Alert_default.a, {
  variant: "danger"
}, __jsx("i", {
  className: "fas fa-exclamation-triangle text-danger"
}), " ", errorMsg);

/* harmony default export */ var components_Error = (Error);
// EXTERNAL MODULE: external "react-bootstrap/Table"
var Table_ = __webpack_require__("/rQ7");
var Table_default = /*#__PURE__*/__webpack_require__.n(Table_);

// CONCATENATED MODULE: ./src/components/RatesTable.js
var RatesTable_jsx = external_react_default.a.createElement;



const RatesTable = ({
  rates
}) => {
  const keys = Object.keys(rates);
  const data = keys.map((key, i) => {
    return RatesTable_jsx("tr", {
      key: key
    }, RatesTable_jsx("td", null, key), RatesTable_jsx("td", null, rates[key]));
  });
  return RatesTable_jsx(Table_default.a, {
    className: "table-dark table-striped"
  }, RatesTable_jsx("thead", null, RatesTable_jsx("tr", null, RatesTable_jsx("td", null, RatesTable_jsx("strong", null, "Currency")), RatesTable_jsx("td", null, RatesTable_jsx("strong", null, "Rate")))), RatesTable_jsx("tbody", null, data));
};

/* harmony default export */ var components_RatesTable = (RatesTable);
// EXTERNAL MODULE: external "react-bootstrap/InputGroup"
var InputGroup_ = __webpack_require__("zUlE");
var InputGroup_default = /*#__PURE__*/__webpack_require__.n(InputGroup_);

// EXTERNAL MODULE: external "react-bootstrap/FormGroup"
var FormGroup_ = __webpack_require__("TW5m");
var FormGroup_default = /*#__PURE__*/__webpack_require__.n(FormGroup_);

// EXTERNAL MODULE: external "react-bootstrap/Form"
var Form_ = __webpack_require__("2S/i");
var Form_default = /*#__PURE__*/__webpack_require__.n(Form_);

// CONCATENATED MODULE: ./src/components/form/Select.js
var Select_jsx = external_react_default.a.createElement;





const Select = ({
  options,
  base,
  handleChange,
  compare
}) => {
  const generateOptions = options.map((option, key) => Select_jsx("option", {
    key: key,
    value: option
  }, option));
  let helpText;

  if (compare) {
    helpText = Select_jsx(Form_default.a.Text, {
      muted: true
    }, "Compare rates against another currency");
  }

  return Select_jsx(FormGroup_default.a, null, Select_jsx(InputGroup_default.a, null, Select_jsx(InputGroup_default.a.Prepend, null, Select_jsx(InputGroup_default.a.Text, null, Select_jsx("i", {
    className: "fas fa-coins"
  }))), Select_jsx("select", {
    name: "base",
    value: base,
    className: "form-control",
    onChange: handleChange
  }, generateOptions)), helpText);
};

/* harmony default export */ var form_Select = (Select);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// EXTERNAL MODULE: external "react-datepicker"
var external_react_datepicker_ = __webpack_require__("ZTWx");
var external_react_datepicker_default = /*#__PURE__*/__webpack_require__.n(external_react_datepicker_);

// CONCATENATED MODULE: ./src/pages/[date]/[base].js
var _base_jsx = external_react_default.a.createElement;












const getDateString = date => {
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  return y + "-" + m + "-" + d;
};

const Base = props => {
  const {
    0: compareBase,
    1: setCompareBase
  } = Object(external_react_["useState"])("EUR");
  const {
    0: baseValue,
    1: setBaseValue
  } = Object(external_react_["useState"])(1);
  const {
    0: compareBaseValue,
    1: setCompareBaseValue
  } = Object(external_react_["useState"])(0);
  const {
    0: compareBaseRate,
    1: setCompareBaseRate
  } = Object(external_react_["useState"])(2);
  const {
    base,
    date,
    rates
  } = props.data;
  Object(external_react_["useEffect"])(() => {
    setCompareBaseValue(rates[compareBase]);
    setCompareBaseRate(rates[compareBase]);
    setBaseValue(1);
  }, [rates]);
  const router = Object(router_["useRouter"])();

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
  }) => _base_jsx("button", {
    className: "btn btn-primary",
    onClick: onClick
  }, _base_jsx("i", {
    className: "fas fa-calendar"
  }), " ", value, console.log(value));

  return _base_jsx(external_react_bootstrap_["Container"], {
    className: "bg-dark text-light p-5",
    style: {
      borderTopRightRadius: "50px",
      borderBottomLeftRadius: "50px"
    }
  }, _base_jsx(external_react_bootstrap_["Row"], {
    className: "mb-5"
  }, _base_jsx(external_react_bootstrap_["Col"], null, _base_jsx("h1", null, "Showing results for ", base, _base_jsx("div", {
    className: "float-right"
  }, _base_jsx(external_react_datepicker_default.a, {
    selected: new Date(date),
    customInput: _base_jsx(CustomDatePickerInput, null),
    className: "form-control",
    onChange: date => handleDateChange(date)
  }), _base_jsx(form_Select, {
    handleChange: handleBaseChange,
    base: base,
    options: Object.keys(rates)
  }))))), _base_jsx(external_react_bootstrap_["Row"], {
    className: "bg-light p-4",
    style: {
      margin: "0 0px"
    }
  }, _base_jsx(external_react_bootstrap_["Col"], {
    md: "12"
  }, _base_jsx(form_Select, {
    handleChange: handleCompareBaseChange,
    base: compareBase,
    options: Object.keys(rates),
    compare: true
  })), _base_jsx(external_react_bootstrap_["Col"], {
    md: "6"
  }, _base_jsx(FormGroup_default.a, null, _base_jsx(InputGroup_default.a, null, _base_jsx(InputGroup_default.a.Append, null, _base_jsx(InputGroup_default.a.Text, null, base)), _base_jsx("input", {
    type: "text",
    value: baseValue,
    onChange: handleChange,
    name: "baseValue",
    className: "form-control"
  })))), _base_jsx(external_react_bootstrap_["Col"], {
    md: "6"
  }, _base_jsx(FormGroup_default.a, null, _base_jsx(InputGroup_default.a, null, _base_jsx(InputGroup_default.a.Append, null, _base_jsx(InputGroup_default.a.Text, null, compareBase)), _base_jsx("input", {
    type: "text",
    value: compareBaseValue,
    onChange: handleChange,
    name: "compareBaseValue",
    className: "form-control"
  }))))), _base_jsx(external_react_bootstrap_["Row"], null, _base_jsx(external_react_bootstrap_["Col"], null, _base_jsx(components_RatesTable, {
    rates: rates
  }))));
};

async function getServerSideProps(context) {
  const {
    date,
    base
  } = context.params;
  const result = await external_axios_default.a.get(`https://api.exchangeratesapi.io/${date}?base=${base}`);
  const data = await result.data;
  return {
    props: {
      data
    }
  };
}
/* harmony default export */ var _base_ = __webpack_exports__["default"] = (Base);

/***/ }),

/***/ "/rQ7":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Table");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/kYR");


/***/ }),

/***/ "2S/i":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "QLAq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Loading = () => __jsx("div", null, __jsx("i", {
  className: "fas fa-spinner fa-spin fa-2x"
}));

/* harmony default export */ __webpack_exports__["a"] = (Loading);

/***/ }),

/***/ "TW5m":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/FormGroup");

/***/ }),

/***/ "ZTWx":
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "s5eF":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Alert");

/***/ }),

/***/ "zUlE":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/InputGroup");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });