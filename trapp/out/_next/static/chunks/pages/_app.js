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
/* harmony import */ var _fyb_fyb_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fyb/fyb.css */ "./pages/fyb/fyb.css");
/* harmony import */ var _fyb_fyb_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fyb_fyb_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _morpho_morpho_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./morpho/morpho.css */ "./pages/morpho/morpho.css");
/* harmony import */ var _morpho_morpho_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_morpho_morpho_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tm_tm_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tm/tm.css */ "./pages/tm/tm.css");
/* harmony import */ var _tm_tm_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tm_tm_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_MyCode_TR_trcode_trapp_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_9___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        /* I added material icons */
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        /* I added w3.css */
        rel: "stylesheet",
        href: "https://www.w3schools.com/w3css/4/w3.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        /* I have my own css file on github so I can change the UI but still have to deploying this app to see changes */
        rel: "stylesheet",
        href: "https://tilerunner.github.io/trcss.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Tile Runner"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/tileTR.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Tile Runner - Fun with words"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:title",
        content: "Tile Runner"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:description",
        content: "A few word games and a word lookup feature"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:image",
        content: "/tileTR.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:image:width",
        content: "400"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:image:height",
        content: "400"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:title",
        content: "Tile Runner - Fun with words"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:image",
        content: "/tileTR.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:card",
        content: "summary"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:description",
        content: "A few word games a and a word lookup feature"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:url",
        content: "https://tilerunner.herokuapp.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meat", {
        property: "og:site_name",
        content: "Tile Runner"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:locale",
        content: "en_US"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:type",
        content: "website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
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

/***/ "./pages/fyb/fyb.css":
/*!***************************!*\
  !*** ./pages/fyb/fyb.css ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./fyb.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/fyb/fyb.css");

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
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./fyb.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/fyb/fyb.css",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./fyb.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/fyb/fyb.css");

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

/***/ "./pages/morpho/morpho.css":
/*!*********************************!*\
  !*** ./pages/morpho/morpho.css ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./morpho.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/morpho/morpho.css");

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
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./morpho.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/morpho/morpho.css",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./morpho.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/morpho/morpho.css");

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

/***/ "./pages/tm/tm.css":
/*!*************************!*\
  !*** ./pages/tm/tm.css ***!
  \*************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./tm.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/tm/tm.css");

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
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./tm.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/tm/tm.css",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./tm.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/tm/tm.css");

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

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/fyb/fyb.css":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/fyb/fyb.css ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".heart {\r\n    color: red;\r\n}\r\n.long {\r\n    font-size: x-small;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n.fryLetterActionButton {\r\n    margin-left: 5px;\r\n    border: none;\r\n    padding: 0px 0px 0px 0px;\r\n}\r\n.fryLetterActionButtonIcon {\r\n    margin: 5px 0px 0px 0px;\r\n}\r\n.fryLetterDiv {\r\n    background-color: black;\r\n    color: whitesmoke;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    padding: 2px 10px 2px 2px;\r\n    margin: 0px 0px 10px 10px;\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n}\r\n.fybFryLetter {\r\n    font-family: monospace;\r\n    font-size: xx-large;\r\n    text-align: center;\r\n    padding: 0px 2px;\r\n}\r\n.fybFryLetter.Selected {\r\n    color: blue;\r\n    border-style: inset;\r\n    border-width: thick;\r\n    border-color: blue;\r\n    background-color: whitesmoke;\r\n}\r\n.thinChat {\r\n    border: none;\r\n    max-height: 600px;\r\n    overflow-y: scroll;\r\n}\r\n.thinChatFrom {\r\n    background-color: black;\r\n    color: white;\r\n}\r\n.thinChatFrom::before {\r\n    content: \">\";\r\n    color: yellow;\r\n}\r\n.thinChatFrom::after {\r\n    content: \":\";\r\n    color: yellow;\r\n    font-size: small;\r\n}\r\n.thinChatMsg {\r\n    font-style: italic;\r\n    color:whitesmoke;\r\n    background-color: black;\r\n}\r\n.thinChatInput {\r\n    font-style: italic;\r\n    color:whitesmoke;\r\n    background-color: blue;\r\n    width: 100%;\r\n}\r\n.thinChatInputEmpty {\r\n    background-color: whitesmoke;\r\n    width: 100%;\r\n    max-block-size: 30px;\r\n    cursor: text;\r\n}\r\n", "",{"version":3,"sources":["webpack://pages/fyb/fyb.css"],"names":[],"mappings":"AAAA;IACI,UAAU;AACd;AACA;IACI,kBAAkB;IAClB,yCAAyC;AAC7C;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,wBAAwB;AAC5B;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,uBAAkB;IAAlB,kBAAkB;IAClB,yBAAyB;IACzB,yBAAyB;IACzB,yBAAiB;YAAjB,iBAAiB;AACrB;AACA;IACI,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,4BAA4B;AAChC;AACA;IACI,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,YAAY;IACZ,aAAa;AACjB;AACA;IACI,YAAY;IACZ,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,uBAAuB;AAC3B;AACA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,sBAAsB;IACtB,WAAW;AACf;AACA;IACI,4BAA4B;IAC5B,WAAW;IACX,oBAAoB;IACpB,YAAY;AAChB","sourcesContent":[".heart {\r\n    color: red;\r\n}\r\n.long {\r\n    font-size: x-small;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n.fryLetterActionButton {\r\n    margin-left: 5px;\r\n    border: none;\r\n    padding: 0px 0px 0px 0px;\r\n}\r\n.fryLetterActionButtonIcon {\r\n    margin: 5px 0px 0px 0px;\r\n}\r\n.fryLetterDiv {\r\n    background-color: black;\r\n    color: whitesmoke;\r\n    width: fit-content;\r\n    padding: 2px 10px 2px 2px;\r\n    margin: 0px 0px 10px 10px;\r\n    user-select: none;\r\n}\r\n.fybFryLetter {\r\n    font-family: monospace;\r\n    font-size: xx-large;\r\n    text-align: center;\r\n    padding: 0px 2px;\r\n}\r\n.fybFryLetter.Selected {\r\n    color: blue;\r\n    border-style: inset;\r\n    border-width: thick;\r\n    border-color: blue;\r\n    background-color: whitesmoke;\r\n}\r\n.thinChat {\r\n    border: none;\r\n    max-height: 600px;\r\n    overflow-y: scroll;\r\n}\r\n.thinChatFrom {\r\n    background-color: black;\r\n    color: white;\r\n}\r\n.thinChatFrom::before {\r\n    content: \">\";\r\n    color: yellow;\r\n}\r\n.thinChatFrom::after {\r\n    content: \":\";\r\n    color: yellow;\r\n    font-size: small;\r\n}\r\n.thinChatMsg {\r\n    font-style: italic;\r\n    color:whitesmoke;\r\n    background-color: black;\r\n}\r\n.thinChatInput {\r\n    font-style: italic;\r\n    color:whitesmoke;\r\n    background-color: blue;\r\n    width: 100%;\r\n}\r\n.thinChatInputEmpty {\r\n    background-color: whitesmoke;\r\n    width: 100%;\r\n    max-block-size: 30px;\r\n    cursor: text;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/morpho/morpho.css":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/morpho/morpho.css ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/getUrl.js */ "./node_modules/next/dist/compiled/css-loader/getUrl.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_MorphoButterfly_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/MorphoButterfly.png */ "./public/MorphoButterfly.png");
/* harmony import */ var _public_tile_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/tile.png */ "./public/tile.png");
/* harmony import */ var _public_MorphoCaterpillar_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/MorphoCaterpillar.png */ "./public/MorphoCaterpillar.png");
/* harmony import */ var _public_MorphoCocoon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/MorphoCocoon.png */ "./public/MorphoCocoon.png");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_MorphoButterfly_png__WEBPACK_IMPORTED_MODULE_2__.default);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_tile_png__WEBPACK_IMPORTED_MODULE_3__.default);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_MorphoCaterpillar_png__WEBPACK_IMPORTED_MODULE_4__.default);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_MorphoCocoon_png__WEBPACK_IMPORTED_MODULE_5__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".morphoDiv {\r\n    margin-top: 10px;\r\n    margin-left: 10px;\r\n    outline: none;\r\n}\r\n.morphoSolvedDiv {\r\n    outline: none;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    margin-top: 10px;\r\n    margin-left: 10px;\r\n    width: 350px;\r\n    height: 550px;\r\n}\r\n.morphoSolvedDiv.l3 {\r\n    width: 200px;\r\n    height: 280px;\r\n}\r\n.morphoSolvedDiv.l4 {\r\n    width: 250px;\r\n    height: 350px;\r\n}\r\n.morphoSolvedDiv.l5 {\r\n    height: 410px;\r\n}\r\n.morphoSolvedDiv.l6 {\r\n    height: 480px;\r\n}\r\n.morphoSolvedDiv.l7 {\r\n    height: 550px;\r\n}\r\n.morphoSolvedDiv.l8 {\r\n    height: 560px;\r\n}\r\n.morphoCell {\r\n    height: 70px;\r\n    width: 70px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    color: black;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.morphoCellStatic { /* Provided by the puzzle */\r\n    font-weight: bold;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n.morphoCellNoLetter {\r\n    font-weight: bold;\r\n    color: black;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n.morphoCellLarva {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n    font-weight: bold;\r\n    color: black;\r\n}\r\n.morphoCellCocoon {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n    font-weight: bold;\r\n    color: black;\r\n}\r\n.morphoCellSelected {\r\n    opacity: 50%;\r\n}\r\n.morphoCellButterfly {\r\n    color: black;\r\n    font-weight: bold;\r\n}\r\n.morphoKeyboard {\r\n    background-color: blue;\r\n    color: whitesmoke;\r\n    width: 350px;\r\n    margin-bottom: 5px;\r\n}\r\n.morphoKeyrow1 {\r\n    margin-left: 1px;\r\n}\r\n.morphoKeyrow2 {\r\n    margin-left: 10px;\r\n}\r\n.morphoKeyrow3 {\r\n    margin-left: 21px;\r\n}\r\n.morphoKeyrow4 {\r\n    text-align: center;\r\n    padding-bottom: 2px;\r\n}\r\n.morphoKey {\r\n    border-width: 2px;\r\n    border-radius: 100%;\r\n    border-color: black;\r\n    margin: 3px;\r\n    width: 28px;\r\n}\r\n.morphoCopydownKey {\r\n    border-width: 2px;\r\n    border-color: black;\r\n    margin-right: 40px;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n.morphoCopyupKey {\r\n    border-width: 2px;\r\n    border-color: black;\r\n}\r\n.morphoSubmitKey {\r\n    border-width: 2px;\r\n    border-color: black;\r\n    margin-left: 10px;\r\n    margin-right: 5px;\r\n}\r\n.morphoPuzzleSizeKey {\r\n    border-width: 2px;\r\n    border-radius: 100%;\r\n    border-color: whitesmoke;\r\n    background-color: blue;\r\n    color: whitesmoke;\r\n    margin: 3px;\r\n    width: 28px;\r\n}\r\n", "",{"version":3,"sources":["webpack://pages/morpho/morpho.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;AACjB;AACA;IACI,aAAa;IACb,yDAAyD;IACzD,4BAA4B;IAC5B,sBAAsB;IACtB,gBAAgB;IAChB,iBAAiB;IACjB,YAAY;IACZ,aAAa;AACjB;AACA;IACI,YAAY;IACZ,aAAa;AACjB;AACA;IACI,YAAY;IACZ,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,sBAAsB;IACtB,YAAY;IACZ,4BAA4B;IAC5B,sBAAsB;AAC1B;AACA,oBAAoB,2BAA2B;IAC3C,iBAAiB;IACjB,yDAA8C;AAClD;AACA;IACI,iBAAiB;IACjB,YAAY;IACZ,yDAA2D;AAC/D;AACA;IACI,yDAA2D;IAC3D,iBAAiB;IACjB,YAAY;AAChB;AACA;IACI,yDAAsD;IACtD,iBAAiB;IACjB,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,sBAAsB;IACtB,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,mBAAmB;IACnB,WAAW;IACX,WAAW;AACf;AACA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;AACA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,iBAAiB;IACjB,iBAAiB;AACrB;AACA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,wBAAwB;IACxB,sBAAsB;IACtB,iBAAiB;IACjB,WAAW;IACX,WAAW;AACf","sourcesContent":[".morphoDiv {\r\n    margin-top: 10px;\r\n    margin-left: 10px;\r\n    outline: none;\r\n}\r\n.morphoSolvedDiv {\r\n    outline: none;\r\n    background-image: url('../../public/MorphoButterfly.png');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    margin-top: 10px;\r\n    margin-left: 10px;\r\n    width: 350px;\r\n    height: 550px;\r\n}\r\n.morphoSolvedDiv.l3 {\r\n    width: 200px;\r\n    height: 280px;\r\n}\r\n.morphoSolvedDiv.l4 {\r\n    width: 250px;\r\n    height: 350px;\r\n}\r\n.morphoSolvedDiv.l5 {\r\n    height: 410px;\r\n}\r\n.morphoSolvedDiv.l6 {\r\n    height: 480px;\r\n}\r\n.morphoSolvedDiv.l7 {\r\n    height: 550px;\r\n}\r\n.morphoSolvedDiv.l8 {\r\n    height: 560px;\r\n}\r\n.morphoCell {\r\n    height: 70px;\r\n    width: 70px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    color: black;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.morphoCellStatic { /* Provided by the puzzle */\r\n    font-weight: bold;\r\n    background-image: url('../../public/tile.png');\r\n}\r\n.morphoCellNoLetter {\r\n    font-weight: bold;\r\n    color: black;\r\n    background-image: url('../../public/MorphoCaterpillar.png');\r\n}\r\n.morphoCellLarva {\r\n    background-image: url('../../public/MorphoCaterpillar.png');\r\n    font-weight: bold;\r\n    color: black;\r\n}\r\n.morphoCellCocoon {\r\n    background-image: url('../../public/MorphoCocoon.png');\r\n    font-weight: bold;\r\n    color: black;\r\n}\r\n.morphoCellSelected {\r\n    opacity: 50%;\r\n}\r\n.morphoCellButterfly {\r\n    color: black;\r\n    font-weight: bold;\r\n}\r\n.morphoKeyboard {\r\n    background-color: blue;\r\n    color: whitesmoke;\r\n    width: 350px;\r\n    margin-bottom: 5px;\r\n}\r\n.morphoKeyrow1 {\r\n    margin-left: 1px;\r\n}\r\n.morphoKeyrow2 {\r\n    margin-left: 10px;\r\n}\r\n.morphoKeyrow3 {\r\n    margin-left: 21px;\r\n}\r\n.morphoKeyrow4 {\r\n    text-align: center;\r\n    padding-bottom: 2px;\r\n}\r\n.morphoKey {\r\n    border-width: 2px;\r\n    border-radius: 100%;\r\n    border-color: black;\r\n    margin: 3px;\r\n    width: 28px;\r\n}\r\n.morphoCopydownKey {\r\n    border-width: 2px;\r\n    border-color: black;\r\n    margin-right: 40px;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n.morphoCopyupKey {\r\n    border-width: 2px;\r\n    border-color: black;\r\n}\r\n.morphoSubmitKey {\r\n    border-width: 2px;\r\n    border-color: black;\r\n    margin-left: 10px;\r\n    margin-right: 5px;\r\n}\r\n.morphoPuzzleSizeKey {\r\n    border-width: 2px;\r\n    border-radius: 100%;\r\n    border-color: whitesmoke;\r\n    background-color: blue;\r\n    color: whitesmoke;\r\n    margin: 3px;\r\n    width: 28px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --commonBorderColour: grey;/* pb */\r\n    --commonTextBackgroundColour: black; /* pb */\r\n    --commonTextColour: whitesmoke; /* pb */\r\n    --commonHeaderFontFamily: Arial, Helvetica, sans-serif; /* pb */\r\n    --commonFontFamily: Verdana, Geneva, Tahoma, sans-serif; /* pb */\r\n    --squareSide: 40px;\r\n    --cellBlockSide: 40px;\r\n    --cellBlockSelectedHeight: 42px;\r\n    --selectedColor: hsl(207, 90%, 56%);\r\n    --lobbyFontSize: 20px;\r\n    --tileBackgroundColour: orangered;\r\n    --prisonersTileColour: whitesmoke;\r\n    --guardsTileColour: black;\r\n}\r\n.commonFontFamily { /* pb */\r\n    font-family: var(--commonFontFamily);\r\n}\r\n.topBarHeight {\r\n    height: 60px;\r\n}\r\n.examineFooterHeight {\r\n    height: 90px;\r\n}\r\n.topBarCorner {\r\n    width: 20%;\r\n    height: 50%;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n.fullWidth {\r\n    width: 100%;\r\n}\r\n.formalinfo {\r\n    font-family: var(--commonFontFamily);\r\n    letter-spacing: 1px;\r\n}\r\n.prisonbreak {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size: cover;\r\n}\r\n.pbGameid {\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color: var(--commonTextColour);\r\n    border-color: var(--commonBorderColour);\r\n    border-width: 0 0 3px 3px;\r\n    border-style: solid;\r\n}\r\n.pbtitle {\r\n    background-color: grey;\r\n    font-size: 2.8em;\r\n    text-align: center;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    /* font-style: italic; */\r\n    color:black;\r\n}\r\n.pbhomelink {\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color: var(--commonTextColour);\r\n    text-align: right;\r\n    border-color: var(--commonBorderColour);\r\n    border-width: 0 3px 3px 0;\r\n    border-style: solid;\r\n}\r\n.pbPlayerOuterSection {\r\n    /* border-left: 2px solid black;\r\n    border-right: 2px solid black;\r\n    border-top: 2px solid black; */\r\n    /* width: 360px; */\r\n    padding-top: 3px;\r\n    /* background-image: url(\"../../public/Wall.jpg\");\r\n    background-repeat: repeat;\r\n    background-size: cover; */\r\n}\r\n/* .pbPlayerOuterSection:hover {\r\n    background-image: url(\"../../public/Escapee.png\");\r\n    opacity: 75%;\r\n} */\r\n.pbPlayerInnerSection {\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    font-size: x-large;\r\n}\r\n.pbPlayerTitle {\r\n    font-family: var(--commonFontFamily);\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    background-repeat: repeat;\r\n    border-radius: 35px;\r\n    background-color: whitesmoke;\r\n    color: whitesmoke;\r\n    letter-spacing: 2px;\r\n    font-weight: lighter;\r\n    text-align: center;\r\n    padding-left: 6px;\r\n    padding-right: 5px;\r\n    border-style: inset;\r\n    border-width: 2px;\r\n}\r\n.pbPlayerTitle.P {\r\n    font-size: inherit;   \r\n}\r\n.pbPlayerTitle.G {\r\n    font-size: inherit;    \r\n}\r\n.pbSquareOuter { /* Thin black border around each board square */\r\n    border: solid;\r\n    border-width: thin;\r\n    border-color: black;\r\n    border-style: solid;\r\n    padding: 0px; /* So nothing appears between the squares - keep them flush */\r\n}\r\n.pbSquareInner { /* Common board square properties */\r\n    height: var(--squareSide);\r\n    width: var(--squareSide);\r\n    border-style: none;\r\n}\r\n.pbSquareInner:focus { /* No outline when in focus */\r\n    outline: none;\r\n}\r\n.pbSquareInner.style1 { /* Alternating square style 1 */\r\n    background-color: black;\r\n    color: black;\r\n}\r\n.pbSquareInner.style2 { /* Alternating square style 2 */\r\n    background-color: darkgrey;\r\n    color: darkgrey;\r\n}\r\n.pbSquareInner.CenterSquare { /* Centre square */\r\n    padding-top: 3px;\r\n    border-style: none;\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color: cornsilk;\r\n    font-size: x-large;\r\n}\r\n.pbSquareInner.EscapeHatch { /* Escape hatch square */\r\n    padding-top: 3px;\r\n    border-style: solid;\r\n    border-color: var(--commonBorderColour);\r\n    border-width: thin;\r\n    background-color: orangered;\r\n    color: whitesmoke;\r\n    text-align: center;\r\n}\r\n.pbSquareInner.PlayerTile { /* Player tile image on the square */\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n    background-size: cover;\r\n    background-color: var(--tileBackgroundColour);\r\n    position: relative;\r\n}\r\n.pbSquareTileText { /* The tile played on the board */\r\n    position: absolute;   \r\n    bottom: 3px;\r\n    left: 12px; \r\n    font-weight: bolder;\r\n    text-align: center;\r\n    text-shadow: 2px 2px  grey;\r\n    font-family: monospace;\r\n    font-size: xx-large;\r\n}\r\n.pbSquareTileText.P { /* Prisoners tile color */\r\n    color: var(--prisonersTileColour);\r\n}\r\n.pbSquareTileText.G { /* Guards tile color */\r\n    color: var(--guardsTileColour);\r\n}\r\n.u::after {\r\n    content: \"u\";\r\n    font-size: small;\r\n}\r\n.pbSquareInner.RightArrow { /* Right arrow word direction indicator */\r\n    padding: 0%;\r\n    border-style: none;\r\n    background-color: grey;\r\n    color: cyan;\r\n    font-weight: bolder;\r\n    text-align: center;\r\n}\r\n.pbSquareInner.DownArrow { /* Down arrow word direction indicator */\r\n    padding: 0%;\r\n    border-style: none;\r\n    background-color: grey;\r\n    color: cyan;\r\n    font-weight: bolder;\r\n    text-align: center;\r\n}\r\n.pbRow {\r\n    padding: 0%;\r\n}\r\n.pbBoardPlusUnderboard {\r\n    /* background-image: url('../../public/Wall.jpg');\r\n    background-size: contain; */\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n}\r\n.pbBoard {\r\n    border-style: solid;\r\n    border-width: 0px;\r\n    border-color: var(--commonBorderColour);\r\n}\r\n.pbBoardColumnHeaderRow {\r\n    font-family: var(--commonHeaderFontFamily);\r\n    text-align: center;\r\n    line-height: var(--cellBlockSide);\r\n}\r\n.pbBoardColumnHeader {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n    background-size: cover;\r\n    background-repeat: repeat;\r\n    background-color: black;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n.pbBoardRowHeader {\r\n    font-family: var(--commonHeaderFontFamily);\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n    background-size: cover;\r\n    background-repeat: repeat;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n.pbBoardHeaderTopLeft {\r\n    min-width: var(--cellBlockSide);\r\n    min-height: var(--cellBlockSide);\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n    background-size: cover;\r\n}\r\n.pbBoardHeaderTopRight {\r\n    min-width: var(--cellBlockSide);\r\n    min-height: var(--cellBlockSide);\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n    background-size: cover;\r\n}\r\n.pbBoardHeaderBottomLeft {\r\n    min-width: var(--cellBlockSide);\r\n    min-height: var(--cellBlockSide);\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n    background-size: cover;\r\n}\r\n.pbBoardHeaderBottomRight {\r\n    min-width: var(--cellBlockSide);\r\n    min-height: var(--cellBlockSide);\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n    background-size: cover;\r\n}\r\n.pbUnderboard {\r\n    margin-top: 10px;\r\n    border-style: solid;\r\n    border-color: var(--commonBorderColour);\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color: var(--commonTextColour);\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n.pbTileAndMovesOuter {\r\n    align-items: left;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    max-width: 250px;\r\n}\r\n.pbTilepool {\r\n    text-align: left;\r\n    border-width: 3px;\r\n    border-style: solid solid none solid;\r\n    border-color: var(--commonBorderColour);\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color: var(--commonTextColour);\r\n    font-family: monospace;\r\n    font-size: xx-small;\r\n    word-wrap: break-word;\r\n}\r\n.pbTilepoolDivider {\r\n    width: 2px;\r\n    vertical-align: top;\r\n    font-size: larger;\r\n}\r\n.pbTilepoolDivider::after {\r\n    content: \".\";\r\n}\r\n.pbTilepoolTitle {\r\n    font-size: 150%;\r\n    letter-spacing: 3px;\r\n    border-bottom-style: dotted;\r\n    border-color: var(--commonBorderColour);\r\n}\r\n.pbTilepoolTile {\r\n    font-size: small;\r\n    padding-left: 2px;\r\n    padding-right: 2px;\r\n}\r\n.pbMoves {\r\n    text-align: left;\r\n    border-width: 3px;\r\n    border-style: solid;\r\n    border-color: var(--commonBorderColour);\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color: var(--commonTextColour);\r\n    font-family: monospace;\r\n    font-size: xx-small;\r\n}\r\n.pbMovesTitle {\r\n    font-size: 150%;\r\n    letter-spacing: 3px;\r\n    border-bottom-style: dotted;\r\n    border-color: var(--commonBorderColour);\r\n}\r\n.pbMovesScrollable {\r\n    max-height: 550px;\r\n    /* max-width: 250px; */\r\n    overflow-x: scroll;\r\n    overflow-y: scroll;\r\n    scroll-behavior: auto;\r\n}\r\n.pbMove {\r\n    font-size: small;\r\n    padding-left: 2px;\r\n    padding-right: 2px;\r\n}\r\n.pbMove:hover {\r\n    background-color: magenta;\r\n    cursor: pointer;\r\n}\r\n.pbMove.by {\r\n    color: yellow;\r\n}\r\n.pbMove.SWAP {\r\n    color: cyan;\r\n}\r\n.pbMove.SWAP::after {\r\n    content: \"Swap tiles\";\r\n}\r\n.pbMove.PASS {\r\n    color: red;\r\n}\r\n.pbMove.PASS::after {\r\n    content: \"Pass turn\";\r\n}\r\n.pbMove.PLAY {\r\n    color: var(--commonTextColour);\r\n}\r\n.pbTilerack {\r\n    padding-top: 2px;\r\n    padding-bottom: 5px;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n.pbTilerackArrow {\r\n    /*\r\n        I got this idea online.\r\n        It is a box with a border, but the box has no height or width leaving just borders.\r\n        When the 4 borders meet (no box) it is like 4 triangles (imagine X ).\r\n        You make 3 borders transparent, leaving only the triangle you want to display.\r\n    */\r\n    margin-top: 13px; /* push the arrow down to the middle */\r\n    margin-right: 5px; /* put some space between the arrow and tilerack */\r\n    width: 0; \r\n    height: 0; \r\n    border-top: 7px solid transparent; /* less than 15px here and next line for a more slender arrow */\r\n    border-bottom: 7px solid transparent;   \r\n    border-left: 15px solid rgb(44, 240, 37);\r\n}\r\n.pbTilerackArrowInFooter {\r\n    margin-top: 2px;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 7px solid transparent; /* less than 15px here and next line for a more slender arrow */\r\n    border-bottom: 7px solid transparent;   \r\n    border-left: 15px solid rgb(44, 240, 37);\r\n}\r\n.pbTileOnRack {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n    background-size: cover;\r\n    background-color: var(--tileBackgroundColour);\r\n    width: var(--squareSide);\r\n    height: var(--squareSide);\r\n    position: relative;\r\n}\r\n.pbTileOnRack.Unselected {\r\n    border: none;\r\n}\r\n.pbTileOnRack.Selected {\r\n    border-style: inset;\r\n    border-width: thin;\r\n    border-color: white;\r\n    -webkit-transform: rotate(10deg);\r\n            transform: rotate(10deg);\r\n    margin: 4px;\r\n}\r\n.pbTileOnRackText {\r\n    position: absolute;   \r\n    bottom: 2px;\r\n    left: 11px; \r\n    font-weight: bolder;\r\n    text-align: center;\r\n    text-shadow: 2px 2px  grey;\r\n    font-family: monospace;\r\n    font-size: xx-large;\r\n}\r\n.pbTileOnRack.P {\r\n    color: var(--prisonersTileColour);\r\n}\r\n.pbTileOnRack.G {\r\n    color: var(--guardsTileColour);\r\n}\r\n.pbRescuesMade {\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color:var(--commonTextColour);\r\n    border-color: var(--commonBorderColour);\r\n    border-width: 3px;\r\n    border-style: solid;\r\n    padding-left: 3px;\r\n    font-family: var(--commonFontFamily);\r\n    font-size: 30px;\r\n}\r\n.pbActionButtonDiv {\r\n    margin-left: 7px;\r\n}\r\n.pbActionButton {\r\n    /* background-image: url('../../public/actionButton.png'); */\r\n    padding: 2px 2px 2px 2px;\r\n    margin-left: 5px;\r\n    border-radius: 35px;\r\n    border-width: 0px;\r\n    border-color: var(--commonBorderColour);\r\n    border-style: solid;\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color: var(--commonTextColour);\r\n    font-style: bolder;\r\n    font-family: var(--commonFontFamily);\r\n    width: 200px;\r\n    word-spacing: 3px;\r\n}\r\n.pbActionButtonText {\r\n    margin-left: 5px;\r\n    margin-right: 15px;\r\n}\r\n.pbActionButtonSevere {\r\n    background-color: red;\r\n    border: none;\r\n}\r\n.pbActionButtonSevereText {\r\n    color: black;\r\n}\r\n.pbActionButtonSevereText2 {\r\n    color: whitesmoke;\r\n    font-size: small;\r\n    display: table; /* This makes it go on the next line */\r\n    margin: auto; /* This is the only way I could centre it! */\r\n}\r\n.pbLobbyRackSizePrompt {\r\n    margin-left: 15px;\r\n    margin-right: 20px;\r\n    font-family: var(--commonHeaderFontFamily);\r\n    font-weight: bold;\r\n}\r\n.pbLobbyRackSizePrompt:before {\r\n    content: \"Cell Block\";\r\n}\r\n.pbLobbyRackSizePrompt::after {\r\n    content: \":\";\r\n    padding-left: 2px;\r\n}\r\n.pbLobbyRackSize {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\r\n    vertical-align: middle;\r\n    background-size: var(--cellBlockSide);\r\n    background-color: grey;\r\n    color: whitesmoke;\r\n    width: var(--cellBlockSide);\r\n    height: var(--cellBlockSide);\r\n    margin-right:20px;\r\n    align-content: center;\r\n}\r\n.pbLobbyRackSizeSelected {\r\n    vertical-align: middle;\r\n    /* background-image: url(\"../../public/prisonbars-square.png\");\r\n    background-size: var(--cellBlockSide); */\r\n    background-color: var(--selectedColor);\r\n    color: white;\r\n    width: var(--cellBlockSide);\r\n    height: var(--cellBlockSelectedHeight);\r\n    margin-right:20px;\r\n    border-width: 1px;\r\n    border-color: lightgrey;\r\n    border-style: solid;\r\n}\r\n.pbLobbyRackSizeSelected:focus {\r\n    outline: none;\r\n}\r\n.pbLobbyCellBlockInfo {\r\n    font-family: var(--commonFontFamily);\r\n    font-style: italic;\r\n    padding-left: 5px;\r\n}\r\n.pbChat {\r\n    align-items: left;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    border-width: 3px;\r\n    border-style: none solid none solid;\r\n    border-color: var(--commonBorderColour);\r\n    max-height: 600px;\r\n    overflow-y: scroll;\r\n}\r\n.pbChatTable {\r\n    border-color: var(--commonBorderColour);\r\n}\r\n.pbChatFrom {\r\n    background-color: black;\r\n    color: white;\r\n    padding-right: 5px;\r\n    vertical-align: top;\r\n}\r\n.pbChatFrom::before {\r\n    content: \">\";\r\n    color: yellow;\r\n}\r\n.pbChatFrom::after {\r\n    content: \":\";\r\n    color: yellow;\r\n    font-size: larger;\r\n    padding-left: 1px;\r\n}\r\n.pbChatMsg {\r\n    padding-left: 5px;\r\n    font-style: italic;\r\n    color:whitesmoke;\r\n    background-color: black;\r\n    padding-top:2px;\r\n}\r\n.pbChatInput {\r\n    font-style: italic;\r\n    color:whitesmoke;\r\n    background-color: var(--commonBorderColour);\r\n    width: 100%;\r\n}\r\n.pbChatInputEmpty {\r\n    background-color: whitesmoke;\r\n    width: 100%;\r\n    max-block-size: 30px;\r\n    cursor: text;\r\n}\r\n.pbSnatDiv {\r\n    align-items: left;\r\n    display: display-box;\r\n    flex-direction: column;\r\n    justify-content: left;\r\n    border-width: 5px;\r\n    border-style: none none solid solid;\r\n    border-color: black;\r\n    max-height: 300px;\r\n    max-width: 450px;\r\n    overflow-y: scroll;\r\n}\r\n.pbSnat {\r\n    background-color: black;\r\n    color: white;\r\n    font-family: monospace;\r\n    margin: auto;\r\n}", "",{"version":3,"sources":["webpack://pages/pb/prisonbreak.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --commonBorderColour: grey;/* pb */\r\n    --commonTextBackgroundColour: black; /* pb */\r\n    --commonTextColour: whitesmoke; /* pb */\r\n    --commonHeaderFontFamily: Arial, Helvetica, sans-serif; /* pb */\r\n    --commonFontFamily: Verdana, Geneva, Tahoma, sans-serif; /* pb */\r\n    --squareSide: 40px;\r\n    --cellBlockSide: 40px;\r\n    --cellBlockSelectedHeight: 42px;\r\n    --selectedColor: hsl(207, 90%, 56%);\r\n    --lobbyFontSize: 20px;\r\n    --tileBackgroundColour: orangered;\r\n    --prisonersTileColour: whitesmoke;\r\n    --guardsTileColour: black;\r\n}\r\n.commonFontFamily { /* pb */\r\n    font-family: var(--commonFontFamily);\r\n}\r\n.topBarHeight {\r\n    height: 60px;\r\n}\r\n.examineFooterHeight {\r\n    height: 90px;\r\n}\r\n.topBarCorner {\r\n    width: 20%;\r\n    height: 50%;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n.fullWidth {\r\n    width: 100%;\r\n}\r\n.formalinfo {\r\n    font-family: var(--commonFontFamily);\r\n    letter-spacing: 1px;\r\n}\r\n.prisonbreak {\r\n    background-image: url(\"../../public/Wall.jpg\");\r\n    background-size: cover;\r\n}\r\n.pbGameid {\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color: var(--commonTextColour);\r\n    border-color: var(--commonBorderColour);\r\n    border-width: 0 0 3px 3px;\r\n    border-style: solid;\r\n}\r\n.pbtitle {\r\n    background-color: grey;\r\n    font-size: 2.8em;\r\n    text-align: center;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    /* font-style: italic; */\r\n    color:black;\r\n}\r\n.pbhomelink {\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color: var(--commonTextColour);\r\n    text-align: right;\r\n    border-color: var(--commonBorderColour);\r\n    border-width: 0 3px 3px 0;\r\n    border-style: solid;\r\n}\r\n.pbPlayerOuterSection {\r\n    /* border-left: 2px solid black;\r\n    border-right: 2px solid black;\r\n    border-top: 2px solid black; */\r\n    /* width: 360px; */\r\n    padding-top: 3px;\r\n    /* background-image: url(\"../../public/Wall.jpg\");\r\n    background-repeat: repeat;\r\n    background-size: cover; */\r\n}\r\n/* .pbPlayerOuterSection:hover {\r\n    background-image: url(\"../../public/Escapee.png\");\r\n    opacity: 75%;\r\n} */\r\n.pbPlayerInnerSection {\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    font-size: x-large;\r\n}\r\n.pbPlayerTitle {\r\n    font-family: var(--commonFontFamily);\r\n    background-image: url('../../public/playertitle.png');\r\n    background-repeat: repeat;\r\n    border-radius: 35px;\r\n    background-color: whitesmoke;\r\n    color: whitesmoke;\r\n    letter-spacing: 2px;\r\n    font-weight: lighter;\r\n    text-align: center;\r\n    padding-left: 6px;\r\n    padding-right: 5px;\r\n    border-style: inset;\r\n    border-width: 2px;\r\n}\r\n.pbPlayerTitle.P {\r\n    font-size: inherit;   \r\n}\r\n.pbPlayerTitle.G {\r\n    font-size: inherit;    \r\n}\r\n.pbSquareOuter { /* Thin black border around each board square */\r\n    border: solid;\r\n    border-width: thin;\r\n    border-color: black;\r\n    border-style: solid;\r\n    padding: 0px; /* So nothing appears between the squares - keep them flush */\r\n}\r\n.pbSquareInner { /* Common board square properties */\r\n    height: var(--squareSide);\r\n    width: var(--squareSide);\r\n    border-style: none;\r\n}\r\n.pbSquareInner:focus { /* No outline when in focus */\r\n    outline: none;\r\n}\r\n.pbSquareInner.style1 { /* Alternating square style 1 */\r\n    background-color: black;\r\n    color: black;\r\n}\r\n.pbSquareInner.style2 { /* Alternating square style 2 */\r\n    background-color: darkgrey;\r\n    color: darkgrey;\r\n}\r\n.pbSquareInner.CenterSquare { /* Centre square */\r\n    padding-top: 3px;\r\n    border-style: none;\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color: cornsilk;\r\n    font-size: x-large;\r\n}\r\n.pbSquareInner.EscapeHatch { /* Escape hatch square */\r\n    padding-top: 3px;\r\n    border-style: solid;\r\n    border-color: var(--commonBorderColour);\r\n    border-width: thin;\r\n    background-color: orangered;\r\n    color: whitesmoke;\r\n    text-align: center;\r\n}\r\n.pbSquareInner.PlayerTile { /* Player tile image on the square */\r\n    background-image: url('../../public/tile.png');\r\n    background-size: cover;\r\n    background-color: var(--tileBackgroundColour);\r\n    position: relative;\r\n}\r\n.pbSquareTileText { /* The tile played on the board */\r\n    position: absolute;   \r\n    bottom: 3px;\r\n    left: 12px; \r\n    font-weight: bolder;\r\n    text-align: center;\r\n    text-shadow: 2px 2px  grey;\r\n    font-family: monospace;\r\n    font-size: xx-large;\r\n}\r\n.pbSquareTileText.P { /* Prisoners tile color */\r\n    color: var(--prisonersTileColour);\r\n}\r\n.pbSquareTileText.G { /* Guards tile color */\r\n    color: var(--guardsTileColour);\r\n}\r\n.u::after {\r\n    content: \"u\";\r\n    font-size: small;\r\n}\r\n.pbSquareInner.RightArrow { /* Right arrow word direction indicator */\r\n    padding: 0%;\r\n    border-style: none;\r\n    background-color: grey;\r\n    color: cyan;\r\n    font-weight: bolder;\r\n    text-align: center;\r\n}\r\n.pbSquareInner.DownArrow { /* Down arrow word direction indicator */\r\n    padding: 0%;\r\n    border-style: none;\r\n    background-color: grey;\r\n    color: cyan;\r\n    font-weight: bolder;\r\n    text-align: center;\r\n}\r\n.pbRow {\r\n    padding: 0%;\r\n}\r\n.pbBoardPlusUnderboard {\r\n    /* background-image: url('../../public/Wall.jpg');\r\n    background-size: contain; */\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n}\r\n.pbBoard {\r\n    border-style: solid;\r\n    border-width: 0px;\r\n    border-color: var(--commonBorderColour);\r\n}\r\n.pbBoardColumnHeaderRow {\r\n    font-family: var(--commonHeaderFontFamily);\r\n    text-align: center;\r\n    line-height: var(--cellBlockSide);\r\n}\r\n.pbBoardColumnHeader {\r\n    background-image: url('../../public/BarbedWireRotated.png');\r\n    background-size: cover;\r\n    background-repeat: repeat;\r\n    background-color: black;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n.pbBoardRowHeader {\r\n    font-family: var(--commonHeaderFontFamily);\r\n    background-image: url('../../public/BarbedWire.png');\r\n    background-size: cover;\r\n    background-repeat: repeat;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n.pbBoardHeaderTopLeft {\r\n    min-width: var(--cellBlockSide);\r\n    min-height: var(--cellBlockSide);\r\n    background-image: url('../../public/BarbedWireRotated.png');\r\n    background-size: cover;\r\n}\r\n.pbBoardHeaderTopRight {\r\n    min-width: var(--cellBlockSide);\r\n    min-height: var(--cellBlockSide);\r\n    background-image: url('../../public/BarbedWire.png');\r\n    background-size: cover;\r\n}\r\n.pbBoardHeaderBottomLeft {\r\n    min-width: var(--cellBlockSide);\r\n    min-height: var(--cellBlockSide);\r\n    background-image: url('../../public/BarbedWire.png');\r\n    background-size: cover;\r\n}\r\n.pbBoardHeaderBottomRight {\r\n    min-width: var(--cellBlockSide);\r\n    min-height: var(--cellBlockSide);\r\n    background-image: url('../../public/BarbedWireRotated.png');\r\n    background-size: cover;\r\n}\r\n.pbUnderboard {\r\n    margin-top: 10px;\r\n    border-style: solid;\r\n    border-color: var(--commonBorderColour);\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color: var(--commonTextColour);\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n.pbTileAndMovesOuter {\r\n    align-items: left;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    max-width: 250px;\r\n}\r\n.pbTilepool {\r\n    text-align: left;\r\n    border-width: 3px;\r\n    border-style: solid solid none solid;\r\n    border-color: var(--commonBorderColour);\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color: var(--commonTextColour);\r\n    font-family: monospace;\r\n    font-size: xx-small;\r\n    word-wrap: break-word;\r\n}\r\n.pbTilepoolDivider {\r\n    width: 2px;\r\n    vertical-align: top;\r\n    font-size: larger;\r\n}\r\n.pbTilepoolDivider::after {\r\n    content: \".\";\r\n}\r\n.pbTilepoolTitle {\r\n    font-size: 150%;\r\n    letter-spacing: 3px;\r\n    border-bottom-style: dotted;\r\n    border-color: var(--commonBorderColour);\r\n}\r\n.pbTilepoolTile {\r\n    font-size: small;\r\n    padding-left: 2px;\r\n    padding-right: 2px;\r\n}\r\n.pbMoves {\r\n    text-align: left;\r\n    border-width: 3px;\r\n    border-style: solid;\r\n    border-color: var(--commonBorderColour);\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color: var(--commonTextColour);\r\n    font-family: monospace;\r\n    font-size: xx-small;\r\n}\r\n.pbMovesTitle {\r\n    font-size: 150%;\r\n    letter-spacing: 3px;\r\n    border-bottom-style: dotted;\r\n    border-color: var(--commonBorderColour);\r\n}\r\n.pbMovesScrollable {\r\n    max-height: 550px;\r\n    /* max-width: 250px; */\r\n    overflow-x: scroll;\r\n    overflow-y: scroll;\r\n    scroll-behavior: auto;\r\n}\r\n.pbMove {\r\n    font-size: small;\r\n    padding-left: 2px;\r\n    padding-right: 2px;\r\n}\r\n.pbMove:hover {\r\n    background-color: magenta;\r\n    cursor: pointer;\r\n}\r\n.pbMove.by {\r\n    color: yellow;\r\n}\r\n.pbMove.SWAP {\r\n    color: cyan;\r\n}\r\n.pbMove.SWAP::after {\r\n    content: \"Swap tiles\";\r\n}\r\n.pbMove.PASS {\r\n    color: red;\r\n}\r\n.pbMove.PASS::after {\r\n    content: \"Pass turn\";\r\n}\r\n.pbMove.PLAY {\r\n    color: var(--commonTextColour);\r\n}\r\n.pbTilerack {\r\n    padding-top: 2px;\r\n    padding-bottom: 5px;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n.pbTilerackArrow {\r\n    /*\r\n        I got this idea online.\r\n        It is a box with a border, but the box has no height or width leaving just borders.\r\n        When the 4 borders meet (no box) it is like 4 triangles (imagine X ).\r\n        You make 3 borders transparent, leaving only the triangle you want to display.\r\n    */\r\n    margin-top: 13px; /* push the arrow down to the middle */\r\n    margin-right: 5px; /* put some space between the arrow and tilerack */\r\n    width: 0; \r\n    height: 0; \r\n    border-top: 7px solid transparent; /* less than 15px here and next line for a more slender arrow */\r\n    border-bottom: 7px solid transparent;   \r\n    border-left: 15px solid rgb(44, 240, 37);\r\n}\r\n.pbTilerackArrowInFooter {\r\n    margin-top: 2px;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 7px solid transparent; /* less than 15px here and next line for a more slender arrow */\r\n    border-bottom: 7px solid transparent;   \r\n    border-left: 15px solid rgb(44, 240, 37);\r\n}\r\n.pbTileOnRack {\r\n    background-image: url('../../public/tile.png');\r\n    background-size: cover;\r\n    background-color: var(--tileBackgroundColour);\r\n    width: var(--squareSide);\r\n    height: var(--squareSide);\r\n    position: relative;\r\n}\r\n.pbTileOnRack.Unselected {\r\n    border: none;\r\n}\r\n.pbTileOnRack.Selected {\r\n    border-style: inset;\r\n    border-width: thin;\r\n    border-color: white;\r\n    transform: rotate(10deg);\r\n    margin: 4px;\r\n}\r\n.pbTileOnRackText {\r\n    position: absolute;   \r\n    bottom: 2px;\r\n    left: 11px; \r\n    font-weight: bolder;\r\n    text-align: center;\r\n    text-shadow: 2px 2px  grey;\r\n    font-family: monospace;\r\n    font-size: xx-large;\r\n}\r\n.pbTileOnRack.P {\r\n    color: var(--prisonersTileColour);\r\n}\r\n.pbTileOnRack.G {\r\n    color: var(--guardsTileColour);\r\n}\r\n.pbRescuesMade {\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color:var(--commonTextColour);\r\n    border-color: var(--commonBorderColour);\r\n    border-width: 3px;\r\n    border-style: solid;\r\n    padding-left: 3px;\r\n    font-family: var(--commonFontFamily);\r\n    font-size: 30px;\r\n}\r\n.pbActionButtonDiv {\r\n    margin-left: 7px;\r\n}\r\n.pbActionButton {\r\n    /* background-image: url('../../public/actionButton.png'); */\r\n    padding: 2px 2px 2px 2px;\r\n    margin-left: 5px;\r\n    border-radius: 35px;\r\n    border-width: 0px;\r\n    border-color: var(--commonBorderColour);\r\n    border-style: solid;\r\n    background-color: var(--commonTextBackgroundColour);\r\n    color: var(--commonTextColour);\r\n    font-style: bolder;\r\n    font-family: var(--commonFontFamily);\r\n    width: 200px;\r\n    word-spacing: 3px;\r\n}\r\n.pbActionButtonText {\r\n    margin-left: 5px;\r\n    margin-right: 15px;\r\n}\r\n.pbActionButtonSevere {\r\n    background-color: red;\r\n    border: none;\r\n}\r\n.pbActionButtonSevereText {\r\n    color: black;\r\n}\r\n.pbActionButtonSevereText2 {\r\n    color: whitesmoke;\r\n    font-size: small;\r\n    display: table; /* This makes it go on the next line */\r\n    margin: auto; /* This is the only way I could centre it! */\r\n}\r\n.pbLobbyRackSizePrompt {\r\n    margin-left: 15px;\r\n    margin-right: 20px;\r\n    font-family: var(--commonHeaderFontFamily);\r\n    font-weight: bold;\r\n}\r\n.pbLobbyRackSizePrompt:before {\r\n    content: \"Cell Block\";\r\n}\r\n.pbLobbyRackSizePrompt::after {\r\n    content: \":\";\r\n    padding-left: 2px;\r\n}\r\n.pbLobbyRackSize {\r\n    background-image: url(\"../../public/prisonbars-square.png\");\r\n    vertical-align: middle;\r\n    background-size: var(--cellBlockSide);\r\n    background-color: grey;\r\n    color: whitesmoke;\r\n    width: var(--cellBlockSide);\r\n    height: var(--cellBlockSide);\r\n    margin-right:20px;\r\n    align-content: center;\r\n}\r\n.pbLobbyRackSizeSelected {\r\n    vertical-align: middle;\r\n    /* background-image: url(\"../../public/prisonbars-square.png\");\r\n    background-size: var(--cellBlockSide); */\r\n    background-color: var(--selectedColor);\r\n    color: white;\r\n    width: var(--cellBlockSide);\r\n    height: var(--cellBlockSelectedHeight);\r\n    margin-right:20px;\r\n    border-width: 1px;\r\n    border-color: lightgrey;\r\n    border-style: solid;\r\n}\r\n.pbLobbyRackSizeSelected:focus {\r\n    outline: none;\r\n}\r\n.pbLobbyCellBlockInfo {\r\n    font-family: var(--commonFontFamily);\r\n    font-style: italic;\r\n    padding-left: 5px;\r\n}\r\n.pbChat {\r\n    align-items: left;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    border-width: 3px;\r\n    border-style: none solid none solid;\r\n    border-color: var(--commonBorderColour);\r\n    max-height: 600px;\r\n    overflow-y: scroll;\r\n}\r\n.pbChatTable {\r\n    border-color: var(--commonBorderColour);\r\n}\r\n.pbChatFrom {\r\n    background-color: black;\r\n    color: white;\r\n    padding-right: 5px;\r\n    vertical-align: top;\r\n}\r\n.pbChatFrom::before {\r\n    content: \">\";\r\n    color: yellow;\r\n}\r\n.pbChatFrom::after {\r\n    content: \":\";\r\n    color: yellow;\r\n    font-size: larger;\r\n    padding-left: 1px;\r\n}\r\n.pbChatMsg {\r\n    padding-left: 5px;\r\n    font-style: italic;\r\n    color:whitesmoke;\r\n    background-color: black;\r\n    padding-top:2px;\r\n}\r\n.pbChatInput {\r\n    font-style: italic;\r\n    color:whitesmoke;\r\n    background-color: var(--commonBorderColour);\r\n    width: 100%;\r\n}\r\n.pbChatInputEmpty {\r\n    background-color: whitesmoke;\r\n    width: 100%;\r\n    max-block-size: 30px;\r\n    cursor: text;\r\n}\r\n.pbSnatDiv {\r\n    align-items: left;\r\n    display: display-box;\r\n    flex-direction: column;\r\n    justify-content: left;\r\n    border-width: 5px;\r\n    border-style: none none solid solid;\r\n    border-color: black;\r\n    max-height: 300px;\r\n    max-width: 450px;\r\n    overflow-y: scroll;\r\n}\r\n.pbSnat {\r\n    background-color: black;\r\n    color: white;\r\n    font-family: monospace;\r\n    margin: auto;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/tm/tm.css":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/tm/tm.css ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/getUrl.js */ "./node_modules/next/dist/compiled/css-loader/getUrl.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_transmogrify_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/transmogrify.jpg */ "./public/transmogrify.jpg");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_transmogrify_jpg__WEBPACK_IMPORTED_MODULE_2__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".tm_numMovesDiv {\r\n    padding-bottom: 2px;\r\n    background-color: blue;\r\n    color: whitesmoke;\r\n    text-align: center;\r\n}\r\n.tm_numMovesSelected {\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    margin-right: 2px;\r\n}\r\n.tm_numMovesSelected:focus {\r\n    outline: none;\r\n}\r\n.tm_numMovesUnselected {\r\n    background-color: black;\r\n    color: whitesmoke;\r\n    outline: none;\r\n    margin-right: 2px;\r\n}\r\n.tm_numMovesUnselected:focus {\r\n    outline: none;\r\n}\r\n.tm_startPuzzleDiv {\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    text-align: center;\r\n}\r\n.tm_puzzleDiv {\r\n    text-align: center;\r\n    padding: 5px;\r\n    margin-top: 5px;\r\n    background-color: blue;\r\n    color: whitesmoke;\r\n}\r\n.tm_puzzleDiv span:nth-child(even) {\r\n    background-color: blue;\r\n    padding-right: 10px;\r\n}\r\n.tm_puzzleDiv span:nth-child(1) {\r\n    background-color: green;\r\n    padding: 0px 5px;\r\n    color: whitesmoke;\r\n    text-transform: uppercase;\r\n    text-align: right;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: larger;\r\n    letter-spacing: 1px;\r\n}\r\n.tm_puzzleDiv span:nth-child(2) {\r\n    padding-left: 10px;\r\n}\r\n.tm_puzzleDiv span:nth-child(3) {\r\n    background-color: green;\r\n    padding: 0px 5px;\r\n    color: whitesmoke;\r\n    text-transform: uppercase;\r\n    text-align: right;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: larger;\r\n    letter-spacing: 1px;\r\n}\r\n.tm_puzzleDiv span:nth-child(6) {\r\n    padding-left: 10px;\r\n}\r\n.tm_puzzleDiv p {\r\n    margin-top: 5px;\r\n}\r\n.tm_solutionOuterDiv {\r\n    margin-top: 5px;\r\n}\r\n.tm_solutionDiv {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    align-items: center;\r\n    min-height: 225px;\r\n    min-width: 370px;\r\n}\r\n.tm_solutionDiv table {\r\n    text-align: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    letter-spacing: 1px;\r\n}\r\n.tm_solutionDiv td {\r\n    text-transform: uppercase;\r\n}\r\n.tm_solutionDiv tr:not(:first-child):not(:last-child) {\r\n    color: yellow;\r\n    text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;\r\n    font-weight: bold;\r\n}\r\n.tm_nextword {\r\n    font-size: x-large;\r\n}\r\n.tm_arrow {\r\n    color: cyan;\r\n    text-shadow: none;\r\n    background-color: black;\r\n}\r\n.tm_solutionDiv tr:first-child {\r\n    background-color: green;\r\n    color: whitesmoke !important;\r\n}\r\n.tm_solutionDiv tr:last-child {\r\n    background-color: green;\r\n    color: whitesmoke;\r\n}\r\n\r\n\r\n.tm_Backspace {\r\n    background-color: blue;\r\n}\r\n.tm_Backspace::before {\r\n    content: '\\003Cx';\r\n}\r\n.tm_KeyGoDiv {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.tm_KeyGo {\r\n    border: 1px solid white;\r\n    background-color: blue;\r\n    color: white;\r\n    border-radius: 5px;\r\n    font-size: larger;\r\n}\r\n.tm_lastbuttons {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 5px;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    padding-bottom: 5px;\r\n}\r\n.tm_quit {\r\n    background-color: red;\r\n    color: whitesmoke;\r\n    border: 1px solid white;\r\n}\r\n.tm_validwordsdiv {\r\n    width: 370px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n.tm_validwordsdiv p {\r\n    border-top: 8px solid white;\r\n    border-bottom: 8px solid white;\r\n    background-color: blue;\r\n    color: white;\r\n    margin-top: 10px;\r\n    flex-basis: 100%;\r\n    text-align: center;\r\n    text-transform: capitalize;\r\n}\r\n.tm_validwordsdiv p::before {\r\n    content: '<<< ';\r\n}\r\n.tm_validwordsdiv p::after {\r\n    content: ' >>>';\r\n}\r\n.tm_validwordsdiv span {\r\n    text-transform: uppercase;\r\n    color: yellow;\r\n    text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n.tm_congrats {\r\n    margin-top: 5px;\r\n    text-align: center;\r\n    color: aqua;\r\n    font-style: italic;\r\n}\r\n.tm_hintsheader {\r\n    border-top: 8px solid;\r\n    border-bottom: 8px solid;\r\n    width: 370px;\r\n    height: 58px;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    background-color: blue;\r\n    color: whitesmoke;\r\n}\r\n", "",{"version":3,"sources":["webpack://pages/tm/tm.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,sBAAsB;IACtB,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,4BAA4B;IAC5B,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,aAAa;AACjB;AACA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,aAAa;IACb,iBAAiB;AACrB;AACA;IACI,aAAa;AACjB;AACA;IACI,eAAe;IACf,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,sBAAsB;IACtB,iBAAiB;AACrB;AACA;IACI,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,iBAAiB;IACjB,yBAAyB;IACzB,iBAAiB;IACjB,8CAA8C;IAC9C,iBAAiB;IACjB,mBAAmB;AACvB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,iBAAiB;IACjB,yBAAyB;IACzB,iBAAiB;IACjB,8CAA8C;IAC9C,iBAAiB;IACjB,mBAAmB;AACvB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,yDAAsD;IACtD,sBAAsB;IACtB,4BAA4B;IAC5B,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,6CAA6C;IAC7C,iBAAiB;AACrB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,iBAAiB;IACjB,uBAAuB;AAC3B;AACA;IACI,uBAAuB;IACvB,4BAA4B;AAChC;AACA;IACI,uBAAuB;IACvB,iBAAiB;AACrB;;;AAGA;IACI,sBAAsB;AAC1B;AACA;IACI,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,uBAAuB;IACvB,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,uBAAuB;AAC3B;AACA;IACI,YAAY;IACZ,aAAa;IACb,eAAe;AACnB;AACA;IACI,2BAA2B;IAC3B,8BAA8B;IAC9B,sBAAsB;IACtB,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;IAClB,0BAA0B;AAC9B;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,yBAAyB;IACzB,aAAa;IACb,6CAA6C;IAC7C,iBAAiB;IACjB,eAAe;AACnB;AACA;IACI,eAAe;IACf,kBAAkB;IAClB,WAAW;IACX,kBAAkB;AACtB;AACA;IACI,qBAAqB;IACrB,wBAAwB;IACxB,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,sBAAsB;IACtB,iBAAiB;AACrB","sourcesContent":[".tm_numMovesDiv {\r\n    padding-bottom: 2px;\r\n    background-color: blue;\r\n    color: whitesmoke;\r\n    text-align: center;\r\n}\r\n.tm_numMovesSelected {\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    margin-right: 2px;\r\n}\r\n.tm_numMovesSelected:focus {\r\n    outline: none;\r\n}\r\n.tm_numMovesUnselected {\r\n    background-color: black;\r\n    color: whitesmoke;\r\n    outline: none;\r\n    margin-right: 2px;\r\n}\r\n.tm_numMovesUnselected:focus {\r\n    outline: none;\r\n}\r\n.tm_startPuzzleDiv {\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    text-align: center;\r\n}\r\n.tm_puzzleDiv {\r\n    text-align: center;\r\n    padding: 5px;\r\n    margin-top: 5px;\r\n    background-color: blue;\r\n    color: whitesmoke;\r\n}\r\n.tm_puzzleDiv span:nth-child(even) {\r\n    background-color: blue;\r\n    padding-right: 10px;\r\n}\r\n.tm_puzzleDiv span:nth-child(1) {\r\n    background-color: green;\r\n    padding: 0px 5px;\r\n    color: whitesmoke;\r\n    text-transform: uppercase;\r\n    text-align: right;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: larger;\r\n    letter-spacing: 1px;\r\n}\r\n.tm_puzzleDiv span:nth-child(2) {\r\n    padding-left: 10px;\r\n}\r\n.tm_puzzleDiv span:nth-child(3) {\r\n    background-color: green;\r\n    padding: 0px 5px;\r\n    color: whitesmoke;\r\n    text-transform: uppercase;\r\n    text-align: right;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: larger;\r\n    letter-spacing: 1px;\r\n}\r\n.tm_puzzleDiv span:nth-child(6) {\r\n    padding-left: 10px;\r\n}\r\n.tm_puzzleDiv p {\r\n    margin-top: 5px;\r\n}\r\n.tm_solutionOuterDiv {\r\n    margin-top: 5px;\r\n}\r\n.tm_solutionDiv {\r\n    background-image: url('../../public/transmogrify.jpg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    align-items: center;\r\n    min-height: 225px;\r\n    min-width: 370px;\r\n}\r\n.tm_solutionDiv table {\r\n    text-align: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    letter-spacing: 1px;\r\n}\r\n.tm_solutionDiv td {\r\n    text-transform: uppercase;\r\n}\r\n.tm_solutionDiv tr:not(:first-child):not(:last-child) {\r\n    color: yellow;\r\n    text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;\r\n    font-weight: bold;\r\n}\r\n.tm_nextword {\r\n    font-size: x-large;\r\n}\r\n.tm_arrow {\r\n    color: cyan;\r\n    text-shadow: none;\r\n    background-color: black;\r\n}\r\n.tm_solutionDiv tr:first-child {\r\n    background-color: green;\r\n    color: whitesmoke !important;\r\n}\r\n.tm_solutionDiv tr:last-child {\r\n    background-color: green;\r\n    color: whitesmoke;\r\n}\r\n\r\n\r\n.tm_Backspace {\r\n    background-color: blue;\r\n}\r\n.tm_Backspace::before {\r\n    content: '\\003Cx';\r\n}\r\n.tm_KeyGoDiv {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.tm_KeyGo {\r\n    border: 1px solid white;\r\n    background-color: blue;\r\n    color: white;\r\n    border-radius: 5px;\r\n    font-size: larger;\r\n}\r\n.tm_lastbuttons {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 5px;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    padding-bottom: 5px;\r\n}\r\n.tm_quit {\r\n    background-color: red;\r\n    color: whitesmoke;\r\n    border: 1px solid white;\r\n}\r\n.tm_validwordsdiv {\r\n    width: 370px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n.tm_validwordsdiv p {\r\n    border-top: 8px solid white;\r\n    border-bottom: 8px solid white;\r\n    background-color: blue;\r\n    color: white;\r\n    margin-top: 10px;\r\n    flex-basis: 100%;\r\n    text-align: center;\r\n    text-transform: capitalize;\r\n}\r\n.tm_validwordsdiv p::before {\r\n    content: '<<< ';\r\n}\r\n.tm_validwordsdiv p::after {\r\n    content: ' >>>';\r\n}\r\n.tm_validwordsdiv span {\r\n    text-transform: uppercase;\r\n    color: yellow;\r\n    text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n.tm_congrats {\r\n    margin-top: 5px;\r\n    text-align: center;\r\n    color: aqua;\r\n    font-style: italic;\r\n}\r\n.tm_hintsheader {\r\n    border-top: 8px solid;\r\n    border-bottom: 8px solid;\r\n    width: 370px;\r\n    height: 58px;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    background-color: blue;\r\n    color: whitesmoke;\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".tooltip {\r\n  position: top;\r\n  display: inline-block;\r\n}\r\n\r\n.tooltip .tooltiptext {\r\n  visibility: hidden;\r\n  width: 120px;\r\n  background-color: black;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  padding: 5px 0;\r\n\r\n  /* Position the tooltip */\r\n  position: absolute;\r\n  z-index: 1;\r\n  bottom: 100%;\r\n  left: 50%;\r\n  margin-left: -60%;\r\n}\r\n\r\n.tooltip:hover .tooltiptext {\r\n  visibility: visible;\r\n}\r\n.insertCount {\r\n  background-color: teal;\r\n  color: white;\r\n  border-radius: 100%;\r\n  text-align: center;\r\n  width: 20px;\r\n}\r\n.insertCountSpacer {\r\n  width: 20px;\r\n}\r\n.swapCount {\r\n  background-color: cornflowerblue;\r\n  color: darkblue;\r\n  border-radius: 100%;\r\n  /* border-left: 5px solid darkgray;\r\n  border-right: 5px solid darkgray; */\r\n  text-align: center;\r\n}\r\n.anagramCount {\r\n  background-color: slategray;\r\n  color: lightgreen;\r\n  border-radius: 100%;\r\n  text-align: center;\r\n  border-left: 5px solid slategray;\r\n  border-right: 5px solid slategray;\r\n}\r\n.dropRow {\r\n  line-height: 5px;\r\n}\r\n.dropIndicator {\r\n  color: black !important;\r\n  text-align: left;\r\n  padding-left: 2px;\r\n  padding-bottom: 2px;\r\n  vertical-align: top;\r\n  font-weight: bolder;\r\n  font-size: x-large;\r\n}\r\n.balloonstring {\r\n  text-align: center;\r\n  vertical-align: top;\r\n  color: white;\r\n  -webkit-transform: rotate(90deg);\r\n          transform: rotate(90deg);  \r\n}\r\n.closeme {\r\n  vertical-align: top;\r\n}\r\n.closemebutton {\r\n  border: none;\r\n  margin: auto;\r\n  color: red;\r\n  background-color: var(--trcssPageBG);\r\n}\r\n.closemebutton::before {\r\n  content: '\\22A0'; /* X in a box */\r\n}", "",{"version":3,"sources":["webpack://pages/wi/wordinfo.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,uBAAuB;EACvB,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,cAAc;;EAEd,yBAAyB;EACzB,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,sBAAsB;EACtB,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,gCAAgC;EAChC,eAAe;EACf,mBAAmB;EACnB;qCACmC;EACnC,kBAAkB;AACpB;AACA;EACE,2BAA2B;EAC3B,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,gCAAgC;EAChC,iCAAiC;AACnC;AACA;EACE,gBAAgB;AAClB;AACA;EACE,uBAAuB;EACvB,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,gCAAwB;UAAxB,wBAAwB;AAC1B;AACA;EACE,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,YAAY;EACZ,UAAU;EACV,oCAAoC;AACtC;AACA;EACE,gBAAgB,EAAE,eAAe;AACnC","sourcesContent":[".tooltip {\r\n  position: top;\r\n  display: inline-block;\r\n}\r\n\r\n.tooltip .tooltiptext {\r\n  visibility: hidden;\r\n  width: 120px;\r\n  background-color: black;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  padding: 5px 0;\r\n\r\n  /* Position the tooltip */\r\n  position: absolute;\r\n  z-index: 1;\r\n  bottom: 100%;\r\n  left: 50%;\r\n  margin-left: -60%;\r\n}\r\n\r\n.tooltip:hover .tooltiptext {\r\n  visibility: visible;\r\n}\r\n.insertCount {\r\n  background-color: teal;\r\n  color: white;\r\n  border-radius: 100%;\r\n  text-align: center;\r\n  width: 20px;\r\n}\r\n.insertCountSpacer {\r\n  width: 20px;\r\n}\r\n.swapCount {\r\n  background-color: cornflowerblue;\r\n  color: darkblue;\r\n  border-radius: 100%;\r\n  /* border-left: 5px solid darkgray;\r\n  border-right: 5px solid darkgray; */\r\n  text-align: center;\r\n}\r\n.anagramCount {\r\n  background-color: slategray;\r\n  color: lightgreen;\r\n  border-radius: 100%;\r\n  text-align: center;\r\n  border-left: 5px solid slategray;\r\n  border-right: 5px solid slategray;\r\n}\r\n.dropRow {\r\n  line-height: 5px;\r\n}\r\n.dropIndicator {\r\n  color: black !important;\r\n  text-align: left;\r\n  padding-left: 2px;\r\n  padding-bottom: 2px;\r\n  vertical-align: top;\r\n  font-weight: bolder;\r\n  font-size: x-large;\r\n}\r\n.balloonstring {\r\n  text-align: center;\r\n  vertical-align: top;\r\n  color: white;\r\n  transform: rotate(90deg);  \r\n}\r\n.closeme {\r\n  vertical-align: top;\r\n}\r\n.closemebutton {\r\n  border: none;\r\n  margin: auto;\r\n  color: red;\r\n  background-color: var(--trcssPageBG);\r\n}\r\n.closemebutton::before {\r\n  content: '\\22A0'; /* X in a box */\r\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".wm_lenDiv {\r\n    padding-bottom: 2px;\r\n    background-color: blue;\r\n    color: whitesmoke;\r\n    text-align: center;\r\n}\r\n.wm_lenSelected {\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    margin-right: 2px;\r\n}\r\n.wm_lenSelected:focus {\r\n    outline: none;\r\n}\r\n.wm_lenUnselected {\r\n    background-color: black;\r\n    color: whitesmoke;\r\n    outline: none;\r\n    margin-right: 2px;\r\n}\r\n.wm_lenUnselected:focus {\r\n    outline: none;\r\n}\r\n.wm_startPuzzleDiv {\r\n    border: 1px solid black;\r\n    border-radius: 10px;\r\n    background-color: cyan;\r\n    margin-top: 5px;\r\n    padding-bottom: 5px;\r\n    text-align: center;\r\n}\r\n.Outertable {\r\n    border-style: none;\r\n    vertical-align: top;\r\n}\r\n.AlignCenter {\r\n    text-align: center;\r\n}\r\n.AlignLeft {\r\n    text-align: left;\r\n}\r\n.wmlink {\r\n    background-color: darkmagenta;\r\n    color:cyan;\r\n    text-align: left;\r\n}\r\n.wmbutton {\r\n    font-size: xx-large;\r\n    background-color: #17c025;\r\n    color:azure;\r\n}\r\n.wmtitle {\r\n    font-size: 2.8em;\r\n    text-align: center;\r\n    font-family: cursive;\r\n    font-style: italic;\r\n    color:darkmagenta;\r\n}\r\n.wmh1 {\r\n    text-align: center;\r\n    font-size: xx-large;\r\n    font-family: cursive;\r\n    color:azure;\r\n}\r\n.wmh2 {\r\n    font-size: x-large;\r\n    color:azure;\r\n}\r\n.wmh3 {\r\n    color:azure;\r\n    font-size: x-large;\r\n}\r\n.wmth {\r\n    color: aliceblue;\r\n    border-style: groove;\r\n}\r\n.wmtd {\r\n    border-style: inset;\r\n    color:azure;\r\n    text-align: center;\r\n    font-family: 'Courier New', Courier, monospace;\r\n}\r\n.wmp {\r\n    color: whitesmoke;\r\n    text-align: center;\r\n}\r\n.wmlabel {\r\n    color: lightgreen;\r\n    padding-right: 5px;\r\n}\r\n.wmEasyModeLetter {\r\n    font-family: 'Courier New', Courier, monospace;\r\n    border: 1px solid white;\r\n    text-align: center;\r\n    padding: 5px 10px;\r\n    font-size: larger;\r\n}\r\n.wmEasyModeLetter.small {\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n.wmEasyModeLetter.normal {\r\n    width: 45px;\r\n    height: 45px;\r\n}\r\n.wmCorrectLetterCorrectPosition {\r\n    background-color: greenyellow;\r\n    color: black !important;\r\n}\r\n.wmCorrectLetterWrongPosition {\r\n    background-color: gold;\r\n    color: black !important;\r\n}\r\n.wmWrongLetter {\r\n    background-color: white;\r\n    color: black !important;\r\n}\r\n.wmWordUnderKeyboard {\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: 50px;\r\n    letter-spacing: 2px;\r\n    text-align: center;\r\n    border: 1px solid white;\r\n    background-color: blue;\r\n    color: white;\r\n}\r\n.wmGuessInfoDiv {\r\n    background-color: blue;\r\n    color: white;\r\n    font-size: 25px;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    padding: 2px 3px;\r\n    border: 1px solid blue;\r\n    border-radius: 10px;\r\n}\r\n", "",{"version":3,"sources":["webpack://pages/wm/mastermind.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,sBAAsB;IACtB,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,4BAA4B;IAC5B,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,aAAa;AACjB;AACA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,aAAa;IACb,iBAAiB;AACrB;AACA;IACI,aAAa;AACjB;AACA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,eAAe;IACf,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,6BAA6B;IAC7B,UAAU;IACV,gBAAgB;AACpB;AACA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,WAAW;AACf;AACA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,oBAAoB;IACpB,WAAW;AACf;AACA;IACI,kBAAkB;IAClB,WAAW;AACf;AACA;IACI,WAAW;IACX,kBAAkB;AACtB;AACA;IACI,gBAAgB;IAChB,oBAAoB;AACxB;AACA;IACI,mBAAmB;IACnB,WAAW;IACX,kBAAkB;IAClB,8CAA8C;AAClD;AACA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,8CAA8C;IAC9C,uBAAuB;IACvB,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;AACrB;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,6BAA6B;IAC7B,uBAAuB;AAC3B;AACA;IACI,sBAAsB;IACtB,uBAAuB;AAC3B;AACA;IACI,uBAAuB;IACvB,uBAAuB;AAC3B;AACA;IACI,8CAA8C;IAC9C,eAAe;IACf,mBAAmB;IACnB,kBAAkB;IAClB,uBAAuB;IACvB,sBAAsB;IACtB,YAAY;AAChB;AACA;IACI,sBAAsB;IACtB,YAAY;IACZ,eAAe;IACf,uBAAkB;IAAlB,kBAAkB;IAClB,gBAAgB;IAChB,sBAAsB;IACtB,mBAAmB;AACvB","sourcesContent":[".wm_lenDiv {\r\n    padding-bottom: 2px;\r\n    background-color: blue;\r\n    color: whitesmoke;\r\n    text-align: center;\r\n}\r\n.wm_lenSelected {\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    margin-right: 2px;\r\n}\r\n.wm_lenSelected:focus {\r\n    outline: none;\r\n}\r\n.wm_lenUnselected {\r\n    background-color: black;\r\n    color: whitesmoke;\r\n    outline: none;\r\n    margin-right: 2px;\r\n}\r\n.wm_lenUnselected:focus {\r\n    outline: none;\r\n}\r\n.wm_startPuzzleDiv {\r\n    border: 1px solid black;\r\n    border-radius: 10px;\r\n    background-color: cyan;\r\n    margin-top: 5px;\r\n    padding-bottom: 5px;\r\n    text-align: center;\r\n}\r\n.Outertable {\r\n    border-style: none;\r\n    vertical-align: top;\r\n}\r\n.AlignCenter {\r\n    text-align: center;\r\n}\r\n.AlignLeft {\r\n    text-align: left;\r\n}\r\n.wmlink {\r\n    background-color: darkmagenta;\r\n    color:cyan;\r\n    text-align: left;\r\n}\r\n.wmbutton {\r\n    font-size: xx-large;\r\n    background-color: #17c025;\r\n    color:azure;\r\n}\r\n.wmtitle {\r\n    font-size: 2.8em;\r\n    text-align: center;\r\n    font-family: cursive;\r\n    font-style: italic;\r\n    color:darkmagenta;\r\n}\r\n.wmh1 {\r\n    text-align: center;\r\n    font-size: xx-large;\r\n    font-family: cursive;\r\n    color:azure;\r\n}\r\n.wmh2 {\r\n    font-size: x-large;\r\n    color:azure;\r\n}\r\n.wmh3 {\r\n    color:azure;\r\n    font-size: x-large;\r\n}\r\n.wmth {\r\n    color: aliceblue;\r\n    border-style: groove;\r\n}\r\n.wmtd {\r\n    border-style: inset;\r\n    color:azure;\r\n    text-align: center;\r\n    font-family: 'Courier New', Courier, monospace;\r\n}\r\n.wmp {\r\n    color: whitesmoke;\r\n    text-align: center;\r\n}\r\n.wmlabel {\r\n    color: lightgreen;\r\n    padding-right: 5px;\r\n}\r\n.wmEasyModeLetter {\r\n    font-family: 'Courier New', Courier, monospace;\r\n    border: 1px solid white;\r\n    text-align: center;\r\n    padding: 5px 10px;\r\n    font-size: larger;\r\n}\r\n.wmEasyModeLetter.small {\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n.wmEasyModeLetter.normal {\r\n    width: 45px;\r\n    height: 45px;\r\n}\r\n.wmCorrectLetterCorrectPosition {\r\n    background-color: greenyellow;\r\n    color: black !important;\r\n}\r\n.wmCorrectLetterWrongPosition {\r\n    background-color: gold;\r\n    color: black !important;\r\n}\r\n.wmWrongLetter {\r\n    background-color: white;\r\n    color: black !important;\r\n}\r\n.wmWordUnderKeyboard {\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: 50px;\r\n    letter-spacing: 2px;\r\n    text-align: center;\r\n    border: 1px solid white;\r\n    background-color: blue;\r\n    color: white;\r\n}\r\n.wmGuessInfoDiv {\r\n    background-color: blue;\r\n    color: white;\r\n    font-size: 25px;\r\n    width: fit-content;\r\n    padding: 2px 3px;\r\n    border: 1px solid blue;\r\n    border-radius: 10px;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/getUrl.js */ "./node_modules/next/dist/compiled/css-loader/getUrl.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_MorphoCaterpillar_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/MorphoCaterpillar.png */ "./public/MorphoCaterpillar.png");
/* harmony import */ var _public_MorphoCocoon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/MorphoCocoon.png */ "./public/MorphoCocoon.png");
/* harmony import */ var _public_MorphoButterfly_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/MorphoButterfly.png */ "./public/MorphoButterfly.png");
/* harmony import */ var _public_transmogrify_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/transmogrify.jpg */ "./public/transmogrify.jpg");
/* harmony import */ var _public_Keyboards_v1_A_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/Keyboards/v1/A.jpg */ "./public/Keyboards/v1/A.jpg");
/* harmony import */ var _public_Keyboards_v1_B_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/Keyboards/v1/B.jpg */ "./public/Keyboards/v1/B.jpg");
/* harmony import */ var _public_Keyboards_v1_C_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/Keyboards/v1/C.jpg */ "./public/Keyboards/v1/C.jpg");
/* harmony import */ var _public_Keyboards_v1_D_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/Keyboards/v1/D.jpg */ "./public/Keyboards/v1/D.jpg");
/* harmony import */ var _public_Keyboards_v1_E_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/Keyboards/v1/E.jpg */ "./public/Keyboards/v1/E.jpg");
/* harmony import */ var _public_Keyboards_v1_F_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/Keyboards/v1/F.jpg */ "./public/Keyboards/v1/F.jpg");
/* harmony import */ var _public_Keyboards_v1_G_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/Keyboards/v1/G.jpg */ "./public/Keyboards/v1/G.jpg");
/* harmony import */ var _public_Keyboards_v1_H_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../public/Keyboards/v1/H.jpg */ "./public/Keyboards/v1/H.jpg");
/* harmony import */ var _public_Keyboards_v1_I_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../public/Keyboards/v1/I.jpg */ "./public/Keyboards/v1/I.jpg");
/* harmony import */ var _public_Keyboards_v1_J_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../public/Keyboards/v1/J.jpg */ "./public/Keyboards/v1/J.jpg");
/* harmony import */ var _public_Keyboards_v1_K_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../public/Keyboards/v1/K.jpg */ "./public/Keyboards/v1/K.jpg");
/* harmony import */ var _public_Keyboards_v1_L_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../public/Keyboards/v1/L.jpg */ "./public/Keyboards/v1/L.jpg");
/* harmony import */ var _public_Keyboards_v1_M_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../public/Keyboards/v1/M.jpg */ "./public/Keyboards/v1/M.jpg");
/* harmony import */ var _public_Keyboards_v1_N_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../public/Keyboards/v1/N.jpg */ "./public/Keyboards/v1/N.jpg");
/* harmony import */ var _public_Keyboards_v1_O_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../public/Keyboards/v1/O.jpg */ "./public/Keyboards/v1/O.jpg");
/* harmony import */ var _public_Keyboards_v1_P_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../public/Keyboards/v1/P.jpg */ "./public/Keyboards/v1/P.jpg");
/* harmony import */ var _public_Keyboards_v1_Q_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../public/Keyboards/v1/Q.jpg */ "./public/Keyboards/v1/Q.jpg");
/* harmony import */ var _public_Keyboards_v1_R_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../public/Keyboards/v1/R.jpg */ "./public/Keyboards/v1/R.jpg");
/* harmony import */ var _public_Keyboards_v1_S_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../public/Keyboards/v1/S.jpg */ "./public/Keyboards/v1/S.jpg");
/* harmony import */ var _public_Keyboards_v1_T_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../public/Keyboards/v1/T.jpg */ "./public/Keyboards/v1/T.jpg");
/* harmony import */ var _public_Keyboards_v1_U_jpg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../public/Keyboards/v1/U.jpg */ "./public/Keyboards/v1/U.jpg");
/* harmony import */ var _public_Keyboards_v1_V_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../public/Keyboards/v1/V.jpg */ "./public/Keyboards/v1/V.jpg");
/* harmony import */ var _public_Keyboards_v1_W_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../public/Keyboards/v1/W.jpg */ "./public/Keyboards/v1/W.jpg");
/* harmony import */ var _public_Keyboards_v1_X_jpg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../public/Keyboards/v1/X.jpg */ "./public/Keyboards/v1/X.jpg");
/* harmony import */ var _public_Keyboards_v1_Y_jpg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../public/Keyboards/v1/Y.jpg */ "./public/Keyboards/v1/Y.jpg");
/* harmony import */ var _public_Keyboards_v1_Z_jpg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../public/Keyboards/v1/Z.jpg */ "./public/Keyboards/v1/Z.jpg");
/* harmony import */ var _public_Keyboards_v1_backspace_jpg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../public/Keyboards/v1/backspace.jpg */ "./public/Keyboards/v1/backspace.jpg");
/* harmony import */ var _public_Keyboards_v3_A_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../public/Keyboards/v3/A.png */ "./public/Keyboards/v3/A.png");
/* harmony import */ var _public_Keyboards_v3_B_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../public/Keyboards/v3/B.png */ "./public/Keyboards/v3/B.png");
/* harmony import */ var _public_Keyboards_v3_C_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../public/Keyboards/v3/C.png */ "./public/Keyboards/v3/C.png");
/* harmony import */ var _public_Keyboards_v3_D_png__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../public/Keyboards/v3/D.png */ "./public/Keyboards/v3/D.png");
/* harmony import */ var _public_Keyboards_v3_E_png__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../public/Keyboards/v3/E.png */ "./public/Keyboards/v3/E.png");
/* harmony import */ var _public_Keyboards_v3_F_png__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../public/Keyboards/v3/F.png */ "./public/Keyboards/v3/F.png");
/* harmony import */ var _public_Keyboards_v3_G_png__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../public/Keyboards/v3/G.png */ "./public/Keyboards/v3/G.png");
/* harmony import */ var _public_Keyboards_v3_H_png__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../public/Keyboards/v3/H.png */ "./public/Keyboards/v3/H.png");
/* harmony import */ var _public_Keyboards_v3_I_png__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../public/Keyboards/v3/I.png */ "./public/Keyboards/v3/I.png");
/* harmony import */ var _public_Keyboards_v3_J_png__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../public/Keyboards/v3/J.png */ "./public/Keyboards/v3/J.png");
/* harmony import */ var _public_Keyboards_v3_K_png__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../public/Keyboards/v3/K.png */ "./public/Keyboards/v3/K.png");
/* harmony import */ var _public_Keyboards_v3_L_png__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../public/Keyboards/v3/L.png */ "./public/Keyboards/v3/L.png");
/* harmony import */ var _public_Keyboards_v3_M_png__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../public/Keyboards/v3/M.png */ "./public/Keyboards/v3/M.png");
/* harmony import */ var _public_Keyboards_v3_N_png__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../public/Keyboards/v3/N.png */ "./public/Keyboards/v3/N.png");
/* harmony import */ var _public_Keyboards_v3_O_png__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../public/Keyboards/v3/O.png */ "./public/Keyboards/v3/O.png");
/* harmony import */ var _public_Keyboards_v3_P_png__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../public/Keyboards/v3/P.png */ "./public/Keyboards/v3/P.png");
/* harmony import */ var _public_Keyboards_v3_Q_png__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../public/Keyboards/v3/Q.png */ "./public/Keyboards/v3/Q.png");
/* harmony import */ var _public_Keyboards_v3_R_png__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../public/Keyboards/v3/R.png */ "./public/Keyboards/v3/R.png");
/* harmony import */ var _public_Keyboards_v3_S_png__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../public/Keyboards/v3/S.png */ "./public/Keyboards/v3/S.png");
/* harmony import */ var _public_Keyboards_v3_T_png__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../public/Keyboards/v3/T.png */ "./public/Keyboards/v3/T.png");
/* harmony import */ var _public_Keyboards_v3_U_png__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../public/Keyboards/v3/U.png */ "./public/Keyboards/v3/U.png");
/* harmony import */ var _public_Keyboards_v3_V_png__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../public/Keyboards/v3/V.png */ "./public/Keyboards/v3/V.png");
/* harmony import */ var _public_Keyboards_v3_W_png__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../public/Keyboards/v3/W.png */ "./public/Keyboards/v3/W.png");
/* harmony import */ var _public_Keyboards_v3_X_png__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../public/Keyboards/v3/X.png */ "./public/Keyboards/v3/X.png");
/* harmony import */ var _public_Keyboards_v3_Y_png__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../public/Keyboards/v3/Y.png */ "./public/Keyboards/v3/Y.png");
/* harmony import */ var _public_Keyboards_v3_Z_png__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../public/Keyboards/v3/Z.png */ "./public/Keyboards/v3/Z.png");
/* harmony import */ var _public_Keyboards_v3_Backspace_png__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../public/Keyboards/v3/Backspace.png */ "./public/Keyboards/v3/Backspace.png");
// Imports




























































var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_MorphoCaterpillar_png__WEBPACK_IMPORTED_MODULE_2__.default);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_MorphoCocoon_png__WEBPACK_IMPORTED_MODULE_3__.default);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_MorphoButterfly_png__WEBPACK_IMPORTED_MODULE_4__.default);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_transmogrify_jpg__WEBPACK_IMPORTED_MODULE_5__.default);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_A_jpg__WEBPACK_IMPORTED_MODULE_6__.default);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_B_jpg__WEBPACK_IMPORTED_MODULE_7__.default);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_C_jpg__WEBPACK_IMPORTED_MODULE_8__.default);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_D_jpg__WEBPACK_IMPORTED_MODULE_9__.default);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_E_jpg__WEBPACK_IMPORTED_MODULE_10__.default);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_F_jpg__WEBPACK_IMPORTED_MODULE_11__.default);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_G_jpg__WEBPACK_IMPORTED_MODULE_12__.default);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_H_jpg__WEBPACK_IMPORTED_MODULE_13__.default);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_I_jpg__WEBPACK_IMPORTED_MODULE_14__.default);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_J_jpg__WEBPACK_IMPORTED_MODULE_15__.default);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_K_jpg__WEBPACK_IMPORTED_MODULE_16__.default);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_L_jpg__WEBPACK_IMPORTED_MODULE_17__.default);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_M_jpg__WEBPACK_IMPORTED_MODULE_18__.default);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_N_jpg__WEBPACK_IMPORTED_MODULE_19__.default);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_O_jpg__WEBPACK_IMPORTED_MODULE_20__.default);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_P_jpg__WEBPACK_IMPORTED_MODULE_21__.default);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_Q_jpg__WEBPACK_IMPORTED_MODULE_22__.default);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_R_jpg__WEBPACK_IMPORTED_MODULE_23__.default);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_S_jpg__WEBPACK_IMPORTED_MODULE_24__.default);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_T_jpg__WEBPACK_IMPORTED_MODULE_25__.default);
var ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_U_jpg__WEBPACK_IMPORTED_MODULE_26__.default);
var ___CSS_LOADER_URL_REPLACEMENT_25___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_V_jpg__WEBPACK_IMPORTED_MODULE_27__.default);
var ___CSS_LOADER_URL_REPLACEMENT_26___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_W_jpg__WEBPACK_IMPORTED_MODULE_28__.default);
var ___CSS_LOADER_URL_REPLACEMENT_27___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_X_jpg__WEBPACK_IMPORTED_MODULE_29__.default);
var ___CSS_LOADER_URL_REPLACEMENT_28___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_Y_jpg__WEBPACK_IMPORTED_MODULE_30__.default);
var ___CSS_LOADER_URL_REPLACEMENT_29___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_Z_jpg__WEBPACK_IMPORTED_MODULE_31__.default);
var ___CSS_LOADER_URL_REPLACEMENT_30___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_backspace_jpg__WEBPACK_IMPORTED_MODULE_32__.default);
var ___CSS_LOADER_URL_REPLACEMENT_31___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_A_png__WEBPACK_IMPORTED_MODULE_33__.default);
var ___CSS_LOADER_URL_REPLACEMENT_32___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_B_png__WEBPACK_IMPORTED_MODULE_34__.default);
var ___CSS_LOADER_URL_REPLACEMENT_33___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_C_png__WEBPACK_IMPORTED_MODULE_35__.default);
var ___CSS_LOADER_URL_REPLACEMENT_34___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_D_png__WEBPACK_IMPORTED_MODULE_36__.default);
var ___CSS_LOADER_URL_REPLACEMENT_35___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_E_png__WEBPACK_IMPORTED_MODULE_37__.default);
var ___CSS_LOADER_URL_REPLACEMENT_36___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_F_png__WEBPACK_IMPORTED_MODULE_38__.default);
var ___CSS_LOADER_URL_REPLACEMENT_37___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_G_png__WEBPACK_IMPORTED_MODULE_39__.default);
var ___CSS_LOADER_URL_REPLACEMENT_38___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_H_png__WEBPACK_IMPORTED_MODULE_40__.default);
var ___CSS_LOADER_URL_REPLACEMENT_39___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_I_png__WEBPACK_IMPORTED_MODULE_41__.default);
var ___CSS_LOADER_URL_REPLACEMENT_40___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_J_png__WEBPACK_IMPORTED_MODULE_42__.default);
var ___CSS_LOADER_URL_REPLACEMENT_41___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_K_png__WEBPACK_IMPORTED_MODULE_43__.default);
var ___CSS_LOADER_URL_REPLACEMENT_42___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_L_png__WEBPACK_IMPORTED_MODULE_44__.default);
var ___CSS_LOADER_URL_REPLACEMENT_43___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_M_png__WEBPACK_IMPORTED_MODULE_45__.default);
var ___CSS_LOADER_URL_REPLACEMENT_44___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_N_png__WEBPACK_IMPORTED_MODULE_46__.default);
var ___CSS_LOADER_URL_REPLACEMENT_45___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_O_png__WEBPACK_IMPORTED_MODULE_47__.default);
var ___CSS_LOADER_URL_REPLACEMENT_46___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_P_png__WEBPACK_IMPORTED_MODULE_48__.default);
var ___CSS_LOADER_URL_REPLACEMENT_47___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_Q_png__WEBPACK_IMPORTED_MODULE_49__.default);
var ___CSS_LOADER_URL_REPLACEMENT_48___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_R_png__WEBPACK_IMPORTED_MODULE_50__.default);
var ___CSS_LOADER_URL_REPLACEMENT_49___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_S_png__WEBPACK_IMPORTED_MODULE_51__.default);
var ___CSS_LOADER_URL_REPLACEMENT_50___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_T_png__WEBPACK_IMPORTED_MODULE_52__.default);
var ___CSS_LOADER_URL_REPLACEMENT_51___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_U_png__WEBPACK_IMPORTED_MODULE_53__.default);
var ___CSS_LOADER_URL_REPLACEMENT_52___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_V_png__WEBPACK_IMPORTED_MODULE_54__.default);
var ___CSS_LOADER_URL_REPLACEMENT_53___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_W_png__WEBPACK_IMPORTED_MODULE_55__.default);
var ___CSS_LOADER_URL_REPLACEMENT_54___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_X_png__WEBPACK_IMPORTED_MODULE_56__.default);
var ___CSS_LOADER_URL_REPLACEMENT_55___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_Y_png__WEBPACK_IMPORTED_MODULE_57__.default);
var ___CSS_LOADER_URL_REPLACEMENT_56___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_Z_png__WEBPACK_IMPORTED_MODULE_58__.default);
var ___CSS_LOADER_URL_REPLACEMENT_57___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_Backspace_png__WEBPACK_IMPORTED_MODULE_59__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  background-color: #404040;\n  color: burlywood;\n  padding: 0;\n  margin: 0;\n  /* font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; */\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.myHeadingFont { /* pb */\n  font-family: var(--commonHeaderFontFamily);\n}\n.myCommonFont { /* pb */\n  font-family: var(--commonFontFamily);\n}\n.mymaterialicon {\n  border-style: none;\n  outline: none;\n}\n.mymaterialicon:focus {\n  outline: none;\n  }\n.fivepxdivider { /* fyb */\n  line-height: 5px;\n}\n.floatright {\n  float: right;\n}\n.textcenter {\n  text-align: center;\n}\n.textright {\n  text-align: right;\n}\n.aligntop {\n  vertical-align: top;\n}\n.equispaced {\n  font-family: monospace;\n}\n.disabled {\n  opacity: 0.6;\n  cursor: not-allowed !important;\n}\n/* Rules for using icons as white on a dark background. */\n.material-icons.md-light { color: rgba(255, 255, 255, 1); }\n.material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }\n\n.artworkDiv {\n  color: black;\n  background-color: cyan;\n  width: 370px;\n}\n.artworkDiv div {\n  display: flex;\n  justify-content: space-between;\n}\n\n.moveLeftButton {\n  background-color: blue;\n  color: cyan;\n  height: 30px;\n  width: 30px;\n}\n.moveRightButton {\n  background-color: blue;\n  color: cyan;\n  height: 30px;\n  width: 30px;\n}\n.artwork1 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 280px;\n  width: 370px;\n}\n.artwork2 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 370px;\n  width: 370px;\n}\n.artwork3 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 350px;\n  width: 370px;\n}\n.artwork4 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 225px;\n  width: 370px;\n}\n/* Custom keyboards */\n.switchkb {\n  display: flex;\n  justify-content: center;\n}\n/* Version 1 */\n.customKeyboardV1 {\n  margin-top: 5px;\n  border: 1px solid white;\n  border-radius: 5px;\n  padding: 5px 0px;\n  background-color: white;\n  color: white;\n  font-family: 'Courier New', Courier, monospace;\n  width: 370px;\n}\n.ckv1Row1 {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 5px;\n  margin-bottom: 15px;\n}\n.ckv1Row2 {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n.ckv1Row3 {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  margin-left: 20px;\n  margin-right: 10px;\n}\n.customKeyboardV1 span {\n  text-align: center;\n  margin: 0px 1px;\n  padding: 5px 8px;\n  font-size: large;\n}\n\n.ckv1 {\n  background-size: cover;\n  width: 35px;\n  height: 35px;\n}\n.ckv1.A {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + "); \n}\n.ckv1.B {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + "); \n}\n.ckv1.C {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + "); \n}\n.ckv1.D {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + "); \n}\n.ckv1.E {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + "); \n}\n.ckv1.F {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + "); \n}\n.ckv1.G { \n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + "); \n}\n.ckv1.H {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");\n}\n.ckv1.I {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");\n}\n.ckv1.J {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ");\n}\n.ckv1.K {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ");\n}\n.ckv1.L {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ");\n}\n.ckv1.M {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + "); \n}\n.ckv1.N {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + "); \n}\n.ckv1.O {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + "); \n}\n.ckv1.P {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + "); \n}\n.ckv1.Q {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ");\n}\n.ckv1.R {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ");\n}\n.ckv1.S {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ");\n}\n.ckv1.T {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ");\n}\n.ckv1.U {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_24___ + ");\n}\n.ckv1.V {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_25___ + ");\n}\n.ckv1.W {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_26___ + ");\n}\n.ckv1.X {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_27___ + ");\n}\n.ckv1.Y {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_28___ + ");\n}\n.ckv1.Z {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_29___ + ");\n}\n.ckv1.Backspace {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_30___ + ");\n}\n.ckv1Word {\n  display: flex;\n  justify-content: center;\n}\n/* Version 2 */\n.customKeyboardV2 {\n    margin-top: 5px;\n    border: 1px solid white;\n    border-radius: 5px;\n    padding: 5px 0px;\n    background-color: var(--trcssPageBG);\n    color: white;\n    font-family: 'Courier New', Courier, monospace;\n    width: 370px;\n}\n.ckv2Row1 {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 5px;\n    margin-bottom: 15px;\n}\n.ckv2Row2 {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 15px;\n    margin-left: 10px;\n    margin-right: 10px;\n}\n.ckv2Row3 {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 15px;\n    margin-left: 20px;\n    margin-right: 10px;\n}\n.customKeyboardV2 span {\n    border: 1px solid white;\n    border-radius: 5px;\n    background-color: blue;\n    text-align: center;\n    margin: 0px 2px;\n    padding: 5px 8px;\n    font-size: large;\n}\n/* Version 3 */\n.customKeyboardV3 {\n  margin-top: 5px;\n  border: 1px solid white;\n  border-radius: 5px;\n  padding: 5px 0px;\n  background-color: white;\n  color: white;\n  font-family: 'Courier New', Courier, monospace;\n  width: 370px;\n}\n.ckv3Row1 {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 5px;\n  margin-bottom: 15px;\n}\n.ckv3Row2 {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n.ckv3Row3 {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  margin-left: 20px;\n  margin-right: 10px;\n}\n.customKeyboardV3 span {\n  text-align: center;\n  margin: 0px 1px;\n  padding: 5px 8px;\n  font-size: large;\n}\n\n.ckv3 {\n  background-size: cover;\n  width: 35px;\n  height: 35px;\n}\n.ckv3.A {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_31___ + "); \n}\n.ckv3.B {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_32___ + "); \n}\n.ckv3.C {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_33___ + "); \n}\n.ckv3.D {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_34___ + "); \n}\n.ckv3.E {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_35___ + "); \n}\n.ckv3.F {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_36___ + "); \n}\n.ckv3.G { \n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_37___ + "); \n}\n.ckv3.H {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_38___ + ");\n}\n.ckv3.I {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_39___ + ");\n}\n.ckv3.J {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_40___ + ");\n}\n.ckv3.K {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_41___ + ");\n}\n.ckv3.L {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_42___ + ");\n}\n.ckv3.M {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_43___ + "); \n}\n.ckv3.N {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_44___ + "); \n}\n.ckv3.O {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_45___ + "); \n}\n.ckv3.P {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_46___ + "); \n}\n.ckv3.Q {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_47___ + ");\n}\n.ckv3.R {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_48___ + ");\n}\n.ckv3.S {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_49___ + ");\n}\n.ckv3.T {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_50___ + ");\n}\n.ckv3.U {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_51___ + ");\n}\n.ckv3.V {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_52___ + ");\n}\n.ckv3.W {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_53___ + ");\n}\n.ckv3.X {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_54___ + ");\n}\n.ckv3.Y {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_55___ + ");\n}\n.ckv3.Z {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_56___ + ");\n}\n.ckv3.Backspace {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_57___ + ");\n}\n.ckv3Word {\n  display: flex;\n  justify-content: center;\n}\n", "",{"version":3,"sources":["webpack://styles/globals.css"],"names":[],"mappings":"AAAA;;EAEE,yBAAyB;EACzB,gBAAgB;EAChB,UAAU;EACV,SAAS;EACT;2EACyE;AAC3E;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,8BAAsB;UAAtB,sBAAsB;AACxB;AACA,iBAAiB,OAAO;EACtB,0CAA0C;AAC5C;AACA,gBAAgB,OAAO;EACrB,oCAAoC;AACtC;AACA;EACE,kBAAkB;EAClB,aAAa;AACf;AACA;EACE,aAAa;EACb;AACF,iBAAiB,QAAQ;EACvB,gBAAgB;AAClB;AACA;EACE,YAAY;AACd;AACA;EACE,kBAAkB;AACpB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,YAAY;EACZ,8BAA8B;AAChC;AACA,yDAAyD;AACzD,2BAA2B,6BAA6B,EAAE;AAC1D,uCAAuC,+BAA+B,EAAE;;AAExE;EACE,YAAY;EACZ,sBAAsB;EACtB,YAAY;AACd;AACA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,WAAW;AACb;AACA;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,WAAW;AACb;AACA;EACE,yDAAwD;EACxD,4BAA4B;EAC5B,sBAAsB;EACtB,aAAa;EACb,YAAY;AACd;AACA;EACE,yDAAmD;EACnD,4BAA4B;EAC5B,sBAAsB;EACtB,aAAa;EACb,YAAY;AACd;AACA;EACE,yDAAsD;EACtD,4BAA4B;EAC5B,sBAAsB;EACtB,aAAa;EACb,YAAY;AACd;AACA;EACE,yDAAmD;EACnD,4BAA4B;EAC5B,sBAAsB;EACtB,aAAa;EACb,YAAY;AACd;AACA,qBAAqB;AACrB;EACE,aAAa;EACb,uBAAuB;AACzB;AACA,cAAc;AACd;EACE,eAAe;EACf,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;EAChB,uBAAuB;EACvB,YAAY;EACZ,8CAA8C;EAC9C,YAAY;AACd;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;AACd;AACA;EACE,yDAAqD;AACvD;AACA;EACE,yDAAqD;AACvD;AACA;EACE,yDAAqD;AACvD;AACA;EACE,yDAAqD;AACvD;AACA;EACE,yDAAqD;AACvD;AACA;EACE,yDAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAA6D;AAC/D;AACA;EACE,aAAa;EACb,uBAAuB;AACzB;AACA,cAAc;AACd;IACI,eAAe;IACf,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,oCAAoC;IACpC,YAAY;IACZ,8CAA8C;IAC9C,YAAY;AAChB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,eAAe;IACf,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,sBAAsB;IACtB,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,gBAAgB;AACpB;AACA,cAAc;AACd;EACE,eAAe;EACf,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;EAChB,uBAAuB;EACvB,YAAY;EACZ,8CAA8C;EAC9C,YAAY;AACd;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;AACd;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAA6D;AAC/D;AACA;EACE,aAAa;EACb,uBAAuB;AACzB","sourcesContent":["html,\nbody {\n  background-color: #404040;\n  color: burlywood;\n  padding: 0;\n  margin: 0;\n  /* font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; */\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n.myHeadingFont { /* pb */\n  font-family: var(--commonHeaderFontFamily);\n}\n.myCommonFont { /* pb */\n  font-family: var(--commonFontFamily);\n}\n.mymaterialicon {\n  border-style: none;\n  outline: none;\n}\n.mymaterialicon:focus {\n  outline: none;\n  }\n.fivepxdivider { /* fyb */\n  line-height: 5px;\n}\n.floatright {\n  float: right;\n}\n.textcenter {\n  text-align: center;\n}\n.textright {\n  text-align: right;\n}\n.aligntop {\n  vertical-align: top;\n}\n.equispaced {\n  font-family: monospace;\n}\n.disabled {\n  opacity: 0.6;\n  cursor: not-allowed !important;\n}\n/* Rules for using icons as white on a dark background. */\n.material-icons.md-light { color: rgba(255, 255, 255, 1); }\n.material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }\n\n.artworkDiv {\n  color: black;\n  background-color: cyan;\n  width: 370px;\n}\n.artworkDiv div {\n  display: flex;\n  justify-content: space-between;\n}\n\n.moveLeftButton {\n  background-color: blue;\n  color: cyan;\n  height: 30px;\n  width: 30px;\n}\n.moveRightButton {\n  background-color: blue;\n  color: cyan;\n  height: 30px;\n  width: 30px;\n}\n.artwork1 {\n  background-image: url('../public/MorphoCaterpillar.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 280px;\n  width: 370px;\n}\n.artwork2 {\n  background-image: url('../public/MorphoCocoon.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 370px;\n  width: 370px;\n}\n.artwork3 {\n  background-image: url('../public/MorphoButterfly.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 350px;\n  width: 370px;\n}\n.artwork4 {\n  background-image: url('../public/transmogrify.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 225px;\n  width: 370px;\n}\n/* Custom keyboards */\n.switchkb {\n  display: flex;\n  justify-content: center;\n}\n/* Version 1 */\n.customKeyboardV1 {\n  margin-top: 5px;\n  border: 1px solid white;\n  border-radius: 5px;\n  padding: 5px 0px;\n  background-color: white;\n  color: white;\n  font-family: 'Courier New', Courier, monospace;\n  width: 370px;\n}\n.ckv1Row1 {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 5px;\n  margin-bottom: 15px;\n}\n.ckv1Row2 {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n.ckv1Row3 {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  margin-left: 20px;\n  margin-right: 10px;\n}\n.customKeyboardV1 span {\n  text-align: center;\n  margin: 0px 1px;\n  padding: 5px 8px;\n  font-size: large;\n}\n\n.ckv1 {\n  background-size: cover;\n  width: 35px;\n  height: 35px;\n}\n.ckv1.A {\n  background-image: url('../public/Keyboards/v1/A.jpg'); \n}\n.ckv1.B {\n  background-image: url('../public/Keyboards/v1/B.jpg'); \n}\n.ckv1.C {\n  background-image: url('../public/Keyboards/v1/C.jpg'); \n}\n.ckv1.D {\n  background-image: url('../public/Keyboards/v1/D.jpg'); \n}\n.ckv1.E {\n  background-image: url('../public/Keyboards/v1/E.jpg'); \n}\n.ckv1.F {\n  background-image: url('../public/Keyboards/v1/F.jpg'); \n}\n.ckv1.G { \n  background-image: url('../public/Keyboards/v1/G.jpg'); \n}\n.ckv1.H {\n  background-image: url('../public/Keyboards/v1/H.jpg');\n}\n.ckv1.I {\n  background-image: url('../public/Keyboards/v1/I.jpg');\n}\n.ckv1.J {\n  background-image: url('../public/Keyboards/v1/J.jpg');\n}\n.ckv1.K {\n  background-image: url('../public/Keyboards/v1/K.jpg');\n}\n.ckv1.L {\n  background-image: url('../public/Keyboards/v1/L.jpg');\n}\n.ckv1.M {\n  background-image: url('../public/Keyboards/v1/M.jpg'); \n}\n.ckv1.N {\n  background-image: url('../public/Keyboards/v1/N.jpg'); \n}\n.ckv1.O {\n  background-image: url('../public/Keyboards/v1/O.jpg'); \n}\n.ckv1.P {\n  background-image: url('../public/Keyboards/v1/P.jpg'); \n}\n.ckv1.Q {\n  background-image: url('../public/Keyboards/v1/Q.jpg');\n}\n.ckv1.R {\n  background-image: url('../public/Keyboards/v1/R.jpg');\n}\n.ckv1.S {\n  background-image: url('../public/Keyboards/v1/S.jpg');\n}\n.ckv1.T {\n  background-image: url('../public/Keyboards/v1/T.jpg');\n}\n.ckv1.U {\n  background-image: url('../public/Keyboards/v1/U.jpg');\n}\n.ckv1.V {\n  background-image: url('../public/Keyboards/v1/V.jpg');\n}\n.ckv1.W {\n  background-image: url('../public/Keyboards/v1/W.jpg');\n}\n.ckv1.X {\n  background-image: url('../public/Keyboards/v1/X.jpg');\n}\n.ckv1.Y {\n  background-image: url('../public/Keyboards/v1/Y.jpg');\n}\n.ckv1.Z {\n  background-image: url('../public/Keyboards/v1/Z.jpg');\n}\n.ckv1.Backspace {\n  background-image: url('../public/Keyboards/v1/backspace.jpg');\n}\n.ckv1Word {\n  display: flex;\n  justify-content: center;\n}\n/* Version 2 */\n.customKeyboardV2 {\n    margin-top: 5px;\n    border: 1px solid white;\n    border-radius: 5px;\n    padding: 5px 0px;\n    background-color: var(--trcssPageBG);\n    color: white;\n    font-family: 'Courier New', Courier, monospace;\n    width: 370px;\n}\n.ckv2Row1 {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 5px;\n    margin-bottom: 15px;\n}\n.ckv2Row2 {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 15px;\n    margin-left: 10px;\n    margin-right: 10px;\n}\n.ckv2Row3 {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 15px;\n    margin-left: 20px;\n    margin-right: 10px;\n}\n.customKeyboardV2 span {\n    border: 1px solid white;\n    border-radius: 5px;\n    background-color: blue;\n    text-align: center;\n    margin: 0px 2px;\n    padding: 5px 8px;\n    font-size: large;\n}\n/* Version 3 */\n.customKeyboardV3 {\n  margin-top: 5px;\n  border: 1px solid white;\n  border-radius: 5px;\n  padding: 5px 0px;\n  background-color: white;\n  color: white;\n  font-family: 'Courier New', Courier, monospace;\n  width: 370px;\n}\n.ckv3Row1 {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 5px;\n  margin-bottom: 15px;\n}\n.ckv3Row2 {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n.ckv3Row3 {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  margin-left: 20px;\n  margin-right: 10px;\n}\n.customKeyboardV3 span {\n  text-align: center;\n  margin: 0px 1px;\n  padding: 5px 8px;\n  font-size: large;\n}\n\n.ckv3 {\n  background-size: cover;\n  width: 35px;\n  height: 35px;\n}\n.ckv3.A {\n  background-image: url('../public/Keyboards/v3/A.png'); \n}\n.ckv3.B {\n  background-image: url('../public/Keyboards/v3/B.png'); \n}\n.ckv3.C {\n  background-image: url('../public/Keyboards/v3/C.png'); \n}\n.ckv3.D {\n  background-image: url('../public/Keyboards/v3/D.png'); \n}\n.ckv3.E {\n  background-image: url('../public/Keyboards/v3/E.png'); \n}\n.ckv3.F {\n  background-image: url('../public/Keyboards/v3/F.png'); \n}\n.ckv3.G { \n  background-image: url('../public/Keyboards/v3/G.png'); \n}\n.ckv3.H {\n  background-image: url('../public/Keyboards/v3/H.png');\n}\n.ckv3.I {\n  background-image: url('../public/Keyboards/v3/I.png');\n}\n.ckv3.J {\n  background-image: url('../public/Keyboards/v3/J.png');\n}\n.ckv3.K {\n  background-image: url('../public/Keyboards/v3/K.png');\n}\n.ckv3.L {\n  background-image: url('../public/Keyboards/v3/L.png');\n}\n.ckv3.M {\n  background-image: url('../public/Keyboards/v3/M.png'); \n}\n.ckv3.N {\n  background-image: url('../public/Keyboards/v3/N.png'); \n}\n.ckv3.O {\n  background-image: url('../public/Keyboards/v3/O.png'); \n}\n.ckv3.P {\n  background-image: url('../public/Keyboards/v3/P.png'); \n}\n.ckv3.Q {\n  background-image: url('../public/Keyboards/v3/Q.png');\n}\n.ckv3.R {\n  background-image: url('../public/Keyboards/v3/R.png');\n}\n.ckv3.S {\n  background-image: url('../public/Keyboards/v3/S.png');\n}\n.ckv3.T {\n  background-image: url('../public/Keyboards/v3/T.png');\n}\n.ckv3.U {\n  background-image: url('../public/Keyboards/v3/U.png');\n}\n.ckv3.V {\n  background-image: url('../public/Keyboards/v3/V.png');\n}\n.ckv3.W {\n  background-image: url('../public/Keyboards/v3/W.png');\n}\n.ckv3.X {\n  background-image: url('../public/Keyboards/v3/X.png');\n}\n.ckv3.Y {\n  background-image: url('../public/Keyboards/v3/Y.png');\n}\n.ckv3.Z {\n  background-image: url('../public/Keyboards/v3/Z.png');\n}\n.ckv3.Backspace {\n  background-image: url('../public/Keyboards/v3/Backspace.png');\n}\n.ckv3Word {\n  display: flex;\n  justify-content: center;\n}\n"],"sourceRoot":""}]);
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

/***/ "./public/Keyboards/v1/A.jpg":
/*!***********************************!*\
  !*** ./public/Keyboards/v1/A.jpg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/A.0659a44d31c94da22f79bb215a4889f0.jpg");

/***/ }),

/***/ "./public/Keyboards/v1/B.jpg":
/*!***********************************!*\
  !*** ./public/Keyboards/v1/B.jpg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/B.2c33b1371a857cb2408ea4f95e7e60b6.jpg");

/***/ }),

/***/ "./public/Keyboards/v1/C.jpg":
/*!***********************************!*\
  !*** ./public/Keyboards/v1/C.jpg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/C.9bb90bb8fc3c01193d18302465b3e24a.jpg");

/***/ }),

/***/ "./public/Keyboards/v1/D.jpg":
/*!***********************************!*\
  !*** ./public/Keyboards/v1/D.jpg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/D.c0a3666088850864b910348413d6c54d.jpg");

/***/ }),

/***/ "./public/Keyboards/v1/E.jpg":
/*!***********************************!*\
  !*** ./public/Keyboards/v1/E.jpg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/E.5619b49fd5b25d9aa23e08011a34f075.jpg");

/***/ }),

/***/ "./public/Keyboards/v1/F.jpg":
/*!***********************************!*\
  !*** ./public/Keyboards/v1/F.jpg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/F.fc885e96bd1edf61965012950ba6c327.jpg");

/***/ }),

/***/ "./public/Keyboards/v1/G.jpg":
/*!***********************************!*\
  !*** ./public/Keyboards/v1/G.jpg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/G.8aa3300e584ddf52e50707ae8fa75a98.jpg");

/***/ }),

/***/ "./public/Keyboards/v1/H.jpg":
/*!***********************************!*\
  !*** ./public/Keyboards/v1/H.jpg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/H.f3c9b1e8954fca0fe87f73faa43893d0.jpg");

/***/ }),

/***/ "./public/Keyboards/v1/I.jpg":
/*!***********************************!*\
  !*** ./public/Keyboards/v1/I.jpg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/I.c696c6ce8988535879a949cf7a993a96.jpg");

/***/ }),

/***/ "./public/Keyboards/v1/J.jpg":
/*!***********************************!*\
  !*** ./public/Keyboards/v1/J.jpg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/J.e18cba5d7e4af5770c46f83de96dce15.jpg");

/***/ }),

/***/ "./public/Keyboards/v1/K.jpg":
/*!***********************************!*\
  !*** ./public/Keyboards/v1/K.jpg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/K.71933712262d763563a590d047aacbc8.jpg");

/***/ }),

/***/ "./public/Keyboards/v1/L.jpg":
/*!***********************************!*\
  !*** ./public/Keyboards/v1/L.jpg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/L.87ebdcb6f3697580d97246f7f415dc8c.jpg");

/***/ }),

/***/ "./public/Keyboards/v1/M.jpg":
/*!***********************************!*\
  !*** ./public/Keyboards/v1/M.jpg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/M.6c79ce3c388ad16c91a8e9bc61a4d040.jpg");

/***/ }),

/***/ "./public/Keyboards/v1/N.jpg":
/*!***********************************!*\
  !*** ./public/Keyboards/v1/N.jpg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/N.c536f9065e5e300d1d6e86031e917846.jpg");

/***/ }),

/***/ "./public/Keyboards/v1/O.jpg":
/*!***********************************!*\
  !*** ./public/Keyboards/v1/O.jpg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/O.e3c258c11d7104f014fbbcf406c9b885.jpg");

/***/ }),

/***/ "./public/Keyboards/v1/P.jpg":
/*!***********************************!*\
  !*** ./public/Keyboards/v1/P.jpg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/P.d78391b2919d4da406850e536b3205ec.jpg");

/***/ }),

/***/ "./public/Keyboards/v1/Q.jpg":
/*!***********************************!*\
  !*** ./public/Keyboards/v1/Q.jpg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Q.780d45dbf431b076b07c2c370c7008ac.jpg");

/***/ }),

/***/ "./public/Keyboards/v1/R.jpg":
/*!***********************************!*\
  !*** ./public/Keyboards/v1/R.jpg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/R.b12fe31529cc59d2255aa63debd82bae.jpg");

/***/ }),

/***/ "./public/Keyboards/v1/S.jpg":
/*!***********************************!*\
  !*** ./public/Keyboards/v1/S.jpg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/S.3ddf32cf2c3c2ea72370d7f2528d00e5.jpg");

/***/ }),

/***/ "./public/Keyboards/v1/T.jpg":
/*!***********************************!*\
  !*** ./public/Keyboards/v1/T.jpg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/T.3e91b570535ecb9b06ef7be871413a93.jpg");

/***/ }),

/***/ "./public/Keyboards/v1/U.jpg":
/*!***********************************!*\
  !*** ./public/Keyboards/v1/U.jpg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/U.8cb0e3164c6cb4e613a326ae4f15fdcc.jpg");

/***/ }),

/***/ "./public/Keyboards/v1/V.jpg":
/*!***********************************!*\
  !*** ./public/Keyboards/v1/V.jpg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/V.faf4a2cc6132b7d74aedebcbc8d7eb4c.jpg");

/***/ }),

/***/ "./public/Keyboards/v1/W.jpg":
/*!***********************************!*\
  !*** ./public/Keyboards/v1/W.jpg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/W.e7e395966aa51d5b827179c4b72fc3b2.jpg");

/***/ }),

/***/ "./public/Keyboards/v1/X.jpg":
/*!***********************************!*\
  !*** ./public/Keyboards/v1/X.jpg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/X.b506a596560c63147c3ceddeb5a1bcc0.jpg");

/***/ }),

/***/ "./public/Keyboards/v1/Y.jpg":
/*!***********************************!*\
  !*** ./public/Keyboards/v1/Y.jpg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Y.f983d766f36982497488100783f00c4a.jpg");

/***/ }),

/***/ "./public/Keyboards/v1/Z.jpg":
/*!***********************************!*\
  !*** ./public/Keyboards/v1/Z.jpg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Z.e8b936e9e8cb4125b3d46dc2b7ff10e5.jpg");

/***/ }),

/***/ "./public/Keyboards/v1/backspace.jpg":
/*!*******************************************!*\
  !*** ./public/Keyboards/v1/backspace.jpg ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/backspace.84496ff0ae1b1c610b632e4d80f17bac.jpg");

/***/ }),

/***/ "./public/Keyboards/v3/A.png":
/*!***********************************!*\
  !*** ./public/Keyboards/v3/A.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/A.29a85b2d9d9809064adabfad1f2c48c3.png");

/***/ }),

/***/ "./public/Keyboards/v3/B.png":
/*!***********************************!*\
  !*** ./public/Keyboards/v3/B.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/B.739f66c7581d1e2629927b22314cb45f.png");

/***/ }),

/***/ "./public/Keyboards/v3/Backspace.png":
/*!*******************************************!*\
  !*** ./public/Keyboards/v3/Backspace.png ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Backspace.0815afae0387f1ef51b733c0acb8e302.png");

/***/ }),

/***/ "./public/Keyboards/v3/C.png":
/*!***********************************!*\
  !*** ./public/Keyboards/v3/C.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/C.718b537999b5c8bc5c18fa82c52f0f80.png");

/***/ }),

/***/ "./public/Keyboards/v3/D.png":
/*!***********************************!*\
  !*** ./public/Keyboards/v3/D.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/D.72c942ef1d8d6c5024f14fde2dfbac1e.png");

/***/ }),

/***/ "./public/Keyboards/v3/E.png":
/*!***********************************!*\
  !*** ./public/Keyboards/v3/E.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/E.63f7d5e42d556490a212bc9050efe613.png");

/***/ }),

/***/ "./public/Keyboards/v3/F.png":
/*!***********************************!*\
  !*** ./public/Keyboards/v3/F.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/F.6d942fdcb60029ae4bab36474e83cb0e.png");

/***/ }),

/***/ "./public/Keyboards/v3/G.png":
/*!***********************************!*\
  !*** ./public/Keyboards/v3/G.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/G.a9c7491b4560ea299c83a90806703374.png");

/***/ }),

/***/ "./public/Keyboards/v3/H.png":
/*!***********************************!*\
  !*** ./public/Keyboards/v3/H.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/H.7ff8f2234faa33b6fd8f5d0f893fabfc.png");

/***/ }),

/***/ "./public/Keyboards/v3/I.png":
/*!***********************************!*\
  !*** ./public/Keyboards/v3/I.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/I.588de846ad2a3487645632e6fc9a7f65.png");

/***/ }),

/***/ "./public/Keyboards/v3/J.png":
/*!***********************************!*\
  !*** ./public/Keyboards/v3/J.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/J.605b6a19162522a00a4cc61c903e6e5e.png");

/***/ }),

/***/ "./public/Keyboards/v3/K.png":
/*!***********************************!*\
  !*** ./public/Keyboards/v3/K.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/K.fbd2a1d1f66eb30a6193366794fea204.png");

/***/ }),

/***/ "./public/Keyboards/v3/L.png":
/*!***********************************!*\
  !*** ./public/Keyboards/v3/L.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/L.37e9315343aa4d7b86d180e8e6b77d04.png");

/***/ }),

/***/ "./public/Keyboards/v3/M.png":
/*!***********************************!*\
  !*** ./public/Keyboards/v3/M.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/M.aada764e47659e64c8ab8fb5aa868371.png");

/***/ }),

/***/ "./public/Keyboards/v3/N.png":
/*!***********************************!*\
  !*** ./public/Keyboards/v3/N.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/N.17715129835f9e30bdde405dbac2029f.png");

/***/ }),

/***/ "./public/Keyboards/v3/O.png":
/*!***********************************!*\
  !*** ./public/Keyboards/v3/O.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/O.861485a7c890368651a75fca7ef147cb.png");

/***/ }),

/***/ "./public/Keyboards/v3/P.png":
/*!***********************************!*\
  !*** ./public/Keyboards/v3/P.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/P.44256d103d97486f54976cb2f6e670b7.png");

/***/ }),

/***/ "./public/Keyboards/v3/Q.png":
/*!***********************************!*\
  !*** ./public/Keyboards/v3/Q.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Q.ca7778637398f2eaa8c6cd59bc054341.png");

/***/ }),

/***/ "./public/Keyboards/v3/R.png":
/*!***********************************!*\
  !*** ./public/Keyboards/v3/R.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/R.3a6148ef71171dd14262a28062633c26.png");

/***/ }),

/***/ "./public/Keyboards/v3/S.png":
/*!***********************************!*\
  !*** ./public/Keyboards/v3/S.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/S.707e04b2a62194cd23cb8fbb9d11a26e.png");

/***/ }),

/***/ "./public/Keyboards/v3/T.png":
/*!***********************************!*\
  !*** ./public/Keyboards/v3/T.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/T.b7e1afef3eccc4299e3ec96da113df5e.png");

/***/ }),

/***/ "./public/Keyboards/v3/U.png":
/*!***********************************!*\
  !*** ./public/Keyboards/v3/U.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/U.ac0f4cff9f6d18bd45d3e477f9bb5f87.png");

/***/ }),

/***/ "./public/Keyboards/v3/V.png":
/*!***********************************!*\
  !*** ./public/Keyboards/v3/V.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/V.74c31df1df0060c86ac0667c4a277fca.png");

/***/ }),

/***/ "./public/Keyboards/v3/W.png":
/*!***********************************!*\
  !*** ./public/Keyboards/v3/W.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/W.d9ffbac6e80559dd08ccc305bc074fc8.png");

/***/ }),

/***/ "./public/Keyboards/v3/X.png":
/*!***********************************!*\
  !*** ./public/Keyboards/v3/X.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/X.877a3928b997569251e22e6547a59b6a.png");

/***/ }),

/***/ "./public/Keyboards/v3/Y.png":
/*!***********************************!*\
  !*** ./public/Keyboards/v3/Y.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Y.1bde2f36f675bf9086ae8e8a5c4fe3ad.png");

/***/ }),

/***/ "./public/Keyboards/v3/Z.png":
/*!***********************************!*\
  !*** ./public/Keyboards/v3/Z.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Z.2e71cf7b16bc4939dabe3b3d2f35e5a4.png");

/***/ }),

/***/ "./public/MorphoButterfly.png":
/*!************************************!*\
  !*** ./public/MorphoButterfly.png ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/MorphoButterfly.116161befe8d065ed0e69043f2883b98.png");

/***/ }),

/***/ "./public/MorphoCaterpillar.png":
/*!**************************************!*\
  !*** ./public/MorphoCaterpillar.png ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/MorphoCaterpillar.a18bb4ff8007ef7f3e37fda367b3827b.png");

/***/ }),

/***/ "./public/MorphoCocoon.png":
/*!*********************************!*\
  !*** ./public/MorphoCocoon.png ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/MorphoCocoon.21f111323d8d00aa4e11b8ccfa3589f8.png");

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

/***/ "./public/transmogrify.jpg":
/*!*********************************!*\
  !*** ./public/transmogrify.jpg ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/transmogrify.2f6a091a141d54fd396e3df2ef2f4d5c.jpg");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL25leHQtc2VydmVyL2xpYi9hbXAtY29udGV4dC50cyIsIndlYnBhY2s6Ly9fTl9FLy4uL25leHQtc2VydmVyL2xpYi9hbXAudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9uZXh0LXNlcnZlci9saWIvaGVhZC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uLi9uZXh0LXNlcnZlci9saWIvc2lkZS1lZmZlY3QudHN4Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL19OX0UvIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9meWIvZnliLmNzcz84NGVlIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3JwaG8vbW9ycGhvLmNzcz8zNTk3Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9wYi9wcmlzb25icmVhay5jc3M/N2I4MiIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG0vdG0uY3NzP2I5ZjUiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3dpL3dvcmRpbmZvLmNzcz9hM2Q5Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy93bS9tYXN0ZXJtaW5kLmNzcz8zYzY2Iiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/YTcyMyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Z5Yi9meWIuY3NzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3JwaG8vbW9ycGhvLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsuY3NzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy90bS90bS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3dpL3dvcmRpbmZvLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd20vbWFzdGVybWluZC5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nbG9iYWxzLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2dldFVybC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0JhcmJlZFdpcmUucG5nIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvQmFyYmVkV2lyZVJvdGF0ZWQucG5nIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0EuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0IuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0MuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0QuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0UuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0YuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0cuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0guanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0kuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0ouanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0suanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0wuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL00uanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL04uanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL08uanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1AuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1EuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1IuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1MuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1QuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1UuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1YuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1cuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1guanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1kuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1ouanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL2JhY2tzcGFjZS5qcGciLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9LZXlib2FyZHMvdjMvQS5wbmciLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9LZXlib2FyZHMvdjMvQi5wbmciLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9LZXlib2FyZHMvdjMvQmFja3NwYWNlLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9DLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9ELnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9FLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9GLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9HLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9ILnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9JLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9KLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9LLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9MLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9NLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9OLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9PLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9QLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9RLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9SLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9TLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9ULnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9VLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9WLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9XLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9YLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9ZLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9aLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL01vcnBob0J1dHRlcmZseS5wbmciLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9Nb3JwaG9DYXRlcnBpbGxhci5wbmciLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9Nb3JwaG9Db2Nvb24ucG5nIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvV2FsbC5qcGciLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9wbGF5ZXJ0aXRsZS5wbmciLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9wcmlzb25iYXJzLXNxdWFyZS5wbmciLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy90aWxlLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL3RyYW5zbW9ncmlmeS5qcGciLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2hlYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvanN4LWRldi1ydW50aW1lLmpzIl0sIm5hbWVzIjpbIkFtcFN0YXRlQ29udGV4dCIsIlJlYWN0IiwiYW1wRmlyc3QiLCJoeWJyaWQiLCJoYXNRdWVyeSIsImlzSW5BbXBNb2RlIiwiaW5BbXBNb2RlIiwiaGVhZCIsImNoaWxkIiwibGlzdCIsImZyYWdtZW50TGlzdCIsIk1FVEFUWVBFUyIsImtleXMiLCJ0YWdzIiwibWV0YVR5cGVzIiwibWV0YUNhdGVnb3JpZXMiLCJoIiwiaXNVbmlxdWUiLCJoYXNLZXkiLCJrZXkiLCJpIiwibGVuIiwibWV0YXR5cGUiLCJjYXRlZ29yeSIsImNhdGVnb3JpZXMiLCJoZWFkRWxlbWVudHMiLCJoZWFkRWxlbWVudENoaWxkcmVuIiwiaGVhZEVsZW1lbnQiLCJkZWZhdWx0SGVhZCIsInByb3BzIiwidW5pcXVlIiwiYyIsInByb2Nlc3MiLCJhbXBTdGF0ZSIsImhlYWRNYW5hZ2VyIiwiSGVhZE1hbmFnZXJDb250ZXh0IiwiSGVhZCIsImlzU2VydmVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJfaGFzSGVhZE1hbmFnZXIiLCJlbWl0Q2hhbmdlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsIk15QXBwIiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRU87O0FBQUEsTUFBTUEsZUFBbUMsZ0JBQUdDLDZCQUE1QyxFQUE0Q0EsQ0FBNUM7Ozs7QUFFUCxJQUFJLE1BQXVDO0FBQ3pDRCxpQkFBZSxDQUFmQTtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkQ7O0FBQ0E7Ozs7OztBQUVPOztBQUFBLHFCQUFxQjtBQUMxQkUsVUFBUSxHQURrQjtBQUUxQkMsUUFBTSxHQUZvQjtBQUcxQkMsVUFBUSxHQUhrQjtBQUFBLElBQXJCLElBSVU7QUFDZixTQUFPRixRQUFRLElBQUtDLE1BQU0sSUFBMUI7QUFHSzs7QUFBQSxrQkFBMkI7QUFBQTs7QUFDaEM7QUFDQSxTQUFPRSxXQUFXLENBQUNKLDBCQUFpQkQsWUFBcEMsZUFBbUJDLENBQUQsQ0FBbEI7QUFDRDs7R0FITSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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YUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssTUFBTSxPQUFPLGFBQWEsYUFBYSxPQUFPLE9BQU8sTUFBTSxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxtQkFBbUIsV0FBVyxZQUFZLGFBQWEsYUFBYSx1QkFBdUIsTUFBTSxtQkFBbUIsYUFBYSxhQUFhLGFBQWEsTUFBTSxtQkFBbUIsV0FBVyxNQUFNLG1CQUFtQixhQUFhLFdBQVcsTUFBTSxtQkFBbUIsYUFBYSxXQUFXLE1BQU0sbUJBQW1CLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLG1CQUFtQixhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sbUJBQW1CLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxtQkFBbUIsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sbUJBQW1CLGFBQWEsTUFBTSxtQkFBbUIsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sbUJBQW1CLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sbUJBQW1CLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLE9BQU8sYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFNBQVMsS0FBSyx3QkFBd0IseUJBQXlCLFdBQVcsVUFBVSx3QkFBd0IsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsd0JBQXdCLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFh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LE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxZQUFZLE1BQU0sVUFBVSxZQUFZLE1BQU0sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFh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Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1QixnRUFBZ0UsRTs7Ozs7Ozs7Ozs7O0FDQXRHLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1QixnRUFBZ0UsRTs7Ozs7Ozs7Ozs7O0FDQXRHLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFB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QUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIQUEwSDtBQUMxSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1FQUFtRTs7QUFFbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLGNBQWM7QUFDekIsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7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QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxjQUFjO0FBQ2QsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNsckNhOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNELEVBQUUsdUpBQXNFO0FBQ3hFIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IEFtcFN0YXRlQ29udGV4dDogUmVhY3QuQ29udGV4dDxhbnk+ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSlcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgQW1wU3RhdGVDb250ZXh0LmRpc3BsYXlOYW1lID0gJ0FtcFN0YXRlQ29udGV4dCdcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFtcFN0YXRlQ29udGV4dCB9IGZyb20gJy4vYW1wLWNvbnRleHQnXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0luQW1wTW9kZSh7XG4gIGFtcEZpcnN0ID0gZmFsc2UsXG4gIGh5YnJpZCA9IGZhbHNlLFxuICBoYXNRdWVyeSA9IGZhbHNlLFxufSA9IHt9KTogYm9vbGVhbiB7XG4gIHJldHVybiBhbXBGaXJzdCB8fCAoaHlicmlkICYmIGhhc1F1ZXJ5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQW1wKCk6IGJvb2xlYW4ge1xuICAvLyBEb24ndCBhc3NpZ24gdGhlIGNvbnRleHQgdmFsdWUgdG8gYSB2YXJpYWJsZSB0byBzYXZlIGJ5dGVzXG4gIHJldHVybiBpc0luQW1wTW9kZShSZWFjdC51c2VDb250ZXh0KEFtcFN0YXRlQ29udGV4dCkpXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEVmZmVjdCBmcm9tICcuL3NpZGUtZWZmZWN0J1xuaW1wb3J0IHsgQW1wU3RhdGVDb250ZXh0IH0gZnJvbSAnLi9hbXAtY29udGV4dCdcbmltcG9ydCB7IEhlYWRNYW5hZ2VyQ29udGV4dCB9IGZyb20gJy4vaGVhZC1tYW5hZ2VyLWNvbnRleHQnXG5pbXBvcnQgeyBpc0luQW1wTW9kZSB9IGZyb20gJy4vYW1wJ1xuXG50eXBlIFdpdGhJbkFtcE1vZGUgPSB7XG4gIGluQW1wTW9kZT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRIZWFkKGluQW1wTW9kZSA9IGZhbHNlKTogSlNYLkVsZW1lbnRbXSB7XG4gIGNvbnN0IGhlYWQgPSBbPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5dXG4gIGlmICghaW5BbXBNb2RlKSB7XG4gICAgaGVhZC5wdXNoKDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPilcbiAgfVxuICByZXR1cm4gaGVhZFxufVxuXG5mdW5jdGlvbiBvbmx5UmVhY3RFbGVtZW50KFxuICBsaXN0OiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4sXG4gIGNoaWxkOiBSZWFjdC5SZWFjdENoaWxkXG4pOiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4ge1xuICAvLyBSZWFjdCBjaGlsZHJlbiBjYW4gYmUgXCJzdHJpbmdcIiBvciBcIm51bWJlclwiIGluIHRoaXMgY2FzZSB3ZSBpZ25vcmUgdGhlbSBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgY2hpbGQgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGxpc3RcbiAgfVxuICAvLyBBZGRzIHN1cHBvcnQgZm9yIFJlYWN0LkZyYWdtZW50XG4gIGlmIChjaGlsZC50eXBlID09PSBSZWFjdC5GcmFnbWVudCkge1xuICAgIHJldHVybiBsaXN0LmNvbmNhdChcbiAgICAgIFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGQucHJvcHMuY2hpbGRyZW4pLnJlZHVjZShcbiAgICAgICAgKFxuICAgICAgICAgIGZyYWdtZW50TGlzdDogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+LFxuICAgICAgICAgIGZyYWdtZW50Q2hpbGQ6IFJlYWN0LlJlYWN0Q2hpbGRcbiAgICAgICAgKTogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+ID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgZnJhZ21lbnRDaGlsZCA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgICAgIHR5cGVvZiBmcmFnbWVudENoaWxkID09PSAnbnVtYmVyJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGZyYWdtZW50TGlzdFxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZnJhZ21lbnRMaXN0LmNvbmNhdChmcmFnbWVudENoaWxkKVxuICAgICAgICB9LFxuICAgICAgICBbXVxuICAgICAgKVxuICAgIClcbiAgfVxuICByZXR1cm4gbGlzdC5jb25jYXQoY2hpbGQpXG59XG5cbmNvbnN0IE1FVEFUWVBFUyA9IFsnbmFtZScsICdodHRwRXF1aXYnLCAnY2hhclNldCcsICdpdGVtUHJvcCddXG5cbi8qXG4gcmV0dXJucyBhIGZ1bmN0aW9uIGZvciBmaWx0ZXJpbmcgaGVhZCBjaGlsZCBlbGVtZW50c1xuIHdoaWNoIHNob3VsZG4ndCBiZSBkdXBsaWNhdGVkLCBsaWtlIDx0aXRsZS8+XG4gQWxzbyBhZGRzIHN1cHBvcnQgZm9yIGRlZHVwbGljYXRlZCBga2V5YCBwcm9wZXJ0aWVzXG4qL1xuZnVuY3Rpb24gdW5pcXVlKCkge1xuICBjb25zdCBrZXlzID0gbmV3IFNldCgpXG4gIGNvbnN0IHRhZ3MgPSBuZXcgU2V0KClcbiAgY29uc3QgbWV0YVR5cGVzID0gbmV3IFNldCgpXG4gIGNvbnN0IG1ldGFDYXRlZ29yaWVzOiB7IFttZXRhdHlwZTogc3RyaW5nXTogU2V0PHN0cmluZz4gfSA9IHt9XG5cbiAgcmV0dXJuIChoOiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PikgPT4ge1xuICAgIGxldCBpc1VuaXF1ZSA9IHRydWVcbiAgICBsZXQgaGFzS2V5ID0gZmFsc2VcblxuICAgIGlmIChoLmtleSAmJiB0eXBlb2YgaC5rZXkgIT09ICdudW1iZXInICYmIGgua2V5LmluZGV4T2YoJyQnKSA+IDApIHtcbiAgICAgIGhhc0tleSA9IHRydWVcbiAgICAgIGNvbnN0IGtleSA9IGgua2V5LnNsaWNlKGgua2V5LmluZGV4T2YoJyQnKSArIDEpXG4gICAgICBpZiAoa2V5cy5oYXMoa2V5KSkge1xuICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrZXlzLmFkZChrZXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlZmF1bHQtY2FzZVxuICAgIHN3aXRjaCAoaC50eXBlKSB7XG4gICAgICBjYXNlICd0aXRsZSc6XG4gICAgICBjYXNlICdiYXNlJzpcbiAgICAgICAgaWYgKHRhZ3MuaGFzKGgudHlwZSkpIHtcbiAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFncy5hZGQoaC50eXBlKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdtZXRhJzpcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IE1FVEFUWVBFUy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGNvbnN0IG1ldGF0eXBlID0gTUVUQVRZUEVTW2ldXG4gICAgICAgICAgaWYgKCFoLnByb3BzLmhhc093blByb3BlcnR5KG1ldGF0eXBlKSkgY29udGludWVcblxuICAgICAgICAgIGlmIChtZXRhdHlwZSA9PT0gJ2NoYXJTZXQnKSB7XG4gICAgICAgICAgICBpZiAobWV0YVR5cGVzLmhhcyhtZXRhdHlwZSkpIHtcbiAgICAgICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWV0YVR5cGVzLmFkZChtZXRhdHlwZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBoLnByb3BzW21ldGF0eXBlXVxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IG1ldGFDYXRlZ29yaWVzW21ldGF0eXBlXSB8fCBuZXcgU2V0KClcbiAgICAgICAgICAgIGlmICgobWV0YXR5cGUgIT09ICduYW1lJyB8fCAhaGFzS2V5KSAmJiBjYXRlZ29yaWVzLmhhcyhjYXRlZ29yeSkpIHtcbiAgICAgICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2F0ZWdvcmllcy5hZGQoY2F0ZWdvcnkpXG4gICAgICAgICAgICAgIG1ldGFDYXRlZ29yaWVzW21ldGF0eXBlXSA9IGNhdGVnb3JpZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNVbmlxdWVcbiAgfVxufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gaGVhZEVsZW1lbnRzIExpc3Qgb2YgbXVsdGlwbGUgPEhlYWQ+IGluc3RhbmNlc1xuICovXG5mdW5jdGlvbiByZWR1Y2VDb21wb25lbnRzKFxuICBoZWFkRWxlbWVudHM6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PixcbiAgcHJvcHM6IFdpdGhJbkFtcE1vZGVcbikge1xuICByZXR1cm4gaGVhZEVsZW1lbnRzXG4gICAgLnJlZHVjZShcbiAgICAgIChsaXN0OiBSZWFjdC5SZWFjdENoaWxkW10sIGhlYWRFbGVtZW50OiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PikgPT4ge1xuICAgICAgICBjb25zdCBoZWFkRWxlbWVudENoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShcbiAgICAgICAgICBoZWFkRWxlbWVudC5wcm9wcy5jaGlsZHJlblxuICAgICAgICApXG4gICAgICAgIHJldHVybiBsaXN0LmNvbmNhdChoZWFkRWxlbWVudENoaWxkcmVuKVxuICAgICAgfSxcbiAgICAgIFtdXG4gICAgKVxuICAgIC5yZWR1Y2Uob25seVJlYWN0RWxlbWVudCwgW10pXG4gICAgLnJldmVyc2UoKVxuICAgIC5jb25jYXQoZGVmYXVsdEhlYWQocHJvcHMuaW5BbXBNb2RlKSlcbiAgICAuZmlsdGVyKHVuaXF1ZSgpKVxuICAgIC5yZXZlcnNlKClcbiAgICAubWFwKChjOiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PiwgaTogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBjLmtleSB8fCBpXG4gICAgICBpZiAoXG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnICYmXG4gICAgICAgIHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UUyAmJlxuICAgICAgICAhcHJvcHMuaW5BbXBNb2RlXG4gICAgICApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGMudHlwZSA9PT0gJ2xpbmsnICYmXG4gICAgICAgICAgYy5wcm9wc1snaHJlZiddICYmXG4gICAgICAgICAgLy8gVE9ETyhwcmF0ZWVrYmhAKTogUmVwbGFjZSB0aGlzIHdpdGggY29uc3QgZnJvbSBgY29uc3RhbnRzYCB3aGVuIHRoZSB0cmVlIHNoYWtpbmcgd29ya3MuXG4gICAgICAgICAgW1xuICAgICAgICAgICAgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzJyxcbiAgICAgICAgICAgICdodHRwczovL3VzZS50eXBla2l0Lm5ldC8nLFxuICAgICAgICAgIF0uc29tZSgodXJsKSA9PiBjLnByb3BzWydocmVmJ10uc3RhcnRzV2l0aCh1cmwpKVxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHsgLi4uKGMucHJvcHMgfHwge30pIH1cbiAgICAgICAgICBuZXdQcm9wc1snZGF0YS1ocmVmJ10gPSBuZXdQcm9wc1snaHJlZiddXG4gICAgICAgICAgbmV3UHJvcHNbJ2hyZWYnXSA9IHVuZGVmaW5lZFxuXG4gICAgICAgICAgLy8gQWRkIHRoaXMgYXR0cmlidXRlIHRvIG1ha2UgaXQgZWFzeSB0byBpZGVudGlmeSBvcHRpbWl6ZWQgdGFnc1xuICAgICAgICAgIG5ld1Byb3BzWydkYXRhLW9wdGltaXplZC1mb250cyddID0gdHJ1ZVxuXG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjLCBuZXdQcm9wcylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjLCB7IGtleSB9KVxuICAgIH0pXG59XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgaW5qZWN0cyBlbGVtZW50cyB0byBgPGhlYWQ+YCBvZiB5b3VyIHBhZ2UuXG4gKiBUbyBhdm9pZCBkdXBsaWNhdGVkIGB0YWdzYCBpbiBgPGhlYWQ+YCB5b3UgY2FuIHVzZSB0aGUgYGtleWAgcHJvcGVydHksIHdoaWNoIHdpbGwgbWFrZSBzdXJlIGV2ZXJ5IHRhZyBpcyBvbmx5IHJlbmRlcmVkIG9uY2UuXG4gKi9cbmZ1bmN0aW9uIEhlYWQoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xuICBjb25zdCBhbXBTdGF0ZSA9IHVzZUNvbnRleHQoQW1wU3RhdGVDb250ZXh0KVxuICBjb25zdCBoZWFkTWFuYWdlciA9IHVzZUNvbnRleHQoSGVhZE1hbmFnZXJDb250ZXh0KVxuICByZXR1cm4gKFxuICAgIDxFZmZlY3RcbiAgICAgIHJlZHVjZUNvbXBvbmVudHNUb1N0YXRlPXtyZWR1Y2VDb21wb25lbnRzfVxuICAgICAgaGVhZE1hbmFnZXI9e2hlYWRNYW5hZ2VyfVxuICAgICAgaW5BbXBNb2RlPXtpc0luQW1wTW9kZShhbXBTdGF0ZSl9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRWZmZWN0PlxuICApXG59XG5cbi8vIFRPRE86IFJlbW92ZSBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlXG5IZWFkLnJld2luZCA9ICgpID0+IHt9XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuXG50eXBlIFN0YXRlID0gSlNYLkVsZW1lbnRbXSB8IHVuZGVmaW5lZFxuXG50eXBlIFNpZGVFZmZlY3RQcm9wcyA9IHtcbiAgcmVkdWNlQ29tcG9uZW50c1RvU3RhdGU6IDxUPihcbiAgICBjb21wb25lbnRzOiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4sXG4gICAgcHJvcHM6IFRcbiAgKSA9PiBTdGF0ZVxuICBoYW5kbGVTdGF0ZUNoYW5nZT86IChzdGF0ZTogU3RhdGUpID0+IHZvaWRcbiAgaGVhZE1hbmFnZXI6IGFueVxuICBpbkFtcE1vZGU/OiBib29sZWFuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50PFNpZGVFZmZlY3RQcm9wcz4ge1xuICBwcml2YXRlIF9oYXNIZWFkTWFuYWdlcjogYm9vbGVhblxuXG4gIGVtaXRDaGFuZ2UgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMuX2hhc0hlYWRNYW5hZ2VyKSB7XG4gICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLnVwZGF0ZUhlYWQoXG4gICAgICAgIHRoaXMucHJvcHMucmVkdWNlQ29tcG9uZW50c1RvU3RhdGUoXG4gICAgICAgICAgWy4uLnRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlc10sXG4gICAgICAgICAgdGhpcy5wcm9wc1xuICAgICAgICApXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuX2hhc0hlYWRNYW5hZ2VyID1cbiAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIgJiYgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzXG5cbiAgICBpZiAoaXNTZXJ2ZXIgJiYgdGhpcy5faGFzSGVhZE1hbmFnZXIpIHtcbiAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5hZGQodGhpcylcbiAgICAgIHRoaXMuZW1pdENoYW5nZSgpXG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLl9oYXNIZWFkTWFuYWdlcikge1xuICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzLmFkZCh0aGlzKVxuICAgIH1cbiAgICB0aGlzLmVtaXRDaGFuZ2UoKVxuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLmVtaXRDaGFuZ2UoKVxuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLl9oYXNIZWFkTWFuYWdlcikge1xuICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzLmRlbGV0ZSh0aGlzKVxuICAgIH1cbiAgICB0aGlzLmVtaXRDaGFuZ2UoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cbiIsImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgJy4vd2kvd29yZGluZm8uY3NzJ1xyXG5pbXBvcnQgJy4vd20vbWFzdGVybWluZC5jc3MnXHJcbmltcG9ydCAnLi9wYi9wcmlzb25icmVhay5jc3MnXHJcbmltcG9ydCAnLi9meWIvZnliLmNzcydcclxuaW1wb3J0ICcuL21vcnBoby9tb3JwaG8uY3NzJ1xyXG5pbXBvcnQgJy4vdG0vdG0uY3NzJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7Q29tcG9uZW50LHBhZ2VQcm9wc30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bGluayBcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4yL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgLyogSSBhZGRlZCBtYXRlcmlhbCBpY29ucyAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy41LjEuc2xpbS5taW4uanNcIiBcclxuICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9wb3BwZXIuanNAMS4xNi4xL2Rpc3QvdW1kL3BvcHBlci5taW4uanNcIiBcclxuICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjIvanMvYm9vdHN0cmFwLm1pbi5qc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgLyogSSBhZGRlZCB3My5jc3MgKi9cclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS93M2Nzcy80L3czLmNzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIC8qIEkgaGF2ZSBteSBvd24gY3NzIGZpbGUgb24gZ2l0aHViIHNvIEkgY2FuIGNoYW5nZSB0aGUgVUkgYnV0IHN0aWxsIGhhdmUgdG8gZGVwbG95aW5nIHRoaXMgYXBwIHRvIHNlZSBjaGFuZ2VzICovXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdGlsZXJ1bm5lci5naXRodWIuaW8vdHJjc3MuY3NzXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgey8qIDxzY3JpcHRcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb3Igc29tZSByZWFzb24gdGhlc2UgZm9udGF3ZXNvbWUgaWNvbnMgYXJlIHNvbWV0aW1pc2ggYWJvdXQgd2hldGhlciB0byBzaG93IHVwIG9yIG5vdC5cclxuICAgICAgICAgICAgICAgICAgICAvLyBJIHN3aXRjaGVkIHRvIG1hdGVyaWFsLWljb25zIGluc3RlYWQuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3JjPVwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tLzc3NTE0ZDI4YWEuanNcIiAvLyBSb2RcclxuICAgICAgICAgICAgICAgICAgICAvLyBzcmM9XCJodHRwczovL2tpdC5mb250YXdlc29tZS5jb20vNDdlN2M1ZmMyMy5qc1wiIC8vIENocmlzdG9waGVyXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tL1RpbGVSdW5uZXIuanNcIiAvLyBDaHJpc3RvcGhlclxyXG4gICAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICA8dGl0bGU+VGlsZSBSdW5uZXI8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3RpbGVUUi5pY29cIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJUaWxlIFJ1bm5lciAtIEZ1biB3aXRoIHdvcmRzXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIlRpbGUgUnVubmVyXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkEgZmV3IHdvcmQgZ2FtZXMgYW5kIGEgd29yZCBsb29rdXAgZmVhdHVyZVwiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCIvdGlsZVRSLnBuZ1wiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGNvbnRlbnQ9XCI0MDBcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjQwMFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PVwiVGlsZSBSdW5uZXIgLSBGdW4gd2l0aCB3b3Jkc1wiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PVwiL3RpbGVUUi5wbmdcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeVwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQSBmZXcgd29yZCBnYW1lcyBhIGFuZCBhIHdvcmQgbG9va3VwIGZlYXR1cmVcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tXCIgLz5cclxuICAgICAgICA8bWVhdCBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJUaWxlIFJ1bm5lclwiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpsb2NhbGVcIiBjb250ZW50PVwiZW5fVVNcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9Lz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL19hcHBcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJwcml2YXRlLW5leHQtcGFnZXMvX2FwcC5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL2Z5Yi5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vZnliLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vZnliLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vbW9ycGhvLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9tb3JwaG8uY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9tb3JwaG8uY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9wcmlzb25icmVhay5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vcHJpc29uYnJlYWsuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9wcmlzb25icmVhay5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL3RtLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi90bS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL3RtLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vd29yZGluZm8uY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL3dvcmRpbmZvLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vd29yZGluZm8uY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9tYXN0ZXJtaW5kLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9tYXN0ZXJtaW5kLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vbWFzdGVybWluZC5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL2dsb2JhbHMuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL2dsb2JhbHMuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9nbG9iYWxzLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtjb25zdCBpc09sZElFPWZ1bmN0aW9uIGlzT2xkSUUoKXtsZXQgbWVtbztyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKXtpZih0eXBlb2YgbWVtbz09PSd1bmRlZmluZWQnKXsvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4vLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbm1lbW89Qm9vbGVhbih3aW5kb3cmJmRvY3VtZW50JiZkb2N1bWVudC5hbGwmJiF3aW5kb3cuYXRvYik7fXJldHVybiBtZW1vO307fSgpO2NvbnN0IGdldFRhcmdldD1mdW5jdGlvbiBnZXRUYXJnZXQoKXtjb25zdCBtZW1vPXt9O3JldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpe2lmKHR5cGVvZiBtZW1vW3RhcmdldF09PT0ndW5kZWZpbmVkJyl7bGV0IHN0eWxlVGFyZ2V0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuaWYod2luZG93LkhUTUxJRnJhbWVFbGVtZW50JiZzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCl7dHJ5ey8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4vLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuc3R5bGVUYXJnZXQ9c3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7fWNhdGNoKGUpey8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5zdHlsZVRhcmdldD1udWxsO319bWVtb1t0YXJnZXRdPXN0eWxlVGFyZ2V0O31yZXR1cm4gbWVtb1t0YXJnZXRdO307fSgpO2NvbnN0IHN0eWxlc0luRG9tPVtdO2Z1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpe2xldCByZXN1bHQ9LTE7Zm9yKGxldCBpPTA7aTxzdHlsZXNJbkRvbS5sZW5ndGg7aSsrKXtpZihzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyPT09aWRlbnRpZmllcil7cmVzdWx0PWk7YnJlYWs7fX1yZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCxvcHRpb25zKXtjb25zdCBpZENvdW50TWFwPXt9O2NvbnN0IGlkZW50aWZpZXJzPVtdO2ZvcihsZXQgaT0wO2k8bGlzdC5sZW5ndGg7aSsrKXtjb25zdCBpdGVtPWxpc3RbaV07Y29uc3QgaWQ9b3B0aW9ucy5iYXNlP2l0ZW1bMF0rb3B0aW9ucy5iYXNlOml0ZW1bMF07Y29uc3QgY291bnQ9aWRDb3VudE1hcFtpZF18fDA7Y29uc3QgaWRlbnRpZmllcj1pZCsnICcrY291bnQudG9TdHJpbmcoKTtpZENvdW50TWFwW2lkXT1jb3VudCsxO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2NvbnN0IG9iaj17Y3NzOml0ZW1bMV0sbWVkaWE6aXRlbVsyXSxzb3VyY2VNYXA6aXRlbVszXX07aWYoaW5kZXghPT0tMSl7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO31lbHNle3N0eWxlc0luRG9tLnB1c2goe2lkZW50aWZpZXI6aWRlbnRpZmllcix1cGRhdGVyOmFkZFN0eWxlKG9iaixvcHRpb25zKSxyZWZlcmVuY2VzOjF9KTt9aWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTt9cmV0dXJuIGlkZW50aWZpZXJzO31mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyl7Y29uc3Qgc3R5bGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtjb25zdCBhdHRyaWJ1dGVzPW9wdGlvbnMuYXR0cmlidXRlc3x8e307aWYodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2U9PT0ndW5kZWZpbmVkJyl7Y29uc3Qgbm9uY2U9Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG50eXBlb2YgX193ZWJwYWNrX25vbmNlX18hPT0ndW5kZWZpbmVkJz9fX3dlYnBhY2tfbm9uY2VfXzpudWxsO2lmKG5vbmNlKXthdHRyaWJ1dGVzLm5vbmNlPW5vbmNlO319T2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbihrZXkpe3N0eWxlLnNldEF0dHJpYnV0ZShrZXksYXR0cmlidXRlc1trZXldKTt9KTtpZih0eXBlb2Ygb3B0aW9ucy5pbnNlcnQ9PT0nZnVuY3Rpb24nKXtvcHRpb25zLmluc2VydChzdHlsZSk7fWVsc2V7Y29uc3QgdGFyZ2V0PWdldFRhcmdldChvcHRpb25zLmluc2VydHx8J2hlYWQnKTtpZighdGFyZ2V0KXt0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO310YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO31yZXR1cm4gc3R5bGU7fWZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSl7Ly8gaXN0YW5idWwgaWdub3JlIGlmXG5pZihzdHlsZS5wYXJlbnROb2RlPT09bnVsbCl7cmV0dXJuIGZhbHNlO31zdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTt9LyogaXN0YW5idWwgaWdub3JlIG5leHQgICovY29uc3QgcmVwbGFjZVRleHQ9ZnVuY3Rpb24gcmVwbGFjZVRleHQoKXtjb25zdCB0ZXh0U3RvcmU9W107cmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgscmVwbGFjZW1lbnQpe3RleHRTdG9yZVtpbmRleF09cmVwbGFjZW1lbnQ7cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7fTt9KCk7ZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSxpbmRleCxyZW1vdmUsb2JqKXtjb25zdCBjc3M9cmVtb3ZlPycnOm9iai5tZWRpYT8nQG1lZGlhICcrb2JqLm1lZGlhKycgeycrb2JqLmNzcysnfSc6b2JqLmNzczsvLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PXJlcGxhY2VUZXh0KGluZGV4LGNzcyk7fWVsc2V7Y29uc3QgY3NzTm9kZT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO2NvbnN0IGNoaWxkTm9kZXM9c3R5bGUuY2hpbGROb2RlcztpZihjaGlsZE5vZGVzW2luZGV4XSl7c3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO31pZihjaGlsZE5vZGVzLmxlbmd0aCl7c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsY2hpbGROb2Rlc1tpbmRleF0pO31lbHNle3N0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO319fWZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsb3B0aW9ucyxvYmope2xldCBjc3M9b2JqLmNzcztjb25zdCBtZWRpYT1vYmoubWVkaWE7Y29uc3Qgc291cmNlTWFwPW9iai5zb3VyY2VNYXA7aWYobWVkaWEpe3N0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLG1lZGlhKTt9ZWxzZXtzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7fWlmKHNvdXJjZU1hcCYmdHlwZW9mIGJ0b2EhPT0ndW5kZWZpbmVkJyl7Y3NzKz0nXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnK2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkrJyAqLyc7fS8vIEZvciBvbGQgSUVcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9pZihzdHlsZS5zdHlsZVNoZWV0KXtzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQ9Y3NzO31lbHNle3doaWxlKHN0eWxlLmZpcnN0Q2hpbGQpe3N0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO31zdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTt9fWxldCBzaW5nbGV0b249bnVsbDtsZXQgc2luZ2xldG9uQ291bnRlcj0wO2Z1bmN0aW9uIGFkZFN0eWxlKG9iaixvcHRpb25zKXtsZXQgc3R5bGU7bGV0IHVwZGF0ZTtsZXQgcmVtb3ZlO2lmKG9wdGlvbnMuc2luZ2xldG9uKXtjb25zdCBzdHlsZUluZGV4PXNpbmdsZXRvbkNvdW50ZXIrKztzdHlsZT1zaW5nbGV0b258fChzaW5nbGV0b249aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTt1cGRhdGU9YXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsc3R5bGUsc3R5bGVJbmRleCxmYWxzZSk7cmVtb3ZlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsdHJ1ZSk7fWVsc2V7c3R5bGU9aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO3VwZGF0ZT1hcHBseVRvVGFnLmJpbmQobnVsbCxzdHlsZSxvcHRpb25zKTtyZW1vdmU9ZnVuY3Rpb24oKXtyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO307fXVwZGF0ZShvYmopO3JldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmope2lmKG5ld09iail7aWYobmV3T2JqLmNzcz09PW9iai5jc3MmJm5ld09iai5tZWRpYT09PW9iai5tZWRpYSYmbmV3T2JqLnNvdXJjZU1hcD09PW9iai5zb3VyY2VNYXApe3JldHVybjt9dXBkYXRlKG9iaj1uZXdPYmopO31lbHNle3JlbW92ZSgpO319O31tb2R1bGUuZXhwb3J0cz1mdW5jdGlvbihsaXN0LG9wdGlvbnMpe29wdGlvbnM9b3B0aW9uc3x8e307Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5pZighb3B0aW9ucy5zaW5nbGV0b24mJnR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiE9PSdib29sZWFuJyl7b3B0aW9ucy5zaW5nbGV0b249aXNPbGRJRSgpO31saXN0PWxpc3R8fFtdO2xldCBsYXN0SWRlbnRpZmllcnM9bW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyk7cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KXtuZXdMaXN0PW5ld0xpc3R8fFtdO2lmKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSE9PSdbb2JqZWN0IEFycmF5XScpe3JldHVybjt9Zm9yKGxldCBpPTA7aTxsYXN0SWRlbnRpZmllcnMubGVuZ3RoO2krKyl7Y29uc3QgaWRlbnRpZmllcj1sYXN0SWRlbnRpZmllcnNbaV07Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTt9Y29uc3QgbmV3TGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShuZXdMaXN0LG9wdGlvbnMpO2ZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2lmKHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzPT09MCl7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIoKTtzdHlsZXNJbkRvbS5zcGxpY2UoaW5kZXgsMSk7fX1sYXN0SWRlbnRpZmllcnM9bmV3TGFzdElkZW50aWZpZXJzO307fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBuPXs3NjI6ZnVuY3Rpb24obil7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3ZhciB0PVtdO3QudG9TdHJpbmc9ZnVuY3Rpb24gdG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odCl7dmFyIHI9Y3NzV2l0aE1hcHBpbmdUb1N0cmluZyh0LG4pO2lmKHRbMl0pe3JldHVyblwiQG1lZGlhIFwiLmNvbmNhdCh0WzJdLFwiIHtcIikuY29uY2F0KHIsXCJ9XCIpfXJldHVybiByfSkuam9pbihcIlwiKX07dC5pPWZ1bmN0aW9uKG4scixvKXtpZih0eXBlb2Ygbj09PVwic3RyaW5nXCIpe249W1tudWxsLG4sXCJcIl1dfXZhciBlPXt9O2lmKG8pe2Zvcih2YXIgYT0wO2E8dGhpcy5sZW5ndGg7YSsrKXt2YXIgYz10aGlzW2FdWzBdO2lmKGMhPW51bGwpe2VbY109dHJ1ZX19fWZvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgdT1bXS5jb25jYXQobltpXSk7aWYobyYmZVt1WzBdXSl7Y29udGludWV9aWYocil7aWYoIXVbMl0pe3VbMl09cn1lbHNle3VbMl09XCJcIi5jb25jYXQocixcIiBhbmQgXCIpLmNvbmNhdCh1WzJdKX19dC5wdXNoKHUpfX07cmV0dXJuIHR9O2Z1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcobix0KXt2YXIgcj1uWzFdfHxcIlwiO3ZhciBvPW5bM107aWYoIW8pe3JldHVybiByfWlmKHQmJnR5cGVvZiBidG9hPT09XCJmdW5jdGlvblwiKXt2YXIgZT10b0NvbW1lbnQobyk7dmFyIGE9by5zb3VyY2VzLm1hcChmdW5jdGlvbihuKXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KG8uc291cmNlUm9vdHx8XCJcIikuY29uY2F0KG4sXCIgKi9cIil9KTtyZXR1cm5bcl0uY29uY2F0KGEpLmNvbmNhdChbZV0pLmpvaW4oXCJcXG5cIil9cmV0dXJuW3JdLmpvaW4oXCJcXG5cIil9ZnVuY3Rpb24gdG9Db21tZW50KG4pe3ZhciB0PWJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KG4pKSkpO3ZhciByPVwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KHQpO3JldHVyblwiLyojIFwiLmNvbmNhdChyLFwiICovXCIpfX19O3ZhciB0PXt9O2Z1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18ocil7aWYodFtyXSl7cmV0dXJuIHRbcl0uZXhwb3J0c312YXIgbz10W3JdPXtleHBvcnRzOnt9fTt2YXIgZT10cnVlO3RyeXtuW3JdKG8sby5leHBvcnRzLF9fbmNjd3Bja19yZXF1aXJlX18pO2U9ZmFsc2V9ZmluYWxseXtpZihlKWRlbGV0ZSB0W3JdfXJldHVybiBvLmV4cG9ydHN9X19uY2N3cGNrX3JlcXVpcmVfXy5hYj1fX2Rpcm5hbWUrXCIvXCI7cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oNzYyKX0oKTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaGVhcnQge1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG4ubG9uZyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbi5mcnlMZXR0ZXJBY3Rpb25CdXR0b24ge1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcXHJcXG59XFxyXFxuLmZyeUxldHRlckFjdGlvbkJ1dHRvbkljb24ge1xcclxcbiAgICBtYXJnaW46IDVweCAwcHggMHB4IDBweDtcXHJcXG59XFxyXFxuLmZyeUxldHRlckRpdiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgcGFkZGluZzogMnB4IDEwcHggMnB4IDJweDtcXHJcXG4gICAgbWFyZ2luOiAwcHggMHB4IDEwcHggMTBweDtcXHJcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuLmZ5YkZyeUxldHRlciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMHB4IDJweDtcXHJcXG59XFxyXFxuLmZ5YkZyeUxldHRlci5TZWxlY3RlZCB7XFxyXFxuICAgIGNvbG9yOiBibHVlO1xcclxcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xcclxcbiAgICBib3JkZXItd2lkdGg6IHRoaWNrO1xcclxcbiAgICBib3JkZXItY29sb3I6IGJsdWU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxyXFxufVxcclxcbi50aGluQ2hhdCB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgbWF4LWhlaWdodDogNjAwcHg7XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuLnRoaW5DaGF0RnJvbSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi50aGluQ2hhdEZyb206OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCI+XFxcIjtcXHJcXG4gICAgY29sb3I6IHllbGxvdztcXHJcXG59XFxyXFxuLnRoaW5DaGF0RnJvbTo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiOlxcXCI7XFxyXFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxufVxcclxcbi50aGluQ2hhdE1zZyB7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgY29sb3I6d2hpdGVzbW9rZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbi50aGluQ2hhdElucHV0IHtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBjb2xvcjp3aGl0ZXNtb2tlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLnRoaW5DaGF0SW5wdXRFbXB0eSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtYmxvY2stc2l6ZTogMzBweDtcXHJcXG4gICAgY3Vyc29yOiB0ZXh0O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vcGFnZXMvZnliL2Z5Yi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix5Q0FBeUM7QUFDN0M7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUFpQjtZQUFqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlYXJ0IHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuLmxvbmcge1xcclxcbiAgICBmb250LXNpemU6IHgtc21hbGw7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG4uZnJ5TGV0dGVyQWN0aW9uQnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XFxyXFxufVxcclxcbi5mcnlMZXR0ZXJBY3Rpb25CdXR0b25JY29uIHtcXHJcXG4gICAgbWFyZ2luOiA1cHggMHB4IDBweCAwcHg7XFxyXFxufVxcclxcbi5mcnlMZXR0ZXJEaXYge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgcGFkZGluZzogMnB4IDEwcHggMnB4IDJweDtcXHJcXG4gICAgbWFyZ2luOiAwcHggMHB4IDEwcHggMTBweDtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcbi5meWJGcnlMZXR0ZXIge1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAycHg7XFxyXFxufVxcclxcbi5meWJGcnlMZXR0ZXIuU2VsZWN0ZWQge1xcclxcbiAgICBjb2xvcjogYmx1ZTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiB0aGljaztcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiBibHVlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG4udGhpbkNoYXQge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcbi50aGluQ2hhdEZyb20ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4udGhpbkNoYXRGcm9tOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiPlxcXCI7XFxyXFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxyXFxufVxcclxcbi50aGluQ2hhdEZyb206OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcIjpcXFwiO1xcclxcbiAgICBjb2xvcjogeWVsbG93O1xcclxcbiAgICBmb250LXNpemU6IHNtYWxsO1xcclxcbn1cXHJcXG4udGhpbkNoYXRNc2cge1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGNvbG9yOndoaXRlc21va2U7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG4udGhpbkNoYXRJbnB1dCB7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgY29sb3I6d2hpdGVzbW9rZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi50aGluQ2hhdElucHV0RW1wdHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LWJsb2NrLXNpemU6IDMwcHg7XFxyXFxuICAgIGN1cnNvcjogdGV4dDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uLy4uL3B1YmxpYy9Nb3JwaG9CdXR0ZXJmbHkucG5nXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gZnJvbSBcIi4uLy4uL3B1YmxpYy90aWxlLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fIGZyb20gXCIuLi8uLi9wdWJsaWMvTW9ycGhvQ2F0ZXJwaWxsYXIucG5nXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gZnJvbSBcIi4uLy4uL3B1YmxpYy9Nb3JwaG9Db2Nvb24ucG5nXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vcnBob0RpdiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG4ubW9ycGhvU29sdmVkRGl2IHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAzNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA1NTBweDtcXHJcXG59XFxyXFxuLm1vcnBob1NvbHZlZERpdi5sMyB7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyODBweDtcXHJcXG59XFxyXFxuLm1vcnBob1NvbHZlZERpdi5sNCB7XFxyXFxuICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAzNTBweDtcXHJcXG59XFxyXFxuLm1vcnBob1NvbHZlZERpdi5sNSB7XFxyXFxuICAgIGhlaWdodDogNDEwcHg7XFxyXFxufVxcclxcbi5tb3JwaG9Tb2x2ZWREaXYubDYge1xcclxcbiAgICBoZWlnaHQ6IDQ4MHB4O1xcclxcbn1cXHJcXG4ubW9ycGhvU29sdmVkRGl2Lmw3IHtcXHJcXG4gICAgaGVpZ2h0OiA1NTBweDtcXHJcXG59XFxyXFxuLm1vcnBob1NvbHZlZERpdi5sOCB7XFxyXFxuICAgIGhlaWdodDogNTYwcHg7XFxyXFxufVxcclxcbi5tb3JwaG9DZWxsIHtcXHJcXG4gICAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgICB3aWR0aDogNzBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcbi5tb3JwaG9DZWxsU3RhdGljIHsgLyogUHJvdmlkZWQgYnkgdGhlIHB1enpsZSAqL1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG59XFxyXFxuLm1vcnBob0NlbGxOb0xldHRlciB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxufVxcclxcbi5tb3JwaG9DZWxsTGFydmEge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG4ubW9ycGhvQ2VsbENvY29vbiB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbi5tb3JwaG9DZWxsU2VsZWN0ZWQge1xcclxcbiAgICBvcGFjaXR5OiA1MCU7XFxyXFxufVxcclxcbi5tb3JwaG9DZWxsQnV0dGVyZmx5IHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuLm1vcnBob0tleWJvYXJkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIHdpZHRoOiAzNTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG4ubW9ycGhvS2V5cm93MSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XFxyXFxufVxcclxcbi5tb3JwaG9LZXlyb3cyIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcbi5tb3JwaG9LZXlyb3czIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIxcHg7XFxyXFxufVxcclxcbi5tb3JwaG9LZXlyb3c0IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcclxcbn1cXHJcXG4ubW9ycGhvS2V5IHtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuICAgIG1hcmdpbjogM3B4O1xcclxcbiAgICB3aWR0aDogMjhweDtcXHJcXG59XFxyXFxuLm1vcnBob0NvcHlkb3duS2V5IHtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcbi5tb3JwaG9Db3B5dXBLZXkge1xcclxcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuLm1vcnBob1N1Ym1pdEtleSB7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcclxcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcbi5tb3JwaG9QdXp6bGVTaXplS2V5IHtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIG1hcmdpbjogM3B4O1xcclxcbiAgICB3aWR0aDogMjhweDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3BhZ2VzL21vcnBoby9tb3JwaG8uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IseURBQXlEO0lBQ3pELDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7QUFDQSxvQkFBb0IsMkJBQTJCO0lBQzNDLGlCQUFpQjtJQUNqQix5REFBOEM7QUFDbEQ7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1oseURBQTJEO0FBQy9EO0FBQ0E7SUFDSSx5REFBMkQ7SUFDM0QsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHlEQUFzRDtJQUN0RCxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubW9ycGhvRGl2IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbi5tb3JwaG9Tb2x2ZWREaXYge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3B1YmxpYy9Nb3JwaG9CdXR0ZXJmbHkucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICB3aWR0aDogMzUwcHg7XFxyXFxuICAgIGhlaWdodDogNTUwcHg7XFxyXFxufVxcclxcbi5tb3JwaG9Tb2x2ZWREaXYubDMge1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGhlaWdodDogMjgwcHg7XFxyXFxufVxcclxcbi5tb3JwaG9Tb2x2ZWREaXYubDQge1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIGhlaWdodDogMzUwcHg7XFxyXFxufVxcclxcbi5tb3JwaG9Tb2x2ZWREaXYubDUge1xcclxcbiAgICBoZWlnaHQ6IDQxMHB4O1xcclxcbn1cXHJcXG4ubW9ycGhvU29sdmVkRGl2Lmw2IHtcXHJcXG4gICAgaGVpZ2h0OiA0ODBweDtcXHJcXG59XFxyXFxuLm1vcnBob1NvbHZlZERpdi5sNyB7XFxyXFxuICAgIGhlaWdodDogNTUwcHg7XFxyXFxufVxcclxcbi5tb3JwaG9Tb2x2ZWREaXYubDgge1xcclxcbiAgICBoZWlnaHQ6IDU2MHB4O1xcclxcbn1cXHJcXG4ubW9ycGhvQ2VsbCB7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgd2lkdGg6IDcwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG4ubW9ycGhvQ2VsbFN0YXRpYyB7IC8qIFByb3ZpZGVkIGJ5IHRoZSBwdXp6bGUgKi9cXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL3RpbGUucG5nJyk7XFxyXFxufVxcclxcbi5tb3JwaG9DZWxsTm9MZXR0ZXIge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3B1YmxpYy9Nb3JwaG9DYXRlcnBpbGxhci5wbmcnKTtcXHJcXG59XFxyXFxuLm1vcnBob0NlbGxMYXJ2YSB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL01vcnBob0NhdGVycGlsbGFyLnBuZycpO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG4ubW9ycGhvQ2VsbENvY29vbiB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL01vcnBob0NvY29vbi5wbmcnKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuLm1vcnBob0NlbGxTZWxlY3RlZCB7XFxyXFxuICAgIG9wYWNpdHk6IDUwJTtcXHJcXG59XFxyXFxuLm1vcnBob0NlbGxCdXR0ZXJmbHkge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4ubW9ycGhvS2V5Ym9hcmQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgd2lkdGg6IDM1MHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcbi5tb3JwaG9LZXlyb3cxIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcXHJcXG59XFxyXFxuLm1vcnBob0tleXJvdzIge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG59XFxyXFxuLm1vcnBob0tleXJvdzMge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjFweDtcXHJcXG59XFxyXFxuLm1vcnBob0tleXJvdzQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XFxyXFxufVxcclxcbi5tb3JwaG9LZXkge1xcclxcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXHJcXG4gICAgbWFyZ2luOiAzcHg7XFxyXFxuICAgIHdpZHRoOiAyOHB4O1xcclxcbn1cXHJcXG4ubW9ycGhvQ29weWRvd25LZXkge1xcclxcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuLm1vcnBob0NvcHl1cEtleSB7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcclxcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG4ubW9ycGhvU3VibWl0S2V5IHtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuLm1vcnBob1B1enpsZVNpemVLZXkge1xcclxcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgbWFyZ2luOiAzcHg7XFxyXFxuICAgIHdpZHRoOiAyOHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vLi4vcHVibGljL1dhbGwuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gZnJvbSBcIi4uLy4uL3B1YmxpYy9wbGF5ZXJ0aXRsZS5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyBmcm9tIFwiLi4vLi4vcHVibGljL3RpbGUucG5nXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gZnJvbSBcIi4uLy4uL3B1YmxpYy9CYXJiZWRXaXJlUm90YXRlZC5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyBmcm9tIFwiLi4vLi4vcHVibGljL0JhcmJlZFdpcmUucG5nXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gZnJvbSBcIi4uLy4uL3B1YmxpYy9wcmlzb25iYXJzLXNxdWFyZS5wbmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgLS1jb21tb25Cb3JkZXJDb2xvdXI6IGdyZXk7LyogcGIgKi9cXHJcXG4gICAgLS1jb21tb25UZXh0QmFja2dyb3VuZENvbG91cjogYmxhY2s7IC8qIHBiICovXFxyXFxuICAgIC0tY29tbW9uVGV4dENvbG91cjogd2hpdGVzbW9rZTsgLyogcGIgKi9cXHJcXG4gICAgLS1jb21tb25IZWFkZXJGb250RmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyAvKiBwYiAqL1xcclxcbiAgICAtLWNvbW1vbkZvbnRGYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmOyAvKiBwYiAqL1xcclxcbiAgICAtLXNxdWFyZVNpZGU6IDQwcHg7XFxyXFxuICAgIC0tY2VsbEJsb2NrU2lkZTogNDBweDtcXHJcXG4gICAgLS1jZWxsQmxvY2tTZWxlY3RlZEhlaWdodDogNDJweDtcXHJcXG4gICAgLS1zZWxlY3RlZENvbG9yOiBoc2woMjA3LCA5MCUsIDU2JSk7XFxyXFxuICAgIC0tbG9iYnlGb250U2l6ZTogMjBweDtcXHJcXG4gICAgLS10aWxlQmFja2dyb3VuZENvbG91cjogb3JhbmdlcmVkO1xcclxcbiAgICAtLXByaXNvbmVyc1RpbGVDb2xvdXI6IHdoaXRlc21va2U7XFxyXFxuICAgIC0tZ3VhcmRzVGlsZUNvbG91cjogYmxhY2s7XFxyXFxufVxcclxcbi5jb21tb25Gb250RmFtaWx5IHsgLyogcGIgKi9cXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkZvbnRGYW1pbHkpO1xcclxcbn1cXHJcXG4udG9wQmFySGVpZ2h0IHtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbn1cXHJcXG4uZXhhbWluZUZvb3RlckhlaWdodCB7XFxyXFxuICAgIGhlaWdodDogOTBweDtcXHJcXG59XFxyXFxuLnRvcEJhckNvcm5lciB7XFxyXFxuICAgIHdpZHRoOiAyMCU7XFxyXFxuICAgIGhlaWdodDogNTAlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcbi5mdWxsV2lkdGgge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLmZvcm1hbGluZm8ge1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tY29tbW9uRm9udEZhbWlseSk7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxufVxcclxcbi5wcmlzb25icmVhayB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcbi5wYkdhbWVpZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbW1vblRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbW1vblRleHRDb2xvdXIpO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMCAwIDNweCAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxufVxcclxcbi5wYnRpdGxlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gICAgZm9udC1zaXplOiAyLjhlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgLyogZm9udC1zdHlsZTogaXRhbGljOyAqL1xcclxcbiAgICBjb2xvcjpibGFjaztcXHJcXG59XFxyXFxuLnBiaG9tZWxpbmsge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21tb25UZXh0QmFja2dyb3VuZENvbG91cik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb21tb25UZXh0Q29sb3VyKTtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG59XFxyXFxuLnBiUGxheWVyT3V0ZXJTZWN0aW9uIHtcXHJcXG4gICAgLyogYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjazsgKi9cXHJcXG4gICAgLyogd2lkdGg6IDM2MHB4OyAqL1xcclxcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uLy4uL3B1YmxpYy9XYWxsLmpwZ1xcXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xcclxcbn1cXHJcXG4vKiAucGJQbGF5ZXJPdXRlclNlY3Rpb246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uLy4uL3B1YmxpYy9Fc2NhcGVlLnBuZ1xcXCIpO1xcclxcbiAgICBvcGFjaXR5OiA3NSU7XFxyXFxufSAqL1xcclxcbi5wYlBsYXllcklubmVyU2VjdGlvbiB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbn1cXHJcXG4ucGJQbGF5ZXJUaXRsZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25Gb250RmFtaWx5KTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNnB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcclxcbn1cXHJcXG4ucGJQbGF5ZXJUaXRsZS5QIHtcXHJcXG4gICAgZm9udC1zaXplOiBpbmhlcml0OyAgIFxcclxcbn1cXHJcXG4ucGJQbGF5ZXJUaXRsZS5HIHtcXHJcXG4gICAgZm9udC1zaXplOiBpbmhlcml0OyAgICBcXHJcXG59XFxyXFxuLnBiU3F1YXJlT3V0ZXIgeyAvKiBUaGluIGJsYWNrIGJvcmRlciBhcm91bmQgZWFjaCBib2FyZCBzcXVhcmUgKi9cXHJcXG4gICAgYm9yZGVyOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xcclxcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICBwYWRkaW5nOiAwcHg7IC8qIFNvIG5vdGhpbmcgYXBwZWFycyBiZXR3ZWVuIHRoZSBzcXVhcmVzIC0ga2VlcCB0aGVtIGZsdXNoICovXFxyXFxufVxcclxcbi5wYlNxdWFyZUlubmVyIHsgLyogQ29tbW9uIGJvYXJkIHNxdWFyZSBwcm9wZXJ0aWVzICovXFxyXFxuICAgIGhlaWdodDogdmFyKC0tc3F1YXJlU2lkZSk7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1zcXVhcmVTaWRlKTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG4ucGJTcXVhcmVJbm5lcjpmb2N1cyB7IC8qIE5vIG91dGxpbmUgd2hlbiBpbiBmb2N1cyAqL1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG4ucGJTcXVhcmVJbm5lci5zdHlsZTEgeyAvKiBBbHRlcm5hdGluZyBzcXVhcmUgc3R5bGUgMSAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG4ucGJTcXVhcmVJbm5lci5zdHlsZTIgeyAvKiBBbHRlcm5hdGluZyBzcXVhcmUgc3R5bGUgMiAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcXHJcXG4gICAgY29sb3I6IGRhcmtncmV5O1xcclxcbn1cXHJcXG4ucGJTcXVhcmVJbm5lci5DZW50ZXJTcXVhcmUgeyAvKiBDZW50cmUgc3F1YXJlICovXFxyXFxuICAgIHBhZGRpbmctdG9wOiAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tbW9uVGV4dEJhY2tncm91bmRDb2xvdXIpO1xcclxcbiAgICBjb2xvcjogY29ybnNpbGs7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG59XFxyXFxuLnBiU3F1YXJlSW5uZXIuRXNjYXBlSGF0Y2ggeyAvKiBFc2NhcGUgaGF0Y2ggc3F1YXJlICovXFxyXFxuICAgIHBhZGRpbmctdG9wOiAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5wYlNxdWFyZUlubmVyLlBsYXllclRpbGUgeyAvKiBQbGF5ZXIgdGlsZSBpbWFnZSBvbiB0aGUgc3F1YXJlICovXFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGVCYWNrZ3JvdW5kQ29sb3VyKTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4ucGJTcXVhcmVUaWxlVGV4dCB7IC8qIFRoZSB0aWxlIHBsYXllZCBvbiB0aGUgYm9hcmQgKi9cXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgIFxcclxcbiAgICBib3R0b206IDNweDtcXHJcXG4gICAgbGVmdDogMTJweDsgXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggIGdyZXk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxyXFxufVxcclxcbi5wYlNxdWFyZVRpbGVUZXh0LlAgeyAvKiBQcmlzb25lcnMgdGlsZSBjb2xvciAqL1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpc29uZXJzVGlsZUNvbG91cik7XFxyXFxufVxcclxcbi5wYlNxdWFyZVRpbGVUZXh0LkcgeyAvKiBHdWFyZHMgdGlsZSBjb2xvciAqL1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3VhcmRzVGlsZUNvbG91cik7XFxyXFxufVxcclxcbi51OjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJ1XFxcIjtcXHJcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG59XFxyXFxuLnBiU3F1YXJlSW5uZXIuUmlnaHRBcnJvdyB7IC8qIFJpZ2h0IGFycm93IHdvcmQgZGlyZWN0aW9uIGluZGljYXRvciAqL1xcclxcbiAgICBwYWRkaW5nOiAwJTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgICBjb2xvcjogY3lhbjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4ucGJTcXVhcmVJbm5lci5Eb3duQXJyb3cgeyAvKiBEb3duIGFycm93IHdvcmQgZGlyZWN0aW9uIGluZGljYXRvciAqL1xcclxcbiAgICBwYWRkaW5nOiAwJTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgICBjb2xvcjogY3lhbjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4ucGJSb3cge1xcclxcbiAgICBwYWRkaW5nOiAwJTtcXHJcXG59XFxyXFxuLnBiQm9hcmRQbHVzVW5kZXJib2FyZCB7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL1dhbGwuanBnJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgKi9cXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG4ucGJCb2FyZCB7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMHB4O1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxufVxcclxcbi5wYkJvYXJkQ29sdW1uSGVhZGVyUm93IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkhlYWRlckZvbnRGYW1pbHkpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG59XFxyXFxuLnBiQm9hcmRDb2x1bW5IZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5wYkJvYXJkUm93SGVhZGVyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkhlYWRlckZvbnRGYW1pbHkpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLnBiQm9hcmRIZWFkZXJUb3BMZWZ0IHtcXHJcXG4gICAgbWluLXdpZHRoOiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgbWluLWhlaWdodDogdmFyKC0tY2VsbEJsb2NrU2lkZSk7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcbi5wYkJvYXJkSGVhZGVyVG9wUmlnaHQge1xcclxcbiAgICBtaW4td2lkdGg6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuLnBiQm9hcmRIZWFkZXJCb3R0b21MZWZ0IHtcXHJcXG4gICAgbWluLXdpZHRoOiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgbWluLWhlaWdodDogdmFyKC0tY2VsbEJsb2NrU2lkZSk7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcbi5wYkJvYXJkSGVhZGVyQm90dG9tUmlnaHQge1xcclxcbiAgICBtaW4td2lkdGg6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuLnBiVW5kZXJib2FyZCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tbW9uVGV4dEJhY2tncm91bmRDb2xvdXIpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29tbW9uVGV4dENvbG91cik7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuLnBiVGlsZUFuZE1vdmVzT3V0ZXIge1xcclxcbiAgICBhbGlnbi1pdGVtczogbGVmdDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xcclxcbn1cXHJcXG4ucGJUaWxlcG9vbCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogM3B4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkIHNvbGlkIG5vbmUgc29saWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tbW9uVGV4dEJhY2tncm91bmRDb2xvdXIpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29tbW9uVGV4dENvbG91cik7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XFxyXFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuLnBiVGlsZXBvb2xEaXZpZGVyIHtcXHJcXG4gICAgd2lkdGg6IDJweDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxufVxcclxcbi5wYlRpbGVwb29sRGl2aWRlcjo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiLlxcXCI7XFxyXFxufVxcclxcbi5wYlRpbGVwb29sVGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDE1MCU7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IGRvdHRlZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbn1cXHJcXG4ucGJUaWxlcG9vbFRpbGUge1xcclxcbiAgICBmb250LXNpemU6IHNtYWxsO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMnB4O1xcclxcbn1cXHJcXG4ucGJNb3ZlcyB7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogM3B4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbW1vblRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbW1vblRleHRDb2xvdXIpO1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IHh4LXNtYWxsO1xcclxcbn1cXHJcXG4ucGJNb3Zlc1RpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNTAlO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xcclxcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBkb3R0ZWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG59XFxyXFxuLnBiTW92ZXNTY3JvbGxhYmxlIHtcXHJcXG4gICAgbWF4LWhlaWdodDogNTUwcHg7XFxyXFxuICAgIC8qIG1heC13aWR0aDogMjUwcHg7ICovXFxyXFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XFxyXFxufVxcclxcbi5wYk1vdmUge1xcclxcbiAgICBmb250LXNpemU6IHNtYWxsO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMnB4O1xcclxcbn1cXHJcXG4ucGJNb3ZlOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFnZW50YTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ucGJNb3ZlLmJ5IHtcXHJcXG4gICAgY29sb3I6IHllbGxvdztcXHJcXG59XFxyXFxuLnBiTW92ZS5TV0FQIHtcXHJcXG4gICAgY29sb3I6IGN5YW47XFxyXFxufVxcclxcbi5wYk1vdmUuU1dBUDo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiU3dhcCB0aWxlc1xcXCI7XFxyXFxufVxcclxcbi5wYk1vdmUuUEFTUyB7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcbi5wYk1vdmUuUEFTUzo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiUGFzcyB0dXJuXFxcIjtcXHJcXG59XFxyXFxuLnBiTW92ZS5QTEFZIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbW1vblRleHRDb2xvdXIpO1xcclxcbn1cXHJcXG4ucGJUaWxlcmFjayB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAycHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcbi5wYlRpbGVyYWNrQXJyb3cge1xcclxcbiAgICAvKlxcclxcbiAgICAgICAgSSBnb3QgdGhpcyBpZGVhIG9ubGluZS5cXHJcXG4gICAgICAgIEl0IGlzIGEgYm94IHdpdGggYSBib3JkZXIsIGJ1dCB0aGUgYm94IGhhcyBubyBoZWlnaHQgb3Igd2lkdGggbGVhdmluZyBqdXN0IGJvcmRlcnMuXFxyXFxuICAgICAgICBXaGVuIHRoZSA0IGJvcmRlcnMgbWVldCAobm8gYm94KSBpdCBpcyBsaWtlIDQgdHJpYW5nbGVzIChpbWFnaW5lIFggKS5cXHJcXG4gICAgICAgIFlvdSBtYWtlIDMgYm9yZGVycyB0cmFuc3BhcmVudCwgbGVhdmluZyBvbmx5IHRoZSB0cmlhbmdsZSB5b3Ugd2FudCB0byBkaXNwbGF5LlxcclxcbiAgICAqL1xcclxcbiAgICBtYXJnaW4tdG9wOiAxM3B4OyAvKiBwdXNoIHRoZSBhcnJvdyBkb3duIHRvIHRoZSBtaWRkbGUgKi9cXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7IC8qIHB1dCBzb21lIHNwYWNlIGJldHdlZW4gdGhlIGFycm93IGFuZCB0aWxlcmFjayAqL1xcclxcbiAgICB3aWR0aDogMDsgXFxyXFxuICAgIGhlaWdodDogMDsgXFxyXFxuICAgIGJvcmRlci10b3A6IDdweCBzb2xpZCB0cmFuc3BhcmVudDsgLyogbGVzcyB0aGFuIDE1cHggaGVyZSBhbmQgbmV4dCBsaW5lIGZvciBhIG1vcmUgc2xlbmRlciBhcnJvdyAqL1xcclxcbiAgICBib3JkZXItYm90dG9tOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7ICAgXFxyXFxuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkIHJnYig0NCwgMjQwLCAzNyk7XFxyXFxufVxcclxcbi5wYlRpbGVyYWNrQXJyb3dJbkZvb3RlciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICAgIGJvcmRlci10b3A6IDdweCBzb2xpZCB0cmFuc3BhcmVudDsgLyogbGVzcyB0aGFuIDE1cHggaGVyZSBhbmQgbmV4dCBsaW5lIGZvciBhIG1vcmUgc2xlbmRlciBhcnJvdyAqL1xcclxcbiAgICBib3JkZXItYm90dG9tOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7ICAgXFxyXFxuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkIHJnYig0NCwgMjQwLCAzNyk7XFxyXFxufVxcclxcbi5wYlRpbGVPblJhY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlQmFja2dyb3VuZENvbG91cik7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1zcXVhcmVTaWRlKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1zcXVhcmVTaWRlKTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4ucGJUaWxlT25SYWNrLlVuc2VsZWN0ZWQge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5wYlRpbGVPblJhY2suU2VsZWN0ZWQge1xcclxcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xcclxcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XFxyXFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcXHJcXG4gICAgbWFyZ2luOiA0cHg7XFxyXFxufVxcclxcbi5wYlRpbGVPblJhY2tUZXh0IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgIFxcclxcbiAgICBib3R0b206IDJweDtcXHJcXG4gICAgbGVmdDogMTFweDsgXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggIGdyZXk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxyXFxufVxcclxcbi5wYlRpbGVPblJhY2suUCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmlzb25lcnNUaWxlQ29sb3VyKTtcXHJcXG59XFxyXFxuLnBiVGlsZU9uUmFjay5HIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWd1YXJkc1RpbGVDb2xvdXIpO1xcclxcbn1cXHJcXG4ucGJSZXNjdWVzTWFkZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbW1vblRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcXHJcXG4gICAgY29sb3I6dmFyKC0tY29tbW9uVGV4dENvbG91cik7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tY29tbW9uRm9udEZhbWlseSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuLnBiQWN0aW9uQnV0dG9uRGl2IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcXHJcXG59XFxyXFxuLnBiQWN0aW9uQnV0dG9uIHtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9wdWJsaWMvYWN0aW9uQnV0dG9uLnBuZycpOyAqL1xcclxcbiAgICBwYWRkaW5nOiAycHggMnB4IDJweCAycHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMHB4O1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbW1vblRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbW1vblRleHRDb2xvdXIpO1xcclxcbiAgICBmb250LXN0eWxlOiBib2xkZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25Gb250RmFtaWx5KTtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICB3b3JkLXNwYWNpbmc6IDNweDtcXHJcXG59XFxyXFxuLnBiQWN0aW9uQnV0dG9uVGV4dCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXHJcXG59XFxyXFxuLnBiQWN0aW9uQnV0dG9uU2V2ZXJlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5wYkFjdGlvbkJ1dHRvblNldmVyZVRleHQge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbi5wYkFjdGlvbkJ1dHRvblNldmVyZVRleHQyIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlOyAvKiBUaGlzIG1ha2VzIGl0IGdvIG9uIHRoZSBuZXh0IGxpbmUgKi9cXHJcXG4gICAgbWFyZ2luOiBhdXRvOyAvKiBUaGlzIGlzIHRoZSBvbmx5IHdheSBJIGNvdWxkIGNlbnRyZSBpdCEgKi9cXHJcXG59XFxyXFxuLnBiTG9iYnlSYWNrU2l6ZVByb21wdCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25IZWFkZXJGb250RmFtaWx5KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi5wYkxvYmJ5UmFja1NpemVQcm9tcHQ6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIkNlbGwgQmxvY2tcXFwiO1xcclxcbn1cXHJcXG4ucGJMb2JieVJhY2tTaXplUHJvbXB0OjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCI6XFxcIjtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XFxyXFxufVxcclxcbi5wYkxvYmJ5UmFja1NpemUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgd2lkdGg6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6MjBweDtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4ucGJMb2JieVJhY2tTaXplU2VsZWN0ZWQge1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uLy4uL3B1YmxpYy9wcmlzb25iYXJzLXNxdWFyZS5wbmdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiB2YXIoLS1jZWxsQmxvY2tTaWRlKTsgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0ZWRDb2xvcik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGxCbG9ja1NlbGVjdGVkSGVpZ2h0KTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OjIwcHg7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcclxcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0Z3JleTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG59XFxyXFxuLnBiTG9iYnlSYWNrU2l6ZVNlbGVjdGVkOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuLnBiTG9iYnlDZWxsQmxvY2tJbmZvIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkZvbnRGYW1pbHkpO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbn1cXHJcXG4ucGJDaGF0IHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGxlZnQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZSBzb2xpZCBub25lIHNvbGlkO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcbi5wYkNoYXRUYWJsZSB7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG59XFxyXFxuLnBiQ2hhdEZyb20ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxufVxcclxcbi5wYkNoYXRGcm9tOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiPlxcXCI7XFxyXFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxyXFxufVxcclxcbi5wYkNoYXRGcm9tOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCI6XFxcIjtcXHJcXG4gICAgY29sb3I6IHllbGxvdztcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXB4O1xcclxcbn1cXHJcXG4ucGJDaGF0TXNnIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgY29sb3I6d2hpdGVzbW9rZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIHBhZGRpbmctdG9wOjJweDtcXHJcXG59XFxyXFxuLnBiQ2hhdElucHV0IHtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBjb2xvcjp3aGl0ZXNtb2tlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLnBiQ2hhdElucHV0RW1wdHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LWJsb2NrLXNpemU6IDMwcHg7XFxyXFxuICAgIGN1cnNvcjogdGV4dDtcXHJcXG59XFxyXFxuLnBiU25hdERpdiB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xcclxcbiAgICBkaXNwbGF5OiBkaXNwbGF5LWJveDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcclxcbiAgICBib3JkZXItd2lkdGg6IDVweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lIG5vbmUgc29saWQgc29saWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcbi5wYlNuYXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9wYWdlcy9wYi9wcmlzb25icmVhay5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwwQkFBMEIsQ0FBQyxPQUFPO0lBQ2xDLG1DQUFtQyxFQUFFLE9BQU87SUFDNUMsOEJBQThCLEVBQUUsT0FBTztJQUN2QyxzREFBc0QsRUFBRSxPQUFPO0lBQy9ELHVEQUF1RCxFQUFFLE9BQU87SUFDaEUsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQiwrQkFBK0I7SUFDL0IsbUNBQW1DO0lBQ25DLHFCQUFxQjtJQUNyQixpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLHlCQUF5QjtBQUM3QjtBQUNBLG9CQUFvQixPQUFPO0lBQ3ZCLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHlEQUE4QztJQUM5QyxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLG1EQUFtRDtJQUNuRCw4QkFBOEI7SUFDOUIsdUNBQXVDO0lBQ3ZDLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHlDQUF5QztJQUN6Qyx3QkFBd0I7SUFDeEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxtREFBbUQ7SUFDbkQsOEJBQThCO0lBQzlC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QUFDdkI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyx1Q0FBdUM7SUFDdkMsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksdUNBQXVDO0FBQzNDO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDJDQUEyQztJQUMzQyxXQUFXO0FBQ2Y7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0tY29tbW9uQm9yZGVyQ29sb3VyOiBncmV5Oy8qIHBiICovXFxyXFxuICAgIC0tY29tbW9uVGV4dEJhY2tncm91bmRDb2xvdXI6IGJsYWNrOyAvKiBwYiAqL1xcclxcbiAgICAtLWNvbW1vblRleHRDb2xvdXI6IHdoaXRlc21va2U7IC8qIHBiICovXFxyXFxuICAgIC0tY29tbW9uSGVhZGVyRm9udEZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgLyogcGIgKi9cXHJcXG4gICAgLS1jb21tb25Gb250RmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjsgLyogcGIgKi9cXHJcXG4gICAgLS1zcXVhcmVTaWRlOiA0MHB4O1xcclxcbiAgICAtLWNlbGxCbG9ja1NpZGU6IDQwcHg7XFxyXFxuICAgIC0tY2VsbEJsb2NrU2VsZWN0ZWRIZWlnaHQ6IDQycHg7XFxyXFxuICAgIC0tc2VsZWN0ZWRDb2xvcjogaHNsKDIwNywgOTAlLCA1NiUpO1xcclxcbiAgICAtLWxvYmJ5Rm9udFNpemU6IDIwcHg7XFxyXFxuICAgIC0tdGlsZUJhY2tncm91bmRDb2xvdXI6IG9yYW5nZXJlZDtcXHJcXG4gICAgLS1wcmlzb25lcnNUaWxlQ29sb3VyOiB3aGl0ZXNtb2tlO1xcclxcbiAgICAtLWd1YXJkc1RpbGVDb2xvdXI6IGJsYWNrO1xcclxcbn1cXHJcXG4uY29tbW9uRm9udEZhbWlseSB7IC8qIHBiICovXFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25Gb250RmFtaWx5KTtcXHJcXG59XFxyXFxuLnRvcEJhckhlaWdodCB7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG59XFxyXFxuLmV4YW1pbmVGb290ZXJIZWlnaHQge1xcclxcbiAgICBoZWlnaHQ6IDkwcHg7XFxyXFxufVxcclxcbi50b3BCYXJDb3JuZXIge1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbiAgICBoZWlnaHQ6IDUwJTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG4uZnVsbFdpZHRoIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5mb3JtYWxpbmZvIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkZvbnRGYW1pbHkpO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG4ucHJpc29uYnJlYWsge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uLy4uL3B1YmxpYy9XYWxsLmpwZ1xcXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG4ucGJHYW1laWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21tb25UZXh0QmFja2dyb3VuZENvbG91cik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb21tb25UZXh0Q29sb3VyKTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDAgMCAzcHggM3B4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbn1cXHJcXG4ucGJ0aXRsZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi44ZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICAgIC8qIGZvbnQtc3R5bGU6IGl0YWxpYzsgKi9cXHJcXG4gICAgY29sb3I6YmxhY2s7XFxyXFxufVxcclxcbi5wYmhvbWVsaW5rIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tbW9uVGV4dEJhY2tncm91bmRDb2xvdXIpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29tbW9uVGV4dENvbG91cik7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxufVxcclxcbi5wYlBsYXllck91dGVyU2VjdGlvbiB7XFxyXFxuICAgIC8qIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7ICovXFxyXFxuICAgIC8qIHdpZHRoOiAzNjBweDsgKi9cXHJcXG4gICAgcGFkZGluZy10b3A6IDNweDtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi8uLi9wdWJsaWMvV2FsbC5qcGdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cXHJcXG59XFxyXFxuLyogLnBiUGxheWVyT3V0ZXJTZWN0aW9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi8uLi9wdWJsaWMvRXNjYXBlZS5wbmdcXFwiKTtcXHJcXG4gICAgb3BhY2l0eTogNzUlO1xcclxcbn0gKi9cXHJcXG4ucGJQbGF5ZXJJbm5lclNlY3Rpb24ge1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG59XFxyXFxuLnBiUGxheWVyVGl0bGUge1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tY29tbW9uRm9udEZhbWlseSk7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL3BsYXllcnRpdGxlLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxufVxcclxcbi5wYlBsYXllclRpdGxlLlAge1xcclxcbiAgICBmb250LXNpemU6IGluaGVyaXQ7ICAgXFxyXFxufVxcclxcbi5wYlBsYXllclRpdGxlLkcge1xcclxcbiAgICBmb250LXNpemU6IGluaGVyaXQ7ICAgIFxcclxcbn1cXHJcXG4ucGJTcXVhcmVPdXRlciB7IC8qIFRoaW4gYmxhY2sgYm9yZGVyIGFyb3VuZCBlYWNoIGJvYXJkIHNxdWFyZSAqL1xcclxcbiAgICBib3JkZXI6IHNvbGlkO1xcclxcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XFxyXFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIHBhZGRpbmc6IDBweDsgLyogU28gbm90aGluZyBhcHBlYXJzIGJldHdlZW4gdGhlIHNxdWFyZXMgLSBrZWVwIHRoZW0gZmx1c2ggKi9cXHJcXG59XFxyXFxuLnBiU3F1YXJlSW5uZXIgeyAvKiBDb21tb24gYm9hcmQgc3F1YXJlIHByb3BlcnRpZXMgKi9cXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1zcXVhcmVTaWRlKTtcXHJcXG4gICAgd2lkdGg6IHZhcigtLXNxdWFyZVNpZGUpO1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbi5wYlNxdWFyZUlubmVyOmZvY3VzIHsgLyogTm8gb3V0bGluZSB3aGVuIGluIGZvY3VzICovXFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbi5wYlNxdWFyZUlubmVyLnN0eWxlMSB7IC8qIEFsdGVybmF0aW5nIHNxdWFyZSBzdHlsZSAxICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbi5wYlNxdWFyZUlubmVyLnN0eWxlMiB7IC8qIEFsdGVybmF0aW5nIHNxdWFyZSBzdHlsZSAyICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xcclxcbiAgICBjb2xvcjogZGFya2dyZXk7XFxyXFxufVxcclxcbi5wYlNxdWFyZUlubmVyLkNlbnRlclNxdWFyZSB7IC8qIENlbnRyZSBzcXVhcmUgKi9cXHJcXG4gICAgcGFkZGluZy10b3A6IDNweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21tb25UZXh0QmFja2dyb3VuZENvbG91cik7XFxyXFxuICAgIGNvbG9yOiBjb3Juc2lsaztcXHJcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbn1cXHJcXG4ucGJTcXVhcmVJbm5lci5Fc2NhcGVIYXRjaCB7IC8qIEVzY2FwZSBoYXRjaCBzcXVhcmUgKi9cXHJcXG4gICAgcGFkZGluZy10b3A6IDNweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLnBiU3F1YXJlSW5uZXIuUGxheWVyVGlsZSB7IC8qIFBsYXllciB0aWxlIGltYWdlIG9uIHRoZSBzcXVhcmUgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9wdWJsaWMvdGlsZS5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZUJhY2tncm91bmRDb2xvdXIpO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5wYlNxdWFyZVRpbGVUZXh0IHsgLyogVGhlIHRpbGUgcGxheWVkIG9uIHRoZSBib2FyZCAqL1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgXFxyXFxuICAgIGJvdHRvbTogM3B4O1xcclxcbiAgICBsZWZ0OiAxMnB4OyBcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAgZ3JleTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXHJcXG59XFxyXFxuLnBiU3F1YXJlVGlsZVRleHQuUCB7IC8qIFByaXNvbmVycyB0aWxlIGNvbG9yICovXFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmlzb25lcnNUaWxlQ29sb3VyKTtcXHJcXG59XFxyXFxuLnBiU3F1YXJlVGlsZVRleHQuRyB7IC8qIEd1YXJkcyB0aWxlIGNvbG9yICovXFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ndWFyZHNUaWxlQ29sb3VyKTtcXHJcXG59XFxyXFxuLnU6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcInVcXFwiO1xcclxcbiAgICBmb250LXNpemU6IHNtYWxsO1xcclxcbn1cXHJcXG4ucGJTcXVhcmVJbm5lci5SaWdodEFycm93IHsgLyogUmlnaHQgYXJyb3cgd29yZCBkaXJlY3Rpb24gaW5kaWNhdG9yICovXFxyXFxuICAgIHBhZGRpbmc6IDAlO1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICAgIGNvbG9yOiBjeWFuO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5wYlNxdWFyZUlubmVyLkRvd25BcnJvdyB7IC8qIERvd24gYXJyb3cgd29yZCBkaXJlY3Rpb24gaW5kaWNhdG9yICovXFxyXFxuICAgIHBhZGRpbmc6IDAlO1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICAgIGNvbG9yOiBjeWFuO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5wYlJvdyB7XFxyXFxuICAgIHBhZGRpbmc6IDAlO1xcclxcbn1cXHJcXG4ucGJCb2FyZFBsdXNVbmRlcmJvYXJkIHtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9wdWJsaWMvV2FsbC5qcGcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyAqL1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcbi5wYkJvYXJkIHtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG59XFxyXFxuLnBiQm9hcmRDb2x1bW5IZWFkZXJSb3cge1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tY29tbW9uSGVhZGVyRm9udEZhbWlseSk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbn1cXHJcXG4ucGJCb2FyZENvbHVtbkhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL0JhcmJlZFdpcmVSb3RhdGVkLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5wYkJvYXJkUm93SGVhZGVyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkhlYWRlckZvbnRGYW1pbHkpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3B1YmxpYy9CYXJiZWRXaXJlLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLnBiQm9hcmRIZWFkZXJUb3BMZWZ0IHtcXHJcXG4gICAgbWluLXdpZHRoOiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgbWluLWhlaWdodDogdmFyKC0tY2VsbEJsb2NrU2lkZSk7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL0JhcmJlZFdpcmVSb3RhdGVkLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG4ucGJCb2FyZEhlYWRlclRvcFJpZ2h0IHtcXHJcXG4gICAgbWluLXdpZHRoOiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgbWluLWhlaWdodDogdmFyKC0tY2VsbEJsb2NrU2lkZSk7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL0JhcmJlZFdpcmUucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcbi5wYkJvYXJkSGVhZGVyQm90dG9tTGVmdCB7XFxyXFxuICAgIG1pbi13aWR0aDogdmFyKC0tY2VsbEJsb2NrU2lkZSk7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3B1YmxpYy9CYXJiZWRXaXJlLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG4ucGJCb2FyZEhlYWRlckJvdHRvbVJpZ2h0IHtcXHJcXG4gICAgbWluLXdpZHRoOiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgbWluLWhlaWdodDogdmFyKC0tY2VsbEJsb2NrU2lkZSk7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL0JhcmJlZFdpcmVSb3RhdGVkLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG4ucGJVbmRlcmJvYXJkIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21tb25UZXh0QmFja2dyb3VuZENvbG91cik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb21tb25UZXh0Q29sb3VyKTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG4ucGJUaWxlQW5kTW92ZXNPdXRlciB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIG1heC13aWR0aDogMjUwcHg7XFxyXFxufVxcclxcbi5wYlRpbGVwb29sIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQgc29saWQgbm9uZSBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21tb25UZXh0QmFja2dyb3VuZENvbG91cik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb21tb25UZXh0Q29sb3VyKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXHJcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG4ucGJUaWxlcG9vbERpdmlkZXIge1xcclxcbiAgICB3aWR0aDogMnB4O1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG59XFxyXFxuLnBiVGlsZXBvb2xEaXZpZGVyOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXHJcXG59XFxyXFxuLnBiVGlsZXBvb2xUaXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTUwJTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogZG90dGVkO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxufVxcclxcbi5wYlRpbGVwb29sVGlsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XFxyXFxufVxcclxcbi5wYk1vdmVzIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tbW9uVGV4dEJhY2tncm91bmRDb2xvdXIpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29tbW9uVGV4dENvbG91cik7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XFxyXFxufVxcclxcbi5wYk1vdmVzVGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDE1MCU7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IGRvdHRlZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbn1cXHJcXG4ucGJNb3Zlc1Njcm9sbGFibGUge1xcclxcbiAgICBtYXgtaGVpZ2h0OiA1NTBweDtcXHJcXG4gICAgLyogbWF4LXdpZHRoOiAyNTBweDsgKi9cXHJcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcXHJcXG59XFxyXFxuLnBiTW92ZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XFxyXFxufVxcclxcbi5wYk1vdmU6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYWdlbnRhO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5wYk1vdmUuYnkge1xcclxcbiAgICBjb2xvcjogeWVsbG93O1xcclxcbn1cXHJcXG4ucGJNb3ZlLlNXQVAge1xcclxcbiAgICBjb2xvcjogY3lhbjtcXHJcXG59XFxyXFxuLnBiTW92ZS5TV0FQOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJTd2FwIHRpbGVzXFxcIjtcXHJcXG59XFxyXFxuLnBiTW92ZS5QQVNTIHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuLnBiTW92ZS5QQVNTOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJQYXNzIHR1cm5cXFwiO1xcclxcbn1cXHJcXG4ucGJNb3ZlLlBMQVkge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29tbW9uVGV4dENvbG91cik7XFxyXFxufVxcclxcbi5wYlRpbGVyYWNrIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuLnBiVGlsZXJhY2tBcnJvdyB7XFxyXFxuICAgIC8qXFxyXFxuICAgICAgICBJIGdvdCB0aGlzIGlkZWEgb25saW5lLlxcclxcbiAgICAgICAgSXQgaXMgYSBib3ggd2l0aCBhIGJvcmRlciwgYnV0IHRoZSBib3ggaGFzIG5vIGhlaWdodCBvciB3aWR0aCBsZWF2aW5nIGp1c3QgYm9yZGVycy5cXHJcXG4gICAgICAgIFdoZW4gdGhlIDQgYm9yZGVycyBtZWV0IChubyBib3gpIGl0IGlzIGxpa2UgNCB0cmlhbmdsZXMgKGltYWdpbmUgWCApLlxcclxcbiAgICAgICAgWW91IG1ha2UgMyBib3JkZXJzIHRyYW5zcGFyZW50LCBsZWF2aW5nIG9ubHkgdGhlIHRyaWFuZ2xlIHlvdSB3YW50IHRvIGRpc3BsYXkuXFxyXFxuICAgICovXFxyXFxuICAgIG1hcmdpbi10b3A6IDEzcHg7IC8qIHB1c2ggdGhlIGFycm93IGRvd24gdG8gdGhlIG1pZGRsZSAqL1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDsgLyogcHV0IHNvbWUgc3BhY2UgYmV0d2VlbiB0aGUgYXJyb3cgYW5kIHRpbGVyYWNrICovXFxyXFxuICAgIHdpZHRoOiAwOyBcXHJcXG4gICAgaGVpZ2h0OiAwOyBcXHJcXG4gICAgYm9yZGVyLXRvcDogN3B4IHNvbGlkIHRyYW5zcGFyZW50OyAvKiBsZXNzIHRoYW4gMTVweCBoZXJlIGFuZCBuZXh0IGxpbmUgZm9yIGEgbW9yZSBzbGVuZGVyIGFycm93ICovXFxyXFxuICAgIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCB0cmFuc3BhcmVudDsgICBcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgcmdiKDQ0LCAyNDAsIDM3KTtcXHJcXG59XFxyXFxuLnBiVGlsZXJhY2tBcnJvd0luRm9vdGVyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG4gICAgYm9yZGVyLXRvcDogN3B4IHNvbGlkIHRyYW5zcGFyZW50OyAvKiBsZXNzIHRoYW4gMTVweCBoZXJlIGFuZCBuZXh0IGxpbmUgZm9yIGEgbW9yZSBzbGVuZGVyIGFycm93ICovXFxyXFxuICAgIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCB0cmFuc3BhcmVudDsgICBcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgcmdiKDQ0LCAyNDAsIDM3KTtcXHJcXG59XFxyXFxuLnBiVGlsZU9uUmFjayB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL3RpbGUucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGVCYWNrZ3JvdW5kQ29sb3VyKTtcXHJcXG4gICAgd2lkdGg6IHZhcigtLXNxdWFyZVNpZGUpO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLXNxdWFyZVNpZGUpO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5wYlRpbGVPblJhY2suVW5zZWxlY3RlZCB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLnBiVGlsZU9uUmFjay5TZWxlY3RlZCB7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xcclxcbiAgICBtYXJnaW46IDRweDtcXHJcXG59XFxyXFxuLnBiVGlsZU9uUmFja1RleHQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgXFxyXFxuICAgIGJvdHRvbTogMnB4O1xcclxcbiAgICBsZWZ0OiAxMXB4OyBcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAgZ3JleTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXHJcXG59XFxyXFxuLnBiVGlsZU9uUmFjay5QIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaXNvbmVyc1RpbGVDb2xvdXIpO1xcclxcbn1cXHJcXG4ucGJUaWxlT25SYWNrLkcge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3VhcmRzVGlsZUNvbG91cik7XFxyXFxufVxcclxcbi5wYlJlc2N1ZXNNYWRlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tbW9uVGV4dEJhY2tncm91bmRDb2xvdXIpO1xcclxcbiAgICBjb2xvcjp2YXIoLS1jb21tb25UZXh0Q29sb3VyKTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDNweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25Gb250RmFtaWx5KTtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG4ucGJBY3Rpb25CdXR0b25EaXYge1xcclxcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xcclxcbn1cXHJcXG4ucGJBY3Rpb25CdXR0b24ge1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3B1YmxpYy9hY3Rpb25CdXR0b24ucG5nJyk7ICovXFxyXFxuICAgIHBhZGRpbmc6IDJweCAycHggMnB4IDJweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tbW9uVGV4dEJhY2tncm91bmRDb2xvdXIpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29tbW9uVGV4dENvbG91cik7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGJvbGRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkZvbnRGYW1pbHkpO1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIHdvcmQtc3BhY2luZzogM3B4O1xcclxcbn1cXHJcXG4ucGJBY3Rpb25CdXR0b25UZXh0IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcclxcbn1cXHJcXG4ucGJBY3Rpb25CdXR0b25TZXZlcmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLnBiQWN0aW9uQnV0dG9uU2V2ZXJlVGV4dCB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuLnBiQWN0aW9uQnV0dG9uU2V2ZXJlVGV4dDIge1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG4gICAgZGlzcGxheTogdGFibGU7IC8qIFRoaXMgbWFrZXMgaXQgZ28gb24gdGhlIG5leHQgbGluZSAqL1xcclxcbiAgICBtYXJnaW46IGF1dG87IC8qIFRoaXMgaXMgdGhlIG9ubHkgd2F5IEkgY291bGQgY2VudHJlIGl0ISAqL1xcclxcbn1cXHJcXG4ucGJMb2JieVJhY2tTaXplUHJvbXB0IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkhlYWRlckZvbnRGYW1pbHkpO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuLnBiTG9iYnlSYWNrU2l6ZVByb21wdDpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiQ2VsbCBCbG9ja1xcXCI7XFxyXFxufVxcclxcbi5wYkxvYmJ5UmFja1NpemVQcm9tcHQ6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcIjpcXFwiO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcXHJcXG59XFxyXFxuLnBiTG9iYnlSYWNrU2l6ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vLi4vcHVibGljL3ByaXNvbmJhcnMtc3F1YXJlLnBuZ1xcXCIpO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgd2lkdGg6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6MjBweDtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4ucGJMb2JieVJhY2tTaXplU2VsZWN0ZWQge1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uLy4uL3B1YmxpYy9wcmlzb25iYXJzLXNxdWFyZS5wbmdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiB2YXIoLS1jZWxsQmxvY2tTaWRlKTsgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0ZWRDb2xvcik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGxCbG9ja1NlbGVjdGVkSGVpZ2h0KTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OjIwcHg7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcclxcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0Z3JleTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG59XFxyXFxuLnBiTG9iYnlSYWNrU2l6ZVNlbGVjdGVkOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuLnBiTG9iYnlDZWxsQmxvY2tJbmZvIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkZvbnRGYW1pbHkpO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbn1cXHJcXG4ucGJDaGF0IHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGxlZnQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZSBzb2xpZCBub25lIHNvbGlkO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcbi5wYkNoYXRUYWJsZSB7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG59XFxyXFxuLnBiQ2hhdEZyb20ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxufVxcclxcbi5wYkNoYXRGcm9tOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiPlxcXCI7XFxyXFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxyXFxufVxcclxcbi5wYkNoYXRGcm9tOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCI6XFxcIjtcXHJcXG4gICAgY29sb3I6IHllbGxvdztcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXB4O1xcclxcbn1cXHJcXG4ucGJDaGF0TXNnIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgY29sb3I6d2hpdGVzbW9rZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIHBhZGRpbmctdG9wOjJweDtcXHJcXG59XFxyXFxuLnBiQ2hhdElucHV0IHtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBjb2xvcjp3aGl0ZXNtb2tlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLnBiQ2hhdElucHV0RW1wdHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LWJsb2NrLXNpemU6IDMwcHg7XFxyXFxuICAgIGN1cnNvcjogdGV4dDtcXHJcXG59XFxyXFxuLnBiU25hdERpdiB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xcclxcbiAgICBkaXNwbGF5OiBkaXNwbGF5LWJveDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcclxcbiAgICBib3JkZXItd2lkdGg6IDVweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lIG5vbmUgc29saWQgc29saWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcbi5wYlNuYXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi8uLi9wdWJsaWMvdHJhbnNtb2dyaWZ5LmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50bV9udW1Nb3Zlc0RpdiB7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi50bV9udW1Nb3Zlc1NlbGVjdGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcXHJcXG59XFxyXFxuLnRtX251bU1vdmVzU2VsZWN0ZWQ6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG4udG1fbnVtTW92ZXNVbnNlbGVjdGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcXHJcXG59XFxyXFxuLnRtX251bU1vdmVzVW5zZWxlY3RlZDpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbi50bV9zdGFydFB1enpsZURpdiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi50bV9wdXp6bGVEaXYge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuLnRtX3B1enpsZURpdiBzcGFuOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcbi50bV9wdXp6bGVEaXYgc3BhbjpudGgtY2hpbGQoMSkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gICAgcGFkZGluZzogMHB4IDVweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG59XFxyXFxuLnRtX3B1enpsZURpdiBzcGFuOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG59XFxyXFxuLnRtX3B1enpsZURpdiBzcGFuOm50aC1jaGlsZCgzKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG4udG1fcHV6emxlRGl2IHNwYW46bnRoLWNoaWxkKDYpIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG4udG1fcHV6emxlRGl2IHAge1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxufVxcclxcbi50bV9zb2x1dGlvbk91dGVyRGl2IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG4udG1fc29sdXRpb25EaXYge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtaW4taGVpZ2h0OiAyMjVweDtcXHJcXG4gICAgbWluLXdpZHRoOiAzNzBweDtcXHJcXG59XFxyXFxuLnRtX3NvbHV0aW9uRGl2IHRhYmxlIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG4udG1fc29sdXRpb25EaXYgdGQge1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG4udG1fc29sdXRpb25EaXYgdHI6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwIDAgM3B4ICNGRjAwMDAsIDAgMCA1cHggIzAwMDBGRjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi50bV9uZXh0d29yZCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG59XFxyXFxuLnRtX2Fycm93IHtcXHJcXG4gICAgY29sb3I6IGN5YW47XFxyXFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuLnRtX3NvbHV0aW9uRGl2IHRyOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi50bV9zb2x1dGlvbkRpdiB0cjpsYXN0LWNoaWxkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udG1fQmFja3NwYWNlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG59XFxyXFxuLnRtX0JhY2tzcGFjZTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogJ1xcXFwwMDNDeCc7XFxyXFxufVxcclxcbi50bV9LZXlHb0RpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4udG1fS2V5R28ge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbn1cXHJcXG4udG1fbGFzdGJ1dHRvbnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuLnRtX3F1aXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuLnRtX3ZhbGlkd29yZHNkaXYge1xcclxcbiAgICB3aWR0aDogMzcwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuLnRtX3ZhbGlkd29yZHNkaXYgcCB7XFxyXFxuICAgIGJvcmRlci10b3A6IDhweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxufVxcclxcbi50bV92YWxpZHdvcmRzZGl2IHA6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICc8PDwgJztcXHJcXG59XFxyXFxuLnRtX3ZhbGlkd29yZHNkaXYgcDo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnID4+Pic7XFxyXFxufVxcclxcbi50bV92YWxpZHdvcmRzZGl2IHNwYW4ge1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBjb2xvcjogeWVsbG93O1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDNweCAjRkYwMDAwLCAwIDAgNXB4ICMwMDAwRkY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi50bV9jb25ncmF0cyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogYXF1YTtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG4udG1faGludHNoZWFkZXIge1xcclxcbiAgICBib3JkZXItdG9wOiA4cHggc29saWQ7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZDtcXHJcXG4gICAgd2lkdGg6IDM3MHB4O1xcclxcbiAgICBoZWlnaHQ6IDU4cHg7XFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9wYWdlcy90bS90bS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLDhDQUE4QztJQUM5QyxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsOENBQThDO0lBQzlDLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0kseURBQXNEO0lBQ3RELHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNkNBQTZDO0lBQzdDLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsNkNBQTZDO0lBQzdDLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50bV9udW1Nb3Zlc0RpdiB7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi50bV9udW1Nb3Zlc1NlbGVjdGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcXHJcXG59XFxyXFxuLnRtX251bU1vdmVzU2VsZWN0ZWQ6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG4udG1fbnVtTW92ZXNVbnNlbGVjdGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcXHJcXG59XFxyXFxuLnRtX251bU1vdmVzVW5zZWxlY3RlZDpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbi50bV9zdGFydFB1enpsZURpdiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi50bV9wdXp6bGVEaXYge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuLnRtX3B1enpsZURpdiBzcGFuOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcbi50bV9wdXp6bGVEaXYgc3BhbjpudGgtY2hpbGQoMSkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gICAgcGFkZGluZzogMHB4IDVweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG59XFxyXFxuLnRtX3B1enpsZURpdiBzcGFuOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG59XFxyXFxuLnRtX3B1enpsZURpdiBzcGFuOm50aC1jaGlsZCgzKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG4udG1fcHV6emxlRGl2IHNwYW46bnRoLWNoaWxkKDYpIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG4udG1fcHV6emxlRGl2IHAge1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxufVxcclxcbi50bV9zb2x1dGlvbk91dGVyRGl2IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG4udG1fc29sdXRpb25EaXYge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3B1YmxpYy90cmFuc21vZ3JpZnkuanBnJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDIyNXB4O1xcclxcbiAgICBtaW4td2lkdGg6IDM3MHB4O1xcclxcbn1cXHJcXG4udG1fc29sdXRpb25EaXYgdGFibGUge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxufVxcclxcbi50bV9zb2x1dGlvbkRpdiB0ZCB7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcbi50bV9zb2x1dGlvbkRpdiB0cjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcXHJcXG4gICAgY29sb3I6IHllbGxvdztcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzcHggI0ZGMDAwMCwgMCAwIDVweCAjMDAwMEZGO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuLnRtX25leHR3b3JkIHtcXHJcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbn1cXHJcXG4udG1fYXJyb3cge1xcclxcbiAgICBjb2xvcjogY3lhbjtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG4udG1fc29sdXRpb25EaXYgdHI6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2UgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLnRtX3NvbHV0aW9uRGl2IHRyOmxhc3QtY2hpbGQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50bV9CYWNrc3BhY2Uge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbn1cXHJcXG4udG1fQmFja3NwYWNlOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiAnXFxcXDAwM0N4JztcXHJcXG59XFxyXFxuLnRtX0tleUdvRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi50bV9LZXlHbyB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxufVxcclxcbi50bV9sYXN0YnV0dG9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG4udG1fcXVpdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG4udG1fdmFsaWR3b3Jkc2RpdiB7XFxyXFxuICAgIHdpZHRoOiAzNzBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG4udG1fdmFsaWR3b3Jkc2RpdiBwIHtcXHJcXG4gICAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgZmxleC1iYXNpczogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG59XFxyXFxuLnRtX3ZhbGlkd29yZHNkaXYgcDo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogJzw8PCAnO1xcclxcbn1cXHJcXG4udG1fdmFsaWR3b3Jkc2RpdiBwOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICcgPj4+JztcXHJcXG59XFxyXFxuLnRtX3ZhbGlkd29yZHNkaXYgc3BhbiB7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwIDAgM3B4ICNGRjAwMDAsIDAgMCA1cHggIzAwMDBGRjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnRtX2NvbmdyYXRzIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiBhcXVhO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcbi50bV9oaW50c2hlYWRlciB7XFxyXFxuICAgIGJvcmRlci10b3A6IDhweCBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkO1xcclxcbiAgICB3aWR0aDogMzcwcHg7XFxyXFxuICAgIGhlaWdodDogNThweDtcXHJcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50b29sdGlwIHtcXHJcXG4gIHBvc2l0aW9uOiB0b3A7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICB3aWR0aDogMTIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxuXFxyXFxuICAvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCAqL1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGJvdHRvbTogMTAwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtNjAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG59XFxyXFxuLmluc2VydENvdW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcbi5pbnNlcnRDb3VudFNwYWNlciB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuLnN3YXBDb3VudCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXHJcXG4gIGNvbG9yOiBkYXJrYmx1ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkIGRhcmtncmF5O1xcclxcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgZGFya2dyYXk7ICovXFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5hbmFncmFtQ291bnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xcclxcbiAgY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBzbGF0ZWdyYXk7XFxyXFxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCBzbGF0ZWdyYXk7XFxyXFxufVxcclxcbi5kcm9wUm93IHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA1cHg7XFxyXFxufVxcclxcbi5kcm9wSW5kaWNhdG9yIHtcXHJcXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMnB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDJweDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbn1cXHJcXG4uYmFsbG9vbnN0cmluZyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTsgIFxcclxcbn1cXHJcXG4uY2xvc2VtZSB7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbn1cXHJcXG4uY2xvc2VtZWJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJjc3NQYWdlQkcpO1xcclxcbn1cXHJcXG4uY2xvc2VtZWJ1dHRvbjo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICdcXFxcMjJBMCc7IC8qIFggaW4gYSBib3ggKi9cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3BhZ2VzL3dpL3dvcmRpbmZvLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjOztFQUVkLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CO3FDQUNtQztFQUNuQyxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0NBQXdCO1VBQXhCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7RUFDVixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLGdCQUFnQixFQUFFLGVBQWU7QUFDbkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRvb2x0aXAge1xcclxcbiAgcG9zaXRpb246IHRvcDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIHdpZHRoOiAxMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBwYWRkaW5nOiA1cHggMDtcXHJcXG5cXHJcXG4gIC8qIFBvc2l0aW9uIHRoZSB0b29sdGlwICovXFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgYm90dG9tOiAxMDAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IC02MCU7XFxyXFxufVxcclxcblxcclxcbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XFxyXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbn1cXHJcXG4uaW5zZXJ0Q291bnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuLmluc2VydENvdW50U3BhY2VyIHtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG4uc3dhcENvdW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcclxcbiAgY29sb3I6IGRhcmtibHVlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gIC8qIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZGFya2dyYXk7XFxyXFxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCBkYXJrZ3JheTsgKi9cXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmFuYWdyYW1Db3VudCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyYXk7XFxyXFxuICBjb2xvcjogbGlnaHRncmVlbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHNsYXRlZ3JheTtcXHJcXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHNsYXRlZ3JheTtcXHJcXG59XFxyXFxuLmRyb3BSb3cge1xcclxcbiAgbGluZS1oZWlnaHQ6IDVweDtcXHJcXG59XFxyXFxuLmRyb3BJbmRpY2F0b3Ige1xcclxcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAycHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcclxcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxufVxcclxcbi5iYWxsb29uc3RyaW5nIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7ICBcXHJcXG59XFxyXFxuLmNsb3NlbWUge1xcclxcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG59XFxyXFxuLmNsb3NlbWVidXR0b24ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyY3NzUGFnZUJHKTtcXHJcXG59XFxyXFxuLmNsb3NlbWVidXR0b246OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiAnXFxcXDIyQTAnOyAvKiBYIGluIGEgYm94ICovXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIud21fbGVuRGl2IHtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLndtX2xlblNlbGVjdGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcXHJcXG59XFxyXFxuLndtX2xlblNlbGVjdGVkOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuLndtX2xlblVuc2VsZWN0ZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xcclxcbn1cXHJcXG4ud21fbGVuVW5zZWxlY3RlZDpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbi53bV9zdGFydFB1enpsZURpdiB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLk91dGVydGFibGUge1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxufVxcclxcbi5BbGlnbkNlbnRlciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLkFsaWduTGVmdCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcbi53bWxpbmsge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrbWFnZW50YTtcXHJcXG4gICAgY29sb3I6Y3lhbjtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuLndtYnV0dG9uIHtcXHJcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3YzAyNTtcXHJcXG4gICAgY29sb3I6YXp1cmU7XFxyXFxufVxcclxcbi53bXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjhlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBjb2xvcjpkYXJrbWFnZW50YTtcXHJcXG59XFxyXFxuLndtaDEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcclxcbiAgICBjb2xvcjphenVyZTtcXHJcXG59XFxyXFxuLndtaDIge1xcclxcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxuICAgIGNvbG9yOmF6dXJlO1xcclxcbn1cXHJcXG4ud21oMyB7XFxyXFxuICAgIGNvbG9yOmF6dXJlO1xcclxcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxufVxcclxcbi53bXRoIHtcXHJcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBncm9vdmU7XFxyXFxufVxcclxcbi53bXRkIHtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcXHJcXG4gICAgY29sb3I6YXp1cmU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG59XFxyXFxuLndtcCB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi53bWxhYmVsIHtcXHJcXG4gICAgY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuLndtRWFzeU1vZGVMZXR0ZXIge1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxufVxcclxcbi53bUVhc3lNb2RlTGV0dGVyLnNtYWxsIHtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG59XFxyXFxuLndtRWFzeU1vZGVMZXR0ZXIubm9ybWFsIHtcXHJcXG4gICAgd2lkdGg6IDQ1cHg7XFxyXFxuICAgIGhlaWdodDogNDVweDtcXHJcXG59XFxyXFxuLndtQ29ycmVjdExldHRlckNvcnJlY3RQb3NpdGlvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcclxcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLndtQ29ycmVjdExldHRlcldyb25nUG9zaXRpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xcclxcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLndtV3JvbmdMZXR0ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi53bVdvcmRVbmRlcktleWJvYXJkIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi53bUd1ZXNzSW5mb0RpdiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBwYWRkaW5nOiAycHggM3B4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vcGFnZXMvd20vbWFzdGVybWluZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsV0FBVztBQUNmO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDhDQUE4QztBQUNsRDtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksOENBQThDO0lBQzlDLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSw4Q0FBOEM7SUFDOUMsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGVBQWU7SUFDZix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi53bV9sZW5EaXYge1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4ud21fbGVuU2VsZWN0ZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xcclxcbn1cXHJcXG4ud21fbGVuU2VsZWN0ZWQ6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG4ud21fbGVuVW5zZWxlY3RlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XFxyXFxufVxcclxcbi53bV9sZW5VbnNlbGVjdGVkOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuLndtX3N0YXJ0UHV6emxlRGl2IHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGN5YW47XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uT3V0ZXJ0YWJsZSB7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG59XFxyXFxuLkFsaWduQ2VudGVyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uQWxpZ25MZWZ0IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuLndtbGluayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmttYWdlbnRhO1xcclxcbiAgICBjb2xvcjpjeWFuO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG4ud21idXR0b24ge1xcclxcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdjMDI1O1xcclxcbiAgICBjb2xvcjphenVyZTtcXHJcXG59XFxyXFxuLndtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDIuOGVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGNvbG9yOmRhcmttYWdlbnRhO1xcclxcbn1cXHJcXG4ud21oMSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxyXFxuICAgIGNvbG9yOmF6dXJlO1xcclxcbn1cXHJcXG4ud21oMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG4gICAgY29sb3I6YXp1cmU7XFxyXFxufVxcclxcbi53bWgzIHtcXHJcXG4gICAgY29sb3I6YXp1cmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG59XFxyXFxuLndtdGgge1xcclxcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcclxcbiAgICBib3JkZXItc3R5bGU6IGdyb292ZTtcXHJcXG59XFxyXFxuLndtdGQge1xcclxcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xcclxcbiAgICBjb2xvcjphenVyZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbn1cXHJcXG4ud21wIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLndtbGFiZWwge1xcclxcbiAgICBjb2xvcjogbGlnaHRncmVlbjtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcbn1cXHJcXG4ud21FYXN5TW9kZUxldHRlciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG59XFxyXFxuLndtRWFzeU1vZGVMZXR0ZXIuc21hbGwge1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG4ud21FYXN5TW9kZUxldHRlci5ub3JtYWwge1xcclxcbiAgICB3aWR0aDogNDVweDtcXHJcXG4gICAgaGVpZ2h0OiA0NXB4O1xcclxcbn1cXHJcXG4ud21Db3JyZWN0TGV0dGVyQ29ycmVjdFBvc2l0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxyXFxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4ud21Db3JyZWN0TGV0dGVyV3JvbmdQb3NpdGlvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxyXFxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4ud21Xcm9uZ0xldHRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLndtV29yZFVuZGVyS2V5Ym9hcmQge1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLndtR3Vlc3NJbmZvRGl2IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgcGFkZGluZzogMnB4IDNweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL3B1YmxpYy9Nb3JwaG9DYXRlcnBpbGxhci5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi4vcHVibGljL01vcnBob0NvY29vbi5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyBmcm9tIFwiLi4vcHVibGljL01vcnBob0J1dHRlcmZseS5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyBmcm9tIFwiLi4vcHVibGljL3RyYW5zbW9ncmlmeS5qcGdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92MS9BLmpwZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0IuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjEvQy5qcGdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92MS9ELmpwZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0UuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjEvRi5qcGdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjEvRy5qcGdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTFfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjEvSC5qcGdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTJfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjEvSS5qcGdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTNfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjEvSi5qcGdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTRfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjEvSy5qcGdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTVfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjEvTC5qcGdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTZfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjEvTS5qcGdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTdfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjEvTi5qcGdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMThfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjEvTy5qcGdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTlfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjEvUC5qcGdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjBfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjEvUS5qcGdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjFfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjEvUi5qcGdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjJfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjEvUy5qcGdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjNfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjEvVC5qcGdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjRfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjEvVS5qcGdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjVfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjEvVi5qcGdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjZfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjEvVy5qcGdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjdfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjEvWC5qcGdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjhfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjEvWS5qcGdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjlfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjEvWi5qcGdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzBfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjEvYmFja3NwYWNlLmpwZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMV9fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92My9BLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMl9fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92My9CLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zM19fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92My9DLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zNF9fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92My9ELnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zNV9fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92My9FLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zNl9fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92My9GLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zN19fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92My9HLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zOF9fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92My9ILnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zOV9fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92My9JLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80MF9fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92My9KLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80MV9fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92My9LLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80Ml9fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92My9MLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80M19fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92My9NLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80NF9fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92My9OLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80NV9fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92My9PLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80Nl9fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92My9QLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80N19fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92My9RLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80OF9fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92My9SLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80OV9fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92My9TLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81MF9fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92My9ULnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81MV9fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92My9VLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81Ml9fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92My9WLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81M19fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92My9XLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81NF9fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92My9YLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81NV9fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92My9ZLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81Nl9fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92My9aLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81N19fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92My9CYWNrc3BhY2UucG5nXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE0X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE1X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE2X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE3X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE4X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMThfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE5X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIxX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI0X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI1X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI2X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI3X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI4X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI5X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMxX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM0X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM1X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM2X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM3X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM4X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM5X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQxX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQ0X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQ1X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQ2X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQ3X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQ4X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQ5X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzUwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzUxX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzUyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzUzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzU0X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzU1X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzU2X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzU3X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTdfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDQwNDA7XFxuICBjb2xvcjogYnVybHl3b29kO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIC8qIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbixcXG4gICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7ICovXFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbioge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4ubXlIZWFkaW5nRm9udCB7IC8qIHBiICovXFxuICBmb250LWZhbWlseTogdmFyKC0tY29tbW9uSGVhZGVyRm9udEZhbWlseSk7XFxufVxcbi5teUNvbW1vbkZvbnQgeyAvKiBwYiAqL1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkZvbnRGYW1pbHkpO1xcbn1cXG4ubXltYXRlcmlhbGljb24ge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLm15bWF0ZXJpYWxpY29uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB9XFxuLmZpdmVweGRpdmlkZXIgeyAvKiBmeWIgKi9cXG4gIGxpbmUtaGVpZ2h0OiA1cHg7XFxufVxcbi5mbG9hdHJpZ2h0IHtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuLnRleHRjZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udGV4dHJpZ2h0IHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4uYWxpZ250b3Age1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLmVxdWlzcGFjZWQge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG59XFxuLmRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuNjtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcXG59XFxuLyogUnVsZXMgZm9yIHVzaW5nIGljb25zIGFzIHdoaXRlIG9uIGEgZGFyayBiYWNrZ3JvdW5kLiAqL1xcbi5tYXRlcmlhbC1pY29ucy5tZC1saWdodCB7IGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpOyB9XFxuLm1hdGVyaWFsLWljb25zLm1kLWxpZ2h0Lm1kLWluYWN0aXZlIHsgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTsgfVxcblxcbi5hcnR3b3JrRGl2IHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IGN5YW47XFxuICB3aWR0aDogMzcwcHg7XFxufVxcbi5hcnR3b3JrRGl2IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubW92ZUxlZnRCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gIGNvbG9yOiBjeWFuO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcbi5tb3ZlUmlnaHRCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gIGNvbG9yOiBjeWFuO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcbi5hcnR3b3JrMSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDI4MHB4O1xcbiAgd2lkdGg6IDM3MHB4O1xcbn1cXG4uYXJ0d29yazIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAzNzBweDtcXG4gIHdpZHRoOiAzNzBweDtcXG59XFxuLmFydHdvcmszIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMzUwcHg7XFxuICB3aWR0aDogMzcwcHg7XFxufVxcbi5hcnR3b3JrNCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDIyNXB4O1xcbiAgd2lkdGg6IDM3MHB4O1xcbn1cXG4vKiBDdXN0b20ga2V5Ym9hcmRzICovXFxuLnN3aXRjaGtiIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLyogVmVyc2lvbiAxICovXFxuLmN1c3RvbUtleWJvYXJkVjEge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHggMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgd2lkdGg6IDM3MHB4O1xcbn1cXG4uY2t2MVJvdzEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi5ja3YxUm93MiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uY2t2MVJvdzMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLmN1c3RvbUtleWJvYXJkVjEgc3BhbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDBweCAxcHg7XFxuICBwYWRkaW5nOiA1cHggOHB4O1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuLmNrdjEge1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbn1cXG4uY2t2MS5BIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7IFxcbn1cXG4uY2t2MS5CIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIik7IFxcbn1cXG4uY2t2MS5DIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIik7IFxcbn1cXG4uY2t2MS5EIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gKyBcIik7IFxcbn1cXG4uY2t2MS5FIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gKyBcIik7IFxcbn1cXG4uY2t2MS5GIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX18gKyBcIik7IFxcbn1cXG4uY2t2MS5HIHsgXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyArIFwiKTsgXFxufVxcbi5ja3YxLkgge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX18gKyBcIik7XFxufVxcbi5ja3YxLkkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTJfX18gKyBcIik7XFxufVxcbi5ja3YxLkoge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTNfX18gKyBcIik7XFxufVxcbi5ja3YxLksge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTRfX18gKyBcIik7XFxufVxcbi5ja3YxLkwge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTVfX18gKyBcIik7XFxufVxcbi5ja3YxLk0ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTZfX18gKyBcIik7IFxcbn1cXG4uY2t2MS5OIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE3X19fICsgXCIpOyBcXG59XFxuLmNrdjEuTyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOF9fXyArIFwiKTsgXFxufVxcbi5ja3YxLlAge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTlfX18gKyBcIik7IFxcbn1cXG4uY2t2MS5RIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIwX19fICsgXCIpO1xcbn1cXG4uY2t2MS5SIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIxX19fICsgXCIpO1xcbn1cXG4uY2t2MS5TIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIyX19fICsgXCIpO1xcbn1cXG4uY2t2MS5UIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIzX19fICsgXCIpO1xcbn1cXG4uY2t2MS5VIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI0X19fICsgXCIpO1xcbn1cXG4uY2t2MS5WIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI1X19fICsgXCIpO1xcbn1cXG4uY2t2MS5XIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI2X19fICsgXCIpO1xcbn1cXG4uY2t2MS5YIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI3X19fICsgXCIpO1xcbn1cXG4uY2t2MS5ZIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI4X19fICsgXCIpO1xcbn1cXG4uY2t2MS5aIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI5X19fICsgXCIpO1xcbn1cXG4uY2t2MS5CYWNrc3BhY2Uge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzBfX18gKyBcIik7XFxufVxcbi5ja3YxV29yZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi8qIFZlcnNpb24gMiAqL1xcbi5jdXN0b21LZXlib2FyZFYyIHtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmNzc1BhZ2VCRyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgd2lkdGg6IDM3MHB4O1xcbn1cXG4uY2t2MlJvdzEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLmNrdjJSb3cyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uY2t2MlJvdzMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5jdXN0b21LZXlib2FyZFYyIHNwYW4ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMHB4IDJweDtcXG4gICAgcGFkZGluZzogNXB4IDhweDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuLyogVmVyc2lvbiAzICovXFxuLmN1c3RvbUtleWJvYXJkVjMge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHggMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgd2lkdGg6IDM3MHB4O1xcbn1cXG4uY2t2M1JvdzEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi5ja3YzUm93MiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uY2t2M1JvdzMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLmN1c3RvbUtleWJvYXJkVjMgc3BhbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDBweCAxcHg7XFxuICBwYWRkaW5nOiA1cHggOHB4O1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuLmNrdjMge1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbn1cXG4uY2t2My5BIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMxX19fICsgXCIpOyBcXG59XFxuLmNrdjMuQiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMl9fXyArIFwiKTsgXFxufVxcbi5ja3YzLkMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzNfX18gKyBcIik7IFxcbn1cXG4uY2t2My5EIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM0X19fICsgXCIpOyBcXG59XFxuLmNrdjMuRSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zNV9fXyArIFwiKTsgXFxufVxcbi5ja3YzLkYge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzZfX18gKyBcIik7IFxcbn1cXG4uY2t2My5HIHsgXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zN19fXyArIFwiKTsgXFxufVxcbi5ja3YzLkgge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzhfX18gKyBcIik7XFxufVxcbi5ja3YzLkkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzlfX18gKyBcIik7XFxufVxcbi5ja3YzLkoge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDBfX18gKyBcIik7XFxufVxcbi5ja3YzLksge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDFfX18gKyBcIik7XFxufVxcbi5ja3YzLkwge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDJfX18gKyBcIik7XFxufVxcbi5ja3YzLk0ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDNfX18gKyBcIik7IFxcbn1cXG4uY2t2My5OIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQ0X19fICsgXCIpOyBcXG59XFxuLmNrdjMuTyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80NV9fXyArIFwiKTsgXFxufVxcbi5ja3YzLlAge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDZfX18gKyBcIik7IFxcbn1cXG4uY2t2My5RIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQ3X19fICsgXCIpO1xcbn1cXG4uY2t2My5SIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQ4X19fICsgXCIpO1xcbn1cXG4uY2t2My5TIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQ5X19fICsgXCIpO1xcbn1cXG4uY2t2My5UIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzUwX19fICsgXCIpO1xcbn1cXG4uY2t2My5VIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzUxX19fICsgXCIpO1xcbn1cXG4uY2t2My5WIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzUyX19fICsgXCIpO1xcbn1cXG4uY2t2My5XIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzUzX19fICsgXCIpO1xcbn1cXG4uY2t2My5YIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzU0X19fICsgXCIpO1xcbn1cXG4uY2t2My5ZIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzU1X19fICsgXCIpO1xcbn1cXG4uY2t2My5aIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzU2X19fICsgXCIpO1xcbn1cXG4uY2t2My5CYWNrc3BhY2Uge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNTdfX18gKyBcIik7XFxufVxcbi5ja3YzV29yZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvZ2xvYmFscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztFQUNUOzJFQUN5RTtBQUMzRTs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw4QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCO0FBQ0Es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QUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsMERBQXFEO0FBQ3ZEO0FBQ0E7RUFDRSwwREFBcUQ7QUFDdkQ7QUFDQTtFQUNFLDBEQUFxRDtBQUN2RDtBQUNBO0VBQ0UsMERBQXFEO0FBQ3ZEO0FBQ0E7RUFDRSwwREFBcUQ7QUFDdkQ7QUFDQTtFQUNFLDBEQUFxRDtBQUN2RDtBQUNBO0VBQ0UsMERBQXFEO0FBQ3ZEO0FBQ0E7RUFDRSwwREFBcUQ7QUFDdkQ7QUFDQTtFQUNFLDBEQUFxRDtBQUN2RDtBQUNBO0VBQ0UsMERBQXFEO0FBQ3ZEO0FBQ0E7RUFDRSwwREFBcUQ7QUFDdkQ7QUFDQTtFQUNFLDBEQUFxRDtBQUN2RDtBQUNBO0VBQ0UsMERBQXFEO0FBQ3ZEO0FBQ0E7RUFDRSwwREFBcUQ7QUFDdkQ7QUFDQTtFQUNFLDBEQUFxRDtBQUN2RDtBQUNBO0VBQ0UsMERBQXFEO0FBQ3ZEO0FBQ0E7RUFDRSwwREFBcUQ7QUFDdkQ7QUFDQTtFQUNFLDBEQUFxRDtBQUN2RDtBQUNBO0VBQ0UsMERBQXFEO0FBQ3ZEO0FBQ0E7RUFDRSwwREFBcUQ7QUFDdkQ7QUFDQTtFQUNFLDBEQUFxRDtBQUN2RDtBQUNBO0VBQ0UsMERBQXFEO0FBQ3ZEO0FBQ0E7RUFDRSwwREFBcUQ7QUFDdkQ7QUFDQTtFQUNFLDBEQUFxRDtBQUN2RDtBQUNBO0VBQ0UsMERBQXFEO0FBQ3ZEO0FBQ0E7RUFDRSwwREFBcUQ7QUFDdkQ7QUFDQTtFQUNFLDBEQUE2RDtBQUMvRDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDA0MDtcXG4gIGNvbG9yOiBidXJseXdvb2Q7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgLyogZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLFxcbiAgICBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjsgKi9cXG59XFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4ubXlIZWFkaW5nRm9udCB7IC8qIHBiICovXFxuICBmb250LWZhbWlseTogdmFyKC0tY29tbW9uSGVhZGVyRm9udEZhbWlseSk7XFxufVxcbi5teUNvbW1vbkZvbnQgeyAvKiBwYiAqL1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkZvbnRGYW1pbHkpO1xcbn1cXG4ubXltYXRlcmlhbGljb24ge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLm15bWF0ZXJpYWxpY29uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB9XFxuLmZpdmVweGRpdmlkZXIgeyAvKiBmeWIgKi9cXG4gIGxpbmUtaGVpZ2h0OiA1cHg7XFxufVxcbi5mbG9hdHJpZ2h0IHtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuLnRleHRjZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udGV4dHJpZ2h0IHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4uYWxpZ250b3Age1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLmVxdWlzcGFjZWQge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG59XFxuLmRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuNjtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcXG59XFxuLyogUnVsZXMgZm9yIHVzaW5nIGljb25zIGFzIHdoaXRlIG9uIGEgZGFyayBiYWNrZ3JvdW5kLiAqL1xcbi5tYXRlcmlhbC1pY29ucy5tZC1saWdodCB7IGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpOyB9XFxuLm1hdGVyaWFsLWljb25zLm1kLWxpZ2h0Lm1kLWluYWN0aXZlIHsgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTsgfVxcblxcbi5hcnR3b3JrRGl2IHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IGN5YW47XFxuICB3aWR0aDogMzcwcHg7XFxufVxcbi5hcnR3b3JrRGl2IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubW92ZUxlZnRCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gIGNvbG9yOiBjeWFuO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcbi5tb3ZlUmlnaHRCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gIGNvbG9yOiBjeWFuO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcbi5hcnR3b3JrMSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9Nb3JwaG9DYXRlcnBpbGxhci5wbmcnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAyODBweDtcXG4gIHdpZHRoOiAzNzBweDtcXG59XFxuLmFydHdvcmsyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL01vcnBob0NvY29vbi5wbmcnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAzNzBweDtcXG4gIHdpZHRoOiAzNzBweDtcXG59XFxuLmFydHdvcmszIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL01vcnBob0J1dHRlcmZseS5wbmcnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIHdpZHRoOiAzNzBweDtcXG59XFxuLmFydHdvcms0IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL3RyYW5zbW9ncmlmeS5qcGcnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAyMjVweDtcXG4gIHdpZHRoOiAzNzBweDtcXG59XFxuLyogQ3VzdG9tIGtleWJvYXJkcyAqL1xcbi5zd2l0Y2hrYiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi8qIFZlcnNpb24gMSAqL1xcbi5jdXN0b21LZXlib2FyZFYxIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gIHdpZHRoOiAzNzBweDtcXG59XFxuLmNrdjFSb3cxIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4uY2t2MVJvdzIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLmNrdjFSb3czIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5jdXN0b21LZXlib2FyZFYxIHNwYW4ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwcHggMXB4O1xcbiAgcGFkZGluZzogNXB4IDhweDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbi5ja3YxIHtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG59XFxuLmNrdjEuQSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjEvQS5qcGcnKTsgXFxufVxcbi5ja3YxLkIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0IuanBnJyk7IFxcbn1cXG4uY2t2MS5DIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92MS9DLmpwZycpOyBcXG59XFxuLmNrdjEuRCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjEvRC5qcGcnKTsgXFxufVxcbi5ja3YxLkUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0UuanBnJyk7IFxcbn1cXG4uY2t2MS5GIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92MS9GLmpwZycpOyBcXG59XFxuLmNrdjEuRyB7IFxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0cuanBnJyk7IFxcbn1cXG4uY2t2MS5IIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92MS9ILmpwZycpO1xcbn1cXG4uY2t2MS5JIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92MS9JLmpwZycpO1xcbn1cXG4uY2t2MS5KIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92MS9KLmpwZycpO1xcbn1cXG4uY2t2MS5LIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92MS9LLmpwZycpO1xcbn1cXG4uY2t2MS5MIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92MS9MLmpwZycpO1xcbn1cXG4uY2t2MS5NIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92MS9NLmpwZycpOyBcXG59XFxuLmNrdjEuTiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjEvTi5qcGcnKTsgXFxufVxcbi5ja3YxLk8ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL08uanBnJyk7IFxcbn1cXG4uY2t2MS5QIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92MS9QLmpwZycpOyBcXG59XFxuLmNrdjEuUSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjEvUS5qcGcnKTtcXG59XFxuLmNrdjEuUiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjEvUi5qcGcnKTtcXG59XFxuLmNrdjEuUyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjEvUy5qcGcnKTtcXG59XFxuLmNrdjEuVCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjEvVC5qcGcnKTtcXG59XFxuLmNrdjEuVSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjEvVS5qcGcnKTtcXG59XFxuLmNrdjEuViB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjEvVi5qcGcnKTtcXG59XFxuLmNrdjEuVyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjEvVy5qcGcnKTtcXG59XFxuLmNrdjEuWCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjEvWC5qcGcnKTtcXG59XFxuLmNrdjEuWSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjEvWS5qcGcnKTtcXG59XFxuLmNrdjEuWiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjEvWi5qcGcnKTtcXG59XFxuLmNrdjEuQmFja3NwYWNlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92MS9iYWNrc3BhY2UuanBnJyk7XFxufVxcbi5ja3YxV29yZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi8qIFZlcnNpb24gMiAqL1xcbi5jdXN0b21LZXlib2FyZFYyIHtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmNzc1BhZ2VCRyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgd2lkdGg6IDM3MHB4O1xcbn1cXG4uY2t2MlJvdzEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLmNrdjJSb3cyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uY2t2MlJvdzMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5jdXN0b21LZXlib2FyZFYyIHNwYW4ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMHB4IDJweDtcXG4gICAgcGFkZGluZzogNXB4IDhweDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuLyogVmVyc2lvbiAzICovXFxuLmN1c3RvbUtleWJvYXJkVjMge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHggMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgd2lkdGg6IDM3MHB4O1xcbn1cXG4uY2t2M1JvdzEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi5ja3YzUm93MiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uY2t2M1JvdzMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLmN1c3RvbUtleWJvYXJkVjMgc3BhbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDBweCAxcHg7XFxuICBwYWRkaW5nOiA1cHggOHB4O1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuLmNrdjMge1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbn1cXG4uY2t2My5BIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92My9BLnBuZycpOyBcXG59XFxuLmNrdjMuQiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjMvQi5wbmcnKTsgXFxufVxcbi5ja3YzLkMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YzL0MucG5nJyk7IFxcbn1cXG4uY2t2My5EIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92My9ELnBuZycpOyBcXG59XFxuLmNrdjMuRSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjMvRS5wbmcnKTsgXFxufVxcbi5ja3YzLkYge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YzL0YucG5nJyk7IFxcbn1cXG4uY2t2My5HIHsgXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjMvRy5wbmcnKTsgXFxufVxcbi5ja3YzLkgge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YzL0gucG5nJyk7XFxufVxcbi5ja3YzLkkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YzL0kucG5nJyk7XFxufVxcbi5ja3YzLkoge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YzL0oucG5nJyk7XFxufVxcbi5ja3YzLksge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YzL0sucG5nJyk7XFxufVxcbi5ja3YzLkwge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YzL0wucG5nJyk7XFxufVxcbi5ja3YzLk0ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YzL00ucG5nJyk7IFxcbn1cXG4uY2t2My5OIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92My9OLnBuZycpOyBcXG59XFxuLmNrdjMuTyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjMvTy5wbmcnKTsgXFxufVxcbi5ja3YzLlAge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YzL1AucG5nJyk7IFxcbn1cXG4uY2t2My5RIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92My9RLnBuZycpO1xcbn1cXG4uY2t2My5SIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92My9SLnBuZycpO1xcbn1cXG4uY2t2My5TIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92My9TLnBuZycpO1xcbn1cXG4uY2t2My5UIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92My9ULnBuZycpO1xcbn1cXG4uY2t2My5VIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92My9VLnBuZycpO1xcbn1cXG4uY2t2My5WIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92My9WLnBuZycpO1xcbn1cXG4uY2t2My5XIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92My9XLnBuZycpO1xcbn1cXG4uY2t2My5YIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92My9YLnBuZycpO1xcbn1cXG4uY2t2My5ZIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92My9ZLnBuZycpO1xcbn1cXG4uY2t2My5aIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92My9aLnBuZycpO1xcbn1cXG4uY2t2My5CYWNrc3BhY2Uge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YzL0JhY2tzcGFjZS5wbmcnKTtcXG59XFxuLmNrdjNXb3JkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9ezkxOmZ1bmN0aW9uKGUpe2UuZXhwb3J0cz1mdW5jdGlvbihlLHIpe2lmKCFyKXtyPXt9fWU9ZSYmZS5fX2VzTW9kdWxlP2UuZGVmYXVsdDplO2lmKHR5cGVvZiBlIT09XCJzdHJpbmdcIil7cmV0dXJuIGV9aWYoL15bJ1wiXS4qWydcIl0kLy50ZXN0KGUpKXtlPWUuc2xpY2UoMSwtMSl9aWYoci5oYXNoKXtlKz1yLmhhc2h9aWYoL1tcIicoKSBcXHRcXG5dLy50ZXN0KGUpfHxyLm5lZWRRdW90ZXMpe3JldHVybidcIicuY29uY2F0KGUucmVwbGFjZSgvXCIvZywnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csXCJcXFxcblwiKSwnXCInKX1yZXR1cm4gZX19fTt2YXIgcj17fTtmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKHQpe2lmKHJbdF0pe3JldHVybiByW3RdLmV4cG9ydHN9dmFyIF89clt0XT17ZXhwb3J0czp7fX07dmFyIG49dHJ1ZTt0cnl7ZVt0XShfLF8uZXhwb3J0cyxfX25jY3dwY2tfcmVxdWlyZV9fKTtuPWZhbHNlfWZpbmFsbHl7aWYobilkZWxldGUgclt0XX1yZXR1cm4gXy5leHBvcnRzfV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3JldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDkxKX0oKTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL0JhcmJlZFdpcmUuOGU3YzJhNjZiNmQ2MDFkYzFkYmIzODkxZTc5Y2Y2YzMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9CYXJiZWRXaXJlUm90YXRlZC42NjQ3M2ZjZDQ4YmFmODBkOGM5MzczMDEyMGJhMTAyMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL0EuMDY1OWE0NGQzMWM5NGRhMjJmNzliYjIxNWE0ODg5ZjAuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9CLjJjMzNiMTM3MWE4NTdjYjI0MDhlYTRmOTVlN2U2MGI2LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvQy45YmI5MGJiOGZjM2MwMTE5M2QxODMwMjQ2NWIzZTI0YS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL0QuYzBhMzY2NjA4ODg1MDg2NGI5MTAzNDg0MTNkNmM1NGQuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9FLjU2MTliNDlmZDViMjVkOWFhMjNlMDgwMTFhMzRmMDc1LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvRi5mYzg4NWU5NmJkMWVkZjYxOTY1MDEyOTUwYmE2YzMyNy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL0cuOGFhMzMwMGU1ODRkZGY1MmU1MDcwN2FlOGZhNzVhOTguanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9ILmYzYzliMWU4OTU0ZmNhMGZlODdmNzNmYWE0Mzg5M2QwLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvSS5jNjk2YzZjZTg5ODg1MzU4NzlhOTQ5Y2Y3YTk5M2E5Ni5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL0ouZTE4Y2JhNWQ3ZTRhZjU3NzBjNDZmODNkZTk2ZGNlMTUuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9LLjcxOTMzNzEyMjYyZDc2MzU2M2E1OTBkMDQ3YWFjYmM4LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvTC44N2ViZGNiNmYzNjk3NTgwZDk3MjQ2ZjdmNDE1ZGM4Yy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL00uNmM3OWNlM2MzODhhZDE2YzkxYThlOWJjNjFhNGQwNDAuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9OLmM1MzZmOTA2NWU1ZTMwMGQxZDZlODYwMzFlOTE3ODQ2LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvTy5lM2MyNThjMTFkNzEwNGYwMTRmYmJjZjQwNmM5Yjg4NS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL1AuZDc4MzkxYjI5MTlkNGRhNDA2ODUwZTUzNmIzMjA1ZWMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9RLjc4MGQ0NWRiZjQzMWIwNzZiMDdjMmMzNzBjNzAwOGFjLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvUi5iMTJmZTMxNTI5Y2M1OWQyMjU1YWE2M2RlYmQ4MmJhZS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL1MuM2RkZjMyY2YyYzNjMmVhNzIzNzBkN2YyNTI4ZDAwZTUuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9ULjNlOTFiNTcwNTM1ZWNiOWIwNmVmN2JlODcxNDEzYTkzLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvVS44Y2IwZTMxNjRjNmNiNGU2MTNhMzI2YWU0ZjE1ZmRjYy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL1YuZmFmNGEyY2M2MTMyYjdkNzRhZWRlYmNiYzhkN2ViNGMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9XLmU3ZTM5NTk2NmFhNTFkNWI4MjcxNzljNGI3MmZjM2IyLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvWC5iNTA2YTU5NjU2MGM2MzE0N2MzY2VkZGViNWExYmNjMC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL1kuZjk4M2Q3NjZmMzY5ODI0OTc0ODgxMDA3ODNmMDBjNGEuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9aLmU4YjkzNmU5ZThjYjQxMjViM2Q0NmRjMmI3ZmYxMGU1LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvYmFja3NwYWNlLjg0NDk2ZmYwYWUxYjFjNjEwYjYzMmU0ZDgwZjE3YmFjLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvQS4yOWE4NWIyZDlkOTgwOTA2NGFkYWJmYWQxZjJjNDhjMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL0IuNzM5ZjY2Yzc1ODFkMWUyNjI5OTI3YjIyMzE0Y2I0NWYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9CYWNrc3BhY2UuMDgxNWFmYWUwMzg3ZjFlZjUxYjczM2MwYWNiOGUzMDIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9DLjcxOGI1Mzc5OTliNWM4YmM1YzE4ZmE4MmM1MmYwZjgwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvRC43MmM5NDJlZjFkOGQ2YzUwMjRmMTRmZGUyZGZiYWMxZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL0UuNjNmN2Q1ZTQyZDU1NjQ5MGEyMTJiYzkwNTBlZmU2MTMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9GLjZkOTQyZmRjYjYwMDI5YWU0YmFiMzY0NzRlODNjYjBlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvRy5hOWM3NDkxYjQ1NjBlYTI5OWM4M2E5MDgwNjcwMzM3NC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL0guN2ZmOGYyMjM0ZmFhMzNiNmZkOGY1ZDBmODkzZmFiZmMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9JLjU4OGRlODQ2YWQyYTM0ODc2NDU2MzJlNmZjOWE3ZjY1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvSi42MDViNmExOTE2MjUyMmEwMGE0Y2M2MWM5MDNlNmU1ZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL0suZmJkMmExZDFmNjZlYjMwYTYxOTMzNjY3OTRmZWEyMDQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9MLjM3ZTkzMTUzNDNhYTRkN2I4NmQxODBlOGU2Yjc3ZDA0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvTS5hYWRhNzY0ZTQ3NjU5ZTY0YzhhYjhmYjVhYTg2ODM3MS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL04uMTc3MTUxMjk4MzVmOWUzMGJkZGU0MDVkYmFjMjAyOWYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9PLjg2MTQ4NWE3Yzg5MDM2ODY1MWE3NWZjYTdlZjE0N2NiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvUC40NDI1NmQxMDNkOTc0ODZmNTQ5NzZjYjJmNmU2NzBiNy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL1EuY2E3Nzc4NjM3Mzk4ZjJlYWE4YzZjZDU5YmMwNTQzNDEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9SLjNhNjE0OGVmNzExNzFkZDE0MjYyYTI4MDYyNjMzYzI2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvUy43MDdlMDRiMmE2MjE5NGNkMjNjYjhmYmI5ZDExYTI2ZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL1QuYjdlMWFmZWYzZWNjYzQyOTllM2VjOTZkYTExM2RmNWUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9VLmFjMGY0Y2ZmOWY2ZDE4YmQ0NWQzZTQ3N2Y5YmI1Zjg3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvVi43NGMzMWRmMWRmMDA2MGM4NmFjMDY2N2M0YTI3N2ZjYS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL1cuZDlmZmJhYzZlODA1NTlkZDA4Y2NjMzA1YmMwNzRmYzgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9YLjg3N2EzOTI4Yjk5NzU2OTI1MWUyMmU2NTQ3YTU5YjZhLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvWS4xYmRlMmYzNmY2NzViZjkwODZhZThlOGE1YzRmZTNhZC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL1ouMmU3MWNmN2IxNmJjNDkzOWRhYmUzYjNkMmYzNWU1YTQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9Nb3JwaG9CdXR0ZXJmbHkuMTE2MTYxYmVmZThkMDY1ZWQwZTY5MDQzZjI4ODNiOTgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9Nb3JwaG9DYXRlcnBpbGxhci5hMThiYjRmZjgwMDdlZjdmM2UzN2ZkYTM2N2IzODI3Yi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL01vcnBob0NvY29vbi4yMWYxMTEzMjNkOGQwMGFhNGUxMWI4Y2NmYTM1ODlmOC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL1dhbGwuNDdhZGQyMGZhOTVmMGJkYWE3ZjM3M2MxN2M2MGY3OTAuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9wbGF5ZXJ0aXRsZS45ZDZiYzk3NzdmMjVmYzdhMmIwODM2MTI3YTI1NDQwMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL3ByaXNvbmJhcnMtc3F1YXJlLjJmOTIwZjBmOTM3NTc5YmFlNTQ5ZDUyYWQyYjA4MjFkLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvdGlsZS44YzAxNzEzNTM2YzBkNzkwZjY1OWJkNWJlM2YzYWNhYy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL3RyYW5zbW9ncmlmeS4yZjZhMDkxYTE0MWQ1NGZkMzk2ZTNkZjJlZjJmNGQ1Yy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZCcpXG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIGV4cG9ydHMuRnJhZ21lbnQgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuXG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH1cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuRnJhZ21lbnQ6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpO1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xudmFyIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSksIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmZjcy9wdWxsLzEwN1xuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqL1xuXG5mdW5jdGlvbiBqc3hERVYodHlwZSwgY29uZmlnLCBtYXliZUtleSwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHZhciBrZXkgPSBudWxsO1xuICAgIHZhciByZWYgPSBudWxsOyAvLyBDdXJyZW50bHksIGtleSBjYW4gYmUgc3ByZWFkIGluIGFzIGEgcHJvcC4gVGhpcyBjYXVzZXMgYSBwb3RlbnRpYWxcbiAgICAvLyBpc3N1ZSBpZiBrZXkgaXMgYWxzbyBleHBsaWNpdGx5IGRlY2xhcmVkIChpZS4gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz5cbiAgICAvLyBvciA8ZGl2IGtleT1cIkhpXCIgey4uLnByb3BzfSAvPiApLiBXZSB3YW50IHRvIGRlcHJlY2F0ZSBrZXkgc3ByZWFkLFxuICAgIC8vIGJ1dCBhcyBhbiBpbnRlcm1lZGlhcnkgc3RlcCwgd2Ugd2lsbCB1c2UganN4REVWIGZvciBldmVyeXRoaW5nIGV4Y2VwdFxuICAgIC8vIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+LCBiZWNhdXNlIHdlIGFyZW4ndCBjdXJyZW50bHkgYWJsZSB0byB0ZWxsIGlmXG4gICAgLy8ga2V5IGlzIGV4cGxpY2l0bHkgZGVjbGFyZWQgdG8gYmUgdW5kZWZpbmVkIG9yIG5vdC5cblxuICAgIGlmIChtYXliZUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBrZXkgPSAnJyArIG1heWJlS2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIHtcbiAgICBpZiAoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICB7XG4gICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmZvO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gICAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gICAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gICAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSk7XG5cbiAgICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICAgIH1cblxuICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgICBpZiAodmFsaWRUeXBlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogU3RhdGljIGNoaWxkcmVuIHNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXkuICcgKyAnWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiAnICsgJ1VzZSB0aGUgQmFiZWwgdHJhbnNmb3JtIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50KSB7XG4gICAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59IC8vIFRoZXNlIHR3byBmdW5jdGlvbnMgZXhpc3QgdG8gc3RpbGwgZ2V0IGNoaWxkIHdhcm5pbmdzIGluIGRldlxuXG52YXIganN4REVWJDEgPSAganN4V2l0aFZhbGlkYXRpb24gO1xuXG5leHBvcnRzLmpzeERFViA9IGpzeERFViQxO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=