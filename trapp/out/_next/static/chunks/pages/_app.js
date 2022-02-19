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
___CSS_LOADER_EXPORT___.push([module.id, ".tm_numMovesDiv {\r\n    padding-bottom: 2px;\r\n    background-color: blue;\r\n    color: whitesmoke;\r\n    text-align: center;\r\n}\r\n.tm_numMovesSelected {\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    margin-right: 2px;\r\n}\r\n.tm_numMovesSelected:focus {\r\n    outline: none;\r\n}\r\n.tm_numMovesUnselected {\r\n    background-color: black;\r\n    color: whitesmoke;\r\n    outline: none;\r\n    margin-right: 2px;\r\n}\r\n.tm_numMovesUnselected:focus {\r\n    outline: none;\r\n}\r\n.tm_startPuzzleDiv {\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    text-align: center;\r\n}\r\n.tm_puzzleDiv {\r\n    text-align: center;\r\n    padding: 5px;\r\n    margin-top: 5px;\r\n    background-color: blue;\r\n    color: whitesmoke;\r\n}\r\n.tm_puzzleDiv span:nth-child(even) {\r\n    background-color: blue;\r\n    padding-right: 10px;\r\n}\r\n.tm_puzzleDiv span:nth-child(1) {\r\n    background-color: green;\r\n    padding: 0px 5px;\r\n    color: whitesmoke;\r\n    text-transform: uppercase;\r\n    text-align: right;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: larger;\r\n    letter-spacing: 1px;\r\n}\r\n.tm_puzzleDiv span:nth-child(2) {\r\n    padding-left: 10px;\r\n}\r\n.tm_puzzleDiv span:nth-child(3) {\r\n    background-color: green;\r\n    padding: 0px 5px;\r\n    color: whitesmoke;\r\n    text-transform: uppercase;\r\n    text-align: right;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: larger;\r\n    letter-spacing: 1px;\r\n}\r\n.tm_puzzleDiv span:nth-child(6) {\r\n    padding-left: 10px;\r\n}\r\n.tm_puzzleDiv p {\r\n    margin-top: 5px;\r\n}\r\n.tm_solutionOuterDiv {\r\n    margin-top: 5px;\r\n}\r\n.tm_solutionDiv {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    align-items: center;\r\n    min-height: 225px;\r\n    min-width: 370px;\r\n}\r\n.tm_solutionDiv table {\r\n    text-align: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    letter-spacing: 1px;\r\n}\r\n.tm_solutionDiv td {\r\n    text-transform: uppercase;\r\n}\r\n.tm_solutionDiv tr:not(:first-child):not(:last-child) {\r\n    color: yellow;\r\n    text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;\r\n    font-weight: bold;\r\n}\r\n.tm_nextword {\r\n    font-size: x-large;\r\n}\r\n.tm_arrow {\r\n    color: cyan;\r\n    text-shadow: none;\r\n    background-color: black;\r\n}\r\n.tm_solutionDiv tr:first-child {\r\n    background-color: green;\r\n    color: whitesmoke !important;\r\n}\r\n.tm_solutionDiv tr:last-child {\r\n    background-color: green;\r\n    color: whitesmoke;\r\n}\r\n\r\n\r\n.tm_Backspace {\r\n    background-color: blue;\r\n}\r\n.tm_Backspace::before {\r\n    content: '\\003Cx';\r\n}\r\n.tm_KeyGoDiv {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.tm_KeyGo {\r\n    border: 1px solid white;\r\n    background-color: blue;\r\n    color: white;\r\n    border-radius: 5px;\r\n    font-size: larger;\r\n}\r\n.tm_lastbuttons {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 5px;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    padding-bottom: 5px;\r\n}\r\n.tm_quit {\r\n    background-color: red;\r\n    color: whitesmoke;\r\n    border: 1px solid white;\r\n}\r\n.tm_congrats {\r\n    margin-top: 5px;\r\n    text-align: center;\r\n    color: aqua;\r\n    font-style: italic;\r\n}\r\n.tm_hintsheader {\r\n    border-top: 8px solid;\r\n    border-bottom: 8px solid;\r\n    width: 370px;\r\n    height: 58px;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    background-color: blue;\r\n    color: whitesmoke;\r\n}\r\n", "",{"version":3,"sources":["webpack://pages/tm/tm.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,sBAAsB;IACtB,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,4BAA4B;IAC5B,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,aAAa;AACjB;AACA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,aAAa;IACb,iBAAiB;AACrB;AACA;IACI,aAAa;AACjB;AACA;IACI,eAAe;IACf,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,sBAAsB;IACtB,iBAAiB;AACrB;AACA;IACI,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,iBAAiB;IACjB,yBAAyB;IACzB,iBAAiB;IACjB,8CAA8C;IAC9C,iBAAiB;IACjB,mBAAmB;AACvB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,iBAAiB;IACjB,yBAAyB;IACzB,iBAAiB;IACjB,8CAA8C;IAC9C,iBAAiB;IACjB,mBAAmB;AACvB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,yDAAsD;IACtD,sBAAsB;IACtB,4BAA4B;IAC5B,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,6CAA6C;IAC7C,iBAAiB;AACrB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,iBAAiB;IACjB,uBAAuB;AAC3B;AACA;IACI,uBAAuB;IACvB,4BAA4B;AAChC;AACA;IACI,uBAAuB;IACvB,iBAAiB;AACrB;;;AAGA;IACI,sBAAsB;AAC1B;AACA;IACI,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,uBAAuB;IACvB,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,uBAAuB;AAC3B;AACA;IACI,eAAe;IACf,kBAAkB;IAClB,WAAW;IACX,kBAAkB;AACtB;AACA;IACI,qBAAqB;IACrB,wBAAwB;IACxB,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,sBAAsB;IACtB,iBAAiB;AACrB","sourcesContent":[".tm_numMovesDiv {\r\n    padding-bottom: 2px;\r\n    background-color: blue;\r\n    color: whitesmoke;\r\n    text-align: center;\r\n}\r\n.tm_numMovesSelected {\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    margin-right: 2px;\r\n}\r\n.tm_numMovesSelected:focus {\r\n    outline: none;\r\n}\r\n.tm_numMovesUnselected {\r\n    background-color: black;\r\n    color: whitesmoke;\r\n    outline: none;\r\n    margin-right: 2px;\r\n}\r\n.tm_numMovesUnselected:focus {\r\n    outline: none;\r\n}\r\n.tm_startPuzzleDiv {\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    text-align: center;\r\n}\r\n.tm_puzzleDiv {\r\n    text-align: center;\r\n    padding: 5px;\r\n    margin-top: 5px;\r\n    background-color: blue;\r\n    color: whitesmoke;\r\n}\r\n.tm_puzzleDiv span:nth-child(even) {\r\n    background-color: blue;\r\n    padding-right: 10px;\r\n}\r\n.tm_puzzleDiv span:nth-child(1) {\r\n    background-color: green;\r\n    padding: 0px 5px;\r\n    color: whitesmoke;\r\n    text-transform: uppercase;\r\n    text-align: right;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: larger;\r\n    letter-spacing: 1px;\r\n}\r\n.tm_puzzleDiv span:nth-child(2) {\r\n    padding-left: 10px;\r\n}\r\n.tm_puzzleDiv span:nth-child(3) {\r\n    background-color: green;\r\n    padding: 0px 5px;\r\n    color: whitesmoke;\r\n    text-transform: uppercase;\r\n    text-align: right;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: larger;\r\n    letter-spacing: 1px;\r\n}\r\n.tm_puzzleDiv span:nth-child(6) {\r\n    padding-left: 10px;\r\n}\r\n.tm_puzzleDiv p {\r\n    margin-top: 5px;\r\n}\r\n.tm_solutionOuterDiv {\r\n    margin-top: 5px;\r\n}\r\n.tm_solutionDiv {\r\n    background-image: url('../../public/transmogrify.jpg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    align-items: center;\r\n    min-height: 225px;\r\n    min-width: 370px;\r\n}\r\n.tm_solutionDiv table {\r\n    text-align: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    letter-spacing: 1px;\r\n}\r\n.tm_solutionDiv td {\r\n    text-transform: uppercase;\r\n}\r\n.tm_solutionDiv tr:not(:first-child):not(:last-child) {\r\n    color: yellow;\r\n    text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;\r\n    font-weight: bold;\r\n}\r\n.tm_nextword {\r\n    font-size: x-large;\r\n}\r\n.tm_arrow {\r\n    color: cyan;\r\n    text-shadow: none;\r\n    background-color: black;\r\n}\r\n.tm_solutionDiv tr:first-child {\r\n    background-color: green;\r\n    color: whitesmoke !important;\r\n}\r\n.tm_solutionDiv tr:last-child {\r\n    background-color: green;\r\n    color: whitesmoke;\r\n}\r\n\r\n\r\n.tm_Backspace {\r\n    background-color: blue;\r\n}\r\n.tm_Backspace::before {\r\n    content: '\\003Cx';\r\n}\r\n.tm_KeyGoDiv {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.tm_KeyGo {\r\n    border: 1px solid white;\r\n    background-color: blue;\r\n    color: white;\r\n    border-radius: 5px;\r\n    font-size: larger;\r\n}\r\n.tm_lastbuttons {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 5px;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    padding-bottom: 5px;\r\n}\r\n.tm_quit {\r\n    background-color: red;\r\n    color: whitesmoke;\r\n    border: 1px solid white;\r\n}\r\n.tm_congrats {\r\n    margin-top: 5px;\r\n    text-align: center;\r\n    color: aqua;\r\n    font-style: italic;\r\n}\r\n.tm_hintsheader {\r\n    border-top: 8px solid;\r\n    border-bottom: 8px solid;\r\n    width: 370px;\r\n    height: 58px;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    background-color: blue;\r\n    color: whitesmoke;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/getUrl.js */ "./node_modules/next/dist/compiled/css-loader/getUrl.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_MorphoCaterpillar_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/MorphoCaterpillar.png */ "./public/MorphoCaterpillar.png");
/* harmony import */ var _public_MorphoCocoon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/MorphoCocoon.png */ "./public/MorphoCocoon.png");
/* harmony import */ var _public_MorphoButterfly_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/MorphoButterfly.png */ "./public/MorphoButterfly.png");
/* harmony import */ var _public_Keyboards_v1_A_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/Keyboards/v1/A.jpg */ "./public/Keyboards/v1/A.jpg");
/* harmony import */ var _public_Keyboards_v1_B_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/Keyboards/v1/B.jpg */ "./public/Keyboards/v1/B.jpg");
/* harmony import */ var _public_Keyboards_v1_C_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/Keyboards/v1/C.jpg */ "./public/Keyboards/v1/C.jpg");
/* harmony import */ var _public_Keyboards_v1_D_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/Keyboards/v1/D.jpg */ "./public/Keyboards/v1/D.jpg");
/* harmony import */ var _public_Keyboards_v1_E_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/Keyboards/v1/E.jpg */ "./public/Keyboards/v1/E.jpg");
/* harmony import */ var _public_Keyboards_v1_F_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/Keyboards/v1/F.jpg */ "./public/Keyboards/v1/F.jpg");
/* harmony import */ var _public_Keyboards_v1_G_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/Keyboards/v1/G.jpg */ "./public/Keyboards/v1/G.jpg");
/* harmony import */ var _public_Keyboards_v1_H_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/Keyboards/v1/H.jpg */ "./public/Keyboards/v1/H.jpg");
/* harmony import */ var _public_Keyboards_v1_I_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../public/Keyboards/v1/I.jpg */ "./public/Keyboards/v1/I.jpg");
/* harmony import */ var _public_Keyboards_v1_J_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../public/Keyboards/v1/J.jpg */ "./public/Keyboards/v1/J.jpg");
/* harmony import */ var _public_Keyboards_v1_K_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../public/Keyboards/v1/K.jpg */ "./public/Keyboards/v1/K.jpg");
/* harmony import */ var _public_Keyboards_v1_L_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../public/Keyboards/v1/L.jpg */ "./public/Keyboards/v1/L.jpg");
/* harmony import */ var _public_Keyboards_v1_M_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../public/Keyboards/v1/M.jpg */ "./public/Keyboards/v1/M.jpg");
/* harmony import */ var _public_Keyboards_v1_N_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../public/Keyboards/v1/N.jpg */ "./public/Keyboards/v1/N.jpg");
/* harmony import */ var _public_Keyboards_v1_O_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../public/Keyboards/v1/O.jpg */ "./public/Keyboards/v1/O.jpg");
/* harmony import */ var _public_Keyboards_v1_P_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../public/Keyboards/v1/P.jpg */ "./public/Keyboards/v1/P.jpg");
/* harmony import */ var _public_Keyboards_v1_Q_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../public/Keyboards/v1/Q.jpg */ "./public/Keyboards/v1/Q.jpg");
/* harmony import */ var _public_Keyboards_v1_R_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../public/Keyboards/v1/R.jpg */ "./public/Keyboards/v1/R.jpg");
/* harmony import */ var _public_Keyboards_v1_S_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../public/Keyboards/v1/S.jpg */ "./public/Keyboards/v1/S.jpg");
/* harmony import */ var _public_Keyboards_v1_T_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../public/Keyboards/v1/T.jpg */ "./public/Keyboards/v1/T.jpg");
/* harmony import */ var _public_Keyboards_v1_U_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../public/Keyboards/v1/U.jpg */ "./public/Keyboards/v1/U.jpg");
/* harmony import */ var _public_Keyboards_v1_V_jpg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../public/Keyboards/v1/V.jpg */ "./public/Keyboards/v1/V.jpg");
/* harmony import */ var _public_Keyboards_v1_W_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../public/Keyboards/v1/W.jpg */ "./public/Keyboards/v1/W.jpg");
/* harmony import */ var _public_Keyboards_v1_X_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../public/Keyboards/v1/X.jpg */ "./public/Keyboards/v1/X.jpg");
/* harmony import */ var _public_Keyboards_v1_Y_jpg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../public/Keyboards/v1/Y.jpg */ "./public/Keyboards/v1/Y.jpg");
/* harmony import */ var _public_Keyboards_v1_Z_jpg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../public/Keyboards/v1/Z.jpg */ "./public/Keyboards/v1/Z.jpg");
/* harmony import */ var _public_Keyboards_v1_backspace_jpg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../public/Keyboards/v1/backspace.jpg */ "./public/Keyboards/v1/backspace.jpg");
/* harmony import */ var _public_Keyboards_v3_A_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../public/Keyboards/v3/A.png */ "./public/Keyboards/v3/A.png");
/* harmony import */ var _public_Keyboards_v3_B_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../public/Keyboards/v3/B.png */ "./public/Keyboards/v3/B.png");
/* harmony import */ var _public_Keyboards_v3_C_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../public/Keyboards/v3/C.png */ "./public/Keyboards/v3/C.png");
/* harmony import */ var _public_Keyboards_v3_D_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../public/Keyboards/v3/D.png */ "./public/Keyboards/v3/D.png");
/* harmony import */ var _public_Keyboards_v3_E_png__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../public/Keyboards/v3/E.png */ "./public/Keyboards/v3/E.png");
/* harmony import */ var _public_Keyboards_v3_F_png__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../public/Keyboards/v3/F.png */ "./public/Keyboards/v3/F.png");
/* harmony import */ var _public_Keyboards_v3_G_png__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../public/Keyboards/v3/G.png */ "./public/Keyboards/v3/G.png");
/* harmony import */ var _public_Keyboards_v3_H_png__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../public/Keyboards/v3/H.png */ "./public/Keyboards/v3/H.png");
/* harmony import */ var _public_Keyboards_v3_I_png__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../public/Keyboards/v3/I.png */ "./public/Keyboards/v3/I.png");
/* harmony import */ var _public_Keyboards_v3_J_png__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../public/Keyboards/v3/J.png */ "./public/Keyboards/v3/J.png");
/* harmony import */ var _public_Keyboards_v3_K_png__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../public/Keyboards/v3/K.png */ "./public/Keyboards/v3/K.png");
/* harmony import */ var _public_Keyboards_v3_L_png__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../public/Keyboards/v3/L.png */ "./public/Keyboards/v3/L.png");
/* harmony import */ var _public_Keyboards_v3_M_png__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../public/Keyboards/v3/M.png */ "./public/Keyboards/v3/M.png");
/* harmony import */ var _public_Keyboards_v3_N_png__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../public/Keyboards/v3/N.png */ "./public/Keyboards/v3/N.png");
/* harmony import */ var _public_Keyboards_v3_O_png__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../public/Keyboards/v3/O.png */ "./public/Keyboards/v3/O.png");
/* harmony import */ var _public_Keyboards_v3_P_png__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../public/Keyboards/v3/P.png */ "./public/Keyboards/v3/P.png");
/* harmony import */ var _public_Keyboards_v3_Q_png__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../public/Keyboards/v3/Q.png */ "./public/Keyboards/v3/Q.png");
/* harmony import */ var _public_Keyboards_v3_R_png__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../public/Keyboards/v3/R.png */ "./public/Keyboards/v3/R.png");
/* harmony import */ var _public_Keyboards_v3_S_png__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../public/Keyboards/v3/S.png */ "./public/Keyboards/v3/S.png");
/* harmony import */ var _public_Keyboards_v3_T_png__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../public/Keyboards/v3/T.png */ "./public/Keyboards/v3/T.png");
/* harmony import */ var _public_Keyboards_v3_U_png__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../public/Keyboards/v3/U.png */ "./public/Keyboards/v3/U.png");
/* harmony import */ var _public_Keyboards_v3_V_png__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../public/Keyboards/v3/V.png */ "./public/Keyboards/v3/V.png");
/* harmony import */ var _public_Keyboards_v3_W_png__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../public/Keyboards/v3/W.png */ "./public/Keyboards/v3/W.png");
/* harmony import */ var _public_Keyboards_v3_X_png__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../public/Keyboards/v3/X.png */ "./public/Keyboards/v3/X.png");
/* harmony import */ var _public_Keyboards_v3_Y_png__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../public/Keyboards/v3/Y.png */ "./public/Keyboards/v3/Y.png");
/* harmony import */ var _public_Keyboards_v3_Z_png__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../public/Keyboards/v3/Z.png */ "./public/Keyboards/v3/Z.png");
/* harmony import */ var _public_Keyboards_v3_Backspace_png__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../public/Keyboards/v3/Backspace.png */ "./public/Keyboards/v3/Backspace.png");
// Imports



























































var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_MorphoCaterpillar_png__WEBPACK_IMPORTED_MODULE_2__.default);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_MorphoCocoon_png__WEBPACK_IMPORTED_MODULE_3__.default);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_MorphoButterfly_png__WEBPACK_IMPORTED_MODULE_4__.default);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_A_jpg__WEBPACK_IMPORTED_MODULE_5__.default);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_B_jpg__WEBPACK_IMPORTED_MODULE_6__.default);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_C_jpg__WEBPACK_IMPORTED_MODULE_7__.default);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_D_jpg__WEBPACK_IMPORTED_MODULE_8__.default);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_E_jpg__WEBPACK_IMPORTED_MODULE_9__.default);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_F_jpg__WEBPACK_IMPORTED_MODULE_10__.default);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_G_jpg__WEBPACK_IMPORTED_MODULE_11__.default);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_H_jpg__WEBPACK_IMPORTED_MODULE_12__.default);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_I_jpg__WEBPACK_IMPORTED_MODULE_13__.default);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_J_jpg__WEBPACK_IMPORTED_MODULE_14__.default);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_K_jpg__WEBPACK_IMPORTED_MODULE_15__.default);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_L_jpg__WEBPACK_IMPORTED_MODULE_16__.default);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_M_jpg__WEBPACK_IMPORTED_MODULE_17__.default);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_N_jpg__WEBPACK_IMPORTED_MODULE_18__.default);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_O_jpg__WEBPACK_IMPORTED_MODULE_19__.default);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_P_jpg__WEBPACK_IMPORTED_MODULE_20__.default);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_Q_jpg__WEBPACK_IMPORTED_MODULE_21__.default);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_R_jpg__WEBPACK_IMPORTED_MODULE_22__.default);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_S_jpg__WEBPACK_IMPORTED_MODULE_23__.default);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_T_jpg__WEBPACK_IMPORTED_MODULE_24__.default);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_U_jpg__WEBPACK_IMPORTED_MODULE_25__.default);
var ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_V_jpg__WEBPACK_IMPORTED_MODULE_26__.default);
var ___CSS_LOADER_URL_REPLACEMENT_25___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_W_jpg__WEBPACK_IMPORTED_MODULE_27__.default);
var ___CSS_LOADER_URL_REPLACEMENT_26___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_X_jpg__WEBPACK_IMPORTED_MODULE_28__.default);
var ___CSS_LOADER_URL_REPLACEMENT_27___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_Y_jpg__WEBPACK_IMPORTED_MODULE_29__.default);
var ___CSS_LOADER_URL_REPLACEMENT_28___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_Z_jpg__WEBPACK_IMPORTED_MODULE_30__.default);
var ___CSS_LOADER_URL_REPLACEMENT_29___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v1_backspace_jpg__WEBPACK_IMPORTED_MODULE_31__.default);
var ___CSS_LOADER_URL_REPLACEMENT_30___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_A_png__WEBPACK_IMPORTED_MODULE_32__.default);
var ___CSS_LOADER_URL_REPLACEMENT_31___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_B_png__WEBPACK_IMPORTED_MODULE_33__.default);
var ___CSS_LOADER_URL_REPLACEMENT_32___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_C_png__WEBPACK_IMPORTED_MODULE_34__.default);
var ___CSS_LOADER_URL_REPLACEMENT_33___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_D_png__WEBPACK_IMPORTED_MODULE_35__.default);
var ___CSS_LOADER_URL_REPLACEMENT_34___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_E_png__WEBPACK_IMPORTED_MODULE_36__.default);
var ___CSS_LOADER_URL_REPLACEMENT_35___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_F_png__WEBPACK_IMPORTED_MODULE_37__.default);
var ___CSS_LOADER_URL_REPLACEMENT_36___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_G_png__WEBPACK_IMPORTED_MODULE_38__.default);
var ___CSS_LOADER_URL_REPLACEMENT_37___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_H_png__WEBPACK_IMPORTED_MODULE_39__.default);
var ___CSS_LOADER_URL_REPLACEMENT_38___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_I_png__WEBPACK_IMPORTED_MODULE_40__.default);
var ___CSS_LOADER_URL_REPLACEMENT_39___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_J_png__WEBPACK_IMPORTED_MODULE_41__.default);
var ___CSS_LOADER_URL_REPLACEMENT_40___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_K_png__WEBPACK_IMPORTED_MODULE_42__.default);
var ___CSS_LOADER_URL_REPLACEMENT_41___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_L_png__WEBPACK_IMPORTED_MODULE_43__.default);
var ___CSS_LOADER_URL_REPLACEMENT_42___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_M_png__WEBPACK_IMPORTED_MODULE_44__.default);
var ___CSS_LOADER_URL_REPLACEMENT_43___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_N_png__WEBPACK_IMPORTED_MODULE_45__.default);
var ___CSS_LOADER_URL_REPLACEMENT_44___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_O_png__WEBPACK_IMPORTED_MODULE_46__.default);
var ___CSS_LOADER_URL_REPLACEMENT_45___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_P_png__WEBPACK_IMPORTED_MODULE_47__.default);
var ___CSS_LOADER_URL_REPLACEMENT_46___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_Q_png__WEBPACK_IMPORTED_MODULE_48__.default);
var ___CSS_LOADER_URL_REPLACEMENT_47___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_R_png__WEBPACK_IMPORTED_MODULE_49__.default);
var ___CSS_LOADER_URL_REPLACEMENT_48___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_S_png__WEBPACK_IMPORTED_MODULE_50__.default);
var ___CSS_LOADER_URL_REPLACEMENT_49___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_T_png__WEBPACK_IMPORTED_MODULE_51__.default);
var ___CSS_LOADER_URL_REPLACEMENT_50___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_U_png__WEBPACK_IMPORTED_MODULE_52__.default);
var ___CSS_LOADER_URL_REPLACEMENT_51___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_V_png__WEBPACK_IMPORTED_MODULE_53__.default);
var ___CSS_LOADER_URL_REPLACEMENT_52___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_W_png__WEBPACK_IMPORTED_MODULE_54__.default);
var ___CSS_LOADER_URL_REPLACEMENT_53___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_X_png__WEBPACK_IMPORTED_MODULE_55__.default);
var ___CSS_LOADER_URL_REPLACEMENT_54___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_Y_png__WEBPACK_IMPORTED_MODULE_56__.default);
var ___CSS_LOADER_URL_REPLACEMENT_55___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_Z_png__WEBPACK_IMPORTED_MODULE_57__.default);
var ___CSS_LOADER_URL_REPLACEMENT_56___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Keyboards_v3_Backspace_png__WEBPACK_IMPORTED_MODULE_58__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  background-color: #404040;\n  color: burlywood;\n  padding: 0;\n  margin: 0;\n  /* font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; */\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.myHeadingFont { /* pb */\n  font-family: var(--commonHeaderFontFamily);\n}\n.myCommonFont { /* pb */\n  font-family: var(--commonFontFamily);\n}\n.mymaterialicon {\n  border-style: none;\n  outline: none;\n}\n.mymaterialicon:focus {\n  outline: none;\n  }\n.fivepxdivider { /* fyb */\n  line-height: 5px;\n}\n.floatright {\n  float: right;\n}\n.textcenter {\n  text-align: center;\n}\n.textright {\n  text-align: right;\n}\n.aligntop {\n  vertical-align: top;\n}\n.equispaced {\n  font-family: monospace;\n}\n.disabled {\n  opacity: 0.6;\n  cursor: not-allowed !important;\n}\n/* Rules for using icons as white on a dark background. */\n.material-icons.md-light { color: rgba(255, 255, 255, 1); }\n.material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }\n\n.artworkDiv {\n  color: black;\n  background-color: cyan;\n  width: 350px;\n}\n.moveLeftButton {\n  background-color: blue;\n  color: cyan;\n  height: 30px;\n  width: 30px;\n  margin: 0px 10px 0px 10px;\n}\n.moveRightButton {\n  background-color: blue;\n  color: cyan;\n  height: 30px;\n  width: 30px;\n  margin: 0px 10px 0px 10px;\n}\n.artwork1 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 350px;\n  width: 350px;\n}\n.artwork2 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 350px;\n  width: 350px;\n}\n.artwork3 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 350px;\n  width: 350px;\n}\n/* Custom keyboards */\n.switchkb {\n  display: flex;\n  justify-content: center;\n}\n/* Version 1 */\n.customKeyboardV1 {\n  margin-top: 5px;\n  border: 1px solid white;\n  border-radius: 5px;\n  padding: 5px 0px;\n  background-color: white;\n  color: white;\n  font-family: 'Courier New', Courier, monospace;\n  width: 370px;\n}\n.ckv1Row1 {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 5px;\n  margin-bottom: 15px;\n}\n.ckv1Row2 {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n.ckv1Row3 {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  margin-left: 20px;\n  margin-right: 10px;\n}\n.customKeyboardV1 span {\n  text-align: center;\n  margin: 0px 1px;\n  padding: 5px 8px;\n  font-size: large;\n}\n\n.ckv1 {\n  background-size: cover;\n  width: 35px;\n  height: 35px;\n}\n.ckv1.A {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + "); \n}\n.ckv1.B {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + "); \n}\n.ckv1.C {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + "); \n}\n.ckv1.D {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + "); \n}\n.ckv1.E {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + "); \n}\n.ckv1.F {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + "); \n}\n.ckv1.G { \n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + "); \n}\n.ckv1.H {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");\n}\n.ckv1.I {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");\n}\n.ckv1.J {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");\n}\n.ckv1.K {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ");\n}\n.ckv1.L {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ");\n}\n.ckv1.M {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + "); \n}\n.ckv1.N {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + "); \n}\n.ckv1.O {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + "); \n}\n.ckv1.P {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + "); \n}\n.ckv1.Q {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ");\n}\n.ckv1.R {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ");\n}\n.ckv1.S {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ");\n}\n.ckv1.T {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ");\n}\n.ckv1.U {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ");\n}\n.ckv1.V {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_24___ + ");\n}\n.ckv1.W {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_25___ + ");\n}\n.ckv1.X {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_26___ + ");\n}\n.ckv1.Y {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_27___ + ");\n}\n.ckv1.Z {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_28___ + ");\n}\n.ckv1.Backspace {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_29___ + ");\n}\n.ckv1Word {\n  display: flex;\n  justify-content: center;\n}\n/* Version 2 */\n.customKeyboardV2 {\n    margin-top: 5px;\n    border: 1px solid white;\n    border-radius: 5px;\n    padding: 5px 0px;\n    background-color: var(--trcssPageBG);\n    color: white;\n    font-family: 'Courier New', Courier, monospace;\n    width: 370px;\n}\n.ckv2Row1 {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 5px;\n    margin-bottom: 15px;\n}\n.ckv2Row2 {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 15px;\n    margin-left: 10px;\n    margin-right: 10px;\n}\n.ckv2Row3 {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 15px;\n    margin-left: 20px;\n    margin-right: 10px;\n}\n.customKeyboardV2 span {\n    border: 1px solid white;\n    border-radius: 5px;\n    background-color: blue;\n    text-align: center;\n    margin: 0px 2px;\n    padding: 5px 8px;\n    font-size: large;\n}\n/* Version 3 */\n.customKeyboardV3 {\n  margin-top: 5px;\n  border: 1px solid white;\n  border-radius: 5px;\n  padding: 5px 0px;\n  background-color: white;\n  color: white;\n  font-family: 'Courier New', Courier, monospace;\n  width: 370px;\n}\n.ckv3Row1 {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 5px;\n  margin-bottom: 15px;\n}\n.ckv3Row2 {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n.ckv3Row3 {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  margin-left: 20px;\n  margin-right: 10px;\n}\n.customKeyboardV3 span {\n  text-align: center;\n  margin: 0px 1px;\n  padding: 5px 8px;\n  font-size: large;\n}\n\n.ckv3 {\n  background-size: cover;\n  width: 35px;\n  height: 35px;\n}\n.ckv3.A {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_30___ + "); \n}\n.ckv3.B {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_31___ + "); \n}\n.ckv3.C {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_32___ + "); \n}\n.ckv3.D {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_33___ + "); \n}\n.ckv3.E {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_34___ + "); \n}\n.ckv3.F {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_35___ + "); \n}\n.ckv3.G { \n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_36___ + "); \n}\n.ckv3.H {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_37___ + ");\n}\n.ckv3.I {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_38___ + ");\n}\n.ckv3.J {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_39___ + ");\n}\n.ckv3.K {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_40___ + ");\n}\n.ckv3.L {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_41___ + ");\n}\n.ckv3.M {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_42___ + "); \n}\n.ckv3.N {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_43___ + "); \n}\n.ckv3.O {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_44___ + "); \n}\n.ckv3.P {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_45___ + "); \n}\n.ckv3.Q {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_46___ + ");\n}\n.ckv3.R {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_47___ + ");\n}\n.ckv3.S {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_48___ + ");\n}\n.ckv3.T {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_49___ + ");\n}\n.ckv3.U {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_50___ + ");\n}\n.ckv3.V {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_51___ + ");\n}\n.ckv3.W {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_52___ + ");\n}\n.ckv3.X {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_53___ + ");\n}\n.ckv3.Y {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_54___ + ");\n}\n.ckv3.Z {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_55___ + ");\n}\n.ckv3.Backspace {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_56___ + ");\n}\n.ckv3Word {\n  display: flex;\n  justify-content: center;\n}\n", "",{"version":3,"sources":["webpack://styles/globals.css"],"names":[],"mappings":"AAAA;;EAEE,yBAAyB;EACzB,gBAAgB;EAChB,UAAU;EACV,SAAS;EACT;2EACyE;AAC3E;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,8BAAsB;UAAtB,sBAAsB;AACxB;AACA,iBAAiB,OAAO;EACtB,0CAA0C;AAC5C;AACA,gBAAgB,OAAO;EACrB,oCAAoC;AACtC;AACA;EACE,kBAAkB;EAClB,aAAa;AACf;AACA;EACE,aAAa;EACb;AACF,iBAAiB,QAAQ;EACvB,gBAAgB;AAClB;AACA;EACE,YAAY;AACd;AACA;EACE,kBAAkB;AACpB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,YAAY;EACZ,8BAA8B;AAChC;AACA,yDAAyD;AACzD,2BAA2B,6BAA6B,EAAE;AAC1D,uCAAuC,+BAA+B,EAAE;;AAExE;EACE,YAAY;EACZ,sBAAsB;EACtB,YAAY;AACd;AACA;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,yBAAyB;AAC3B;AACA;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,yBAAyB;AAC3B;AACA;EACE,yDAAwD;EACxD,4BAA4B;EAC5B,sBAAsB;EACtB,aAAa;EACb,YAAY;AACd;AACA;EACE,yDAAmD;EACnD,4BAA4B;EAC5B,sBAAsB;EACtB,aAAa;EACb,YAAY;AACd;AACA;EACE,yDAAsD;EACtD,4BAA4B;EAC5B,sBAAsB;EACtB,aAAa;EACb,YAAY;AACd;AACA,qBAAqB;AACrB;EACE,aAAa;EACb,uBAAuB;AACzB;AACA,cAAc;AACd;EACE,eAAe;EACf,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;EAChB,uBAAuB;EACvB,YAAY;EACZ,8CAA8C;EAC9C,YAAY;AACd;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;AACd;AACA;EACE,yDAAqD;AACvD;AACA;EACE,yDAAqD;AACvD;AACA;EACE,yDAAqD;AACvD;AACA;EACE,yDAAqD;AACvD;AACA;EACE,yDAAqD;AACvD;AACA;EACE,yDAAqD;AACvD;AACA;EACE,yDAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAA6D;AAC/D;AACA;EACE,aAAa;EACb,uBAAuB;AACzB;AACA,cAAc;AACd;IACI,eAAe;IACf,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,oCAAoC;IACpC,YAAY;IACZ,8CAA8C;IAC9C,YAAY;AAChB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,eAAe;IACf,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,sBAAsB;IACtB,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,gBAAgB;AACpB;AACA,cAAc;AACd;EACE,eAAe;EACf,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;EAChB,uBAAuB;EACvB,YAAY;EACZ,8CAA8C;EAC9C,YAAY;AACd;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;AACd;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAAqD;AACvD;AACA;EACE,0DAA6D;AAC/D;AACA;EACE,aAAa;EACb,uBAAuB;AACzB","sourcesContent":["html,\nbody {\n  background-color: #404040;\n  color: burlywood;\n  padding: 0;\n  margin: 0;\n  /* font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; */\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n.myHeadingFont { /* pb */\n  font-family: var(--commonHeaderFontFamily);\n}\n.myCommonFont { /* pb */\n  font-family: var(--commonFontFamily);\n}\n.mymaterialicon {\n  border-style: none;\n  outline: none;\n}\n.mymaterialicon:focus {\n  outline: none;\n  }\n.fivepxdivider { /* fyb */\n  line-height: 5px;\n}\n.floatright {\n  float: right;\n}\n.textcenter {\n  text-align: center;\n}\n.textright {\n  text-align: right;\n}\n.aligntop {\n  vertical-align: top;\n}\n.equispaced {\n  font-family: monospace;\n}\n.disabled {\n  opacity: 0.6;\n  cursor: not-allowed !important;\n}\n/* Rules for using icons as white on a dark background. */\n.material-icons.md-light { color: rgba(255, 255, 255, 1); }\n.material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }\n\n.artworkDiv {\n  color: black;\n  background-color: cyan;\n  width: 350px;\n}\n.moveLeftButton {\n  background-color: blue;\n  color: cyan;\n  height: 30px;\n  width: 30px;\n  margin: 0px 10px 0px 10px;\n}\n.moveRightButton {\n  background-color: blue;\n  color: cyan;\n  height: 30px;\n  width: 30px;\n  margin: 0px 10px 0px 10px;\n}\n.artwork1 {\n  background-image: url('../public/MorphoCaterpillar.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 350px;\n  width: 350px;\n}\n.artwork2 {\n  background-image: url('../public/MorphoCocoon.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 350px;\n  width: 350px;\n}\n.artwork3 {\n  background-image: url('../public/MorphoButterfly.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 350px;\n  width: 350px;\n}\n/* Custom keyboards */\n.switchkb {\n  display: flex;\n  justify-content: center;\n}\n/* Version 1 */\n.customKeyboardV1 {\n  margin-top: 5px;\n  border: 1px solid white;\n  border-radius: 5px;\n  padding: 5px 0px;\n  background-color: white;\n  color: white;\n  font-family: 'Courier New', Courier, monospace;\n  width: 370px;\n}\n.ckv1Row1 {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 5px;\n  margin-bottom: 15px;\n}\n.ckv1Row2 {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n.ckv1Row3 {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  margin-left: 20px;\n  margin-right: 10px;\n}\n.customKeyboardV1 span {\n  text-align: center;\n  margin: 0px 1px;\n  padding: 5px 8px;\n  font-size: large;\n}\n\n.ckv1 {\n  background-size: cover;\n  width: 35px;\n  height: 35px;\n}\n.ckv1.A {\n  background-image: url('../public/Keyboards/v1/A.jpg'); \n}\n.ckv1.B {\n  background-image: url('../public/Keyboards/v1/B.jpg'); \n}\n.ckv1.C {\n  background-image: url('../public/Keyboards/v1/C.jpg'); \n}\n.ckv1.D {\n  background-image: url('../public/Keyboards/v1/D.jpg'); \n}\n.ckv1.E {\n  background-image: url('../public/Keyboards/v1/E.jpg'); \n}\n.ckv1.F {\n  background-image: url('../public/Keyboards/v1/F.jpg'); \n}\n.ckv1.G { \n  background-image: url('../public/Keyboards/v1/G.jpg'); \n}\n.ckv1.H {\n  background-image: url('../public/Keyboards/v1/H.jpg');\n}\n.ckv1.I {\n  background-image: url('../public/Keyboards/v1/I.jpg');\n}\n.ckv1.J {\n  background-image: url('../public/Keyboards/v1/J.jpg');\n}\n.ckv1.K {\n  background-image: url('../public/Keyboards/v1/K.jpg');\n}\n.ckv1.L {\n  background-image: url('../public/Keyboards/v1/L.jpg');\n}\n.ckv1.M {\n  background-image: url('../public/Keyboards/v1/M.jpg'); \n}\n.ckv1.N {\n  background-image: url('../public/Keyboards/v1/N.jpg'); \n}\n.ckv1.O {\n  background-image: url('../public/Keyboards/v1/O.jpg'); \n}\n.ckv1.P {\n  background-image: url('../public/Keyboards/v1/P.jpg'); \n}\n.ckv1.Q {\n  background-image: url('../public/Keyboards/v1/Q.jpg');\n}\n.ckv1.R {\n  background-image: url('../public/Keyboards/v1/R.jpg');\n}\n.ckv1.S {\n  background-image: url('../public/Keyboards/v1/S.jpg');\n}\n.ckv1.T {\n  background-image: url('../public/Keyboards/v1/T.jpg');\n}\n.ckv1.U {\n  background-image: url('../public/Keyboards/v1/U.jpg');\n}\n.ckv1.V {\n  background-image: url('../public/Keyboards/v1/V.jpg');\n}\n.ckv1.W {\n  background-image: url('../public/Keyboards/v1/W.jpg');\n}\n.ckv1.X {\n  background-image: url('../public/Keyboards/v1/X.jpg');\n}\n.ckv1.Y {\n  background-image: url('../public/Keyboards/v1/Y.jpg');\n}\n.ckv1.Z {\n  background-image: url('../public/Keyboards/v1/Z.jpg');\n}\n.ckv1.Backspace {\n  background-image: url('../public/Keyboards/v1/backspace.jpg');\n}\n.ckv1Word {\n  display: flex;\n  justify-content: center;\n}\n/* Version 2 */\n.customKeyboardV2 {\n    margin-top: 5px;\n    border: 1px solid white;\n    border-radius: 5px;\n    padding: 5px 0px;\n    background-color: var(--trcssPageBG);\n    color: white;\n    font-family: 'Courier New', Courier, monospace;\n    width: 370px;\n}\n.ckv2Row1 {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 5px;\n    margin-bottom: 15px;\n}\n.ckv2Row2 {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 15px;\n    margin-left: 10px;\n    margin-right: 10px;\n}\n.ckv2Row3 {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 15px;\n    margin-left: 20px;\n    margin-right: 10px;\n}\n.customKeyboardV2 span {\n    border: 1px solid white;\n    border-radius: 5px;\n    background-color: blue;\n    text-align: center;\n    margin: 0px 2px;\n    padding: 5px 8px;\n    font-size: large;\n}\n/* Version 3 */\n.customKeyboardV3 {\n  margin-top: 5px;\n  border: 1px solid white;\n  border-radius: 5px;\n  padding: 5px 0px;\n  background-color: white;\n  color: white;\n  font-family: 'Courier New', Courier, monospace;\n  width: 370px;\n}\n.ckv3Row1 {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 5px;\n  margin-bottom: 15px;\n}\n.ckv3Row2 {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n.ckv3Row3 {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  margin-left: 20px;\n  margin-right: 10px;\n}\n.customKeyboardV3 span {\n  text-align: center;\n  margin: 0px 1px;\n  padding: 5px 8px;\n  font-size: large;\n}\n\n.ckv3 {\n  background-size: cover;\n  width: 35px;\n  height: 35px;\n}\n.ckv3.A {\n  background-image: url('../public/Keyboards/v3/A.png'); \n}\n.ckv3.B {\n  background-image: url('../public/Keyboards/v3/B.png'); \n}\n.ckv3.C {\n  background-image: url('../public/Keyboards/v3/C.png'); \n}\n.ckv3.D {\n  background-image: url('../public/Keyboards/v3/D.png'); \n}\n.ckv3.E {\n  background-image: url('../public/Keyboards/v3/E.png'); \n}\n.ckv3.F {\n  background-image: url('../public/Keyboards/v3/F.png'); \n}\n.ckv3.G { \n  background-image: url('../public/Keyboards/v3/G.png'); \n}\n.ckv3.H {\n  background-image: url('../public/Keyboards/v3/H.png');\n}\n.ckv3.I {\n  background-image: url('../public/Keyboards/v3/I.png');\n}\n.ckv3.J {\n  background-image: url('../public/Keyboards/v3/J.png');\n}\n.ckv3.K {\n  background-image: url('../public/Keyboards/v3/K.png');\n}\n.ckv3.L {\n  background-image: url('../public/Keyboards/v3/L.png');\n}\n.ckv3.M {\n  background-image: url('../public/Keyboards/v3/M.png'); \n}\n.ckv3.N {\n  background-image: url('../public/Keyboards/v3/N.png'); \n}\n.ckv3.O {\n  background-image: url('../public/Keyboards/v3/O.png'); \n}\n.ckv3.P {\n  background-image: url('../public/Keyboards/v3/P.png'); \n}\n.ckv3.Q {\n  background-image: url('../public/Keyboards/v3/Q.png');\n}\n.ckv3.R {\n  background-image: url('../public/Keyboards/v3/R.png');\n}\n.ckv3.S {\n  background-image: url('../public/Keyboards/v3/S.png');\n}\n.ckv3.T {\n  background-image: url('../public/Keyboards/v3/T.png');\n}\n.ckv3.U {\n  background-image: url('../public/Keyboards/v3/U.png');\n}\n.ckv3.V {\n  background-image: url('../public/Keyboards/v3/V.png');\n}\n.ckv3.W {\n  background-image: url('../public/Keyboards/v3/W.png');\n}\n.ckv3.X {\n  background-image: url('../public/Keyboards/v3/X.png');\n}\n.ckv3.Y {\n  background-image: url('../public/Keyboards/v3/Y.png');\n}\n.ckv3.Z {\n  background-image: url('../public/Keyboards/v3/Z.png');\n}\n.ckv3.Backspace {\n  background-image: url('../public/Keyboards/v3/Backspace.png');\n}\n.ckv3Word {\n  display: flex;\n  justify-content: center;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL25leHQtc2VydmVyL2xpYi9hbXAtY29udGV4dC50cyIsIndlYnBhY2s6Ly9fTl9FLy4uL25leHQtc2VydmVyL2xpYi9hbXAudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9uZXh0LXNlcnZlci9saWIvaGVhZC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uLi9uZXh0LXNlcnZlci9saWIvc2lkZS1lZmZlY3QudHN4Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL19OX0UvIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9meWIvZnliLmNzcz84NGVlIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3JwaG8vbW9ycGhvLmNzcz8zNTk3Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9wYi9wcmlzb25icmVhay5jc3M/N2I4MiIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG0vdG0uY3NzP2I5ZjUiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3dpL3dvcmRpbmZvLmNzcz9hM2Q5Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy93bS9tYXN0ZXJtaW5kLmNzcz8zYzY2Iiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/YTcyMyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Z5Yi9meWIuY3NzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3JwaG8vbW9ycGhvLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsuY3NzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy90bS90bS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3dpL3dvcmRpbmZvLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd20vbWFzdGVybWluZC5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nbG9iYWxzLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2dldFVybC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0JhcmJlZFdpcmUucG5nIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvQmFyYmVkV2lyZVJvdGF0ZWQucG5nIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0EuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0IuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0MuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0QuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0UuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0YuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0cuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0guanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0kuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0ouanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0suanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0wuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL00uanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL04uanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL08uanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1AuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1EuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1IuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1MuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1QuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1UuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1YuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1cuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1guanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1kuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1ouanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL2JhY2tzcGFjZS5qcGciLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9LZXlib2FyZHMvdjMvQS5wbmciLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9LZXlib2FyZHMvdjMvQi5wbmciLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9LZXlib2FyZHMvdjMvQmFja3NwYWNlLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9DLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9ELnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9FLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9GLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9HLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9ILnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9JLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9KLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9LLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9MLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9NLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9OLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9PLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9QLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9RLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9SLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9TLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9ULnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9VLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9WLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9XLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9YLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9ZLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9aLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL01vcnBob0J1dHRlcmZseS5wbmciLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9Nb3JwaG9DYXRlcnBpbGxhci5wbmciLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9Nb3JwaG9Db2Nvb24ucG5nIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvV2FsbC5qcGciLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9wbGF5ZXJ0aXRsZS5wbmciLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9wcmlzb25iYXJzLXNxdWFyZS5wbmciLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy90aWxlLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL3RyYW5zbW9ncmlmeS5qcGciLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2hlYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvanN4LWRldi1ydW50aW1lLmpzIl0sIm5hbWVzIjpbIkFtcFN0YXRlQ29udGV4dCIsIlJlYWN0IiwiYW1wRmlyc3QiLCJoeWJyaWQiLCJoYXNRdWVyeSIsImlzSW5BbXBNb2RlIiwiaW5BbXBNb2RlIiwiaGVhZCIsImNoaWxkIiwibGlzdCIsImZyYWdtZW50TGlzdCIsIk1FVEFUWVBFUyIsImtleXMiLCJ0YWdzIiwibWV0YVR5cGVzIiwibWV0YUNhdGVnb3JpZXMiLCJoIiwiaXNVbmlxdWUiLCJoYXNLZXkiLCJrZXkiLCJpIiwibGVuIiwibWV0YXR5cGUiLCJjYXRlZ29yeSIsImNhdGVnb3JpZXMiLCJoZWFkRWxlbWVudHMiLCJoZWFkRWxlbWVudENoaWxkcmVuIiwiaGVhZEVsZW1lbnQiLCJkZWZhdWx0SGVhZCIsInByb3BzIiwidW5pcXVlIiwiYyIsInByb2Nlc3MiLCJhbXBTdGF0ZSIsImhlYWRNYW5hZ2VyIiwiSGVhZE1hbmFnZXJDb250ZXh0IiwiSGVhZCIsImlzU2VydmVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJfaGFzSGVhZE1hbmFnZXIiLCJlbWl0Q2hhbmdlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsIk15QXBwIiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRU87O0FBQUEsTUFBTUEsZUFBbUMsZ0JBQUdDLDZCQUE1QyxFQUE0Q0EsQ0FBNUM7Ozs7QUFFUCxJQUFJLE1BQXVDO0FBQ3pDRCxpQkFBZSxDQUFmQTtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkQ7O0FBQ0E7Ozs7OztBQUVPOztBQUFBLHFCQUFxQjtBQUMxQkUsVUFBUSxHQURrQjtBQUUxQkMsUUFBTSxHQUZvQjtBQUcxQkMsVUFBUSxHQUhrQjtBQUFBLElBQXJCLElBSVU7QUFDZixTQUFPRixRQUFRLElBQUtDLE1BQU0sSUFBMUI7QUFHSzs7QUFBQSxrQkFBMkI7QUFBQTs7QUFDaEM7QUFDQSxTQUFPRSxXQUFXLENBQUNKLDBCQUFpQkQsWUFBcEMsZUFBbUJDLENBQUQsQ0FBbEI7QUFDRDs7R0FITSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hQOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTU87O0FBQUEscUJBQXFCSyxTQUFTLEdBQTlCLE9BQXVEO0FBQzVELFFBQU1DLElBQUksR0FBRyxjQUFDO0FBQU0sV0FBTyxFQUEzQjtBQUFjLElBQUQsQ0FBYjs7QUFDQSxNQUFJLENBQUosV0FBZ0I7QUFDZEEsUUFBSSxDQUFKQSxtQkFBVTtBQUFNLFVBQUksRUFBVjtBQUFzQixhQUFPLEVBQXZDQTtBQUFVLE1BQVZBO0FBRUY7O0FBQUE7QUFHRjs7QUFBQSx1Q0FHa0M7QUFDaEM7QUFDQSxNQUFJLDZCQUE2QixpQkFBakMsVUFBNEQ7QUFDMUQ7QUFFRixHQUxnQyxDQUtoQzs7O0FBQ0EsTUFBSUMsS0FBSyxDQUFMQSxTQUFlUCxlQUFuQixVQUFtQztBQUNqQyxXQUFPUSxJQUFJLENBQUpBLE9BQ0xSLGdDQUF1Qk8sS0FBSyxDQUFMQSxNQUF2QlAsaUJBQ0UsaUNBR3FDO0FBQ25DLFVBQ0UscUNBQ0EseUJBRkYsVUFHRTtBQUNBO0FBRUY7O0FBQUEsYUFBT1MsWUFBWSxDQUFaQSxPQUFQLGFBQU9BLENBQVA7QUFYSlQsT0FERixFQUNFQSxDQURLUSxDQUFQO0FBa0JGOztBQUFBLFNBQU9BLElBQUksQ0FBSkEsT0FBUCxLQUFPQSxDQUFQO0FBR0Y7O0FBQUEsTUFBTUUsU0FBUyxHQUFHLGlDQUFsQixVQUFrQixDQUFsQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0Esa0JBQWtCO0FBQ2hCLFFBQU1DLElBQUksR0FBRyxJQUFiLEdBQWEsRUFBYjtBQUNBLFFBQU1DLElBQUksR0FBRyxJQUFiLEdBQWEsRUFBYjtBQUNBLFFBQU1DLFNBQVMsR0FBRyxJQUFsQixHQUFrQixFQUFsQjtBQUNBLFFBQU1DLGNBQW1ELEdBQXpEO0FBRUEsU0FBUUMsQ0FBRCxJQUFnQztBQUNyQyxRQUFJQyxRQUFRLEdBQVo7QUFDQSxRQUFJQyxNQUFNLEdBQVY7O0FBRUEsUUFBSUYsQ0FBQyxDQUFEQSxPQUFTLE9BQU9BLENBQUMsQ0FBUixRQUFUQSxZQUFzQ0EsQ0FBQyxDQUFEQSxtQkFBMUMsR0FBa0U7QUFDaEVFLFlBQU0sR0FBTkE7QUFDQSxZQUFNQyxHQUFHLEdBQUdILENBQUMsQ0FBREEsVUFBWUEsQ0FBQyxDQUFEQSxtQkFBeEIsQ0FBWUEsQ0FBWjs7QUFDQSxVQUFJSixJQUFJLENBQUpBLElBQUosR0FBSUEsQ0FBSixFQUFtQjtBQUNqQkssZ0JBQVEsR0FBUkE7QUFERixhQUVPO0FBQ0xMLFlBQUksQ0FBSkE7QUFFSDtBQUVELEtBZHFDLENBY3JDOzs7QUFDQSxZQUFRSSxDQUFDLENBQVQ7QUFDRTtBQUNBO0FBQ0UsWUFBSUgsSUFBSSxDQUFKQSxJQUFTRyxDQUFDLENBQWQsSUFBSUgsQ0FBSixFQUFzQjtBQUNwQkksa0JBQVEsR0FBUkE7QUFERixlQUVPO0FBQ0xKLGNBQUksQ0FBSkEsSUFBU0csQ0FBQyxDQUFWSDtBQUVGOztBQUFBOztBQUNGO0FBQ0UsYUFBSyxJQUFJTyxDQUFDLEdBQUwsR0FBV0MsR0FBRyxHQUFHVixTQUFTLENBQS9CLFFBQXdDUyxDQUFDLEdBQXpDLEtBQWlEQSxDQUFqRCxJQUFzRDtBQUNwRCxnQkFBTUUsUUFBUSxHQUFHWCxTQUFTLENBQTFCLENBQTBCLENBQTFCO0FBQ0EsY0FBSSxDQUFDSyxDQUFDLENBQURBLHFCQUFMLFFBQUtBLENBQUwsRUFBdUM7O0FBRXZDLGNBQUlNLFFBQVEsS0FBWixXQUE0QjtBQUMxQixnQkFBSVIsU0FBUyxDQUFUQSxJQUFKLFFBQUlBLENBQUosRUFBNkI7QUFDM0JHLHNCQUFRLEdBQVJBO0FBREYsbUJBRU87QUFDTEgsdUJBQVMsQ0FBVEE7QUFFSDtBQU5ELGlCQU1PO0FBQ0wsa0JBQU1TLFFBQVEsR0FBR1AsQ0FBQyxDQUFEQSxNQUFqQixRQUFpQkEsQ0FBakI7QUFDQSxrQkFBTVEsVUFBVSxHQUFHVCxjQUFjLENBQWRBLFFBQWMsQ0FBZEEsSUFBNEIsSUFBL0MsR0FBK0MsRUFBL0M7O0FBQ0EsZ0JBQUksQ0FBQ08sUUFBUSxLQUFSQSxVQUF1QixDQUF4QixXQUFvQ0UsVUFBVSxDQUFWQSxJQUF4QyxRQUF3Q0EsQ0FBeEMsRUFBa0U7QUFDaEVQLHNCQUFRLEdBQVJBO0FBREYsbUJBRU87QUFDTE8sd0JBQVUsQ0FBVkE7QUFDQVQsNEJBQWMsQ0FBZEEsUUFBYyxDQUFkQTtBQUVIO0FBQ0Y7QUE5Qkw7O0FBQUE7QUFBQTs7QUFrQ0E7QUFqREY7QUFxREY7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsK0NBR0U7QUFDQSxTQUFPVSxZQUFZLENBQVpBLE9BRUgsdUJBQW9FO0FBQ2xFLFVBQU1DLG1CQUFtQixHQUFHekIsZ0NBQzFCMEIsV0FBVyxDQUFYQSxNQURGLFFBQTRCMUIsQ0FBNUI7O0FBR0EsV0FBT1EsSUFBSSxDQUFKQSxPQUFQLG1CQUFPQSxDQUFQO0FBTkNnQix1REFZR0csV0FBVyxDQUFDQyxLQUFLLENBWnBCSixTQVljLENBWmRBLFNBYUdLLE1BYkhMLGtCQWVBLFVBQTJDO0FBQzlDLFVBQU1OLEdBQUcsR0FBR1ksQ0FBQyxDQUFEQSxPQUFaOztBQUNBLFFBQ0VDLEtBREYsRUFJRSxFQW9CRjs7QUFBQSx3QkFBTy9CLCtCQUFzQjtBQUE3QjtBQUE2QixLQUF0QkEsQ0FBUDtBQXpDSixHQUFPd0IsQ0FBUDtBQTZDRjtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxjQUFjO0FBQWQ7QUFBYyxDQUFkLEVBQTJEO0FBQ3pELFFBQU1RLFFBQVEsR0FBRyx1QkFBV2pDLFlBQTVCLGVBQWlCLENBQWpCO0FBQ0EsUUFBTWtDLFdBQVcsR0FBRyx1QkFBV0Msb0JBQS9CLGtCQUFvQixDQUFwQjtBQUNBLHNCQUNFLDZCQUFDLFlBQUQ7QUFDRSwyQkFBdUIsRUFEekI7QUFFRSxlQUFXLEVBRmI7QUFHRSxhQUFTLEVBQUUsc0JBSGIsUUFHYTtBQUhiLEtBREYsUUFDRSxDQURGO0FBV0YsQyxDQUFBOzs7S0FkQSxJOztBQWVBQyxJQUFJLENBQUpBLFNBQWMsTUFBTSxDQUFwQkE7O2VBRWVBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdMZjs7QUFFQSxNQUFNQyxRQUFOOztBQWNlLHVCQUFjQyxnQkFBZCxDQUF5QztBQWN0REMsYUFBVyxRQUFhO0FBQ3RCO0FBRHNCLFNBYmhCQyxlQWFnQjs7QUFBQSxTQVh4QkMsVUFXd0IsR0FYWCxNQUFZO0FBQ3ZCLFVBQUksS0FBSixpQkFBMEI7QUFDeEIsMENBQ0UsbUNBQ0UsQ0FBQyxHQUFHLHVCQUROLGdCQUNFLENBREYsRUFFRSxLQUhKLEtBQ0UsQ0FERjtBQU9IO0FBRXVCOztBQUV0QiwyQkFDRSwwQkFBMEIsdUJBRDVCOztBQUdBLFFBQUlKLFFBQVEsSUFBSSxLQUFoQixpQkFBc0M7QUFDcEM7QUFDQTtBQUVIO0FBQ0RLOztBQUFBQSxtQkFBaUIsR0FBRztBQUNsQixRQUFJLEtBQUosaUJBQTBCO0FBQ3hCO0FBRUY7O0FBQUE7QUFFRkM7O0FBQUFBLG9CQUFrQixHQUFHO0FBQ25CO0FBRUZDOztBQUFBQSxzQkFBb0IsR0FBRztBQUNyQixRQUFJLEtBQUosaUJBQTBCO0FBQ3hCO0FBRUY7O0FBQUE7QUFHRkM7O0FBQUFBLFFBQU0sR0FBRztBQUNQO0FBekNvRDs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJ4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNDLEtBQVQsQ0FBZTtBQUFDUixXQUFEO0FBQVdTO0FBQVgsQ0FBZixFQUFzQztBQUNsQyxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0k7QUFDSSxXQUFHLEVBQUMsWUFEUjtBQUVJLFlBQUksRUFBQywwRUFGVDtBQUdJLG1CQUFXLEVBQUM7QUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBTUk7QUFBTTtBQUNGLFlBQUksRUFBQyx5REFEVDtBQUVJLFdBQUcsRUFBQztBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSixlQVVJO0FBQ0ksV0FBRyxFQUFDLGtEQURSO0FBRUksbUJBQVcsRUFBQztBQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkosZUFjSTtBQUNJLFdBQUcsRUFBQyxzRUFEUjtBQUVJLG1CQUFXLEVBQUM7QUFGaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRKLGVBa0JJO0FBQ0ksV0FBRyxFQUFDLHdFQURSO0FBRUksbUJBQVcsRUFBQztBQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbEJKLGVBc0JJO0FBQU07QUFDRixXQUFHLEVBQUMsWUFEUjtBQUVJLFlBQUksRUFBQztBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F0QkosZUEwQkk7QUFBTTtBQUNGLFdBQUcsRUFBQyxZQURSO0FBRUksWUFBSSxFQUFDO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFCSixlQXNDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRDSSxlQXVDSjtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkNJLGVBd0NKO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4Q0ksZUF5Q0o7QUFBTSxnQkFBUSxFQUFDLFVBQWY7QUFBMEIsZUFBTyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6Q0ksZUEwQ0o7QUFBTSxnQkFBUSxFQUFDLGdCQUFmO0FBQWdDLGVBQU8sRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUNJLGVBMkNKO0FBQU0sZ0JBQVEsRUFBQyxVQUFmO0FBQTBCLGVBQU8sRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0NJLGVBNENKO0FBQU0sZ0JBQVEsRUFBQyxnQkFBZjtBQUFnQyxlQUFPLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTVDSSxlQTZDSjtBQUFNLGdCQUFRLEVBQUMsaUJBQWY7QUFBaUMsZUFBTyxFQUFDO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E3Q0ksZUE4Q0o7QUFBTSxZQUFJLEVBQUMsZUFBWDtBQUEyQixlQUFPLEVBQUM7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTlDSSxlQStDSjtBQUFNLFlBQUksRUFBQyxlQUFYO0FBQTJCLGVBQU8sRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBL0NJLGVBZ0RKO0FBQU0sWUFBSSxFQUFDLGNBQVg7QUFBMEIsZUFBTyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoREksZUFpREo7QUFBTSxZQUFJLEVBQUMscUJBQVg7QUFBaUMsZUFBTyxFQUFDO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqREksZUFrREo7QUFBTSxnQkFBUSxFQUFDLFFBQWY7QUFBd0IsZUFBTyxFQUFDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsREksZUFtREo7QUFBTSxnQkFBUSxFQUFDLGNBQWY7QUFBOEIsZUFBTyxFQUFDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuREksZUFvREo7QUFBTSxnQkFBUSxFQUFDLFdBQWY7QUFBMkIsZUFBTyxFQUFDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwREksZUFxREo7QUFBTSxnQkFBUSxFQUFDLFNBQWY7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyREk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUF3REksOERBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeERKO0FBQUEsa0JBREo7QUE0REg7O0tBN0RRRCxLO0FBK0RULCtEQUFlQSxLQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsbURBQTRCO0FBQ25EO0FBQ0E7Ozs7Ozs7Ozs7O0FDTkEsVUFBVSxtQkFBTyxDQUFDLHVOQUEyRztBQUM3SCwwQkFBMEIsbUJBQU8sQ0FBQyw0WkFBMk07O0FBRTdPOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQSxzRUFBc0Usd0NBQXdDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkLHlCQUF5QixVQUFVO0FBQ25DLGtFQUFrRSxpQkFBaUIsY0FBYyxNQUFNLFlBQVksaUNBQWlDO0FBQ3BKLFVBQVUsZ0JBQWdCLGVBQWUsWUFBWSxpQ0FBaUM7QUFDdEYsVUFBVSxVQUFVLGVBQWU7QUFDbkM7O0FBRUEsSUFBSSxpQkFBaUI7QUFDckIsTUFBTSw0WkFBMk07QUFDak47QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyw0WkFBMk07O0FBRXJPOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixVQUFVOztBQUUxQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOztBQUVBLHNDOzs7Ozs7Ozs7O0FDM0RBLFVBQVUsbUJBQU8sQ0FBQyx1TkFBMkc7QUFDN0gsMEJBQTBCLG1CQUFPLENBQUMscWFBQThNOztBQUVoUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZCx5QkFBeUIsVUFBVTtBQUNuQyxrRUFBa0UsaUJBQWlCLGNBQWMsTUFBTSxZQUFZLGlDQUFpQztBQUNwSixVQUFVLGdCQUFnQixlQUFlLFlBQVksaUNBQWlDO0FBQ3RGLFVBQVUsVUFBVSxlQUFlO0FBQ25DOztBQUVBLElBQUksaUJBQWlCO0FBQ3JCLE1BQU0scWFBQThNO0FBQ3BOO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMscWFBQThNOztBQUV4Tzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLFVBQVU7QUFDWjtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQzs7Ozs7Ozs7OztBQzNEQSxVQUFVLG1CQUFPLENBQUMsdU5BQTJHO0FBQzdILDBCQUEwQixtQkFBTyxDQUFDLDJhQUFtTjs7QUFFclA7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLHNFQUFzRSx3Q0FBd0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2QseUJBQXlCLFVBQVU7QUFDbkMsa0VBQWtFLGlCQUFpQixjQUFjLE1BQU0sWUFBWSxpQ0FBaUM7QUFDcEosVUFBVSxnQkFBZ0IsZUFBZSxZQUFZLGlDQUFpQztBQUN0RixVQUFVLFVBQVUsZUFBZTtBQUNuQzs7QUFFQSxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLDJhQUFtTjtBQUN6TjtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLDJhQUFtTjs7QUFFN087O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0M7Ozs7Ozs7Ozs7QUMzREEsVUFBVSxtQkFBTyxDQUFDLHVOQUEyRztBQUM3SCwwQkFBMEIsbUJBQU8sQ0FBQyx5WkFBME07O0FBRTVPOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQSxzRUFBc0Usd0NBQXdDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkLHlCQUF5QixVQUFVO0FBQ25DLGtFQUFrRSxpQkFBaUIsY0FBYyxNQUFNLFlBQVksaUNBQWlDO0FBQ3BKLFVBQVUsZ0JBQWdCLGVBQWUsWUFBWSxpQ0FBaUM7QUFDdEYsVUFBVSxVQUFVLGVBQWU7QUFDbkM7O0FBRUEsSUFBSSxpQkFBaUI7QUFDckIsTUFBTSx5WkFBME07QUFDaE47QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyx5WkFBME07O0FBRXBPOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixVQUFVOztBQUUxQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOztBQUVBLHNDOzs7Ozs7Ozs7O0FDM0RBLFVBQVUsbUJBQU8sQ0FBQyx1TkFBMkc7QUFDN0gsMEJBQTBCLG1CQUFPLENBQUMscWFBQWdOOztBQUVsUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZCx5QkFBeUIsVUFBVTtBQUNuQyxrRUFBa0UsaUJBQWlCLGNBQWMsTUFBTSxZQUFZLGlDQUFpQztBQUNwSixVQUFVLGdCQUFnQixlQUFlLFlBQVksaUNBQWlDO0FBQ3RGLFVBQVUsVUFBVSxlQUFlO0FBQ25DOztBQUVBLElBQUksaUJBQWlCO0FBQ3JCLE1BQU0scWFBQWdOO0FBQ3ROO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMscWFBQWdOOztBQUUxTzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLFVBQVU7QUFDWjtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQzs7Ozs7Ozs7OztBQzNEQSxVQUFVLG1CQUFPLENBQUMsdU5BQTJHO0FBQzdILDBCQUEwQixtQkFBTyxDQUFDLHlhQUFrTjs7QUFFcFA7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLHNFQUFzRSx3Q0FBd0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2QseUJBQXlCLFVBQVU7QUFDbkMsa0VBQWtFLGlCQUFpQixjQUFjLE1BQU0sWUFBWSxpQ0FBaUM7QUFDcEosVUFBVSxnQkFBZ0IsZUFBZSxZQUFZLGlDQUFpQztBQUN0RixVQUFVLFVBQVUsZUFBZTtBQUNuQzs7QUFFQSxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLHlhQUFrTjtBQUN4TjtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLHlhQUFrTjs7QUFFNU87O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0M7Ozs7Ozs7Ozs7QUMzREEsVUFBVSxtQkFBTyxDQUFDLG9OQUF3RztBQUMxSCwwQkFBMEIsbUJBQU8sQ0FBQywyWkFBeU07O0FBRTNPOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQSxzRUFBc0Usd0NBQXdDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkLHlCQUF5QixVQUFVO0FBQ25DLGtFQUFrRSxpQkFBaUIsY0FBYyxNQUFNLFlBQVksaUNBQWlDO0FBQ3BKLFVBQVUsZ0JBQWdCLGVBQWUsWUFBWSxpQ0FBaUM7QUFDdEYsVUFBVSxVQUFVLGVBQWU7QUFDbkM7O0FBRUEsSUFBSSxpQkFBaUI7QUFDckIsTUFBTSwyWkFBeU07QUFDL007QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQywyWkFBeU07O0FBRW5POztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixVQUFVOztBQUUxQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOztBQUVBLHNDOzs7Ozs7Ozs7OztBQzNEYSxpQ0FBaUMsU0FBUywyQkFBMkIsOEJBQThCO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELGVBQWUsR0FBRyxxQ0FBcUMsY0FBYyxpQ0FBaUMsc0NBQXNDLCtDQUErQztBQUN2UCw4RUFBOEUsSUFBSTtBQUNsRjtBQUNBLDhDQUE4QyxTQUFTO0FBQ3ZELG1CQUFtQiwwQkFBMEIsdUJBQXVCLEdBQUcscUJBQXFCLDBDQUEwQyxjQUFjLFlBQVkscUJBQXFCLEtBQUssMkNBQTJDLFNBQVMsUUFBUSxlQUFlLG9DQUFvQyxvQkFBb0IscUJBQXFCLFlBQVksY0FBYyxLQUFLLG1CQUFtQixtREFBbUQsOEJBQThCLHlDQUF5Qyx1QkFBdUIsNkNBQTZDLFdBQVcsNkNBQTZDLGVBQWUsZ0NBQWdDLGlDQUFpQyxLQUFLLGtCQUFrQixpRUFBaUUsR0FBRyw4QkFBOEIsb0JBQW9CLHFDQUFxQyw0Q0FBNEMsd0NBQXdDLDBDQUEwQztBQUMxL0IsS0FBc0MsQ0FBQyxzQkFBaUIsQ0FBQyxDQUFJLENBQUMsVUFBVSx5QkFBeUIsOENBQThDLHlDQUF5QyxFQUFFLHVDQUF1Qyx1QkFBdUIsS0FBSywrQ0FBK0MsWUFBWSw0SEFBNEgsMkJBQTJCLGNBQWMsbUNBQW1DO0FBQ2hnQiw0QkFBNEIsY0FBYyxxQ0FBcUMsb0VBQW9FLG1CQUFtQiwyQ0FBMkMsNkJBQTZCLCtDQUErQyxHQUFHLHFEQUFxRCxxREFBcUQsWUFBWSxVQUFVO0FBQ2hhLDhDQUE4QyxpREFBaUQsS0FBSywyQ0FBMkMsa0NBQWtDLHNCQUFzQixzQ0FBc0Msc0JBQXNCLCtDQUErQyxLQUFLLDhCQUE4Qix1Q0FBdUMsZ0JBQWdCLHNCQUFzQiw4QkFBOEIsVUFBVSxtQ0FBbUMsS0FBSyxnQ0FBZ0MseUNBQXlDLG1EQUFtRCw4RUFBOEU7QUFDNXJCLDhDQUE4Qyw4QkFBOEIsS0FBSyx3QkFBd0IscUNBQXFDLGtEQUFrRCxtQkFBbUIsdUJBQXVCLCtCQUErQixVQUFVLFdBQVcsV0FBVyxzQkFBc0Isb0NBQW9DLHlEQUF5RCw2REFBNkQsNkRBQTZELEtBQUssa0NBQWtDLDJDQUEyQyxrQkFBa0IsNkJBQTZCLFlBQVksb0NBQW9DLFdBQVcscUZBQXFGLFFBQVEsb0JBQW9CLEtBQUssYUFBYSxzQ0FBc0Msb0JBQW9CO0FBQy80QjtBQUNBLDZEQUE2RCw2QkFBNkIsY0FBYywrQ0FBK0MsZ0NBQWdDLG9CQUFvQiwrREFBK0QsUUFBUSxZQUFZLHlCQUF5QixLQUFLLG9DQUFvQyw2Q0FBNkMsaUNBQWlDLHVEQUF1RCxZQUFZLHlCQUF5QixLQUFLLG9DQUFvQyw2Q0FBNkMsc0NBQXNDLDZCQUE2Qiw4QkFBOEI7QUFDanNCLG9EOzs7Ozs7Ozs7OztBQ2hCQSwwQkFBMEIsYUFBYSxPQUFPLGdCQUFnQixzQkFBc0IsU0FBUywrQkFBK0IsNEJBQTRCLGtDQUFrQyxTQUFTLCtCQUErQixjQUFjLEdBQUcsU0FBUyxZQUFZLG9CQUFvQix3QkFBd0IsZ0JBQWdCLFNBQVMsTUFBTSxZQUFZLGNBQWMsS0FBSyxpQkFBaUIsWUFBWSxZQUFZLFlBQVksV0FBVyxLQUFLLHNCQUFzQixlQUFlLFNBQVMsTUFBTSxVQUFVLE9BQU8sS0FBSyx3Q0FBd0MsWUFBWSxVQUFVLHFDQUFxQyxlQUFlLFdBQVcsT0FBTyxTQUFTLGdDQUFnQyxtQkFBbUIsZ0NBQWdDLGdFQUFnRSxFQUFFLDJDQUEyQyxxQkFBcUIsc0JBQXNCLDREQUE0RCw4Q0FBOEMsY0FBYyxtQkFBbUIsZ0NBQWdDLFNBQVMsZ0NBQWdDLFNBQVMsb0JBQW9CLFlBQVksWUFBWSxXQUFXLElBQUksc0NBQXNDLFFBQVEsUUFBUSxpQkFBaUIsaUJBQWlCLHVCQUF1QixTQUFTLEtBQUssZ0NBQWdDLEc7Ozs7Ozs7Ozs7Ozs7O0FDQTl5QztBQUNrRztBQUNsRyw4QkFBOEIseUZBQTJCO0FBQ3pEO0FBQ0Esa0RBQWtELG1CQUFtQixLQUFLLFdBQVcsMkJBQTJCLGtEQUFrRCxLQUFLLDRCQUE0Qix5QkFBeUIscUJBQXFCLGlDQUFpQyxLQUFLLGdDQUFnQyxnQ0FBZ0MsS0FBSyxtQkFBbUIsZ0NBQWdDLDBCQUEwQixnQ0FBZ0MsMkJBQTJCLGtDQUFrQyxrQ0FBa0Msa0NBQWtDLGtDQUFrQyxLQUFLLG1CQUFtQiwrQkFBK0IsNEJBQTRCLDJCQUEyQix5QkFBeUIsS0FBSyw0QkFBNEIsb0JBQW9CLDRCQUE0Qiw0QkFBNEIsMkJBQTJCLHFDQUFxQyxLQUFLLGVBQWUscUJBQXFCLDBCQUEwQiwyQkFBMkIsS0FBSyxtQkFBbUIsZ0NBQWdDLHFCQUFxQixLQUFLLDJCQUEyQix1QkFBdUIsc0JBQXNCLEtBQUssMEJBQTBCLHVCQUF1QixzQkFBc0IseUJBQXlCLEtBQUssa0JBQWtCLDJCQUEyQix5QkFBeUIsZ0NBQWdDLEtBQUssb0JBQW9CLDJCQUEyQix5QkFBeUIsK0JBQStCLG9CQUFvQixLQUFLLHlCQUF5QixxQ0FBcUMsb0JBQW9CLDZCQUE2QixxQkFBcUIsS0FBSyxXQUFXLGtGQUFrRixVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsa0NBQWtDLG1CQUFtQixLQUFLLFdBQVcsMkJBQTJCLGtEQUFrRCxLQUFLLDRCQUE0Qix5QkFBeUIscUJBQXFCLGlDQUFpQyxLQUFLLGdDQUFnQyxnQ0FBZ0MsS0FBSyxtQkFBbUIsZ0NBQWdDLDBCQUEwQiwyQkFBMkIsa0NBQWtDLGtDQUFrQywwQkFBMEIsS0FBSyxtQkFBbUIsK0JBQStCLDRCQUE0QiwyQkFBMkIseUJBQXlCLEtBQUssNEJBQTRCLG9CQUFvQiw0QkFBNEIsNEJBQTRCLDJCQUEyQixxQ0FBcUMsS0FBSyxlQUFlLHFCQUFxQiwwQkFBMEIsMkJBQTJCLEtBQUssbUJBQW1CLGdDQUFnQyxxQkFBcUIsS0FBSywyQkFBMkIsdUJBQXVCLHNCQUFzQixLQUFLLDBCQUEwQix1QkFBdUIsc0JBQXNCLHlCQUF5QixLQUFLLGtCQUFrQiwyQkFBMkIseUJBQXlCLGdDQUFnQyxLQUFLLG9CQUFvQiwyQkFBMkIseUJBQXlCLCtCQUErQixvQkFBb0IsS0FBSyx5QkFBeUIscUNBQXFDLG9CQUFvQiw2QkFBNkIscUJBQXFCLEtBQUssdUJBQXVCO0FBQy82SDtBQUNBLCtEQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOdkM7QUFDa0c7QUFDTztBQUM1QjtBQUNYO0FBQ2E7QUFDTDtBQUMxRSw4QkFBOEIseUZBQTJCO0FBQ3pELHlDQUF5Qyw0RkFBK0IsQ0FBQyxnRUFBNkI7QUFDdEcseUNBQXlDLDRGQUErQixDQUFDLHFEQUE2QjtBQUN0Ryx5Q0FBeUMsNEZBQStCLENBQUMsa0VBQTZCO0FBQ3RHLHlDQUF5Qyw0RkFBK0IsQ0FBQyw2REFBNkI7QUFDdEc7QUFDQSxzREFBc0QseUJBQXlCLDBCQUEwQixzQkFBc0IsS0FBSyxzQkFBc0Isc0JBQXNCLDBFQUEwRSxxQ0FBcUMsK0JBQStCLHlCQUF5QiwwQkFBMEIscUJBQXFCLHNCQUFzQixLQUFLLHlCQUF5QixxQkFBcUIsc0JBQXNCLEtBQUsseUJBQXlCLHFCQUFxQixzQkFBc0IsS0FBSyx5QkFBeUIsc0JBQXNCLEtBQUsseUJBQXlCLHNCQUFzQixLQUFLLHlCQUF5QixzQkFBc0IsS0FBSyx5QkFBeUIsc0JBQXNCLEtBQUssaUJBQWlCLHFCQUFxQixvQkFBb0IsMkJBQTJCLCtCQUErQixxQkFBcUIscUNBQXFDLCtCQUErQixLQUFLLHVCQUF1Qix1REFBdUQsMEVBQTBFLEtBQUsseUJBQXlCLDBCQUEwQixxQkFBcUIsMEVBQTBFLEtBQUssc0JBQXNCLDBFQUEwRSwwQkFBMEIscUJBQXFCLEtBQUssdUJBQXVCLDBFQUEwRSwwQkFBMEIscUJBQXFCLEtBQUsseUJBQXlCLHFCQUFxQixLQUFLLDBCQUEwQixxQkFBcUIsMEJBQTBCLEtBQUsscUJBQXFCLCtCQUErQiwwQkFBMEIscUJBQXFCLDJCQUEyQixLQUFLLG9CQUFvQix5QkFBeUIsS0FBSyxvQkFBb0IsMEJBQTBCLEtBQUssb0JBQW9CLDBCQUEwQixLQUFLLG9CQUFvQiwyQkFBMkIsNEJBQTRCLEtBQUssZ0JBQWdCLDBCQUEwQiw0QkFBNEIsNEJBQTRCLG9CQUFvQixvQkFBb0IsS0FBSyx3QkFBd0IsMEJBQTBCLDRCQUE0QiwyQkFBMkIsd0JBQXdCLDJCQUEyQixLQUFLLHNCQUFzQiwwQkFBMEIsNEJBQTRCLEtBQUssc0JBQXNCLDBCQUEwQiw0QkFBNEIsMEJBQTBCLDBCQUEwQixLQUFLLDBCQUEwQiwwQkFBMEIsNEJBQTRCLGlDQUFpQywrQkFBK0IsMEJBQTBCLG9CQUFvQixvQkFBb0IsS0FBSyxXQUFXLHdGQUF3RixZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLG1CQUFtQixhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLHFDQUFxQyx5QkFBeUIsMEJBQTBCLHNCQUFzQixLQUFLLHNCQUFzQixzQkFBc0Isa0VBQWtFLHFDQUFxQywrQkFBK0IseUJBQXlCLDBCQUEwQixxQkFBcUIsc0JBQXNCLEtBQUsseUJBQXlCLHFCQUFxQixzQkFBc0IsS0FBSyx5QkFBeUIscUJBQXFCLHNCQUFzQixLQUFLLHlCQUF5QixzQkFBc0IsS0FBSyx5QkFBeUIsc0JBQXNCLEtBQUsseUJBQXlCLHNCQUFzQixLQUFLLHlCQUF5QixzQkFBc0IsS0FBSyxpQkFBaUIscUJBQXFCLG9CQUFvQiwyQkFBMkIsK0JBQStCLHFCQUFxQixxQ0FBcUMsK0JBQStCLEtBQUssdUJBQXVCLHVEQUF1RCx1REFBdUQsS0FBSyx5QkFBeUIsMEJBQTBCLHFCQUFxQixvRUFBb0UsS0FBSyxzQkFBc0Isb0VBQW9FLDBCQUEwQixxQkFBcUIsS0FBSyx1QkFBdUIsK0RBQStELDBCQUEwQixxQkFBcUIsS0FBSyx5QkFBeUIscUJBQXFCLEtBQUssMEJBQTBCLHFCQUFxQiwwQkFBMEIsS0FBSyxxQkFBcUIsK0JBQStCLDBCQUEwQixxQkFBcUIsMkJBQTJCLEtBQUssb0JBQW9CLHlCQUF5QixLQUFLLG9CQUFvQiwwQkFBMEIsS0FBSyxvQkFBb0IsMEJBQTBCLEtBQUssb0JBQW9CLDJCQUEyQiw0QkFBNEIsS0FBSyxnQkFBZ0IsMEJBQTBCLDRCQUE0Qiw0QkFBNEIsb0JBQW9CLG9CQUFvQixLQUFLLHdCQUF3QiwwQkFBMEIsNEJBQTRCLDJCQUEyQix3QkFBd0IsMkJBQTJCLEtBQUssc0JBQXNCLDBCQUEwQiw0QkFBNEIsS0FBSyxzQkFBc0IsMEJBQTBCLDRCQUE0QiwwQkFBMEIsMEJBQTBCLEtBQUssMEJBQTBCLDBCQUEwQiw0QkFBNEIsaUNBQWlDLCtCQUErQiwwQkFBMEIsb0JBQW9CLG9CQUFvQixLQUFLLHVCQUF1QjtBQUNqcE47QUFDQSwrREFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmdkM7QUFDa0c7QUFDTztBQUN2QztBQUNPO0FBQ1A7QUFDYTtBQUNQO0FBQ087QUFDL0UsOEJBQThCLHlGQUEyQjtBQUN6RCx5Q0FBeUMsNEZBQStCLENBQUMscURBQTZCO0FBQ3RHLHlDQUF5Qyw0RkFBK0IsQ0FBQyw0REFBNkI7QUFDdEcseUNBQXlDLDRGQUErQixDQUFDLHFEQUE2QjtBQUN0Ryx5Q0FBeUMsNEZBQStCLENBQUMsa0VBQTZCO0FBQ3RHLHlDQUF5Qyw0RkFBK0IsQ0FBQywyREFBNkI7QUFDdEcseUNBQXlDLDRGQUErQixDQUFDLGtFQUE2QjtBQUN0RztBQUNBLGlEQUFpRCxtQ0FBbUMsb0RBQW9ELGdEQUFnRCx3RUFBd0UseUVBQXlFLG9DQUFvQyw4QkFBOEIsd0NBQXdDLDRDQUE0Qyw4QkFBOEIsMENBQTBDLDBDQUEwQyxrQ0FBa0MsS0FBSyx1QkFBdUIsc0RBQXNELEtBQUssbUJBQW1CLHFCQUFxQixLQUFLLDBCQUEwQixxQkFBcUIsS0FBSyxtQkFBbUIsbUJBQW1CLG9CQUFvQiwyQkFBMkIsNEJBQTRCLEtBQUssZ0JBQWdCLG9CQUFvQixLQUFLLGlCQUFpQiw2Q0FBNkMsNEJBQTRCLEtBQUssa0JBQWtCLDBFQUEwRSwrQkFBK0IsS0FBSyxlQUFlLDREQUE0RCx1Q0FBdUMsZ0RBQWdELGtDQUFrQyw0QkFBNEIsS0FBSyxjQUFjLCtCQUErQix5QkFBeUIsMkJBQTJCLGtEQUFrRCw4QkFBOEIsdUJBQXVCLEtBQUssaUJBQWlCLDREQUE0RCx1Q0FBdUMsMEJBQTBCLGdEQUFnRCxrQ0FBa0MsNEJBQTRCLEtBQUssMkJBQTJCLHdDQUF3QyxzQ0FBc0Msb0NBQW9DLDJCQUEyQiw0QkFBNEIsNERBQTRELGtDQUFrQywrQkFBK0IsUUFBUSxvQ0FBb0MsNERBQTRELHFCQUFxQixLQUFLLDhCQUE4Qiw0QkFBNEIsc0JBQXNCLCtCQUErQixvQ0FBb0MsMkJBQTJCLEtBQUssb0JBQW9CLDZDQUE2QywwRUFBMEUsa0NBQWtDLDRCQUE0QixxQ0FBcUMsMEJBQTBCLDRCQUE0Qiw2QkFBNkIsMkJBQTJCLDBCQUEwQiwyQkFBMkIsNEJBQTRCLDBCQUEwQixLQUFLLHNCQUFzQiwyQkFBMkIsUUFBUSxzQkFBc0IsMkJBQTJCLFNBQVMsb0JBQW9CLHVFQUF1RSwyQkFBMkIsNEJBQTRCLDRCQUE0QixxQkFBcUIsb0VBQW9FLG9CQUFvQix1RUFBdUUsaUNBQWlDLDJCQUEyQixLQUFLLDBCQUEwQixxREFBcUQsS0FBSywyQkFBMkIsaUVBQWlFLHFCQUFxQixLQUFLLDJCQUEyQixvRUFBb0Usd0JBQXdCLEtBQUssaUNBQWlDLDZDQUE2QywyQkFBMkIsNERBQTRELHdCQUF3QiwyQkFBMkIsS0FBSyxnQ0FBZ0MsbURBQW1ELDRCQUE0QixnREFBZ0QsMkJBQTJCLG9DQUFvQywwQkFBMEIsMkJBQTJCLEtBQUssK0JBQStCLGdIQUFnSCwrQkFBK0Isc0RBQXNELDJCQUEyQixLQUFLLHVCQUF1Qiw4REFBOEQsdUJBQXVCLG1CQUFtQiw2QkFBNkIsMkJBQTJCLG1DQUFtQywrQkFBK0IsNEJBQTRCLEtBQUsseUJBQXlCLHFFQUFxRSxLQUFLLHlCQUF5QiwrREFBK0QsS0FBSyxlQUFlLHVCQUF1Qix5QkFBeUIsS0FBSywrQkFBK0IsK0RBQStELDJCQUEyQiwrQkFBK0Isb0JBQW9CLDRCQUE0QiwyQkFBMkIsS0FBSyw4QkFBOEIsOERBQThELDJCQUEyQiwrQkFBK0Isb0JBQW9CLDRCQUE0QiwyQkFBMkIsS0FBSyxZQUFZLG9CQUFvQixLQUFLLDRCQUE0QiwwREFBMEQsaUNBQWlDLCtCQUErQixzQkFBc0IsK0JBQStCLG9DQUFvQyxLQUFLLGNBQWMsNEJBQTRCLDBCQUEwQixnREFBZ0QsS0FBSyw2QkFBNkIsbURBQW1ELDJCQUEyQiwwQ0FBMEMsS0FBSywwQkFBMEIsMEVBQTBFLCtCQUErQixrQ0FBa0MsZ0NBQWdDLHFCQUFxQiwyQkFBMkIsS0FBSyx1QkFBdUIsbURBQW1ELDBFQUEwRSwrQkFBK0Isa0NBQWtDLHFCQUFxQiwyQkFBMkIsS0FBSywyQkFBMkIsd0NBQXdDLHlDQUF5QywwRUFBMEUsK0JBQStCLEtBQUssNEJBQTRCLHdDQUF3Qyx5Q0FBeUMsMEVBQTBFLCtCQUErQixLQUFLLDhCQUE4Qix3Q0FBd0MseUNBQXlDLDBFQUEwRSwrQkFBK0IsS0FBSywrQkFBK0Isd0NBQXdDLHlDQUF5QywwRUFBMEUsK0JBQStCLEtBQUssbUJBQW1CLHlCQUF5Qiw0QkFBNEIsZ0RBQWdELDREQUE0RCx1Q0FBdUMsMkJBQTJCLDRCQUE0QixLQUFLLDBCQUEwQiwwQkFBMEIsc0JBQXNCLCtCQUErQixvQ0FBb0MseUJBQXlCLEtBQUssaUJBQWlCLHlCQUF5QiwwQkFBMEIsNkNBQTZDLGdEQUFnRCw0REFBNEQsdUNBQXVDLCtCQUErQiw0QkFBNEIsOEJBQThCLEtBQUssd0JBQXdCLG1CQUFtQiw0QkFBNEIsMEJBQTBCLEtBQUssK0JBQStCLHVCQUF1QixLQUFLLHNCQUFzQix3QkFBd0IsNEJBQTRCLG9DQUFvQyxnREFBZ0QsS0FBSyxxQkFBcUIseUJBQXlCLDBCQUEwQiwyQkFBMkIsS0FBSyxjQUFjLHlCQUF5QiwwQkFBMEIsNEJBQTRCLGdEQUFnRCw0REFBNEQsdUNBQXVDLCtCQUErQiw0QkFBNEIsS0FBSyxtQkFBbUIsd0JBQXdCLDRCQUE0QixvQ0FBb0MsZ0RBQWdELEtBQUssd0JBQXdCLDBCQUEwQiw0QkFBNEIsOEJBQThCLDJCQUEyQiw4QkFBOEIsS0FBSyxhQUFhLHlCQUF5QiwwQkFBMEIsMkJBQTJCLEtBQUssbUJBQW1CLGtDQUFrQyx3QkFBd0IsS0FBSyxnQkFBZ0Isc0JBQXNCLEtBQUssa0JBQWtCLG9CQUFvQixLQUFLLHlCQUF5QixnQ0FBZ0MsS0FBSyxrQkFBa0IsbUJBQW1CLEtBQUsseUJBQXlCLCtCQUErQixLQUFLLGtCQUFrQix1Q0FBdUMsS0FBSyxpQkFBaUIseUJBQXlCLDRCQUE0QixzQkFBc0IsNEJBQTRCLEtBQUssc0JBQXNCLDBWQUEwVixrRUFBa0UscUVBQXFFLG1CQUFtQiwyQ0FBMkMsOEdBQThHLG9EQUFvRCxLQUFLLDhCQUE4Qix3QkFBd0IseUJBQXlCLDBCQUEwQixpQkFBaUIsa0JBQWtCLDBDQUEwQyw4R0FBOEcsb0RBQW9ELEtBQUssbUJBQW1CLDBFQUEwRSwrQkFBK0Isc0RBQXNELGlDQUFpQyxrQ0FBa0MsMkJBQTJCLEtBQUssOEJBQThCLHFCQUFxQixLQUFLLDRCQUE0Qiw0QkFBNEIsMkJBQTJCLDRCQUE0Qix5Q0FBeUMseUNBQXlDLG9CQUFvQixLQUFLLHVCQUF1QiwyQkFBMkIsdUJBQXVCLG1CQUFtQiw2QkFBNkIsMkJBQTJCLG1DQUFtQywrQkFBK0IsNEJBQTRCLEtBQUsscUJBQXFCLDBDQUEwQyxLQUFLLHFCQUFxQix1Q0FBdUMsS0FBSyxvQkFBb0IsNERBQTRELHNDQUFzQyxnREFBZ0QsMEJBQTBCLDRCQUE0QiwwQkFBMEIsNkNBQTZDLHdCQUF3QixLQUFLLHdCQUF3Qix5QkFBeUIsS0FBSyxxQkFBcUIsa0VBQWtFLG9DQUFvQyx5QkFBeUIsNEJBQTRCLDBCQUEwQixnREFBZ0QsNEJBQTRCLDREQUE0RCx1Q0FBdUMsMkJBQTJCLDZDQUE2QyxxQkFBcUIsMEJBQTBCLEtBQUsseUJBQXlCLHlCQUF5QiwyQkFBMkIsS0FBSywyQkFBMkIsOEJBQThCLHFCQUFxQixLQUFLLCtCQUErQixxQkFBcUIsS0FBSyxnQ0FBZ0MsMEJBQTBCLHlCQUF5Qix1QkFBdUIsNkRBQTZELG1EQUFtRCw0QkFBNEIsMEJBQTBCLDJCQUEyQixtREFBbUQsMEJBQTBCLEtBQUssbUNBQW1DLGdDQUFnQyxLQUFLLG1DQUFtQyx1QkFBdUIsMEJBQTBCLEtBQUssc0JBQXNCLDBFQUEwRSwrQkFBK0IsOENBQThDLCtCQUErQiwwQkFBMEIsb0NBQW9DLHFDQUFxQywwQkFBMEIsOEJBQThCLEtBQUssOEJBQThCLCtCQUErQix5RUFBeUUsOENBQThDLGtEQUFrRCxxQkFBcUIsb0NBQW9DLCtDQUErQywwQkFBMEIsMEJBQTBCLGdDQUFnQyw0QkFBNEIsS0FBSyxvQ0FBb0Msc0JBQXNCLEtBQUssMkJBQTJCLDZDQUE2QywyQkFBMkIsMEJBQTBCLEtBQUssYUFBYSwwQkFBMEIsc0JBQXNCLCtCQUErQixvQ0FBb0MsMEJBQTBCLDRDQUE0QyxnREFBZ0QsMEJBQTBCLDJCQUEyQixLQUFLLGtCQUFrQixnREFBZ0QsS0FBSyxpQkFBaUIsZ0NBQWdDLHFCQUFxQiwyQkFBMkIsNEJBQTRCLEtBQUsseUJBQXlCLHVCQUF1QixzQkFBc0IsS0FBSyx3QkFBd0IsdUJBQXVCLHNCQUFzQiwwQkFBMEIsMEJBQTBCLEtBQUssZ0JBQWdCLDBCQUEwQiwyQkFBMkIseUJBQXlCLGdDQUFnQyx3QkFBd0IsS0FBSyxrQkFBa0IsMkJBQTJCLHlCQUF5QixvREFBb0Qsb0JBQW9CLEtBQUssdUJBQXVCLHFDQUFxQyxvQkFBb0IsNkJBQTZCLHFCQUFxQixLQUFLLGdCQUFnQiwwQkFBMEIsNkJBQTZCLCtCQUErQiw4QkFBOEIsMEJBQTBCLDRDQUE0Qyw0QkFBNEIsMEJBQTBCLHlCQUF5QiwyQkFBMkIsS0FBSyxhQUFhLGdDQUFnQyxxQkFBcUIsK0JBQStCLHFCQUFxQixLQUFLLE9BQU8seUZBQXlGLHNCQUFzQix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0saUJBQWlCLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssTUFBTSxPQUFPLGFBQWEsYUFBYSxPQUFPLE9BQU8sTUFBTSxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxtQkFBbUIsV0FBVyxZQUFZLGFBQWEsYUFBYSx1QkFBdUIsTUFBTSxtQkFBbUIsYUFBYSxhQUFhLGFBQWEsTUFBTSxtQkFBbUIsV0FBVyxNQUFNLG1CQUFtQixhQUFhLFdBQVcsTUFBTSxtQkFBbUIsYUFBYSxXQUFXLE1BQU0sbUJBQW1CLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLG1CQUFtQixhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sbUJBQW1CLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxtQkFBbUIsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sbUJBQW1CLGFBQWEsTUFBTSxtQkFBbUIsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sbUJBQW1CLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sbUJBQW1CLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLE9BQU8sYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFNBQVMsS0FBSyx3QkFBd0IseUJBQXlCLFdBQVcsVUFBVSx3QkFBd0IsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsd0JBQXdCLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFh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Q0FBQyxnRUFBOEI7QUFDeEcsMENBQTBDLDRGQUErQixDQUFDLGdFQUE4QjtBQUN4RywwQ0FBMEMsNEZBQStCLENBQUMsd0VBQThCO0FBQ3hHLDBDQUEwQyw0RkFBK0IsQ0FBQyxnRUFBOEI7QUFDeEcsMENBQTBDLDRGQUErQixDQUFDLGdFQUE4QjtBQUN4RywwQ0FBMEMsNEZBQStCLENBQUMsZ0VBQThCO0FBQ3hHLDBDQUEwQyw0RkFBK0IsQ0FBQyxnRUFBOEI7QUFDeEcsMENBQTBDLDRGQUErQixDQUFDLGdFQUE4QjtBQUN4RywwQ0FBMEMsNEZBQStCLENBQUMsZ0VBQThCO0FBQ3hHLDBDQUEwQyw0RkFBK0IsQ0FBQyxnRUFBOEI7QUFDeEcsMENBQTBDLDRGQUErQixDQUFDLGdFQUE4QjtBQUN4RywwQ0FBMEMsNEZBQStCLENBQUMsZ0VBQThCO0FBQ3hHLDBDQUEwQyw0RkFBK0IsQ0FBQyxnRUFBOEI7QUFDeEcsMENBQTBDLDRGQUErQixDQUFDLGdFQUE4QjtBQUN4RywwQ0FBMEMsNEZBQStCLENBQUMsZ0VBQThCO0FBQ3hHLDBDQUEwQyw0RkFBK0IsQ0FBQyxnRUFBOEI7QUFDeEcsMENBQTBDLDRGQUErQixDQUFDLGdFQUE4QjtBQUN4RywwQ0FBMEMsNEZBQStCLENBQUMsZ0VBQThCO0FBQ3hHLDBDQUEwQyw0RkFBK0IsQ0FBQyxnRUFBOEI7QUFDeEcsMENBQTBDLDRGQUErQixDQUFDLGdFQUE4QjtBQUN4RywwQ0FBMEMsNEZBQStCLENBQUMsZ0VBQThCO0FBQ3hHLDBDQUEwQyw0RkFBK0IsQ0FBQyxnRUFBOEI7QUFDeEcsMENBQTBDLDRGQUErQixDQUFDLGdFQUE4QjtBQUN4RywwQ0FBMEMsNEZBQStCLENBQUMsZ0VBQThCO0FBQ3hHLDBDQUEwQyw0RkFBK0IsQ0FBQyxnRUFBOEI7QUFDeEcsMENBQTBDLDRGQUErQixDQUFDLGdFQUE4QjtBQUN4RywwQ0FBMEMsNEZBQStCLENBQUMsZ0VBQThCO0FBQ3hHLDBDQUEwQyw0RkFBK0IsQ0FBQyxnRUFBOEI7QUFDeEcsMENBQTBDLDRGQUErQixDQUFD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QVksTUFBTSxZQUFZLHlCQUF5QiwwQkFBMEIsTUFBTSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxZQUFZLE1BQU0sVUFBVSxZQUFZLE1BQU0sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxVQUFVLEtBQUssVUFB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QUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1QixnRUFBZ0UsRTs7Ozs7Ozs7Ozs7O0FDQXRHLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1QixnRUFBZ0UsRTs7Ozs7Ozs7Ozs7O0FDQXRHLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3REFBd0QsRTs7Ozs7Ozs7Ozs7O0FDQTlGLCtEQUFlLHFCQUF1Qix3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QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIQUEwSDtBQUMxSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1FQUFtRTs7QUFFbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLGNBQWM7QUFDekIsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxjQUFjO0FBQ2QsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNsckNhOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNELEVBQUUsdUpBQXNFO0FBQ3hFIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IEFtcFN0YXRlQ29udGV4dDogUmVhY3QuQ29udGV4dDxhbnk+ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSlcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgQW1wU3RhdGVDb250ZXh0LmRpc3BsYXlOYW1lID0gJ0FtcFN0YXRlQ29udGV4dCdcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFtcFN0YXRlQ29udGV4dCB9IGZyb20gJy4vYW1wLWNvbnRleHQnXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0luQW1wTW9kZSh7XG4gIGFtcEZpcnN0ID0gZmFsc2UsXG4gIGh5YnJpZCA9IGZhbHNlLFxuICBoYXNRdWVyeSA9IGZhbHNlLFxufSA9IHt9KTogYm9vbGVhbiB7XG4gIHJldHVybiBhbXBGaXJzdCB8fCAoaHlicmlkICYmIGhhc1F1ZXJ5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQW1wKCk6IGJvb2xlYW4ge1xuICAvLyBEb24ndCBhc3NpZ24gdGhlIGNvbnRleHQgdmFsdWUgdG8gYSB2YXJpYWJsZSB0byBzYXZlIGJ5dGVzXG4gIHJldHVybiBpc0luQW1wTW9kZShSZWFjdC51c2VDb250ZXh0KEFtcFN0YXRlQ29udGV4dCkpXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEVmZmVjdCBmcm9tICcuL3NpZGUtZWZmZWN0J1xuaW1wb3J0IHsgQW1wU3RhdGVDb250ZXh0IH0gZnJvbSAnLi9hbXAtY29udGV4dCdcbmltcG9ydCB7IEhlYWRNYW5hZ2VyQ29udGV4dCB9IGZyb20gJy4vaGVhZC1tYW5hZ2VyLWNvbnRleHQnXG5pbXBvcnQgeyBpc0luQW1wTW9kZSB9IGZyb20gJy4vYW1wJ1xuXG50eXBlIFdpdGhJbkFtcE1vZGUgPSB7XG4gIGluQW1wTW9kZT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRIZWFkKGluQW1wTW9kZSA9IGZhbHNlKTogSlNYLkVsZW1lbnRbXSB7XG4gIGNvbnN0IGhlYWQgPSBbPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5dXG4gIGlmICghaW5BbXBNb2RlKSB7XG4gICAgaGVhZC5wdXNoKDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPilcbiAgfVxuICByZXR1cm4gaGVhZFxufVxuXG5mdW5jdGlvbiBvbmx5UmVhY3RFbGVtZW50KFxuICBsaXN0OiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4sXG4gIGNoaWxkOiBSZWFjdC5SZWFjdENoaWxkXG4pOiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4ge1xuICAvLyBSZWFjdCBjaGlsZHJlbiBjYW4gYmUgXCJzdHJpbmdcIiBvciBcIm51bWJlclwiIGluIHRoaXMgY2FzZSB3ZSBpZ25vcmUgdGhlbSBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgY2hpbGQgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGxpc3RcbiAgfVxuICAvLyBBZGRzIHN1cHBvcnQgZm9yIFJlYWN0LkZyYWdtZW50XG4gIGlmIChjaGlsZC50eXBlID09PSBSZWFjdC5GcmFnbWVudCkge1xuICAgIHJldHVybiBsaXN0LmNvbmNhdChcbiAgICAgIFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGQucHJvcHMuY2hpbGRyZW4pLnJlZHVjZShcbiAgICAgICAgKFxuICAgICAgICAgIGZyYWdtZW50TGlzdDogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+LFxuICAgICAgICAgIGZyYWdtZW50Q2hpbGQ6IFJlYWN0LlJlYWN0Q2hpbGRcbiAgICAgICAgKTogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+ID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgZnJhZ21lbnRDaGlsZCA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgICAgIHR5cGVvZiBmcmFnbWVudENoaWxkID09PSAnbnVtYmVyJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGZyYWdtZW50TGlzdFxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZnJhZ21lbnRMaXN0LmNvbmNhdChmcmFnbWVudENoaWxkKVxuICAgICAgICB9LFxuICAgICAgICBbXVxuICAgICAgKVxuICAgIClcbiAgfVxuICByZXR1cm4gbGlzdC5jb25jYXQoY2hpbGQpXG59XG5cbmNvbnN0IE1FVEFUWVBFUyA9IFsnbmFtZScsICdodHRwRXF1aXYnLCAnY2hhclNldCcsICdpdGVtUHJvcCddXG5cbi8qXG4gcmV0dXJucyBhIGZ1bmN0aW9uIGZvciBmaWx0ZXJpbmcgaGVhZCBjaGlsZCBlbGVtZW50c1xuIHdoaWNoIHNob3VsZG4ndCBiZSBkdXBsaWNhdGVkLCBsaWtlIDx0aXRsZS8+XG4gQWxzbyBhZGRzIHN1cHBvcnQgZm9yIGRlZHVwbGljYXRlZCBga2V5YCBwcm9wZXJ0aWVzXG4qL1xuZnVuY3Rpb24gdW5pcXVlKCkge1xuICBjb25zdCBrZXlzID0gbmV3IFNldCgpXG4gIGNvbnN0IHRhZ3MgPSBuZXcgU2V0KClcbiAgY29uc3QgbWV0YVR5cGVzID0gbmV3IFNldCgpXG4gIGNvbnN0IG1ldGFDYXRlZ29yaWVzOiB7IFttZXRhdHlwZTogc3RyaW5nXTogU2V0PHN0cmluZz4gfSA9IHt9XG5cbiAgcmV0dXJuIChoOiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PikgPT4ge1xuICAgIGxldCBpc1VuaXF1ZSA9IHRydWVcbiAgICBsZXQgaGFzS2V5ID0gZmFsc2VcblxuICAgIGlmIChoLmtleSAmJiB0eXBlb2YgaC5rZXkgIT09ICdudW1iZXInICYmIGgua2V5LmluZGV4T2YoJyQnKSA+IDApIHtcbiAgICAgIGhhc0tleSA9IHRydWVcbiAgICAgIGNvbnN0IGtleSA9IGgua2V5LnNsaWNlKGgua2V5LmluZGV4T2YoJyQnKSArIDEpXG4gICAgICBpZiAoa2V5cy5oYXMoa2V5KSkge1xuICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrZXlzLmFkZChrZXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlZmF1bHQtY2FzZVxuICAgIHN3aXRjaCAoaC50eXBlKSB7XG4gICAgICBjYXNlICd0aXRsZSc6XG4gICAgICBjYXNlICdiYXNlJzpcbiAgICAgICAgaWYgKHRhZ3MuaGFzKGgudHlwZSkpIHtcbiAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFncy5hZGQoaC50eXBlKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdtZXRhJzpcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IE1FVEFUWVBFUy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGNvbnN0IG1ldGF0eXBlID0gTUVUQVRZUEVTW2ldXG4gICAgICAgICAgaWYgKCFoLnByb3BzLmhhc093blByb3BlcnR5KG1ldGF0eXBlKSkgY29udGludWVcblxuICAgICAgICAgIGlmIChtZXRhdHlwZSA9PT0gJ2NoYXJTZXQnKSB7XG4gICAgICAgICAgICBpZiAobWV0YVR5cGVzLmhhcyhtZXRhdHlwZSkpIHtcbiAgICAgICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWV0YVR5cGVzLmFkZChtZXRhdHlwZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBoLnByb3BzW21ldGF0eXBlXVxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IG1ldGFDYXRlZ29yaWVzW21ldGF0eXBlXSB8fCBuZXcgU2V0KClcbiAgICAgICAgICAgIGlmICgobWV0YXR5cGUgIT09ICduYW1lJyB8fCAhaGFzS2V5KSAmJiBjYXRlZ29yaWVzLmhhcyhjYXRlZ29yeSkpIHtcbiAgICAgICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2F0ZWdvcmllcy5hZGQoY2F0ZWdvcnkpXG4gICAgICAgICAgICAgIG1ldGFDYXRlZ29yaWVzW21ldGF0eXBlXSA9IGNhdGVnb3JpZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNVbmlxdWVcbiAgfVxufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gaGVhZEVsZW1lbnRzIExpc3Qgb2YgbXVsdGlwbGUgPEhlYWQ+IGluc3RhbmNlc1xuICovXG5mdW5jdGlvbiByZWR1Y2VDb21wb25lbnRzKFxuICBoZWFkRWxlbWVudHM6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PixcbiAgcHJvcHM6IFdpdGhJbkFtcE1vZGVcbikge1xuICByZXR1cm4gaGVhZEVsZW1lbnRzXG4gICAgLnJlZHVjZShcbiAgICAgIChsaXN0OiBSZWFjdC5SZWFjdENoaWxkW10sIGhlYWRFbGVtZW50OiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PikgPT4ge1xuICAgICAgICBjb25zdCBoZWFkRWxlbWVudENoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShcbiAgICAgICAgICBoZWFkRWxlbWVudC5wcm9wcy5jaGlsZHJlblxuICAgICAgICApXG4gICAgICAgIHJldHVybiBsaXN0LmNvbmNhdChoZWFkRWxlbWVudENoaWxkcmVuKVxuICAgICAgfSxcbiAgICAgIFtdXG4gICAgKVxuICAgIC5yZWR1Y2Uob25seVJlYWN0RWxlbWVudCwgW10pXG4gICAgLnJldmVyc2UoKVxuICAgIC5jb25jYXQoZGVmYXVsdEhlYWQocHJvcHMuaW5BbXBNb2RlKSlcbiAgICAuZmlsdGVyKHVuaXF1ZSgpKVxuICAgIC5yZXZlcnNlKClcbiAgICAubWFwKChjOiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PiwgaTogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBjLmtleSB8fCBpXG4gICAgICBpZiAoXG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnICYmXG4gICAgICAgIHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UUyAmJlxuICAgICAgICAhcHJvcHMuaW5BbXBNb2RlXG4gICAgICApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGMudHlwZSA9PT0gJ2xpbmsnICYmXG4gICAgICAgICAgYy5wcm9wc1snaHJlZiddICYmXG4gICAgICAgICAgLy8gVE9ETyhwcmF0ZWVrYmhAKTogUmVwbGFjZSB0aGlzIHdpdGggY29uc3QgZnJvbSBgY29uc3RhbnRzYCB3aGVuIHRoZSB0cmVlIHNoYWtpbmcgd29ya3MuXG4gICAgICAgICAgW1xuICAgICAgICAgICAgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzJyxcbiAgICAgICAgICAgICdodHRwczovL3VzZS50eXBla2l0Lm5ldC8nLFxuICAgICAgICAgIF0uc29tZSgodXJsKSA9PiBjLnByb3BzWydocmVmJ10uc3RhcnRzV2l0aCh1cmwpKVxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHsgLi4uKGMucHJvcHMgfHwge30pIH1cbiAgICAgICAgICBuZXdQcm9wc1snZGF0YS1ocmVmJ10gPSBuZXdQcm9wc1snaHJlZiddXG4gICAgICAgICAgbmV3UHJvcHNbJ2hyZWYnXSA9IHVuZGVmaW5lZFxuXG4gICAgICAgICAgLy8gQWRkIHRoaXMgYXR0cmlidXRlIHRvIG1ha2UgaXQgZWFzeSB0byBpZGVudGlmeSBvcHRpbWl6ZWQgdGFnc1xuICAgICAgICAgIG5ld1Byb3BzWydkYXRhLW9wdGltaXplZC1mb250cyddID0gdHJ1ZVxuXG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjLCBuZXdQcm9wcylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjLCB7IGtleSB9KVxuICAgIH0pXG59XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgaW5qZWN0cyBlbGVtZW50cyB0byBgPGhlYWQ+YCBvZiB5b3VyIHBhZ2UuXG4gKiBUbyBhdm9pZCBkdXBsaWNhdGVkIGB0YWdzYCBpbiBgPGhlYWQ+YCB5b3UgY2FuIHVzZSB0aGUgYGtleWAgcHJvcGVydHksIHdoaWNoIHdpbGwgbWFrZSBzdXJlIGV2ZXJ5IHRhZyBpcyBvbmx5IHJlbmRlcmVkIG9uY2UuXG4gKi9cbmZ1bmN0aW9uIEhlYWQoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xuICBjb25zdCBhbXBTdGF0ZSA9IHVzZUNvbnRleHQoQW1wU3RhdGVDb250ZXh0KVxuICBjb25zdCBoZWFkTWFuYWdlciA9IHVzZUNvbnRleHQoSGVhZE1hbmFnZXJDb250ZXh0KVxuICByZXR1cm4gKFxuICAgIDxFZmZlY3RcbiAgICAgIHJlZHVjZUNvbXBvbmVudHNUb1N0YXRlPXtyZWR1Y2VDb21wb25lbnRzfVxuICAgICAgaGVhZE1hbmFnZXI9e2hlYWRNYW5hZ2VyfVxuICAgICAgaW5BbXBNb2RlPXtpc0luQW1wTW9kZShhbXBTdGF0ZSl9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRWZmZWN0PlxuICApXG59XG5cbi8vIFRPRE86IFJlbW92ZSBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlXG5IZWFkLnJld2luZCA9ICgpID0+IHt9XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuXG50eXBlIFN0YXRlID0gSlNYLkVsZW1lbnRbXSB8IHVuZGVmaW5lZFxuXG50eXBlIFNpZGVFZmZlY3RQcm9wcyA9IHtcbiAgcmVkdWNlQ29tcG9uZW50c1RvU3RhdGU6IDxUPihcbiAgICBjb21wb25lbnRzOiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4sXG4gICAgcHJvcHM6IFRcbiAgKSA9PiBTdGF0ZVxuICBoYW5kbGVTdGF0ZUNoYW5nZT86IChzdGF0ZTogU3RhdGUpID0+IHZvaWRcbiAgaGVhZE1hbmFnZXI6IGFueVxuICBpbkFtcE1vZGU/OiBib29sZWFuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50PFNpZGVFZmZlY3RQcm9wcz4ge1xuICBwcml2YXRlIF9oYXNIZWFkTWFuYWdlcjogYm9vbGVhblxuXG4gIGVtaXRDaGFuZ2UgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMuX2hhc0hlYWRNYW5hZ2VyKSB7XG4gICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLnVwZGF0ZUhlYWQoXG4gICAgICAgIHRoaXMucHJvcHMucmVkdWNlQ29tcG9uZW50c1RvU3RhdGUoXG4gICAgICAgICAgWy4uLnRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlc10sXG4gICAgICAgICAgdGhpcy5wcm9wc1xuICAgICAgICApXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuX2hhc0hlYWRNYW5hZ2VyID1cbiAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIgJiYgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzXG5cbiAgICBpZiAoaXNTZXJ2ZXIgJiYgdGhpcy5faGFzSGVhZE1hbmFnZXIpIHtcbiAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5hZGQodGhpcylcbiAgICAgIHRoaXMuZW1pdENoYW5nZSgpXG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLl9oYXNIZWFkTWFuYWdlcikge1xuICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzLmFkZCh0aGlzKVxuICAgIH1cbiAgICB0aGlzLmVtaXRDaGFuZ2UoKVxuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLmVtaXRDaGFuZ2UoKVxuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLl9oYXNIZWFkTWFuYWdlcikge1xuICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzLmRlbGV0ZSh0aGlzKVxuICAgIH1cbiAgICB0aGlzLmVtaXRDaGFuZ2UoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cbiIsImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgJy4vd2kvd29yZGluZm8uY3NzJ1xyXG5pbXBvcnQgJy4vd20vbWFzdGVybWluZC5jc3MnXHJcbmltcG9ydCAnLi9wYi9wcmlzb25icmVhay5jc3MnXHJcbmltcG9ydCAnLi9meWIvZnliLmNzcydcclxuaW1wb3J0ICcuL21vcnBoby9tb3JwaG8uY3NzJ1xyXG5pbXBvcnQgJy4vdG0vdG0uY3NzJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7Q29tcG9uZW50LHBhZ2VQcm9wc30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bGluayBcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4yL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgLyogSSBhZGRlZCBtYXRlcmlhbCBpY29ucyAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy41LjEuc2xpbS5taW4uanNcIiBcclxuICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9wb3BwZXIuanNAMS4xNi4xL2Rpc3QvdW1kL3BvcHBlci5taW4uanNcIiBcclxuICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjIvanMvYm9vdHN0cmFwLm1pbi5qc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgLyogSSBhZGRlZCB3My5jc3MgKi9cclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS93M2Nzcy80L3czLmNzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIC8qIEkgaGF2ZSBteSBvd24gY3NzIGZpbGUgb24gZ2l0aHViIHNvIEkgY2FuIGNoYW5nZSB0aGUgVUkgYnV0IHN0aWxsIGhhdmUgdG8gZGVwbG95aW5nIHRoaXMgYXBwIHRvIHNlZSBjaGFuZ2VzICovXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdGlsZXJ1bm5lci5naXRodWIuaW8vdHJjc3MuY3NzXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgey8qIDxzY3JpcHRcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb3Igc29tZSByZWFzb24gdGhlc2UgZm9udGF3ZXNvbWUgaWNvbnMgYXJlIHNvbWV0aW1pc2ggYWJvdXQgd2hldGhlciB0byBzaG93IHVwIG9yIG5vdC5cclxuICAgICAgICAgICAgICAgICAgICAvLyBJIHN3aXRjaGVkIHRvIG1hdGVyaWFsLWljb25zIGluc3RlYWQuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3JjPVwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tLzc3NTE0ZDI4YWEuanNcIiAvLyBSb2RcclxuICAgICAgICAgICAgICAgICAgICAvLyBzcmM9XCJodHRwczovL2tpdC5mb250YXdlc29tZS5jb20vNDdlN2M1ZmMyMy5qc1wiIC8vIENocmlzdG9waGVyXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tL1RpbGVSdW5uZXIuanNcIiAvLyBDaHJpc3RvcGhlclxyXG4gICAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICA8dGl0bGU+VGlsZSBSdW5uZXI8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3RpbGVUUi5pY29cIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJUaWxlIFJ1bm5lciAtIEZ1biB3aXRoIHdvcmRzXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIlRpbGUgUnVubmVyXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkEgZmV3IHdvcmQgZ2FtZXMgYW5kIGEgd29yZCBsb29rdXAgZmVhdHVyZVwiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCIvdGlsZVRSLnBuZ1wiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGNvbnRlbnQ9XCI0MDBcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjQwMFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PVwiVGlsZSBSdW5uZXIgLSBGdW4gd2l0aCB3b3Jkc1wiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PVwiL3RpbGVUUi5wbmdcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeVwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQSBmZXcgd29yZCBnYW1lcyBhIGFuZCBhIHdvcmQgbG9va3VwIGZlYXR1cmVcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tXCIgLz5cclxuICAgICAgICA8bWVhdCBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJUaWxlIFJ1bm5lclwiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpsb2NhbGVcIiBjb250ZW50PVwiZW5fVVNcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9Lz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL19hcHBcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJwcml2YXRlLW5leHQtcGFnZXMvX2FwcC5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL2Z5Yi5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vZnliLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vZnliLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vbW9ycGhvLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9tb3JwaG8uY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9tb3JwaG8uY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9wcmlzb25icmVhay5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vcHJpc29uYnJlYWsuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9wcmlzb25icmVhay5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL3RtLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi90bS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL3RtLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vd29yZGluZm8uY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL3dvcmRpbmZvLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vd29yZGluZm8uY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9tYXN0ZXJtaW5kLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9tYXN0ZXJtaW5kLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vbWFzdGVybWluZC5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL2dsb2JhbHMuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL2dsb2JhbHMuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9nbG9iYWxzLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtjb25zdCBpc09sZElFPWZ1bmN0aW9uIGlzT2xkSUUoKXtsZXQgbWVtbztyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKXtpZih0eXBlb2YgbWVtbz09PSd1bmRlZmluZWQnKXsvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4vLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbm1lbW89Qm9vbGVhbih3aW5kb3cmJmRvY3VtZW50JiZkb2N1bWVudC5hbGwmJiF3aW5kb3cuYXRvYik7fXJldHVybiBtZW1vO307fSgpO2NvbnN0IGdldFRhcmdldD1mdW5jdGlvbiBnZXRUYXJnZXQoKXtjb25zdCBtZW1vPXt9O3JldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpe2lmKHR5cGVvZiBtZW1vW3RhcmdldF09PT0ndW5kZWZpbmVkJyl7bGV0IHN0eWxlVGFyZ2V0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuaWYod2luZG93LkhUTUxJRnJhbWVFbGVtZW50JiZzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCl7dHJ5ey8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4vLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuc3R5bGVUYXJnZXQ9c3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7fWNhdGNoKGUpey8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5zdHlsZVRhcmdldD1udWxsO319bWVtb1t0YXJnZXRdPXN0eWxlVGFyZ2V0O31yZXR1cm4gbWVtb1t0YXJnZXRdO307fSgpO2NvbnN0IHN0eWxlc0luRG9tPVtdO2Z1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpe2xldCByZXN1bHQ9LTE7Zm9yKGxldCBpPTA7aTxzdHlsZXNJbkRvbS5sZW5ndGg7aSsrKXtpZihzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyPT09aWRlbnRpZmllcil7cmVzdWx0PWk7YnJlYWs7fX1yZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCxvcHRpb25zKXtjb25zdCBpZENvdW50TWFwPXt9O2NvbnN0IGlkZW50aWZpZXJzPVtdO2ZvcihsZXQgaT0wO2k8bGlzdC5sZW5ndGg7aSsrKXtjb25zdCBpdGVtPWxpc3RbaV07Y29uc3QgaWQ9b3B0aW9ucy5iYXNlP2l0ZW1bMF0rb3B0aW9ucy5iYXNlOml0ZW1bMF07Y29uc3QgY291bnQ9aWRDb3VudE1hcFtpZF18fDA7Y29uc3QgaWRlbnRpZmllcj1pZCsnICcrY291bnQudG9TdHJpbmcoKTtpZENvdW50TWFwW2lkXT1jb3VudCsxO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2NvbnN0IG9iaj17Y3NzOml0ZW1bMV0sbWVkaWE6aXRlbVsyXSxzb3VyY2VNYXA6aXRlbVszXX07aWYoaW5kZXghPT0tMSl7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO31lbHNle3N0eWxlc0luRG9tLnB1c2goe2lkZW50aWZpZXI6aWRlbnRpZmllcix1cGRhdGVyOmFkZFN0eWxlKG9iaixvcHRpb25zKSxyZWZlcmVuY2VzOjF9KTt9aWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTt9cmV0dXJuIGlkZW50aWZpZXJzO31mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyl7Y29uc3Qgc3R5bGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtjb25zdCBhdHRyaWJ1dGVzPW9wdGlvbnMuYXR0cmlidXRlc3x8e307aWYodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2U9PT0ndW5kZWZpbmVkJyl7Y29uc3Qgbm9uY2U9Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG50eXBlb2YgX193ZWJwYWNrX25vbmNlX18hPT0ndW5kZWZpbmVkJz9fX3dlYnBhY2tfbm9uY2VfXzpudWxsO2lmKG5vbmNlKXthdHRyaWJ1dGVzLm5vbmNlPW5vbmNlO319T2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbihrZXkpe3N0eWxlLnNldEF0dHJpYnV0ZShrZXksYXR0cmlidXRlc1trZXldKTt9KTtpZih0eXBlb2Ygb3B0aW9ucy5pbnNlcnQ9PT0nZnVuY3Rpb24nKXtvcHRpb25zLmluc2VydChzdHlsZSk7fWVsc2V7Y29uc3QgdGFyZ2V0PWdldFRhcmdldChvcHRpb25zLmluc2VydHx8J2hlYWQnKTtpZighdGFyZ2V0KXt0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO310YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO31yZXR1cm4gc3R5bGU7fWZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSl7Ly8gaXN0YW5idWwgaWdub3JlIGlmXG5pZihzdHlsZS5wYXJlbnROb2RlPT09bnVsbCl7cmV0dXJuIGZhbHNlO31zdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTt9LyogaXN0YW5idWwgaWdub3JlIG5leHQgICovY29uc3QgcmVwbGFjZVRleHQ9ZnVuY3Rpb24gcmVwbGFjZVRleHQoKXtjb25zdCB0ZXh0U3RvcmU9W107cmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgscmVwbGFjZW1lbnQpe3RleHRTdG9yZVtpbmRleF09cmVwbGFjZW1lbnQ7cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7fTt9KCk7ZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSxpbmRleCxyZW1vdmUsb2JqKXtjb25zdCBjc3M9cmVtb3ZlPycnOm9iai5tZWRpYT8nQG1lZGlhICcrb2JqLm1lZGlhKycgeycrb2JqLmNzcysnfSc6b2JqLmNzczsvLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PXJlcGxhY2VUZXh0KGluZGV4LGNzcyk7fWVsc2V7Y29uc3QgY3NzTm9kZT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO2NvbnN0IGNoaWxkTm9kZXM9c3R5bGUuY2hpbGROb2RlcztpZihjaGlsZE5vZGVzW2luZGV4XSl7c3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO31pZihjaGlsZE5vZGVzLmxlbmd0aCl7c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsY2hpbGROb2Rlc1tpbmRleF0pO31lbHNle3N0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO319fWZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsb3B0aW9ucyxvYmope2xldCBjc3M9b2JqLmNzcztjb25zdCBtZWRpYT1vYmoubWVkaWE7Y29uc3Qgc291cmNlTWFwPW9iai5zb3VyY2VNYXA7aWYobWVkaWEpe3N0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLG1lZGlhKTt9ZWxzZXtzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7fWlmKHNvdXJjZU1hcCYmdHlwZW9mIGJ0b2EhPT0ndW5kZWZpbmVkJyl7Y3NzKz0nXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnK2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkrJyAqLyc7fS8vIEZvciBvbGQgSUVcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9pZihzdHlsZS5zdHlsZVNoZWV0KXtzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQ9Y3NzO31lbHNle3doaWxlKHN0eWxlLmZpcnN0Q2hpbGQpe3N0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO31zdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTt9fWxldCBzaW5nbGV0b249bnVsbDtsZXQgc2luZ2xldG9uQ291bnRlcj0wO2Z1bmN0aW9uIGFkZFN0eWxlKG9iaixvcHRpb25zKXtsZXQgc3R5bGU7bGV0IHVwZGF0ZTtsZXQgcmVtb3ZlO2lmKG9wdGlvbnMuc2luZ2xldG9uKXtjb25zdCBzdHlsZUluZGV4PXNpbmdsZXRvbkNvdW50ZXIrKztzdHlsZT1zaW5nbGV0b258fChzaW5nbGV0b249aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTt1cGRhdGU9YXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsc3R5bGUsc3R5bGVJbmRleCxmYWxzZSk7cmVtb3ZlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsdHJ1ZSk7fWVsc2V7c3R5bGU9aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO3VwZGF0ZT1hcHBseVRvVGFnLmJpbmQobnVsbCxzdHlsZSxvcHRpb25zKTtyZW1vdmU9ZnVuY3Rpb24oKXtyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO307fXVwZGF0ZShvYmopO3JldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmope2lmKG5ld09iail7aWYobmV3T2JqLmNzcz09PW9iai5jc3MmJm5ld09iai5tZWRpYT09PW9iai5tZWRpYSYmbmV3T2JqLnNvdXJjZU1hcD09PW9iai5zb3VyY2VNYXApe3JldHVybjt9dXBkYXRlKG9iaj1uZXdPYmopO31lbHNle3JlbW92ZSgpO319O31tb2R1bGUuZXhwb3J0cz1mdW5jdGlvbihsaXN0LG9wdGlvbnMpe29wdGlvbnM9b3B0aW9uc3x8e307Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5pZighb3B0aW9ucy5zaW5nbGV0b24mJnR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiE9PSdib29sZWFuJyl7b3B0aW9ucy5zaW5nbGV0b249aXNPbGRJRSgpO31saXN0PWxpc3R8fFtdO2xldCBsYXN0SWRlbnRpZmllcnM9bW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyk7cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KXtuZXdMaXN0PW5ld0xpc3R8fFtdO2lmKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSE9PSdbb2JqZWN0IEFycmF5XScpe3JldHVybjt9Zm9yKGxldCBpPTA7aTxsYXN0SWRlbnRpZmllcnMubGVuZ3RoO2krKyl7Y29uc3QgaWRlbnRpZmllcj1sYXN0SWRlbnRpZmllcnNbaV07Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTt9Y29uc3QgbmV3TGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShuZXdMaXN0LG9wdGlvbnMpO2ZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2lmKHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzPT09MCl7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIoKTtzdHlsZXNJbkRvbS5zcGxpY2UoaW5kZXgsMSk7fX1sYXN0SWRlbnRpZmllcnM9bmV3TGFzdElkZW50aWZpZXJzO307fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBuPXs3NjI6ZnVuY3Rpb24obil7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3ZhciB0PVtdO3QudG9TdHJpbmc9ZnVuY3Rpb24gdG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odCl7dmFyIHI9Y3NzV2l0aE1hcHBpbmdUb1N0cmluZyh0LG4pO2lmKHRbMl0pe3JldHVyblwiQG1lZGlhIFwiLmNvbmNhdCh0WzJdLFwiIHtcIikuY29uY2F0KHIsXCJ9XCIpfXJldHVybiByfSkuam9pbihcIlwiKX07dC5pPWZ1bmN0aW9uKG4scixvKXtpZih0eXBlb2Ygbj09PVwic3RyaW5nXCIpe249W1tudWxsLG4sXCJcIl1dfXZhciBlPXt9O2lmKG8pe2Zvcih2YXIgYT0wO2E8dGhpcy5sZW5ndGg7YSsrKXt2YXIgYz10aGlzW2FdWzBdO2lmKGMhPW51bGwpe2VbY109dHJ1ZX19fWZvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgdT1bXS5jb25jYXQobltpXSk7aWYobyYmZVt1WzBdXSl7Y29udGludWV9aWYocil7aWYoIXVbMl0pe3VbMl09cn1lbHNle3VbMl09XCJcIi5jb25jYXQocixcIiBhbmQgXCIpLmNvbmNhdCh1WzJdKX19dC5wdXNoKHUpfX07cmV0dXJuIHR9O2Z1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcobix0KXt2YXIgcj1uWzFdfHxcIlwiO3ZhciBvPW5bM107aWYoIW8pe3JldHVybiByfWlmKHQmJnR5cGVvZiBidG9hPT09XCJmdW5jdGlvblwiKXt2YXIgZT10b0NvbW1lbnQobyk7dmFyIGE9by5zb3VyY2VzLm1hcChmdW5jdGlvbihuKXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KG8uc291cmNlUm9vdHx8XCJcIikuY29uY2F0KG4sXCIgKi9cIil9KTtyZXR1cm5bcl0uY29uY2F0KGEpLmNvbmNhdChbZV0pLmpvaW4oXCJcXG5cIil9cmV0dXJuW3JdLmpvaW4oXCJcXG5cIil9ZnVuY3Rpb24gdG9Db21tZW50KG4pe3ZhciB0PWJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KG4pKSkpO3ZhciByPVwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KHQpO3JldHVyblwiLyojIFwiLmNvbmNhdChyLFwiICovXCIpfX19O3ZhciB0PXt9O2Z1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18ocil7aWYodFtyXSl7cmV0dXJuIHRbcl0uZXhwb3J0c312YXIgbz10W3JdPXtleHBvcnRzOnt9fTt2YXIgZT10cnVlO3RyeXtuW3JdKG8sby5leHBvcnRzLF9fbmNjd3Bja19yZXF1aXJlX18pO2U9ZmFsc2V9ZmluYWxseXtpZihlKWRlbGV0ZSB0W3JdfXJldHVybiBvLmV4cG9ydHN9X19uY2N3cGNrX3JlcXVpcmVfXy5hYj1fX2Rpcm5hbWUrXCIvXCI7cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oNzYyKX0oKTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaGVhcnQge1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG4ubG9uZyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbi5mcnlMZXR0ZXJBY3Rpb25CdXR0b24ge1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcXHJcXG59XFxyXFxuLmZyeUxldHRlckFjdGlvbkJ1dHRvbkljb24ge1xcclxcbiAgICBtYXJnaW46IDVweCAwcHggMHB4IDBweDtcXHJcXG59XFxyXFxuLmZyeUxldHRlckRpdiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgcGFkZGluZzogMnB4IDEwcHggMnB4IDJweDtcXHJcXG4gICAgbWFyZ2luOiAwcHggMHB4IDEwcHggMTBweDtcXHJcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuLmZ5YkZyeUxldHRlciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMHB4IDJweDtcXHJcXG59XFxyXFxuLmZ5YkZyeUxldHRlci5TZWxlY3RlZCB7XFxyXFxuICAgIGNvbG9yOiBibHVlO1xcclxcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xcclxcbiAgICBib3JkZXItd2lkdGg6IHRoaWNrO1xcclxcbiAgICBib3JkZXItY29sb3I6IGJsdWU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxyXFxufVxcclxcbi50aGluQ2hhdCB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgbWF4LWhlaWdodDogNjAwcHg7XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuLnRoaW5DaGF0RnJvbSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi50aGluQ2hhdEZyb206OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCI+XFxcIjtcXHJcXG4gICAgY29sb3I6IHllbGxvdztcXHJcXG59XFxyXFxuLnRoaW5DaGF0RnJvbTo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiOlxcXCI7XFxyXFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxufVxcclxcbi50aGluQ2hhdE1zZyB7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgY29sb3I6d2hpdGVzbW9rZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbi50aGluQ2hhdElucHV0IHtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBjb2xvcjp3aGl0ZXNtb2tlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLnRoaW5DaGF0SW5wdXRFbXB0eSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtYmxvY2stc2l6ZTogMzBweDtcXHJcXG4gICAgY3Vyc29yOiB0ZXh0O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vcGFnZXMvZnliL2Z5Yi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix5Q0FBeUM7QUFDN0M7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUFpQjtZQUFqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlYXJ0IHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuLmxvbmcge1xcclxcbiAgICBmb250LXNpemU6IHgtc21hbGw7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG4uZnJ5TGV0dGVyQWN0aW9uQnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XFxyXFxufVxcclxcbi5mcnlMZXR0ZXJBY3Rpb25CdXR0b25JY29uIHtcXHJcXG4gICAgbWFyZ2luOiA1cHggMHB4IDBweCAwcHg7XFxyXFxufVxcclxcbi5mcnlMZXR0ZXJEaXYge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgcGFkZGluZzogMnB4IDEwcHggMnB4IDJweDtcXHJcXG4gICAgbWFyZ2luOiAwcHggMHB4IDEwcHggMTBweDtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcbi5meWJGcnlMZXR0ZXIge1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAycHg7XFxyXFxufVxcclxcbi5meWJGcnlMZXR0ZXIuU2VsZWN0ZWQge1xcclxcbiAgICBjb2xvcjogYmx1ZTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiB0aGljaztcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiBibHVlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG4udGhpbkNoYXQge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcbi50aGluQ2hhdEZyb20ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4udGhpbkNoYXRGcm9tOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiPlxcXCI7XFxyXFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxyXFxufVxcclxcbi50aGluQ2hhdEZyb206OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcIjpcXFwiO1xcclxcbiAgICBjb2xvcjogeWVsbG93O1xcclxcbiAgICBmb250LXNpemU6IHNtYWxsO1xcclxcbn1cXHJcXG4udGhpbkNoYXRNc2cge1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGNvbG9yOndoaXRlc21va2U7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG4udGhpbkNoYXRJbnB1dCB7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgY29sb3I6d2hpdGVzbW9rZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi50aGluQ2hhdElucHV0RW1wdHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LWJsb2NrLXNpemU6IDMwcHg7XFxyXFxuICAgIGN1cnNvcjogdGV4dDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uLy4uL3B1YmxpYy9Nb3JwaG9CdXR0ZXJmbHkucG5nXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gZnJvbSBcIi4uLy4uL3B1YmxpYy90aWxlLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fIGZyb20gXCIuLi8uLi9wdWJsaWMvTW9ycGhvQ2F0ZXJwaWxsYXIucG5nXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gZnJvbSBcIi4uLy4uL3B1YmxpYy9Nb3JwaG9Db2Nvb24ucG5nXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vcnBob0RpdiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG4ubW9ycGhvU29sdmVkRGl2IHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAzNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA1NTBweDtcXHJcXG59XFxyXFxuLm1vcnBob1NvbHZlZERpdi5sMyB7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyODBweDtcXHJcXG59XFxyXFxuLm1vcnBob1NvbHZlZERpdi5sNCB7XFxyXFxuICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAzNTBweDtcXHJcXG59XFxyXFxuLm1vcnBob1NvbHZlZERpdi5sNSB7XFxyXFxuICAgIGhlaWdodDogNDEwcHg7XFxyXFxufVxcclxcbi5tb3JwaG9Tb2x2ZWREaXYubDYge1xcclxcbiAgICBoZWlnaHQ6IDQ4MHB4O1xcclxcbn1cXHJcXG4ubW9ycGhvU29sdmVkRGl2Lmw3IHtcXHJcXG4gICAgaGVpZ2h0OiA1NTBweDtcXHJcXG59XFxyXFxuLm1vcnBob1NvbHZlZERpdi5sOCB7XFxyXFxuICAgIGhlaWdodDogNTYwcHg7XFxyXFxufVxcclxcbi5tb3JwaG9DZWxsIHtcXHJcXG4gICAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgICB3aWR0aDogNzBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcbi5tb3JwaG9DZWxsU3RhdGljIHsgLyogUHJvdmlkZWQgYnkgdGhlIHB1enpsZSAqL1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG59XFxyXFxuLm1vcnBob0NlbGxOb0xldHRlciB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxufVxcclxcbi5tb3JwaG9DZWxsTGFydmEge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG4ubW9ycGhvQ2VsbENvY29vbiB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbi5tb3JwaG9DZWxsU2VsZWN0ZWQge1xcclxcbiAgICBvcGFjaXR5OiA1MCU7XFxyXFxufVxcclxcbi5tb3JwaG9DZWxsQnV0dGVyZmx5IHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuLm1vcnBob0tleWJvYXJkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIHdpZHRoOiAzNTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG4ubW9ycGhvS2V5cm93MSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XFxyXFxufVxcclxcbi5tb3JwaG9LZXlyb3cyIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcbi5tb3JwaG9LZXlyb3czIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIxcHg7XFxyXFxufVxcclxcbi5tb3JwaG9LZXlyb3c0IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcclxcbn1cXHJcXG4ubW9ycGhvS2V5IHtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuICAgIG1hcmdpbjogM3B4O1xcclxcbiAgICB3aWR0aDogMjhweDtcXHJcXG59XFxyXFxuLm1vcnBob0NvcHlkb3duS2V5IHtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcbi5tb3JwaG9Db3B5dXBLZXkge1xcclxcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuLm1vcnBob1N1Ym1pdEtleSB7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcclxcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcbi5tb3JwaG9QdXp6bGVTaXplS2V5IHtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIG1hcmdpbjogM3B4O1xcclxcbiAgICB3aWR0aDogMjhweDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3BhZ2VzL21vcnBoby9tb3JwaG8uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IseURBQXlEO0lBQ3pELDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7QUFDQSxvQkFBb0IsMkJBQTJCO0lBQzNDLGlCQUFpQjtJQUNqQix5REFBOEM7QUFDbEQ7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1oseURBQTJEO0FBQy9EO0FBQ0E7SUFDSSx5REFBMkQ7SUFDM0QsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHlEQUFzRDtJQUN0RCxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubW9ycGhvRGl2IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbi5tb3JwaG9Tb2x2ZWREaXYge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3B1YmxpYy9Nb3JwaG9CdXR0ZXJmbHkucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICB3aWR0aDogMzUwcHg7XFxyXFxuICAgIGhlaWdodDogNTUwcHg7XFxyXFxufVxcclxcbi5tb3JwaG9Tb2x2ZWREaXYubDMge1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGhlaWdodDogMjgwcHg7XFxyXFxufVxcclxcbi5tb3JwaG9Tb2x2ZWREaXYubDQge1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIGhlaWdodDogMzUwcHg7XFxyXFxufVxcclxcbi5tb3JwaG9Tb2x2ZWREaXYubDUge1xcclxcbiAgICBoZWlnaHQ6IDQxMHB4O1xcclxcbn1cXHJcXG4ubW9ycGhvU29sdmVkRGl2Lmw2IHtcXHJcXG4gICAgaGVpZ2h0OiA0ODBweDtcXHJcXG59XFxyXFxuLm1vcnBob1NvbHZlZERpdi5sNyB7XFxyXFxuICAgIGhlaWdodDogNTUwcHg7XFxyXFxufVxcclxcbi5tb3JwaG9Tb2x2ZWREaXYubDgge1xcclxcbiAgICBoZWlnaHQ6IDU2MHB4O1xcclxcbn1cXHJcXG4ubW9ycGhvQ2VsbCB7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgd2lkdGg6IDcwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG4ubW9ycGhvQ2VsbFN0YXRpYyB7IC8qIFByb3ZpZGVkIGJ5IHRoZSBwdXp6bGUgKi9cXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL3RpbGUucG5nJyk7XFxyXFxufVxcclxcbi5tb3JwaG9DZWxsTm9MZXR0ZXIge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3B1YmxpYy9Nb3JwaG9DYXRlcnBpbGxhci5wbmcnKTtcXHJcXG59XFxyXFxuLm1vcnBob0NlbGxMYXJ2YSB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL01vcnBob0NhdGVycGlsbGFyLnBuZycpO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG4ubW9ycGhvQ2VsbENvY29vbiB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL01vcnBob0NvY29vbi5wbmcnKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuLm1vcnBob0NlbGxTZWxlY3RlZCB7XFxyXFxuICAgIG9wYWNpdHk6IDUwJTtcXHJcXG59XFxyXFxuLm1vcnBob0NlbGxCdXR0ZXJmbHkge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4ubW9ycGhvS2V5Ym9hcmQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgd2lkdGg6IDM1MHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcbi5tb3JwaG9LZXlyb3cxIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcXHJcXG59XFxyXFxuLm1vcnBob0tleXJvdzIge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG59XFxyXFxuLm1vcnBob0tleXJvdzMge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjFweDtcXHJcXG59XFxyXFxuLm1vcnBob0tleXJvdzQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XFxyXFxufVxcclxcbi5tb3JwaG9LZXkge1xcclxcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXHJcXG4gICAgbWFyZ2luOiAzcHg7XFxyXFxuICAgIHdpZHRoOiAyOHB4O1xcclxcbn1cXHJcXG4ubW9ycGhvQ29weWRvd25LZXkge1xcclxcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuLm1vcnBob0NvcHl1cEtleSB7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcclxcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG4ubW9ycGhvU3VibWl0S2V5IHtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuLm1vcnBob1B1enpsZVNpemVLZXkge1xcclxcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgbWFyZ2luOiAzcHg7XFxyXFxuICAgIHdpZHRoOiAyOHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vLi4vcHVibGljL1dhbGwuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gZnJvbSBcIi4uLy4uL3B1YmxpYy9wbGF5ZXJ0aXRsZS5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyBmcm9tIFwiLi4vLi4vcHVibGljL3RpbGUucG5nXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gZnJvbSBcIi4uLy4uL3B1YmxpYy9CYXJiZWRXaXJlUm90YXRlZC5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyBmcm9tIFwiLi4vLi4vcHVibGljL0JhcmJlZFdpcmUucG5nXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gZnJvbSBcIi4uLy4uL3B1YmxpYy9wcmlzb25iYXJzLXNxdWFyZS5wbmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgLS1jb21tb25Cb3JkZXJDb2xvdXI6IGdyZXk7LyogcGIgKi9cXHJcXG4gICAgLS1jb21tb25UZXh0QmFja2dyb3VuZENvbG91cjogYmxhY2s7IC8qIHBiICovXFxyXFxuICAgIC0tY29tbW9uVGV4dENvbG91cjogd2hpdGVzbW9rZTsgLyogcGIgKi9cXHJcXG4gICAgLS1jb21tb25IZWFkZXJGb250RmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyAvKiBwYiAqL1xcclxcbiAgICAtLWNvbW1vbkZvbnRGYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmOyAvKiBwYiAqL1xcclxcbiAgICAtLXNxdWFyZVNpZGU6IDQwcHg7XFxyXFxuICAgIC0tY2VsbEJsb2NrU2lkZTogNDBweDtcXHJcXG4gICAgLS1jZWxsQmxvY2tTZWxlY3RlZEhlaWdodDogNDJweDtcXHJcXG4gICAgLS1zZWxlY3RlZENvbG9yOiBoc2woMjA3LCA5MCUsIDU2JSk7XFxyXFxuICAgIC0tbG9iYnlGb250U2l6ZTogMjBweDtcXHJcXG4gICAgLS10aWxlQmFja2dyb3VuZENvbG91cjogb3JhbmdlcmVkO1xcclxcbiAgICAtLXByaXNvbmVyc1RpbGVDb2xvdXI6IHdoaXRlc21va2U7XFxyXFxuICAgIC0tZ3VhcmRzVGlsZUNvbG91cjogYmxhY2s7XFxyXFxufVxcclxcbi5jb21tb25Gb250RmFtaWx5IHsgLyogcGIgKi9cXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkZvbnRGYW1pbHkpO1xcclxcbn1cXHJcXG4udG9wQmFySGVpZ2h0IHtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbn1cXHJcXG4uZXhhbWluZUZvb3RlckhlaWdodCB7XFxyXFxuICAgIGhlaWdodDogOTBweDtcXHJcXG59XFxyXFxuLnRvcEJhckNvcm5lciB7XFxyXFxuICAgIHdpZHRoOiAyMCU7XFxyXFxuICAgIGhlaWdodDogNTAlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcbi5mdWxsV2lkdGgge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLmZvcm1hbGluZm8ge1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tY29tbW9uRm9udEZhbWlseSk7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxufVxcclxcbi5wcmlzb25icmVhayB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcbi5wYkdhbWVpZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbW1vblRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbW1vblRleHRDb2xvdXIpO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMCAwIDNweCAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxufVxcclxcbi5wYnRpdGxlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gICAgZm9udC1zaXplOiAyLjhlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgLyogZm9udC1zdHlsZTogaXRhbGljOyAqL1xcclxcbiAgICBjb2xvcjpibGFjaztcXHJcXG59XFxyXFxuLnBiaG9tZWxpbmsge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21tb25UZXh0QmFja2dyb3VuZENvbG91cik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb21tb25UZXh0Q29sb3VyKTtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG59XFxyXFxuLnBiUGxheWVyT3V0ZXJTZWN0aW9uIHtcXHJcXG4gICAgLyogYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjazsgKi9cXHJcXG4gICAgLyogd2lkdGg6IDM2MHB4OyAqL1xcclxcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uLy4uL3B1YmxpYy9XYWxsLmpwZ1xcXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xcclxcbn1cXHJcXG4vKiAucGJQbGF5ZXJPdXRlclNlY3Rpb246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uLy4uL3B1YmxpYy9Fc2NhcGVlLnBuZ1xcXCIpO1xcclxcbiAgICBvcGFjaXR5OiA3NSU7XFxyXFxufSAqL1xcclxcbi5wYlBsYXllcklubmVyU2VjdGlvbiB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbn1cXHJcXG4ucGJQbGF5ZXJUaXRsZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25Gb250RmFtaWx5KTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNnB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcclxcbn1cXHJcXG4ucGJQbGF5ZXJUaXRsZS5QIHtcXHJcXG4gICAgZm9udC1zaXplOiBpbmhlcml0OyAgIFxcclxcbn1cXHJcXG4ucGJQbGF5ZXJUaXRsZS5HIHtcXHJcXG4gICAgZm9udC1zaXplOiBpbmhlcml0OyAgICBcXHJcXG59XFxyXFxuLnBiU3F1YXJlT3V0ZXIgeyAvKiBUaGluIGJsYWNrIGJvcmRlciBhcm91bmQgZWFjaCBib2FyZCBzcXVhcmUgKi9cXHJcXG4gICAgYm9yZGVyOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xcclxcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICBwYWRkaW5nOiAwcHg7IC8qIFNvIG5vdGhpbmcgYXBwZWFycyBiZXR3ZWVuIHRoZSBzcXVhcmVzIC0ga2VlcCB0aGVtIGZsdXNoICovXFxyXFxufVxcclxcbi5wYlNxdWFyZUlubmVyIHsgLyogQ29tbW9uIGJvYXJkIHNxdWFyZSBwcm9wZXJ0aWVzICovXFxyXFxuICAgIGhlaWdodDogdmFyKC0tc3F1YXJlU2lkZSk7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1zcXVhcmVTaWRlKTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG4ucGJTcXVhcmVJbm5lcjpmb2N1cyB7IC8qIE5vIG91dGxpbmUgd2hlbiBpbiBmb2N1cyAqL1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG4ucGJTcXVhcmVJbm5lci5zdHlsZTEgeyAvKiBBbHRlcm5hdGluZyBzcXVhcmUgc3R5bGUgMSAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG4ucGJTcXVhcmVJbm5lci5zdHlsZTIgeyAvKiBBbHRlcm5hdGluZyBzcXVhcmUgc3R5bGUgMiAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcXHJcXG4gICAgY29sb3I6IGRhcmtncmV5O1xcclxcbn1cXHJcXG4ucGJTcXVhcmVJbm5lci5DZW50ZXJTcXVhcmUgeyAvKiBDZW50cmUgc3F1YXJlICovXFxyXFxuICAgIHBhZGRpbmctdG9wOiAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tbW9uVGV4dEJhY2tncm91bmRDb2xvdXIpO1xcclxcbiAgICBjb2xvcjogY29ybnNpbGs7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG59XFxyXFxuLnBiU3F1YXJlSW5uZXIuRXNjYXBlSGF0Y2ggeyAvKiBFc2NhcGUgaGF0Y2ggc3F1YXJlICovXFxyXFxuICAgIHBhZGRpbmctdG9wOiAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5wYlNxdWFyZUlubmVyLlBsYXllclRpbGUgeyAvKiBQbGF5ZXIgdGlsZSBpbWFnZSBvbiB0aGUgc3F1YXJlICovXFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGVCYWNrZ3JvdW5kQ29sb3VyKTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4ucGJTcXVhcmVUaWxlVGV4dCB7IC8qIFRoZSB0aWxlIHBsYXllZCBvbiB0aGUgYm9hcmQgKi9cXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgIFxcclxcbiAgICBib3R0b206IDNweDtcXHJcXG4gICAgbGVmdDogMTJweDsgXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggIGdyZXk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxyXFxufVxcclxcbi5wYlNxdWFyZVRpbGVUZXh0LlAgeyAvKiBQcmlzb25lcnMgdGlsZSBjb2xvciAqL1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpc29uZXJzVGlsZUNvbG91cik7XFxyXFxufVxcclxcbi5wYlNxdWFyZVRpbGVUZXh0LkcgeyAvKiBHdWFyZHMgdGlsZSBjb2xvciAqL1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3VhcmRzVGlsZUNvbG91cik7XFxyXFxufVxcclxcbi51OjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJ1XFxcIjtcXHJcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG59XFxyXFxuLnBiU3F1YXJlSW5uZXIuUmlnaHRBcnJvdyB7IC8qIFJpZ2h0IGFycm93IHdvcmQgZGlyZWN0aW9uIGluZGljYXRvciAqL1xcclxcbiAgICBwYWRkaW5nOiAwJTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgICBjb2xvcjogY3lhbjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4ucGJTcXVhcmVJbm5lci5Eb3duQXJyb3cgeyAvKiBEb3duIGFycm93IHdvcmQgZGlyZWN0aW9uIGluZGljYXRvciAqL1xcclxcbiAgICBwYWRkaW5nOiAwJTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgICBjb2xvcjogY3lhbjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4ucGJSb3cge1xcclxcbiAgICBwYWRkaW5nOiAwJTtcXHJcXG59XFxyXFxuLnBiQm9hcmRQbHVzVW5kZXJib2FyZCB7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL1dhbGwuanBnJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgKi9cXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG4ucGJCb2FyZCB7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMHB4O1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxufVxcclxcbi5wYkJvYXJkQ29sdW1uSGVhZGVyUm93IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkhlYWRlckZvbnRGYW1pbHkpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG59XFxyXFxuLnBiQm9hcmRDb2x1bW5IZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5wYkJvYXJkUm93SGVhZGVyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkhlYWRlckZvbnRGYW1pbHkpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLnBiQm9hcmRIZWFkZXJUb3BMZWZ0IHtcXHJcXG4gICAgbWluLXdpZHRoOiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgbWluLWhlaWdodDogdmFyKC0tY2VsbEJsb2NrU2lkZSk7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcbi5wYkJvYXJkSGVhZGVyVG9wUmlnaHQge1xcclxcbiAgICBtaW4td2lkdGg6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuLnBiQm9hcmRIZWFkZXJCb3R0b21MZWZ0IHtcXHJcXG4gICAgbWluLXdpZHRoOiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgbWluLWhlaWdodDogdmFyKC0tY2VsbEJsb2NrU2lkZSk7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcbi5wYkJvYXJkSGVhZGVyQm90dG9tUmlnaHQge1xcclxcbiAgICBtaW4td2lkdGg6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuLnBiVW5kZXJib2FyZCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tbW9uVGV4dEJhY2tncm91bmRDb2xvdXIpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29tbW9uVGV4dENvbG91cik7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuLnBiVGlsZUFuZE1vdmVzT3V0ZXIge1xcclxcbiAgICBhbGlnbi1pdGVtczogbGVmdDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xcclxcbn1cXHJcXG4ucGJUaWxlcG9vbCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogM3B4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkIHNvbGlkIG5vbmUgc29saWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tbW9uVGV4dEJhY2tncm91bmRDb2xvdXIpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29tbW9uVGV4dENvbG91cik7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XFxyXFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuLnBiVGlsZXBvb2xEaXZpZGVyIHtcXHJcXG4gICAgd2lkdGg6IDJweDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxufVxcclxcbi5wYlRpbGVwb29sRGl2aWRlcjo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiLlxcXCI7XFxyXFxufVxcclxcbi5wYlRpbGVwb29sVGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDE1MCU7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IGRvdHRlZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbn1cXHJcXG4ucGJUaWxlcG9vbFRpbGUge1xcclxcbiAgICBmb250LXNpemU6IHNtYWxsO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMnB4O1xcclxcbn1cXHJcXG4ucGJNb3ZlcyB7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogM3B4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbW1vblRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbW1vblRleHRDb2xvdXIpO1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IHh4LXNtYWxsO1xcclxcbn1cXHJcXG4ucGJNb3Zlc1RpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNTAlO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xcclxcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBkb3R0ZWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG59XFxyXFxuLnBiTW92ZXNTY3JvbGxhYmxlIHtcXHJcXG4gICAgbWF4LWhlaWdodDogNTUwcHg7XFxyXFxuICAgIC8qIG1heC13aWR0aDogMjUwcHg7ICovXFxyXFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XFxyXFxufVxcclxcbi5wYk1vdmUge1xcclxcbiAgICBmb250LXNpemU6IHNtYWxsO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMnB4O1xcclxcbn1cXHJcXG4ucGJNb3ZlOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFnZW50YTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ucGJNb3ZlLmJ5IHtcXHJcXG4gICAgY29sb3I6IHllbGxvdztcXHJcXG59XFxyXFxuLnBiTW92ZS5TV0FQIHtcXHJcXG4gICAgY29sb3I6IGN5YW47XFxyXFxufVxcclxcbi5wYk1vdmUuU1dBUDo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiU3dhcCB0aWxlc1xcXCI7XFxyXFxufVxcclxcbi5wYk1vdmUuUEFTUyB7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcbi5wYk1vdmUuUEFTUzo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiUGFzcyB0dXJuXFxcIjtcXHJcXG59XFxyXFxuLnBiTW92ZS5QTEFZIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbW1vblRleHRDb2xvdXIpO1xcclxcbn1cXHJcXG4ucGJUaWxlcmFjayB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAycHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcbi5wYlRpbGVyYWNrQXJyb3cge1xcclxcbiAgICAvKlxcclxcbiAgICAgICAgSSBnb3QgdGhpcyBpZGVhIG9ubGluZS5cXHJcXG4gICAgICAgIEl0IGlzIGEgYm94IHdpdGggYSBib3JkZXIsIGJ1dCB0aGUgYm94IGhhcyBubyBoZWlnaHQgb3Igd2lkdGggbGVhdmluZyBqdXN0IGJvcmRlcnMuXFxyXFxuICAgICAgICBXaGVuIHRoZSA0IGJvcmRlcnMgbWVldCAobm8gYm94KSBpdCBpcyBsaWtlIDQgdHJpYW5nbGVzIChpbWFnaW5lIFggKS5cXHJcXG4gICAgICAgIFlvdSBtYWtlIDMgYm9yZGVycyB0cmFuc3BhcmVudCwgbGVhdmluZyBvbmx5IHRoZSB0cmlhbmdsZSB5b3Ugd2FudCB0byBkaXNwbGF5LlxcclxcbiAgICAqL1xcclxcbiAgICBtYXJnaW4tdG9wOiAxM3B4OyAvKiBwdXNoIHRoZSBhcnJvdyBkb3duIHRvIHRoZSBtaWRkbGUgKi9cXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7IC8qIHB1dCBzb21lIHNwYWNlIGJldHdlZW4gdGhlIGFycm93IGFuZCB0aWxlcmFjayAqL1xcclxcbiAgICB3aWR0aDogMDsgXFxyXFxuICAgIGhlaWdodDogMDsgXFxyXFxuICAgIGJvcmRlci10b3A6IDdweCBzb2xpZCB0cmFuc3BhcmVudDsgLyogbGVzcyB0aGFuIDE1cHggaGVyZSBhbmQgbmV4dCBsaW5lIGZvciBhIG1vcmUgc2xlbmRlciBhcnJvdyAqL1xcclxcbiAgICBib3JkZXItYm90dG9tOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7ICAgXFxyXFxuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkIHJnYig0NCwgMjQwLCAzNyk7XFxyXFxufVxcclxcbi5wYlRpbGVyYWNrQXJyb3dJbkZvb3RlciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICAgIGJvcmRlci10b3A6IDdweCBzb2xpZCB0cmFuc3BhcmVudDsgLyogbGVzcyB0aGFuIDE1cHggaGVyZSBhbmQgbmV4dCBsaW5lIGZvciBhIG1vcmUgc2xlbmRlciBhcnJvdyAqL1xcclxcbiAgICBib3JkZXItYm90dG9tOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7ICAgXFxyXFxuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkIHJnYig0NCwgMjQwLCAzNyk7XFxyXFxufVxcclxcbi5wYlRpbGVPblJhY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlQmFja2dyb3VuZENvbG91cik7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1zcXVhcmVTaWRlKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1zcXVhcmVTaWRlKTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4ucGJUaWxlT25SYWNrLlVuc2VsZWN0ZWQge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5wYlRpbGVPblJhY2suU2VsZWN0ZWQge1xcclxcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xcclxcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XFxyXFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcXHJcXG4gICAgbWFyZ2luOiA0cHg7XFxyXFxufVxcclxcbi5wYlRpbGVPblJhY2tUZXh0IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgIFxcclxcbiAgICBib3R0b206IDJweDtcXHJcXG4gICAgbGVmdDogMTFweDsgXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggIGdyZXk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxyXFxufVxcclxcbi5wYlRpbGVPblJhY2suUCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmlzb25lcnNUaWxlQ29sb3VyKTtcXHJcXG59XFxyXFxuLnBiVGlsZU9uUmFjay5HIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWd1YXJkc1RpbGVDb2xvdXIpO1xcclxcbn1cXHJcXG4ucGJSZXNjdWVzTWFkZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbW1vblRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcXHJcXG4gICAgY29sb3I6dmFyKC0tY29tbW9uVGV4dENvbG91cik7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tY29tbW9uRm9udEZhbWlseSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuLnBiQWN0aW9uQnV0dG9uRGl2IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcXHJcXG59XFxyXFxuLnBiQWN0aW9uQnV0dG9uIHtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9wdWJsaWMvYWN0aW9uQnV0dG9uLnBuZycpOyAqL1xcclxcbiAgICBwYWRkaW5nOiAycHggMnB4IDJweCAycHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMHB4O1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbW1vblRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbW1vblRleHRDb2xvdXIpO1xcclxcbiAgICBmb250LXN0eWxlOiBib2xkZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25Gb250RmFtaWx5KTtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICB3b3JkLXNwYWNpbmc6IDNweDtcXHJcXG59XFxyXFxuLnBiQWN0aW9uQnV0dG9uVGV4dCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXHJcXG59XFxyXFxuLnBiQWN0aW9uQnV0dG9uU2V2ZXJlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5wYkFjdGlvbkJ1dHRvblNldmVyZVRleHQge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbi5wYkFjdGlvbkJ1dHRvblNldmVyZVRleHQyIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlOyAvKiBUaGlzIG1ha2VzIGl0IGdvIG9uIHRoZSBuZXh0IGxpbmUgKi9cXHJcXG4gICAgbWFyZ2luOiBhdXRvOyAvKiBUaGlzIGlzIHRoZSBvbmx5IHdheSBJIGNvdWxkIGNlbnRyZSBpdCEgKi9cXHJcXG59XFxyXFxuLnBiTG9iYnlSYWNrU2l6ZVByb21wdCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25IZWFkZXJGb250RmFtaWx5KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi5wYkxvYmJ5UmFja1NpemVQcm9tcHQ6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIkNlbGwgQmxvY2tcXFwiO1xcclxcbn1cXHJcXG4ucGJMb2JieVJhY2tTaXplUHJvbXB0OjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCI6XFxcIjtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XFxyXFxufVxcclxcbi5wYkxvYmJ5UmFja1NpemUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgd2lkdGg6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6MjBweDtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4ucGJMb2JieVJhY2tTaXplU2VsZWN0ZWQge1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uLy4uL3B1YmxpYy9wcmlzb25iYXJzLXNxdWFyZS5wbmdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiB2YXIoLS1jZWxsQmxvY2tTaWRlKTsgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0ZWRDb2xvcik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGxCbG9ja1NlbGVjdGVkSGVpZ2h0KTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OjIwcHg7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcclxcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0Z3JleTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG59XFxyXFxuLnBiTG9iYnlSYWNrU2l6ZVNlbGVjdGVkOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuLnBiTG9iYnlDZWxsQmxvY2tJbmZvIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkZvbnRGYW1pbHkpO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbn1cXHJcXG4ucGJDaGF0IHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGxlZnQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZSBzb2xpZCBub25lIHNvbGlkO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcbi5wYkNoYXRUYWJsZSB7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG59XFxyXFxuLnBiQ2hhdEZyb20ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxufVxcclxcbi5wYkNoYXRGcm9tOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiPlxcXCI7XFxyXFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxyXFxufVxcclxcbi5wYkNoYXRGcm9tOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCI6XFxcIjtcXHJcXG4gICAgY29sb3I6IHllbGxvdztcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXB4O1xcclxcbn1cXHJcXG4ucGJDaGF0TXNnIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgY29sb3I6d2hpdGVzbW9rZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIHBhZGRpbmctdG9wOjJweDtcXHJcXG59XFxyXFxuLnBiQ2hhdElucHV0IHtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBjb2xvcjp3aGl0ZXNtb2tlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLnBiQ2hhdElucHV0RW1wdHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LWJsb2NrLXNpemU6IDMwcHg7XFxyXFxuICAgIGN1cnNvcjogdGV4dDtcXHJcXG59XFxyXFxuLnBiU25hdERpdiB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xcclxcbiAgICBkaXNwbGF5OiBkaXNwbGF5LWJveDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcclxcbiAgICBib3JkZXItd2lkdGg6IDVweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lIG5vbmUgc29saWQgc29saWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcbi5wYlNuYXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9wYWdlcy9wYi9wcmlzb25icmVhay5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwwQkFBMEIsQ0FBQyxPQUFPO0lBQ2xDLG1DQUFtQyxFQUFFLE9BQU87SUFDNUMsOEJBQThCLEVBQUUsT0FBTztJQUN2QyxzREFBc0QsRUFBRSxPQUFPO0lBQy9ELHVEQUF1RCxFQUFFLE9BQU87SUFDaEUsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQiwrQkFBK0I7SUFDL0IsbUNBQW1DO0lBQ25DLHFCQUFxQjtJQUNyQixpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLHlCQUF5QjtBQUM3QjtBQUNBLG9CQUFvQixPQUFPO0lBQ3ZCLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHlEQUE4QztJQUM5QyxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLG1EQUFtRDtJQUNuRCw4QkFBOEI7SUFDOUIsdUNBQXVDO0lBQ3ZDLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHlDQUF5QztJQUN6Qyx3QkFBd0I7SUFDeEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxtREFBbUQ7SUFDbkQsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQix1Q0FBdUM7SUFDdkMseUJBQXlCO0lB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LG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyx1Q0FBdUM7SUFDdkMsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksdUNBQXVDO0FBQzNDO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDJDQUEyQztJQUMzQyxXQUFXO0FBQ2Y7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0tY29tbW9uQm9yZGVyQ29sb3VyOiBncmV5Oy8qIHBiICovXFxyXFxuICAgIC0tY29tbW9uVGV4dEJhY2tncm91bmRDb2xvdXI6IGJsYWNrOyAvKiBwYiAqL1xcclxcbiAgICAtLWNvbW1vblRleHRDb2xvdXI6IHdoaXRlc21va2U7IC8qIHBiICovXFxyXFxuICAgIC0tY29tbW9uSGVhZGVyRm9udEZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgLyogcGIgKi9cXHJcXG4gICAgLS1jb21tb25Gb250RmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjsgLyogcGIgKi9cXHJcXG4gICAgLS1zcXVhcmVTaWRlOiA0MHB4O1xcclxcbiAgICAtLWNlbGxCbG9ja1NpZGU6IDQwcHg7XFxyXFxuICAgIC0tY2VsbEJsb2NrU2VsZWN0ZWRIZWlnaHQ6IDQycHg7XFxyXFxuICAgIC0tc2VsZWN0ZWRDb2xvcjogaHNsKDIwNywgOTAlLCA1NiUpO1xcclxcbiAgICAtLWxvYmJ5Rm9udFNpemU6IDIwcHg7XFxyXFxuICAgIC0tdGlsZUJhY2tncm91bmRDb2xvdXI6IG9yYW5nZXJlZDtcXHJcXG4gICAgLS1wcmlzb25lcnNUaWxlQ29sb3VyOiB3aGl0ZXNtb2tlO1xcclxcbiAgICAtLWd1YXJkc1RpbGVDb2xvdXI6IGJsYWNrO1xcclxcbn1cXHJcXG4uY29tbW9uRm9udEZhbWlseSB7IC8qIHBiICovXFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25Gb250RmFtaWx5KTtcXHJcXG59XFxyXFxuLnRvcEJhckhlaWdodCB7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG59XFxyXFxuLmV4YW1pbmVGb290ZXJIZWlnaHQge1xcclxcbiAgICBoZWlnaHQ6IDkwcHg7XFxyXFxufVxcclxcbi50b3BCYXJDb3JuZXIge1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbiAgICBoZWlnaHQ6IDUwJTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG4uZnVsbFdpZHRoIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5mb3JtYWxpbmZvIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkZvbnRGYW1pbHkpO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG4ucHJpc29uYnJlYWsge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uLy4uL3B1YmxpYy9XYWxsLmpwZ1xcXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG4ucGJHYW1laWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21tb25UZXh0QmFja2dyb3VuZENvbG91cik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb21tb25UZXh0Q29sb3VyKTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDAgMCAzcHggM3B4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbn1cXHJcXG4ucGJ0aXRsZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi44ZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICAgIC8qIGZvbnQtc3R5bGU6IGl0YWxpYzsgKi9cXHJcXG4gICAgY29sb3I6YmxhY2s7XFxyXFxufVxcclxcbi5wYmhvbWVsaW5rIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tbW9uVGV4dEJhY2tncm91bmRDb2xvdXIpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29tbW9uVGV4dENvbG91cik7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxufVxcclxcbi5wYlBsYXllck91dGVyU2VjdGlvbiB7XFxyXFxuICAgIC8qIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7ICovXFxyXFxuICAgIC8qIHdpZHRoOiAzNjBweDsgKi9cXHJcXG4gICAgcGFkZGluZy10b3A6IDNweDtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi8uLi9wdWJsaWMvV2FsbC5qcGdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cXHJcXG59XFxyXFxuLyogLnBiUGxheWVyT3V0ZXJTZWN0aW9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi8uLi9wdWJsaWMvRXNjYXBlZS5wbmdcXFwiKTtcXHJcXG4gICAgb3BhY2l0eTogNzUlO1xcclxcbn0gKi9cXHJcXG4ucGJQbGF5ZXJJbm5lclNlY3Rpb24ge1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG59XFxyXFxuLnBiUGxheWVyVGl0bGUge1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tY29tbW9uRm9udEZhbWlseSk7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL3BsYXllcnRpdGxlLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxufVxcclxcbi5wYlBsYXllclRpdGxlLlAge1xcclxcbiAgICBmb250LXNpemU6IGluaGVyaXQ7ICAgXFxyXFxufVxcclxcbi5wYlBsYXllclRpdGxlLkcge1xcclxcbiAgICBmb250LXNpemU6IGluaGVyaXQ7ICAgIFxcclxcbn1cXHJcXG4ucGJTcXVhcmVPdXRlciB7IC8qIFRoaW4gYmxhY2sgYm9yZGVyIGFyb3VuZCBlYWNoIGJvYXJkIHNxdWFyZSAqL1xcclxcbiAgICBib3JkZXI6IHNvbGlkO1xcclxcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XFxyXFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIHBhZGRpbmc6IDBweDsgLyogU28gbm90aGluZyBhcHBlYXJzIGJldHdlZW4gdGhlIHNxdWFyZXMgLSBrZWVwIHRoZW0gZmx1c2ggKi9cXHJcXG59XFxyXFxuLnBiU3F1YXJlSW5uZXIgeyAvKiBDb21tb24gYm9hcmQgc3F1YXJlIHByb3BlcnRpZXMgKi9cXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1zcXVhcmVTaWRlKTtcXHJcXG4gICAgd2lkdGg6IHZhcigtLXNxdWFyZVNpZGUpO1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbi5wYlNxdWFyZUlubmVyOmZvY3VzIHsgLyogTm8gb3V0bGluZSB3aGVuIGluIGZvY3VzICovXFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbi5wYlNxdWFyZUlubmVyLnN0eWxlMSB7IC8qIEFsdGVybmF0aW5nIHNxdWFyZSBzdHlsZSAxICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbi5wYlNxdWFyZUlubmVyLnN0eWxlMiB7IC8qIEFsdGVybmF0aW5nIHNxdWFyZSBzdHlsZSAyICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xcclxcbiAgICBjb2xvcjogZGFya2dyZXk7XFxyXFxufVxcclxcbi5wYlNxdWFyZUlubmVyLkNlbnRlclNxdWFyZSB7IC8qIENlbnRyZSBzcXVhcmUgKi9cXHJcXG4gICAgcGFkZGluZy10b3A6IDNweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21tb25UZXh0QmFja2dyb3VuZENvbG91cik7XFxyXFxuICAgIGNvbG9yOiBjb3Juc2lsaztcXHJcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbn1cXHJcXG4ucGJTcXVhcmVJbm5lci5Fc2NhcGVIYXRjaCB7IC8qIEVzY2FwZSBoYXRjaCBzcXVhcmUgKi9cXHJcXG4gICAgcGFkZGluZy10b3A6IDNweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLnBiU3F1YXJlSW5uZXIuUGxheWVyVGlsZSB7IC8qIFBsYXllciB0aWxlIGltYWdlIG9uIHRoZSBzcXVhcmUgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9wdWJsaWMvdGlsZS5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZUJhY2tncm91bmRDb2xvdXIpO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5wYlNxdWFyZVRpbGVUZXh0IHsgLyogVGhlIHRpbGUgcGxheWVkIG9uIHRoZSBib2FyZCAqL1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgXFxyXFxuICAgIGJvdHRvbTogM3B4O1xcclxcbiAgICBsZWZ0OiAxMnB4OyBcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAgZ3JleTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXHJcXG59XFxyXFxuLnBiU3F1YXJlVGlsZVRleHQuUCB7IC8qIFByaXNvbmVycyB0aWxlIGNvbG9yICovXFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmlzb25lcnNUaWxlQ29sb3VyKTtcXHJcXG59XFxyXFxuLnBiU3F1YXJlVGlsZVRleHQuRyB7IC8qIEd1YXJkcyB0aWxlIGNvbG9yICovXFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ndWFyZHNUaWxlQ29sb3VyKTtcXHJcXG59XFxyXFxuLnU6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcInVcXFwiO1xcclxcbiAgICBmb250LXNpemU6IHNtYWxsO1xcclxcbn1cXHJcXG4ucGJTcXVhcmVJbm5lci5SaWdodEFycm93IHsgLyogUmlnaHQgYXJyb3cgd29yZCBkaXJlY3Rpb24gaW5kaWNhdG9yICovXFxyXFxuICAgIHBhZGRpbmc6IDAlO1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICAgIGNvbG9yOiBjeWFuO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5wYlNxdWFyZUlubmVyLkRvd25BcnJvdyB7IC8qIERvd24gYXJyb3cgd29yZCBkaXJlY3Rpb24gaW5kaWNhdG9yICovXFxyXFxuICAgIHBhZGRpbmc6IDAlO1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICAgIGNvbG9yOiBjeWFuO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5wYlJvdyB7XFxyXFxuICAgIHBhZGRpbmc6IDAlO1xcclxcbn1cXHJcXG4ucGJCb2FyZFBsdXNVbmRlcmJvYXJkIHtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9wdWJsaWMvV2FsbC5qcGcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyAqL1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcbi5wYkJvYXJkIHtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG59XFxyXFxuLnBiQm9hcmRDb2x1bW5IZWFkZXJSb3cge1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tY29tbW9uSGVhZGVyRm9udEZhbWlseSk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbn1cXHJcXG4ucGJCb2FyZENvbHVtbkhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL0JhcmJlZFdpcmVSb3RhdGVkLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5wYkJvYXJkUm93SGVhZGVyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkhlYWRlckZvbnRGYW1pbHkpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3B1YmxpYy9CYXJiZWRXaXJlLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLnBiQm9hcmRIZWFkZXJUb3BMZWZ0IHtcXHJcXG4gICAgbWluLXdpZHRoOiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgbWluLWhlaWdodDogdmFyKC0tY2VsbEJsb2NrU2lkZSk7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL0JhcmJlZFdpcmVSb3RhdGVkLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG4ucGJCb2FyZEhlYWRlclRvcFJpZ2h0IHtcXHJcXG4gICAgbWluLXdpZHRoOiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgbWluLWhlaWdodDogdmFyKC0tY2VsbEJsb2NrU2lkZSk7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL0JhcmJlZFdpcmUucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcbi5wYkJvYXJkSGVhZGVyQm90dG9tTGVmdCB7XFxyXFxuICAgIG1pbi13aWR0aDogdmFyKC0tY2VsbEJsb2NrU2lkZSk7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3B1YmxpYy9CYXJiZWRXaXJlLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG4ucGJCb2FyZEhlYWRlckJvdHRvbVJpZ2h0IHtcXHJcXG4gICAgbWluLXdpZHRoOiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgbWluLWhlaWdodDogdmFyKC0tY2VsbEJsb2NrU2lkZSk7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL0JhcmJlZFdpcmVSb3RhdGVkLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG4ucGJVbmRlcmJvYXJkIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21tb25UZXh0QmFja2dyb3VuZENvbG91cik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb21tb25UZXh0Q29sb3VyKTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG4ucGJUaWxlQW5kTW92ZXNPdXRlciB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIG1heC13aWR0aDogMjUwcHg7XFxyXFxufVxcclxcbi5wYlRpbGVwb29sIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQgc29saWQgbm9uZSBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21tb25UZXh0QmFja2dyb3VuZENvbG91cik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb21tb25UZXh0Q29sb3VyKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXHJcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG4ucGJUaWxlcG9vbERpdmlkZXIge1xcclxcbiAgICB3aWR0aDogMnB4O1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG59XFxyXFxuLnBiVGlsZXBvb2xEaXZpZGVyOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXHJcXG59XFxyXFxuLnBiVGlsZXBvb2xUaXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTUwJTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogZG90dGVkO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxufVxcclxcbi5wYlRpbGVwb29sVGlsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XFxyXFxufVxcclxcbi5wYk1vdmVzIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tbW9uVGV4dEJhY2tncm91bmRDb2xvdXIpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29tbW9uVGV4dENvbG91cik7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XFxyXFxufVxcclxcbi5wYk1vdmVzVGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDE1MCU7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IGRvdHRlZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbn1cXHJcXG4ucGJNb3Zlc1Njcm9sbGFibGUge1xcclxcbiAgICBtYXgtaGVpZ2h0OiA1NTBweDtcXHJcXG4gICAgLyogbWF4LXdpZHRoOiAyNTBweDsgKi9cXHJcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcXHJcXG59XFxyXFxuLnBiTW92ZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XFxyXFxufVxcclxcbi5wYk1vdmU6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYWdlbnRhO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5wYk1vdmUuYnkge1xcclxcbiAgICBjb2xvcjogeWVsbG93O1xcclxcbn1cXHJcXG4ucGJNb3ZlLlNXQVAge1xcclxcbiAgICBjb2xvcjogY3lhbjtcXHJcXG59XFxyXFxuLnBiTW92ZS5TV0FQOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJTd2FwIHRpbGVzXFxcIjtcXHJcXG59XFxyXFxuLnBiTW92ZS5QQVNTIHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuLnBiTW92ZS5QQVNTOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJQYXNzIHR1cm5cXFwiO1xcclxcbn1cXHJcXG4ucGJNb3ZlLlBMQVkge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29tbW9uVGV4dENvbG91cik7XFxyXFxufVxcclxcbi5wYlRpbGVyYWNrIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuLnBiVGlsZXJhY2tBcnJvdyB7XFxyXFxuICAgIC8qXFxyXFxuICAgICAgICBJIGdvdCB0aGlzIGlkZWEgb25saW5lLlxcclxcbiAgICAgICAgSXQgaXMgYSBib3ggd2l0aCBhIGJvcmRlciwgYnV0IHRoZSBib3ggaGFzIG5vIGhlaWdodCBvciB3aWR0aCBsZWF2aW5nIGp1c3QgYm9yZGVycy5cXHJcXG4gICAgICAgIFdoZW4gdGhlIDQgYm9yZGVycyBtZWV0IChubyBib3gpIGl0IGlzIGxpa2UgNCB0cmlhbmdsZXMgKGltYWdpbmUgWCApLlxcclxcbiAgICAgICAgWW91IG1ha2UgMyBib3JkZXJzIHRyYW5zcGFyZW50LCBsZWF2aW5nIG9ubHkgdGhlIHRyaWFuZ2xlIHlvdSB3YW50IHRvIGRpc3BsYXkuXFxyXFxuICAgICovXFxyXFxuICAgIG1hcmdpbi10b3A6IDEzcHg7IC8qIHB1c2ggdGhlIGFycm93IGRvd24gdG8gdGhlIG1pZGRsZSAqL1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDsgLyogcHV0IHNvbWUgc3BhY2UgYmV0d2VlbiB0aGUgYXJyb3cgYW5kIHRpbGVyYWNrICovXFxyXFxuICAgIHdpZHRoOiAwOyBcXHJcXG4gICAgaGVpZ2h0OiAwOyBcXHJcXG4gICAgYm9yZGVyLXRvcDogN3B4IHNvbGlkIHRyYW5zcGFyZW50OyAvKiBsZXNzIHRoYW4gMTVweCBoZXJlIGFuZCBuZXh0IGxpbmUgZm9yIGEgbW9yZSBzbGVuZGVyIGFycm93ICovXFxyXFxuICAgIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCB0cmFuc3BhcmVudDsgICBcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgcmdiKDQ0LCAyNDAsIDM3KTtcXHJcXG59XFxyXFxuLnBiVGlsZXJhY2tBcnJvd0luRm9vdGVyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG4gICAgYm9yZGVyLXRvcDogN3B4IHNvbGlkIHRyYW5zcGFyZW50OyAvKiBsZXNzIHRoYW4gMTVweCBoZXJlIGFuZCBuZXh0IGxpbmUgZm9yIGEgbW9yZSBzbGVuZGVyIGFycm93ICovXFxyXFxuICAgIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCB0cmFuc3BhcmVudDsgICBcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgcmdiKDQ0LCAyNDAsIDM3KTtcXHJcXG59XFxyXFxuLnBiVGlsZU9uUmFjayB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL3RpbGUucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGVCYWNrZ3JvdW5kQ29sb3VyKTtcXHJcXG4gICAgd2lkdGg6IHZhcigtLXNxdWFyZVNpZGUpO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLXNxdWFyZVNpZGUpO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5wYlRpbGVPblJhY2suVW5zZWxlY3RlZCB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLnBiVGlsZU9uUmFjay5TZWxlY3RlZCB7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xcclxcbiAgICBtYXJnaW46IDRweDtcXHJcXG59XFxyXFxuLnBiVGlsZU9uUmFja1RleHQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgXFxyXFxuICAgIGJvdHRvbTogMnB4O1xcclxcbiAgICBsZWZ0OiAxMXB4OyBcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAgZ3JleTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXHJcXG59XFxyXFxuLnBiVGlsZU9uUmFjay5QIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaXNvbmVyc1RpbGVDb2xvdXIpO1xcclxcbn1cXHJcXG4ucGJUaWxlT25SYWNrLkcge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3VhcmRzVGlsZUNvbG91cik7XFxyXFxufVxcclxcbi5wYlJlc2N1ZXNNYWRlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tbW9uVGV4dEJhY2tncm91bmRDb2xvdXIpO1xcclxcbiAgICBjb2xvcjp2YXIoLS1jb21tb25UZXh0Q29sb3VyKTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDNweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25Gb250RmFtaWx5KTtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG4ucGJBY3Rpb25CdXR0b25EaXYge1xcclxcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xcclxcbn1cXHJcXG4ucGJBY3Rpb25CdXR0b24ge1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3B1YmxpYy9hY3Rpb25CdXR0b24ucG5nJyk7ICovXFxyXFxuICAgIHBhZGRpbmc6IDJweCAycHggMnB4IDJweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tbW9uVGV4dEJhY2tncm91bmRDb2xvdXIpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29tbW9uVGV4dENvbG91cik7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGJvbGRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkZvbnRGYW1pbHkpO1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIHdvcmQtc3BhY2luZzogM3B4O1xcclxcbn1cXHJcXG4ucGJBY3Rpb25CdXR0b25UZXh0IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcclxcbn1cXHJcXG4ucGJBY3Rpb25CdXR0b25TZXZlcmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLnBiQWN0aW9uQnV0dG9uU2V2ZXJlVGV4dCB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuLnBiQWN0aW9uQnV0dG9uU2V2ZXJlVGV4dDIge1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG4gICAgZGlzcGxheTogdGFibGU7IC8qIFRoaXMgbWFrZXMgaXQgZ28gb24gdGhlIG5leHQgbGluZSAqL1xcclxcbiAgICBtYXJnaW46IGF1dG87IC8qIFRoaXMgaXMgdGhlIG9ubHkgd2F5IEkgY291bGQgY2VudHJlIGl0ISAqL1xcclxcbn1cXHJcXG4ucGJMb2JieVJhY2tTaXplUHJvbXB0IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkhlYWRlckZvbnRGYW1pbHkpO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuLnBiTG9iYnlSYWNrU2l6ZVByb21wdDpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiQ2VsbCBCbG9ja1xcXCI7XFxyXFxufVxcclxcbi5wYkxvYmJ5UmFja1NpemVQcm9tcHQ6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcIjpcXFwiO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcXHJcXG59XFxyXFxuLnBiTG9iYnlSYWNrU2l6ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vLi4vcHVibGljL3ByaXNvbmJhcnMtc3F1YXJlLnBuZ1xcXCIpO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgd2lkdGg6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6MjBweDtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4ucGJMb2JieVJhY2tTaXplU2VsZWN0ZWQge1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uLy4uL3B1YmxpYy9wcmlzb25iYXJzLXNxdWFyZS5wbmdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiB2YXIoLS1jZWxsQmxvY2tTaWRlKTsgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0ZWRDb2xvcik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGxCbG9ja1NlbGVjdGVkSGVpZ2h0KTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OjIwcHg7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcclxcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0Z3JleTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG59XFxyXFxuLnBiTG9iYnlSYWNrU2l6ZVNlbGVjdGVkOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuLnBiTG9iYnlDZWxsQmxvY2tJbmZvIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkZvbnRGYW1pbHkpO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbn1cXHJcXG4ucGJDaGF0IHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGxlZnQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZSBzb2xpZCBub25lIHNvbGlkO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcbi5wYkNoYXRUYWJsZSB7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG59XFxyXFxuLnBiQ2hhdEZyb20ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxufVxcclxcbi5wYkNoYXRGcm9tOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiPlxcXCI7XFxyXFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxyXFxufVxcclxcbi5wYkNoYXRGcm9tOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCI6XFxcIjtcXHJcXG4gICAgY29sb3I6IHllbGxvdztcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXB4O1xcclxcbn1cXHJcXG4ucGJDaGF0TXNnIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgY29sb3I6d2hpdGVzbW9rZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIHBhZGRpbmctdG9wOjJweDtcXHJcXG59XFxyXFxuLnBiQ2hhdElucHV0IHtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBjb2xvcjp3aGl0ZXNtb2tlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLnBiQ2hhdElucHV0RW1wdHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LWJsb2NrLXNpemU6IDMwcHg7XFxyXFxuICAgIGN1cnNvcjogdGV4dDtcXHJcXG59XFxyXFxuLnBiU25hdERpdiB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xcclxcbiAgICBkaXNwbGF5OiBkaXNwbGF5LWJveDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcclxcbiAgICBib3JkZXItd2lkdGg6IDVweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lIG5vbmUgc29saWQgc29saWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcbi5wYlNuYXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi8uLi9wdWJsaWMvdHJhbnNtb2dyaWZ5LmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50bV9udW1Nb3Zlc0RpdiB7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi50bV9udW1Nb3Zlc1NlbGVjdGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcXHJcXG59XFxyXFxuLnRtX251bU1vdmVzU2VsZWN0ZWQ6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG4udG1fbnVtTW92ZXNVbnNlbGVjdGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcXHJcXG59XFxyXFxuLnRtX251bU1vdmVzVW5zZWxlY3RlZDpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbi50bV9zdGFydFB1enpsZURpdiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi50bV9wdXp6bGVEaXYge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuLnRtX3B1enpsZURpdiBzcGFuOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcbi50bV9wdXp6bGVEaXYgc3BhbjpudGgtY2hpbGQoMSkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gICAgcGFkZGluZzogMHB4IDVweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG59XFxyXFxuLnRtX3B1enpsZURpdiBzcGFuOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG59XFxyXFxuLnRtX3B1enpsZURpdiBzcGFuOm50aC1jaGlsZCgzKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG4udG1fcHV6emxlRGl2IHNwYW46bnRoLWNoaWxkKDYpIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG4udG1fcHV6emxlRGl2IHAge1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxufVxcclxcbi50bV9zb2x1dGlvbk91dGVyRGl2IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG4udG1fc29sdXRpb25EaXYge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtaW4taGVpZ2h0OiAyMjVweDtcXHJcXG4gICAgbWluLXdpZHRoOiAzNzBweDtcXHJcXG59XFxyXFxuLnRtX3NvbHV0aW9uRGl2IHRhYmxlIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG4udG1fc29sdXRpb25EaXYgdGQge1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG4udG1fc29sdXRpb25EaXYgdHI6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwIDAgM3B4ICNGRjAwMDAsIDAgMCA1cHggIzAwMDBGRjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi50bV9uZXh0d29yZCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG59XFxyXFxuLnRtX2Fycm93IHtcXHJcXG4gICAgY29sb3I6IGN5YW47XFxyXFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuLnRtX3NvbHV0aW9uRGl2IHRyOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi50bV9zb2x1dGlvbkRpdiB0cjpsYXN0LWNoaWxkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udG1fQmFja3NwYWNlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG59XFxyXFxuLnRtX0JhY2tzcGFjZTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogJ1xcXFwwMDNDeCc7XFxyXFxufVxcclxcbi50bV9LZXlHb0RpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4udG1fS2V5R28ge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbn1cXHJcXG4udG1fbGFzdGJ1dHRvbnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuLnRtX3F1aXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuLnRtX2NvbmdyYXRzIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiBhcXVhO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcbi50bV9oaW50c2hlYWRlciB7XFxyXFxuICAgIGJvcmRlci10b3A6IDhweCBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkO1xcclxcbiAgICB3aWR0aDogMzcwcHg7XFxyXFxuICAgIGhlaWdodDogNThweDtcXHJcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3BhZ2VzL3RtL3RtLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsOENBQThDO0lBQzlDLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQiw4Q0FBOEM7SUFDOUMsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5REFBc0Q7SUFDdEQsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGFBQWE7SUFDYiw2Q0FBNkM7SUFDN0MsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRtX251bU1vdmVzRGl2IHtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLnRtX251bU1vdmVzU2VsZWN0ZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xcclxcbn1cXHJcXG4udG1fbnVtTW92ZXNTZWxlY3RlZDpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbi50bV9udW1Nb3Zlc1Vuc2VsZWN0ZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xcclxcbn1cXHJcXG4udG1fbnVtTW92ZXNVbnNlbGVjdGVkOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuLnRtX3N0YXJ0UHV6emxlRGl2IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLnRtX3B1enpsZURpdiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG4udG1fcHV6emxlRGl2IHNwYW46bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuLnRtX3B1enpsZURpdiBzcGFuOm50aC1jaGlsZCgxKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG4udG1fcHV6emxlRGl2IHNwYW46bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG4udG1fcHV6emxlRGl2IHNwYW46bnRoLWNoaWxkKDMpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICAgIHBhZGRpbmc6IDBweCA1cHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxufVxcclxcbi50bV9wdXp6bGVEaXYgc3BhbjpudGgtY2hpbGQoNikge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcbi50bV9wdXp6bGVEaXYgcCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuLnRtX3NvbHV0aW9uT3V0ZXJEaXYge1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxufVxcclxcbi50bV9zb2x1dGlvbkRpdiB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL3RyYW5zbW9ncmlmeS5qcGcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWluLWhlaWdodDogMjI1cHg7XFxyXFxuICAgIG1pbi13aWR0aDogMzcwcHg7XFxyXFxufVxcclxcbi50bV9zb2x1dGlvbkRpdiB0YWJsZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG59XFxyXFxuLnRtX3NvbHV0aW9uRGl2IHRkIHtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuLnRtX3NvbHV0aW9uRGl2IHRyOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xcclxcbiAgICBjb2xvcjogeWVsbG93O1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDNweCAjRkYwMDAwLCAwIDAgNXB4ICMwMDAwRkY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4udG1fbmV4dHdvcmQge1xcclxcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxufVxcclxcbi50bV9hcnJvdyB7XFxyXFxuICAgIGNvbG9yOiBjeWFuO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbi50bV9zb2x1dGlvbkRpdiB0cjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4udG1fc29sdXRpb25EaXYgdHI6bGFzdC1jaGlsZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRtX0JhY2tzcGFjZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxufVxcclxcbi50bV9CYWNrc3BhY2U6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICdcXFxcMDAzQ3gnO1xcclxcbn1cXHJcXG4udG1fS2V5R29EaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnRtX0tleUdvIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG59XFxyXFxuLnRtX2xhc3RidXR0b25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxufVxcclxcbi50bV9xdWl0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcbi50bV9jb25ncmF0cyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogYXF1YTtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG4udG1faGludHNoZWFkZXIge1xcclxcbiAgICBib3JkZXItdG9wOiA4cHggc29saWQ7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZDtcXHJcXG4gICAgd2lkdGg6IDM3MHB4O1xcclxcbiAgICBoZWlnaHQ6IDU4cHg7XFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudG9vbHRpcCB7XFxyXFxuICBwb3NpdGlvbjogdG9wO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIHBhZGRpbmc6IDVweCAwO1xcclxcblxcclxcbiAgLyogUG9zaXRpb24gdGhlIHRvb2x0aXAgKi9cXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBib3R0b206IDEwMCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICBtYXJnaW4tbGVmdDogLTYwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcXHJcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxufVxcclxcbi5pbnNlcnRDb3VudCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG4uaW5zZXJ0Q291bnRTcGFjZXIge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcbi5zd2FwQ291bnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxyXFxuICBjb2xvcjogZGFya2JsdWU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgLyogYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBkYXJrZ3JheTtcXHJcXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIGRhcmtncmF5OyAqL1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uYW5hZ3JhbUNvdW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHNsYXRlZ3JheTtcXHJcXG4gIGNvbG9yOiBsaWdodGdyZWVuO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgc2xhdGVncmF5O1xcclxcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgc2xhdGVncmF5O1xcclxcbn1cXHJcXG4uZHJvcFJvdyB7XFxyXFxuICBsaW5lLWhlaWdodDogNXB4O1xcclxcbn1cXHJcXG4uZHJvcEluZGljYXRvciB7XFxyXFxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDJweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAycHg7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG59XFxyXFxuLmJhbGxvb25zdHJpbmcge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7ICBcXHJcXG59XFxyXFxuLmNsb3NlbWUge1xcclxcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG59XFxyXFxuLmNsb3NlbWVidXR0b24ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyY3NzUGFnZUJHKTtcXHJcXG59XFxyXFxuLmNsb3NlbWVidXR0b246OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiAnXFxcXDIyQTAnOyAvKiBYIGluIGEgYm94ICovXFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9wYWdlcy93aS93b3JkaW5mby5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYzs7RUFFZCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQjtxQ0FDbUM7RUFDbkMsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdDQUF3QjtVQUF4Qix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixVQUFVO0VBQ1Ysb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxnQkFBZ0IsRUFBRSxlQUFlO0FBQ25DXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50b29sdGlwIHtcXHJcXG4gIHBvc2l0aW9uOiB0b3A7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICB3aWR0aDogMTIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxuXFxyXFxuICAvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCAqL1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGJvdHRvbTogMTAwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtNjAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG59XFxyXFxuLmluc2VydENvdW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcbi5pbnNlcnRDb3VudFNwYWNlciB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuLnN3YXBDb3VudCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXHJcXG4gIGNvbG9yOiBkYXJrYmx1ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkIGRhcmtncmF5O1xcclxcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgZGFya2dyYXk7ICovXFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5hbmFncmFtQ291bnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xcclxcbiAgY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBzbGF0ZWdyYXk7XFxyXFxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCBzbGF0ZWdyYXk7XFxyXFxufVxcclxcbi5kcm9wUm93IHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA1cHg7XFxyXFxufVxcclxcbi5kcm9wSW5kaWNhdG9yIHtcXHJcXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMnB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDJweDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbn1cXHJcXG4uYmFsbG9vbnN0cmluZyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyAgXFxyXFxufVxcclxcbi5jbG9zZW1lIHtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxufVxcclxcbi5jbG9zZW1lYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmNzc1BhZ2VCRyk7XFxyXFxufVxcclxcbi5jbG9zZW1lYnV0dG9uOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJ1xcXFwyMkEwJzsgLyogWCBpbiBhIGJveCAqL1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLk1hc3Rlcm1pbmQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYyNzFhO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDElO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxJTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDElO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMSU7XFxyXFxufVxcclxcbi53bWhvbWVsaW5rIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE2MjcxYTtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcbi5PdXRlcnRhYmxlIHtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuLkd1ZXNzdGFibGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxN2MwO1xcclxcbn1cXHJcXG4uQWxpZ25DZW50ZXIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5BbGlnbkxlZnQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG4ud21saW5rIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya21hZ2VudGE7XFxyXFxuICAgIGNvbG9yOmN5YW47XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcbi53bWJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxN2MwMjU7XFxyXFxuICAgIGNvbG9yOmF6dXJlO1xcclxcbn1cXHJcXG4ud210aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi44ZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgY29sb3I6ZGFya21hZ2VudGE7XFxyXFxufVxcclxcbi53bWgxIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcclxcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXHJcXG4gICAgY29sb3I6YXp1cmU7XFxyXFxufVxcclxcbi53bWgyIHtcXHJcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbiAgICBjb2xvcjphenVyZTtcXHJcXG59XFxyXFxuLndtaDMge1xcclxcbiAgICBjb2xvcjphenVyZTtcXHJcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbn1cXHJcXG4ud210aCB7XFxyXFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xcclxcbn1cXHJcXG4ud210ZCB7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XFxyXFxuICAgIGNvbG9yOmF6dXJlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxufVxcclxcbi53bXAge1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4ud21sYWJlbCB7XFxyXFxuICAgIGNvbG9yOiBsaWdodGdyZWVuO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9wYWdlcy93bS9tYXN0ZXJtaW5kLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsOENBQThDO0FBQ2xEO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5NYXN0ZXJtaW5kIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE2MjcxYTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxJTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMSU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxJTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDElO1xcclxcbn1cXHJcXG4ud21ob21lbGluayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjI3MWE7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG4uT3V0ZXJ0YWJsZSB7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxufVxcclxcbi5HdWVzc3RhYmxlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTdjMDtcXHJcXG59XFxyXFxuLkFsaWduQ2VudGVyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uQWxpZ25MZWZ0IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuLndtbGluayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmttYWdlbnRhO1xcclxcbiAgICBjb2xvcjpjeWFuO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG4ud21idXR0b24ge1xcclxcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdjMDI1O1xcclxcbiAgICBjb2xvcjphenVyZTtcXHJcXG59XFxyXFxuLndtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDIuOGVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGNvbG9yOmRhcmttYWdlbnRhO1xcclxcbn1cXHJcXG4ud21oMSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxyXFxuICAgIGNvbG9yOmF6dXJlO1xcclxcbn1cXHJcXG4ud21oMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG4gICAgY29sb3I6YXp1cmU7XFxyXFxufVxcclxcbi53bWgzIHtcXHJcXG4gICAgY29sb3I6YXp1cmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG59XFxyXFxuLndtdGgge1xcclxcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcclxcbiAgICBib3JkZXItc3R5bGU6IGdyb292ZTtcXHJcXG59XFxyXFxuLndtdGQge1xcclxcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xcclxcbiAgICBjb2xvcjphenVyZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbn1cXHJcXG4ud21wIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLndtbGFiZWwge1xcclxcbiAgICBjb2xvcjogbGlnaHRncmVlbjtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vcHVibGljL01vcnBob0NhdGVycGlsbGFyLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fIGZyb20gXCIuLi9wdWJsaWMvTW9ycGhvQ29jb29uLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fIGZyb20gXCIuLi9wdWJsaWMvTW9ycGhvQnV0dGVyZmx5LnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0EuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjEvQi5qcGdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92MS9DLmpwZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0QuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjEvRS5qcGdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92MS9GLmpwZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0cuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0guanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzExX19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0kuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0ouanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEzX19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0suanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE0X19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0wuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE1X19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL00uanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE2X19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL04uanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE3X19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL08uanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE4X19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1AuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE5X19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1EuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIwX19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1IuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIxX19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1MuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIyX19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1QuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIzX19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1UuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI0X19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1YuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI1X19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1cuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI2X19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1guanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI3X19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1kuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI4X19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1ouanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI5X19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL2JhY2tzcGFjZS5qcGdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzBfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvQS5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzFfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvQi5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzJfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvQy5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzNfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvRC5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzRfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvRS5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzVfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvRi5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzZfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvRy5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzdfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvSC5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzhfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvSS5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzlfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvSi5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDBfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvSy5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDFfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvTC5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDJfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvTS5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDNfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvTi5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDRfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvTy5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDVfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvUC5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDZfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvUS5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDdfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvUi5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDhfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvUy5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDlfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvVC5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTBfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvVS5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTFfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvVi5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTJfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvVy5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTNfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvWC5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTRfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvWS5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTVfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvWi5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTZfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvQmFja3NwYWNlLnBuZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzExX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEzX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE0X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE1X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE2X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE3X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE4X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE5X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIxX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIzX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI0X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI1X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI2X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI3X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI4X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI5X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMxX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMzX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM0X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM1X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM2X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM3X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM4X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM5X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80MF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80MV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQxX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80Ml9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80M19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQzX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80NF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQ0X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80NV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQ1X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80Nl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQ2X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80N19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQ3X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80OF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQ4X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80OV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQ5X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81MF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzUwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81MV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzUxX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81Ml9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzUyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81M19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzUzX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81NF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzU0X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81NV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzU1X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81Nl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzU2X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0MDQwO1xcbiAgY29sb3I6IGJ1cmx5d29vZDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICAvKiBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sXFxuICAgIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmOyAqL1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLm15SGVhZGluZ0ZvbnQgeyAvKiBwYiAqL1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkhlYWRlckZvbnRGYW1pbHkpO1xcbn1cXG4ubXlDb21tb25Gb250IHsgLyogcGIgKi9cXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25Gb250RmFtaWx5KTtcXG59XFxuLm15bWF0ZXJpYWxpY29uIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5teW1hdGVyaWFsaWNvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgfVxcbi5maXZlcHhkaXZpZGVyIHsgLyogZnliICovXFxuICBsaW5lLWhlaWdodDogNXB4O1xcbn1cXG4uZmxvYXRyaWdodCB7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcbi50ZXh0Y2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRleHRyaWdodCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLmFsaWdudG9wIHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi5lcXVpc3BhY2VkIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcbi5kaXNhYmxlZCB7XFxuICBvcGFjaXR5OiAwLjY7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XFxufVxcbi8qIFJ1bGVzIGZvciB1c2luZyBpY29ucyBhcyB3aGl0ZSBvbiBhIGRhcmsgYmFja2dyb3VuZC4gKi9cXG4ubWF0ZXJpYWwtaWNvbnMubWQtbGlnaHQgeyBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTsgfVxcbi5tYXRlcmlhbC1pY29ucy5tZC1saWdodC5tZC1pbmFjdGl2ZSB7IGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7IH1cXG5cXG4uYXJ0d29ya0RpdiB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xcbiAgd2lkdGg6IDM1MHB4O1xcbn1cXG4ubW92ZUxlZnRCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gIGNvbG9yOiBjeWFuO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBtYXJnaW46IDBweCAxMHB4IDBweCAxMHB4O1xcbn1cXG4ubW92ZVJpZ2h0QnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBjb2xvcjogY3lhbjtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgbWFyZ2luOiAwcHggMTBweCAwcHggMTBweDtcXG59XFxuLmFydHdvcmsxIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMzUwcHg7XFxuICB3aWR0aDogMzUwcHg7XFxufVxcbi5hcnR3b3JrMiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgd2lkdGg6IDM1MHB4O1xcbn1cXG4uYXJ0d29yazMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIHdpZHRoOiAzNTBweDtcXG59XFxuLyogQ3VzdG9tIGtleWJvYXJkcyAqL1xcbi5zd2l0Y2hrYiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi8qIFZlcnNpb24gMSAqL1xcbi5jdXN0b21LZXlib2FyZFYxIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gIHdpZHRoOiAzNzBweDtcXG59XFxuLmNrdjFSb3cxIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4uY2t2MVJvdzIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLmNrdjFSb3czIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5jdXN0b21LZXlib2FyZFYxIHNwYW4ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwcHggMXB4O1xcbiAgcGFkZGluZzogNXB4IDhweDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbi5ja3YxIHtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG59XFxuLmNrdjEuQSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpOyBcXG59XFxuLmNrdjEuQiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpOyBcXG59XFxuLmNrdjEuQyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpOyBcXG59XFxuLmNrdjEuRCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fICsgXCIpOyBcXG59XFxuLmNrdjEuRSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fICsgXCIpOyBcXG59XFxuLmNrdjEuRiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fICsgXCIpOyBcXG59XFxuLmNrdjEuRyB7IFxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyArIFwiKTsgXFxufVxcbi5ja3YxLkgge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gKyBcIik7XFxufVxcbi5ja3YxLkkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX18gKyBcIik7XFxufVxcbi5ja3YxLkoge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTJfX18gKyBcIik7XFxufVxcbi5ja3YxLksge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTNfX18gKyBcIik7XFxufVxcbi5ja3YxLkwge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTRfX18gKyBcIik7XFxufVxcbi5ja3YxLk0ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTVfX18gKyBcIik7IFxcbn1cXG4uY2t2MS5OIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE2X19fICsgXCIpOyBcXG59XFxuLmNrdjEuTyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xN19fXyArIFwiKTsgXFxufVxcbi5ja3YxLlAge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMThfX18gKyBcIik7IFxcbn1cXG4uY2t2MS5RIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE5X19fICsgXCIpO1xcbn1cXG4uY2t2MS5SIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIwX19fICsgXCIpO1xcbn1cXG4uY2t2MS5TIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIxX19fICsgXCIpO1xcbn1cXG4uY2t2MS5UIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIyX19fICsgXCIpO1xcbn1cXG4uY2t2MS5VIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIzX19fICsgXCIpO1xcbn1cXG4uY2t2MS5WIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI0X19fICsgXCIpO1xcbn1cXG4uY2t2MS5XIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI1X19fICsgXCIpO1xcbn1cXG4uY2t2MS5YIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI2X19fICsgXCIpO1xcbn1cXG4uY2t2MS5ZIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI3X19fICsgXCIpO1xcbn1cXG4uY2t2MS5aIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI4X19fICsgXCIpO1xcbn1cXG4uY2t2MS5CYWNrc3BhY2Uge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjlfX18gKyBcIik7XFxufVxcbi5ja3YxV29yZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi8qIFZlcnNpb24gMiAqL1xcbi5jdXN0b21LZXlib2FyZFYyIHtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmNzc1BhZ2VCRyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgd2lkdGg6IDM3MHB4O1xcbn1cXG4uY2t2MlJvdzEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLmNrdjJSb3cyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uY2t2MlJvdzMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5jdXN0b21LZXlib2FyZFYyIHNwYW4ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMHB4IDJweDtcXG4gICAgcGFkZGluZzogNXB4IDhweDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuLyogVmVyc2lvbiAzICovXFxuLmN1c3RvbUtleWJvYXJkVjMge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHggMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgd2lkdGg6IDM3MHB4O1xcbn1cXG4uY2t2M1JvdzEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi5ja3YzUm93MiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uY2t2M1JvdzMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLmN1c3RvbUtleWJvYXJkVjMgc3BhbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDBweCAxcHg7XFxuICBwYWRkaW5nOiA1cHggOHB4O1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuLmNrdjMge1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbn1cXG4uY2t2My5BIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMwX19fICsgXCIpOyBcXG59XFxuLmNrdjMuQiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMV9fXyArIFwiKTsgXFxufVxcbi5ja3YzLkMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzJfX18gKyBcIik7IFxcbn1cXG4uY2t2My5EIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMzX19fICsgXCIpOyBcXG59XFxuLmNrdjMuRSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zNF9fXyArIFwiKTsgXFxufVxcbi5ja3YzLkYge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzVfX18gKyBcIik7IFxcbn1cXG4uY2t2My5HIHsgXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zNl9fXyArIFwiKTsgXFxufVxcbi5ja3YzLkgge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzdfX18gKyBcIik7XFxufVxcbi5ja3YzLkkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzhfX18gKyBcIik7XFxufVxcbi5ja3YzLkoge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzlfX18gKyBcIik7XFxufVxcbi5ja3YzLksge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDBfX18gKyBcIik7XFxufVxcbi5ja3YzLkwge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDFfX18gKyBcIik7XFxufVxcbi5ja3YzLk0ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDJfX18gKyBcIik7IFxcbn1cXG4uY2t2My5OIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQzX19fICsgXCIpOyBcXG59XFxuLmNrdjMuTyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80NF9fXyArIFwiKTsgXFxufVxcbi5ja3YzLlAge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDVfX18gKyBcIik7IFxcbn1cXG4uY2t2My5RIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQ2X19fICsgXCIpO1xcbn1cXG4uY2t2My5SIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQ3X19fICsgXCIpO1xcbn1cXG4uY2t2My5TIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQ4X19fICsgXCIpO1xcbn1cXG4uY2t2My5UIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQ5X19fICsgXCIpO1xcbn1cXG4uY2t2My5VIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzUwX19fICsgXCIpO1xcbn1cXG4uY2t2My5WIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzUxX19fICsgXCIpO1xcbn1cXG4uY2t2My5XIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzUyX19fICsgXCIpO1xcbn1cXG4uY2t2My5YIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzUzX19fICsgXCIpO1xcbn1cXG4uY2t2My5ZIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzU0X19fICsgXCIpO1xcbn1cXG4uY2t2My5aIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzU1X19fICsgXCIpO1xcbn1cXG4uY2t2My5CYWNrc3BhY2Uge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNTZfX18gKyBcIik7XFxufVxcbi5ja3YzV29yZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvZ2xvYmFscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztFQUNUOzJFQUN5RTtBQUMzRTs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw4QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCO0FBQ0EsaUJBQWlCLE9BQU87RUFDdEIsMENBQTBDO0FBQzVDO0FBQ0EsZ0JBQWdCLE9BQU87RUFDckIsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2I7QUFDRixpQkFBaUIsUUFBUTtFQUN2QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osOEJBQThCO0FBQ2hDO0FBQ0EseURBQXlEO0FBQ3pELDJCQUEyQiw2QkFBNkIsRUFBRTtBQUMxRCx1Q0FBdUMsK0JBQStCLEVBQUU7O0FBRXhFO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlEQUF3RDtFQUN4RCw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixZQUFZO0FB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REFBNkQ7QUFDL0Q7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDQwNDA7XFxuICBjb2xvcjogYnVybHl3b29kO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIC8qIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbixcXG4gICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7ICovXFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLm15SGVhZGluZ0ZvbnQgeyAvKiBwYiAqL1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkhlYWRlckZvbnRGYW1pbHkpO1xcbn1cXG4ubXlDb21tb25Gb250IHsgLyogcGIgKi9cXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25Gb250RmFtaWx5KTtcXG59XFxuLm15bWF0ZXJpYWxpY29uIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5teW1hdGVyaWFsaWNvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgfVxcbi5maXZlcHhkaXZpZGVyIHsgLyogZnliICovXFxuICBsaW5lLWhlaWdodDogNXB4O1xcbn1cXG4uZmxvYXRyaWdodCB7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcbi50ZXh0Y2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRleHRyaWdodCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLmFsaWdudG9wIHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi5lcXVpc3BhY2VkIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcbi5kaXNhYmxlZCB7XFxuICBvcGFjaXR5OiAwLjY7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XFxufVxcbi8qIFJ1bGVzIGZvciB1c2luZyBpY29ucyBhcyB3aGl0ZSBvbiBhIGRhcmsgYmFja2dyb3VuZC4gKi9cXG4ubWF0ZXJpYWwtaWNvbnMubWQtbGlnaHQgeyBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTsgfVxcbi5tYXRlcmlhbC1pY29ucy5tZC1saWdodC5tZC1pbmFjdGl2ZSB7IGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7IH1cXG5cXG4uYXJ0d29ya0RpdiB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xcbiAgd2lkdGg6IDM1MHB4O1xcbn1cXG4ubW92ZUxlZnRCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gIGNvbG9yOiBjeWFuO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBtYXJnaW46IDBweCAxMHB4IDBweCAxMHB4O1xcbn1cXG4ubW92ZVJpZ2h0QnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBjb2xvcjogY3lhbjtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgbWFyZ2luOiAwcHggMTBweCAwcHggMTBweDtcXG59XFxuLmFydHdvcmsxIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL01vcnBob0NhdGVycGlsbGFyLnBuZycpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgd2lkdGg6IDM1MHB4O1xcbn1cXG4uYXJ0d29yazIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvTW9ycGhvQ29jb29uLnBuZycpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgd2lkdGg6IDM1MHB4O1xcbn1cXG4uYXJ0d29yazMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvTW9ycGhvQnV0dGVyZmx5LnBuZycpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgd2lkdGg6IDM1MHB4O1xcbn1cXG4vKiBDdXN0b20ga2V5Ym9hcmRzICovXFxuLnN3aXRjaGtiIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLyogVmVyc2lvbiAxICovXFxuLmN1c3RvbUtleWJvYXJkVjEge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHggMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgd2lkdGg6IDM3MHB4O1xcbn1cXG4uY2t2MVJvdzEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi5ja3YxUm93MiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uY2t2MVJvdzMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLmN1c3RvbUtleWJvYXJkVjEgc3BhbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDBweCAxcHg7XFxuICBwYWRkaW5nOiA1cHggOHB4O1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuLmNrdjEge1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbn1cXG4uY2t2MS5BIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92MS9BLmpwZycpOyBcXG59XFxuLmNrdjEuQiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjEvQi5qcGcnKTsgXFxufVxcbi5ja3YxLkMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0MuanBnJyk7IFxcbn1cXG4uY2t2MS5EIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92MS9ELmpwZycpOyBcXG59XFxuLmNrdjEuRSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjEvRS5qcGcnKTsgXFxufVxcbi5ja3YxLkYge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0YuanBnJyk7IFxcbn1cXG4uY2t2MS5HIHsgXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjEvRy5qcGcnKTsgXFxufVxcbi5ja3YxLkgge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0guanBnJyk7XFxufVxcbi5ja3YxLkkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0kuanBnJyk7XFxufVxcbi5ja3YxLkoge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0ouanBnJyk7XFxufVxcbi5ja3YxLksge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0suanBnJyk7XFxufVxcbi5ja3YxLkwge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0wuanBnJyk7XFxufVxcbi5ja3YxLk0ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL00uanBnJyk7IFxcbn1cXG4uY2t2MS5OIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92MS9OLmpwZycpOyBcXG59XFxuLmNrdjEuTyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjEvTy5qcGcnKTsgXFxufVxcbi5ja3YxLlAge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1AuanBnJyk7IFxcbn1cXG4uY2t2MS5RIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92MS9RLmpwZycpO1xcbn1cXG4uY2t2MS5SIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92MS9SLmpwZycpO1xcbn1cXG4uY2t2MS5TIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92MS9TLmpwZycpO1xcbn1cXG4uY2t2MS5UIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92MS9ULmpwZycpO1xcbn1cXG4uY2t2MS5VIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92MS9VLmpwZycpO1xcbn1cXG4uY2t2MS5WIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92MS9WLmpwZycpO1xcbn1cXG4uY2t2MS5XIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92MS9XLmpwZycpO1xcbn1cXG4uY2t2MS5YIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92MS9YLmpwZycpO1xcbn1cXG4uY2t2MS5ZIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92MS9ZLmpwZycpO1xcbn1cXG4uY2t2MS5aIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92MS9aLmpwZycpO1xcbn1cXG4uY2t2MS5CYWNrc3BhY2Uge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL2JhY2tzcGFjZS5qcGcnKTtcXG59XFxuLmNrdjFXb3JkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLyogVmVyc2lvbiAyICovXFxuLmN1c3RvbUtleWJvYXJkVjIge1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweCAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyY3NzUGFnZUJHKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICB3aWR0aDogMzcwcHg7XFxufVxcbi5ja3YyUm93MSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4uY2t2MlJvdzIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5ja3YyUm93MyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLmN1c3RvbUtleWJvYXJkVjIgc3BhbiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwcHggMnB4O1xcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG4vKiBWZXJzaW9uIDMgKi9cXG4uY3VzdG9tS2V5Ym9hcmRWMyB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweCAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICB3aWR0aDogMzcwcHg7XFxufVxcbi5ja3YzUm93MSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLmNrdjNSb3cyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5ja3YzUm93MyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uY3VzdG9tS2V5Ym9hcmRWMyBzcGFuIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMHB4IDFweDtcXG4gIHBhZGRpbmc6IDVweCA4cHg7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG4uY2t2MyB7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgd2lkdGg6IDM1cHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxufVxcbi5ja3YzLkEge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YzL0EucG5nJyk7IFxcbn1cXG4uY2t2My5CIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92My9CLnBuZycpOyBcXG59XFxuLmNrdjMuQyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjMvQy5wbmcnKTsgXFxufVxcbi5ja3YzLkQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YzL0QucG5nJyk7IFxcbn1cXG4uY2t2My5FIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92My9FLnBuZycpOyBcXG59XFxuLmNrdjMuRiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjMvRi5wbmcnKTsgXFxufVxcbi5ja3YzLkcgeyBcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92My9HLnBuZycpOyBcXG59XFxuLmNrdjMuSCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjMvSC5wbmcnKTtcXG59XFxuLmNrdjMuSSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjMvSS5wbmcnKTtcXG59XFxuLmNrdjMuSiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjMvSi5wbmcnKTtcXG59XFxuLmNrdjMuSyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjMvSy5wbmcnKTtcXG59XFxuLmNrdjMuTCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjMvTC5wbmcnKTtcXG59XFxuLmNrdjMuTSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjMvTS5wbmcnKTsgXFxufVxcbi5ja3YzLk4ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YzL04ucG5nJyk7IFxcbn1cXG4uY2t2My5PIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92My9PLnBuZycpOyBcXG59XFxuLmNrdjMuUCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjMvUC5wbmcnKTsgXFxufVxcbi5ja3YzLlEge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YzL1EucG5nJyk7XFxufVxcbi5ja3YzLlIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YzL1IucG5nJyk7XFxufVxcbi5ja3YzLlMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YzL1MucG5nJyk7XFxufVxcbi5ja3YzLlQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YzL1QucG5nJyk7XFxufVxcbi5ja3YzLlUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YzL1UucG5nJyk7XFxufVxcbi5ja3YzLlYge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YzL1YucG5nJyk7XFxufVxcbi5ja3YzLlcge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YzL1cucG5nJyk7XFxufVxcbi5ja3YzLlgge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YzL1gucG5nJyk7XFxufVxcbi5ja3YzLlkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YzL1kucG5nJyk7XFxufVxcbi5ja3YzLloge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YzL1oucG5nJyk7XFxufVxcbi5ja3YzLkJhY2tzcGFjZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjMvQmFja3NwYWNlLnBuZycpO1xcbn1cXG4uY2t2M1dvcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgZT17OTE6ZnVuY3Rpb24oZSl7ZS5leHBvcnRzPWZ1bmN0aW9uKGUscil7aWYoIXIpe3I9e319ZT1lJiZlLl9fZXNNb2R1bGU/ZS5kZWZhdWx0OmU7aWYodHlwZW9mIGUhPT1cInN0cmluZ1wiKXtyZXR1cm4gZX1pZigvXlsnXCJdLipbJ1wiXSQvLnRlc3QoZSkpe2U9ZS5zbGljZSgxLC0xKX1pZihyLmhhc2gpe2UrPXIuaGFzaH1pZigvW1wiJygpIFxcdFxcbl0vLnRlc3QoZSl8fHIubmVlZFF1b3Rlcyl7cmV0dXJuJ1wiJy5jb25jYXQoZS5yZXBsYWNlKC9cIi9nLCdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZyxcIlxcXFxuXCIpLCdcIicpfXJldHVybiBlfX19O3ZhciByPXt9O2Z1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18odCl7aWYoclt0XSl7cmV0dXJuIHJbdF0uZXhwb3J0c312YXIgXz1yW3RdPXtleHBvcnRzOnt9fTt2YXIgbj10cnVlO3RyeXtlW3RdKF8sXy5leHBvcnRzLF9fbmNjd3Bja19yZXF1aXJlX18pO249ZmFsc2V9ZmluYWxseXtpZihuKWRlbGV0ZSByW3RdfXJldHVybiBfLmV4cG9ydHN9X19uY2N3cGNrX3JlcXVpcmVfXy5hYj1fX2Rpcm5hbWUrXCIvXCI7cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oOTEpfSgpOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvQmFyYmVkV2lyZS44ZTdjMmE2NmI2ZDYwMWRjMWRiYjM4OTFlNzljZjZjMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL0JhcmJlZFdpcmVSb3RhdGVkLjY2NDczZmNkNDhiYWY4MGQ4YzkzNzMwMTIwYmExMDIxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvQS4wNjU5YTQ0ZDMxYzk0ZGEyMmY3OWJiMjE1YTQ4ODlmMC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL0IuMmMzM2IxMzcxYTg1N2NiMjQwOGVhNGY5NWU3ZTYwYjYuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9DLjliYjkwYmI4ZmMzYzAxMTkzZDE4MzAyNDY1YjNlMjRhLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvRC5jMGEzNjY2MDg4ODUwODY0YjkxMDM0ODQxM2Q2YzU0ZC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL0UuNTYxOWI0OWZkNWIyNWQ5YWEyM2UwODAxMWEzNGYwNzUuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9GLmZjODg1ZTk2YmQxZWRmNjE5NjUwMTI5NTBiYTZjMzI3LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvRy44YWEzMzAwZTU4NGRkZjUyZTUwNzA3YWU4ZmE3NWE5OC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL0guZjNjOWIxZTg5NTRmY2EwZmU4N2Y3M2ZhYTQzODkzZDAuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9JLmM2OTZjNmNlODk4ODUzNTg3OWE5NDljZjdhOTkzYTk2LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvSi5lMThjYmE1ZDdlNGFmNTc3MGM0NmY4M2RlOTZkY2UxNS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL0suNzE5MzM3MTIyNjJkNzYzNTYzYTU5MGQwNDdhYWNiYzguanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9MLjg3ZWJkY2I2ZjM2OTc1ODBkOTcyNDZmN2Y0MTVkYzhjLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvTS42Yzc5Y2UzYzM4OGFkMTZjOTFhOGU5YmM2MWE0ZDA0MC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL04uYzUzNmY5MDY1ZTVlMzAwZDFkNmU4NjAzMWU5MTc4NDYuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9PLmUzYzI1OGMxMWQ3MTA0ZjAxNGZiYmNmNDA2YzliODg1LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvUC5kNzgzOTFiMjkxOWQ0ZGE0MDY4NTBlNTM2YjMyMDVlYy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL1EuNzgwZDQ1ZGJmNDMxYjA3NmIwN2MyYzM3MGM3MDA4YWMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9SLmIxMmZlMzE1MjljYzU5ZDIyNTVhYTYzZGViZDgyYmFlLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvUy4zZGRmMzJjZjJjM2MyZWE3MjM3MGQ3ZjI1MjhkMDBlNS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL1QuM2U5MWI1NzA1MzVlY2I5YjA2ZWY3YmU4NzE0MTNhOTMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9VLjhjYjBlMzE2NGM2Y2I0ZTYxM2EzMjZhZTRmMTVmZGNjLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvVi5mYWY0YTJjYzYxMzJiN2Q3NGFlZGViY2JjOGQ3ZWI0Yy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL1cuZTdlMzk1OTY2YWE1MWQ1YjgyNzE3OWM0YjcyZmMzYjIuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9YLmI1MDZhNTk2NTYwYzYzMTQ3YzNjZWRkZWI1YTFiY2MwLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvWS5mOTgzZDc2NmYzNjk4MjQ5NzQ4ODEwMDc4M2YwMGM0YS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL1ouZThiOTM2ZTllOGNiNDEyNWIzZDQ2ZGMyYjdmZjEwZTUuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9iYWNrc3BhY2UuODQ0OTZmZjBhZTFiMWM2MTBiNjMyZTRkODBmMTdiYWMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9BLjI5YTg1YjJkOWQ5ODA5MDY0YWRhYmZhZDFmMmM0OGMzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvQi43MzlmNjZjNzU4MWQxZTI2Mjk5MjdiMjIzMTRjYjQ1Zi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL0JhY2tzcGFjZS4wODE1YWZhZTAzODdmMWVmNTFiNzMzYzBhY2I4ZTMwMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL0MuNzE4YjUzNzk5OWI1YzhiYzVjMThmYTgyYzUyZjBmODAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9ELjcyYzk0MmVmMWQ4ZDZjNTAyNGYxNGZkZTJkZmJhYzFlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvRS42M2Y3ZDVlNDJkNTU2NDkwYTIxMmJjOTA1MGVmZTYxMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL0YuNmQ5NDJmZGNiNjAwMjlhZTRiYWIzNjQ3NGU4M2NiMGUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9HLmE5Yzc0OTFiNDU2MGVhMjk5YzgzYTkwODA2NzAzMzc0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvSC43ZmY4ZjIyMzRmYWEzM2I2ZmQ4ZjVkMGY4OTNmYWJmYy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL0kuNTg4ZGU4NDZhZDJhMzQ4NzY0NTYzMmU2ZmM5YTdmNjUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9KLjYwNWI2YTE5MTYyNTIyYTAwYTRjYzYxYzkwM2U2ZTVlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvSy5mYmQyYTFkMWY2NmViMzBhNjE5MzM2Njc5NGZlYTIwNC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL0wuMzdlOTMxNTM0M2FhNGQ3Yjg2ZDE4MGU4ZTZiNzdkMDQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9NLmFhZGE3NjRlNDc2NTllNjRjOGFiOGZiNWFhODY4MzcxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvTi4xNzcxNTEyOTgzNWY5ZTMwYmRkZTQwNWRiYWMyMDI5Zi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL08uODYxNDg1YTdjODkwMzY4NjUxYTc1ZmNhN2VmMTQ3Y2IucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9QLjQ0MjU2ZDEwM2Q5NzQ4NmY1NDk3NmNiMmY2ZTY3MGI3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvUS5jYTc3Nzg2MzczOThmMmVhYThjNmNkNTliYzA1NDM0MS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL1IuM2E2MTQ4ZWY3MTE3MWRkMTQyNjJhMjgwNjI2MzNjMjYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9TLjcwN2UwNGIyYTYyMTk0Y2QyM2NiOGZiYjlkMTFhMjZlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvVC5iN2UxYWZlZjNlY2NjNDI5OWUzZWM5NmRhMTEzZGY1ZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL1UuYWMwZjRjZmY5ZjZkMThiZDQ1ZDNlNDc3ZjliYjVmODcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9WLjc0YzMxZGYxZGYwMDYwYzg2YWMwNjY3YzRhMjc3ZmNhLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvVy5kOWZmYmFjNmU4MDU1OWRkMDhjY2MzMDViYzA3NGZjOC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL1guODc3YTM5MjhiOTk3NTY5MjUxZTIyZTY1NDdhNTliNmEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9ZLjFiZGUyZjM2ZjY3NWJmOTA4NmFlOGU4YTVjNGZlM2FkLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvWi4yZTcxY2Y3YjE2YmM0OTM5ZGFiZTNiM2QyZjM1ZTVhNC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL01vcnBob0J1dHRlcmZseS4xMTYxNjFiZWZlOGQwNjVlZDBlNjkwNDNmMjg4M2I5OC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL01vcnBob0NhdGVycGlsbGFyLmExOGJiNGZmODAwN2VmN2YzZTM3ZmRhMzY3YjM4MjdiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvTW9ycGhvQ29jb29uLjIxZjExMTMyM2Q4ZDAwYWE0ZTExYjhjY2ZhMzU4OWY4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvV2FsbC40N2FkZDIwZmE5NWYwYmRhYTdmMzczYzE3YzYwZjc5MC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL3BsYXllcnRpdGxlLjlkNmJjOTc3N2YyNWZjN2EyYjA4MzYxMjdhMjU0NDAyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvcHJpc29uYmFycy1zcXVhcmUuMmY5MjBmMGY5Mzc1NzliYWU1NDlkNTJhZDJiMDgyMWQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS90aWxlLjhjMDE3MTM1MzZjMGQ3OTBmNjU5YmQ1YmUzZjNhY2FjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvdHJhbnNtb2dyaWZ5LjJmNmEwOTFhMTQxZDU0ZmQzOTZlM2RmMmVmMmY0ZDVjLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkJylcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xuZXhwb3J0cy5GcmFnbWVudCA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgZXhwb3J0cy5GcmFnbWVudCA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfVxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgZXhwb3J0cy5GcmFnbWVudDpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICghZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd247XG52YXIgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd247XG52YXIgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBzZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBzZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL3B1bGwvMTA3XG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5cbmZ1bmN0aW9uIGpzeERFVih0eXBlLCBjb25maWcsIG1heWJlS2V5LCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gICAgdmFyIHByb3BzID0ge307XG4gICAgdmFyIGtleSA9IG51bGw7XG4gICAgdmFyIHJlZiA9IG51bGw7IC8vIEN1cnJlbnRseSwga2V5IGNhbiBiZSBzcHJlYWQgaW4gYXMgYSBwcm9wLiBUaGlzIGNhdXNlcyBhIHBvdGVudGlhbFxuICAgIC8vIGlzc3VlIGlmIGtleSBpcyBhbHNvIGV4cGxpY2l0bHkgZGVjbGFyZWQgKGllLiA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPlxuICAgIC8vIG9yIDxkaXYga2V5PVwiSGlcIiB7Li4ucHJvcHN9IC8+ICkuIFdlIHdhbnQgdG8gZGVwcmVjYXRlIGtleSBzcHJlYWQsXG4gICAgLy8gYnV0IGFzIGFuIGludGVybWVkaWFyeSBzdGVwLCB3ZSB3aWxsIHVzZSBqc3hERVYgZm9yIGV2ZXJ5dGhpbmcgZXhjZXB0XG4gICAgLy8gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz4sIGJlY2F1c2Ugd2UgYXJlbid0IGN1cnJlbnRseSBhYmxlIHRvIHRlbGwgaWZcbiAgICAvLyBrZXkgaXMgZXhwbGljaXRseSBkZWNsYXJlZCB0byBiZSB1bmRlZmluZWQgb3Igbm90LlxuXG4gICAgaWYgKG1heWJlS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGtleSA9ICcnICsgbWF5YmVLZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpO1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICAgIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAge1xuICAgIGlmIChSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIHtcbiAgICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAge1xuICAgIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZm87XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICAgIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAgIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGlzU3RhdGljQ2hpbGRyZW4sIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gICAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKTtcblxuICAgICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgICAgfVxuXG4gICAgICBlcnJvcignUmVhY3QuanN4OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50ID0ganN4REVWKHR5cGUsIHByb3BzLCBrZXksIHNvdXJjZSwgc2VsZik7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gICAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAgIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gICAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICAgIGlmICh2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuXG4gICAgICBpZiAoY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoaXNTdGF0aWNDaGlsZHJlbikge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbltpXSwgdHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcignUmVhY3QuanN4OiBTdGF0aWMgY2hpbGRyZW4gc2hvdWxkIGFsd2F5cyBiZSBhbiBhcnJheS4gJyArICdZb3UgYXJlIGxpa2VseSBleHBsaWNpdGx5IGNhbGxpbmcgUmVhY3QuanN4cyBvciBSZWFjdC5qc3hERVYuICcgKyAnVXNlIHRoZSBCYWJlbCB0cmFuc2Zvcm0gaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW4sIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQpIHtcbiAgICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn0gLy8gVGhlc2UgdHdvIGZ1bmN0aW9ucyBleGlzdCB0byBzdGlsbCBnZXQgY2hpbGQgd2FybmluZ3MgaW4gZGV2XG5cbnZhciBqc3hERVYkMSA9ICBqc3hXaXRoVmFsaWRhdGlvbiA7XG5cbmV4cG9ydHMuanN4REVWID0ganN4REVWJDE7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcycpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==