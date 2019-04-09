module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/Error_View.js":
/*!*********************************!*\
  !*** ./component/Error_View.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Error404 = function Error404() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "center-align"
  }, "404 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      color: 'red'
    }
  }, "|"), " Not Found"));
};

var Error_View = function Error_View(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, !props.statusCode ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "center-align"
  }, "Umm...an error occurred on the client-side.") : props.statusCode === 404 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Error404, null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "center-align"
  }, "Whoops...an error ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, props.statusCode), " occurred on the server."));
};

/* harmony default export */ __webpack_exports__["default"] = (Error_View);

/***/ }),

/***/ "./component/Layout.js":
/*!*****************************!*\
  !*** ./component/Layout.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./component/Navbar.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scss_utilities_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/utilities.scss */ "./scss/utilities.scss");
/* harmony import */ var _scss_utilities_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scss_utilities_scss__WEBPACK_IMPORTED_MODULE_4__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, _getPrototypeOf(Layout).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems, {});
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        rel: "stylesheet"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "shortcut icon",
        href: "../static/favicon.ico",
        type: "image/x-icon"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Poll App")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
        searchQuery: this.props.searchQuery
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./component/Navbar.js":
/*!*****************************!*\
  !*** ./component/Navbar.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Navbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Navbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      searchQuery: _this.props.searchQuery ? _this.props.searchQuery : ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSearch", function (id) {
      var title = document.getElementById(id).value;
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push({
        pathname: '/search',
        query: {
          title: title
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSearchEnter", function (e, id) {
      if (e.keyCode === 13) {
        if (id === 'search-small') {
          var instance = M.Sidenav.getInstance(document.querySelector('.sidenav'));

          if (instance) {
            instance.close();
          }
        }

        ;

        _this.handleSearch(id);
      }
    });

    return _this;
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav-wrapper deep-purple"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "brand-logo"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons",
        style: {
          fontSize: "3.5rem"
        }
      }, "poll"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hide-on-small-and-down"
      }, "Poll App"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        "data-target": "mobile-sidenav",
        className: "sidenav-trigger"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons"
      }, "menu")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "right hide-on-med-and-down mr-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/new"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn yellow black-text waves-effect waves-light"
      }, "Create New Poll"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/about"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "About"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "ml-2 mr-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "search-med",
        type: "search",
        placeholder: "Search",
        className: "white-text",
        onKeyDown: function onKeyDown(e) {
          return _this2.handleSearchEnter(e, 'search-med');
        },
        value: this.state.searchQuery,
        onChange: function onChange(e) {
          return _this2.setState({
            searchQuery: e.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn yellow black-text ml-1 waves-effect waves-light",
        onClick: function onClick() {
          return _this2.handleSearch('search-med');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons center"
      }, "search")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "sidenav",
        id: "mobile-sidenav"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "mx-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s10 px-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "search",
        id: "search-small",
        placeholder: "Search",
        onKeyDown: function onKeyDown(e) {
          return _this2.handleSearchEnter(e, 'search-small');
        },
        value: this.state.searchQuery,
        onChange: function onChange(e) {
          return _this2.setState({
            searchQuery: e.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s2 px-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn yellow black-text ml-1 sidenav-close",
        onClick: function onClick() {
          return _this2.handleSearch('search-small');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons center"
      }, "search"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/new"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "sidenav-close"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons left ml-0 mr-1"
      }, "add"), " Create New Poll"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/about"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "sidenav-close"
      }, "About")))));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./component/Poll_View.js":
/*!********************************!*\
  !*** ./component/Poll_View.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility */ "./utility.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var chart;

var Poll_View =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Poll_View, _React$Component);

  function Poll_View() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Poll_View);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Poll_View)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      totalVote: _this.props.poll.options.map(function (elem) {
        return elem.vote;
      }).reduce(function (acc, curr) {
        return acc + curr;
      }),
      votes: _this.props.poll.options.map(function (elem) {
        return elem.vote;
      }),
      lastVotedOn: _this.props.poll.lastVotedOn
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderChart", function (votes) {
      var ctx = document.getElementById("chart").getContext('2d');
      chart = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(ctx, {
        type: 'doughnut',
        data: {
          labels: _this.props.poll.options.map(function (elem) {
            return elem.name;
          }),
          datasets: [{
            label: '# of Votes',
            data: votes,
            backgroundColor: Object(_utility__WEBPACK_IMPORTED_MODULE_3__["genColorHexes"])(_this.props.poll.options.length),
            borderColor: 'rgba(100,100,100,0.5)',
            borderWidth: 1
          }]
        },
        options: {
          legend: {
            display: false
          },
          responsive: true,
          maintainAspectRatio: false,
          cutoutPercentage: 35
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmitVote", function (e) {
      e.preventDefault();
      document.getElementById('btn-vote').disabled = true;

      function errorHandler(message) {
        document.getElementById('btn-vote').disabled = false;
        M.toast({
          html: message,
          classes: 'red white-text',
          durationLength: 5000
        });
      }

      var voteIndex;
      var votedOption;

      _toConsumableArray(document.querySelectorAll('[name="input-vote"]')).some(function (vote, index) {
        if (vote.checked) {
          voteIndex = index;
          votedOption = vote.nextElementSibling.textContent;
          return true;
        }
      });

      if (voteIndex === undefined) {
        return errorHandler('You must select an option to vote!');
      }

      ;
      M.toast({
        html: "Congratulations, you've voted for ".concat(votedOption ? '"' + votedOption + '"' : "something"),
        classes: 'green white-text'
      });
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("/api/polls/".concat(_this.props.poll.id), {
        method: 'PUT',
        body: JSON.stringify({
          voteIndex: voteIndex
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        if (res.status === 200) {
          var votes = _toConsumableArray(_this.state.votes);

          votes[voteIndex]++;

          _this.setState({
            totalVote: _this.state.totalVote + 1,
            votes: votes,
            lastVotedOn: new Date()
          });

          if (chart) {
            chart.destroy();
          }

          _this.renderChart(votes);
        } else {
          return errorHandler('500: Internal Server Error');
        }
      }).catch(function (err) {
        return console.error(err);
      });
    });

    return _this;
  }

  _createClass(Poll_View, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.totalVote) {
        this.renderChart(this.state.votes);
      }

      M.Tooltip.init(document.querySelectorAll('.tooltipped'), {});
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var chartContainer;
      var firstVoteMessage;
      var lastVotedOn;

      if (this.state.totalVote) {
        chartContainer = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col s12",
          style: {
            position: "relative",
            height: "50vh"
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", {
          id: "chart"
        }));
        lastVotedOn = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Last voted on :", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "tooltipped",
          "data-position": "top",
          "data-tooltip": Object(_utility__WEBPACK_IMPORTED_MODULE_3__["dateTooltipString"])(this.state.lastVotedOn)
        }, " ", Object(_utility__WEBPACK_IMPORTED_MODULE_3__["relativeDate"])(this.state.lastVotedOn)));
      } else {
        firstVoteMessage = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
          className: "center mb-3"
        }, "Be the first to vote on this poll!!");
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card grey lighten-5 z-depth-3 black-text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "card-title center"
      }, this.props.poll.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row my-0"
      }, chartContainer, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "collection"
      }, this.props.poll.options.map(function (option, index) {
        var pct = Object(_utility__WEBPACK_IMPORTED_MODULE_3__["pctString"])(_this2.state.votes[index], _this2.state.totalVote);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "collection-item grey lighten-3",
          key: index
        }, !_this2.state.totalVote ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row my-0"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col s9"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "radio",
          name: "input-vote",
          className: "with-gap"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "black-text"
        }, option.name)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col s3  right-align"
        }, pct)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row my-0"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col s12 l10"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "radio",
          name: "input-vote",
          className: "with-gap"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "black-text"
        }, option.name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "progress white"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "determinate \n                                                        ".concat(_utility__WEBPACK_IMPORTED_MODULE_3__["colorClasses"][index % _utility__WEBPACK_IMPORTED_MODULE_3__["colorClasses"].length]),
          style: {
            width: pct.replace(/<|>/, "")
          }
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col s12 l2"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, pct), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, Object(_utility__WEBPACK_IMPORTED_MODULE_3__["voteString"])(_this2.state.votes[index])))));
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "right-align mr-5"
      }, "Total Votes : ", this.state.totalVote), firstVoteMessage, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "center mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn-large waves-effect waves-light yellow accent-4 black-text",
        id: "btn-vote",
        onClick: function onClick(e) {
          return _this2.handleSubmitVote(e);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons left mr-2"
      }, "arrow_upward"), "Vote")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Created on :", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "tooltipped",
        "data-position": "top",
        "data-tooltip": Object(_utility__WEBPACK_IMPORTED_MODULE_3__["dateTooltipString"])(this.props.poll.createdOn)
      }, " ", Object(_utility__WEBPACK_IMPORTED_MODULE_3__["relativeDate"])(this.props.poll.createdOn))), lastVotedOn));
    }
  }]);

  return Poll_View;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Poll_View);

/***/ }),

/***/ "./pages/poll.js":
/*!***********************!*\
  !*** ./pages/poll.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_Poll_View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/Poll_View */ "./component/Poll_View.js");
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/Layout */ "./component/Layout.js");
/* harmony import */ var _component_Error_View__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/Error_View */ "./component/Error_View.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utility */ "./utility.js");



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var chart;

var Poll = function Poll(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, props.poll ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_Poll_View__WEBPACK_IMPORTED_MODULE_3__["default"], {
    poll: props.poll
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_Error_View__WEBPACK_IMPORTED_MODULE_5__["default"], {
    statusCode: props.statusCode
  }));
};

Poll.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var id, res, data, statusCode;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = _ref.query.id;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()("".concat(_utility__WEBPACK_IMPORTED_MODULE_6__["urlConfig"].protocol, "://").concat(_utility__WEBPACK_IMPORTED_MODULE_6__["urlConfig"].host, "/api/polls/").concat(id));

          case 3:
            res = _context.sent;

            if (!(res.status === 200)) {
              _context.next = 11;
              break;
            }

            _context.next = 7;
            return res.json();

          case 7:
            data = _context.sent;

            if (!data) {
              _context.next = 11;
              break;
            }

            data.id = id;
            return _context.abrupt("return", {
              poll: data
            });

          case 11:
            statusCode = res ? res.status !== 200 ? res.status : 404 : null;
            return _context.abrupt("return", {
              statusCode: statusCode
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Poll);

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./scss/utilities.scss":
/*!*****************************!*\
  !*** ./scss/utilities.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./utility.js":
/*!********************!*\
  !*** ./utility.js ***!
  \********************/
/*! exports provided: randomId, pctString, voteString, colorClasses, genColorHexes, relativeDate, isEmptyArray, urlConfig, dateTooltipString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomId", function() { return randomId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pctString", function() { return pctString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "voteString", function() { return voteString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorClasses", function() { return colorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genColorHexes", function() { return genColorHexes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relativeDate", function() { return relativeDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyArray", function() { return isEmptyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlConfig", function() { return urlConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateTooltipString", function() { return dateTooltipString; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function randomId() {
  return Math.random().toString(36).substr(2, 9);
}

;

function pctString(vote, totalVote) {
  if (totalVote === 0) {
    return 'No votes yet';
  } else if (vote === 0) {
    return '0%';
  } else if (vote === totalVote) {
    return '100%';
  } else {
    var pct = Math.round(vote / totalVote * 100);
    return !pct ? '<1%' : pct === 100 ? '>99%' : "".concat(pct, "%");
  }
}

;

function voteString(vote) {
  if (vote === 0) {
    return "0 votes";
  } else if (vote === 1) {
    return "1 vote";
  } else {
    return "".concat(vote, " votes");
  }
}

var colorClasses = ['red accent-3', 'blue accent-1', 'green accent-3', 'yellow accent-3', 'orange accent-4', 'purple accent-2', 'cyan accent-3', 'teal accent-3', 'lime accent-3', 'pink accent-2'];

function genColorHexes(length) {
  var colorHexes = ['#ff1744', '#82b1ff', '#00e676', '#ffea00', '#ff6d00', '#e040fb', '#00e5ff', '#1de9b6', '#c6ff00', '#ff4081'];

  if (length <= colorClasses.length) {
    return colorHexes.slice(0, length);
  } else {
    var multiple = Math.floor(length / colorClasses.length);
    var remainder = length % colorClasses.length;

    if (multiple > 1) {
      for (var i = 1; i < multiple; i++) {
        colorHexes.push.apply(colorHexes, colorHexes);
      }
    }

    if (remainder > 0) {
      colorHexes.push.apply(colorHexes, _toConsumableArray(colorHexes.slice(0, remainder)));
      return colorHexes;
    }
  }
}

function relativeDate(isoDateString) {
  var dateTime = __webpack_require__(/*! datetime-difference */ "datetime-difference");

  var d = dateTime(new Date(isoDateString), new Date());

  for (var i = 0; i < 5; i++) {
    var value = d[Object.keys(d)[i]];

    if (!value) {
      continue;
    } else {
      return "".concat(value, " ").concat(value === 1 ? Object.keys(d)[i].slice(0, -1) : Object.keys(d)[i], " ago");
    }
  }

  return "Just now";
}

function isEmptyArray(array) {
  return !Array.isArray(array) || array.length === 0;
}

function dateTooltipString(isoDateString) {
  var d = new Date(isoDateString);
  var m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var h = !d.getHours() ? '12' : d.getHours() % 12;
  return "".concat(d.getDate(), " ").concat(m[d.getMonth()], " ").concat(d.getFullYear(), " @ ").concat(h, ":").concat(d.getMinutes() ? d.getMinutes() : '00').concat(d.getHours() / 12 >= 1 ? 'PM' : 'AM');
}

var urlConfig =  true ? {
  protocol: 'http',
  host: 'localhost:3000'
} : undefined;


/***/ }),

/***/ 5:
/*!*****************************!*\
  !*** multi ./pages/poll.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/poll.js */"./pages/poll.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "chart.js":
/*!***************************!*\
  !*** external "chart.js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("chart.js");

/***/ }),

/***/ "datetime-difference":
/*!**************************************!*\
  !*** external "datetime-difference" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("datetime-difference");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=poll.js.map