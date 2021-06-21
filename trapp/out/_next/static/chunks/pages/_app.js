(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const AmpStateContext = /*#__PURE__*/_react.default.createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
}

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _s = $RefreshSig$();

exports.__esModule = true;
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function isInAmpMode({
  ampFirst = false,
  hybrid = false,
  hasQuery = false
} = {}) {
  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react.default.useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.defaultHead = defaultHead;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function defaultHead(inAmpMode = false) {
  const head = [/*#__PURE__*/_react.default.createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react.default.Fragment) {
    return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild) => {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

const METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
returns a function for filtering head child elements
which shouldn't be duplicated, like <title/>
Also adds support for deduplicated `key` properties
*/

function unique() {
  const keys = new Set();
  const tags = new Set();
  const metaTypes = new Set();
  const metaCategories = {};
  return h => {
    let isUnique = true;
    let hasKey = false;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      hasKey = true;
      const key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (let i = 0, len = METATYPES.length; i < len; i++) {
          const metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            const category = h.props[metatype];
            const categories = metaCategories[metatype] || new Set();

            if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
*
* @param headElements List of multiple <Head> instances
*/


function reduceComponents(headElements, props) {
  return headElements.reduce((list, headElement) => {
    const headElementChildren = _react.default.Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map((c, i) => {
    const key = c.key || i;

    if (false) {}

    return /*#__PURE__*/_react.default.cloneElement(c, {
      key
    });
  });
}
/**
* This component injects elements to `<head>` of your page.
* To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
*/


function Head({
  children
}) {
  const ampState = (0, _react.useContext)(_ampContext.AmpStateContext);
  const headManager = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  return /*#__PURE__*/_react.default.createElement(_sideEffect.default, {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _amp.isInAmpMode)(ampState)
  }, children);
} // TODO: Remove in the next major release


_c = Head;

Head.rewind = () => {};

var _default = Head;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Head");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const isServer = false;

class _default extends _react.Component {
  constructor(props) {
    super(props);
    this._hasHeadManager = void 0;

    this.emitChange = () => {
      if (this._hasHeadManager) {
        this.props.headManager.updateHead(this.props.reduceComponentsToState([...this.props.headManager.mountedInstances], this.props));
      }
    };

    this._hasHeadManager = this.props.headManager && this.props.headManager.mountedInstances;

    if (isServer && this._hasHeadManager) {
      this.props.headManager.mountedInstances.add(this);
      this.emitChange();
    }
  }

  componentDidMount() {
    if (this._hasHeadManager) {
      this.props.headManager.mountedInstances.add(this);
    }

    this.emitChange();
  }

  componentDidUpdate() {
    this.emitChange();
  }

  componentWillUnmount() {
    if (this._hasHeadManager) {
      this.props.headManager.mountedInstances.delete(this);
    }

    this.emitChange();
  }

  render() {
    return null;
  }

}

exports.default = _default;

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_MyCode_TR_trcode_trapp_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wi_wordinfo_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wi/wordinfo.css */ "./pages/wi/wordinfo.css");
/* harmony import */ var _wi_wordinfo_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wi_wordinfo_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wm_mastermind_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wm/mastermind.css */ "./pages/wm/mastermind.css");
/* harmony import */ var _wm_mastermind_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wm_mastermind_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pb_prisonbreak_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pb/prisonbreak.css */ "./pages/pb/prisonbreak.css");
/* harmony import */ var _pb_prisonbreak_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pb_prisonbreak_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_MyCode_TR_trcode_trapp_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        /* I added material icons */
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        /* I added GoogleFonts using Font Pairings mentioned as popular on W3CSchools */
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Open Sans|Merriweather"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        /* I added w3.css */
        rel: "stylesheet",
        href: "https://www.w3schools.com/w3css/4/w3.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! ***!
  \**********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js");
      }
    ]);
  

/***/ }),

/***/ "./pages/pb/prisonbreak.css":
/*!**********************************!*\
  !*** ./pages/pb/prisonbreak.css ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./prisonbreak.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/pb/prisonbreak.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./prisonbreak.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/pb/prisonbreak.css",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./prisonbreak.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/pb/prisonbreak.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./pages/wi/wordinfo.css":
/*!*******************************!*\
  !*** ./pages/wi/wordinfo.css ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./wordinfo.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/wi/wordinfo.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./wordinfo.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/wi/wordinfo.css",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./wordinfo.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/wi/wordinfo.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./pages/wm/mastermind.css":
/*!*********************************!*\
  !*** ./pages/wm/mastermind.css ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./mastermind.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/wm/mastermind.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./mastermind.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/wm/mastermind.css",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./mastermind.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/wm/mastermind.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./globals.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/globals.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./globals.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/globals.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./globals.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/globals.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=id+' '+count.toString();idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:0;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(function(key){style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?'@media '+obj.media+' {'+obj.css+'}':obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+' */';}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=function(){removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=function(list,options){options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/pb/prisonbreak.css":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/pb/prisonbreak.css ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/getUrl.js */ "./node_modules/next/dist/compiled/css-loader/getUrl.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_Wall_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/Wall.jpg */ "./public/Wall.jpg");
/* harmony import */ var _public_playertitle_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/playertitle.png */ "./public/playertitle.png");
/* harmony import */ var _public_tile_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/tile.png */ "./public/tile.png");
/* harmony import */ var _public_BarbedWireRotated_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/BarbedWireRotated.png */ "./public/BarbedWireRotated.png");
/* harmony import */ var _public_BarbedWire_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/BarbedWire.png */ "./public/BarbedWire.png");
/* harmony import */ var _public_prisonbars_square_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/prisonbars-square.png */ "./public/prisonbars-square.png");
// Imports








var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Wall_jpg__WEBPACK_IMPORTED_MODULE_2__.default);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_playertitle_png__WEBPACK_IMPORTED_MODULE_3__.default);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_tile_png__WEBPACK_IMPORTED_MODULE_4__.default);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_BarbedWireRotated_png__WEBPACK_IMPORTED_MODULE_5__.default);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_BarbedWire_png__WEBPACK_IMPORTED_MODULE_6__.default);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_prisonbars_square_png__WEBPACK_IMPORTED_MODULE_7__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --squareSide: 40px;\r\n    --cellBlockSide: 40px;\r\n    --cellBlockSelectedHeight: 42px;\r\n    --selectedColor: hsl(207, 90%, 56%);\r\n    --lobbyFontSize: 20px;\r\n    --tileBackgroundColour: orangered;\r\n    --prisonersTileColour: whitesmoke;\r\n    --guardsTileColour: black;\r\n}\r\n.topBarHeight {\r\n    height: 60px;\r\n}\r\n.topBarCorner {\r\n    width: 20%;\r\n    height: 50%;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n.fullWidth {\r\n    width: 100%;\r\n}\r\n.formalinfo {\r\n    font-family: var(--commonFontFamily);\r\n    letter-spacing: 1px;\r\n}\r\n.prisonbreak {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size: cover;\r\n}\r\n.pbGameid {\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color: var(--commonTextColour);\r\n    border-color: var(--commonBorderColour);\r\n    border-width: 0 0 3px 3px;\r\n    border-style: solid;\r\n}\r\n.pbtitle {\r\n    background-color: grey;\r\n    font-size: 2.8em;\r\n    text-align: center;\r\n    font-family: Merriweather;\r\n    /* font-style: italic; */\r\n    color:black;\r\n}\r\n.pbhomelink {\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color: var(--commonTextColour);\r\n    text-align: right;\r\n    border-color: var(--commonBorderColour);\r\n    border-width: 0 3px 3px 0;\r\n    border-style: solid;\r\n}\r\n.pbPlayerOuterSection {\r\n    /* border-left: 2px solid black;\r\n    border-right: 2px solid black;\r\n    border-top: 2px solid black; */\r\n    /* width: 360px; */\r\n    padding-top: 3px;\r\n    /* background-image: url(\"../../public/Wall.jpg\");\r\n    background-repeat: repeat;\r\n    background-size: cover; */\r\n}\r\n/* .pbPlayerOuterSection:hover {\r\n    background-image: url(\"../../public/Escapee.png\");\r\n    opacity: 75%;\r\n} */\r\n.pbPlayerInnerSection {\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    font-size: x-large;\r\n}\r\n.pbPlayerTitle {\r\n    font-family: var(--commonFontFamily);\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    background-repeat: repeat;\r\n    border-radius: 35px;\r\n    background-color: whitesmoke;\r\n    color: whitesmoke;\r\n    letter-spacing: 2px;\r\n    font-weight: lighter;\r\n    text-align: center;\r\n    padding-left: 6px;\r\n    padding-right: 5px;\r\n    border-style: inset;\r\n    border-width: 2px;\r\n}\r\n.pbPlayerTitle.P {\r\n    font-size: inherit;   \r\n}\r\n.pbPlayerTitle.G {\r\n    font-size: inherit;    \r\n}\r\n.pbSquareOuter { /* Thin black border around each board square */\r\n    border: solid;\r\n    border-width: thin;\r\n    border-color: black;\r\n    border-style: solid;\r\n    padding: 0px; /* So nothing appears between the squares - keep them flush */\r\n}\r\n.pbSquareInner { /* Common board square properties */\r\n    height: var(--squareSide);\r\n    width: var(--squareSide);\r\n    border-style: none;\r\n}\r\n.pbSquareInner:focus { /* No outline when in focus */\r\n    outline: none;\r\n}\r\n.pbSquareInner.style1 { /* Alternating square style 1 */\r\n    background-color: black;\r\n    color: black;\r\n}\r\n.pbSquareInner.style2 { /* Alternating square style 2 */\r\n    background-color: darkgrey;\r\n    color: darkgrey;\r\n}\r\n.pbSquareInner.CenterSquare { /* Centre square */\r\n    padding-top: 3px;\r\n    border-style: none;\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color: cornsilk;\r\n    font-size: x-large;\r\n}\r\n.pbSquareInner.EscapeHatch { /* Escape hatch square */\r\n    padding-top: 3px;\r\n    border-style: solid;\r\n    border-color: var(--commonBorderColour);\r\n    border-width: thin;\r\n    background-color: orangered;\r\n    color: whitesmoke;\r\n    text-align: center;\r\n}\r\n.pbSquareInner.PlayerTile { /* Player tile image on the square */\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n    background-size: cover;\r\n    background-color: var(--tileBackgroundColour);\r\n    position: relative;\r\n}\r\n.pbSquareTileText { /* The tile played on the board */\r\n    position: absolute;   \r\n    bottom: 3px;\r\n    left: 12px; \r\n    font-weight: bolder;\r\n    text-align: center;\r\n    text-shadow: 2px 2px  grey;\r\n    font-family: monospace;\r\n    font-size: xx-large;\r\n}\r\n.pbSquareTileText.P { /* Prisoners tile color */\r\n    color: var(--prisonersTileColour);\r\n}\r\n.pbSquareTileText.G { /* Guards tile color */\r\n    color: var(--guardsTileColour);\r\n}\r\n.u::after {\r\n    content: \"u\";\r\n    font-size: small;\r\n}\r\n.pbSquareInner.RightArrow { /* Right arrow word direction indicator */\r\n    padding: 0%;\r\n    border-style: none;\r\n    background-color: grey;\r\n    color: cyan;\r\n    font-weight: bolder;\r\n    text-align: center;\r\n}\r\n.pbSquareInner.DownArrow { /* Down arrow word direction indicator */\r\n    padding: 0%;\r\n    border-style: none;\r\n    background-color: grey;\r\n    color: cyan;\r\n    font-weight: bolder;\r\n    text-align: center;\r\n}\r\n.pbRow {\r\n    padding: 0%;\r\n}\r\n.pbBoardPlusUnderboard {\r\n    /* background-image: url('../../public/Wall.jpg');\r\n    background-size: contain; */\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n}\r\n.pbBoard {\r\n    border-style: solid;\r\n    border-width: 0px;\r\n    border-color: var(--commonBorderColour);\r\n}\r\n.pbBoardColumnHeaderRow {\r\n    font-family: var(--commonHeaderFontFamily);\r\n    text-align: center;\r\n    line-height: var(--cellBlockSide);\r\n}\r\n.pbBoardColumnHeader {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n    background-size: cover;\r\n    background-repeat: repeat;\r\n    background-color: black;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n.pbBoardRowHeader {\r\n    font-family: var(--commonHeaderFontFamily);\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n    background-size: cover;\r\n    background-repeat: repeat;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n.pbBoardHeaderTopLeft {\r\n    min-width: var(--cellBlockSide);\r\n    min-height: var(--cellBlockSide);\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n    background-size: cover;\r\n}\r\n.pbBoardHeaderTopRight {\r\n    min-width: var(--cellBlockSide);\r\n    min-height: var(--cellBlockSide);\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n    background-size: cover;\r\n}\r\n.pbBoardHeaderBottomLeft {\r\n    min-width: var(--cellBlockSide);\r\n    min-height: var(--cellBlockSide);\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n    background-size: cover;\r\n}\r\n.pbBoardHeaderBottomRight {\r\n    min-width: var(--cellBlockSide);\r\n    min-height: var(--cellBlockSide);\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n    background-size: cover;\r\n}\r\n.pbUnderboard {\r\n    margin-top: 10px;\r\n    border-style: solid;\r\n    border-color: var(--commonBorderColour);\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color: var(--commonTextColour);\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n.pbTileAndMovesOuter {\r\n    align-items: left;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    max-width: 250px;\r\n}\r\n.pbTilepool {\r\n    text-align: left;\r\n    border-width: 3px;\r\n    border-style: solid solid none solid;\r\n    border-color: var(--commonBorderColour);\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color: var(--commonTextColour);\r\n    font-family: monospace;\r\n    font-size: xx-small;\r\n    word-wrap: break-word;\r\n}\r\n.pbTilepoolDivider {\r\n    width: 2px;\r\n    vertical-align: top;\r\n    font-size: larger;\r\n}\r\n.pbTilepoolDivider::after {\r\n    content: \".\";\r\n}\r\n.pbTilepoolTitle {\r\n    font-size: 150%;\r\n    letter-spacing: 3px;\r\n    border-bottom-style: dotted;\r\n    border-color: var(--commonBorderColour);\r\n}\r\n.pbTilepoolTile {\r\n    font-size: small;\r\n    padding-left: 2px;\r\n    padding-right: 2px;\r\n}\r\n.pbMoves {\r\n    text-align: left;\r\n    border-width: 3px;\r\n    border-style: solid;\r\n    border-color: var(--commonBorderColour);\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color: var(--commonTextColour);\r\n    font-family: monospace;\r\n    font-size: xx-small;\r\n}\r\n.pbMovesTitle {\r\n    font-size: 150%;\r\n    letter-spacing: 3px;\r\n    border-bottom-style: dotted;\r\n    border-color: var(--commonBorderColour);\r\n}\r\n.pbMovesScrollable {\r\n    max-height: 550px;\r\n    /* max-width: 250px; */\r\n    overflow-x: scroll;\r\n    overflow-y: scroll;\r\n    scroll-behavior: auto;\r\n}\r\n.pbMove {\r\n    font-size: small;\r\n    padding-left: 2px;\r\n    padding-right: 2px;\r\n}\r\n.pbMove.by {\r\n    color: yellow;\r\n}\r\n.pbMove.SWAP {\r\n    color: cyan;\r\n}\r\n.pbMove.SWAP::after {\r\n    content: \"Swap tiles\";\r\n}\r\n.pbMove.PASS {\r\n    color: red;\r\n}\r\n.pbMove.PASS::after {\r\n    content: \"Pass turn\";\r\n}\r\n.pbMove.PLAY {\r\n    color: var(--commonTextColour);\r\n}\r\n.pbTilerack {\r\n    padding-top: 2px;\r\n    padding-bottom: 5px;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n.pbTilerackArrow {\r\n    margin-top: 5px;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n    border-radius: 50pc;\r\n    border-width: 0px;\r\n    height: 30px;\r\n}\r\n.pbTileOnRack {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n    background-size: cover;\r\n    background-color: var(--tileBackgroundColour);\r\n    width: var(--squareSide);\r\n    height: var(--squareSide);\r\n    position: relative;\r\n}\r\n.pbTileOnRack.Unselected {\r\n    border: none;\r\n}\r\n.pbTileOnRack.Selected {\r\n    border-style: inset;\r\n    border-width: thin;\r\n    border-color: white;\r\n    -webkit-transform: rotate(10deg);\r\n            transform: rotate(10deg);\r\n    margin: 4px;\r\n}\r\n.pbTileOnRackText {\r\n    position: absolute;   \r\n    bottom: 2px;\r\n    left: 11px; \r\n    font-weight: bolder;\r\n    text-align: center;\r\n    text-shadow: 2px 2px  grey;\r\n    font-family: monospace;\r\n    font-size: xx-large;\r\n}\r\n.pbTileOnRack.P {\r\n    color: var(--prisonersTileColour);\r\n}\r\n.pbTileOnRack.G {\r\n    color: var(--guardsTileColour);\r\n}\r\n.pbRescuesMade {\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color:var(--commonTextColour);\r\n    border-color: var(--commonBorderColour);\r\n    border-width: 3px;\r\n    border-style: solid;\r\n    padding-left: 3px;\r\n    font-family: var(--commonFontFamily);\r\n    font-size: 30px;\r\n}\r\n.pbActionButtonDiv {\r\n    margin-left: 7px;\r\n}\r\n.pbActionButton {\r\n    /* background-image: url('../../public/actionButton.png'); */\r\n    padding: 2px 2px 2px 2px;\r\n    margin-left: 5px;\r\n    border-radius: 35px;\r\n    border-width: 0px;\r\n    border-color: var(--commonBorderColour);\r\n    border-style: solid;\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color: var(--commonTextColour);\r\n    font-style: bolder;\r\n    font-family: var(--commonFontFamily);\r\n    width: 200px;\r\n    word-spacing: 3px;\r\n}\r\n.pbActionButtonText {\r\n    margin-left: 5px;\r\n    margin-right: 15px;\r\n}\r\n.pbActionButtonSevere {\r\n    background-color: red;\r\n    border: none;\r\n}\r\n.pbActionButtonSevereText {\r\n    color: black;\r\n}\r\n.pbActionButtonSevereText2 {\r\n    color: whitesmoke;\r\n    font-size: small;\r\n    display: table; /* This makes it go on the next line */\r\n    margin: auto; /* This is the only way I could centre it! */\r\n}\r\n.pbLobbyRackSizePrompt {\r\n    margin-left: 15px;\r\n    margin-right: 20px;\r\n    font-family: var(--commonHeaderFontFamily);\r\n    font-weight: bold;\r\n}\r\n.pbLobbyRackSizePrompt:before {\r\n    content: \"Cell Block\";\r\n}\r\n.pbLobbyRackSizePrompt::after {\r\n    content: \":\";\r\n    padding-left: 2px;\r\n}\r\n.pbLobbyRackSize {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\r\n    vertical-align: middle;\r\n    background-size: var(--cellBlockSide);\r\n    background-color: grey;\r\n    color: whitesmoke;\r\n    width: var(--cellBlockSide);\r\n    height: var(--cellBlockSide);\r\n    margin-right:20px;\r\n    align-content: center;\r\n}\r\n.pbLobbyRackSizeSelected {\r\n    vertical-align: middle;\r\n    /* background-image: url(\"../../public/prisonbars-square.png\");\r\n    background-size: var(--cellBlockSide); */\r\n    background-color: var(--selectedColor);\r\n    color: white;\r\n    width: var(--cellBlockSide);\r\n    height: var(--cellBlockSelectedHeight);\r\n    margin-right:20px;\r\n    border-width: 1px;\r\n    border-color: lightgrey;\r\n    border-style: solid;\r\n}\r\n.pbLobbyRackSizeSelected:focus {\r\n    outline: none;\r\n}\r\n.pbLobbyCellBlockInfo {\r\n    font-family: var(--commonFontFamily);\r\n    font-style: italic;\r\n    padding-left: 5px;\r\n}\r\n.pbChat {\r\n    align-items: left;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    border-width: 3px;\r\n    border-style: none solid none solid;\r\n    border-color: var(--commonBorderColour);\r\n    max-height: 600px;\r\n    overflow-y: scroll;\r\n}\r\n.pbChatTable {\r\n    border-color: var(--commonBorderColour);\r\n}\r\n.pbChatFrom {\r\n    background-color: black;\r\n    color: white;\r\n    padding-right: 5px;\r\n    vertical-align: top;\r\n}\r\n.pbChatFrom::before {\r\n    content: \">\";\r\n    color: yellow;\r\n}\r\n.pbChatFrom::after {\r\n    content: \":\";\r\n    color: yellow;\r\n    font-size: larger;\r\n    padding-left: 1px;\r\n}\r\n.pbChatMsg {\r\n    padding-left: 5px;\r\n    font-style: italic;\r\n    color:whitesmoke;\r\n    background-color: black;\r\n    padding-top:2px;\r\n}\r\n.pbChatInput {\r\n    font-style: italic;\r\n    color:whitesmoke;\r\n    background-color: var(--commonBorderColour);\r\n    width: 100%;\r\n}\r\n.pbChatInputEmpty {\r\n    background-color: whitesmoke;\r\n    width: 100%;\r\n    max-block-size: 30px;\r\n    cursor: text;\r\n}", "",{"version":3,"sources":["webpack://pages/pb/prisonbreak.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --squareSide: 40px;\r\n    --cellBlockSide: 40px;\r\n    --cellBlockSelectedHeight: 42px;\r\n    --selectedColor: hsl(207, 90%, 56%);\r\n    --lobbyFontSize: 20px;\r\n    --tileBackgroundColour: orangered;\r\n    --prisonersTileColour: whitesmoke;\r\n    --guardsTileColour: black;\r\n}\r\n.topBarHeight {\r\n    height: 60px;\r\n}\r\n.topBarCorner {\r\n    width: 20%;\r\n    height: 50%;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n.fullWidth {\r\n    width: 100%;\r\n}\r\n.formalinfo {\r\n    font-family: var(--commonFontFamily);\r\n    letter-spacing: 1px;\r\n}\r\n.prisonbreak {\r\n    background-image: url(\"../../public/Wall.jpg\");\r\n    background-size: cover;\r\n}\r\n.pbGameid {\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color: var(--commonTextColour);\r\n    border-color: var(--commonBorderColour);\r\n    border-width: 0 0 3px 3px;\r\n    border-style: solid;\r\n}\r\n.pbtitle {\r\n    background-color: grey;\r\n    font-size: 2.8em;\r\n    text-align: center;\r\n    font-family: Merriweather;\r\n    /* font-style: italic; */\r\n    color:black;\r\n}\r\n.pbhomelink {\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color: var(--commonTextColour);\r\n    text-align: right;\r\n    border-color: var(--commonBorderColour);\r\n    border-width: 0 3px 3px 0;\r\n    border-style: solid;\r\n}\r\n.pbPlayerOuterSection {\r\n    /* border-left: 2px solid black;\r\n    border-right: 2px solid black;\r\n    border-top: 2px solid black; */\r\n    /* width: 360px; */\r\n    padding-top: 3px;\r\n    /* background-image: url(\"../../public/Wall.jpg\");\r\n    background-repeat: repeat;\r\n    background-size: cover; */\r\n}\r\n/* .pbPlayerOuterSection:hover {\r\n    background-image: url(\"../../public/Escapee.png\");\r\n    opacity: 75%;\r\n} */\r\n.pbPlayerInnerSection {\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    font-size: x-large;\r\n}\r\n.pbPlayerTitle {\r\n    font-family: var(--commonFontFamily);\r\n    background-image: url('../../public/playertitle.png');\r\n    background-repeat: repeat;\r\n    border-radius: 35px;\r\n    background-color: whitesmoke;\r\n    color: whitesmoke;\r\n    letter-spacing: 2px;\r\n    font-weight: lighter;\r\n    text-align: center;\r\n    padding-left: 6px;\r\n    padding-right: 5px;\r\n    border-style: inset;\r\n    border-width: 2px;\r\n}\r\n.pbPlayerTitle.P {\r\n    font-size: inherit;   \r\n}\r\n.pbPlayerTitle.G {\r\n    font-size: inherit;    \r\n}\r\n.pbSquareOuter { /* Thin black border around each board square */\r\n    border: solid;\r\n    border-width: thin;\r\n    border-color: black;\r\n    border-style: solid;\r\n    padding: 0px; /* So nothing appears between the squares - keep them flush */\r\n}\r\n.pbSquareInner { /* Common board square properties */\r\n    height: var(--squareSide);\r\n    width: var(--squareSide);\r\n    border-style: none;\r\n}\r\n.pbSquareInner:focus { /* No outline when in focus */\r\n    outline: none;\r\n}\r\n.pbSquareInner.style1 { /* Alternating square style 1 */\r\n    background-color: black;\r\n    color: black;\r\n}\r\n.pbSquareInner.style2 { /* Alternating square style 2 */\r\n    background-color: darkgrey;\r\n    color: darkgrey;\r\n}\r\n.pbSquareInner.CenterSquare { /* Centre square */\r\n    padding-top: 3px;\r\n    border-style: none;\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color: cornsilk;\r\n    font-size: x-large;\r\n}\r\n.pbSquareInner.EscapeHatch { /* Escape hatch square */\r\n    padding-top: 3px;\r\n    border-style: solid;\r\n    border-color: var(--commonBorderColour);\r\n    border-width: thin;\r\n    background-color: orangered;\r\n    color: whitesmoke;\r\n    text-align: center;\r\n}\r\n.pbSquareInner.PlayerTile { /* Player tile image on the square */\r\n    background-image: url('../../public/tile.png');\r\n    background-size: cover;\r\n    background-color: var(--tileBackgroundColour);\r\n    position: relative;\r\n}\r\n.pbSquareTileText { /* The tile played on the board */\r\n    position: absolute;   \r\n    bottom: 3px;\r\n    left: 12px; \r\n    font-weight: bolder;\r\n    text-align: center;\r\n    text-shadow: 2px 2px  grey;\r\n    font-family: monospace;\r\n    font-size: xx-large;\r\n}\r\n.pbSquareTileText.P { /* Prisoners tile color */\r\n    color: var(--prisonersTileColour);\r\n}\r\n.pbSquareTileText.G { /* Guards tile color */\r\n    color: var(--guardsTileColour);\r\n}\r\n.u::after {\r\n    content: \"u\";\r\n    font-size: small;\r\n}\r\n.pbSquareInner.RightArrow { /* Right arrow word direction indicator */\r\n    padding: 0%;\r\n    border-style: none;\r\n    background-color: grey;\r\n    color: cyan;\r\n    font-weight: bolder;\r\n    text-align: center;\r\n}\r\n.pbSquareInner.DownArrow { /* Down arrow word direction indicator */\r\n    padding: 0%;\r\n    border-style: none;\r\n    background-color: grey;\r\n    color: cyan;\r\n    font-weight: bolder;\r\n    text-align: center;\r\n}\r\n.pbRow {\r\n    padding: 0%;\r\n}\r\n.pbBoardPlusUnderboard {\r\n    /* background-image: url('../../public/Wall.jpg');\r\n    background-size: contain; */\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n}\r\n.pbBoard {\r\n    border-style: solid;\r\n    border-width: 0px;\r\n    border-color: var(--commonBorderColour);\r\n}\r\n.pbBoardColumnHeaderRow {\r\n    font-family: var(--commonHeaderFontFamily);\r\n    text-align: center;\r\n    line-height: var(--cellBlockSide);\r\n}\r\n.pbBoardColumnHeader {\r\n    background-image: url('../../public/BarbedWireRotated.png');\r\n    background-size: cover;\r\n    background-repeat: repeat;\r\n    background-color: black;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n.pbBoardRowHeader {\r\n    font-family: var(--commonHeaderFontFamily);\r\n    background-image: url('../../public/BarbedWire.png');\r\n    background-size: cover;\r\n    background-repeat: repeat;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n.pbBoardHeaderTopLeft {\r\n    min-width: var(--cellBlockSide);\r\n    min-height: var(--cellBlockSide);\r\n    background-image: url('../../public/BarbedWireRotated.png');\r\n    background-size: cover;\r\n}\r\n.pbBoardHeaderTopRight {\r\n    min-width: var(--cellBlockSide);\r\n    min-height: var(--cellBlockSide);\r\n    background-image: url('../../public/BarbedWire.png');\r\n    background-size: cover;\r\n}\r\n.pbBoardHeaderBottomLeft {\r\n    min-width: var(--cellBlockSide);\r\n    min-height: var(--cellBlockSide);\r\n    background-image: url('../../public/BarbedWire.png');\r\n    background-size: cover;\r\n}\r\n.pbBoardHeaderBottomRight {\r\n    min-width: var(--cellBlockSide);\r\n    min-height: var(--cellBlockSide);\r\n    background-image: url('../../public/BarbedWireRotated.png');\r\n    background-size: cover;\r\n}\r\n.pbUnderboard {\r\n    margin-top: 10px;\r\n    border-style: solid;\r\n    border-color: var(--commonBorderColour);\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color: var(--commonTextColour);\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n.pbTileAndMovesOuter {\r\n    align-items: left;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    max-width: 250px;\r\n}\r\n.pbTilepool {\r\n    text-align: left;\r\n    border-width: 3px;\r\n    border-style: solid solid none solid;\r\n    border-color: var(--commonBorderColour);\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color: var(--commonTextColour);\r\n    font-family: monospace;\r\n    font-size: xx-small;\r\n    word-wrap: break-word;\r\n}\r\n.pbTilepoolDivider {\r\n    width: 2px;\r\n    vertical-align: top;\r\n    font-size: larger;\r\n}\r\n.pbTilepoolDivider::after {\r\n    content: \".\";\r\n}\r\n.pbTilepoolTitle {\r\n    font-size: 150%;\r\n    letter-spacing: 3px;\r\n    border-bottom-style: dotted;\r\n    border-color: var(--commonBorderColour);\r\n}\r\n.pbTilepoolTile {\r\n    font-size: small;\r\n    padding-left: 2px;\r\n    padding-right: 2px;\r\n}\r\n.pbMoves {\r\n    text-align: left;\r\n    border-width: 3px;\r\n    border-style: solid;\r\n    border-color: var(--commonBorderColour);\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color: var(--commonTextColour);\r\n    font-family: monospace;\r\n    font-size: xx-small;\r\n}\r\n.pbMovesTitle {\r\n    font-size: 150%;\r\n    letter-spacing: 3px;\r\n    border-bottom-style: dotted;\r\n    border-color: var(--commonBorderColour);\r\n}\r\n.pbMovesScrollable {\r\n    max-height: 550px;\r\n    /* max-width: 250px; */\r\n    overflow-x: scroll;\r\n    overflow-y: scroll;\r\n    scroll-behavior: auto;\r\n}\r\n.pbMove {\r\n    font-size: small;\r\n    padding-left: 2px;\r\n    padding-right: 2px;\r\n}\r\n.pbMove.by {\r\n    color: yellow;\r\n}\r\n.pbMove.SWAP {\r\n    color: cyan;\r\n}\r\n.pbMove.SWAP::after {\r\n    content: \"Swap tiles\";\r\n}\r\n.pbMove.PASS {\r\n    color: red;\r\n}\r\n.pbMove.PASS::after {\r\n    content: \"Pass turn\";\r\n}\r\n.pbMove.PLAY {\r\n    color: var(--commonTextColour);\r\n}\r\n.pbTilerack {\r\n    padding-top: 2px;\r\n    padding-bottom: 5px;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n.pbTilerackArrow {\r\n    margin-top: 5px;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n    border-radius: 50pc;\r\n    border-width: 0px;\r\n    height: 30px;\r\n}\r\n.pbTileOnRack {\r\n    background-image: url('../../public/tile.png');\r\n    background-size: cover;\r\n    background-color: var(--tileBackgroundColour);\r\n    width: var(--squareSide);\r\n    height: var(--squareSide);\r\n    position: relative;\r\n}\r\n.pbTileOnRack.Unselected {\r\n    border: none;\r\n}\r\n.pbTileOnRack.Selected {\r\n    border-style: inset;\r\n    border-width: thin;\r\n    border-color: white;\r\n    transform: rotate(10deg);\r\n    margin: 4px;\r\n}\r\n.pbTileOnRackText {\r\n    position: absolute;   \r\n    bottom: 2px;\r\n    left: 11px; \r\n    font-weight: bolder;\r\n    text-align: center;\r\n    text-shadow: 2px 2px  grey;\r\n    font-family: monospace;\r\n    font-size: xx-large;\r\n}\r\n.pbTileOnRack.P {\r\n    color: var(--prisonersTileColour);\r\n}\r\n.pbTileOnRack.G {\r\n    color: var(--guardsTileColour);\r\n}\r\n.pbRescuesMade {\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color:var(--commonTextColour);\r\n    border-color: var(--commonBorderColour);\r\n    border-width: 3px;\r\n    border-style: solid;\r\n    padding-left: 3px;\r\n    font-family: var(--commonFontFamily);\r\n    font-size: 30px;\r\n}\r\n.pbActionButtonDiv {\r\n    margin-left: 7px;\r\n}\r\n.pbActionButton {\r\n    /* background-image: url('../../public/actionButton.png'); */\r\n    padding: 2px 2px 2px 2px;\r\n    margin-left: 5px;\r\n    border-radius: 35px;\r\n    border-width: 0px;\r\n    border-color: var(--commonBorderColour);\r\n    border-style: solid;\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color: var(--commonTextColour);\r\n    font-style: bolder;\r\n    font-family: var(--commonFontFamily);\r\n    width: 200px;\r\n    word-spacing: 3px;\r\n}\r\n.pbActionButtonText {\r\n    margin-left: 5px;\r\n    margin-right: 15px;\r\n}\r\n.pbActionButtonSevere {\r\n    background-color: red;\r\n    border: none;\r\n}\r\n.pbActionButtonSevereText {\r\n    color: black;\r\n}\r\n.pbActionButtonSevereText2 {\r\n    color: whitesmoke;\r\n    font-size: small;\r\n    display: table; /* This makes it go on the next line */\r\n    margin: auto; /* This is the only way I could centre it! */\r\n}\r\n.pbLobbyRackSizePrompt {\r\n    margin-left: 15px;\r\n    margin-right: 20px;\r\n    font-family: var(--commonHeaderFontFamily);\r\n    font-weight: bold;\r\n}\r\n.pbLobbyRackSizePrompt:before {\r\n    content: \"Cell Block\";\r\n}\r\n.pbLobbyRackSizePrompt::after {\r\n    content: \":\";\r\n    padding-left: 2px;\r\n}\r\n.pbLobbyRackSize {\r\n    background-image: url(\"../../public/prisonbars-square.png\");\r\n    vertical-align: middle;\r\n    background-size: var(--cellBlockSide);\r\n    background-color: grey;\r\n    color: whitesmoke;\r\n    width: var(--cellBlockSide);\r\n    height: var(--cellBlockSide);\r\n    margin-right:20px;\r\n    align-content: center;\r\n}\r\n.pbLobbyRackSizeSelected {\r\n    vertical-align: middle;\r\n    /* background-image: url(\"../../public/prisonbars-square.png\");\r\n    background-size: var(--cellBlockSide); */\r\n    background-color: var(--selectedColor);\r\n    color: white;\r\n    width: var(--cellBlockSide);\r\n    height: var(--cellBlockSelectedHeight);\r\n    margin-right:20px;\r\n    border-width: 1px;\r\n    border-color: lightgrey;\r\n    border-style: solid;\r\n}\r\n.pbLobbyRackSizeSelected:focus {\r\n    outline: none;\r\n}\r\n.pbLobbyCellBlockInfo {\r\n    font-family: var(--commonFontFamily);\r\n    font-style: italic;\r\n    padding-left: 5px;\r\n}\r\n.pbChat {\r\n    align-items: left;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    border-width: 3px;\r\n    border-style: none solid none solid;\r\n    border-color: var(--commonBorderColour);\r\n    max-height: 600px;\r\n    overflow-y: scroll;\r\n}\r\n.pbChatTable {\r\n    border-color: var(--commonBorderColour);\r\n}\r\n.pbChatFrom {\r\n    background-color: black;\r\n    color: white;\r\n    padding-right: 5px;\r\n    vertical-align: top;\r\n}\r\n.pbChatFrom::before {\r\n    content: \">\";\r\n    color: yellow;\r\n}\r\n.pbChatFrom::after {\r\n    content: \":\";\r\n    color: yellow;\r\n    font-size: larger;\r\n    padding-left: 1px;\r\n}\r\n.pbChatMsg {\r\n    padding-left: 5px;\r\n    font-style: italic;\r\n    color:whitesmoke;\r\n    background-color: black;\r\n    padding-top:2px;\r\n}\r\n.pbChatInput {\r\n    font-style: italic;\r\n    color:whitesmoke;\r\n    background-color: var(--commonBorderColour);\r\n    width: 100%;\r\n}\r\n.pbChatInputEmpty {\r\n    background-color: whitesmoke;\r\n    width: 100%;\r\n    max-block-size: 30px;\r\n    cursor: text;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/wi/wordinfo.css":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/wi/wordinfo.css ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".wititle {\r\n  background-color: grey;\r\n  font-size: 2.8em;\r\n  text-align: center;\r\n  font-family: cursive;\r\n  font-style: italic;\r\n  color:black;\r\n}\r\n.wihomelink {\r\n  background-color: grey;\r\n  color: black;\r\n  text-align: right;\r\n}\r\n.wibody {\r\n  background-color: darkgray;\r\n  color: whitesmoke;\r\n}\r\n.tooltip {\r\n  position: top;\r\n  display: inline-block;\r\n}\r\n\r\n.tooltip .tooltiptext {\r\n  visibility: hidden;\r\n  width: 120px;\r\n  background-color: black;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  padding: 5px 0;\r\n\r\n  /* Position the tooltip */\r\n  position: absolute;\r\n  z-index: 1;\r\n  bottom: 100%;\r\n  left: 50%;\r\n  margin-left: -60%;\r\n}\r\n\r\n.tooltip:hover .tooltiptext {\r\n  visibility: visible;\r\n}\r\n.displayWordRow {\r\n  line-height: 100%;\r\n}\r\n.divider {\r\n  line-height: 5px;\r\n  border-bottom: cyan;\r\n  border-bottom-style: ridge;\r\n}\r\n.letterInput {\r\n  border: 1px solid black;\r\n  background-color: darkgreen;\r\n  color: azure;\r\n  text-align: left;\r\n  font-family: 'Courier New', Courier, monospace;\r\n  font-size: large;\r\n}\r\n.letter {\r\n  border: 1px solid black;\r\n  background-color: darkgreen;\r\n  color: azure;\r\n  text-align: center;\r\n  font-family: 'Courier New', Courier, monospace;\r\n  width: 30px;\r\n  font-size: large;\r\n}\r\n.letterInvalidWord {\r\n  border: 1px solid black;\r\n  background-color: red;\r\n  color: azure;\r\n  text-align: center;\r\n  font-family: 'Courier New', Courier, monospace;\r\n  width: 30px;\r\n  font-size: large;\r\n}\r\n.facevalue {\r\n  text-align: left;\r\n  vertical-align: bottom;\r\n  width: 20px;\r\n}\r\n.wordIsValid {\r\n  vertical-align: middle;\r\n  color: blue;\r\n  margin-left: 10px;\r\n}\r\n.wordIsNotValid {\r\n  vertical-align: middle;\r\n  color: red;\r\n  font-style: italic;\r\n  margin-left: 10px;\r\n}\r\n.insertCount {\r\n  background-color: teal;\r\n  color: white;\r\n  border-radius: 100%;\r\n  text-align: center;\r\n  width: 20px;\r\n}\r\n.insertCountSpacer {\r\n  width: 20px;\r\n}\r\n.swapCount {\r\n  background-color: cornflowerblue;\r\n  color: darkblue;\r\n  border-radius: 100%;\r\n  /* border-left: 5px solid darkgray;\r\n  border-right: 5px solid darkgray; */\r\n  text-align: center;\r\n}\r\n.anagramCount {\r\n  background-color: slategray;\r\n  color: lightgreen;\r\n  border-radius: 100%;\r\n  text-align: center;\r\n  border-left: 5px solid slategray;\r\n  border-right: 5px solid slategray;\r\n}\r\n.dropRow {\r\n  line-height: 5px;\r\n}\r\n.dropIndicator {\r\n  color: black;\r\n  text-align: center;\r\n  vertical-align: top;\r\n  font-weight: bolder;\r\n  font-size: x-large;\r\n}\r\n.balloonstring {\r\n  text-align: center;\r\n  vertical-align: top;\r\n  color: white;\r\n  -webkit-transform: rotate(90deg);\r\n          transform: rotate(90deg);  \r\n}\r\n", "",{"version":3,"sources":["webpack://pages/wi/wordinfo.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,kBAAkB;EAClB,oBAAoB;EACpB,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,sBAAsB;EACtB,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,0BAA0B;EAC1B,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,uBAAuB;EACvB,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,cAAc;;EAEd,yBAAyB;EACzB,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,0BAA0B;AAC5B;AACA;EACE,uBAAuB;EACvB,2BAA2B;EAC3B,YAAY;EACZ,gBAAgB;EAChB,8CAA8C;EAC9C,gBAAgB;AAClB;AACA;EACE,uBAAuB;EACvB,2BAA2B;EAC3B,YAAY;EACZ,kBAAkB;EAClB,8CAA8C;EAC9C,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,uBAAuB;EACvB,qBAAqB;EACrB,YAAY;EACZ,kBAAkB;EAClB,8CAA8C;EAC9C,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,sBAAsB;EACtB,WAAW;AACb;AACA;EACE,sBAAsB;EACtB,WAAW;EACX,iBAAiB;AACnB;AACA;EACE,sBAAsB;EACtB,UAAU;EACV,kBAAkB;EAClB,iBAAiB;AACnB;AACA;EACE,sBAAsB;EACtB,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,gCAAgC;EAChC,eAAe;EACf,mBAAmB;EACnB;qCACmC;EACnC,kBAAkB;AACpB;AACA;EACE,2BAA2B;EAC3B,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,gCAAgC;EAChC,iCAAiC;AACnC;AACA;EACE,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,gCAAwB;UAAxB,wBAAwB;AAC1B","sourcesContent":[".wititle {\r\n  background-color: grey;\r\n  font-size: 2.8em;\r\n  text-align: center;\r\n  font-family: cursive;\r\n  font-style: italic;\r\n  color:black;\r\n}\r\n.wihomelink {\r\n  background-color: grey;\r\n  color: black;\r\n  text-align: right;\r\n}\r\n.wibody {\r\n  background-color: darkgray;\r\n  color: whitesmoke;\r\n}\r\n.tooltip {\r\n  position: top;\r\n  display: inline-block;\r\n}\r\n\r\n.tooltip .tooltiptext {\r\n  visibility: hidden;\r\n  width: 120px;\r\n  background-color: black;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  padding: 5px 0;\r\n\r\n  /* Position the tooltip */\r\n  position: absolute;\r\n  z-index: 1;\r\n  bottom: 100%;\r\n  left: 50%;\r\n  margin-left: -60%;\r\n}\r\n\r\n.tooltip:hover .tooltiptext {\r\n  visibility: visible;\r\n}\r\n.displayWordRow {\r\n  line-height: 100%;\r\n}\r\n.divider {\r\n  line-height: 5px;\r\n  border-bottom: cyan;\r\n  border-bottom-style: ridge;\r\n}\r\n.letterInput {\r\n  border: 1px solid black;\r\n  background-color: darkgreen;\r\n  color: azure;\r\n  text-align: left;\r\n  font-family: 'Courier New', Courier, monospace;\r\n  font-size: large;\r\n}\r\n.letter {\r\n  border: 1px solid black;\r\n  background-color: darkgreen;\r\n  color: azure;\r\n  text-align: center;\r\n  font-family: 'Courier New', Courier, monospace;\r\n  width: 30px;\r\n  font-size: large;\r\n}\r\n.letterInvalidWord {\r\n  border: 1px solid black;\r\n  background-color: red;\r\n  color: azure;\r\n  text-align: center;\r\n  font-family: 'Courier New', Courier, monospace;\r\n  width: 30px;\r\n  font-size: large;\r\n}\r\n.facevalue {\r\n  text-align: left;\r\n  vertical-align: bottom;\r\n  width: 20px;\r\n}\r\n.wordIsValid {\r\n  vertical-align: middle;\r\n  color: blue;\r\n  margin-left: 10px;\r\n}\r\n.wordIsNotValid {\r\n  vertical-align: middle;\r\n  color: red;\r\n  font-style: italic;\r\n  margin-left: 10px;\r\n}\r\n.insertCount {\r\n  background-color: teal;\r\n  color: white;\r\n  border-radius: 100%;\r\n  text-align: center;\r\n  width: 20px;\r\n}\r\n.insertCountSpacer {\r\n  width: 20px;\r\n}\r\n.swapCount {\r\n  background-color: cornflowerblue;\r\n  color: darkblue;\r\n  border-radius: 100%;\r\n  /* border-left: 5px solid darkgray;\r\n  border-right: 5px solid darkgray; */\r\n  text-align: center;\r\n}\r\n.anagramCount {\r\n  background-color: slategray;\r\n  color: lightgreen;\r\n  border-radius: 100%;\r\n  text-align: center;\r\n  border-left: 5px solid slategray;\r\n  border-right: 5px solid slategray;\r\n}\r\n.dropRow {\r\n  line-height: 5px;\r\n}\r\n.dropIndicator {\r\n  color: black;\r\n  text-align: center;\r\n  vertical-align: top;\r\n  font-weight: bolder;\r\n  font-size: x-large;\r\n}\r\n.balloonstring {\r\n  text-align: center;\r\n  vertical-align: top;\r\n  color: white;\r\n  transform: rotate(90deg);  \r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/wm/mastermind.css":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/wm/mastermind.css ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Mastermind {\r\n    background-color: #16271a;\r\n    padding-left: 1%;\r\n    padding-right: 1%;\r\n    padding-top: 1%;\r\n    padding-bottom: 1%;\r\n}\r\n.wmhomelink {\r\n    background-color: #16271a;\r\n    text-align: right;\r\n}\r\n.Outertable {\r\n    border-style: none;\r\n    vertical-align: top;\r\n    color: whitesmoke;\r\n}\r\n.Guesstable {\r\n    background-color: #1917c0;\r\n}\r\n.AlignCenter {\r\n    text-align: center;\r\n}\r\n.AlignLeft {\r\n    text-align: left;\r\n}\r\n.wmlink {\r\n    background-color: darkmagenta;\r\n    color:cyan;\r\n    text-align: left;\r\n}\r\n.wmbutton {\r\n    font-size: xx-large;\r\n    background-color: #17c025;\r\n    color:azure;\r\n}\r\n.wmtitle {\r\n    font-size: 2.8em;\r\n    text-align: center;\r\n    font-family: cursive;\r\n    font-style: italic;\r\n    color:darkmagenta;\r\n}\r\n.wmh1 {\r\n    text-align: center;\r\n    font-size: xx-large;\r\n    font-family: cursive;\r\n    color:azure;\r\n}\r\n.wmh2 {\r\n    font-size: x-large;\r\n    color:azure;\r\n}\r\n.wmh3 {\r\n    color:azure;\r\n    font-size: x-large;\r\n}\r\n.wmth {\r\n    color: aliceblue;\r\n    border-style: groove;\r\n}\r\n.wmtd {\r\n    border-style: inset;\r\n    color:azure;\r\n    text-align: center;\r\n    font-family: 'Courier New', Courier, monospace;\r\n}\r\n.wmp {\r\n    color: whitesmoke;\r\n    text-align: center;\r\n}\r\n.wmlabel {\r\n    color: lightgreen;\r\n    padding-right: 5px;\r\n}", "",{"version":3,"sources":["webpack://pages/wm/mastermind.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,yBAAyB;IACzB,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;AACrB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,kBAAkB;AACtB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,6BAA6B;IAC7B,UAAU;IACV,gBAAgB;AACpB;AACA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,WAAW;AACf;AACA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,oBAAoB;IACpB,WAAW;AACf;AACA;IACI,kBAAkB;IAClB,WAAW;AACf;AACA;IACI,WAAW;IACX,kBAAkB;AACtB;AACA;IACI,gBAAgB;IAChB,oBAAoB;AACxB;AACA;IACI,mBAAmB;IACnB,WAAW;IACX,kBAAkB;IAClB,8CAA8C;AAClD;AACA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,iBAAiB;IACjB,kBAAkB;AACtB","sourcesContent":[".Mastermind {\r\n    background-color: #16271a;\r\n    padding-left: 1%;\r\n    padding-right: 1%;\r\n    padding-top: 1%;\r\n    padding-bottom: 1%;\r\n}\r\n.wmhomelink {\r\n    background-color: #16271a;\r\n    text-align: right;\r\n}\r\n.Outertable {\r\n    border-style: none;\r\n    vertical-align: top;\r\n    color: whitesmoke;\r\n}\r\n.Guesstable {\r\n    background-color: #1917c0;\r\n}\r\n.AlignCenter {\r\n    text-align: center;\r\n}\r\n.AlignLeft {\r\n    text-align: left;\r\n}\r\n.wmlink {\r\n    background-color: darkmagenta;\r\n    color:cyan;\r\n    text-align: left;\r\n}\r\n.wmbutton {\r\n    font-size: xx-large;\r\n    background-color: #17c025;\r\n    color:azure;\r\n}\r\n.wmtitle {\r\n    font-size: 2.8em;\r\n    text-align: center;\r\n    font-family: cursive;\r\n    font-style: italic;\r\n    color:darkmagenta;\r\n}\r\n.wmh1 {\r\n    text-align: center;\r\n    font-size: xx-large;\r\n    font-family: cursive;\r\n    color:azure;\r\n}\r\n.wmh2 {\r\n    font-size: x-large;\r\n    color:azure;\r\n}\r\n.wmh3 {\r\n    color:azure;\r\n    font-size: x-large;\r\n}\r\n.wmth {\r\n    color: aliceblue;\r\n    border-style: groove;\r\n}\r\n.wmtd {\r\n    border-style: inset;\r\n    color:azure;\r\n    text-align: center;\r\n    font-family: 'Courier New', Courier, monospace;\r\n}\r\n.wmp {\r\n    color: whitesmoke;\r\n    text-align: center;\r\n}\r\n.wmlabel {\r\n    color: lightgreen;\r\n    padding-right: 5px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/globals.css":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/globals.css ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Merriweather|Open Sans);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --commonBorderColour: grey;/* blue; /*darkslateblue*/\n  --commonTextBackgroundColour: black;\n  --commonTextColour: whitesmoke;\n  --commonHeaderFontFamily: Merriweather;\n  --commonFontFamily: 'Open Sans', sans-serif;\n}\n.commonHeaderFontFamily {\n  font-family: var(--commonHeaderFontFamily);\n}\n.commonFontFamily {\n  font-family: var(--commonFontFamily);\n}\nhtml,\nbody {\n  background-color: darkgrey;\n  color: black;\n  padding: 0;\n  margin: 0;\n  /* font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; */\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.myHeadingFont {\n  font-family: var(--commonHeaderFontFamily);\n}\n.mySubHeadingFont {\n  font-family: var(--commonFontFamily);\n}\n.myCommonFont {\n  font-family: var(--commonFontFamily);\n}\n.mymaterialicon {\n  border-style: none;\n  outline: none;\n}\n.mymaterialicon:focus {\n  outline: none;\n  }\n.textaligncenter {\n  text-align: center;\n}\n/* Rules for using icons as white on a dark background. */\n.material-icons.md-light { color: rgba(255, 255, 255, 1); }\n.material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }", "",{"version":3,"sources":["webpack://styles/globals.css"],"names":[],"mappings":"AACA;EACE,0BAA0B,CAAC,yBAAyB;EACpD,mCAAmC;EACnC,8BAA8B;EAC9B,sCAAsC;EACtC,2CAA2C;AAC7C;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,oCAAoC;AACtC;AACA;;EAEE,0BAA0B;EAC1B,YAAY;EACZ,UAAU;EACV,SAAS;EACT;2EACyE;AAC3E;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,8BAAsB;UAAtB,sBAAsB;AACxB;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,oCAAoC;AACtC;AACA;EACE,oCAAoC;AACtC;AACA;EACE,kBAAkB;EAClB,aAAa;AACf;AACA;EACE,aAAa;EACb;AACF;EACE,kBAAkB;AACpB;AACA,yDAAyD;AACzD,2BAA2B,6BAA6B,EAAE;AAC1D,uCAAuC,+BAA+B,EAAE","sourcesContent":["@import url(\"https://fonts.googleapis.com/css?family=Merriweather|Open Sans\");\n:root {\n  --commonBorderColour: grey;/* blue; /*darkslateblue*/\n  --commonTextBackgroundColour: black;\n  --commonTextColour: whitesmoke;\n  --commonHeaderFontFamily: Merriweather;\n  --commonFontFamily: 'Open Sans', sans-serif;\n}\n.commonHeaderFontFamily {\n  font-family: var(--commonHeaderFontFamily);\n}\n.commonFontFamily {\n  font-family: var(--commonFontFamily);\n}\nhtml,\nbody {\n  background-color: darkgrey;\n  color: black;\n  padding: 0;\n  margin: 0;\n  /* font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; */\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n.myHeadingFont {\n  font-family: var(--commonHeaderFontFamily);\n}\n.mySubHeadingFont {\n  font-family: var(--commonFontFamily);\n}\n.myCommonFont {\n  font-family: var(--commonFontFamily);\n}\n.mymaterialicon {\n  border-style: none;\n  outline: none;\n}\n.mymaterialicon:focus {\n  outline: none;\n  }\n.textaligncenter {\n  text-align: center;\n}\n/* Rules for using icons as white on a dark background. */\n.material-icons.md-light { color: rgba(255, 255, 255, 1); }\n.material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/getUrl.js":
/*!**************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/getUrl.js ***!
  \**************************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var e={91:function(e){e.exports=function(e,r){if(!r){r={}}e=e&&e.__esModule?e.default:e;if(typeof e!=="string"){return e}if(/^['"].*['"]$/.test(e)){e=e.slice(1,-1)}if(r.hash){e+=r.hash}if(/["'() \t\n]/.test(e)||r.needQuotes){return'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"')}return e}}};var r={};function __nccwpck_require__(t){if(r[t]){return r[t].exports}var _=r[t]={exports:{}};var n=true;try{e[t](_,_.exports,__nccwpck_require__);n=false}finally{if(n)delete r[t]}return _.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(91)}();

/***/ }),

/***/ "./public/BarbedWire.png":
/*!*******************************!*\
  !*** ./public/BarbedWire.png ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/BarbedWire.8e7c2a66b6d601dc1dbb3891e79cf6c3.png");

/***/ }),

/***/ "./public/BarbedWireRotated.png":
/*!**************************************!*\
  !*** ./public/BarbedWireRotated.png ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/BarbedWireRotated.66473fcd48baf80d8c93730120ba1021.png");

/***/ }),

/***/ "./public/Wall.jpg":
/*!*************************!*\
  !*** ./public/Wall.jpg ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Wall.47add20fa95f0bdaa7f373c17c60f790.jpg");

/***/ }),

/***/ "./public/playertitle.png":
/*!********************************!*\
  !*** ./public/playertitle.png ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/playertitle.9d6bc9777f25fc7a2b0836127a254402.png");

/***/ }),

/***/ "./public/prisonbars-square.png":
/*!**************************************!*\
  !*** ./public/prisonbars-square.png ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/prisonbars-square.2f920f0f937579bae549d52ad2b0821d.png");

/***/ }),

/***/ "./public/tile.png":
/*!*************************!*\
  !*** ./public/tile.png ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/tile.8c01713536c0d790f659bd5be3f3acac.png");

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \*********************************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!"), __webpack_exec__("./node_modules/next/dist/client/router.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL25leHQtc2VydmVyL2xpYi9hbXAtY29udGV4dC50cyIsIndlYnBhY2s6Ly9fTl9FLy4uL25leHQtc2VydmVyL2xpYi9hbXAudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9uZXh0LXNlcnZlci9saWIvaGVhZC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uLi9uZXh0LXNlcnZlci9saWIvc2lkZS1lZmZlY3QudHN4Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL19OX0UvIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9wYi9wcmlzb25icmVhay5jc3M/N2I4MiIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2kvd29yZGluZm8uY3NzP2EzZDkiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3dtL21hc3Rlcm1pbmQuY3NzPzNjNjYiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nbG9iYWxzLmNzcz9hNzIzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsuY3NzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy93aS93b3JkaW5mby5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3dtL21hc3Rlcm1pbmQuY3NzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9CYXJiZWRXaXJlLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0JhcmJlZFdpcmVSb3RhdGVkLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL1dhbGwuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvcGxheWVydGl0bGUucG5nIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvcHJpc29uYmFycy1zcXVhcmUucG5nIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvdGlsZS5wbmciLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2hlYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvanN4LWRldi1ydW50aW1lLmpzIl0sIm5hbWVzIjpbIkFtcFN0YXRlQ29udGV4dCIsIlJlYWN0IiwiYW1wRmlyc3QiLCJoeWJyaWQiLCJoYXNRdWVyeSIsImlzSW5BbXBNb2RlIiwiaW5BbXBNb2RlIiwiaGVhZCIsImNoaWxkIiwibGlzdCIsImZyYWdtZW50TGlzdCIsIk1FVEFUWVBFUyIsImtleXMiLCJ0YWdzIiwibWV0YVR5cGVzIiwibWV0YUNhdGVnb3JpZXMiLCJoIiwiaXNVbmlxdWUiLCJoYXNLZXkiLCJrZXkiLCJpIiwibGVuIiwibWV0YXR5cGUiLCJjYXRlZ29yeSIsImNhdGVnb3JpZXMiLCJoZWFkRWxlbWVudHMiLCJoZWFkRWxlbWVudENoaWxkcmVuIiwiaGVhZEVsZW1lbnQiLCJkZWZhdWx0SGVhZCIsInByb3BzIiwidW5pcXVlIiwiYyIsInByb2Nlc3MiLCJhbXBTdGF0ZSIsImhlYWRNYW5hZ2VyIiwiSGVhZE1hbmFnZXJDb250ZXh0IiwiSGVhZCIsImlzU2VydmVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJfaGFzSGVhZE1hbmFnZXIiLCJlbWl0Q2hhbmdlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsIk15QXBwIiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRU87O0FBQUEsTUFBTUEsZUFBbUMsZ0JBQUdDLDZCQUE1QyxFQUE0Q0EsQ0FBNUM7Ozs7QUFFUCxJQUFJLE1BQXVDO0FBQ3pDRCxpQkFBZSxDQUFmQTtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkQ7O0FBQ0E7Ozs7OztBQUVPOztBQUFBLHFCQUFxQjtBQUMxQkUsVUFBUSxHQURrQjtBQUUxQkMsUUFBTSxHQUZvQjtBQUcxQkMsVUFBUSxHQUhrQjtBQUFBLElBQXJCLElBSVU7QUFDZixTQUFPRixRQUFRLElBQUtDLE1BQU0sSUFBMUI7QUFHSzs7QUFBQSxrQkFBMkI7QUFBQTs7QUFDaEM7QUFDQSxTQUFPRSxXQUFXLENBQUNKLDBCQUFpQkQsWUFBcEMsZUFBbUJDLENBQUQsQ0FBbEI7QUFDRDs7R0FITSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hQOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTU87O0FBQUEscUJBQXFCSyxTQUFTLEdBQTlCLE9B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SyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxNQUFNLE9BQU8sYUFBYSxhQUFhLE9BQU8sT0FBTyxNQUFNLE9BQU8sS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLG1CQUFtQixXQUFXLFlBQVksYUFBYSxhQUFhLHVCQUF1QixNQUFNLG1CQUFtQixhQUFhLGFBQWEsYUFBYSxNQUFNLG1CQUFtQixXQUFXLE1BQU0sbUJBQW1CLGFBQWEsV0FBVyxNQUFNLG1CQUFtQixhQUFhLFdBQVcsTUFBTSxtQkFBbUIsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sbUJBQW1CLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxtQkFBbUIsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLG1CQUFtQixhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxtQkFBbUIsYUFBYSxNQUFNLG1CQUFtQixhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxtQkFBbUIsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxtQkFBbUIsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssT0FBTyxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEs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Q2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdCQUFnQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw4RkFBOEYsZUFBZTtBQUM3RztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUCxpREFBaUQ7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEhBQTBIO0FBQzFIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUVBQW1FOztBQUVuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsY0FBYztBQUN6QixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFD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QztBQUM3Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLGNBQWM7QUFDZCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ2xyQ2E7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0QsRUFBRSx1SkFBc0U7QUFDeEUiLCJmaWxlIjoic3RhdGljL2NodW5rcy9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgQW1wU3RhdGVDb250ZXh0OiBSZWFjdC5Db250ZXh0PGFueT4gPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBBbXBTdGF0ZUNvbnRleHQuZGlzcGxheU5hbWUgPSAnQW1wU3RhdGVDb250ZXh0J1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQW1wU3RhdGVDb250ZXh0IH0gZnJvbSAnLi9hbXAtY29udGV4dCdcblxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5BbXBNb2RlKHtcbiAgYW1wRmlyc3QgPSBmYWxzZSxcbiAgaHlicmlkID0gZmFsc2UsXG4gIGhhc1F1ZXJ5ID0gZmFsc2UsXG59ID0ge30pOiBib29sZWFuIHtcbiAgcmV0dXJuIGFtcEZpcnN0IHx8IChoeWJyaWQgJiYgaGFzUXVlcnkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbXAoKTogYm9vbGVhbiB7XG4gIC8vIERvbid0IGFzc2lnbiB0aGUgY29udGV4dCB2YWx1ZSB0byBhIHZhcmlhYmxlIHRvIHNhdmUgYnl0ZXNcbiAgcmV0dXJuIGlzSW5BbXBNb2RlKFJlYWN0LnVzZUNvbnRleHQoQW1wU3RhdGVDb250ZXh0KSlcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRWZmZWN0IGZyb20gJy4vc2lkZS1lZmZlY3QnXG5pbXBvcnQgeyBBbXBTdGF0ZUNvbnRleHQgfSBmcm9tICcuL2FtcC1jb250ZXh0J1xuaW1wb3J0IHsgSGVhZE1hbmFnZXJDb250ZXh0IH0gZnJvbSAnLi9oZWFkLW1hbmFnZXItY29udGV4dCdcbmltcG9ydCB7IGlzSW5BbXBNb2RlIH0gZnJvbSAnLi9hbXAnXG5cbnR5cGUgV2l0aEluQW1wTW9kZSA9IHtcbiAgaW5BbXBNb2RlPzogYm9vbGVhblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEhlYWQoaW5BbXBNb2RlID0gZmFsc2UpOiBKU1guRWxlbWVudFtdIHtcbiAgY29uc3QgaGVhZCA9IFs8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPl1cbiAgaWYgKCFpbkFtcE1vZGUpIHtcbiAgICBoZWFkLnB1c2goPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aFwiIC8+KVxuICB9XG4gIHJldHVybiBoZWFkXG59XG5cbmZ1bmN0aW9uIG9ubHlSZWFjdEVsZW1lbnQoXG4gIGxpc3Q6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PixcbiAgY2hpbGQ6IFJlYWN0LlJlYWN0Q2hpbGRcbik6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PiB7XG4gIC8vIFJlYWN0IGNoaWxkcmVuIGNhbiBiZSBcInN0cmluZ1wiIG9yIFwibnVtYmVyXCIgaW4gdGhpcyBjYXNlIHdlIGlnbm9yZSB0aGVtIGZvciBiYWNrd2FyZHMgY29tcGF0XG4gIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjaGlsZCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gbGlzdFxuICB9XG4gIC8vIEFkZHMgc3VwcG9ydCBmb3IgUmVhY3QuRnJhZ21lbnRcbiAgaWYgKGNoaWxkLnR5cGUgPT09IFJlYWN0LkZyYWdtZW50KSB7XG4gICAgcmV0dXJuIGxpc3QuY29uY2F0KFxuICAgICAgUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZC5wcm9wcy5jaGlsZHJlbikucmVkdWNlKFxuICAgICAgICAoXG4gICAgICAgICAgZnJhZ21lbnRMaXN0OiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4sXG4gICAgICAgICAgZnJhZ21lbnRDaGlsZDogUmVhY3QuUmVhY3RDaGlsZFxuICAgICAgICApOiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4gPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBmcmFnbWVudENoaWxkID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgICAgdHlwZW9mIGZyYWdtZW50Q2hpbGQgPT09ICdudW1iZXInXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJhZ21lbnRMaXN0XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmcmFnbWVudExpc3QuY29uY2F0KGZyYWdtZW50Q2hpbGQpXG4gICAgICAgIH0sXG4gICAgICAgIFtdXG4gICAgICApXG4gICAgKVxuICB9XG4gIHJldHVybiBsaXN0LmNvbmNhdChjaGlsZClcbn1cblxuY29uc3QgTUVUQVRZUEVTID0gWyduYW1lJywgJ2h0dHBFcXVpdicsICdjaGFyU2V0JywgJ2l0ZW1Qcm9wJ11cblxuLypcbiByZXR1cm5zIGEgZnVuY3Rpb24gZm9yIGZpbHRlcmluZyBoZWFkIGNoaWxkIGVsZW1lbnRzXG4gd2hpY2ggc2hvdWxkbid0IGJlIGR1cGxpY2F0ZWQsIGxpa2UgPHRpdGxlLz5cbiBBbHNvIGFkZHMgc3VwcG9ydCBmb3IgZGVkdXBsaWNhdGVkIGBrZXlgIHByb3BlcnRpZXNcbiovXG5mdW5jdGlvbiB1bmlxdWUoKSB7XG4gIGNvbnN0IGtleXMgPSBuZXcgU2V0KClcbiAgY29uc3QgdGFncyA9IG5ldyBTZXQoKVxuICBjb25zdCBtZXRhVHlwZXMgPSBuZXcgU2V0KClcbiAgY29uc3QgbWV0YUNhdGVnb3JpZXM6IHsgW21ldGF0eXBlOiBzdHJpbmddOiBTZXQ8c3RyaW5nPiB9ID0ge31cblxuICByZXR1cm4gKGg6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+KSA9PiB7XG4gICAgbGV0IGlzVW5pcXVlID0gdHJ1ZVxuICAgIGxldCBoYXNLZXkgPSBmYWxzZVxuXG4gICAgaWYgKGgua2V5ICYmIHR5cGVvZiBoLmtleSAhPT0gJ251bWJlcicgJiYgaC5rZXkuaW5kZXhPZignJCcpID4gMCkge1xuICAgICAgaGFzS2V5ID0gdHJ1ZVxuICAgICAgY29uc3Qga2V5ID0gaC5rZXkuc2xpY2UoaC5rZXkuaW5kZXhPZignJCcpICsgMSlcbiAgICAgIGlmIChrZXlzLmhhcyhrZXkpKSB7XG4gICAgICAgIGlzVW5pcXVlID0gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleXMuYWRkKGtleSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVmYXVsdC1jYXNlXG4gICAgc3dpdGNoIChoLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3RpdGxlJzpcbiAgICAgIGNhc2UgJ2Jhc2UnOlxuICAgICAgICBpZiAodGFncy5oYXMoaC50eXBlKSkge1xuICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YWdzLmFkZChoLnR5cGUpXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ21ldGEnOlxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gTUVUQVRZUEVTLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgbWV0YXR5cGUgPSBNRVRBVFlQRVNbaV1cbiAgICAgICAgICBpZiAoIWgucHJvcHMuaGFzT3duUHJvcGVydHkobWV0YXR5cGUpKSBjb250aW51ZVxuXG4gICAgICAgICAgaWYgKG1ldGF0eXBlID09PSAnY2hhclNldCcpIHtcbiAgICAgICAgICAgIGlmIChtZXRhVHlwZXMuaGFzKG1ldGF0eXBlKSkge1xuICAgICAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtZXRhVHlwZXMuYWRkKG1ldGF0eXBlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGgucHJvcHNbbWV0YXR5cGVdXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gbWV0YUNhdGVnb3JpZXNbbWV0YXR5cGVdIHx8IG5ldyBTZXQoKVxuICAgICAgICAgICAgaWYgKChtZXRhdHlwZSAhPT0gJ25hbWUnIHx8ICFoYXNLZXkpICYmIGNhdGVnb3JpZXMuaGFzKGNhdGVnb3J5KSkge1xuICAgICAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjYXRlZ29yaWVzLmFkZChjYXRlZ29yeSlcbiAgICAgICAgICAgICAgbWV0YUNhdGVnb3JpZXNbbWV0YXR5cGVdID0gY2F0ZWdvcmllc1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIHJldHVybiBpc1VuaXF1ZVxuICB9XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBoZWFkRWxlbWVudHMgTGlzdCBvZiBtdWx0aXBsZSA8SGVhZD4gaW5zdGFuY2VzXG4gKi9cbmZ1bmN0aW9uIHJlZHVjZUNvbXBvbmVudHMoXG4gIGhlYWRFbGVtZW50czogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+LFxuICBwcm9wczogV2l0aEluQW1wTW9kZVxuKSB7XG4gIHJldHVybiBoZWFkRWxlbWVudHNcbiAgICAucmVkdWNlKFxuICAgICAgKGxpc3Q6IFJlYWN0LlJlYWN0Q2hpbGRbXSwgaGVhZEVsZW1lbnQ6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+KSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRFbGVtZW50Q2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KFxuICAgICAgICAgIGhlYWRFbGVtZW50LnByb3BzLmNoaWxkcmVuXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIGxpc3QuY29uY2F0KGhlYWRFbGVtZW50Q2hpbGRyZW4pXG4gICAgICB9LFxuICAgICAgW11cbiAgICApXG4gICAgLnJlZHVjZShvbmx5UmVhY3RFbGVtZW50LCBbXSlcbiAgICAucmV2ZXJzZSgpXG4gICAgLmNvbmNhdChkZWZhdWx0SGVhZChwcm9wcy5pbkFtcE1vZGUpKVxuICAgIC5maWx0ZXIodW5pcXVlKCkpXG4gICAgLnJldmVyc2UoKVxuICAgIC5tYXAoKGM6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+LCBpOiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGMua2V5IHx8IGlcbiAgICAgIGlmIChcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcgJiZcbiAgICAgICAgcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTICYmXG4gICAgICAgICFwcm9wcy5pbkFtcE1vZGVcbiAgICAgICkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYy50eXBlID09PSAnbGluaycgJiZcbiAgICAgICAgICBjLnByb3BzWydocmVmJ10gJiZcbiAgICAgICAgICAvLyBUT0RPKHByYXRlZWtiaEApOiBSZXBsYWNlIHRoaXMgd2l0aCBjb25zdCBmcm9tIGBjb25zdGFudHNgIHdoZW4gdGhlIHRyZWUgc2hha2luZyB3b3Jrcy5cbiAgICAgICAgICBbXG4gICAgICAgICAgICAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MnLFxuICAgICAgICAgICAgJ2h0dHBzOi8vdXNlLnR5cGVraXQubmV0LycsXG4gICAgICAgICAgXS5zb21lKCh1cmwpID0+IGMucHJvcHNbJ2hyZWYnXS5zdGFydHNXaXRoKHVybCkpXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0geyAuLi4oYy5wcm9wcyB8fCB7fSkgfVxuICAgICAgICAgIG5ld1Byb3BzWydkYXRhLWhyZWYnXSA9IG5ld1Byb3BzWydocmVmJ11cbiAgICAgICAgICBuZXdQcm9wc1snaHJlZiddID0gdW5kZWZpbmVkXG5cbiAgICAgICAgICAvLyBBZGQgdGhpcyBhdHRyaWJ1dGUgdG8gbWFrZSBpdCBlYXN5IHRvIGlkZW50aWZ5IG9wdGltaXplZCB0YWdzXG4gICAgICAgICAgbmV3UHJvcHNbJ2RhdGEtb3B0aW1pemVkLWZvbnRzJ10gPSB0cnVlXG5cbiAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGMsIG5ld1Byb3BzKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGMsIHsga2V5IH0pXG4gICAgfSlcbn1cblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBpbmplY3RzIGVsZW1lbnRzIHRvIGA8aGVhZD5gIG9mIHlvdXIgcGFnZS5cbiAqIFRvIGF2b2lkIGR1cGxpY2F0ZWQgYHRhZ3NgIGluIGA8aGVhZD5gIHlvdSBjYW4gdXNlIHRoZSBga2V5YCBwcm9wZXJ0eSwgd2hpY2ggd2lsbCBtYWtlIHN1cmUgZXZlcnkgdGFnIGlzIG9ubHkgcmVuZGVyZWQgb25jZS5cbiAqL1xuZnVuY3Rpb24gSGVhZCh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gIGNvbnN0IGFtcFN0YXRlID0gdXNlQ29udGV4dChBbXBTdGF0ZUNvbnRleHQpXG4gIGNvbnN0IGhlYWRNYW5hZ2VyID0gdXNlQ29udGV4dChIZWFkTWFuYWdlckNvbnRleHQpXG4gIHJldHVybiAoXG4gICAgPEVmZmVjdFxuICAgICAgcmVkdWNlQ29tcG9uZW50c1RvU3RhdGU9e3JlZHVjZUNvbXBvbmVudHN9XG4gICAgICBoZWFkTWFuYWdlcj17aGVhZE1hbmFnZXJ9XG4gICAgICBpbkFtcE1vZGU9e2lzSW5BbXBNb2RlKGFtcFN0YXRlKX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9FZmZlY3Q+XG4gIClcbn1cblxuLy8gVE9ETzogUmVtb3ZlIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2VcbkhlYWQucmV3aW5kID0gKCkgPT4ge31cblxuZXhwb3J0IGRlZmF1bHQgSGVhZFxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXG5cbnR5cGUgU3RhdGUgPSBKU1guRWxlbWVudFtdIHwgdW5kZWZpbmVkXG5cbnR5cGUgU2lkZUVmZmVjdFByb3BzID0ge1xuICByZWR1Y2VDb21wb25lbnRzVG9TdGF0ZTogPFQ+KFxuICAgIGNvbXBvbmVudHM6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PixcbiAgICBwcm9wczogVFxuICApID0+IFN0YXRlXG4gIGhhbmRsZVN0YXRlQ2hhbmdlPzogKHN0YXRlOiBTdGF0ZSkgPT4gdm9pZFxuICBoZWFkTWFuYWdlcjogYW55XG4gIGluQW1wTW9kZT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQ8U2lkZUVmZmVjdFByb3BzPiB7XG4gIHByaXZhdGUgX2hhc0hlYWRNYW5hZ2VyOiBib29sZWFuXG5cbiAgZW1pdENoYW5nZSA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5faGFzSGVhZE1hbmFnZXIpIHtcbiAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIudXBkYXRlSGVhZChcbiAgICAgICAgdGhpcy5wcm9wcy5yZWR1Y2VDb21wb25lbnRzVG9TdGF0ZShcbiAgICAgICAgICBbLi4udGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzXSxcbiAgICAgICAgICB0aGlzLnByb3BzXG4gICAgICAgIClcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5faGFzSGVhZE1hbmFnZXIgPVxuICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlciAmJiB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXNcblxuICAgIGlmIChpc1NlcnZlciAmJiB0aGlzLl9oYXNIZWFkTWFuYWdlcikge1xuICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzLmFkZCh0aGlzKVxuICAgICAgdGhpcy5lbWl0Q2hhbmdlKClcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMuX2hhc0hlYWRNYW5hZ2VyKSB7XG4gICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXMuYWRkKHRoaXMpXG4gICAgfVxuICAgIHRoaXMuZW1pdENoYW5nZSgpXG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuZW1pdENoYW5nZSgpXG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuX2hhc0hlYWRNYW5hZ2VyKSB7XG4gICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXMuZGVsZXRlKHRoaXMpXG4gICAgfVxuICAgIHRoaXMuZW1pdENoYW5nZSgpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuIiwiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCAnLi93aS93b3JkaW5mby5jc3MnXHJcbmltcG9ydCAnLi93bS9tYXN0ZXJtaW5kLmNzcydcclxuaW1wb3J0ICcuL3BiL3ByaXNvbmJyZWFrLmNzcydcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHtDb21wb25lbnQscGFnZVByb3BzfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxsaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIiBcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjIvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayAvKiBJIGFkZGVkIG1hdGVyaWFsIGljb25zICovXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IFxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0zLjUuMS5zbGltLm1pbi5qc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3BvcHBlci5qc0AxLjE2LjEvZGlzdC91bWQvcG9wcGVyLm1pbi5qc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMi9qcy9ib290c3RyYXAubWluLmpzXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayAvKiBJIGFkZGVkIEdvb2dsZUZvbnRzIHVzaW5nIEZvbnQgUGFpcmluZ3MgbWVudGlvbmVkIGFzIHBvcHVsYXIgb24gVzNDU2Nob29scyAqL1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbiBTYW5zfE1lcnJpd2VhdGhlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIC8qIEkgYWRkZWQgdzMuY3NzICovXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lnczc2Nob29scy5jb20vdzNjc3MvNC93My5jc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7LyogPHNjcmlwdFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciBzb21lIHJlYXNvbiB0aGVzZSBmb250YXdlc29tZSBpY29ucyBhcmUgc29tZXRpbWlzaCBhYm91dCB3aGV0aGVyIHRvIHNob3cgdXAgb3Igbm90LlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEkgc3dpdGNoZWQgdG8gbWF0ZXJpYWwtaWNvbnMgaW5zdGVhZC5cclxuICAgICAgICAgICAgICAgICAgICAvLyBzcmM9XCJodHRwczovL2tpdC5mb250YXdlc29tZS5jb20vNzc1MTRkMjhhYS5qc1wiIC8vIFJvZFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNyYz1cImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS80N2U3YzVmYzIzLmpzXCIgLy8gQ2hyaXN0b3BoZXJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2tpdC5mb250YXdlc29tZS5jb20vVGlsZVJ1bm5lci5qc1wiIC8vIENocmlzdG9waGVyXHJcbiAgICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvX2FwcFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcInByaXZhdGUtbmV4dC1wYWdlcy9fYXBwLmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vcHJpc29uYnJlYWsuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL3ByaXNvbmJyZWFrLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vcHJpc29uYnJlYWsuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi93b3JkaW5mby5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vd29yZGluZm8uY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi93b3JkaW5mby5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL21hc3Rlcm1pbmQuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL21hc3Rlcm1pbmQuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9tYXN0ZXJtaW5kLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vZ2xvYmFscy5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vZ2xvYmFscy5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL2dsb2JhbHMuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO2NvbnN0IGlzT2xkSUU9ZnVuY3Rpb24gaXNPbGRJRSgpe2xldCBtZW1vO3JldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpe2lmKHR5cGVvZiBtZW1vPT09J3VuZGVmaW5lZCcpey8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4vLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4vLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4vLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbi8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xubWVtbz1Cb29sZWFuKHdpbmRvdyYmZG9jdW1lbnQmJmRvY3VtZW50LmFsbCYmIXdpbmRvdy5hdG9iKTt9cmV0dXJuIG1lbW87fTt9KCk7Y29uc3QgZ2V0VGFyZ2V0PWZ1bmN0aW9uIGdldFRhcmdldCgpe2NvbnN0IG1lbW89e307cmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCl7aWYodHlwZW9mIG1lbW9bdGFyZ2V0XT09PSd1bmRlZmluZWQnKXtsZXQgc3R5bGVUYXJnZXQ9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOy8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5pZih3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQmJnN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KXt0cnl7Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbi8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5zdHlsZVRhcmdldD1zdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDt9Y2F0Y2goZSl7Ly8gaXN0YW5idWwgaWdub3JlIG5leHRcbnN0eWxlVGFyZ2V0PW51bGw7fX1tZW1vW3RhcmdldF09c3R5bGVUYXJnZXQ7fXJldHVybiBtZW1vW3RhcmdldF07fTt9KCk7Y29uc3Qgc3R5bGVzSW5Eb209W107ZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcil7bGV0IHJlc3VsdD0tMTtmb3IobGV0IGk9MDtpPHN0eWxlc0luRG9tLmxlbmd0aDtpKyspe2lmKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXI9PT1pZGVudGlmaWVyKXtyZXN1bHQ9aTticmVhazt9fXJldHVybiByZXN1bHQ7fWZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LG9wdGlvbnMpe2NvbnN0IGlkQ291bnRNYXA9e307Y29uc3QgaWRlbnRpZmllcnM9W107Zm9yKGxldCBpPTA7aTxsaXN0Lmxlbmd0aDtpKyspe2NvbnN0IGl0ZW09bGlzdFtpXTtjb25zdCBpZD1vcHRpb25zLmJhc2U/aXRlbVswXStvcHRpb25zLmJhc2U6aXRlbVswXTtjb25zdCBjb3VudD1pZENvdW50TWFwW2lkXXx8MDtjb25zdCBpZGVudGlmaWVyPWlkKycgJytjb3VudC50b1N0cmluZygpO2lkQ291bnRNYXBbaWRdPWNvdW50KzE7Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7Y29uc3Qgb2JqPXtjc3M6aXRlbVsxXSxtZWRpYTppdGVtWzJdLHNvdXJjZU1hcDppdGVtWzNdfTtpZihpbmRleCE9PS0xKXtzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO3N0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7fWVsc2V7c3R5bGVzSW5Eb20ucHVzaCh7aWRlbnRpZmllcjppZGVudGlmaWVyLHVwZGF0ZXI6YWRkU3R5bGUob2JqLG9wdGlvbnMpLHJlZmVyZW5jZXM6MX0pO31pZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO31yZXR1cm4gaWRlbnRpZmllcnM7fWZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKXtjb25zdCBzdHlsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO2NvbnN0IGF0dHJpYnV0ZXM9b3B0aW9ucy5hdHRyaWJ1dGVzfHx7fTtpZih0eXBlb2YgYXR0cmlidXRlcy5ub25jZT09PSd1bmRlZmluZWQnKXtjb25zdCBub25jZT0vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbnR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyE9PSd1bmRlZmluZWQnP19fd2VicGFja19ub25jZV9fOm51bGw7aWYobm9uY2Upe2F0dHJpYnV0ZXMubm9uY2U9bm9uY2U7fX1PYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7c3R5bGUuc2V0QXR0cmlidXRlKGtleSxhdHRyaWJ1dGVzW2tleV0pO30pO2lmKHR5cGVvZiBvcHRpb25zLmluc2VydD09PSdmdW5jdGlvbicpe29wdGlvbnMuaW5zZXJ0KHN0eWxlKTt9ZWxzZXtjb25zdCB0YXJnZXQ9Z2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0fHwnaGVhZCcpO2lmKCF0YXJnZXQpe3Rocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7fXRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7fXJldHVybiBzdHlsZTt9ZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbmlmKHN0eWxlLnBhcmVudE5vZGU9PT1udWxsKXtyZXR1cm4gZmFsc2U7fXN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO30vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9jb25zdCByZXBsYWNlVGV4dD1mdW5jdGlvbiByZXBsYWNlVGV4dCgpe2NvbnN0IHRleHRTdG9yZT1bXTtyZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCxyZXBsYWNlbWVudCl7dGV4dFN0b3JlW2luZGV4XT1yZXBsYWNlbWVudDtyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTt9O30oKTtmdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLGluZGV4LHJlbW92ZSxvYmope2NvbnN0IGNzcz1yZW1vdmU/Jyc6b2JqLm1lZGlhPydAbWVkaWEgJytvYmoubWVkaWErJyB7JytvYmouY3NzKyd9JzpvYmouY3NzOy8vIEZvciBvbGQgSUVcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9pZihzdHlsZS5zdHlsZVNoZWV0KXtzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQ9cmVwbGFjZVRleHQoaW5kZXgsY3NzKTt9ZWxzZXtjb25zdCBjc3NOb2RlPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7Y29uc3QgY2hpbGROb2Rlcz1zdHlsZS5jaGlsZE5vZGVzO2lmKGNoaWxkTm9kZXNbaW5kZXhdKXtzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7fWlmKGNoaWxkTm9kZXMubGVuZ3RoKXtzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSxjaGlsZE5vZGVzW2luZGV4XSk7fWVsc2V7c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7fX19ZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSxvcHRpb25zLG9iail7bGV0IGNzcz1vYmouY3NzO2NvbnN0IG1lZGlhPW9iai5tZWRpYTtjb25zdCBzb3VyY2VNYXA9b2JqLnNvdXJjZU1hcDtpZihtZWRpYSl7c3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsbWVkaWEpO31lbHNle3N0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTt9aWYoc291cmNlTWFwJiZ0eXBlb2YgYnRvYSE9PSd1bmRlZmluZWQnKXtjc3MrPSdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcrYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSsnICovJzt9Ly8gRm9yIG9sZCBJRVxuLyogaXN0YW5idWwgaWdub3JlIGlmICAqL2lmKHN0eWxlLnN0eWxlU2hlZXQpe3N0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dD1jc3M7fWVsc2V7d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCl7c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7fXN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO319bGV0IHNpbmdsZXRvbj1udWxsO2xldCBzaW5nbGV0b25Db3VudGVyPTA7ZnVuY3Rpb24gYWRkU3R5bGUob2JqLG9wdGlvbnMpe2xldCBzdHlsZTtsZXQgdXBkYXRlO2xldCByZW1vdmU7aWYob3B0aW9ucy5zaW5nbGV0b24pe2NvbnN0IHN0eWxlSW5kZXg9c2luZ2xldG9uQ291bnRlcisrO3N0eWxlPXNpbmdsZXRvbnx8KHNpbmdsZXRvbj1pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO3VwZGF0ZT1hcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCxzdHlsZSxzdHlsZUluZGV4LGZhbHNlKTtyZW1vdmU9YXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsc3R5bGUsc3R5bGVJbmRleCx0cnVlKTt9ZWxzZXtzdHlsZT1pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7dXBkYXRlPWFwcGx5VG9UYWcuYmluZChudWxsLHN0eWxlLG9wdGlvbnMpO3JlbW92ZT1mdW5jdGlvbigpe3JlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7fTt9dXBkYXRlKG9iaik7cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iail7aWYobmV3T2JqKXtpZihuZXdPYmouY3NzPT09b2JqLmNzcyYmbmV3T2JqLm1lZGlhPT09b2JqLm1lZGlhJiZuZXdPYmouc291cmNlTWFwPT09b2JqLnNvdXJjZU1hcCl7cmV0dXJuO311cGRhdGUob2JqPW5ld09iaik7fWVsc2V7cmVtb3ZlKCk7fX07fW1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKGxpc3Qsb3B0aW9ucyl7b3B0aW9ucz1vcHRpb25zfHx7fTsvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbmlmKCFvcHRpb25zLnNpbmdsZXRvbiYmdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uIT09J2Jvb2xlYW4nKXtvcHRpb25zLnNpbmdsZXRvbj1pc09sZElFKCk7fWxpc3Q9bGlzdHx8W107bGV0IGxhc3RJZGVudGlmaWVycz1tb2R1bGVzVG9Eb20obGlzdCxvcHRpb25zKTtyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3Qpe25ld0xpc3Q9bmV3TGlzdHx8W107aWYoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpIT09J1tvYmplY3QgQXJyYXldJyl7cmV0dXJuO31mb3IobGV0IGk9MDtpPGxhc3RJZGVudGlmaWVycy5sZW5ndGg7aSsrKXtjb25zdCBpZGVudGlmaWVyPWxhc3RJZGVudGlmaWVyc1tpXTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO31jb25zdCBuZXdMYXN0SWRlbnRpZmllcnM9bW9kdWxlc1RvRG9tKG5ld0xpc3Qsb3B0aW9ucyk7Zm9yKGxldCBpPTA7aTxsYXN0SWRlbnRpZmllcnMubGVuZ3RoO2krKyl7Y29uc3QgaWRlbnRpZmllcj1sYXN0SWRlbnRpZmllcnNbaV07Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7aWYoc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXM9PT0wKXtzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcigpO3N0eWxlc0luRG9tLnNwbGljZShpbmRleCwxKTt9fWxhc3RJZGVudGlmaWVycz1uZXdMYXN0SWRlbnRpZmllcnM7fTt9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ezc2MjpmdW5jdGlvbihuKXtuLmV4cG9ydHM9ZnVuY3Rpb24obil7dmFyIHQ9W107dC50b1N0cmluZz1mdW5jdGlvbiB0b1N0cmluZygpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbih0KXt2YXIgcj1jc3NXaXRoTWFwcGluZ1RvU3RyaW5nKHQsbik7aWYodFsyXSl7cmV0dXJuXCJAbWVkaWEgXCIuY29uY2F0KHRbMl0sXCIge1wiKS5jb25jYXQocixcIn1cIil9cmV0dXJuIHJ9KS5qb2luKFwiXCIpfTt0Lmk9ZnVuY3Rpb24obixyLG8pe2lmKHR5cGVvZiBuPT09XCJzdHJpbmdcIil7bj1bW251bGwsbixcIlwiXV19dmFyIGU9e307aWYobyl7Zm9yKHZhciBhPTA7YTx0aGlzLmxlbmd0aDthKyspe3ZhciBjPXRoaXNbYV1bMF07aWYoYyE9bnVsbCl7ZVtjXT10cnVlfX19Zm9yKHZhciBpPTA7aTxuLmxlbmd0aDtpKyspe3ZhciB1PVtdLmNvbmNhdChuW2ldKTtpZihvJiZlW3VbMF1dKXtjb250aW51ZX1pZihyKXtpZighdVsyXSl7dVsyXT1yfWVsc2V7dVsyXT1cIlwiLmNvbmNhdChyLFwiIGFuZCBcIikuY29uY2F0KHVbMl0pfX10LnB1c2godSl9fTtyZXR1cm4gdH07ZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhuLHQpe3ZhciByPW5bMV18fFwiXCI7dmFyIG89blszXTtpZighbyl7cmV0dXJuIHJ9aWYodCYmdHlwZW9mIGJ0b2E9PT1cImZ1bmN0aW9uXCIpe3ZhciBlPXRvQ29tbWVudChvKTt2YXIgYT1vLnNvdXJjZXMubWFwKGZ1bmN0aW9uKG4pe3JldHVyblwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoby5zb3VyY2VSb290fHxcIlwiKS5jb25jYXQobixcIiAqL1wiKX0pO3JldHVybltyXS5jb25jYXQoYSkuY29uY2F0KFtlXSkuam9pbihcIlxcblwiKX1yZXR1cm5bcl0uam9pbihcIlxcblwiKX1mdW5jdGlvbiB0b0NvbW1lbnQobil7dmFyIHQ9YnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkobikpKSk7dmFyIHI9XCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQodCk7cmV0dXJuXCIvKiMgXCIuY29uY2F0KHIsXCIgKi9cIil9fX07dmFyIHQ9e307ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhyKXtpZih0W3JdKXtyZXR1cm4gdFtyXS5leHBvcnRzfXZhciBvPXRbcl09e2V4cG9ydHM6e319O3ZhciBlPXRydWU7dHJ5e25bcl0obyxvLmV4cG9ydHMsX19uY2N3cGNrX3JlcXVpcmVfXyk7ZT1mYWxzZX1maW5hbGx5e2lmKGUpZGVsZXRlIHRbcl19cmV0dXJuIG8uZXhwb3J0c31fX25jY3dwY2tfcmVxdWlyZV9fLmFiPV9fZGlybmFtZStcIi9cIjtyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg3NjIpfSgpOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uLy4uL3B1YmxpYy9XYWxsLmpwZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fIGZyb20gXCIuLi8uLi9wdWJsaWMvcGxheWVydGl0bGUucG5nXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gZnJvbSBcIi4uLy4uL3B1YmxpYy90aWxlLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fIGZyb20gXCIuLi8uLi9wdWJsaWMvQmFyYmVkV2lyZVJvdGF0ZWQucG5nXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gZnJvbSBcIi4uLy4uL3B1YmxpYy9CYXJiZWRXaXJlLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fIGZyb20gXCIuLi8uLi9wdWJsaWMvcHJpc29uYmFycy1zcXVhcmUucG5nXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAgIC0tc3F1YXJlU2lkZTogNDBweDtcXHJcXG4gICAgLS1jZWxsQmxvY2tTaWRlOiA0MHB4O1xcclxcbiAgICAtLWNlbGxCbG9ja1NlbGVjdGVkSGVpZ2h0OiA0MnB4O1xcclxcbiAgICAtLXNlbGVjdGVkQ29sb3I6IGhzbCgyMDcsIDkwJSwgNTYlKTtcXHJcXG4gICAgLS1sb2JieUZvbnRTaXplOiAyMHB4O1xcclxcbiAgICAtLXRpbGVCYWNrZ3JvdW5kQ29sb3VyOiBvcmFuZ2VyZWQ7XFxyXFxuICAgIC0tcHJpc29uZXJzVGlsZUNvbG91cjogd2hpdGVzbW9rZTtcXHJcXG4gICAgLS1ndWFyZHNUaWxlQ29sb3VyOiBibGFjaztcXHJcXG59XFxyXFxuLnRvcEJhckhlaWdodCB7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG59XFxyXFxuLnRvcEJhckNvcm5lciB7XFxyXFxuICAgIHdpZHRoOiAyMCU7XFxyXFxuICAgIGhlaWdodDogNTAlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcbi5mdWxsV2lkdGgge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLmZvcm1hbGluZm8ge1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tY29tbW9uRm9udEZhbWlseSk7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxufVxcclxcbi5wcmlzb25icmVhayB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcbi5wYkdhbWVpZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbW1vblRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbW1vblRleHRDb2xvdXIpO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMCAwIDNweCAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxufVxcclxcbi5wYnRpdGxlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gICAgZm9udC1zaXplOiAyLjhlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogTWVycml3ZWF0aGVyO1xcclxcbiAgICAvKiBmb250LXN0eWxlOiBpdGFsaWM7ICovXFxyXFxuICAgIGNvbG9yOmJsYWNrO1xcclxcbn1cXHJcXG4ucGJob21lbGluayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbW1vblRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbW1vblRleHRDb2xvdXIpO1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbn1cXHJcXG4ucGJQbGF5ZXJPdXRlclNlY3Rpb24ge1xcclxcbiAgICAvKiBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrOyAqL1xcclxcbiAgICAvKiB3aWR0aDogMzYwcHg7ICovXFxyXFxuICAgIHBhZGRpbmctdG9wOiAzcHg7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vLi4vcHVibGljL1dhbGwuanBnXFxcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICovXFxyXFxufVxcclxcbi8qIC5wYlBsYXllck91dGVyU2VjdGlvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vLi4vcHVibGljL0VzY2FwZWUucG5nXFxcIik7XFxyXFxuICAgIG9wYWNpdHk6IDc1JTtcXHJcXG59ICovXFxyXFxuLnBiUGxheWVySW5uZXJTZWN0aW9uIHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxufVxcclxcbi5wYlBsYXllclRpdGxlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkZvbnRGYW1pbHkpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxufVxcclxcbi5wYlBsYXllclRpdGxlLlAge1xcclxcbiAgICBmb250LXNpemU6IGluaGVyaXQ7ICAgXFxyXFxufVxcclxcbi5wYlBsYXllclRpdGxlLkcge1xcclxcbiAgICBmb250LXNpemU6IGluaGVyaXQ7ICAgIFxcclxcbn1cXHJcXG4ucGJTcXVhcmVPdXRlciB7IC8qIFRoaW4gYmxhY2sgYm9yZGVyIGFyb3VuZCBlYWNoIGJvYXJkIHNxdWFyZSAqL1xcclxcbiAgICBib3JkZXI6IHNvbGlkO1xcclxcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XFxyXFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIHBhZGRpbmc6IDBweDsgLyogU28gbm90aGluZyBhcHBlYXJzIGJldHdlZW4gdGhlIHNxdWFyZXMgLSBrZWVwIHRoZW0gZmx1c2ggKi9cXHJcXG59XFxyXFxuLnBiU3F1YXJlSW5uZXIgeyAvKiBDb21tb24gYm9hcmQgc3F1YXJlIHByb3BlcnRpZXMgKi9cXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1zcXVhcmVTaWRlKTtcXHJcXG4gICAgd2lkdGg6IHZhcigtLXNxdWFyZVNpZGUpO1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbi5wYlNxdWFyZUlubmVyOmZvY3VzIHsgLyogTm8gb3V0bGluZSB3aGVuIGluIGZvY3VzICovXFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbi5wYlNxdWFyZUlubmVyLnN0eWxlMSB7IC8qIEFsdGVybmF0aW5nIHNxdWFyZSBzdHlsZSAxICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbi5wYlNxdWFyZUlubmVyLnN0eWxlMiB7IC8qIEFsdGVybmF0aW5nIHNxdWFyZSBzdHlsZSAyICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xcclxcbiAgICBjb2xvcjogZGFya2dyZXk7XFxyXFxufVxcclxcbi5wYlNxdWFyZUlubmVyLkNlbnRlclNxdWFyZSB7IC8qIENlbnRyZSBzcXVhcmUgKi9cXHJcXG4gICAgcGFkZGluZy10b3A6IDNweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21tb25UZXh0QmFja2dyb3VuZENvbG91cik7XFxyXFxuICAgIGNvbG9yOiBjb3Juc2lsaztcXHJcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbn1cXHJcXG4ucGJTcXVhcmVJbm5lci5Fc2NhcGVIYXRjaCB7IC8qIEVzY2FwZSBoYXRjaCBzcXVhcmUgKi9cXHJcXG4gICAgcGFkZGluZy10b3A6IDNweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLnBiU3F1YXJlSW5uZXIuUGxheWVyVGlsZSB7IC8qIFBsYXllciB0aWxlIGltYWdlIG9uIHRoZSBzcXVhcmUgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZUJhY2tncm91bmRDb2xvdXIpO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5wYlNxdWFyZVRpbGVUZXh0IHsgLyogVGhlIHRpbGUgcGxheWVkIG9uIHRoZSBib2FyZCAqL1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgXFxyXFxuICAgIGJvdHRvbTogM3B4O1xcclxcbiAgICBsZWZ0OiAxMnB4OyBcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAgZ3JleTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXHJcXG59XFxyXFxuLnBiU3F1YXJlVGlsZVRleHQuUCB7IC8qIFByaXNvbmVycyB0aWxlIGNvbG9yICovXFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmlzb25lcnNUaWxlQ29sb3VyKTtcXHJcXG59XFxyXFxuLnBiU3F1YXJlVGlsZVRleHQuRyB7IC8qIEd1YXJkcyB0aWxlIGNvbG9yICovXFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ndWFyZHNUaWxlQ29sb3VyKTtcXHJcXG59XFxyXFxuLnU6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcInVcXFwiO1xcclxcbiAgICBmb250LXNpemU6IHNtYWxsO1xcclxcbn1cXHJcXG4ucGJTcXVhcmVJbm5lci5SaWdodEFycm93IHsgLyogUmlnaHQgYXJyb3cgd29yZCBkaXJlY3Rpb24gaW5kaWNhdG9yICovXFxyXFxuICAgIHBhZGRpbmc6IDAlO1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICAgIGNvbG9yOiBjeWFuO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5wYlNxdWFyZUlubmVyLkRvd25BcnJvdyB7IC8qIERvd24gYXJyb3cgd29yZCBkaXJlY3Rpb24gaW5kaWNhdG9yICovXFxyXFxuICAgIHBhZGRpbmc6IDAlO1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICAgIGNvbG9yOiBjeWFuO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5wYlJvdyB7XFxyXFxuICAgIHBhZGRpbmc6IDAlO1xcclxcbn1cXHJcXG4ucGJCb2FyZFBsdXNVbmRlcmJvYXJkIHtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9wdWJsaWMvV2FsbC5qcGcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyAqL1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcbi5wYkJvYXJkIHtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG59XFxyXFxuLnBiQm9hcmRDb2x1bW5IZWFkZXJSb3cge1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tY29tbW9uSGVhZGVyRm9udEZhbWlseSk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbn1cXHJcXG4ucGJCb2FyZENvbHVtbkhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLnBiQm9hcmRSb3dIZWFkZXIge1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tY29tbW9uSGVhZGVyRm9udEZhbWlseSk7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4ucGJCb2FyZEhlYWRlclRvcExlZnQge1xcclxcbiAgICBtaW4td2lkdGg6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuLnBiQm9hcmRIZWFkZXJUb3BSaWdodCB7XFxyXFxuICAgIG1pbi13aWR0aDogdmFyKC0tY2VsbEJsb2NrU2lkZSk7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG4ucGJCb2FyZEhlYWRlckJvdHRvbUxlZnQge1xcclxcbiAgICBtaW4td2lkdGg6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuLnBiQm9hcmRIZWFkZXJCb3R0b21SaWdodCB7XFxyXFxuICAgIG1pbi13aWR0aDogdmFyKC0tY2VsbEJsb2NrU2lkZSk7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG4ucGJVbmRlcmJvYXJkIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21tb25UZXh0QmFja2dyb3VuZENvbG91cik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb21tb25UZXh0Q29sb3VyKTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG4ucGJUaWxlQW5kTW92ZXNPdXRlciB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIG1heC13aWR0aDogMjUwcHg7XFxyXFxufVxcclxcbi5wYlRpbGVwb29sIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQgc29saWQgbm9uZSBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21tb25UZXh0QmFja2dyb3VuZENvbG91cik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb21tb25UZXh0Q29sb3VyKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXHJcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG4ucGJUaWxlcG9vbERpdmlkZXIge1xcclxcbiAgICB3aWR0aDogMnB4O1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG59XFxyXFxuLnBiVGlsZXBvb2xEaXZpZGVyOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXHJcXG59XFxyXFxuLnBiVGlsZXBvb2xUaXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTUwJTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogZG90dGVkO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxufVxcclxcbi5wYlRpbGVwb29sVGlsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XFxyXFxufVxcclxcbi5wYk1vdmVzIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tbW9uVGV4dEJhY2tncm91bmRDb2xvdXIpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29tbW9uVGV4dENvbG91cik7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XFxyXFxufVxcclxcbi5wYk1vdmVzVGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDE1MCU7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IGRvdHRlZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbn1cXHJcXG4ucGJNb3Zlc1Njcm9sbGFibGUge1xcclxcbiAgICBtYXgtaGVpZ2h0OiA1NTBweDtcXHJcXG4gICAgLyogbWF4LXdpZHRoOiAyNTBweDsgKi9cXHJcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcXHJcXG59XFxyXFxuLnBiTW92ZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XFxyXFxufVxcclxcbi5wYk1vdmUuYnkge1xcclxcbiAgICBjb2xvcjogeWVsbG93O1xcclxcbn1cXHJcXG4ucGJNb3ZlLlNXQVAge1xcclxcbiAgICBjb2xvcjogY3lhbjtcXHJcXG59XFxyXFxuLnBiTW92ZS5TV0FQOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJTd2FwIHRpbGVzXFxcIjtcXHJcXG59XFxyXFxuLnBiTW92ZS5QQVNTIHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuLnBiTW92ZS5QQVNTOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJQYXNzIHR1cm5cXFwiO1xcclxcbn1cXHJcXG4ucGJNb3ZlLlBMQVkge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29tbW9uVGV4dENvbG91cik7XFxyXFxufVxcclxcbi5wYlRpbGVyYWNrIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuLnBiVGlsZXJhY2tBcnJvdyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcGM7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcbi5wYlRpbGVPblJhY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlQmFja2dyb3VuZENvbG91cik7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1zcXVhcmVTaWRlKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1zcXVhcmVTaWRlKTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4ucGJUaWxlT25SYWNrLlVuc2VsZWN0ZWQge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5wYlRpbGVPblJhY2suU2VsZWN0ZWQge1xcclxcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xcclxcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XFxyXFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcXHJcXG4gICAgbWFyZ2luOiA0cHg7XFxyXFxufVxcclxcbi5wYlRpbGVPblJhY2tUZXh0IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgIFxcclxcbiAgICBib3R0b206IDJweDtcXHJcXG4gICAgbGVmdDogMTFweDsgXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggIGdyZXk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxyXFxufVxcclxcbi5wYlRpbGVPblJhY2suUCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmlzb25lcnNUaWxlQ29sb3VyKTtcXHJcXG59XFxyXFxuLnBiVGlsZU9uUmFjay5HIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWd1YXJkc1RpbGVDb2xvdXIpO1xcclxcbn1cXHJcXG4ucGJSZXNjdWVzTWFkZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbW1vblRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcXHJcXG4gICAgY29sb3I6dmFyKC0tY29tbW9uVGV4dENvbG91cik7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tY29tbW9uRm9udEZhbWlseSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuLnBiQWN0aW9uQnV0dG9uRGl2IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcXHJcXG59XFxyXFxuLnBiQWN0aW9uQnV0dG9uIHtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9wdWJsaWMvYWN0aW9uQnV0dG9uLnBuZycpOyAqL1xcclxcbiAgICBwYWRkaW5nOiAycHggMnB4IDJweCAycHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMHB4O1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbW1vblRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbW1vblRleHRDb2xvdXIpO1xcclxcbiAgICBmb250LXN0eWxlOiBib2xkZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25Gb250RmFtaWx5KTtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICB3b3JkLXNwYWNpbmc6IDNweDtcXHJcXG59XFxyXFxuLnBiQWN0aW9uQnV0dG9uVGV4dCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXHJcXG59XFxyXFxuLnBiQWN0aW9uQnV0dG9uU2V2ZXJlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5wYkFjdGlvbkJ1dHRvblNldmVyZVRleHQge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbi5wYkFjdGlvbkJ1dHRvblNldmVyZVRleHQyIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlOyAvKiBUaGlzIG1ha2VzIGl0IGdvIG9uIHRoZSBuZXh0IGxpbmUgKi9cXHJcXG4gICAgbWFyZ2luOiBhdXRvOyAvKiBUaGlzIGlzIHRoZSBvbmx5IHdheSBJIGNvdWxkIGNlbnRyZSBpdCEgKi9cXHJcXG59XFxyXFxuLnBiTG9iYnlSYWNrU2l6ZVByb21wdCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25IZWFkZXJGb250RmFtaWx5KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi5wYkxvYmJ5UmFja1NpemVQcm9tcHQ6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIkNlbGwgQmxvY2tcXFwiO1xcclxcbn1cXHJcXG4ucGJMb2JieVJhY2tTaXplUHJvbXB0OjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCI6XFxcIjtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XFxyXFxufVxcclxcbi5wYkxvYmJ5UmFja1NpemUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgd2lkdGg6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6MjBweDtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4ucGJMb2JieVJhY2tTaXplU2VsZWN0ZWQge1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uLy4uL3B1YmxpYy9wcmlzb25iYXJzLXNxdWFyZS5wbmdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiB2YXIoLS1jZWxsQmxvY2tTaWRlKTsgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0ZWRDb2xvcik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGxCbG9ja1NlbGVjdGVkSGVpZ2h0KTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OjIwcHg7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcclxcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0Z3JleTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG59XFxyXFxuLnBiTG9iYnlSYWNrU2l6ZVNlbGVjdGVkOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuLnBiTG9iYnlDZWxsQmxvY2tJbmZvIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkZvbnRGYW1pbHkpO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbn1cXHJcXG4ucGJDaGF0IHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGxlZnQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZSBzb2xpZCBub25lIHNvbGlkO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcbi5wYkNoYXRUYWJsZSB7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG59XFxyXFxuLnBiQ2hhdEZyb20ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxufVxcclxcbi5wYkNoYXRGcm9tOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiPlxcXCI7XFxyXFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxyXFxufVxcclxcbi5wYkNoYXRGcm9tOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCI6XFxcIjtcXHJcXG4gICAgY29sb3I6IHllbGxvdztcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXB4O1xcclxcbn1cXHJcXG4ucGJDaGF0TXNnIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgY29sb3I6d2hpdGVzbW9rZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIHBhZGRpbmctdG9wOjJweDtcXHJcXG59XFxyXFxuLnBiQ2hhdElucHV0IHtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBjb2xvcjp3aGl0ZXNtb2tlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLnBiQ2hhdElucHV0RW1wdHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LWJsb2NrLXNpemU6IDMwcHg7XFxyXFxuICAgIGN1cnNvcjogdGV4dDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3BhZ2VzL3BiL3ByaXNvbmJyZWFrLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsK0JBQStCO0lBQy9CLG1DQUFtQztJQUNuQyxxQkFBcUI7SUFDckIsaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx5REFBOEM7SUFDOUMsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxtREFBbUQ7SUFDbkQsOEJBQThCO0lBQzlCLHVDQUF1QztJQUN2Qyx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksbURBQW1EO0lBQ25ELDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsdUNBQXVDO0lBQ3ZDLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJOztrQ0FFOEI7SUFDOUIsa0JBQWtC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O0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiwyQ0FBMkM7SUFDM0MsV0FBVztBQUNmO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1zcXVhcmVTaWRlOiA0MHB4O1xcclxcbiAgICAtLWNlbGxCbG9ja1NpZGU6IDQwcHg7XFxyXFxuICAgIC0tY2VsbEJsb2NrU2VsZWN0ZWRIZWlnaHQ6IDQycHg7XFxyXFxuICAgIC0tc2VsZWN0ZWRDb2xvcjogaHNsKDIwNywgOTAlLCA1NiUpO1xcclxcbiAgICAtLWxvYmJ5Rm9udFNpemU6IDIwcHg7XFxyXFxuICAgIC0tdGlsZUJhY2tncm91bmRDb2xvdXI6IG9yYW5nZXJlZDtcXHJcXG4gICAgLS1wcmlzb25lcnNUaWxlQ29sb3VyOiB3aGl0ZXNtb2tlO1xcclxcbiAgICAtLWd1YXJkc1RpbGVDb2xvdXI6IGJsYWNrO1xcclxcbn1cXHJcXG4udG9wQmFySGVpZ2h0IHtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbn1cXHJcXG4udG9wQmFyQ29ybmVyIHtcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MCU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuLmZ1bGxXaWR0aCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4uZm9ybWFsaW5mbyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25Gb250RmFtaWx5KTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG59XFxyXFxuLnByaXNvbmJyZWFrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi8uLi9wdWJsaWMvV2FsbC5qcGdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuLnBiR2FtZWlkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tbW9uVGV4dEJhY2tncm91bmRDb2xvdXIpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29tbW9uVGV4dENvbG91cik7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgM3B4IDNweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG59XFxyXFxuLnBidGl0bGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgICBmb250LXNpemU6IDIuOGVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNZXJyaXdlYXRoZXI7XFxyXFxuICAgIC8qIGZvbnQtc3R5bGU6IGl0YWxpYzsgKi9cXHJcXG4gICAgY29sb3I6YmxhY2s7XFxyXFxufVxcclxcbi5wYmhvbWVsaW5rIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tbW9uVGV4dEJhY2tncm91bmRDb2xvdXIpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29tbW9uVGV4dENvbG91cik7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxufVxcclxcbi5wYlBsYXllck91dGVyU2VjdGlvbiB7XFxyXFxuICAgIC8qIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7ICovXFxyXFxuICAgIC8qIHdpZHRoOiAzNjBweDsgKi9cXHJcXG4gICAgcGFkZGluZy10b3A6IDNweDtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi8uLi9wdWJsaWMvV2FsbC5qcGdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cXHJcXG59XFxyXFxuLyogLnBiUGxheWVyT3V0ZXJTZWN0aW9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi8uLi9wdWJsaWMvRXNjYXBlZS5wbmdcXFwiKTtcXHJcXG4gICAgb3BhY2l0eTogNzUlO1xcclxcbn0gKi9cXHJcXG4ucGJQbGF5ZXJJbm5lclNlY3Rpb24ge1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG59XFxyXFxuLnBiUGxheWVyVGl0bGUge1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tY29tbW9uRm9udEZhbWlseSk7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL3BsYXllcnRpdGxlLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxufVxcclxcbi5wYlBsYXllclRpdGxlLlAge1xcclxcbiAgICBmb250LXNpemU6IGluaGVyaXQ7ICAgXFxyXFxufVxcclxcbi5wYlBsYXllclRpdGxlLkcge1xcclxcbiAgICBmb250LXNpemU6IGluaGVyaXQ7ICAgIFxcclxcbn1cXHJcXG4ucGJTcXVhcmVPdXRlciB7IC8qIFRoaW4gYmxhY2sgYm9yZGVyIGFyb3VuZCBlYWNoIGJvYXJkIHNxdWFyZSAqL1xcclxcbiAgICBib3JkZXI6IHNvbGlkO1xcclxcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XFxyXFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIHBhZGRpbmc6IDBweDsgLyogU28gbm90aGluZyBhcHBlYXJzIGJldHdlZW4gdGhlIHNxdWFyZXMgLSBrZWVwIHRoZW0gZmx1c2ggKi9cXHJcXG59XFxyXFxuLnBiU3F1YXJlSW5uZXIgeyAvKiBDb21tb24gYm9hcmQgc3F1YXJlIHByb3BlcnRpZXMgKi9cXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1zcXVhcmVTaWRlKTtcXHJcXG4gICAgd2lkdGg6IHZhcigtLXNxdWFyZVNpZGUpO1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbi5wYlNxdWFyZUlubmVyOmZvY3VzIHsgLyogTm8gb3V0bGluZSB3aGVuIGluIGZvY3VzICovXFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbi5wYlNxdWFyZUlubmVyLnN0eWxlMSB7IC8qIEFsdGVybmF0aW5nIHNxdWFyZSBzdHlsZSAxICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbi5wYlNxdWFyZUlubmVyLnN0eWxlMiB7IC8qIEFsdGVybmF0aW5nIHNxdWFyZSBzdHlsZSAyICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xcclxcbiAgICBjb2xvcjogZGFya2dyZXk7XFxyXFxufVxcclxcbi5wYlNxdWFyZUlubmVyLkNlbnRlclNxdWFyZSB7IC8qIENlbnRyZSBzcXVhcmUgKi9cXHJcXG4gICAgcGFkZGluZy10b3A6IDNweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21tb25UZXh0QmFja2dyb3VuZENvbG91cik7XFxyXFxuICAgIGNvbG9yOiBjb3Juc2lsaztcXHJcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbn1cXHJcXG4ucGJTcXVhcmVJbm5lci5Fc2NhcGVIYXRjaCB7IC8qIEVzY2FwZSBoYXRjaCBzcXVhcmUgKi9cXHJcXG4gICAgcGFkZGluZy10b3A6IDNweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLnBiU3F1YXJlSW5uZXIuUGxheWVyVGlsZSB7IC8qIFBsYXllciB0aWxlIGltYWdlIG9uIHRoZSBzcXVhcmUgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9wdWJsaWMvdGlsZS5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZUJhY2tncm91bmRDb2xvdXIpO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5wYlNxdWFyZVRpbGVUZXh0IHsgLyogVGhlIHRpbGUgcGxheWVkIG9uIHRoZSBib2FyZCAqL1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgXFxyXFxuICAgIGJvdHRvbTogM3B4O1xcclxcbiAgICBsZWZ0OiAxMnB4OyBcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAgZ3JleTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXHJcXG59XFxyXFxuLnBiU3F1YXJlVGlsZVRleHQuUCB7IC8qIFByaXNvbmVycyB0aWxlIGNvbG9yICovXFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmlzb25lcnNUaWxlQ29sb3VyKTtcXHJcXG59XFxyXFxuLnBiU3F1YXJlVGlsZVRleHQuRyB7IC8qIEd1YXJkcyB0aWxlIGNvbG9yICovXFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ndWFyZHNUaWxlQ29sb3VyKTtcXHJcXG59XFxyXFxuLnU6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcInVcXFwiO1xcclxcbiAgICBmb250LXNpemU6IHNtYWxsO1xcclxcbn1cXHJcXG4ucGJTcXVhcmVJbm5lci5SaWdodEFycm93IHsgLyogUmlnaHQgYXJyb3cgd29yZCBkaXJlY3Rpb24gaW5kaWNhdG9yICovXFxyXFxuICAgIHBhZGRpbmc6IDAlO1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICAgIGNvbG9yOiBjeWFuO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5wYlNxdWFyZUlubmVyLkRvd25BcnJvdyB7IC8qIERvd24gYXJyb3cgd29yZCBkaXJlY3Rpb24gaW5kaWNhdG9yICovXFxyXFxuICAgIHBhZGRpbmc6IDAlO1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICAgIGNvbG9yOiBjeWFuO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5wYlJvdyB7XFxyXFxuICAgIHBhZGRpbmc6IDAlO1xcclxcbn1cXHJcXG4ucGJCb2FyZFBsdXNVbmRlcmJvYXJkIHtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9wdWJsaWMvV2FsbC5qcGcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyAqL1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcbi5wYkJvYXJkIHtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG59XFxyXFxuLnBiQm9hcmRDb2x1bW5IZWFkZXJSb3cge1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tY29tbW9uSGVhZGVyRm9udEZhbWlseSk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbn1cXHJcXG4ucGJCb2FyZENvbHVtbkhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL0JhcmJlZFdpcmVSb3RhdGVkLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5wYkJvYXJkUm93SGVhZGVyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkhlYWRlckZvbnRGYW1pbHkpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3B1YmxpYy9CYXJiZWRXaXJlLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLnBiQm9hcmRIZWFkZXJUb3BMZWZ0IHtcXHJcXG4gICAgbWluLXdpZHRoOiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgbWluLWhlaWdodDogdmFyKC0tY2VsbEJsb2NrU2lkZSk7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL0JhcmJlZFdpcmVSb3RhdGVkLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG4ucGJCb2FyZEhlYWRlclRvcFJpZ2h0IHtcXHJcXG4gICAgbWluLXdpZHRoOiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgbWluLWhlaWdodDogdmFyKC0tY2VsbEJsb2NrU2lkZSk7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL0JhcmJlZFdpcmUucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcbi5wYkJvYXJkSGVhZGVyQm90dG9tTGVmdCB7XFxyXFxuICAgIG1pbi13aWR0aDogdmFyKC0tY2VsbEJsb2NrU2lkZSk7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3B1YmxpYy9CYXJiZWRXaXJlLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG4ucGJCb2FyZEhlYWRlckJvdHRvbVJpZ2h0IHtcXHJcXG4gICAgbWluLXdpZHRoOiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgbWluLWhlaWdodDogdmFyKC0tY2VsbEJsb2NrU2lkZSk7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL0JhcmJlZFdpcmVSb3RhdGVkLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG4ucGJVbmRlcmJvYXJkIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21tb25UZXh0QmFja2dyb3VuZENvbG91cik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb21tb25UZXh0Q29sb3VyKTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG4ucGJUaWxlQW5kTW92ZXNPdXRlciB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIG1heC13aWR0aDogMjUwcHg7XFxyXFxufVxcclxcbi5wYlRpbGVwb29sIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQgc29saWQgbm9uZSBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21tb25UZXh0QmFja2dyb3VuZENvbG91cik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb21tb25UZXh0Q29sb3VyKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXHJcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG4ucGJUaWxlcG9vbERpdmlkZXIge1xcclxcbiAgICB3aWR0aDogMnB4O1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG59XFxyXFxuLnBiVGlsZXBvb2xEaXZpZGVyOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXHJcXG59XFxyXFxuLnBiVGlsZXBvb2xUaXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTUwJTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogZG90dGVkO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxufVxcclxcbi5wYlRpbGVwb29sVGlsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XFxyXFxufVxcclxcbi5wYk1vdmVzIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tbW9uVGV4dEJhY2tncm91bmRDb2xvdXIpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29tbW9uVGV4dENvbG91cik7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XFxyXFxufVxcclxcbi5wYk1vdmVzVGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDE1MCU7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IGRvdHRlZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbn1cXHJcXG4ucGJNb3Zlc1Njcm9sbGFibGUge1xcclxcbiAgICBtYXgtaGVpZ2h0OiA1NTBweDtcXHJcXG4gICAgLyogbWF4LXdpZHRoOiAyNTBweDsgKi9cXHJcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcXHJcXG59XFxyXFxuLnBiTW92ZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XFxyXFxufVxcclxcbi5wYk1vdmUuYnkge1xcclxcbiAgICBjb2xvcjogeWVsbG93O1xcclxcbn1cXHJcXG4ucGJNb3ZlLlNXQVAge1xcclxcbiAgICBjb2xvcjogY3lhbjtcXHJcXG59XFxyXFxuLnBiTW92ZS5TV0FQOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJTd2FwIHRpbGVzXFxcIjtcXHJcXG59XFxyXFxuLnBiTW92ZS5QQVNTIHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuLnBiTW92ZS5QQVNTOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJQYXNzIHR1cm5cXFwiO1xcclxcbn1cXHJcXG4ucGJNb3ZlLlBMQVkge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29tbW9uVGV4dENvbG91cik7XFxyXFxufVxcclxcbi5wYlRpbGVyYWNrIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuLnBiVGlsZXJhY2tBcnJvdyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcGM7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcbi5wYlRpbGVPblJhY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3B1YmxpYy90aWxlLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlQmFja2dyb3VuZENvbG91cik7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1zcXVhcmVTaWRlKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1zcXVhcmVTaWRlKTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4ucGJUaWxlT25SYWNrLlVuc2VsZWN0ZWQge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5wYlRpbGVPblJhY2suU2VsZWN0ZWQge1xcclxcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xcclxcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XFxyXFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcXHJcXG4gICAgbWFyZ2luOiA0cHg7XFxyXFxufVxcclxcbi5wYlRpbGVPblJhY2tUZXh0IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgIFxcclxcbiAgICBib3R0b206IDJweDtcXHJcXG4gICAgbGVmdDogMTFweDsgXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggIGdyZXk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxyXFxufVxcclxcbi5wYlRpbGVPblJhY2suUCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmlzb25lcnNUaWxlQ29sb3VyKTtcXHJcXG59XFxyXFxuLnBiVGlsZU9uUmFjay5HIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWd1YXJkc1RpbGVDb2xvdXIpO1xcclxcbn1cXHJcXG4ucGJSZXNjdWVzTWFkZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbW1vblRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcXHJcXG4gICAgY29sb3I6dmFyKC0tY29tbW9uVGV4dENvbG91cik7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tY29tbW9uRm9udEZhbWlseSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuLnBiQWN0aW9uQnV0dG9uRGl2IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcXHJcXG59XFxyXFxuLnBiQWN0aW9uQnV0dG9uIHtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9wdWJsaWMvYWN0aW9uQnV0dG9uLnBuZycpOyAqL1xcclxcbiAgICBwYWRkaW5nOiAycHggMnB4IDJweCAycHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMHB4O1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbW1vblRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbW1vblRleHRDb2xvdXIpO1xcclxcbiAgICBmb250LXN0eWxlOiBib2xkZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25Gb250RmFtaWx5KTtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICB3b3JkLXNwYWNpbmc6IDNweDtcXHJcXG59XFxyXFxuLnBiQWN0aW9uQnV0dG9uVGV4dCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXHJcXG59XFxyXFxuLnBiQWN0aW9uQnV0dG9uU2V2ZXJlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5wYkFjdGlvbkJ1dHRvblNldmVyZVRleHQge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbi5wYkFjdGlvbkJ1dHRvblNldmVyZVRleHQyIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlOyAvKiBUaGlzIG1ha2VzIGl0IGdvIG9uIHRoZSBuZXh0IGxpbmUgKi9cXHJcXG4gICAgbWFyZ2luOiBhdXRvOyAvKiBUaGlzIGlzIHRoZSBvbmx5IHdheSBJIGNvdWxkIGNlbnRyZSBpdCEgKi9cXHJcXG59XFxyXFxuLnBiTG9iYnlSYWNrU2l6ZVByb21wdCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25IZWFkZXJGb250RmFtaWx5KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi5wYkxvYmJ5UmFja1NpemVQcm9tcHQ6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIkNlbGwgQmxvY2tcXFwiO1xcclxcbn1cXHJcXG4ucGJMb2JieVJhY2tTaXplUHJvbXB0OjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCI6XFxcIjtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XFxyXFxufVxcclxcbi5wYkxvYmJ5UmFja1NpemUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uLy4uL3B1YmxpYy9wcmlzb25iYXJzLXNxdWFyZS5wbmdcXFwiKTtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OjIwcHg7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnBiTG9iYnlSYWNrU2l6ZVNlbGVjdGVkIHtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi8uLi9wdWJsaWMvcHJpc29uYmFycy1zcXVhcmUucG5nXFxcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogdmFyKC0tY2VsbEJsb2NrU2lkZSk7ICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdGVkQ29sb3IpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1jZWxsQmxvY2tTZWxlY3RlZEhlaWdodCk7XFxyXFxuICAgIG1hcmdpbi1yaWdodDoyMHB4O1xcclxcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodGdyZXk7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxufVxcclxcbi5wYkxvYmJ5UmFja1NpemVTZWxlY3RlZDpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbi5wYkxvYmJ5Q2VsbEJsb2NrSW5mbyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25Gb250RmFtaWx5KTtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuLnBiQ2hhdCB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogM3B4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmUgc29saWQgbm9uZSBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbiAgICBtYXgtaGVpZ2h0OiA2MDBweDtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG4ucGJDaGF0VGFibGUge1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxufVxcclxcbi5wYkNoYXRGcm9tIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbn1cXHJcXG4ucGJDaGF0RnJvbTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIj5cXFwiO1xcclxcbiAgICBjb2xvcjogeWVsbG93O1xcclxcbn1cXHJcXG4ucGJDaGF0RnJvbTo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiOlxcXCI7XFxyXFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFweDtcXHJcXG59XFxyXFxuLnBiQ2hhdE1zZyB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGNvbG9yOndoaXRlc21va2U7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBwYWRkaW5nLXRvcDoycHg7XFxyXFxufVxcclxcbi5wYkNoYXRJbnB1dCB7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgY29sb3I6d2hpdGVzbW9rZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5wYkNoYXRJbnB1dEVtcHR5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC1ibG9jay1zaXplOiAzMHB4O1xcclxcbiAgICBjdXJzb3I6IHRleHQ7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIud2l0aXRsZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgZm9udC1zaXplOiAyLjhlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgY29sb3I6YmxhY2s7XFxyXFxufVxcclxcbi53aWhvbWVsaW5rIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuLndpYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXHJcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG4udG9vbHRpcCB7XFxyXFxuICBwb3NpdGlvbjogdG9wO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIHBhZGRpbmc6IDVweCAwO1xcclxcblxcclxcbiAgLyogUG9zaXRpb24gdGhlIHRvb2x0aXAgKi9cXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBib3R0b206IDEwMCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICBtYXJnaW4tbGVmdDogLTYwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcXHJcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxufVxcclxcbi5kaXNwbGF5V29yZFJvdyB7XFxyXFxuICBsaW5lLWhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuLmRpdmlkZXIge1xcclxcbiAgbGluZS1oZWlnaHQ6IDVweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IGN5YW47XFxyXFxuICBib3JkZXItYm90dG9tLXN0eWxlOiByaWRnZTtcXHJcXG59XFxyXFxuLmxldHRlcklucHV0IHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xcclxcbiAgY29sb3I6IGF6dXJlO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxuICBmb250LXNpemU6IGxhcmdlO1xcclxcbn1cXHJcXG4ubGV0dGVyIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xcclxcbiAgY29sb3I6IGF6dXJlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG59XFxyXFxuLmxldHRlckludmFsaWRXb3JkIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgY29sb3I6IGF6dXJlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG59XFxyXFxuLmZhY2V2YWx1ZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG4ud29yZElzVmFsaWQge1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIGNvbG9yOiBibHVlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcbi53b3JkSXNOb3RWYWxpZCB7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG4uaW5zZXJ0Q291bnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuLmluc2VydENvdW50U3BhY2VyIHtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG4uc3dhcENvdW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcclxcbiAgY29sb3I6IGRhcmtibHVlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gIC8qIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZGFya2dyYXk7XFxyXFxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCBkYXJrZ3JheTsgKi9cXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmFuYWdyYW1Db3VudCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyYXk7XFxyXFxuICBjb2xvcjogbGlnaHRncmVlbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHNsYXRlZ3JheTtcXHJcXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHNsYXRlZ3JheTtcXHJcXG59XFxyXFxuLmRyb3BSb3cge1xcclxcbiAgbGluZS1oZWlnaHQ6IDVweDtcXHJcXG59XFxyXFxuLmRyb3BJbmRpY2F0b3Ige1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxufVxcclxcbi5iYWxsb29uc3RyaW5nIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyAgXFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9wYWdlcy93aS93b3JkaW5mby5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjOztFQUVkLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsOENBQThDO0VBQzlDLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDhDQUE4QztFQUM5QyxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsOENBQThDO0VBQzlDLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CO3FDQUNtQztFQUNuQyxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdDQUF3QjtVQUF4Qix3QkFBd0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndpdGl0bGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gIGZvbnQtc2l6ZTogMi44ZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGNvbG9yOmJsYWNrO1xcclxcbn1cXHJcXG4ud2lob21lbGluayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcbi53aWJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XFxyXFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuLnRvb2x0aXAge1xcclxcbiAgcG9zaXRpb246IHRvcDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIHdpZHRoOiAxMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBwYWRkaW5nOiA1cHggMDtcXHJcXG5cXHJcXG4gIC8qIFBvc2l0aW9uIHRoZSB0b29sdGlwICovXFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgYm90dG9tOiAxMDAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IC02MCU7XFxyXFxufVxcclxcblxcclxcbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XFxyXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbn1cXHJcXG4uZGlzcGxheVdvcmRSb3cge1xcclxcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbi5kaXZpZGVyIHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA1cHg7XFxyXFxuICBib3JkZXItYm90dG9tOiBjeWFuO1xcclxcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogcmlkZ2U7XFxyXFxufVxcclxcbi5sZXR0ZXJJbnB1dCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcXHJcXG4gIGNvbG9yOiBhenVyZTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbiAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG59XFxyXFxuLmxldHRlciB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcXHJcXG4gIGNvbG9yOiBhenVyZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxufVxcclxcbi5sZXR0ZXJJbnZhbGlkV29yZCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIGNvbG9yOiBhenVyZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxufVxcclxcbi5mYWNldmFsdWUge1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuLndvcmRJc1ZhbGlkIHtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBjb2xvcjogYmx1ZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG4ud29yZElzTm90VmFsaWQge1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG59XFxyXFxuLmluc2VydENvdW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcbi5pbnNlcnRDb3VudFNwYWNlciB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuLnN3YXBDb3VudCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXHJcXG4gIGNvbG9yOiBkYXJrYmx1ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkIGRhcmtncmF5O1xcclxcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgZGFya2dyYXk7ICovXFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5hbmFncmFtQ291bnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xcclxcbiAgY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBzbGF0ZWdyYXk7XFxyXFxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCBzbGF0ZWdyYXk7XFxyXFxufVxcclxcbi5kcm9wUm93IHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA1cHg7XFxyXFxufVxcclxcbi5kcm9wSW5kaWNhdG9yIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbn1cXHJcXG4uYmFsbG9vbnN0cmluZyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyAgXFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuTWFzdGVybWluZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjI3MWE7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMSU7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDElO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMSU7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxJTtcXHJcXG59XFxyXFxuLndtaG9tZWxpbmsge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYyNzFhO1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuLk91dGVydGFibGUge1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG4uR3Vlc3N0YWJsZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTE3YzA7XFxyXFxufVxcclxcbi5BbGlnbkNlbnRlciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLkFsaWduTGVmdCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcbi53bWxpbmsge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrbWFnZW50YTtcXHJcXG4gICAgY29sb3I6Y3lhbjtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuLndtYnV0dG9uIHtcXHJcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3YzAyNTtcXHJcXG4gICAgY29sb3I6YXp1cmU7XFxyXFxufVxcclxcbi53bXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjhlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBjb2xvcjpkYXJrbWFnZW50YTtcXHJcXG59XFxyXFxuLndtaDEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcclxcbiAgICBjb2xvcjphenVyZTtcXHJcXG59XFxyXFxuLndtaDIge1xcclxcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxuICAgIGNvbG9yOmF6dXJlO1xcclxcbn1cXHJcXG4ud21oMyB7XFxyXFxuICAgIGNvbG9yOmF6dXJlO1xcclxcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxufVxcclxcbi53bXRoIHtcXHJcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBncm9vdmU7XFxyXFxufVxcclxcbi53bXRkIHtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcXHJcXG4gICAgY29sb3I6YXp1cmU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG59XFxyXFxuLndtcCB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi53bWxhYmVsIHtcXHJcXG4gICAgY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3BhZ2VzL3dtL21hc3Rlcm1pbmQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQiw4Q0FBOEM7QUFDbEQ7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLk1hc3Rlcm1pbmQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYyNzFhO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDElO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxJTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDElO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMSU7XFxyXFxufVxcclxcbi53bWhvbWVsaW5rIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE2MjcxYTtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcbi5PdXRlcnRhYmxlIHtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuLkd1ZXNzdGFibGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxN2MwO1xcclxcbn1cXHJcXG4uQWxpZ25DZW50ZXIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5BbGlnbkxlZnQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG4ud21saW5rIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya21hZ2VudGE7XFxyXFxuICAgIGNvbG9yOmN5YW47XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcbi53bWJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxN2MwMjU7XFxyXFxuICAgIGNvbG9yOmF6dXJlO1xcclxcbn1cXHJcXG4ud210aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi44ZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgY29sb3I6ZGFya21hZ2VudGE7XFxyXFxufVxcclxcbi53bWgxIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcclxcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXHJcXG4gICAgY29sb3I6YXp1cmU7XFxyXFxufVxcclxcbi53bWgyIHtcXHJcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbiAgICBjb2xvcjphenVyZTtcXHJcXG59XFxyXFxuLndtaDMge1xcclxcbiAgICBjb2xvcjphenVyZTtcXHJcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbn1cXHJcXG4ud210aCB7XFxyXFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xcclxcbn1cXHJcXG4ud210ZCB7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XFxyXFxuICAgIGNvbG9yOmF6dXJlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxufVxcclxcbi53bXAge1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4ud21sYWJlbCB7XFxyXFxuICAgIGNvbG9yOiBsaWdodGdyZWVuO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1lcnJpd2VhdGhlcnxPcGVuIFNhbnMpO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWNvbW1vbkJvcmRlckNvbG91cjogZ3JleTsvKiBibHVlOyAvKmRhcmtzbGF0ZWJsdWUqL1xcbiAgLS1jb21tb25UZXh0QmFja2dyb3VuZENvbG91cjogYmxhY2s7XFxuICAtLWNvbW1vblRleHRDb2xvdXI6IHdoaXRlc21va2U7XFxuICAtLWNvbW1vbkhlYWRlckZvbnRGYW1pbHk6IE1lcnJpd2VhdGhlcjtcXG4gIC0tY29tbW9uRm9udEZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxufVxcbi5jb21tb25IZWFkZXJGb250RmFtaWx5IHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25IZWFkZXJGb250RmFtaWx5KTtcXG59XFxuLmNvbW1vbkZvbnRGYW1pbHkge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkZvbnRGYW1pbHkpO1xcbn1cXG5odG1sLFxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgLyogZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLFxcbiAgICBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjsgKi9cXG59XFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuKiB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5teUhlYWRpbmdGb250IHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25IZWFkZXJGb250RmFtaWx5KTtcXG59XFxuLm15U3ViSGVhZGluZ0ZvbnQge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkZvbnRGYW1pbHkpO1xcbn1cXG4ubXlDb21tb25Gb250IHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25Gb250RmFtaWx5KTtcXG59XFxuLm15bWF0ZXJpYWxpY29uIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5teW1hdGVyaWFsaWNvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgfVxcbi50ZXh0YWxpZ25jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4vKiBSdWxlcyBmb3IgdXNpbmcgaWNvbnMgYXMgd2hpdGUgb24gYSBkYXJrIGJhY2tncm91bmQuICovXFxuLm1hdGVyaWFsLWljb25zLm1kLWxpZ2h0IHsgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7IH1cXG4ubWF0ZXJpYWwtaWNvbnMubWQtbGlnaHQubWQtaW5hY3RpdmUgeyBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpOyB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLDBCQUEwQixDQUFDLHlCQUF5QjtFQUNwRCxtQ0FBbUM7RUFDbkMsOEJBQThCO0VBQzlCLHNDQUFzQztFQUN0QywyQ0FBMkM7QUFDN0M7QUFDQTtFQUNFLDBDQUEwQztBQUM1QztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7O0VBRUUsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUztFQUNUOzJFQUN5RTtBQUMzRTs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw4QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSwwQ0FBMEM7QUFDNUM7QUFDQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2I7QUFDRjtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBLHlEQUF5RDtBQUN6RCwyQkFBMkIsNkJBQTZCLEVBQUU7QUFDMUQsdUNBQXVDLCtCQUErQixFQUFFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TWVycml3ZWF0aGVyfE9wZW4gU2Fuc1xcXCIpO1xcbjpyb290IHtcXG4gIC0tY29tbW9uQm9yZGVyQ29sb3VyOiBncmV5Oy8qIGJsdWU7IC8qZGFya3NsYXRlYmx1ZSovXFxuICAtLWNvbW1vblRleHRCYWNrZ3JvdW5kQ29sb3VyOiBibGFjaztcXG4gIC0tY29tbW9uVGV4dENvbG91cjogd2hpdGVzbW9rZTtcXG4gIC0tY29tbW9uSGVhZGVyRm9udEZhbWlseTogTWVycml3ZWF0aGVyO1xcbiAgLS1jb21tb25Gb250RmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG59XFxuLmNvbW1vbkhlYWRlckZvbnRGYW1pbHkge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkhlYWRlckZvbnRGYW1pbHkpO1xcbn1cXG4uY29tbW9uRm9udEZhbWlseSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tY29tbW9uRm9udEZhbWlseSk7XFxufVxcbmh0bWwsXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICAvKiBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sXFxuICAgIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmOyAqL1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5teUhlYWRpbmdGb250IHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25IZWFkZXJGb250RmFtaWx5KTtcXG59XFxuLm15U3ViSGVhZGluZ0ZvbnQge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkZvbnRGYW1pbHkpO1xcbn1cXG4ubXlDb21tb25Gb250IHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25Gb250RmFtaWx5KTtcXG59XFxuLm15bWF0ZXJpYWxpY29uIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5teW1hdGVyaWFsaWNvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgfVxcbi50ZXh0YWxpZ25jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4vKiBSdWxlcyBmb3IgdXNpbmcgaWNvbnMgYXMgd2hpdGUgb24gYSBkYXJrIGJhY2tncm91bmQuICovXFxuLm1hdGVyaWFsLWljb25zLm1kLWxpZ2h0IHsgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7IH1cXG4ubWF0ZXJpYWwtaWNvbnMubWQtbGlnaHQubWQtaW5hY3RpdmUgeyBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpOyB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9ezkxOmZ1bmN0aW9uKGUpe2UuZXhwb3J0cz1mdW5jdGlvbihlLHIpe2lmKCFyKXtyPXt9fWU9ZSYmZS5fX2VzTW9kdWxlP2UuZGVmYXVsdDplO2lmKHR5cGVvZiBlIT09XCJzdHJpbmdcIil7cmV0dXJuIGV9aWYoL15bJ1wiXS4qWydcIl0kLy50ZXN0KGUpKXtlPWUuc2xpY2UoMSwtMSl9aWYoci5oYXNoKXtlKz1yLmhhc2h9aWYoL1tcIicoKSBcXHRcXG5dLy50ZXN0KGUpfHxyLm5lZWRRdW90ZXMpe3JldHVybidcIicuY29uY2F0KGUucmVwbGFjZSgvXCIvZywnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csXCJcXFxcblwiKSwnXCInKX1yZXR1cm4gZX19fTt2YXIgcj17fTtmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKHQpe2lmKHJbdF0pe3JldHVybiByW3RdLmV4cG9ydHN9dmFyIF89clt0XT17ZXhwb3J0czp7fX07dmFyIG49dHJ1ZTt0cnl7ZVt0XShfLF8uZXhwb3J0cyxfX25jY3dwY2tfcmVxdWlyZV9fKTtuPWZhbHNlfWZpbmFsbHl7aWYobilkZWxldGUgclt0XX1yZXR1cm4gXy5leHBvcnRzfV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3JldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDkxKX0oKTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL0JhcmJlZFdpcmUuOGU3YzJhNjZiNmQ2MDFkYzFkYmIzODkxZTc5Y2Y2YzMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9CYXJiZWRXaXJlUm90YXRlZC42NjQ3M2ZjZDQ4YmFmODBkOGM5MzczMDEyMGJhMTAyMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL1dhbGwuNDdhZGQyMGZhOTVmMGJkYWE3ZjM3M2MxN2M2MGY3OTAuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9wbGF5ZXJ0aXRsZS45ZDZiYzk3NzdmMjVmYzdhMmIwODM2MTI3YTI1NDQwMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL3ByaXNvbmJhcnMtc3F1YXJlLjJmOTIwZjBmOTM3NTc5YmFlNTQ5ZDUyYWQyYjA4MjFkLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvdGlsZS44YzAxNzEzNTM2YzBkNzkwZjY1OWJkNWJlM2YzYWNhYy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZCcpXG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIGV4cG9ydHMuRnJhZ21lbnQgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuXG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH1cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuRnJhZ21lbnQ6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpO1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xudmFyIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSksIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmZjcy9wdWxsLzEwN1xuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqL1xuXG5mdW5jdGlvbiBqc3hERVYodHlwZSwgY29uZmlnLCBtYXliZUtleSwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHZhciBrZXkgPSBudWxsO1xuICAgIHZhciByZWYgPSBudWxsOyAvLyBDdXJyZW50bHksIGtleSBjYW4gYmUgc3ByZWFkIGluIGFzIGEgcHJvcC4gVGhpcyBjYXVzZXMgYSBwb3RlbnRpYWxcbiAgICAvLyBpc3N1ZSBpZiBrZXkgaXMgYWxzbyBleHBsaWNpdGx5IGRlY2xhcmVkIChpZS4gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz5cbiAgICAvLyBvciA8ZGl2IGtleT1cIkhpXCIgey4uLnByb3BzfSAvPiApLiBXZSB3YW50IHRvIGRlcHJlY2F0ZSBrZXkgc3ByZWFkLFxuICAgIC8vIGJ1dCBhcyBhbiBpbnRlcm1lZGlhcnkgc3RlcCwgd2Ugd2lsbCB1c2UganN4REVWIGZvciBldmVyeXRoaW5nIGV4Y2VwdFxuICAgIC8vIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+LCBiZWNhdXNlIHdlIGFyZW4ndCBjdXJyZW50bHkgYWJsZSB0byB0ZWxsIGlmXG4gICAgLy8ga2V5IGlzIGV4cGxpY2l0bHkgZGVjbGFyZWQgdG8gYmUgdW5kZWZpbmVkIG9yIG5vdC5cblxuICAgIGlmIChtYXliZUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBrZXkgPSAnJyArIG1heWJlS2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIHtcbiAgICBpZiAoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICB7XG4gICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmZvO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gICAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gICAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gICAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSk7XG5cbiAgICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICAgIH1cblxuICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgICBpZiAodmFsaWRUeXBlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogU3RhdGljIGNoaWxkcmVuIHNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXkuICcgKyAnWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiAnICsgJ1VzZSB0aGUgQmFiZWwgdHJhbnNmb3JtIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50KSB7XG4gICAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59IC8vIFRoZXNlIHR3byBmdW5jdGlvbnMgZXhpc3QgdG8gc3RpbGwgZ2V0IGNoaWxkIHdhcm5pbmdzIGluIGRldlxuXG52YXIganN4REVWJDEgPSAganN4V2l0aFZhbGlkYXRpb24gO1xuXG5leHBvcnRzLmpzeERFViA9IGpzeERFViQxO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=