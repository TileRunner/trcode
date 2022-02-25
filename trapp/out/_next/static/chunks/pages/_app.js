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
___CSS_LOADER_EXPORT___.push([module.id, ".Mastermind {\r\n    background-color: #16271a;\r\n    padding-left: 1%;\r\n    padding-right: 1%;\r\n    padding-top: 1%;\r\n    padding-bottom: 1%;\r\n}\r\n.wmhomelink {\r\n    background-color: #16271a;\r\n    text-align: right;\r\n}\r\n.Outertable {\r\n    border-style: none;\r\n    vertical-align: top;\r\n    color: whitesmoke;\r\n}\r\n.Guesstable {\r\n    background-color: #1917c0;\r\n}\r\n.AlignCenter {\r\n    text-align: center;\r\n}\r\n.AlignLeft {\r\n    text-align: left;\r\n}\r\n.wmlink {\r\n    background-color: darkmagenta;\r\n    color:cyan;\r\n    text-align: left;\r\n}\r\n.wmbutton {\r\n    font-size: xx-large;\r\n    background-color: #17c025;\r\n    color:azure;\r\n}\r\n.wmtitle {\r\n    font-size: 2.8em;\r\n    text-align: center;\r\n    font-family: cursive;\r\n    font-style: italic;\r\n    color:darkmagenta;\r\n}\r\n.wmh1 {\r\n    text-align: center;\r\n    font-size: xx-large;\r\n    font-family: cursive;\r\n    color:azure;\r\n}\r\n.wmh2 {\r\n    font-size: x-large;\r\n    color:azure;\r\n}\r\n.wmh3 {\r\n    color:azure;\r\n    font-size: x-large;\r\n}\r\n.wmth {\r\n    color: aliceblue;\r\n    border-style: groove;\r\n}\r\n.wmtd {\r\n    border-style: inset;\r\n    color:azure;\r\n    text-align: center;\r\n    font-family: 'Courier New', Courier, monospace;\r\n}\r\n.wmp {\r\n    color: whitesmoke;\r\n    text-align: center;\r\n}\r\n.wmlabel {\r\n    color: lightgreen;\r\n    padding-right: 5px;\r\n}\r\n.wmCorrectLetterCorrectPosition {\r\n    background-color: greenyellow;\r\n    color: black !important;\r\n}\r\n.wmCorrectLetterWrongPosition {\r\n    background-color: gold;\r\n    color: black !important;\r\n}\r\n.wmWrongLetter {\r\n    background-color: black;\r\n    color: white !important;\r\n}", "",{"version":3,"sources":["webpack://pages/wm/mastermind.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,yBAAyB;IACzB,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;AACrB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,kBAAkB;AACtB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,6BAA6B;IAC7B,UAAU;IACV,gBAAgB;AACpB;AACA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,WAAW;AACf;AACA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,oBAAoB;IACpB,WAAW;AACf;AACA;IACI,kBAAkB;IAClB,WAAW;AACf;AACA;IACI,WAAW;IACX,kBAAkB;AACtB;AACA;IACI,gBAAgB;IAChB,oBAAoB;AACxB;AACA;IACI,mBAAmB;IACnB,WAAW;IACX,kBAAkB;IAClB,8CAA8C;AAClD;AACA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,6BAA6B;IAC7B,uBAAuB;AAC3B;AACA;IACI,sBAAsB;IACtB,uBAAuB;AAC3B;AACA;IACI,uBAAuB;IACvB,uBAAuB;AAC3B","sourcesContent":[".Mastermind {\r\n    background-color: #16271a;\r\n    padding-left: 1%;\r\n    padding-right: 1%;\r\n    padding-top: 1%;\r\n    padding-bottom: 1%;\r\n}\r\n.wmhomelink {\r\n    background-color: #16271a;\r\n    text-align: right;\r\n}\r\n.Outertable {\r\n    border-style: none;\r\n    vertical-align: top;\r\n    color: whitesmoke;\r\n}\r\n.Guesstable {\r\n    background-color: #1917c0;\r\n}\r\n.AlignCenter {\r\n    text-align: center;\r\n}\r\n.AlignLeft {\r\n    text-align: left;\r\n}\r\n.wmlink {\r\n    background-color: darkmagenta;\r\n    color:cyan;\r\n    text-align: left;\r\n}\r\n.wmbutton {\r\n    font-size: xx-large;\r\n    background-color: #17c025;\r\n    color:azure;\r\n}\r\n.wmtitle {\r\n    font-size: 2.8em;\r\n    text-align: center;\r\n    font-family: cursive;\r\n    font-style: italic;\r\n    color:darkmagenta;\r\n}\r\n.wmh1 {\r\n    text-align: center;\r\n    font-size: xx-large;\r\n    font-family: cursive;\r\n    color:azure;\r\n}\r\n.wmh2 {\r\n    font-size: x-large;\r\n    color:azure;\r\n}\r\n.wmh3 {\r\n    color:azure;\r\n    font-size: x-large;\r\n}\r\n.wmth {\r\n    color: aliceblue;\r\n    border-style: groove;\r\n}\r\n.wmtd {\r\n    border-style: inset;\r\n    color:azure;\r\n    text-align: center;\r\n    font-family: 'Courier New', Courier, monospace;\r\n}\r\n.wmp {\r\n    color: whitesmoke;\r\n    text-align: center;\r\n}\r\n.wmlabel {\r\n    color: lightgreen;\r\n    padding-right: 5px;\r\n}\r\n.wmCorrectLetterCorrectPosition {\r\n    background-color: greenyellow;\r\n    color: black !important;\r\n}\r\n.wmCorrectLetterWrongPosition {\r\n    background-color: gold;\r\n    color: black !important;\r\n}\r\n.wmWrongLetter {\r\n    background-color: black;\r\n    color: white !important;\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL25leHQtc2VydmVyL2xpYi9hbXAtY29udGV4dC50cyIsIndlYnBhY2s6Ly9fTl9FLy4uL25leHQtc2VydmVyL2xpYi9hbXAudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9uZXh0LXNlcnZlci9saWIvaGVhZC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uLi9uZXh0LXNlcnZlci9saWIvc2lkZS1lZmZlY3QudHN4Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL19OX0UvIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9meWIvZnliLmNzcz84NGVlIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3JwaG8vbW9ycGhvLmNzcz8zNTk3Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9wYi9wcmlzb25icmVhay5jc3M/N2I4MiIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG0vdG0uY3NzP2I5ZjUiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3dpL3dvcmRpbmZvLmNzcz9hM2Q5Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy93bS9tYXN0ZXJtaW5kLmNzcz8zYzY2Iiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/YTcyMyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Z5Yi9meWIuY3NzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3JwaG8vbW9ycGhvLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsuY3NzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy90bS90bS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3dpL3dvcmRpbmZvLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd20vbWFzdGVybWluZC5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nbG9iYWxzLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2dldFVybC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0JhcmJlZFdpcmUucG5nIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvQmFyYmVkV2lyZVJvdGF0ZWQucG5nIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0EuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0IuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0MuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0QuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0UuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0YuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0cuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0guanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0kuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0ouanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0suanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0wuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL00uanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL04uanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL08uanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1AuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1EuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1IuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1MuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1QuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1UuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1YuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1cuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1guanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1kuanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1ouanBnIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL2JhY2tzcGFjZS5qcGciLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9LZXlib2FyZHMvdjMvQS5wbmciLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9LZXlib2FyZHMvdjMvQi5wbmciLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9LZXlib2FyZHMvdjMvQmFja3NwYWNlLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9DLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9ELnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9FLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9GLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9HLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9ILnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9JLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9KLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9LLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9MLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9NLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9OLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9PLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9QLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9RLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9SLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9TLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9ULnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9VLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9WLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9XLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9YLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9ZLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL0tleWJvYXJkcy92My9aLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL01vcnBob0J1dHRlcmZseS5wbmciLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9Nb3JwaG9DYXRlcnBpbGxhci5wbmciLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9Nb3JwaG9Db2Nvb24ucG5nIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvV2FsbC5qcGciLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9wbGF5ZXJ0aXRsZS5wbmciLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9wcmlzb25iYXJzLXNxdWFyZS5wbmciLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy90aWxlLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL3RyYW5zbW9ncmlmeS5qcGciLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2hlYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvanN4LWRldi1ydW50aW1lLmpzIl0sIm5hbWVzIjpbIkFtcFN0YXRlQ29udGV4dCIsIlJlYWN0IiwiYW1wRmlyc3QiLCJoeWJyaWQiLCJoYXNRdWVyeSIsImlzSW5BbXBNb2RlIiwiaW5BbXBNb2RlIiwiaGVhZCIsImNoaWxkIiwibGlzdCIsImZyYWdtZW50TGlzdCIsIk1FVEFUWVBFUyIsImtleXMiLCJ0YWdzIiwibWV0YVR5cGVzIiwibWV0YUNhdGVnb3JpZXMiLCJoIiwiaXNVbmlxdWUiLCJoYXNLZXkiLCJrZXkiLCJpIiwibGVuIiwibWV0YXR5cGUiLCJjYXRlZ29yeSIsImNhdGVnb3JpZXMiLCJoZWFkRWxlbWVudHMiLCJoZWFkRWxlbWVudENoaWxkcmVuIiwiaGVhZEVsZW1lbnQiLCJkZWZhdWx0SGVhZCIsInByb3BzIiwidW5pcXVlIiwiYyIsInByb2Nlc3MiLCJhbXBTdGF0ZSIsImhlYWRNYW5hZ2VyIiwiSGVhZE1hbmFnZXJDb250ZXh0IiwiSGVhZCIsImlzU2VydmVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJfaGFzSGVhZE1hbmFnZXIiLCJlbWl0Q2hhbmdlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsIk15QXBwIiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRU87O0FBQUEsTUFBTUEsZUFBbUMsZ0JBQUdDLDZCQUE1QyxFQUE0Q0EsQ0FBNUM7Ozs7QUFFUCxJQUFJLE1BQXVDO0FBQ3pDRCxpQkFBZSxDQUFmQTtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkQ7O0FBQ0E7Ozs7OztBQUVPOztBQUFBLHFCQUFxQjtBQUMxQkUsVUFBUSxHQURrQjtBQUUxQkMsUUFBTSxHQUZvQjtBQUcxQkMsVUFBUSxHQUhrQjtBQUFBLElBQXJCLElBSVU7QUFDZixTQUFPRixRQUFRLElBQUtDLE1BQU0sSUFBMUI7QUFHSzs7QUFBQSxrQkFBMkI7QUFBQTs7QUFDaEM7QUFDQSxTQUFPRSxXQUFXLENBQUNKLDBCQUFpQkQsWUFBcEMsZUFBbUJDLENBQUQsQ0FBbEI7QUFDRDs7R0FITSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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YUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssTUFBTSxPQUFPLGFBQWEsYUFBYSxPQUFPLE9BQU8sTUFBTSxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxtQkFBbUIsV0FBVyxZQUFZLGFBQWEsYUFBYSx1QkFBdUIsTUFBTSxtQkFBbUIsYUFBYSxhQUFhLGFBQWEsTUFBTSxtQkFBbUIsV0FBVyxNQUFNLG1CQUFtQixhQUFhLFdBQVcsTUFBTSxtQkFBbUIsYUFBYSxXQUFXLE1BQU0sbUJBQW1CLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLG1CQUFtQixhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sbUJBQW1CLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxtQkFBbUIsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sbUJBQW1CLGFBQWEsTUFBTSxtQkFBbUIsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sbUJBQW1CLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sbUJBQW1CLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLE9BQU8sYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFNBQVMsS0FBSyx3QkFBd0IseUJBQXlCLFdBQVcsVUFBVSx3QkFBd0IsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsd0JBQXdCLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSx1QkFBdUIsdUJBQXVCLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sT0FBTyxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsaUNBQWlDLG1DQUFtQyxvREFBb0QsZ0RBQWdELHdFQUF3RSx5RUFBeUUsb0NBQW9DLDhCQUE4Qix3Q0FBd0MsNENBQTRDLDhCQUE4QiwwQ0FBMEMsMENBQTBDLGtDQUFrQyxLQUFLLHVCQUF1QixzREFBc0QsS0FBSyxtQkFBbUIscUJBQXFCLEtBQUssMEJBQTBCLHFCQUFxQixLQUFLLG1CQUFtQixtQkFBbUIsb0JBQW9CLDJCQUEyQiw0QkFBNEIsS0FBSyxnQkFBZ0Isb0JBQW9CLEtBQUssaUJBQWlCLDZDQUE2Qyw0QkFBNEIsS0FBSyxrQkFBa0IseURBQXlELCtCQUErQixLQUFLLGVBQWUsNERBQTRELHVDQUF1QyxnREFBZ0Qsa0NBQWtDLDRCQUE0QixLQUFLLGNBQWMsK0JBQStCLHlCQUF5QiwyQkFBMkIsa0RBQWtELDhCQUE4Qix1QkFBdUIsS0FBSyxpQkFBaUIsNERBQTRELHVDQUF1QywwQkFBMEIsZ0RBQWdELGtDQUFrQyw0QkFBNEIsS0FBSywyQkFBMkIsd0NBQXdDLHNDQUFzQyxvQ0FBb0MsMkJBQTJCLDRCQUE0Qiw0REFBNEQsa0NBQWtDLCtCQUErQixRQUFRLG9DQUFvQyw0REFBNEQscUJBQXFCLEtBQUssOEJBQThCLDRCQUE0QixzQkFBc0IsK0JBQStCLG9DQUFvQywyQkFBMkIsS0FBSyxvQkFBb0IsNkNBQTZDLDhEQUE4RCxrQ0FBa0MsNEJBQTRCLHFDQUFxQywwQkFBMEIsNEJBQTRCLDZCQUE2QiwyQkFBMkIsMEJBQTBCLDJCQUEyQiw0QkFBNEIsMEJBQTBCLEtBQUssc0JBQXNCLDJCQUEyQixRQUFRLHNCQUFzQiwyQkFBMkIsU0FBUyxvQkFBb0IsdUVBQXVFLDJCQUEyQiw0QkFBNEIsNEJBQTRCLHFCQUFxQixvRUFBb0Usb0JBQW9CLHVFQUF1RSxpQ0FBaUMsMkJBQTJCLEtBQUssMEJBQTBCLHFEQUFxRCxLQUFLLDJCQUEyQixpRUFBaUUscUJBQXFCLEtBQUssMkJBQTJCLG9FQUFvRSx3QkFBd0IsS0FBSyxpQ0FBaUMsNkNBQTZDLDJCQUEyQiw0REFBNEQsd0JBQXdCLDJCQUEyQixLQUFLLGdDQUFnQyxtREFBbUQsNEJBQTRCLGdEQUFnRCwyQkFBMkIsb0NBQW9DLDBCQUEwQiwyQkFBMkIsS0FBSywrQkFBK0IsNkZBQTZGLCtCQUErQixzREFBc0QsMkJBQTJCLEtBQUssdUJBQXVCLDhEQUE4RCx1QkFBdUIsbUJBQW1CLDZCQUE2QiwyQkFBMkIsbUNBQW1DLCtCQUErQiw0QkFBNEIsS0FBSyx5QkFBeUIscUVBQXFFLEtBQUsseUJBQXlCLCtEQUErRCxLQUFLLGVBQWUsdUJBQXVCLHlCQUF5QixLQUFLLCtCQUErQiwrREFBK0QsMkJBQTJCLCtCQUErQixvQkFBb0IsNEJBQTRCLDJCQUEyQixLQUFLLDhCQUE4Qiw4REFBOEQsMkJBQTJCLCtCQUErQixvQkFBb0IsNEJBQTRCLDJCQUEyQixLQUFLLFlBQVksb0JBQW9CLEtBQUssNEJBQTRCLDBEQUEwRCxpQ0FBaUMsK0JBQStCLHNCQUFzQiwrQkFBK0Isb0NBQW9DLEtBQUssY0FBYyw0QkFBNEIsMEJBQTBCLGdEQUFnRCxLQUFLLDZCQUE2QixtREFBbUQsMkJBQTJCLDBDQUEwQyxLQUFLLDBCQUEwQixvRUFBb0UsK0JBQStCLGtDQUFrQyxnQ0FBZ0MscUJBQXFCLDJCQUEyQixLQUFLLHVCQUF1QixtREFBbUQsNkRBQTZELCtCQUErQixrQ0FBa0MscUJBQXFCLDJCQUEyQixLQUFLLDJCQUEyQix3Q0FBd0MseUNBQXlDLG9FQUFvRSwrQkFBK0IsS0FBSyw0QkFBNEIsd0NBQXdDLHlDQUF5Qyw2REFBNkQsK0JBQStCLEtBQUssOEJBQThCLHdDQUF3Qyx5Q0FBeUMsNkRBQTZELCtCQUErQixLQUFLLCtCQUErQix3Q0FBd0MseUNBQXlDLG9FQUFvRSwrQkFBK0IsS0FBSyxtQkFBbUIseUJBQXlCLDRCQUE0QixnREFBZ0QsNERBQTRELHVDQUF1QywyQkFBMkIsNEJBQTRCLEtBQUssMEJBQTBCLDBCQUEwQixzQkFBc0IsK0JBQStCLG9DQUFvQyx5QkFBeUIsS0FBSyxpQkFBaUIseUJBQXlCLDBCQUEwQiw2Q0FBNkMsZ0RBQWdELDREQUE0RCx1Q0FBdUMsK0JBQStCLDRCQUE0Qiw4QkFBOEIsS0FBSyx3QkFBd0IsbUJBQW1CLDRCQUE0QiwwQkFBMEIsS0FBSywrQkFBK0IsdUJBQXVCLEtBQUssc0JBQXNCLHdCQUF3Qiw0QkFBNEIsb0NBQW9DLGdEQUFnRCxLQUFLLHFCQUFxQix5QkFBeUIsMEJBQTBCLDJCQUEyQixLQUFLLGNBQWMseUJBQXlCLDBCQUEwQiw0QkFBNEIsZ0RBQWdELDREQUE0RCx1Q0FBdUMsK0JBQStCLDRCQUE0QixLQUFLLG1CQUFtQix3QkFBd0IsNEJBQTRCLG9DQUFvQyxnREFBZ0QsS0FBSyx3QkFBd0IsMEJBQTBCLDRCQUE0Qiw4QkFBOEIsMkJBQTJCLDhCQUE4QixLQUFLLGFBQWEseUJBQXlCLDBCQUEwQiwyQkFBMkIsS0FBSyxtQkFBbUIsa0NBQWtDLHdCQUF3QixLQUFLLGdCQUFnQixzQkFBc0IsS0FBSyxrQkFBa0Isb0JBQW9CLEtBQUsseUJBQXlCLGdDQUFnQyxLQUFLLGtCQUFrQixtQkFBbUIsS0FBSyx5QkFBeUIsK0JBQStCLEtBQUssa0JBQWtCLHVDQUF1QyxLQUFLLGlCQUFpQix5QkFBeUIsNEJBQTRCLHNCQUFzQiw0QkFBNEIsS0FBSyxzQkFBc0IsMFZBQTBWLGtFQUFrRSxxRUFBcUUsbUJBQW1CLDJDQUEyQyw4R0FBOEcsb0RBQW9ELEtBQUssOEJBQThCLHdCQUF3Qix5QkFBeUIsMEJBQTBCLGlCQUFpQixrQkFBa0IsMENBQTBDLDhHQUE4RyxvREFBb0QsS0FBSyxtQkFBbUIsdURBQXVELCtCQUErQixzREFBc0QsaUNBQWlDLGtDQUFrQywyQkFBMkIsS0FBSyw4QkFBOEIscUJBQXFCLEtBQUssNEJBQTRCLDRCQUE0QiwyQkFBMkIsNEJBQTRCLGlDQUFpQyxvQkFBb0IsS0FBSyx1QkFBdUIsMkJBQTJCLHVCQUF1QixtQkFBbUIsNkJBQTZCLDJCQUEyQixtQ0FBbUMsK0JBQStCLDRCQUE0QixLQUFLLHFCQUFxQiwwQ0FBMEMsS0FBSyxxQkFBcUIsdUNBQXVDLEtBQUssb0JBQW9CLDREQUE0RCxzQ0FBc0MsZ0RBQWdELDBCQUEwQiw0QkFBNEIsMEJBQTBCLDZDQUE2Qyx3QkFBd0IsS0FBSyx3QkFBd0IseUJBQXlCLEtBQUsscUJBQXFCLGtFQUFrRSxvQ0FBb0MseUJBQXlCLDRCQUE0QiwwQkFBMEIsZ0RBQWdELDRCQUE0Qiw0REFBNEQsdUNBQXVDLDJCQUEyQiw2Q0FBNkMscUJBQXFCLDBCQUEwQixLQUFLLHlCQUF5Qix5QkFBeUIsMkJBQTJCLEtBQUssMkJBQTJCLDhCQUE4QixxQkFBcUIsS0FBSywrQkFBK0IscUJBQXFCLEtBQUssZ0NBQWdDLDBCQUEwQix5QkFBeUIsdUJBQXVCLDZEQUE2RCxtREFBbUQsNEJBQTRCLDBCQUEwQiwyQkFBMkIsbURBQW1ELDBCQUEwQixLQUFLLG1DQUFtQyxnQ0FBZ0MsS0FBSyxtQ0FBbUMsdUJBQXVCLDBCQUEwQixLQUFLLHNCQUFzQixzRUFBc0UsK0JBQStCLDhDQUE4QywrQkFBK0IsMEJBQTBCLG9DQUFvQyxxQ0FBcUMsMEJBQTBCLDhCQUE4QixLQUFLLDhCQUE4QiwrQkFBK0IseUVBQXlFLDhDQUE4QyxrREFBa0QscUJBQXFCLG9DQUFvQywrQ0FBK0MsMEJBQTBCLDBCQUEwQixnQ0FBZ0MsNEJBQTRCLEtBQUssb0NBQW9DLHNCQUFzQixLQUFLLDJCQUEyQiw2Q0FBNkMsMkJBQTJCLDBCQUEwQixLQUFLLGFBQWEsMEJBQTBCLHNCQUFzQiwrQkFBK0Isb0NBQW9DLDBCQUEwQiw0Q0FBNEMsZ0RBQWdELDBCQUEwQiwyQkFBMkIsS0FBSyxrQkFBa0IsZ0RBQWdELEtBQUssaUJBQWlCLGdDQUFnQyxxQkFBcUIsMkJBQTJCLDRCQUE0QixLQUFLLHlCQUF5Qix1QkFBdUIsc0JBQXNCLEtBQUssd0JBQXdCLHVCQUF1QixzQkFBc0IsMEJBQTBCLDBCQUEwQixLQUFLLGdCQUFnQiwwQkFBMEIsMkJBQTJCLHlCQUF5QixnQ0FBZ0Msd0JBQXdCLEtBQUssa0JBQWtCLDJCQUEyQix5QkFBeUIsb0RBQW9ELG9CQUFvQixLQUFLLHVCQUF1QixxQ0FBcUMsb0JBQW9CLDZCQUE2QixxQkFBcUIsS0FBSyxnQkFBZ0IsMEJBQTBCLDZCQUE2QiwrQkFBK0IsOEJBQThCLDBCQUEwQiw0Q0FBNEMsNEJBQTRCLDBCQUEwQix5QkFBeUIsMkJBQTJCLEtBQUssYUFBYSxnQ0FBZ0MscUJBQXFCLCtCQUErQixxQkFBcUIsS0FBSyxtQkFBbUI7QUFDdDlxQztBQUNBLCtEQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQnZDO0FBQ2tHO0FBQ087QUFDL0I7QUFDMUUsOEJBQThCLHlGQUEyQjtBQUN6RCx5Q0FBeUMsNEZBQStCLENBQUMsNkRBQTZCO0FBQ3RHO0FBQ0EsMkRBQTJELDRCQUE0QiwrQkFBK0IsMEJBQTBCLDJCQUEyQixLQUFLLDBCQUEwQixxQ0FBcUMscUJBQXFCLDBCQUEwQixLQUFLLGdDQUFnQyxzQkFBc0IsS0FBSyw0QkFBNEIsZ0NBQWdDLDBCQUEwQixzQkFBc0IsMEJBQTBCLEtBQUssa0NBQWtDLHNCQUFzQixLQUFLLHdCQUF3Qix3QkFBd0IsMkJBQTJCLDJCQUEyQixLQUFLLG1CQUFtQiwyQkFBMkIscUJBQXFCLHdCQUF3QiwrQkFBK0IsMEJBQTBCLEtBQUssd0NBQXdDLCtCQUErQiw0QkFBNEIsS0FBSyxxQ0FBcUMsZ0NBQWdDLHlCQUF5QiwwQkFBMEIsa0NBQWtDLDBCQUEwQix1REFBdUQsMEJBQTBCLDRCQUE0QixLQUFLLHFDQUFxQywyQkFBMkIsS0FBSyxxQ0FBcUMsZ0NBQWdDLHlCQUF5QiwwQkFBMEIsa0NBQWtDLDBCQUEwQix1REFBdUQsMEJBQTBCLDRCQUE0QixLQUFLLHFDQUFxQywyQkFBMkIsS0FBSyxxQkFBcUIsd0JBQXdCLEtBQUssMEJBQTBCLHdCQUF3QixLQUFLLHFCQUFxQiwwRUFBMEUsK0JBQStCLHFDQUFxQyw0QkFBNEIsMEJBQTBCLHlCQUF5QixLQUFLLDJCQUEyQiwyQkFBMkIsMEJBQTBCLDJCQUEyQiw0QkFBNEIsS0FBSyx3QkFBd0Isa0NBQWtDLEtBQUssMkRBQTJELHNCQUFzQixzREFBc0QsMEJBQTBCLEtBQUssa0JBQWtCLDJCQUEyQixLQUFLLGVBQWUsb0JBQW9CLDBCQUEwQixnQ0FBZ0MsS0FBSyxvQ0FBb0MsZ0NBQWdDLHFDQUFxQyxLQUFLLG1DQUFtQyxnQ0FBZ0MsMEJBQTBCLEtBQUssMkJBQTJCLCtCQUErQixLQUFLLDJCQUEyQiwyQkFBMkIsS0FBSyxrQkFBa0Isc0JBQXNCLGdDQUFnQyxLQUFLLGVBQWUsZ0NBQWdDLCtCQUErQixxQkFBcUIsMkJBQTJCLDBCQUEwQixLQUFLLHFCQUFxQixzQkFBc0IsdUNBQXVDLHdCQUF3QiwwQkFBMEIsMkJBQTJCLDRCQUE0QixLQUFLLGNBQWMsOEJBQThCLDBCQUEwQixnQ0FBZ0MsS0FBSyx1QkFBdUIscUJBQXFCLHNCQUFzQix3QkFBd0IsS0FBSyx5QkFBeUIsb0NBQW9DLHVDQUF1QywrQkFBK0IscUJBQXFCLHlCQUF5Qix5QkFBeUIsMkJBQTJCLG1DQUFtQyxLQUFLLGlDQUFpQyx3QkFBd0IsS0FBSyxnQ0FBZ0Msd0JBQXdCLEtBQUssNEJBQTRCLGtDQUFrQyxzQkFBc0Isc0RBQXNELDBCQUEwQix3QkFBd0IsS0FBSyxrQkFBa0Isd0JBQXdCLDJCQUEyQixvQkFBb0IsMkJBQTJCLEtBQUsscUJBQXFCLDhCQUE4QixpQ0FBaUMscUJBQXFCLHFCQUFxQiw0QkFBNEIsK0JBQStCLDJCQUEyQiwrQkFBK0IsMEJBQTBCLEtBQUssV0FBVyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLDJDQUEyQyw0QkFBNEIsK0JBQStCLDBCQUEwQiwyQkFBMkIsS0FBSywwQkFBMEIscUNBQXFDLHFCQUFxQiwwQkFBMEIsS0FBSyxnQ0FBZ0Msc0JBQXNCLEtBQUssNEJBQTRCLGdDQUFnQywwQkFBMEIsc0JBQXNCLDBCQUEwQixLQUFLLGtDQUFrQyxzQkFBc0IsS0FBSyx3QkFBd0Isd0JBQXdCLDJCQUEyQiwyQkFBMkIsS0FBSyxtQkFBbUIsMkJBQTJCLHFCQUFxQix3QkFBd0IsK0JBQStCLDBCQUEwQixLQUFLLHdDQUF3QywrQkFBK0IsNEJBQTRCLEtBQUsscUNBQXFDLGdDQUFnQyx5QkFBeUIsMEJBQTBCLGtDQUFrQywwQkFBMEIsdURBQXVELDBCQUEwQiw0QkFBNEIsS0FBSyxxQ0FBcUMsMkJBQTJCLEtBQUsscUNBQXFDLGdDQUFnQyx5QkFBeUIsMEJBQTBCLGtDQUFrQywwQkFBMEIsdURBQXVELDBCQUEwQiw0QkFBNEIsS0FBSyxxQ0FBcUMsMkJBQTJCLEtBQUsscUJBQXFCLHdCQUF3QixLQUFLLDBCQUEwQix3QkFBd0IsS0FBSyxxQkFBcUIsK0RBQStELCtCQUErQixxQ0FBcUMsNEJBQTRCLDBCQUEwQix5QkFBeUIsS0FBSywyQkFBMkIsMkJBQTJCLDBCQUEwQiwyQkFBMkIsNEJBQTRCLEtBQUssd0JBQXdCLGtDQUFrQyxLQUFLLDJEQUEyRCxzQkFBc0Isc0RBQXNELDBCQUEwQixLQUFLLGtCQUFrQiwyQkFBMkIsS0FBSyxlQUFlLG9CQUFvQiwwQkFBMEIsZ0NBQWdDLEtBQUssb0NBQW9DLGdDQUFnQyxxQ0FBcUMsS0FBSyxtQ0FBbUMsZ0NBQWdDLDBCQUEwQixLQUFLLDJCQUEyQiwrQkFBK0IsS0FBSywyQkFBMkIsMkJBQTJCLEtBQUssa0JBQWtCLHNCQUFzQixnQ0FBZ0MsS0FBSyxlQUFlLGdDQUFnQywrQkFBK0IscUJBQXFCLDJCQUEyQiwwQkFBMEIsS0FBSyxxQkFBcUIsc0JBQXNCLHVDQUF1Qyx3QkFBd0IsMEJBQTBCLDJCQUEyQiw0QkFBNEIsS0FBSyxjQUFjLDhCQUE4QiwwQkFBMEIsZ0NBQWdDLEtBQUssdUJBQXVCLHFCQUFxQixzQkFBc0Isd0JBQXdCLEtBQUsseUJBQXlCLG9DQUFvQyx1Q0FBdUMsK0JBQStCLHFCQUFxQix5QkFBeUIseUJBQXlCLDJCQUEyQixtQ0FBbUMsS0FBSyxpQ0FBaUMsd0JBQXdCLEtBQUssZ0NBQWdDLHdCQUF3QixLQUFLLDRCQUE0QixrQ0FBa0Msc0JBQXNCLHNEQUFzRCwwQkFBMEIsd0JBQXdCLEtBQUssa0JBQWtCLHdCQUF3QiwyQkFBMkIsb0JBQW9CLDJCQUEyQixLQUFLLHFCQUFxQiw4QkFBOEIsaUNBQWlDLHFCQUFxQixxQkFBcUIsNEJBQTRCLCtCQUErQiwyQkFBMkIsK0JBQStCLDBCQUEwQixLQUFLLHVCQUF1QjtBQUMzK1U7QUFDQSwrREFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDVHZDO0FBQ2tHO0FBQ2xHLDhCQUE4Qix5RkFBMkI7QUFDekQ7QUFDQSxvREFBb0Qsb0JBQW9CLDRCQUE0QixLQUFLLCtCQUErQix5QkFBeUIsbUJBQW1CLDhCQUE4QixrQkFBa0IseUJBQXlCLHlCQUF5QixxQkFBcUIsNkRBQTZELGlCQUFpQixtQkFBbUIsZ0JBQWdCLHdCQUF3QixLQUFLLHFDQUFxQywwQkFBMEIsS0FBSyxrQkFBa0IsNkJBQTZCLG1CQUFtQiwwQkFBMEIseUJBQXlCLGtCQUFrQixLQUFLLHdCQUF3QixrQkFBa0IsS0FBSyxnQkFBZ0IsdUNBQXVDLHNCQUFzQiwwQkFBMEIseUNBQXlDLHVDQUF1Qyw0QkFBNEIsS0FBSyxtQkFBbUIsa0NBQWtDLHdCQUF3QiwwQkFBMEIseUJBQXlCLHVDQUF1Qyx3Q0FBd0MsS0FBSyxjQUFjLHVCQUF1QixLQUFLLG9CQUFvQiw4QkFBOEIsdUJBQXVCLHdCQUF3QiwwQkFBMEIsMEJBQTBCLDBCQUEwQix5QkFBeUIsS0FBSyxvQkFBb0IseUJBQXlCLDBCQUEwQixtQkFBbUIsdUNBQXVDLHVDQUF1QyxPQUFPLGNBQWMsMEJBQTBCLEtBQUssb0JBQW9CLG1CQUFtQixtQkFBbUIsaUJBQWlCLDJDQUEyQyxLQUFLLDRCQUE0Qix3QkFBd0Isc0JBQXNCLE9BQU8sc0ZBQXNGLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsWUFBWSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLE9BQU8sYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssc0JBQXNCLG9DQUFvQyxvQkFBb0IsNEJBQTRCLEtBQUssK0JBQStCLHlCQUF5QixtQkFBbUIsOEJBQThCLGtCQUFrQix5QkFBeUIseUJBQXlCLHFCQUFxQiw2REFBNkQsaUJBQWlCLG1CQUFtQixnQkFBZ0Isd0JBQXdCLEtBQUsscUNBQXFDLDBCQUEwQixLQUFLLGtCQUFrQiw2QkFBNkIsbUJBQW1CLDBCQUEwQix5QkFBeUIsa0JBQWtCLEtBQUssd0JBQXdCLGtCQUFrQixLQUFLLGdCQUFnQix1Q0FBdUMsc0JBQXNCLDBCQUEwQix5Q0FBeUMsdUNBQXVDLDRCQUE0QixLQUFLLG1CQUFtQixrQ0FBa0Msd0JBQXdCLDBCQUEwQix5QkFBeUIsdUNBQXVDLHdDQUF3QyxLQUFLLGNBQWMsdUJBQXVCLEtBQUssb0JBQW9CLDhCQUE4Qix1QkFBdUIsd0JBQXdCLDBCQUEwQiwwQkFBMEIsMEJBQTBCLHlCQUF5QixLQUFLLG9CQUFvQix5QkFBeUIsMEJBQTBCLG1CQUFtQiwrQkFBK0IsT0FBTyxjQUFjLDBCQUEwQixLQUFLLG9CQUFvQixtQkFBbUIsbUJBQW1CLGlCQUFpQiwyQ0FBMkMsS0FBSyw0QkFBNEIsd0JBQXdCLHNCQUFzQixtQkFBbUI7QUFDcHlJO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ052QztBQUNrRztBQUNsRyw4QkFBOEIseUZBQTJCO0FBQ3pEO0FBQ0EsdURBQXVELGtDQUFrQyx5QkFBeUIsMEJBQTBCLHdCQUF3QiwyQkFBMkIsS0FBSyxpQkFBaUIsa0NBQWtDLDBCQUEwQixLQUFLLGlCQUFpQiwyQkFBMkIsNEJBQTRCLDBCQUEwQixLQUFLLGlCQUFpQixrQ0FBa0MsS0FBSyxrQkFBa0IsMkJBQTJCLEtBQUssZ0JBQWdCLHlCQUF5QixLQUFLLGFBQWEsc0NBQXNDLG1CQUFtQix5QkFBeUIsS0FBSyxlQUFlLDRCQUE0QixrQ0FBa0Msb0JBQW9CLEtBQUssY0FBYyx5QkFBeUIsMkJBQTJCLDZCQUE2QiwyQkFBMkIsMEJBQTBCLEtBQUssV0FBVywyQkFBMkIsNEJBQTRCLDZCQUE2QixvQkFBb0IsS0FBSyxXQUFXLDJCQUEyQixvQkFBb0IsS0FBSyxXQUFXLG9CQUFvQiwyQkFBMkIsS0FBSyxXQUFXLHlCQUF5Qiw2QkFBNkIsS0FBSyxXQUFXLDRCQUE0QixvQkFBb0IsMkJBQTJCLHVEQUF1RCxLQUFLLFVBQVUsMEJBQTBCLDJCQUEyQixLQUFLLGNBQWMsMEJBQTBCLDJCQUEyQixLQUFLLHFDQUFxQyxzQ0FBc0MsZ0NBQWdDLEtBQUssbUNBQW1DLCtCQUErQixnQ0FBZ0MsS0FBSyxvQkFBb0IsZ0NBQWdDLGdDQUFnQyxLQUFLLE9BQU8sd0ZBQXdGLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLHVDQUF1QyxrQ0FBa0MseUJBQXlCLDBCQUEwQix3QkFBd0IsMkJBQTJCLEtBQUssaUJBQWlCLGtDQUFrQywwQkFBMEIsS0FBSyxpQkFBaUIsMkJBQTJCLDRCQUE0QiwwQkFBMEIsS0FBSyxpQkFBaUIsa0NBQWtDLEtBQUssa0JBQWtCLDJCQUEyQixLQUFLLGdCQUFnQix5QkFBeUIsS0FBSyxhQUFhLHNDQUFzQyxtQkFBbUIseUJBQXlCLEtBQUssZUFBZSw0QkFBNEIsa0NBQWtDLG9CQUFvQixLQUFLLGNBQWMseUJBQXlCLDJCQUEyQiw2QkFBNkIsMkJBQTJCLDBCQUEwQixLQUFLLFdBQVcsMkJBQTJCLDRCQUE0Qiw2QkFBNkIsb0JBQW9CLEtBQUssV0FBVywyQkFBMkIsb0JBQW9CLEtBQUssV0FBVyxvQkFBb0IsMkJBQTJCLEtBQUssV0FBVyx5QkFBeUIsNkJBQTZCLEtBQUssV0FBVyw0QkFBNEIsb0JBQW9CLDJCQUEyQix1REFBdUQsS0FBSyxVQUFVLDBCQUEwQiwyQkFBMkIsS0FBSyxjQUFjLDBCQUEwQiwyQkFBMkIsS0FBSyxxQ0FBcUMsc0NBQXNDLGdDQUFnQyxLQUFLLG1DQUFtQywrQkFBK0IsZ0NBQWdDLEtBQUssb0JBQW9CLGdDQUFnQyxnQ0FBZ0MsS0FBSyxtQkFBbUI7QUFDcDNJO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ052QztBQUMrRjtBQUNPO0FBQzFCO0FBQ0w7QUFDRztBQUNIO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNRO0FBQ2xGLDhCQUE4Qix5RkFBMkI7QUFDekQseUNBQXlDLDRGQUErQixDQUFDLGtFQUE2QjtBQUN0Ryx5Q0FBeUMsNEZBQStCLENBQUMsNkRBQTZCO0FBQ3RHLHlDQUF5Qyw0RkFBK0IsQ0FBQyxnRUFBNkI7QUFDdEcseUNBQXlDLDRGQUErQixDQUFDLDZEQUE2QjtBQUN0Ryx5Q0FBeUMsNEZBQStCLENBQUMsK0RBQTZCO0FBQ3RHLHlDQUF5Qyw0RkFBK0IsQ0FBQywrREFBNkI7QUFDdEcseUNBQXlDLDRGQUErQixDQUFDLCtEQUE2QjtBQUN0Ryx5Q0FBeUMsNEZBQStCLENBQUMsK0RBQTZCO0FBQ3RHLHlDQUF5Qyw0RkFBK0IsQ0FBQyxnRUFBNkI7QUFDdEcseUNBQXlDLDRGQUErQixDQUFDLGdFQUE2QjtBQUN0RywwQ0FBMEMsNEZBQStCLENBQUMsZ0VBQThCO0FBQ3hHLDBDQUEwQyw0RkFBK0IsQ0FBQyxnRUFBOEI7QUFDeEcsMENBQTBDLDRGQUErQixDQUFDLGdFQUE4QjtBQUN4RywwQ0FBMEMsNEZBQStCLENBQUMsZ0VBQThCO0FBQ3hHLDBDQUEwQyw0RkFBK0IsQ0FBQyxnRUFBOEI7QUFDeEcsMENBQTBDLDRGQUErQixDQUFDLGdFQUE4QjtBQUN4RywwQ0FBMEMsNEZBQStCLENBQUMsZ0VBQThCO0FBQ3hHLDBDQUEwQyw0RkFBK0IsQ0FBQyxnRUFBOEI7QUFDeEcsMENBQTBDLDRGQUErQixDQUFDLGdFQUE4QjtBQUN4RywwQ0FBMEMsNEZBQStCLENBQUMsZ0VBQThCO0FBQ3hHLDBDQUEwQyw0RkFBK0IsQ0FBQyxnRUFBOEI7QUFDeEcsMENBQTBDLDRGQUErQixDQUFDLGdFQUE4QjtBQUN4RywwQ0FBMEMsNEZBQStCLENBQUMsZ0VBQThCO0FBQ3hHLDBDQUEwQyw0RkFBK0IsQ0FBQyxnRUFBOEI7QUFDeEcsMENBQTBDLDRGQUErQixDQUFDLGdFQUE4QjtBQUN4RywwQ0FBMEMsNEZBQStCLENBQUMsZ0VBQThCO0FBQ3hHLDBDQUEwQyw0RkFBK0IsQ0FBQyxnRUFBOEI7QUFDeEcsMENBQTBDLDRGQUErQixDQUFDLGdFQUE4QjtBQUN4RywwQ0FBMEMsNEZBQStCLENBQUMsZ0VBQThCO0FBQ3hHLDBDQUEwQyw0RkFBK0IsQ0FBQyxnRUFBOEI7QUFDeEcsMENBQTBDLDRGQUErQixDQUFDLHdFQUE4QjtBQUN4RywwQ0FBMEMsNEZBQStCLENBQUMsZ0VBQThCO0FBQ3hHLDBDQUEwQyw0RkFBK0IsQ0FBQyxnRUFBOEI7QUFDeEcsMENBQTBDLDRGQUErQixDQUFDLGdFQUE4QjtBQUN4RywwQ0FBMEMsNEZBQStCLENBQUMsZ0VBQThCO0FBQ3hHLDBDQUEwQyw0RkFBK0IsQ0FBQyxnRUFBOEI7QUFDeEcsMENBQTBDLDRGQUErQixDQUFDLGdFQUE4QjtBQUN4RywwQ0FBMEMsNEZBQStCLENBQUMsZ0VBQThCO0FBQ3hHLDBDQUEwQyw0RkFBK0IsQ0FBQyxnRUFBOEI7QUFDeEcsMENBQTBDLDRGQUErQixDQUFDLGdFQUE4QjtBQUN4RywwQ0FBMEMsNEZBQStCLENBQUMsZ0VBQThCO0FBQ3hHLDBDQUEwQyw0RkFBK0IsQ0FBQyxnRUFBOEI7QUFDeEcsMENBQTBDLDRGQUErQixDQUFDLGdFQUE4QjtBQUN4RywwQ0FBMEMsNEZBQStCLENBQUMsZ0VBQThCO0FBQ3hHLDBDQUEwQyw0RkFBK0IsQ0FBQyxnRUFBOEI7QUFDeEcsMENBQTBDLDRGQUErQixDQUFDLGdFQUE4QjtBQUN4RywwQ0FBMEMsNEZBQStCLENBQUMsZ0VBQThCO0FBQ3hHLDBDQUEwQyw0RkFBK0IsQ0FBQyxnRUFBOEI7QUFDeEcsMENBQTBDLDRGQUErQixDQUFDLGdFQUE4QjtBQUN4RywwQ0FBMEMsNEZBQStCLENBQUMsZ0VBQThCO0FBQ3hHLDBDQUEwQyw0RkFBK0IsQ0FBQyxnRUFBOEI7QUFDeEcsMENBQTBDLDRGQUErQixDQUFDLGdFQUE4QjtBQUN4RywwQ0FBMEMsNEZBQStCLENBQUMsZ0VBQThCO0FBQ3hHLDBDQUEwQyw0RkFBK0IsQ0FBQyxnRUFBOEI7QUFDeEcsMENBQTBDLDRGQUErQixDQUFDLGdFQUE4QjtBQUN4RywwQ0FBMEMsNEZBQStCLENBQUMsZ0VBQThCO0FBQ3hHLDBDQUEwQyw0RkFBK0IsQ0FBQyxnRUFBOEI7QUFDeEcsMENBQTBDLDRGQUErQixDQUFDLHdFQUE4QjtBQUN4RztBQUNBLHVEQUF1RCw4QkFBOEIscUJBQXFCLGVBQWUsY0FBYywySkFBMkosTUFBTSxPQUFPLG1CQUFtQiwwQkFBMEIsR0FBRyxPQUFPLG1DQUFtQyxtQ0FBbUMsR0FBRyxrQkFBa0Isd0RBQXdELEdBQUcsaUJBQWlCLGtEQUFrRCxHQUFHLG1CQUFtQix1QkFBdUIsa0JBQWtCLEdBQUcseUJBQXlCLGtCQUFrQixLQUFLLGtCQUFrQiwrQkFBK0IsR0FBRyxlQUFlLGlCQUFpQixHQUFHLGVBQWUsdUJBQXVCLEdBQUcsY0FBYyxzQkFBc0IsR0FBRyxhQUFhLHdCQUF3QixHQUFHLGVBQWUsMkJBQTJCLEdBQUcsYUFBYSxpQkFBaUIsbUNBQW1DLEdBQUcsd0ZBQXdGLCtCQUErQixFQUFFLHdDQUF3QyxpQ0FBaUMsRUFBRSxpQkFBaUIsaUJBQWlCLDJCQUEyQixpQkFBaUIsR0FBRyxtQkFBbUIsa0JBQWtCLG1DQUFtQyxHQUFHLHFCQUFxQiwyQkFBMkIsZ0JBQWdCLGlCQUFpQixnQkFBZ0IsR0FBRyxvQkFBb0IsMkJBQTJCLGdCQUFnQixpQkFBaUIsZ0JBQWdCLEdBQUcsYUFBYSxzRUFBc0UsaUNBQWlDLDJCQUEyQixrQkFBa0IsaUJBQWlCLEdBQUcsYUFBYSxzRUFBc0UsaUNBQWlDLDJCQUEyQixrQkFBa0IsaUJBQWlCLEdBQUcsYUFBYSxzRUFBc0UsaUNBQWlDLDJCQUEyQixrQkFBa0IsaUJBQWlCLEdBQUcsYUFBYSxzRUFBc0UsaUNBQWlDLDJCQUEyQixrQkFBa0IsaUJBQWlCLEdBQUcscUNBQXFDLGtCQUFrQiw0QkFBNEIsR0FBRyxzQ0FBc0Msb0JBQW9CLDRCQUE0Qix1QkFBdUIscUJBQXFCLDRCQUE0QixpQkFBaUIsbURBQW1ELGlCQUFpQixHQUFHLGFBQWEsa0JBQWtCLG1DQUFtQyxvQkFBb0Isd0JBQXdCLEdBQUcsYUFBYSxrQkFBa0IsbUNBQW1DLHdCQUF3QixzQkFBc0IsdUJBQXVCLEdBQUcsYUFBYSxrQkFBa0IsbUNBQW1DLHdCQUF3QixzQkFBc0IsdUJBQXVCLEdBQUcsMEJBQTBCLHVCQUF1QixvQkFBb0IscUJBQXFCLHFCQUFxQixHQUFHLFdBQVcsMkJBQTJCLGdCQUFnQixpQkFBaUIsR0FBRyxXQUFXLHNFQUFzRSxJQUFJLFdBQVcsc0VBQXNFLElBQUksV0FBVyxzRUFBc0UsSUFBSSxXQUFXLHNFQUFzRSxJQUFJLFdBQVcsc0VBQXNFLElBQUksV0FBVyxzRUFBc0UsSUFBSSxXQUFXLHdFQUF3RSxJQUFJLFdBQVcsdUVBQXVFLEdBQUcsV0FBVyx1RUFBdUUsR0FBRyxXQUFXLHVFQUF1RSxHQUFHLFdBQVcsdUVBQXVFLEdBQUcsV0FBVyx1RUFBdUUsR0FBRyxXQUFXLHVFQUF1RSxJQUFJLFdBQVcsdUVBQXVFLElBQUksV0FBVyx1RUFBdUUsSUFBSSxXQUFXLHVFQUF1RSxJQUFJLFdBQVcsdUVBQXVFLEdBQUcsV0FBVyx1RUFBdUUsR0FBRyxXQUFXLHVFQUF1RSxHQUFHLFdBQVcsdUVBQXVFLEdBQUcsV0FBVyx1RUFBdUUsR0FBRyxXQUFXLHVFQUF1RSxHQUFHLFdBQVcsdUVBQXVFLEdBQUcsV0FBVyx1RUFBdUUsR0FBRyxXQUFXLHVFQUF1RSxHQUFHLFdBQVcsdUVBQXVFLEdBQUcsbUJBQW1CLHVFQUF1RSxHQUFHLGFBQWEsa0JBQWtCLDRCQUE0QixHQUFHLHNDQUFzQyxzQkFBc0IsOEJBQThCLHlCQUF5Qix1QkFBdUIsMkNBQTJDLG1CQUFtQixxREFBcUQsbUJBQW1CLEdBQUcsYUFBYSxvQkFBb0IscUNBQXFDLHNCQUFzQiwwQkFBMEIsR0FBRyxhQUFhLG9CQUFvQixxQ0FBcUMsMEJBQTBCLHdCQUF3Qix5QkFBeUIsR0FBRyxhQUFhLG9CQUFvQixxQ0FBcUMsMEJBQTBCLHdCQUF3Qix5QkFBeUIsR0FBRywwQkFBMEIsOEJBQThCLHlCQUF5Qiw2QkFBNkIseUJBQXlCLHNCQUFzQix1QkFBdUIsdUJBQXVCLEdBQUcsc0NBQXNDLG9CQUFvQiw0QkFBNEIsdUJBQXVCLHFCQUFxQiw0QkFBNEIsaUJBQWlCLG1EQUFtRCxpQkFBaUIsR0FBRyxhQUFhLGtCQUFrQixtQ0FBbUMsb0JBQW9CLHdCQUF3QixHQUFHLGFBQWEsa0JBQWtCLG1DQUFtQyx3QkFBd0Isc0JBQXNCLHVCQUF1QixHQUFHLGFBQWEsa0JBQWtCLG1DQUFtQyx3QkFBd0Isc0JBQXNCLHVCQUF1QixHQUFHLDBCQUEwQix1QkFBdUIsb0JBQW9CLHFCQUFxQixxQkFBcUIsR0FBRyxXQUFXLDJCQUEyQixnQkFBZ0IsaUJBQWlCLEdBQUcsV0FBVyx1RUFBdUUsSUFBSSxXQUFXLHVFQUF1RSxJQUFJLFdBQVcsdUVBQXVFLElBQUksV0FBVyx1RUFBdUUsSUFBSSxXQUFXLHVFQUF1RSxJQUFJLFdBQVcsdUVBQXVFLElBQUksV0FBVyx3RUFBd0UsSUFBSSxXQUFXLHVFQUF1RSxHQUFHLFdBQVcsdUVBQXVFLEdBQUcsV0FBVyx1RUFBdUUsR0FBRyxXQUFXLHVFQUF1RSxHQUFHLFdBQVcsdUVBQXVFLEdBQUcsV0FBVyx1RUFBdUUsSUFBSSxXQUFXLHVFQUF1RSxJQUFJLFdBQVcsdUVBQXVFLElBQUksV0FBVyx1RUFBdUUsSUFBSSxXQUFXLHVFQUF1RSxHQUFHLFdBQVcsdUVBQXVFLEdBQUcsV0FBVyx1RUFBdUUsR0FBRyxXQUFXLHVFQUF1RSxHQUFHLFdBQVcsdUVBQXVFLEdBQUcsV0FBVyx1RUFBdUUsR0FBRyxXQUFXLHVFQUF1RSxHQUFHLFdBQVcsdUVBQXVFLEdBQUcsV0FBVyx1RUFBdUUsR0FBRyxXQUFXLHVFQUF1RSxHQUFHLG1CQUFtQix1RUFBdUUsR0FBRyxhQUFhLGtCQUFrQiw0QkFBNEIsR0FBRyxTQUFTLG9GQUFvRixZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxpQkFBaUIsYUFBYSxNQUFNLGlCQUFpQixhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxpQkFBaUIsYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sWUFBWSx5QkFBeUIsMEJBQTBCLE1BQU0sVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssWUFBWSxNQUFNLFVBQVUsWUFBWSxNQUFNLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVks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Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsZ0VBQWdFLEU7Ozs7Ozs7Ozs7OztBQ0F0RywrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsZ0VBQWdFLEU7Ozs7Ozs7Ozs7OztBQ0F0RywrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7Ozs7OztBQ0E5RiwrREFBZSxxQkFBdUIsd0RBQXdELEU7Ozs7Ozs7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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSEFBMEg7QUFDMUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtRUFBbUU7O0FBRW5FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixxQkFBcUI7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsY0FBYztBQUNkLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDbHJDYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxFQUFFLHVKQUFzRTtBQUN4RSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBBbXBTdGF0ZUNvbnRleHQ6IFJlYWN0LkNvbnRleHQ8YW55PiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIEFtcFN0YXRlQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdBbXBTdGF0ZUNvbnRleHQnXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBbXBTdGF0ZUNvbnRleHQgfSBmcm9tICcuL2FtcC1jb250ZXh0J1xuXG5leHBvcnQgZnVuY3Rpb24gaXNJbkFtcE1vZGUoe1xuICBhbXBGaXJzdCA9IGZhbHNlLFxuICBoeWJyaWQgPSBmYWxzZSxcbiAgaGFzUXVlcnkgPSBmYWxzZSxcbn0gPSB7fSk6IGJvb2xlYW4ge1xuICByZXR1cm4gYW1wRmlyc3QgfHwgKGh5YnJpZCAmJiBoYXNRdWVyeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFtcCgpOiBib29sZWFuIHtcbiAgLy8gRG9uJ3QgYXNzaWduIHRoZSBjb250ZXh0IHZhbHVlIHRvIGEgdmFyaWFibGUgdG8gc2F2ZSBieXRlc1xuICByZXR1cm4gaXNJbkFtcE1vZGUoUmVhY3QudXNlQ29udGV4dChBbXBTdGF0ZUNvbnRleHQpKVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBFZmZlY3QgZnJvbSAnLi9zaWRlLWVmZmVjdCdcbmltcG9ydCB7IEFtcFN0YXRlQ29udGV4dCB9IGZyb20gJy4vYW1wLWNvbnRleHQnXG5pbXBvcnQgeyBIZWFkTWFuYWdlckNvbnRleHQgfSBmcm9tICcuL2hlYWQtbWFuYWdlci1jb250ZXh0J1xuaW1wb3J0IHsgaXNJbkFtcE1vZGUgfSBmcm9tICcuL2FtcCdcblxudHlwZSBXaXRoSW5BbXBNb2RlID0ge1xuICBpbkFtcE1vZGU/OiBib29sZWFuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0SGVhZChpbkFtcE1vZGUgPSBmYWxzZSk6IEpTWC5FbGVtZW50W10ge1xuICBjb25zdCBoZWFkID0gWzxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XVxuICBpZiAoIWluQW1wTW9kZSkge1xuICAgIGhlYWQucHVzaCg8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz4pXG4gIH1cbiAgcmV0dXJuIGhlYWRcbn1cblxuZnVuY3Rpb24gb25seVJlYWN0RWxlbWVudChcbiAgbGlzdDogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+LFxuICBjaGlsZDogUmVhY3QuUmVhY3RDaGlsZFxuKTogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+IHtcbiAgLy8gUmVhY3QgY2hpbGRyZW4gY2FuIGJlIFwic3RyaW5nXCIgb3IgXCJudW1iZXJcIiBpbiB0aGlzIGNhc2Ugd2UgaWdub3JlIHRoZW0gZm9yIGJhY2t3YXJkcyBjb21wYXRcbiAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGNoaWxkID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBsaXN0XG4gIH1cbiAgLy8gQWRkcyBzdXBwb3J0IGZvciBSZWFjdC5GcmFnbWVudFxuICBpZiAoY2hpbGQudHlwZSA9PT0gUmVhY3QuRnJhZ21lbnQpIHtcbiAgICByZXR1cm4gbGlzdC5jb25jYXQoXG4gICAgICBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkLnByb3BzLmNoaWxkcmVuKS5yZWR1Y2UoXG4gICAgICAgIChcbiAgICAgICAgICBmcmFnbWVudExpc3Q6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PixcbiAgICAgICAgICBmcmFnbWVudENoaWxkOiBSZWFjdC5SZWFjdENoaWxkXG4gICAgICAgICk6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PiA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIGZyYWdtZW50Q2hpbGQgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICAgICB0eXBlb2YgZnJhZ21lbnRDaGlsZCA9PT0gJ251bWJlcidcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBmcmFnbWVudExpc3RcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZyYWdtZW50TGlzdC5jb25jYXQoZnJhZ21lbnRDaGlsZClcbiAgICAgICAgfSxcbiAgICAgICAgW11cbiAgICAgIClcbiAgICApXG4gIH1cbiAgcmV0dXJuIGxpc3QuY29uY2F0KGNoaWxkKVxufVxuXG5jb25zdCBNRVRBVFlQRVMgPSBbJ25hbWUnLCAnaHR0cEVxdWl2JywgJ2NoYXJTZXQnLCAnaXRlbVByb3AnXVxuXG4vKlxuIHJldHVybnMgYSBmdW5jdGlvbiBmb3IgZmlsdGVyaW5nIGhlYWQgY2hpbGQgZWxlbWVudHNcbiB3aGljaCBzaG91bGRuJ3QgYmUgZHVwbGljYXRlZCwgbGlrZSA8dGl0bGUvPlxuIEFsc28gYWRkcyBzdXBwb3J0IGZvciBkZWR1cGxpY2F0ZWQgYGtleWAgcHJvcGVydGllc1xuKi9cbmZ1bmN0aW9uIHVuaXF1ZSgpIHtcbiAgY29uc3Qga2V5cyA9IG5ldyBTZXQoKVxuICBjb25zdCB0YWdzID0gbmV3IFNldCgpXG4gIGNvbnN0IG1ldGFUeXBlcyA9IG5ldyBTZXQoKVxuICBjb25zdCBtZXRhQ2F0ZWdvcmllczogeyBbbWV0YXR5cGU6IHN0cmluZ106IFNldDxzdHJpbmc+IH0gPSB7fVxuXG4gIHJldHVybiAoaDogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4pID0+IHtcbiAgICBsZXQgaXNVbmlxdWUgPSB0cnVlXG4gICAgbGV0IGhhc0tleSA9IGZhbHNlXG5cbiAgICBpZiAoaC5rZXkgJiYgdHlwZW9mIGgua2V5ICE9PSAnbnVtYmVyJyAmJiBoLmtleS5pbmRleE9mKCckJykgPiAwKSB7XG4gICAgICBoYXNLZXkgPSB0cnVlXG4gICAgICBjb25zdCBrZXkgPSBoLmtleS5zbGljZShoLmtleS5pbmRleE9mKCckJykgKyAxKVxuICAgICAgaWYgKGtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgaXNVbmlxdWUgPSBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAga2V5cy5hZGQoa2V5KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWZhdWx0LWNhc2VcbiAgICBzd2l0Y2ggKGgudHlwZSkge1xuICAgICAgY2FzZSAndGl0bGUnOlxuICAgICAgY2FzZSAnYmFzZSc6XG4gICAgICAgIGlmICh0YWdzLmhhcyhoLnR5cGUpKSB7XG4gICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhZ3MuYWRkKGgudHlwZSlcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbWV0YSc6XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBNRVRBVFlQRVMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBtZXRhdHlwZSA9IE1FVEFUWVBFU1tpXVxuICAgICAgICAgIGlmICghaC5wcm9wcy5oYXNPd25Qcm9wZXJ0eShtZXRhdHlwZSkpIGNvbnRpbnVlXG5cbiAgICAgICAgICBpZiAobWV0YXR5cGUgPT09ICdjaGFyU2V0Jykge1xuICAgICAgICAgICAgaWYgKG1ldGFUeXBlcy5oYXMobWV0YXR5cGUpKSB7XG4gICAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2VcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1ldGFUeXBlcy5hZGQobWV0YXR5cGUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gaC5wcm9wc1ttZXRhdHlwZV1cbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBtZXRhQ2F0ZWdvcmllc1ttZXRhdHlwZV0gfHwgbmV3IFNldCgpXG4gICAgICAgICAgICBpZiAoKG1ldGF0eXBlICE9PSAnbmFtZScgfHwgIWhhc0tleSkgJiYgY2F0ZWdvcmllcy5oYXMoY2F0ZWdvcnkpKSB7XG4gICAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2VcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNhdGVnb3JpZXMuYWRkKGNhdGVnb3J5KVxuICAgICAgICAgICAgICBtZXRhQ2F0ZWdvcmllc1ttZXRhdHlwZV0gPSBjYXRlZ29yaWVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcmV0dXJuIGlzVW5pcXVlXG4gIH1cbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIGhlYWRFbGVtZW50cyBMaXN0IG9mIG11bHRpcGxlIDxIZWFkPiBpbnN0YW5jZXNcbiAqL1xuZnVuY3Rpb24gcmVkdWNlQ29tcG9uZW50cyhcbiAgaGVhZEVsZW1lbnRzOiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4sXG4gIHByb3BzOiBXaXRoSW5BbXBNb2RlXG4pIHtcbiAgcmV0dXJuIGhlYWRFbGVtZW50c1xuICAgIC5yZWR1Y2UoXG4gICAgICAobGlzdDogUmVhY3QuUmVhY3RDaGlsZFtdLCBoZWFkRWxlbWVudDogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4pID0+IHtcbiAgICAgICAgY29uc3QgaGVhZEVsZW1lbnRDaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoXG4gICAgICAgICAgaGVhZEVsZW1lbnQucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gbGlzdC5jb25jYXQoaGVhZEVsZW1lbnRDaGlsZHJlbilcbiAgICAgIH0sXG4gICAgICBbXVxuICAgIClcbiAgICAucmVkdWNlKG9ubHlSZWFjdEVsZW1lbnQsIFtdKVxuICAgIC5yZXZlcnNlKClcbiAgICAuY29uY2F0KGRlZmF1bHRIZWFkKHByb3BzLmluQW1wTW9kZSkpXG4gICAgLmZpbHRlcih1bmlxdWUoKSlcbiAgICAucmV2ZXJzZSgpXG4gICAgLm1hcCgoYzogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4sIGk6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gYy5rZXkgfHwgaVxuICAgICAgaWYgKFxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyAmJlxuICAgICAgICBwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMgJiZcbiAgICAgICAgIXByb3BzLmluQW1wTW9kZVxuICAgICAgKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjLnR5cGUgPT09ICdsaW5rJyAmJlxuICAgICAgICAgIGMucHJvcHNbJ2hyZWYnXSAmJlxuICAgICAgICAgIC8vIFRPRE8ocHJhdGVla2JoQCk6IFJlcGxhY2UgdGhpcyB3aXRoIGNvbnN0IGZyb20gYGNvbnN0YW50c2Agd2hlbiB0aGUgdHJlZSBzaGFraW5nIHdvcmtzLlxuICAgICAgICAgIFtcbiAgICAgICAgICAgICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzcycsXG4gICAgICAgICAgICAnaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvJyxcbiAgICAgICAgICBdLnNvbWUoKHVybCkgPT4gYy5wcm9wc1snaHJlZiddLnN0YXJ0c1dpdGgodXJsKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB7IC4uLihjLnByb3BzIHx8IHt9KSB9XG4gICAgICAgICAgbmV3UHJvcHNbJ2RhdGEtaHJlZiddID0gbmV3UHJvcHNbJ2hyZWYnXVxuICAgICAgICAgIG5ld1Byb3BzWydocmVmJ10gPSB1bmRlZmluZWRcblxuICAgICAgICAgIC8vIEFkZCB0aGlzIGF0dHJpYnV0ZSB0byBtYWtlIGl0IGVhc3kgdG8gaWRlbnRpZnkgb3B0aW1pemVkIHRhZ3NcbiAgICAgICAgICBuZXdQcm9wc1snZGF0YS1vcHRpbWl6ZWQtZm9udHMnXSA9IHRydWVcblxuICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoYywgbmV3UHJvcHMpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoYywgeyBrZXkgfSlcbiAgICB9KVxufVxuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGluamVjdHMgZWxlbWVudHMgdG8gYDxoZWFkPmAgb2YgeW91ciBwYWdlLlxuICogVG8gYXZvaWQgZHVwbGljYXRlZCBgdGFnc2AgaW4gYDxoZWFkPmAgeW91IGNhbiB1c2UgdGhlIGBrZXlgIHByb3BlcnR5LCB3aGljaCB3aWxsIG1ha2Ugc3VyZSBldmVyeSB0YWcgaXMgb25seSByZW5kZXJlZCBvbmNlLlxuICovXG5mdW5jdGlvbiBIZWFkKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgY29uc3QgYW1wU3RhdGUgPSB1c2VDb250ZXh0KEFtcFN0YXRlQ29udGV4dClcbiAgY29uc3QgaGVhZE1hbmFnZXIgPSB1c2VDb250ZXh0KEhlYWRNYW5hZ2VyQ29udGV4dClcbiAgcmV0dXJuIChcbiAgICA8RWZmZWN0XG4gICAgICByZWR1Y2VDb21wb25lbnRzVG9TdGF0ZT17cmVkdWNlQ29tcG9uZW50c31cbiAgICAgIGhlYWRNYW5hZ2VyPXtoZWFkTWFuYWdlcn1cbiAgICAgIGluQW1wTW9kZT17aXNJbkFtcE1vZGUoYW1wU3RhdGUpfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0VmZmVjdD5cbiAgKVxufVxuXG4vLyBUT0RPOiBSZW1vdmUgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZVxuSGVhZC5yZXdpbmQgPSAoKSA9PiB7fVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcblxudHlwZSBTdGF0ZSA9IEpTWC5FbGVtZW50W10gfCB1bmRlZmluZWRcblxudHlwZSBTaWRlRWZmZWN0UHJvcHMgPSB7XG4gIHJlZHVjZUNvbXBvbmVudHNUb1N0YXRlOiA8VD4oXG4gICAgY29tcG9uZW50czogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+LFxuICAgIHByb3BzOiBUXG4gICkgPT4gU3RhdGVcbiAgaGFuZGxlU3RhdGVDaGFuZ2U/OiAoc3RhdGU6IFN0YXRlKSA9PiB2b2lkXG4gIGhlYWRNYW5hZ2VyOiBhbnlcbiAgaW5BbXBNb2RlPzogYm9vbGVhblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudDxTaWRlRWZmZWN0UHJvcHM+IHtcbiAgcHJpdmF0ZSBfaGFzSGVhZE1hbmFnZXI6IGJvb2xlYW5cblxuICBlbWl0Q2hhbmdlID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLl9oYXNIZWFkTWFuYWdlcikge1xuICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci51cGRhdGVIZWFkKFxuICAgICAgICB0aGlzLnByb3BzLnJlZHVjZUNvbXBvbmVudHNUb1N0YXRlKFxuICAgICAgICAgIFsuLi50aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXNdLFxuICAgICAgICAgIHRoaXMucHJvcHNcbiAgICAgICAgKVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLl9oYXNIZWFkTWFuYWdlciA9XG4gICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyICYmIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlc1xuXG4gICAgaWYgKGlzU2VydmVyICYmIHRoaXMuX2hhc0hlYWRNYW5hZ2VyKSB7XG4gICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXMuYWRkKHRoaXMpXG4gICAgICB0aGlzLmVtaXRDaGFuZ2UoKVxuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5faGFzSGVhZE1hbmFnZXIpIHtcbiAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5hZGQodGhpcylcbiAgICB9XG4gICAgdGhpcy5lbWl0Q2hhbmdlKClcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5lbWl0Q2hhbmdlKClcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5faGFzSGVhZE1hbmFnZXIpIHtcbiAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5kZWxldGUodGhpcylcbiAgICB9XG4gICAgdGhpcy5lbWl0Q2hhbmdlKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG4iLCJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuaW1wb3J0ICcuL3dpL3dvcmRpbmZvLmNzcydcclxuaW1wb3J0ICcuL3dtL21hc3Rlcm1pbmQuY3NzJ1xyXG5pbXBvcnQgJy4vcGIvcHJpc29uYnJlYWsuY3NzJ1xyXG5pbXBvcnQgJy4vZnliL2Z5Yi5jc3MnXHJcbmltcG9ydCAnLi9tb3JwaG8vbW9ycGhvLmNzcydcclxuaW1wb3J0ICcuL3RtL3RtLmNzcydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoe0NvbXBvbmVudCxwYWdlUHJvcHN9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMi9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBcclxuICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIC8qIEkgYWRkZWQgbWF0ZXJpYWwgaWNvbnMgKi9cclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuNS4xLnNsaW0ubWluLmpzXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IFxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vcG9wcGVyLmpzQDEuMTYuMS9kaXN0L3VtZC9wb3BwZXIubWluLmpzXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IFxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4yL2pzL2Jvb3RzdHJhcC5taW4uanNcIiBcclxuICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIC8qIEkgYWRkZWQgdzMuY3NzICovXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lnczc2Nob29scy5jb20vdzNjc3MvNC93My5jc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayAvKiBJIGhhdmUgbXkgb3duIGNzcyBmaWxlIG9uIGdpdGh1YiBzbyBJIGNhbiBjaGFuZ2UgdGhlIFVJIGJ1dCBzdGlsbCBoYXZlIHRvIGRlcGxveWluZyB0aGlzIGFwcCB0byBzZWUgY2hhbmdlcyAqL1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3RpbGVydW5uZXIuZ2l0aHViLmlvL3RyY3NzLmNzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHsvKiA8c2NyaXB0XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIHRoZXNlIGZvbnRhd2Vzb21lIGljb25zIGFyZSBzb21ldGltaXNoIGFib3V0IHdoZXRoZXIgdG8gc2hvdyB1cCBvciBub3QuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSSBzd2l0Y2hlZCB0byBtYXRlcmlhbC1pY29ucyBpbnN0ZWFkLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNyYz1cImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS83NzUxNGQyOGFhLmpzXCIgLy8gUm9kXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3JjPVwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tLzQ3ZTdjNWZjMjMuanNcIiAvLyBDaHJpc3RvcGhlclxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS9UaWxlUnVubmVyLmpzXCIgLy8gQ2hyaXN0b3BoZXJcclxuICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgPHRpdGxlPlRpbGUgUnVubmVyPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi90aWxlVFIuaWNvXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVGlsZSBSdW5uZXIgLSBGdW4gd2l0aCB3b3Jkc1wiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJUaWxlIFJ1bm5lclwiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJBIGZldyB3b3JkIGdhbWVzIGFuZCBhIHdvcmQgbG9va3VwIGZlYXR1cmVcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiL3RpbGVUUi5wbmdcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6d2lkdGhcIiBjb250ZW50PVwiNDAwXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOmhlaWdodFwiIGNvbnRlbnQ9XCI0MDBcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD1cIlRpbGUgUnVubmVyIC0gRnVuIHdpdGggd29yZHNcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD1cIi90aWxlVFIucG5nXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkEgZmV3IHdvcmQgZ2FtZXMgYSBhbmQgYSB3b3JkIGxvb2t1cCBmZWF0dXJlXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbVwiIC8+XHJcbiAgICAgICAgPG1lYXQgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwiVGlsZSBSdW5uZXJcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6bG9jYWxlXCIgY29udGVudD1cImVuX1VTXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfS8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9fYXBwXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHAuanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9meWIuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL2Z5Yi5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL2Z5Yi5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL21vcnBoby5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vbW9ycGhvLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vbW9ycGhvLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vcHJpc29uYnJlYWsuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL3ByaXNvbmJyZWFrLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vcHJpc29uYnJlYWsuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi90bS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vdG0uY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi90bS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL3dvcmRpbmZvLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi93b3JkaW5mby5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL3dvcmRpbmZvLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vbWFzdGVybWluZC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vbWFzdGVybWluZC5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL21hc3Rlcm1pbmQuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9nbG9iYWxzLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9nbG9iYWxzLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vZ2xvYmFscy5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7Y29uc3QgaXNPbGRJRT1mdW5jdGlvbiBpc09sZElFKCl7bGV0IG1lbW87cmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCl7aWYodHlwZW9mIG1lbW89PT0ndW5kZWZpbmVkJyl7Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncbi8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbi8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbi8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5tZW1vPUJvb2xlYW4od2luZG93JiZkb2N1bWVudCYmZG9jdW1lbnQuYWxsJiYhd2luZG93LmF0b2IpO31yZXR1cm4gbWVtbzt9O30oKTtjb25zdCBnZXRUYXJnZXQ9ZnVuY3Rpb24gZ2V0VGFyZ2V0KCl7Y29uc3QgbWVtbz17fTtyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KXtpZih0eXBlb2YgbWVtb1t0YXJnZXRdPT09J3VuZGVmaW5lZCcpe2xldCBzdHlsZVRhcmdldD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbmlmKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCYmc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpe3RyeXsvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbnN0eWxlVGFyZ2V0PXN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO31jYXRjaChlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuc3R5bGVUYXJnZXQ9bnVsbDt9fW1lbW9bdGFyZ2V0XT1zdHlsZVRhcmdldDt9cmV0dXJuIG1lbW9bdGFyZ2V0XTt9O30oKTtjb25zdCBzdHlsZXNJbkRvbT1bXTtmdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKXtsZXQgcmVzdWx0PS0xO2ZvcihsZXQgaT0wO2k8c3R5bGVzSW5Eb20ubGVuZ3RoO2krKyl7aWYoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllcj09PWlkZW50aWZpZXIpe3Jlc3VsdD1pO2JyZWFrO319cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyl7Y29uc3QgaWRDb3VudE1hcD17fTtjb25zdCBpZGVudGlmaWVycz1bXTtmb3IobGV0IGk9MDtpPGxpc3QubGVuZ3RoO2krKyl7Y29uc3QgaXRlbT1saXN0W2ldO2NvbnN0IGlkPW9wdGlvbnMuYmFzZT9pdGVtWzBdK29wdGlvbnMuYmFzZTppdGVtWzBdO2NvbnN0IGNvdW50PWlkQ291bnRNYXBbaWRdfHwwO2NvbnN0IGlkZW50aWZpZXI9aWQrJyAnK2NvdW50LnRvU3RyaW5nKCk7aWRDb3VudE1hcFtpZF09Y291bnQrMTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtjb25zdCBvYmo9e2NzczppdGVtWzFdLG1lZGlhOml0ZW1bMl0sc291cmNlTWFwOml0ZW1bM119O2lmKGluZGV4IT09LTEpe3N0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTt9ZWxzZXtzdHlsZXNJbkRvbS5wdXNoKHtpZGVudGlmaWVyOmlkZW50aWZpZXIsdXBkYXRlcjphZGRTdHlsZShvYmosb3B0aW9ucykscmVmZXJlbmNlczoxfSk7fWlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7fXJldHVybiBpZGVudGlmaWVyczt9ZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpe2NvbnN0IHN0eWxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7Y29uc3QgYXR0cmlidXRlcz1vcHRpb25zLmF0dHJpYnV0ZXN8fHt9O2lmKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlPT09J3VuZGVmaW5lZCcpe2NvbnN0IG5vbmNlPS8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxudHlwZW9mIF9fd2VicGFja19ub25jZV9fIT09J3VuZGVmaW5lZCc/X193ZWJwYWNrX25vbmNlX186bnVsbDtpZihub25jZSl7YXR0cmlidXRlcy5ub25jZT1ub25jZTt9fU9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24oa2V5KXtzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LGF0dHJpYnV0ZXNba2V5XSk7fSk7aWYodHlwZW9mIG9wdGlvbnMuaW5zZXJ0PT09J2Z1bmN0aW9uJyl7b3B0aW9ucy5pbnNlcnQoc3R5bGUpO31lbHNle2NvbnN0IHRhcmdldD1nZXRUYXJnZXQob3B0aW9ucy5pbnNlcnR8fCdoZWFkJyk7aWYoIXRhcmdldCl7dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTt9dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTt9cmV0dXJuIHN0eWxlO31mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpey8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuaWYoc3R5bGUucGFyZW50Tm9kZT09PW51bGwpe3JldHVybiBmYWxzZTt9c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7fS8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL2NvbnN0IHJlcGxhY2VUZXh0PWZ1bmN0aW9uIHJlcGxhY2VUZXh0KCl7Y29uc3QgdGV4dFN0b3JlPVtdO3JldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LHJlcGxhY2VtZW50KXt0ZXh0U3RvcmVbaW5kZXhdPXJlcGxhY2VtZW50O3JldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO307fSgpO2Z1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsaW5kZXgscmVtb3ZlLG9iail7Y29uc3QgY3NzPXJlbW92ZT8nJzpvYmoubWVkaWE/J0BtZWRpYSAnK29iai5tZWRpYSsnIHsnK29iai5jc3MrJ30nOm9iai5jc3M7Ly8gRm9yIG9sZCBJRVxuLyogaXN0YW5idWwgaWdub3JlIGlmICAqL2lmKHN0eWxlLnN0eWxlU2hlZXQpe3N0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dD1yZXBsYWNlVGV4dChpbmRleCxjc3MpO31lbHNle2NvbnN0IGNzc05vZGU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtjb25zdCBjaGlsZE5vZGVzPXN0eWxlLmNoaWxkTm9kZXM7aWYoY2hpbGROb2Rlc1tpbmRleF0pe3N0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTt9aWYoY2hpbGROb2Rlcy5sZW5ndGgpe3N0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLGNoaWxkTm9kZXNbaW5kZXhdKTt9ZWxzZXtzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTt9fX1mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLG9wdGlvbnMsb2JqKXtsZXQgY3NzPW9iai5jc3M7Y29uc3QgbWVkaWE9b2JqLm1lZGlhO2NvbnN0IHNvdXJjZU1hcD1vYmouc291cmNlTWFwO2lmKG1lZGlhKXtzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJyxtZWRpYSk7fWVsc2V7c3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO31pZihzb3VyY2VNYXAmJnR5cGVvZiBidG9hIT09J3VuZGVmaW5lZCcpe2Nzcys9J1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJytidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpKycgKi8nO30vLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PWNzczt9ZWxzZXt3aGlsZShzdHlsZS5maXJzdENoaWxkKXtzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTt9c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7fX1sZXQgc2luZ2xldG9uPW51bGw7bGV0IHNpbmdsZXRvbkNvdW50ZXI9MDtmdW5jdGlvbiBhZGRTdHlsZShvYmosb3B0aW9ucyl7bGV0IHN0eWxlO2xldCB1cGRhdGU7bGV0IHJlbW92ZTtpZihvcHRpb25zLnNpbmdsZXRvbil7Y29uc3Qgc3R5bGVJbmRleD1zaW5nbGV0b25Db3VudGVyKys7c3R5bGU9c2luZ2xldG9ufHwoc2luZ2xldG9uPWluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7dXBkYXRlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsZmFsc2UpO3JlbW92ZT1hcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCxzdHlsZSxzdHlsZUluZGV4LHRydWUpO31lbHNle3N0eWxlPWluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTt1cGRhdGU9YXBwbHlUb1RhZy5iaW5kKG51bGwsc3R5bGUsb3B0aW9ucyk7cmVtb3ZlPWZ1bmN0aW9uKCl7cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTt9O311cGRhdGUob2JqKTtyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKXtpZihuZXdPYmope2lmKG5ld09iai5jc3M9PT1vYmouY3NzJiZuZXdPYmoubWVkaWE9PT1vYmoubWVkaWEmJm5ld09iai5zb3VyY2VNYXA9PT1vYmouc291cmNlTWFwKXtyZXR1cm47fXVwZGF0ZShvYmo9bmV3T2JqKTt9ZWxzZXtyZW1vdmUoKTt9fTt9bW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24obGlzdCxvcHRpb25zKXtvcHRpb25zPW9wdGlvbnN8fHt9Oy8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuaWYoIW9wdGlvbnMuc2luZ2xldG9uJiZ0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24hPT0nYm9vbGVhbicpe29wdGlvbnMuc2luZ2xldG9uPWlzT2xkSUUoKTt9bGlzdD1saXN0fHxbXTtsZXQgbGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShsaXN0LG9wdGlvbnMpO3JldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCl7bmV3TGlzdD1uZXdMaXN0fHxbXTtpZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkhPT0nW29iamVjdCBBcnJheV0nKXtyZXR1cm47fWZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO3N0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07fWNvbnN0IG5ld0xhc3RJZGVudGlmaWVycz1tb2R1bGVzVG9Eb20obmV3TGlzdCxvcHRpb25zKTtmb3IobGV0IGk9MDtpPGxhc3RJZGVudGlmaWVycy5sZW5ndGg7aSsrKXtjb25zdCBpZGVudGlmaWVyPWxhc3RJZGVudGlmaWVyc1tpXTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtpZihzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcz09PTApe3N0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKCk7c3R5bGVzSW5Eb20uc3BsaWNlKGluZGV4LDEpO319bGFzdElkZW50aWZpZXJzPW5ld0xhc3RJZGVudGlmaWVyczt9O307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMubWFwIiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbj17NzYyOmZ1bmN0aW9uKG4pe24uZXhwb3J0cz1mdW5jdGlvbihuKXt2YXIgdD1bXTt0LnRvU3RyaW5nPWZ1bmN0aW9uIHRvU3RyaW5nKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHQpe3ZhciByPWNzc1dpdGhNYXBwaW5nVG9TdHJpbmcodCxuKTtpZih0WzJdKXtyZXR1cm5cIkBtZWRpYSBcIi5jb25jYXQodFsyXSxcIiB7XCIpLmNvbmNhdChyLFwifVwiKX1yZXR1cm4gcn0pLmpvaW4oXCJcIil9O3QuaT1mdW5jdGlvbihuLHIsbyl7aWYodHlwZW9mIG49PT1cInN0cmluZ1wiKXtuPVtbbnVsbCxuLFwiXCJdXX12YXIgZT17fTtpZihvKXtmb3IodmFyIGE9MDthPHRoaXMubGVuZ3RoO2ErKyl7dmFyIGM9dGhpc1thXVswXTtpZihjIT1udWxsKXtlW2NdPXRydWV9fX1mb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIHU9W10uY29uY2F0KG5baV0pO2lmKG8mJmVbdVswXV0pe2NvbnRpbnVlfWlmKHIpe2lmKCF1WzJdKXt1WzJdPXJ9ZWxzZXt1WzJdPVwiXCIuY29uY2F0KHIsXCIgYW5kIFwiKS5jb25jYXQodVsyXSl9fXQucHVzaCh1KX19O3JldHVybiB0fTtmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKG4sdCl7dmFyIHI9blsxXXx8XCJcIjt2YXIgbz1uWzNdO2lmKCFvKXtyZXR1cm4gcn1pZih0JiZ0eXBlb2YgYnRvYT09PVwiZnVuY3Rpb25cIil7dmFyIGU9dG9Db21tZW50KG8pO3ZhciBhPW8uc291cmNlcy5tYXAoZnVuY3Rpb24obil7cmV0dXJuXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChvLnNvdXJjZVJvb3R8fFwiXCIpLmNvbmNhdChuLFwiICovXCIpfSk7cmV0dXJuW3JdLmNvbmNhdChhKS5jb25jYXQoW2VdKS5qb2luKFwiXFxuXCIpfXJldHVybltyXS5qb2luKFwiXFxuXCIpfWZ1bmN0aW9uIHRvQ29tbWVudChuKXt2YXIgdD1idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShuKSkpKTt2YXIgcj1cInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdCh0KTtyZXR1cm5cIi8qIyBcIi5jb25jYXQocixcIiAqL1wiKX19fTt2YXIgdD17fTtmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKHIpe2lmKHRbcl0pe3JldHVybiB0W3JdLmV4cG9ydHN9dmFyIG89dFtyXT17ZXhwb3J0czp7fX07dmFyIGU9dHJ1ZTt0cnl7bltyXShvLG8uZXhwb3J0cyxfX25jY3dwY2tfcmVxdWlyZV9fKTtlPWZhbHNlfWZpbmFsbHl7aWYoZSlkZWxldGUgdFtyXX1yZXR1cm4gby5leHBvcnRzfV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3JldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDc2Mil9KCk7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmhlYXJ0IHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuLmxvbmcge1xcclxcbiAgICBmb250LXNpemU6IHgtc21hbGw7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG4uZnJ5TGV0dGVyQWN0aW9uQnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XFxyXFxufVxcclxcbi5mcnlMZXR0ZXJBY3Rpb25CdXR0b25JY29uIHtcXHJcXG4gICAgbWFyZ2luOiA1cHggMHB4IDBweCAwcHg7XFxyXFxufVxcclxcbi5mcnlMZXR0ZXJEaXYge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHBhZGRpbmc6IDJweCAxMHB4IDJweCAycHg7XFxyXFxuICAgIG1hcmdpbjogMHB4IDBweCAxMHB4IDEwcHg7XFxyXFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcbi5meWJGcnlMZXR0ZXIge1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAycHg7XFxyXFxufVxcclxcbi5meWJGcnlMZXR0ZXIuU2VsZWN0ZWQge1xcclxcbiAgICBjb2xvcjogYmx1ZTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiB0aGljaztcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiBibHVlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG4udGhpbkNoYXQge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcbi50aGluQ2hhdEZyb20ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4udGhpbkNoYXRGcm9tOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiPlxcXCI7XFxyXFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxyXFxufVxcclxcbi50aGluQ2hhdEZyb206OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcIjpcXFwiO1xcclxcbiAgICBjb2xvcjogeWVsbG93O1xcclxcbiAgICBmb250LXNpemU6IHNtYWxsO1xcclxcbn1cXHJcXG4udGhpbkNoYXRNc2cge1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGNvbG9yOndoaXRlc21va2U7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG4udGhpbkNoYXRJbnB1dCB7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgY29sb3I6d2hpdGVzbW9rZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi50aGluQ2hhdElucHV0RW1wdHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LWJsb2NrLXNpemU6IDMwcHg7XFxyXFxuICAgIGN1cnNvcjogdGV4dDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3BhZ2VzL2Z5Yi9meWIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBaUI7WUFBakIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsV0FBVztBQUNmO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZWFydCB7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcbi5sb25nIHtcXHJcXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuLmZyeUxldHRlckFjdGlvbkJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xcclxcbn1cXHJcXG4uZnJ5TGV0dGVyQWN0aW9uQnV0dG9uSWNvbiB7XFxyXFxuICAgIG1hcmdpbjogNXB4IDBweCAwcHggMHB4O1xcclxcbn1cXHJcXG4uZnJ5TGV0dGVyRGl2IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHBhZGRpbmc6IDJweCAxMHB4IDJweCAycHg7XFxyXFxuICAgIG1hcmdpbjogMHB4IDBweCAxMHB4IDEwcHg7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG4uZnliRnJ5TGV0dGVyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwcHggMnB4O1xcclxcbn1cXHJcXG4uZnliRnJ5TGV0dGVyLlNlbGVjdGVkIHtcXHJcXG4gICAgY29sb3I6IGJsdWU7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogdGhpY2s7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogYmx1ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuLnRoaW5DaGF0IHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBtYXgtaGVpZ2h0OiA2MDBweDtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG4udGhpbkNoYXRGcm9tIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLnRoaW5DaGF0RnJvbTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIj5cXFwiO1xcclxcbiAgICBjb2xvcjogeWVsbG93O1xcclxcbn1cXHJcXG4udGhpbkNoYXRGcm9tOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCI6XFxcIjtcXHJcXG4gICAgY29sb3I6IHllbGxvdztcXHJcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG59XFxyXFxuLnRoaW5DaGF0TXNnIHtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBjb2xvcjp3aGl0ZXNtb2tlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuLnRoaW5DaGF0SW5wdXQge1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGNvbG9yOndoaXRlc21va2U7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4udGhpbkNoYXRJbnB1dEVtcHR5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC1ibG9jay1zaXplOiAzMHB4O1xcclxcbiAgICBjdXJzb3I6IHRleHQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi8uLi9wdWJsaWMvTW9ycGhvQnV0dGVyZmx5LnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fIGZyb20gXCIuLi8uLi9wdWJsaWMvdGlsZS5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyBmcm9tIFwiLi4vLi4vcHVibGljL01vcnBob0NhdGVycGlsbGFyLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fIGZyb20gXCIuLi8uLi9wdWJsaWMvTW9ycGhvQ29jb29uLnBuZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tb3JwaG9EaXYge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuLm1vcnBob1NvbHZlZERpdiB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICB3aWR0aDogMzUwcHg7XFxyXFxuICAgIGhlaWdodDogNTUwcHg7XFxyXFxufVxcclxcbi5tb3JwaG9Tb2x2ZWREaXYubDMge1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGhlaWdodDogMjgwcHg7XFxyXFxufVxcclxcbi5tb3JwaG9Tb2x2ZWREaXYubDQge1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIGhlaWdodDogMzUwcHg7XFxyXFxufVxcclxcbi5tb3JwaG9Tb2x2ZWREaXYubDUge1xcclxcbiAgICBoZWlnaHQ6IDQxMHB4O1xcclxcbn1cXHJcXG4ubW9ycGhvU29sdmVkRGl2Lmw2IHtcXHJcXG4gICAgaGVpZ2h0OiA0ODBweDtcXHJcXG59XFxyXFxuLm1vcnBob1NvbHZlZERpdi5sNyB7XFxyXFxuICAgIGhlaWdodDogNTUwcHg7XFxyXFxufVxcclxcbi5tb3JwaG9Tb2x2ZWREaXYubDgge1xcclxcbiAgICBoZWlnaHQ6IDU2MHB4O1xcclxcbn1cXHJcXG4ubW9ycGhvQ2VsbCB7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgd2lkdGg6IDcwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG4ubW9ycGhvQ2VsbFN0YXRpYyB7IC8qIFByb3ZpZGVkIGJ5IHRoZSBwdXp6bGUgKi9cXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxufVxcclxcbi5tb3JwaG9DZWxsTm9MZXR0ZXIge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbn1cXHJcXG4ubW9ycGhvQ2VsbExhcnZhIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuLm1vcnBob0NlbGxDb2Nvb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG4ubW9ycGhvQ2VsbFNlbGVjdGVkIHtcXHJcXG4gICAgb3BhY2l0eTogNTAlO1xcclxcbn1cXHJcXG4ubW9ycGhvQ2VsbEJ1dHRlcmZseSB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi5tb3JwaG9LZXlib2FyZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICB3aWR0aDogMzUwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuLm1vcnBob0tleXJvdzEge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xcclxcbn1cXHJcXG4ubW9ycGhvS2V5cm93MiB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG4ubW9ycGhvS2V5cm93MyB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMXB4O1xcclxcbn1cXHJcXG4ubW9ycGhvS2V5cm93NCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcXHJcXG59XFxyXFxuLm1vcnBob0tleSB7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcclxcbiAgICBtYXJnaW46IDNweDtcXHJcXG4gICAgd2lkdGg6IDI4cHg7XFxyXFxufVxcclxcbi5tb3JwaG9Db3B5ZG93bktleSB7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcclxcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG4ubW9ycGhvQ29weXVwS2V5IHtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbi5tb3JwaG9TdWJtaXRLZXkge1xcclxcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG4ubW9ycGhvUHV6emxlU2l6ZUtleSB7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgICBib3JkZXItY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICBtYXJnaW46IDNweDtcXHJcXG4gICAgd2lkdGg6IDI4cHg7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9wYWdlcy9tb3JwaG8vbW9ycGhvLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHlEQUF5RDtJQUN6RCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCO0FBQ0Esb0JBQW9CLDJCQUEyQjtJQUMzQyxpQkFBaUI7SUFDakIseURBQThDO0FBQ2xEO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHlEQUEyRDtBQUMvRDtBQUNBO0lBQ0kseURBQTJEO0lBQzNELGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx5REFBc0Q7SUFDdEQsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1vcnBob0RpdiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG4ubW9ycGhvU29sdmVkRGl2IHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9wdWJsaWMvTW9ycGhvQnV0dGVyZmx5LnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgd2lkdGg6IDM1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDU1MHB4O1xcclxcbn1cXHJcXG4ubW9ycGhvU29sdmVkRGl2LmwzIHtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDI4MHB4O1xcclxcbn1cXHJcXG4ubW9ycGhvU29sdmVkRGl2Lmw0IHtcXHJcXG4gICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDM1MHB4O1xcclxcbn1cXHJcXG4ubW9ycGhvU29sdmVkRGl2Lmw1IHtcXHJcXG4gICAgaGVpZ2h0OiA0MTBweDtcXHJcXG59XFxyXFxuLm1vcnBob1NvbHZlZERpdi5sNiB7XFxyXFxuICAgIGhlaWdodDogNDgwcHg7XFxyXFxufVxcclxcbi5tb3JwaG9Tb2x2ZWREaXYubDcge1xcclxcbiAgICBoZWlnaHQ6IDU1MHB4O1xcclxcbn1cXHJcXG4ubW9ycGhvU29sdmVkRGl2Lmw4IHtcXHJcXG4gICAgaGVpZ2h0OiA1NjBweDtcXHJcXG59XFxyXFxuLm1vcnBob0NlbGwge1xcclxcbiAgICBoZWlnaHQ6IDcwcHg7XFxyXFxuICAgIHdpZHRoOiA3MHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuLm1vcnBob0NlbGxTdGF0aWMgeyAvKiBQcm92aWRlZCBieSB0aGUgcHV6emxlICovXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3B1YmxpYy90aWxlLnBuZycpO1xcclxcbn1cXHJcXG4ubW9ycGhvQ2VsbE5vTGV0dGVyIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9wdWJsaWMvTW9ycGhvQ2F0ZXJwaWxsYXIucG5nJyk7XFxyXFxufVxcclxcbi5tb3JwaG9DZWxsTGFydmEge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3B1YmxpYy9Nb3JwaG9DYXRlcnBpbGxhci5wbmcnKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuLm1vcnBob0NlbGxDb2Nvb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3B1YmxpYy9Nb3JwaG9Db2Nvb24ucG5nJyk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbi5tb3JwaG9DZWxsU2VsZWN0ZWQge1xcclxcbiAgICBvcGFjaXR5OiA1MCU7XFxyXFxufVxcclxcbi5tb3JwaG9DZWxsQnV0dGVyZmx5IHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuLm1vcnBob0tleWJvYXJkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIHdpZHRoOiAzNTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG4ubW9ycGhvS2V5cm93MSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XFxyXFxufVxcclxcbi5tb3JwaG9LZXlyb3cyIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcbi5tb3JwaG9LZXlyb3czIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIxcHg7XFxyXFxufVxcclxcbi5tb3JwaG9LZXlyb3c0IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcclxcbn1cXHJcXG4ubW9ycGhvS2V5IHtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuICAgIG1hcmdpbjogM3B4O1xcclxcbiAgICB3aWR0aDogMjhweDtcXHJcXG59XFxyXFxuLm1vcnBob0NvcHlkb3duS2V5IHtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcbi5tb3JwaG9Db3B5dXBLZXkge1xcclxcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuLm1vcnBob1N1Ym1pdEtleSB7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcclxcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcbi5tb3JwaG9QdXp6bGVTaXplS2V5IHtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIG1hcmdpbjogM3B4O1xcclxcbiAgICB3aWR0aDogMjhweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uLy4uL3B1YmxpYy9XYWxsLmpwZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fIGZyb20gXCIuLi8uLi9wdWJsaWMvcGxheWVydGl0bGUucG5nXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gZnJvbSBcIi4uLy4uL3B1YmxpYy90aWxlLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fIGZyb20gXCIuLi8uLi9wdWJsaWMvQmFyYmVkV2lyZVJvdGF0ZWQucG5nXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gZnJvbSBcIi4uLy4uL3B1YmxpYy9CYXJiZWRXaXJlLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fIGZyb20gXCIuLi8uLi9wdWJsaWMvcHJpc29uYmFycy1zcXVhcmUucG5nXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAgIC0tY29tbW9uQm9yZGVyQ29sb3VyOiBncmV5Oy8qIHBiICovXFxyXFxuICAgIC0tY29tbW9uVGV4dEJhY2tncm91bmRDb2xvdXI6IGJsYWNrOyAvKiBwYiAqL1xcclxcbiAgICAtLWNvbW1vblRleHRDb2xvdXI6IHdoaXRlc21va2U7IC8qIHBiICovXFxyXFxuICAgIC0tY29tbW9uSGVhZGVyRm9udEZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgLyogcGIgKi9cXHJcXG4gICAgLS1jb21tb25Gb250RmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjsgLyogcGIgKi9cXHJcXG4gICAgLS1zcXVhcmVTaWRlOiA0MHB4O1xcclxcbiAgICAtLWNlbGxCbG9ja1NpZGU6IDQwcHg7XFxyXFxuICAgIC0tY2VsbEJsb2NrU2VsZWN0ZWRIZWlnaHQ6IDQycHg7XFxyXFxuICAgIC0tc2VsZWN0ZWRDb2xvcjogaHNsKDIwNywgOTAlLCA1NiUpO1xcclxcbiAgICAtLWxvYmJ5Rm9udFNpemU6IDIwcHg7XFxyXFxuICAgIC0tdGlsZUJhY2tncm91bmRDb2xvdXI6IG9yYW5nZXJlZDtcXHJcXG4gICAgLS1wcmlzb25lcnNUaWxlQ29sb3VyOiB3aGl0ZXNtb2tlO1xcclxcbiAgICAtLWd1YXJkc1RpbGVDb2xvdXI6IGJsYWNrO1xcclxcbn1cXHJcXG4uY29tbW9uRm9udEZhbWlseSB7IC8qIHBiICovXFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25Gb250RmFtaWx5KTtcXHJcXG59XFxyXFxuLnRvcEJhckhlaWdodCB7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG59XFxyXFxuLmV4YW1pbmVGb290ZXJIZWlnaHQge1xcclxcbiAgICBoZWlnaHQ6IDkwcHg7XFxyXFxufVxcclxcbi50b3BCYXJDb3JuZXIge1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbiAgICBoZWlnaHQ6IDUwJTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG4uZnVsbFdpZHRoIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5mb3JtYWxpbmZvIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkZvbnRGYW1pbHkpO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG4ucHJpc29uYnJlYWsge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG4ucGJHYW1laWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21tb25UZXh0QmFja2dyb3VuZENvbG91cik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb21tb25UZXh0Q29sb3VyKTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDAgMCAzcHggM3B4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbn1cXHJcXG4ucGJ0aXRsZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi44ZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICAgIC8qIGZvbnQtc3R5bGU6IGl0YWxpYzsgKi9cXHJcXG4gICAgY29sb3I6YmxhY2s7XFxyXFxufVxcclxcbi5wYmhvbWVsaW5rIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tbW9uVGV4dEJhY2tncm91bmRDb2xvdXIpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29tbW9uVGV4dENvbG91cik7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxufVxcclxcbi5wYlBsYXllck91dGVyU2VjdGlvbiB7XFxyXFxuICAgIC8qIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7ICovXFxyXFxuICAgIC8qIHdpZHRoOiAzNjBweDsgKi9cXHJcXG4gICAgcGFkZGluZy10b3A6IDNweDtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi8uLi9wdWJsaWMvV2FsbC5qcGdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cXHJcXG59XFxyXFxuLyogLnBiUGxheWVyT3V0ZXJTZWN0aW9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi8uLi9wdWJsaWMvRXNjYXBlZS5wbmdcXFwiKTtcXHJcXG4gICAgb3BhY2l0eTogNzUlO1xcclxcbn0gKi9cXHJcXG4ucGJQbGF5ZXJJbm5lclNlY3Rpb24ge1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG59XFxyXFxuLnBiUGxheWVyVGl0bGUge1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tY29tbW9uRm9udEZhbWlseSk7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xcclxcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXHJcXG59XFxyXFxuLnBiUGxheWVyVGl0bGUuUCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDsgICBcXHJcXG59XFxyXFxuLnBiUGxheWVyVGl0bGUuRyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDsgICAgXFxyXFxufVxcclxcbi5wYlNxdWFyZU91dGVyIHsgLyogVGhpbiBibGFjayBib3JkZXIgYXJvdW5kIGVhY2ggYm9hcmQgc3F1YXJlICovXFxyXFxuICAgIGJvcmRlcjogc29saWQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgcGFkZGluZzogMHB4OyAvKiBTbyBub3RoaW5nIGFwcGVhcnMgYmV0d2VlbiB0aGUgc3F1YXJlcyAtIGtlZXAgdGhlbSBmbHVzaCAqL1xcclxcbn1cXHJcXG4ucGJTcXVhcmVJbm5lciB7IC8qIENvbW1vbiBib2FyZCBzcXVhcmUgcHJvcGVydGllcyAqL1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLXNxdWFyZVNpZGUpO1xcclxcbiAgICB3aWR0aDogdmFyKC0tc3F1YXJlU2lkZSk7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuLnBiU3F1YXJlSW5uZXI6Zm9jdXMgeyAvKiBObyBvdXRsaW5lIHdoZW4gaW4gZm9jdXMgKi9cXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuLnBiU3F1YXJlSW5uZXIuc3R5bGUxIHsgLyogQWx0ZXJuYXRpbmcgc3F1YXJlIHN0eWxlIDEgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuLnBiU3F1YXJlSW5uZXIuc3R5bGUyIHsgLyogQWx0ZXJuYXRpbmcgc3F1YXJlIHN0eWxlIDIgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XFxyXFxuICAgIGNvbG9yOiBkYXJrZ3JleTtcXHJcXG59XFxyXFxuLnBiU3F1YXJlSW5uZXIuQ2VudGVyU3F1YXJlIHsgLyogQ2VudHJlIHNxdWFyZSAqL1xcclxcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbW1vblRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcXHJcXG4gICAgY29sb3I6IGNvcm5zaWxrO1xcclxcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxufVxcclxcbi5wYlNxdWFyZUlubmVyLkVzY2FwZUhhdGNoIHsgLyogRXNjYXBlIGhhdGNoIHNxdWFyZSAqL1xcclxcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4ucGJTcXVhcmVJbm5lci5QbGF5ZXJUaWxlIHsgLyogUGxheWVyIHRpbGUgaW1hZ2Ugb24gdGhlIHNxdWFyZSAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlQmFja2dyb3VuZENvbG91cik7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLnBiU3F1YXJlVGlsZVRleHQgeyAvKiBUaGUgdGlsZSBwbGF5ZWQgb24gdGhlIGJvYXJkICovXFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICBcXHJcXG4gICAgYm90dG9tOiAzcHg7XFxyXFxuICAgIGxlZnQ6IDEycHg7IFxcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4ICBncmV5O1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcclxcbn1cXHJcXG4ucGJTcXVhcmVUaWxlVGV4dC5QIHsgLyogUHJpc29uZXJzIHRpbGUgY29sb3IgKi9cXHJcXG4gICAgY29sb3I6IHZhcigtLXByaXNvbmVyc1RpbGVDb2xvdXIpO1xcclxcbn1cXHJcXG4ucGJTcXVhcmVUaWxlVGV4dC5HIHsgLyogR3VhcmRzIHRpbGUgY29sb3IgKi9cXHJcXG4gICAgY29sb3I6IHZhcigtLWd1YXJkc1RpbGVDb2xvdXIpO1xcclxcbn1cXHJcXG4udTo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwidVxcXCI7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxufVxcclxcbi5wYlNxdWFyZUlubmVyLlJpZ2h0QXJyb3cgeyAvKiBSaWdodCBhcnJvdyB3b3JkIGRpcmVjdGlvbiBpbmRpY2F0b3IgKi9cXHJcXG4gICAgcGFkZGluZzogMCU7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gICAgY29sb3I6IGN5YW47XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLnBiU3F1YXJlSW5uZXIuRG93bkFycm93IHsgLyogRG93biBhcnJvdyB3b3JkIGRpcmVjdGlvbiBpbmRpY2F0b3IgKi9cXHJcXG4gICAgcGFkZGluZzogMCU7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gICAgY29sb3I6IGN5YW47XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLnBiUm93IHtcXHJcXG4gICAgcGFkZGluZzogMCU7XFxyXFxufVxcclxcbi5wYkJvYXJkUGx1c1VuZGVyYm9hcmQge1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3B1YmxpYy9XYWxsLmpwZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47ICovXFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuLnBiQm9hcmQge1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDBweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbn1cXHJcXG4ucGJCb2FyZENvbHVtbkhlYWRlclJvdyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25IZWFkZXJGb250RmFtaWx5KTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tY2VsbEJsb2NrU2lkZSk7XFxyXFxufVxcclxcbi5wYkJvYXJkQ29sdW1uSGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4ucGJCb2FyZFJvd0hlYWRlciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25IZWFkZXJGb250RmFtaWx5KTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5wYkJvYXJkSGVhZGVyVG9wTGVmdCB7XFxyXFxuICAgIG1pbi13aWR0aDogdmFyKC0tY2VsbEJsb2NrU2lkZSk7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG4ucGJCb2FyZEhlYWRlclRvcFJpZ2h0IHtcXHJcXG4gICAgbWluLXdpZHRoOiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgbWluLWhlaWdodDogdmFyKC0tY2VsbEJsb2NrU2lkZSk7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcbi5wYkJvYXJkSGVhZGVyQm90dG9tTGVmdCB7XFxyXFxuICAgIG1pbi13aWR0aDogdmFyKC0tY2VsbEJsb2NrU2lkZSk7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG4ucGJCb2FyZEhlYWRlckJvdHRvbVJpZ2h0IHtcXHJcXG4gICAgbWluLXdpZHRoOiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgbWluLWhlaWdodDogdmFyKC0tY2VsbEJsb2NrU2lkZSk7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcbi5wYlVuZGVyYm9hcmQge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbW1vblRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbW1vblRleHRDb2xvdXIpO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcbi5wYlRpbGVBbmRNb3Zlc091dGVyIHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGxlZnQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcXHJcXG59XFxyXFxuLnBiVGlsZXBvb2wge1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBib3JkZXItd2lkdGg6IDNweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZCBzb2xpZCBub25lIHNvbGlkO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbW1vblRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbW1vblRleHRDb2xvdXIpO1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IHh4LXNtYWxsO1xcclxcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcbi5wYlRpbGVwb29sRGl2aWRlciB7XFxyXFxuICAgIHdpZHRoOiAycHg7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbn1cXHJcXG4ucGJUaWxlcG9vbERpdmlkZXI6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcIi5cXFwiO1xcclxcbn1cXHJcXG4ucGJUaWxlcG9vbFRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNTAlO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xcclxcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBkb3R0ZWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG59XFxyXFxuLnBiVGlsZXBvb2xUaWxlIHtcXHJcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcXHJcXG59XFxyXFxuLnBiTW92ZXMge1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBib3JkZXItd2lkdGg6IDNweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21tb25UZXh0QmFja2dyb3VuZENvbG91cik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb21tb25UZXh0Q29sb3VyKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXHJcXG59XFxyXFxuLnBiTW92ZXNUaXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTUwJTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogZG90dGVkO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxufVxcclxcbi5wYk1vdmVzU2Nyb2xsYWJsZSB7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDU1MHB4O1xcclxcbiAgICAvKiBtYXgtd2lkdGg6IDI1MHB4OyAqL1xcclxcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvO1xcclxcbn1cXHJcXG4ucGJNb3ZlIHtcXHJcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcXHJcXG59XFxyXFxuLnBiTW92ZTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hZ2VudGE7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnBiTW92ZS5ieSB7XFxyXFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxyXFxufVxcclxcbi5wYk1vdmUuU1dBUCB7XFxyXFxuICAgIGNvbG9yOiBjeWFuO1xcclxcbn1cXHJcXG4ucGJNb3ZlLlNXQVA6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcIlN3YXAgdGlsZXNcXFwiO1xcclxcbn1cXHJcXG4ucGJNb3ZlLlBBU1Mge1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG4ucGJNb3ZlLlBBU1M6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcIlBhc3MgdHVyblxcXCI7XFxyXFxufVxcclxcbi5wYk1vdmUuUExBWSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb21tb25UZXh0Q29sb3VyKTtcXHJcXG59XFxyXFxuLnBiVGlsZXJhY2sge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG4ucGJUaWxlcmFja0Fycm93IHtcXHJcXG4gICAgLypcXHJcXG4gICAgICAgIEkgZ290IHRoaXMgaWRlYSBvbmxpbmUuXFxyXFxuICAgICAgICBJdCBpcyBhIGJveCB3aXRoIGEgYm9yZGVyLCBidXQgdGhlIGJveCBoYXMgbm8gaGVpZ2h0IG9yIHdpZHRoIGxlYXZpbmcganVzdCBib3JkZXJzLlxcclxcbiAgICAgICAgV2hlbiB0aGUgNCBib3JkZXJzIG1lZXQgKG5vIGJveCkgaXQgaXMgbGlrZSA0IHRyaWFuZ2xlcyAoaW1hZ2luZSBYICkuXFxyXFxuICAgICAgICBZb3UgbWFrZSAzIGJvcmRlcnMgdHJhbnNwYXJlbnQsIGxlYXZpbmcgb25seSB0aGUgdHJpYW5nbGUgeW91IHdhbnQgdG8gZGlzcGxheS5cXHJcXG4gICAgKi9cXHJcXG4gICAgbWFyZ2luLXRvcDogMTNweDsgLyogcHVzaCB0aGUgYXJyb3cgZG93biB0byB0aGUgbWlkZGxlICovXFxyXFxuICAgIG1hcmdpbi1yaWdodDogNXB4OyAvKiBwdXQgc29tZSBzcGFjZSBiZXR3ZWVuIHRoZSBhcnJvdyBhbmQgdGlsZXJhY2sgKi9cXHJcXG4gICAgd2lkdGg6IDA7IFxcclxcbiAgICBoZWlnaHQ6IDA7IFxcclxcbiAgICBib3JkZXItdG9wOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7IC8qIGxlc3MgdGhhbiAxNXB4IGhlcmUgYW5kIG5leHQgbGluZSBmb3IgYSBtb3JlIHNsZW5kZXIgYXJyb3cgKi9cXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkIHRyYW5zcGFyZW50OyAgIFxcclxcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCByZ2IoNDQsIDI0MCwgMzcpO1xcclxcbn1cXHJcXG4ucGJUaWxlcmFja0Fycm93SW5Gb290ZXIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgICBib3JkZXItdG9wOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7IC8qIGxlc3MgdGhhbiAxNXB4IGhlcmUgYW5kIG5leHQgbGluZSBmb3IgYSBtb3JlIHNsZW5kZXIgYXJyb3cgKi9cXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkIHRyYW5zcGFyZW50OyAgIFxcclxcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCByZ2IoNDQsIDI0MCwgMzcpO1xcclxcbn1cXHJcXG4ucGJUaWxlT25SYWNrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZUJhY2tncm91bmRDb2xvdXIpO1xcclxcbiAgICB3aWR0aDogdmFyKC0tc3F1YXJlU2lkZSk7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tc3F1YXJlU2lkZSk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLnBiVGlsZU9uUmFjay5VbnNlbGVjdGVkIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4ucGJUaWxlT25SYWNrLlNlbGVjdGVkIHtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xcclxcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XFxyXFxuICAgIG1hcmdpbjogNHB4O1xcclxcbn1cXHJcXG4ucGJUaWxlT25SYWNrVGV4dCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICBcXHJcXG4gICAgYm90dG9tOiAycHg7XFxyXFxuICAgIGxlZnQ6IDExcHg7IFxcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4ICBncmV5O1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcclxcbn1cXHJcXG4ucGJUaWxlT25SYWNrLlAge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpc29uZXJzVGlsZUNvbG91cik7XFxyXFxufVxcclxcbi5wYlRpbGVPblJhY2suRyB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ndWFyZHNUaWxlQ29sb3VyKTtcXHJcXG59XFxyXFxuLnBiUmVzY3Vlc01hZGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21tb25UZXh0QmFja2dyb3VuZENvbG91cik7XFxyXFxuICAgIGNvbG9yOnZhcigtLWNvbW1vblRleHRDb2xvdXIpO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxuICAgIGJvcmRlci13aWR0aDogM3B4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkZvbnRGYW1pbHkpO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcbi5wYkFjdGlvbkJ1dHRvbkRpdiB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XFxyXFxufVxcclxcbi5wYkFjdGlvbkJ1dHRvbiB7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL2FjdGlvbkJ1dHRvbi5wbmcnKTsgKi9cXHJcXG4gICAgcGFkZGluZzogMnB4IDJweCAycHggMnB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xcclxcbiAgICBib3JkZXItd2lkdGg6IDBweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21tb25UZXh0QmFja2dyb3VuZENvbG91cik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb21tb25UZXh0Q29sb3VyKTtcXHJcXG4gICAgZm9udC1zdHlsZTogYm9sZGVyO1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tY29tbW9uRm9udEZhbWlseSk7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgd29yZC1zcGFjaW5nOiAzcHg7XFxyXFxufVxcclxcbi5wYkFjdGlvbkJ1dHRvblRleHQge1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxufVxcclxcbi5wYkFjdGlvbkJ1dHRvblNldmVyZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4ucGJBY3Rpb25CdXR0b25TZXZlcmVUZXh0IHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG4ucGJBY3Rpb25CdXR0b25TZXZlcmVUZXh0MiB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICBmb250LXNpemU6IHNtYWxsO1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZTsgLyogVGhpcyBtYWtlcyBpdCBnbyBvbiB0aGUgbmV4dCBsaW5lICovXFxyXFxuICAgIG1hcmdpbjogYXV0bzsgLyogVGhpcyBpcyB0aGUgb25seSB3YXkgSSBjb3VsZCBjZW50cmUgaXQhICovXFxyXFxufVxcclxcbi5wYkxvYmJ5UmFja1NpemVQcm9tcHQge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tY29tbW9uSGVhZGVyRm9udEZhbWlseSk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4ucGJMb2JieVJhY2tTaXplUHJvbXB0OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJDZWxsIEJsb2NrXFxcIjtcXHJcXG59XFxyXFxuLnBiTG9iYnlSYWNrU2l6ZVByb21wdDo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiOlxcXCI7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xcclxcbn1cXHJcXG4ucGJMb2JieVJhY2tTaXplIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKTtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OjIwcHg7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnBiTG9iYnlSYWNrU2l6ZVNlbGVjdGVkIHtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi8uLi9wdWJsaWMvcHJpc29uYmFycy1zcXVhcmUucG5nXFxcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogdmFyKC0tY2VsbEJsb2NrU2lkZSk7ICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdGVkQ29sb3IpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1jZWxsQmxvY2tTZWxlY3RlZEhlaWdodCk7XFxyXFxuICAgIG1hcmdpbi1yaWdodDoyMHB4O1xcclxcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodGdyZXk7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxufVxcclxcbi5wYkxvYmJ5UmFja1NpemVTZWxlY3RlZDpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbi5wYkxvYmJ5Q2VsbEJsb2NrSW5mbyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25Gb250RmFtaWx5KTtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuLnBiQ2hhdCB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogM3B4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmUgc29saWQgbm9uZSBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbiAgICBtYXgtaGVpZ2h0OiA2MDBweDtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG4ucGJDaGF0VGFibGUge1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxufVxcclxcbi5wYkNoYXRGcm9tIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbn1cXHJcXG4ucGJDaGF0RnJvbTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIj5cXFwiO1xcclxcbiAgICBjb2xvcjogeWVsbG93O1xcclxcbn1cXHJcXG4ucGJDaGF0RnJvbTo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiOlxcXCI7XFxyXFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFweDtcXHJcXG59XFxyXFxuLnBiQ2hhdE1zZyB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGNvbG9yOndoaXRlc21va2U7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBwYWRkaW5nLXRvcDoycHg7XFxyXFxufVxcclxcbi5wYkNoYXRJbnB1dCB7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgY29sb3I6d2hpdGVzbW9rZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5wYkNoYXRJbnB1dEVtcHR5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC1ibG9jay1zaXplOiAzMHB4O1xcclxcbiAgICBjdXJzb3I6IHRleHQ7XFxyXFxufVxcclxcbi5wYlNuYXREaXYge1xcclxcbiAgICBhbGlnbi1pdGVtczogbGVmdDtcXHJcXG4gICAgZGlzcGxheTogZGlzcGxheS1ib3g7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZSBub25lIHNvbGlkIHNvbGlkO1xcclxcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcclxcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG4ucGJTbmF0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vcGFnZXMvcGIvcHJpc29uYnJlYWsuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksMEJBQTBCLENBQUMsT0FBTztJQUNsQyxtQ0FBbUMsRUFBRSxPQUFPO0lBQzVDLDhCQUE4QixFQUFFLE9BQU87SUFDdkMsc0RBQXNELEVBQUUsT0FBTztJQUMvRCx1REFBdUQsRUFBRSxPQUFPO0lBQ2hFLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsK0JBQStCO0lBQy9CLG1DQUFtQztJQUNuQyxxQkFBcUI7SUFDckIsaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyx5QkFBeUI7QUFDN0I7QUFDQSxvQkFBb0IsT0FBTztJQUN2QixvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx5REFBOEM7SUFDOUMsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxtREFBbUQ7SUFDbkQsOEJBQThCO0lBQzlCLHVDQUF1QztJQUN2Qyx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix5Q0FBeUM7SUFDekMsd0JBQXdCO0lBQ3hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksbURBQW1EO0lBQ25ELDhCQUE4QjtJQUM5QixpQkFBaUI7SUFD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SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixtQ0FBbUM7SUFDbkMsdUNBQXVDO0lBQ3ZDLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHVDQUF1QztBQUMzQztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiwyQ0FBMkM7SUFDM0MsV0FBVztBQUNmO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICAtLWNvbW1vbkJvcmRlckNvbG91cjogZ3JleTsvKiBwYiAqL1xcclxcbiAgICAtLWNvbW1vblRleHRCYWNrZ3JvdW5kQ29sb3VyOiBibGFjazsgLyogcGIgKi9cXHJcXG4gICAgLS1jb21tb25UZXh0Q29sb3VyOiB3aGl0ZXNtb2tlOyAvKiBwYiAqL1xcclxcbiAgICAtLWNvbW1vbkhlYWRlckZvbnRGYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7IC8qIHBiICovXFxyXFxuICAgIC0tY29tbW9uRm9udEZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7IC8qIHBiICovXFxyXFxuICAgIC0tc3F1YXJlU2lkZTogNDBweDtcXHJcXG4gICAgLS1jZWxsQmxvY2tTaWRlOiA0MHB4O1xcclxcbiAgICAtLWNlbGxCbG9ja1NlbGVjdGVkSGVpZ2h0OiA0MnB4O1xcclxcbiAgICAtLXNlbGVjdGVkQ29sb3I6IGhzbCgyMDcsIDkwJSwgNTYlKTtcXHJcXG4gICAgLS1sb2JieUZvbnRTaXplOiAyMHB4O1xcclxcbiAgICAtLXRpbGVCYWNrZ3JvdW5kQ29sb3VyOiBvcmFuZ2VyZWQ7XFxyXFxuICAgIC0tcHJpc29uZXJzVGlsZUNvbG91cjogd2hpdGVzbW9rZTtcXHJcXG4gICAgLS1ndWFyZHNUaWxlQ29sb3VyOiBibGFjaztcXHJcXG59XFxyXFxuLmNvbW1vbkZvbnRGYW1pbHkgeyAvKiBwYiAqL1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tY29tbW9uRm9udEZhbWlseSk7XFxyXFxufVxcclxcbi50b3BCYXJIZWlnaHQge1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxufVxcclxcbi5leGFtaW5lRm9vdGVySGVpZ2h0IHtcXHJcXG4gICAgaGVpZ2h0OiA5MHB4O1xcclxcbn1cXHJcXG4udG9wQmFyQ29ybmVyIHtcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MCU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuLmZ1bGxXaWR0aCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4uZm9ybWFsaW5mbyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25Gb250RmFtaWx5KTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG59XFxyXFxuLnByaXNvbmJyZWFrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi8uLi9wdWJsaWMvV2FsbC5qcGdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuLnBiR2FtZWlkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tbW9uVGV4dEJhY2tncm91bmRDb2xvdXIpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29tbW9uVGV4dENvbG91cik7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgM3B4IDNweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG59XFxyXFxuLnBidGl0bGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgICBmb250LXNpemU6IDIuOGVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgICAvKiBmb250LXN0eWxlOiBpdGFsaWM7ICovXFxyXFxuICAgIGNvbG9yOmJsYWNrO1xcclxcbn1cXHJcXG4ucGJob21lbGluayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbW1vblRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbW1vblRleHRDb2xvdXIpO1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbn1cXHJcXG4ucGJQbGF5ZXJPdXRlclNlY3Rpb24ge1xcclxcbiAgICAvKiBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrOyAqL1xcclxcbiAgICAvKiB3aWR0aDogMzYwcHg7ICovXFxyXFxuICAgIHBhZGRpbmctdG9wOiAzcHg7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vLi4vcHVibGljL1dhbGwuanBnXFxcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICovXFxyXFxufVxcclxcbi8qIC5wYlBsYXllck91dGVyU2VjdGlvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vLi4vcHVibGljL0VzY2FwZWUucG5nXFxcIik7XFxyXFxuICAgIG9wYWNpdHk6IDc1JTtcXHJcXG59ICovXFxyXFxuLnBiUGxheWVySW5uZXJTZWN0aW9uIHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxufVxcclxcbi5wYlBsYXllclRpdGxlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkZvbnRGYW1pbHkpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3B1YmxpYy9wbGF5ZXJ0aXRsZS5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNnB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcclxcbn1cXHJcXG4ucGJQbGF5ZXJUaXRsZS5QIHtcXHJcXG4gICAgZm9udC1zaXplOiBpbmhlcml0OyAgIFxcclxcbn1cXHJcXG4ucGJQbGF5ZXJUaXRsZS5HIHtcXHJcXG4gICAgZm9udC1zaXplOiBpbmhlcml0OyAgICBcXHJcXG59XFxyXFxuLnBiU3F1YXJlT3V0ZXIgeyAvKiBUaGluIGJsYWNrIGJvcmRlciBhcm91bmQgZWFjaCBib2FyZCBzcXVhcmUgKi9cXHJcXG4gICAgYm9yZGVyOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xcclxcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICBwYWRkaW5nOiAwcHg7IC8qIFNvIG5vdGhpbmcgYXBwZWFycyBiZXR3ZWVuIHRoZSBzcXVhcmVzIC0ga2VlcCB0aGVtIGZsdXNoICovXFxyXFxufVxcclxcbi5wYlNxdWFyZUlubmVyIHsgLyogQ29tbW9uIGJvYXJkIHNxdWFyZSBwcm9wZXJ0aWVzICovXFxyXFxuICAgIGhlaWdodDogdmFyKC0tc3F1YXJlU2lkZSk7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1zcXVhcmVTaWRlKTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG4ucGJTcXVhcmVJbm5lcjpmb2N1cyB7IC8qIE5vIG91dGxpbmUgd2hlbiBpbiBmb2N1cyAqL1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG4ucGJTcXVhcmVJbm5lci5zdHlsZTEgeyAvKiBBbHRlcm5hdGluZyBzcXVhcmUgc3R5bGUgMSAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG4ucGJTcXVhcmVJbm5lci5zdHlsZTIgeyAvKiBBbHRlcm5hdGluZyBzcXVhcmUgc3R5bGUgMiAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcXHJcXG4gICAgY29sb3I6IGRhcmtncmV5O1xcclxcbn1cXHJcXG4ucGJTcXVhcmVJbm5lci5DZW50ZXJTcXVhcmUgeyAvKiBDZW50cmUgc3F1YXJlICovXFxyXFxuICAgIHBhZGRpbmctdG9wOiAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tbW9uVGV4dEJhY2tncm91bmRDb2xvdXIpO1xcclxcbiAgICBjb2xvcjogY29ybnNpbGs7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG59XFxyXFxuLnBiU3F1YXJlSW5uZXIuRXNjYXBlSGF0Y2ggeyAvKiBFc2NhcGUgaGF0Y2ggc3F1YXJlICovXFxyXFxuICAgIHBhZGRpbmctdG9wOiAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5wYlNxdWFyZUlubmVyLlBsYXllclRpbGUgeyAvKiBQbGF5ZXIgdGlsZSBpbWFnZSBvbiB0aGUgc3F1YXJlICovXFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL3RpbGUucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGVCYWNrZ3JvdW5kQ29sb3VyKTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4ucGJTcXVhcmVUaWxlVGV4dCB7IC8qIFRoZSB0aWxlIHBsYXllZCBvbiB0aGUgYm9hcmQgKi9cXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgIFxcclxcbiAgICBib3R0b206IDNweDtcXHJcXG4gICAgbGVmdDogMTJweDsgXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggIGdyZXk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxyXFxufVxcclxcbi5wYlNxdWFyZVRpbGVUZXh0LlAgeyAvKiBQcmlzb25lcnMgdGlsZSBjb2xvciAqL1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpc29uZXJzVGlsZUNvbG91cik7XFxyXFxufVxcclxcbi5wYlNxdWFyZVRpbGVUZXh0LkcgeyAvKiBHdWFyZHMgdGlsZSBjb2xvciAqL1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3VhcmRzVGlsZUNvbG91cik7XFxyXFxufVxcclxcbi51OjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJ1XFxcIjtcXHJcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG59XFxyXFxuLnBiU3F1YXJlSW5uZXIuUmlnaHRBcnJvdyB7IC8qIFJpZ2h0IGFycm93IHdvcmQgZGlyZWN0aW9uIGluZGljYXRvciAqL1xcclxcbiAgICBwYWRkaW5nOiAwJTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgICBjb2xvcjogY3lhbjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4ucGJTcXVhcmVJbm5lci5Eb3duQXJyb3cgeyAvKiBEb3duIGFycm93IHdvcmQgZGlyZWN0aW9uIGluZGljYXRvciAqL1xcclxcbiAgICBwYWRkaW5nOiAwJTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgICBjb2xvcjogY3lhbjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4ucGJSb3cge1xcclxcbiAgICBwYWRkaW5nOiAwJTtcXHJcXG59XFxyXFxuLnBiQm9hcmRQbHVzVW5kZXJib2FyZCB7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL1dhbGwuanBnJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgKi9cXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG4ucGJCb2FyZCB7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMHB4O1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxufVxcclxcbi5wYkJvYXJkQ29sdW1uSGVhZGVyUm93IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkhlYWRlckZvbnRGYW1pbHkpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG59XFxyXFxuLnBiQm9hcmRDb2x1bW5IZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3B1YmxpYy9CYXJiZWRXaXJlUm90YXRlZC5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4ucGJCb2FyZFJvd0hlYWRlciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25IZWFkZXJGb250RmFtaWx5KTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9wdWJsaWMvQmFyYmVkV2lyZS5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5wYkJvYXJkSGVhZGVyVG9wTGVmdCB7XFxyXFxuICAgIG1pbi13aWR0aDogdmFyKC0tY2VsbEJsb2NrU2lkZSk7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3B1YmxpYy9CYXJiZWRXaXJlUm90YXRlZC5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuLnBiQm9hcmRIZWFkZXJUb3BSaWdodCB7XFxyXFxuICAgIG1pbi13aWR0aDogdmFyKC0tY2VsbEJsb2NrU2lkZSk7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3B1YmxpYy9CYXJiZWRXaXJlLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG4ucGJCb2FyZEhlYWRlckJvdHRvbUxlZnQge1xcclxcbiAgICBtaW4td2lkdGg6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9wdWJsaWMvQmFyYmVkV2lyZS5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuLnBiQm9hcmRIZWFkZXJCb3R0b21SaWdodCB7XFxyXFxuICAgIG1pbi13aWR0aDogdmFyKC0tY2VsbEJsb2NrU2lkZSk7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IHZhcigtLWNlbGxCbG9ja1NpZGUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3B1YmxpYy9CYXJiZWRXaXJlUm90YXRlZC5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuLnBiVW5kZXJib2FyZCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tbW9uVGV4dEJhY2tncm91bmRDb2xvdXIpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29tbW9uVGV4dENvbG91cik7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuLnBiVGlsZUFuZE1vdmVzT3V0ZXIge1xcclxcbiAgICBhbGlnbi1pdGVtczogbGVmdDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xcclxcbn1cXHJcXG4ucGJUaWxlcG9vbCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogM3B4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkIHNvbGlkIG5vbmUgc29saWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tbW9uVGV4dEJhY2tncm91bmRDb2xvdXIpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29tbW9uVGV4dENvbG91cik7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XFxyXFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuLnBiVGlsZXBvb2xEaXZpZGVyIHtcXHJcXG4gICAgd2lkdGg6IDJweDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxufVxcclxcbi5wYlRpbGVwb29sRGl2aWRlcjo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiLlxcXCI7XFxyXFxufVxcclxcbi5wYlRpbGVwb29sVGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDE1MCU7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IGRvdHRlZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbn1cXHJcXG4ucGJUaWxlcG9vbFRpbGUge1xcclxcbiAgICBmb250LXNpemU6IHNtYWxsO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMnB4O1xcclxcbn1cXHJcXG4ucGJNb3ZlcyB7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogM3B4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbW1vblRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbW1vblRleHRDb2xvdXIpO1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IHh4LXNtYWxsO1xcclxcbn1cXHJcXG4ucGJNb3Zlc1RpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNTAlO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xcclxcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBkb3R0ZWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG59XFxyXFxuLnBiTW92ZXNTY3JvbGxhYmxlIHtcXHJcXG4gICAgbWF4LWhlaWdodDogNTUwcHg7XFxyXFxuICAgIC8qIG1heC13aWR0aDogMjUwcHg7ICovXFxyXFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XFxyXFxufVxcclxcbi5wYk1vdmUge1xcclxcbiAgICBmb250LXNpemU6IHNtYWxsO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMnB4O1xcclxcbn1cXHJcXG4ucGJNb3ZlOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFnZW50YTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ucGJNb3ZlLmJ5IHtcXHJcXG4gICAgY29sb3I6IHllbGxvdztcXHJcXG59XFxyXFxuLnBiTW92ZS5TV0FQIHtcXHJcXG4gICAgY29sb3I6IGN5YW47XFxyXFxufVxcclxcbi5wYk1vdmUuU1dBUDo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiU3dhcCB0aWxlc1xcXCI7XFxyXFxufVxcclxcbi5wYk1vdmUuUEFTUyB7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcbi5wYk1vdmUuUEFTUzo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiUGFzcyB0dXJuXFxcIjtcXHJcXG59XFxyXFxuLnBiTW92ZS5QTEFZIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbW1vblRleHRDb2xvdXIpO1xcclxcbn1cXHJcXG4ucGJUaWxlcmFjayB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAycHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcbi5wYlRpbGVyYWNrQXJyb3cge1xcclxcbiAgICAvKlxcclxcbiAgICAgICAgSSBnb3QgdGhpcyBpZGVhIG9ubGluZS5cXHJcXG4gICAgICAgIEl0IGlzIGEgYm94IHdpdGggYSBib3JkZXIsIGJ1dCB0aGUgYm94IGhhcyBubyBoZWlnaHQgb3Igd2lkdGggbGVhdmluZyBqdXN0IGJvcmRlcnMuXFxyXFxuICAgICAgICBXaGVuIHRoZSA0IGJvcmRlcnMgbWVldCAobm8gYm94KSBpdCBpcyBsaWtlIDQgdHJpYW5nbGVzIChpbWFnaW5lIFggKS5cXHJcXG4gICAgICAgIFlvdSBtYWtlIDMgYm9yZGVycyB0cmFuc3BhcmVudCwgbGVhdmluZyBvbmx5IHRoZSB0cmlhbmdsZSB5b3Ugd2FudCB0byBkaXNwbGF5LlxcclxcbiAgICAqL1xcclxcbiAgICBtYXJnaW4tdG9wOiAxM3B4OyAvKiBwdXNoIHRoZSBhcnJvdyBkb3duIHRvIHRoZSBtaWRkbGUgKi9cXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7IC8qIHB1dCBzb21lIHNwYWNlIGJldHdlZW4gdGhlIGFycm93IGFuZCB0aWxlcmFjayAqL1xcclxcbiAgICB3aWR0aDogMDsgXFxyXFxuICAgIGhlaWdodDogMDsgXFxyXFxuICAgIGJvcmRlci10b3A6IDdweCBzb2xpZCB0cmFuc3BhcmVudDsgLyogbGVzcyB0aGFuIDE1cHggaGVyZSBhbmQgbmV4dCBsaW5lIGZvciBhIG1vcmUgc2xlbmRlciBhcnJvdyAqL1xcclxcbiAgICBib3JkZXItYm90dG9tOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7ICAgXFxyXFxuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkIHJnYig0NCwgMjQwLCAzNyk7XFxyXFxufVxcclxcbi5wYlRpbGVyYWNrQXJyb3dJbkZvb3RlciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICAgIGJvcmRlci10b3A6IDdweCBzb2xpZCB0cmFuc3BhcmVudDsgLyogbGVzcyB0aGFuIDE1cHggaGVyZSBhbmQgbmV4dCBsaW5lIGZvciBhIG1vcmUgc2xlbmRlciBhcnJvdyAqL1xcclxcbiAgICBib3JkZXItYm90dG9tOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7ICAgXFxyXFxuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkIHJnYig0NCwgMjQwLCAzNyk7XFxyXFxufVxcclxcbi5wYlRpbGVPblJhY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3B1YmxpYy90aWxlLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlQmFja2dyb3VuZENvbG91cik7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1zcXVhcmVTaWRlKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1zcXVhcmVTaWRlKTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4ucGJUaWxlT25SYWNrLlVuc2VsZWN0ZWQge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5wYlRpbGVPblJhY2suU2VsZWN0ZWQge1xcclxcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xcclxcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XFxyXFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcXHJcXG4gICAgbWFyZ2luOiA0cHg7XFxyXFxufVxcclxcbi5wYlRpbGVPblJhY2tUZXh0IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgIFxcclxcbiAgICBib3R0b206IDJweDtcXHJcXG4gICAgbGVmdDogMTFweDsgXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggIGdyZXk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxyXFxufVxcclxcbi5wYlRpbGVPblJhY2suUCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmlzb25lcnNUaWxlQ29sb3VyKTtcXHJcXG59XFxyXFxuLnBiVGlsZU9uUmFjay5HIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWd1YXJkc1RpbGVDb2xvdXIpO1xcclxcbn1cXHJcXG4ucGJSZXNjdWVzTWFkZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbW1vblRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcXHJcXG4gICAgY29sb3I6dmFyKC0tY29tbW9uVGV4dENvbG91cik7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tY29tbW9uRm9udEZhbWlseSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuLnBiQWN0aW9uQnV0dG9uRGl2IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcXHJcXG59XFxyXFxuLnBiQWN0aW9uQnV0dG9uIHtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9wdWJsaWMvYWN0aW9uQnV0dG9uLnBuZycpOyAqL1xcclxcbiAgICBwYWRkaW5nOiAycHggMnB4IDJweCAycHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMHB4O1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbW1vblRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbW1vblRleHRDb2xvdXIpO1xcclxcbiAgICBmb250LXN0eWxlOiBib2xkZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25Gb250RmFtaWx5KTtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICB3b3JkLXNwYWNpbmc6IDNweDtcXHJcXG59XFxyXFxuLnBiQWN0aW9uQnV0dG9uVGV4dCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXHJcXG59XFxyXFxuLnBiQWN0aW9uQnV0dG9uU2V2ZXJlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5wYkFjdGlvbkJ1dHRvblNldmVyZVRleHQge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbi5wYkFjdGlvbkJ1dHRvblNldmVyZVRleHQyIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlOyAvKiBUaGlzIG1ha2VzIGl0IGdvIG9uIHRoZSBuZXh0IGxpbmUgKi9cXHJcXG4gICAgbWFyZ2luOiBhdXRvOyAvKiBUaGlzIGlzIHRoZSBvbmx5IHdheSBJIGNvdWxkIGNlbnRyZSBpdCEgKi9cXHJcXG59XFxyXFxuLnBiTG9iYnlSYWNrU2l6ZVByb21wdCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25IZWFkZXJGb250RmFtaWx5KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi5wYkxvYmJ5UmFja1NpemVQcm9tcHQ6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIkNlbGwgQmxvY2tcXFwiO1xcclxcbn1cXHJcXG4ucGJMb2JieVJhY2tTaXplUHJvbXB0OjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCI6XFxcIjtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XFxyXFxufVxcclxcbi5wYkxvYmJ5UmFja1NpemUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uLy4uL3B1YmxpYy9wcmlzb25iYXJzLXNxdWFyZS5wbmdcXFwiKTtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OjIwcHg7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnBiTG9iYnlSYWNrU2l6ZVNlbGVjdGVkIHtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi8uLi9wdWJsaWMvcHJpc29uYmFycy1zcXVhcmUucG5nXFxcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogdmFyKC0tY2VsbEJsb2NrU2lkZSk7ICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdGVkQ29sb3IpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1jZWxsQmxvY2tTaWRlKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1jZWxsQmxvY2tTZWxlY3RlZEhlaWdodCk7XFxyXFxuICAgIG1hcmdpbi1yaWdodDoyMHB4O1xcclxcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodGdyZXk7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxufVxcclxcbi5wYkxvYmJ5UmFja1NpemVTZWxlY3RlZDpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbi5wYkxvYmJ5Q2VsbEJsb2NrSW5mbyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25Gb250RmFtaWx5KTtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuLnBiQ2hhdCB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogM3B4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmUgc29saWQgbm9uZSBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21tb25Cb3JkZXJDb2xvdXIpO1xcclxcbiAgICBtYXgtaGVpZ2h0OiA2MDBweDtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG4ucGJDaGF0VGFibGUge1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbW1vbkJvcmRlckNvbG91cik7XFxyXFxufVxcclxcbi5wYkNoYXRGcm9tIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbn1cXHJcXG4ucGJDaGF0RnJvbTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIj5cXFwiO1xcclxcbiAgICBjb2xvcjogeWVsbG93O1xcclxcbn1cXHJcXG4ucGJDaGF0RnJvbTo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiOlxcXCI7XFxyXFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFweDtcXHJcXG59XFxyXFxuLnBiQ2hhdE1zZyB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGNvbG9yOndoaXRlc21va2U7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBwYWRkaW5nLXRvcDoycHg7XFxyXFxufVxcclxcbi5wYkNoYXRJbnB1dCB7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgY29sb3I6d2hpdGVzbW9rZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tbW9uQm9yZGVyQ29sb3VyKTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5wYkNoYXRJbnB1dEVtcHR5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC1ibG9jay1zaXplOiAzMHB4O1xcclxcbiAgICBjdXJzb3I6IHRleHQ7XFxyXFxufVxcclxcbi5wYlNuYXREaXYge1xcclxcbiAgICBhbGlnbi1pdGVtczogbGVmdDtcXHJcXG4gICAgZGlzcGxheTogZGlzcGxheS1ib3g7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZSBub25lIHNvbGlkIHNvbGlkO1xcclxcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcclxcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG4ucGJTbmF0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vLi4vcHVibGljL3RyYW5zbW9ncmlmeS5qcGdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudG1fbnVtTW92ZXNEaXYge1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4udG1fbnVtTW92ZXNTZWxlY3RlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XFxyXFxufVxcclxcbi50bV9udW1Nb3Zlc1NlbGVjdGVkOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuLnRtX251bU1vdmVzVW5zZWxlY3RlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XFxyXFxufVxcclxcbi50bV9udW1Nb3Zlc1Vuc2VsZWN0ZWQ6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG4udG1fc3RhcnRQdXp6bGVEaXYge1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4udG1fcHV6emxlRGl2IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxufVxcclxcbi50bV9wdXp6bGVEaXYgc3BhbjpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG4udG1fcHV6emxlRGl2IHNwYW46bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICAgIHBhZGRpbmc6IDBweCA1cHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxufVxcclxcbi50bV9wdXp6bGVEaXYgc3BhbjpudGgtY2hpbGQoMikge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcbi50bV9wdXp6bGVEaXYgc3BhbjpudGgtY2hpbGQoMykge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gICAgcGFkZGluZzogMHB4IDVweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG59XFxyXFxuLnRtX3B1enpsZURpdiBzcGFuOm50aC1jaGlsZCg2KSB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG59XFxyXFxuLnRtX3B1enpsZURpdiBwIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG4udG1fc29sdXRpb25PdXRlckRpdiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuLnRtX3NvbHV0aW9uRGl2IHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWluLWhlaWdodDogMjI1cHg7XFxyXFxuICAgIG1pbi13aWR0aDogMzcwcHg7XFxyXFxufVxcclxcbi50bV9zb2x1dGlvbkRpdiB0YWJsZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG59XFxyXFxuLnRtX3NvbHV0aW9uRGl2IHRkIHtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuLnRtX3NvbHV0aW9uRGl2IHRyOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xcclxcbiAgICBjb2xvcjogeWVsbG93O1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDNweCAjRkYwMDAwLCAwIDAgNXB4ICMwMDAwRkY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4udG1fbmV4dHdvcmQge1xcclxcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxufVxcclxcbi50bV9hcnJvdyB7XFxyXFxuICAgIGNvbG9yOiBjeWFuO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbi50bV9zb2x1dGlvbkRpdiB0cjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4udG1fc29sdXRpb25EaXYgdHI6bGFzdC1jaGlsZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRtX0JhY2tzcGFjZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxufVxcclxcbi50bV9CYWNrc3BhY2U6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICdcXFxcMDAzQ3gnO1xcclxcbn1cXHJcXG4udG1fS2V5R29EaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnRtX0tleUdvIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG59XFxyXFxuLnRtX2xhc3RidXR0b25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxufVxcclxcbi50bV9xdWl0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcbi50bV92YWxpZHdvcmRzZGl2IHtcXHJcXG4gICAgd2lkdGg6IDM3MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcbi50bV92YWxpZHdvcmRzZGl2IHAge1xcclxcbiAgICBib3JkZXItdG9wOiA4cHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbn1cXHJcXG4udG1fdmFsaWR3b3Jkc2RpdiBwOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiAnPDw8ICc7XFxyXFxufVxcclxcbi50bV92YWxpZHdvcmRzZGl2IHA6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogJyA+Pj4nO1xcclxcbn1cXHJcXG4udG1fdmFsaWR3b3Jkc2RpdiBzcGFuIHtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgY29sb3I6IHllbGxvdztcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzcHggI0ZGMDAwMCwgMCAwIDVweCAjMDAwMEZGO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4udG1fY29uZ3JhdHMge1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IGFxdWE7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuLnRtX2hpbnRzaGVhZGVyIHtcXHJcXG4gICAgYm9yZGVyLXRvcDogOHB4IHNvbGlkO1xcclxcbiAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQ7XFxyXFxuICAgIHdpZHRoOiAzNzBweDtcXHJcXG4gICAgaGVpZ2h0OiA1OHB4O1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vcGFnZXMvdG0vdG0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQiw4Q0FBOEM7SUFDOUMsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLDhDQUE4QztJQUM5QyxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHlEQUFzRDtJQUN0RCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDZDQUE2QztJQUM3QyxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHVCQUF1QjtJQUN2Qiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLDZDQUE2QztJQUM3QyxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudG1fbnVtTW92ZXNEaXYge1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4udG1fbnVtTW92ZXNTZWxlY3RlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XFxyXFxufVxcclxcbi50bV9udW1Nb3Zlc1NlbGVjdGVkOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuLnRtX251bU1vdmVzVW5zZWxlY3RlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XFxyXFxufVxcclxcbi50bV9udW1Nb3Zlc1Vuc2VsZWN0ZWQ6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG4udG1fc3RhcnRQdXp6bGVEaXYge1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4udG1fcHV6emxlRGl2IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxufVxcclxcbi50bV9wdXp6bGVEaXYgc3BhbjpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG4udG1fcHV6emxlRGl2IHNwYW46bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICAgIHBhZGRpbmc6IDBweCA1cHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxufVxcclxcbi50bV9wdXp6bGVEaXYgc3BhbjpudGgtY2hpbGQoMikge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcbi50bV9wdXp6bGVEaXYgc3BhbjpudGgtY2hpbGQoMykge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gICAgcGFkZGluZzogMHB4IDVweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG59XFxyXFxuLnRtX3B1enpsZURpdiBzcGFuOm50aC1jaGlsZCg2KSB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG59XFxyXFxuLnRtX3B1enpsZURpdiBwIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG4udG1fc29sdXRpb25PdXRlckRpdiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuLnRtX3NvbHV0aW9uRGl2IHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9wdWJsaWMvdHJhbnNtb2dyaWZ5LmpwZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtaW4taGVpZ2h0OiAyMjVweDtcXHJcXG4gICAgbWluLXdpZHRoOiAzNzBweDtcXHJcXG59XFxyXFxuLnRtX3NvbHV0aW9uRGl2IHRhYmxlIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG4udG1fc29sdXRpb25EaXYgdGQge1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG4udG1fc29sdXRpb25EaXYgdHI6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwIDAgM3B4ICNGRjAwMDAsIDAgMCA1cHggIzAwMDBGRjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi50bV9uZXh0d29yZCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG59XFxyXFxuLnRtX2Fycm93IHtcXHJcXG4gICAgY29sb3I6IGN5YW47XFxyXFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuLnRtX3NvbHV0aW9uRGl2IHRyOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi50bV9zb2x1dGlvbkRpdiB0cjpsYXN0LWNoaWxkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udG1fQmFja3NwYWNlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG59XFxyXFxuLnRtX0JhY2tzcGFjZTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogJ1xcXFwwMDNDeCc7XFxyXFxufVxcclxcbi50bV9LZXlHb0RpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4udG1fS2V5R28ge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbn1cXHJcXG4udG1fbGFzdGJ1dHRvbnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuLnRtX3F1aXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuLnRtX3ZhbGlkd29yZHNkaXYge1xcclxcbiAgICB3aWR0aDogMzcwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuLnRtX3ZhbGlkd29yZHNkaXYgcCB7XFxyXFxuICAgIGJvcmRlci10b3A6IDhweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxufVxcclxcbi50bV92YWxpZHdvcmRzZGl2IHA6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICc8PDwgJztcXHJcXG59XFxyXFxuLnRtX3ZhbGlkd29yZHNkaXYgcDo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnID4+Pic7XFxyXFxufVxcclxcbi50bV92YWxpZHdvcmRzZGl2IHNwYW4ge1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBjb2xvcjogeWVsbG93O1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDNweCAjRkYwMDAwLCAwIDAgNXB4ICMwMDAwRkY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi50bV9jb25ncmF0cyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogYXF1YTtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG4udG1faGludHNoZWFkZXIge1xcclxcbiAgICBib3JkZXItdG9wOiA4cHggc29saWQ7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZDtcXHJcXG4gICAgd2lkdGg6IDM3MHB4O1xcclxcbiAgICBoZWlnaHQ6IDU4cHg7XFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudG9vbHRpcCB7XFxyXFxuICBwb3NpdGlvbjogdG9wO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIHBhZGRpbmc6IDVweCAwO1xcclxcblxcclxcbiAgLyogUG9zaXRpb24gdGhlIHRvb2x0aXAgKi9cXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBib3R0b206IDEwMCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICBtYXJnaW4tbGVmdDogLTYwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcXHJcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxufVxcclxcbi5pbnNlcnRDb3VudCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG4uaW5zZXJ0Q291bnRTcGFjZXIge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcbi5zd2FwQ291bnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxyXFxuICBjb2xvcjogZGFya2JsdWU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgLyogYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBkYXJrZ3JheTtcXHJcXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIGRhcmtncmF5OyAqL1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uYW5hZ3JhbUNvdW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHNsYXRlZ3JheTtcXHJcXG4gIGNvbG9yOiBsaWdodGdyZWVuO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgc2xhdGVncmF5O1xcclxcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgc2xhdGVncmF5O1xcclxcbn1cXHJcXG4uZHJvcFJvdyB7XFxyXFxuICBsaW5lLWhlaWdodDogNXB4O1xcclxcbn1cXHJcXG4uZHJvcEluZGljYXRvciB7XFxyXFxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDJweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAycHg7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG59XFxyXFxuLmJhbGxvb25zdHJpbmcge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7ICBcXHJcXG59XFxyXFxuLmNsb3NlbWUge1xcclxcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG59XFxyXFxuLmNsb3NlbWVidXR0b24ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyY3NzUGFnZUJHKTtcXHJcXG59XFxyXFxuLmNsb3NlbWVidXR0b246OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiAnXFxcXDIyQTAnOyAvKiBYIGluIGEgYm94ICovXFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9wYWdlcy93aS93b3JkaW5mby5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYzs7RUFFZCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQjtxQ0FDbUM7RUFDbkMsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdDQUF3QjtVQUF4Qix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixVQUFVO0VBQ1Ysb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxnQkFBZ0IsRUFBRSxlQUFlO0FBQ25DXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50b29sdGlwIHtcXHJcXG4gIHBvc2l0aW9uOiB0b3A7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICB3aWR0aDogMTIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxuXFxyXFxuICAvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCAqL1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGJvdHRvbTogMTAwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtNjAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG59XFxyXFxuLmluc2VydENvdW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcbi5pbnNlcnRDb3VudFNwYWNlciB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuLnN3YXBDb3VudCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXHJcXG4gIGNvbG9yOiBkYXJrYmx1ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkIGRhcmtncmF5O1xcclxcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgZGFya2dyYXk7ICovXFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5hbmFncmFtQ291bnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xcclxcbiAgY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBzbGF0ZWdyYXk7XFxyXFxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCBzbGF0ZWdyYXk7XFxyXFxufVxcclxcbi5kcm9wUm93IHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA1cHg7XFxyXFxufVxcclxcbi5kcm9wSW5kaWNhdG9yIHtcXHJcXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMnB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDJweDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbn1cXHJcXG4uYmFsbG9vbnN0cmluZyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyAgXFxyXFxufVxcclxcbi5jbG9zZW1lIHtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxufVxcclxcbi5jbG9zZW1lYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmNzc1BhZ2VCRyk7XFxyXFxufVxcclxcbi5jbG9zZW1lYnV0dG9uOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJ1xcXFwyMkEwJzsgLyogWCBpbiBhIGJveCAqL1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLk1hc3Rlcm1pbmQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYyNzFhO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDElO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxJTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDElO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMSU7XFxyXFxufVxcclxcbi53bWhvbWVsaW5rIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE2MjcxYTtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcbi5PdXRlcnRhYmxlIHtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuLkd1ZXNzdGFibGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxN2MwO1xcclxcbn1cXHJcXG4uQWxpZ25DZW50ZXIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5BbGlnbkxlZnQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG4ud21saW5rIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya21hZ2VudGE7XFxyXFxuICAgIGNvbG9yOmN5YW47XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcbi53bWJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxN2MwMjU7XFxyXFxuICAgIGNvbG9yOmF6dXJlO1xcclxcbn1cXHJcXG4ud210aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi44ZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgY29sb3I6ZGFya21hZ2VudGE7XFxyXFxufVxcclxcbi53bWgxIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcclxcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXHJcXG4gICAgY29sb3I6YXp1cmU7XFxyXFxufVxcclxcbi53bWgyIHtcXHJcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbiAgICBjb2xvcjphenVyZTtcXHJcXG59XFxyXFxuLndtaDMge1xcclxcbiAgICBjb2xvcjphenVyZTtcXHJcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbn1cXHJcXG4ud210aCB7XFxyXFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xcclxcbn1cXHJcXG4ud210ZCB7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XFxyXFxuICAgIGNvbG9yOmF6dXJlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxufVxcclxcbi53bXAge1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4ud21sYWJlbCB7XFxyXFxuICAgIGNvbG9yOiBsaWdodGdyZWVuO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcbi53bUNvcnJlY3RMZXR0ZXJDb3JyZWN0UG9zaXRpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXHJcXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi53bUNvcnJlY3RMZXR0ZXJXcm9uZ1Bvc2l0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXHJcXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi53bVdyb25nTGV0dGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vcGFnZXMvd20vbWFzdGVybWluZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsV0FBVztBQUNmO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDhDQUE4QztBQUNsRDtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuTWFzdGVybWluZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjI3MWE7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMSU7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDElO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMSU7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxJTtcXHJcXG59XFxyXFxuLndtaG9tZWxpbmsge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYyNzFhO1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuLk91dGVydGFibGUge1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG4uR3Vlc3N0YWJsZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTE3YzA7XFxyXFxufVxcclxcbi5BbGlnbkNlbnRlciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLkFsaWduTGVmdCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcbi53bWxpbmsge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrbWFnZW50YTtcXHJcXG4gICAgY29sb3I6Y3lhbjtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuLndtYnV0dG9uIHtcXHJcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3YzAyNTtcXHJcXG4gICAgY29sb3I6YXp1cmU7XFxyXFxufVxcclxcbi53bXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjhlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBjb2xvcjpkYXJrbWFnZW50YTtcXHJcXG59XFxyXFxuLndtaDEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcclxcbiAgICBjb2xvcjphenVyZTtcXHJcXG59XFxyXFxuLndtaDIge1xcclxcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxuICAgIGNvbG9yOmF6dXJlO1xcclxcbn1cXHJcXG4ud21oMyB7XFxyXFxuICAgIGNvbG9yOmF6dXJlO1xcclxcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxufVxcclxcbi53bXRoIHtcXHJcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBncm9vdmU7XFxyXFxufVxcclxcbi53bXRkIHtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcXHJcXG4gICAgY29sb3I6YXp1cmU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG59XFxyXFxuLndtcCB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi53bWxhYmVsIHtcXHJcXG4gICAgY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuLndtQ29ycmVjdExldHRlckNvcnJlY3RQb3NpdGlvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcclxcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLndtQ29ycmVjdExldHRlcldyb25nUG9zaXRpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xcclxcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLndtV3JvbmdMZXR0ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9wdWJsaWMvTW9ycGhvQ2F0ZXJwaWxsYXIucG5nXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gZnJvbSBcIi4uL3B1YmxpYy9Nb3JwaG9Db2Nvb24ucG5nXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gZnJvbSBcIi4uL3B1YmxpYy9Nb3JwaG9CdXR0ZXJmbHkucG5nXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gZnJvbSBcIi4uL3B1YmxpYy90cmFuc21vZ3JpZnkuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjEvQS5qcGdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92MS9CLmpwZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0MuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjEvRC5qcGdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyBmcm9tIFwiLi4vcHVibGljL0tleWJvYXJkcy92MS9FLmpwZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0YuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0cuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzExX19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0guanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0kuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEzX19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0ouanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE0X19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0suanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE1X19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0wuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE2X19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL00uanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE3X19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL04uanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE4X19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL08uanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE5X19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1AuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIwX19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1EuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIxX19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1IuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIyX19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1MuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIzX19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1QuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI0X19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1UuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI1X19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1YuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI2X19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1cuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI3X19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1guanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI4X19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1kuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI5X19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1ouanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMwX19fIGZyb20gXCIuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL2JhY2tzcGFjZS5qcGdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzFfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvQS5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzJfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvQi5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzNfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvQy5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzRfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvRC5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzVfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvRS5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzZfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvRi5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzdfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvRy5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzhfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvSC5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzlfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvSS5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDBfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvSi5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDFfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvSy5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDJfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvTC5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDNfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvTS5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDRfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvTi5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDVfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvTy5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDZfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvUC5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDdfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvUS5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDhfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvUi5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDlfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvUy5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTBfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvVC5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTFfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvVS5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTJfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvVi5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTNfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvVy5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTRfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvWC5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTVfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvWS5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTZfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvWi5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTdfX18gZnJvbSBcIi4uL3B1YmxpYy9LZXlib2FyZHMvdjMvQmFja3NwYWNlLnBuZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzExX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEzX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE0X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE1X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE2X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE3X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE4X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE5X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIxX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIzX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI0X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI1X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI2X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI3X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI4X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI5X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMxX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMzX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM0X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM1X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM2X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM3X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM4X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM5X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80MF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80MV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQxX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80Ml9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80M19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQzX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80NF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQ0X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80NV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQ1X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80Nl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQ2X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80N19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQ3X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80OF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQ4X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80OV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQ5X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81MF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzUwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81MV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzUxX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81Ml9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzUyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81M19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzUzX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81NF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzU0X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81NV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzU1X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81Nl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzU2X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81N19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzU3X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0MDQwO1xcbiAgY29sb3I6IGJ1cmx5d29vZDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICAvKiBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sXFxuICAgIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmOyAqL1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLm15SGVhZGluZ0ZvbnQgeyAvKiBwYiAqL1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkhlYWRlckZvbnRGYW1pbHkpO1xcbn1cXG4ubXlDb21tb25Gb250IHsgLyogcGIgKi9cXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25Gb250RmFtaWx5KTtcXG59XFxuLm15bWF0ZXJpYWxpY29uIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5teW1hdGVyaWFsaWNvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgfVxcbi5maXZlcHhkaXZpZGVyIHsgLyogZnliICovXFxuICBsaW5lLWhlaWdodDogNXB4O1xcbn1cXG4uZmxvYXRyaWdodCB7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcbi50ZXh0Y2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRleHRyaWdodCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLmFsaWdudG9wIHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi5lcXVpc3BhY2VkIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcbi5kaXNhYmxlZCB7XFxuICBvcGFjaXR5OiAwLjY7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XFxufVxcbi8qIFJ1bGVzIGZvciB1c2luZyBpY29ucyBhcyB3aGl0ZSBvbiBhIGRhcmsgYmFja2dyb3VuZC4gKi9cXG4ubWF0ZXJpYWwtaWNvbnMubWQtbGlnaHQgeyBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTsgfVxcbi5tYXRlcmlhbC1pY29ucy5tZC1saWdodC5tZC1pbmFjdGl2ZSB7IGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7IH1cXG5cXG4uYXJ0d29ya0RpdiB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xcbiAgd2lkdGg6IDM3MHB4O1xcbn1cXG4uYXJ0d29ya0RpdiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm1vdmVMZWZ0QnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBjb2xvcjogY3lhbjtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG4ubW92ZVJpZ2h0QnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBjb2xvcjogY3lhbjtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG4uYXJ0d29yazEge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAyODBweDtcXG4gIHdpZHRoOiAzNzBweDtcXG59XFxuLmFydHdvcmsyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMzcwcHg7XFxuICB3aWR0aDogMzcwcHg7XFxufVxcbi5hcnR3b3JrMyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgd2lkdGg6IDM3MHB4O1xcbn1cXG4uYXJ0d29yazQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAyMjVweDtcXG4gIHdpZHRoOiAzNzBweDtcXG59XFxuLyogQ3VzdG9tIGtleWJvYXJkcyAqL1xcbi5zd2l0Y2hrYiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi8qIFZlcnNpb24gMSAqL1xcbi5jdXN0b21LZXlib2FyZFYxIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gIHdpZHRoOiAzNzBweDtcXG59XFxuLmNrdjFSb3cxIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4uY2t2MVJvdzIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLmNrdjFSb3czIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5jdXN0b21LZXlib2FyZFYxIHNwYW4ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwcHggMXB4O1xcbiAgcGFkZGluZzogNXB4IDhweDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbi5ja3YxIHtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG59XFxuLmNrdjEuQSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpOyBcXG59XFxuLmNrdjEuQiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpOyBcXG59XFxuLmNrdjEuQyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fICsgXCIpOyBcXG59XFxuLmNrdjEuRCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fICsgXCIpOyBcXG59XFxuLmNrdjEuRSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fICsgXCIpOyBcXG59XFxuLmNrdjEuRiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fICsgXCIpOyBcXG59XFxuLmNrdjEuRyB7IFxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gKyBcIik7IFxcbn1cXG4uY2t2MS5IIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fICsgXCIpO1xcbn1cXG4uY2t2MS5JIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEyX19fICsgXCIpO1xcbn1cXG4uY2t2MS5KIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEzX19fICsgXCIpO1xcbn1cXG4uY2t2MS5LIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE0X19fICsgXCIpO1xcbn1cXG4uY2t2MS5MIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE1X19fICsgXCIpO1xcbn1cXG4uY2t2MS5NIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE2X19fICsgXCIpOyBcXG59XFxuLmNrdjEuTiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xN19fXyArIFwiKTsgXFxufVxcbi5ja3YxLk8ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMThfX18gKyBcIik7IFxcbn1cXG4uY2t2MS5QIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE5X19fICsgXCIpOyBcXG59XFxuLmNrdjEuUSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMF9fXyArIFwiKTtcXG59XFxuLmNrdjEuUiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMV9fXyArIFwiKTtcXG59XFxuLmNrdjEuUyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMl9fXyArIFwiKTtcXG59XFxuLmNrdjEuVCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yM19fXyArIFwiKTtcXG59XFxuLmNrdjEuVSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNF9fXyArIFwiKTtcXG59XFxuLmNrdjEuViB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNV9fXyArIFwiKTtcXG59XFxuLmNrdjEuVyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNl9fXyArIFwiKTtcXG59XFxuLmNrdjEuWCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yN19fXyArIFwiKTtcXG59XFxuLmNrdjEuWSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yOF9fXyArIFwiKTtcXG59XFxuLmNrdjEuWiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yOV9fXyArIFwiKTtcXG59XFxuLmNrdjEuQmFja3NwYWNlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMwX19fICsgXCIpO1xcbn1cXG4uY2t2MVdvcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4vKiBWZXJzaW9uIDIgKi9cXG4uY3VzdG9tS2V5Ym9hcmRWMiB7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNXB4IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJjc3NQYWdlQkcpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIHdpZHRoOiAzNzBweDtcXG59XFxuLmNrdjJSb3cxIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi5ja3YyUm93MiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLmNrdjJSb3czIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uY3VzdG9tS2V5Ym9hcmRWMiBzcGFuIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDBweCAycHg7XFxuICAgIHBhZGRpbmc6IDVweCA4cHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcbi8qIFZlcnNpb24gMyAqL1xcbi5jdXN0b21LZXlib2FyZFYzIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gIHdpZHRoOiAzNzBweDtcXG59XFxuLmNrdjNSb3cxIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4uY2t2M1JvdzIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLmNrdjNSb3czIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5jdXN0b21LZXlib2FyZFYzIHNwYW4ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwcHggMXB4O1xcbiAgcGFkZGluZzogNXB4IDhweDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbi5ja3YzIHtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG59XFxuLmNrdjMuQSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMV9fXyArIFwiKTsgXFxufVxcbi5ja3YzLkIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzJfX18gKyBcIik7IFxcbn1cXG4uY2t2My5DIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMzX19fICsgXCIpOyBcXG59XFxuLmNrdjMuRCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zNF9fXyArIFwiKTsgXFxufVxcbi5ja3YzLkUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzVfX18gKyBcIik7IFxcbn1cXG4uY2t2My5GIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM2X19fICsgXCIpOyBcXG59XFxuLmNrdjMuRyB7IFxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzdfX18gKyBcIik7IFxcbn1cXG4uY2t2My5IIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM4X19fICsgXCIpO1xcbn1cXG4uY2t2My5JIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM5X19fICsgXCIpO1xcbn1cXG4uY2t2My5KIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQwX19fICsgXCIpO1xcbn1cXG4uY2t2My5LIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQxX19fICsgXCIpO1xcbn1cXG4uY2t2My5MIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQyX19fICsgXCIpO1xcbn1cXG4uY2t2My5NIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQzX19fICsgXCIpOyBcXG59XFxuLmNrdjMuTiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80NF9fXyArIFwiKTsgXFxufVxcbi5ja3YzLk8ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDVfX18gKyBcIik7IFxcbn1cXG4uY2t2My5QIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQ2X19fICsgXCIpOyBcXG59XFxuLmNrdjMuUSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80N19fXyArIFwiKTtcXG59XFxuLmNrdjMuUiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80OF9fXyArIFwiKTtcXG59XFxuLmNrdjMuUyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80OV9fXyArIFwiKTtcXG59XFxuLmNrdjMuVCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81MF9fXyArIFwiKTtcXG59XFxuLmNrdjMuVSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81MV9fXyArIFwiKTtcXG59XFxuLmNrdjMuViB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81Ml9fXyArIFwiKTtcXG59XFxuLmNrdjMuVyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81M19fXyArIFwiKTtcXG59XFxuLmNrdjMuWCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81NF9fXyArIFwiKTtcXG59XFxuLmNrdjMuWSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81NV9fXyArIFwiKTtcXG59XFxuLmNrdjMuWiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81Nl9fXyArIFwiKTtcXG59XFxuLmNrdjMuQmFja3NwYWNlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzU3X19fICsgXCIpO1xcbn1cXG4uY2t2M1dvcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVM7RUFDVDsyRUFDeUU7QUFDM0U7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsOEJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4QjtBQUNBLGlCQUFpQixPQUFPO0VBQ3RCLDBDQUEwQztBQUM1QztBQUNBLGdCQUFnQixPQUFPO0VBQ3JCLG9DQUFvQztBQUN0QztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiO0FBQ0YsaUJBQWlCLFFBQVE7RUFDdkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLDhCQUE4QjtBQUNoQztBQUNBLHlEQUF5RDtBQUN6RCwyQkFBMkIsNkJBQTZCLEVBQUU7QUFDMUQsdUNBQXVDLCtCQUErQixFQUFFOztBQUV4RTtFQUNFLFlBQVk7RUFDWixz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QXFEO0FBQ3ZEO0FBQ0E7RUFDRSwwREFBcUQ7QUFDdkQ7QUFDQTtFQUNFLDBEQUFxRDtBQUN2RDtBQUNBO0VBQ0UsMERBQXFEO0FBQ3ZEO0FBQ0E7RUFDRSwwREFBcUQ7QUFDdkQ7QUFDQTtFQUNFLDBEQUFxRDtBQUN2RDtBQUNBO0VBQ0UsMERBQXFEO0FBQ3ZEO0FBQ0E7RUFDRSwwREFBcUQ7QUFDdkQ7QUFDQTtFQUNFLDBEQUFxRDtBQUN2RDtBQUNBO0VBQ0UsMERBQXFEO0FBQ3ZEO0FBQ0E7RUFDRSwwREFBcUQ7QUFDdkQ7QUFDQTtFQUNFLDBEQUFxRDtBQUN2RDtBQUNBO0VBQ0UsMERBQXFEO0FBQ3ZEO0FBQ0E7RUFDRSwwREFBNkQ7QUFDL0Q7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDQwNDA7XFxuICBjb2xvcjogYnVybHl3b29kO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIC8qIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbixcXG4gICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7ICovXFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLm15SGVhZGluZ0ZvbnQgeyAvKiBwYiAqL1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNvbW1vbkhlYWRlckZvbnRGYW1pbHkpO1xcbn1cXG4ubXlDb21tb25Gb250IHsgLyogcGIgKi9cXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jb21tb25Gb250RmFtaWx5KTtcXG59XFxuLm15bWF0ZXJpYWxpY29uIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5teW1hdGVyaWFsaWNvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgfVxcbi5maXZlcHhkaXZpZGVyIHsgLyogZnliICovXFxuICBsaW5lLWhlaWdodDogNXB4O1xcbn1cXG4uZmxvYXRyaWdodCB7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcbi50ZXh0Y2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRleHRyaWdodCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLmFsaWdudG9wIHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi5lcXVpc3BhY2VkIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcbi5kaXNhYmxlZCB7XFxuICBvcGFjaXR5OiAwLjY7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XFxufVxcbi8qIFJ1bGVzIGZvciB1c2luZyBpY29ucyBhcyB3aGl0ZSBvbiBhIGRhcmsgYmFja2dyb3VuZC4gKi9cXG4ubWF0ZXJpYWwtaWNvbnMubWQtbGlnaHQgeyBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTsgfVxcbi5tYXRlcmlhbC1pY29ucy5tZC1saWdodC5tZC1pbmFjdGl2ZSB7IGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7IH1cXG5cXG4uYXJ0d29ya0RpdiB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xcbiAgd2lkdGg6IDM3MHB4O1xcbn1cXG4uYXJ0d29ya0RpdiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm1vdmVMZWZ0QnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBjb2xvcjogY3lhbjtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG4ubW92ZVJpZ2h0QnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBjb2xvcjogY3lhbjtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG4uYXJ0d29yazEge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvTW9ycGhvQ2F0ZXJwaWxsYXIucG5nJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMjgwcHg7XFxuICB3aWR0aDogMzcwcHg7XFxufVxcbi5hcnR3b3JrMiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9Nb3JwaG9Db2Nvb24ucG5nJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMzcwcHg7XFxuICB3aWR0aDogMzcwcHg7XFxufVxcbi5hcnR3b3JrMyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9Nb3JwaG9CdXR0ZXJmbHkucG5nJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMzUwcHg7XFxuICB3aWR0aDogMzcwcHg7XFxufVxcbi5hcnR3b3JrNCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy90cmFuc21vZ3JpZnkuanBnJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMjI1cHg7XFxuICB3aWR0aDogMzcwcHg7XFxufVxcbi8qIEN1c3RvbSBrZXlib2FyZHMgKi9cXG4uc3dpdGNoa2Ige1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4vKiBWZXJzaW9uIDEgKi9cXG4uY3VzdG9tS2V5Ym9hcmRWMSB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweCAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICB3aWR0aDogMzcwcHg7XFxufVxcbi5ja3YxUm93MSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLmNrdjFSb3cyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5ja3YxUm93MyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uY3VzdG9tS2V5Ym9hcmRWMSBzcGFuIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMHB4IDFweDtcXG4gIHBhZGRpbmc6IDVweCA4cHg7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG4uY2t2MSB7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgd2lkdGg6IDM1cHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxufVxcbi5ja3YxLkEge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0EuanBnJyk7IFxcbn1cXG4uY2t2MS5CIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92MS9CLmpwZycpOyBcXG59XFxuLmNrdjEuQyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjEvQy5qcGcnKTsgXFxufVxcbi5ja3YxLkQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL0QuanBnJyk7IFxcbn1cXG4uY2t2MS5FIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92MS9FLmpwZycpOyBcXG59XFxuLmNrdjEuRiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjEvRi5qcGcnKTsgXFxufVxcbi5ja3YxLkcgeyBcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92MS9HLmpwZycpOyBcXG59XFxuLmNrdjEuSCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjEvSC5qcGcnKTtcXG59XFxuLmNrdjEuSSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjEvSS5qcGcnKTtcXG59XFxuLmNrdjEuSiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjEvSi5qcGcnKTtcXG59XFxuLmNrdjEuSyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjEvSy5qcGcnKTtcXG59XFxuLmNrdjEuTCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjEvTC5qcGcnKTtcXG59XFxuLmNrdjEuTSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjEvTS5qcGcnKTsgXFxufVxcbi5ja3YxLk4ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL04uanBnJyk7IFxcbn1cXG4uY2t2MS5PIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92MS9PLmpwZycpOyBcXG59XFxuLmNrdjEuUCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjEvUC5qcGcnKTsgXFxufVxcbi5ja3YxLlEge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1EuanBnJyk7XFxufVxcbi5ja3YxLlIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1IuanBnJyk7XFxufVxcbi5ja3YxLlMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1MuanBnJyk7XFxufVxcbi5ja3YxLlQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1QuanBnJyk7XFxufVxcbi5ja3YxLlUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1UuanBnJyk7XFxufVxcbi5ja3YxLlYge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1YuanBnJyk7XFxufVxcbi5ja3YxLlcge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1cuanBnJyk7XFxufVxcbi5ja3YxLlgge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1guanBnJyk7XFxufVxcbi5ja3YxLlkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1kuanBnJyk7XFxufVxcbi5ja3YxLloge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YxL1ouanBnJyk7XFxufVxcbi5ja3YxLkJhY2tzcGFjZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjEvYmFja3NwYWNlLmpwZycpO1xcbn1cXG4uY2t2MVdvcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4vKiBWZXJzaW9uIDIgKi9cXG4uY3VzdG9tS2V5Ym9hcmRWMiB7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNXB4IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJjc3NQYWdlQkcpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIHdpZHRoOiAzNzBweDtcXG59XFxuLmNrdjJSb3cxIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi5ja3YyUm93MiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLmNrdjJSb3czIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uY3VzdG9tS2V5Ym9hcmRWMiBzcGFuIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDBweCAycHg7XFxuICAgIHBhZGRpbmc6IDVweCA4cHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcbi8qIFZlcnNpb24gMyAqL1xcbi5jdXN0b21LZXlib2FyZFYzIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gIHdpZHRoOiAzNzBweDtcXG59XFxuLmNrdjNSb3cxIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4uY2t2M1JvdzIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLmNrdjNSb3czIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5jdXN0b21LZXlib2FyZFYzIHNwYW4ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwcHggMXB4O1xcbiAgcGFkZGluZzogNXB4IDhweDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbi5ja3YzIHtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG59XFxuLmNrdjMuQSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjMvQS5wbmcnKTsgXFxufVxcbi5ja3YzLkIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YzL0IucG5nJyk7IFxcbn1cXG4uY2t2My5DIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92My9DLnBuZycpOyBcXG59XFxuLmNrdjMuRCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjMvRC5wbmcnKTsgXFxufVxcbi5ja3YzLkUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YzL0UucG5nJyk7IFxcbn1cXG4uY2t2My5GIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92My9GLnBuZycpOyBcXG59XFxuLmNrdjMuRyB7IFxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YzL0cucG5nJyk7IFxcbn1cXG4uY2t2My5IIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92My9ILnBuZycpO1xcbn1cXG4uY2t2My5JIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92My9JLnBuZycpO1xcbn1cXG4uY2t2My5KIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92My9KLnBuZycpO1xcbn1cXG4uY2t2My5LIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92My9LLnBuZycpO1xcbn1cXG4uY2t2My5MIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92My9MLnBuZycpO1xcbn1cXG4uY2t2My5NIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92My9NLnBuZycpOyBcXG59XFxuLmNrdjMuTiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjMvTi5wbmcnKTsgXFxufVxcbi5ja3YzLk8ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvS2V5Ym9hcmRzL3YzL08ucG5nJyk7IFxcbn1cXG4uY2t2My5QIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92My9QLnBuZycpOyBcXG59XFxuLmNrdjMuUSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjMvUS5wbmcnKTtcXG59XFxuLmNrdjMuUiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjMvUi5wbmcnKTtcXG59XFxuLmNrdjMuUyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjMvUy5wbmcnKTtcXG59XFxuLmNrdjMuVCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjMvVC5wbmcnKTtcXG59XFxuLmNrdjMuVSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjMvVS5wbmcnKTtcXG59XFxuLmNrdjMuViB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjMvVi5wbmcnKTtcXG59XFxuLmNrdjMuVyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjMvVy5wbmcnKTtcXG59XFxuLmNrdjMuWCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjMvWC5wbmcnKTtcXG59XFxuLmNrdjMuWSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjMvWS5wbmcnKTtcXG59XFxuLmNrdjMuWiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9LZXlib2FyZHMvdjMvWi5wbmcnKTtcXG59XFxuLmNrdjMuQmFja3NwYWNlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL0tleWJvYXJkcy92My9CYWNrc3BhY2UucG5nJyk7XFxufVxcbi5ja3YzV29yZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBlPXs5MTpmdW5jdGlvbihlKXtlLmV4cG9ydHM9ZnVuY3Rpb24oZSxyKXtpZighcil7cj17fX1lPWUmJmUuX19lc01vZHVsZT9lLmRlZmF1bHQ6ZTtpZih0eXBlb2YgZSE9PVwic3RyaW5nXCIpe3JldHVybiBlfWlmKC9eWydcIl0uKlsnXCJdJC8udGVzdChlKSl7ZT1lLnNsaWNlKDEsLTEpfWlmKHIuaGFzaCl7ZSs9ci5oYXNofWlmKC9bXCInKCkgXFx0XFxuXS8udGVzdChlKXx8ci5uZWVkUXVvdGVzKXtyZXR1cm4nXCInLmNvbmNhdChlLnJlcGxhY2UoL1wiL2csJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLFwiXFxcXG5cIiksJ1wiJyl9cmV0dXJuIGV9fX07dmFyIHI9e307ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyh0KXtpZihyW3RdKXtyZXR1cm4gclt0XS5leHBvcnRzfXZhciBfPXJbdF09e2V4cG9ydHM6e319O3ZhciBuPXRydWU7dHJ5e2VbdF0oXyxfLmV4cG9ydHMsX19uY2N3cGNrX3JlcXVpcmVfXyk7bj1mYWxzZX1maW5hbGx5e2lmKG4pZGVsZXRlIHJbdF19cmV0dXJuIF8uZXhwb3J0c31fX25jY3dwY2tfcmVxdWlyZV9fLmFiPV9fZGlybmFtZStcIi9cIjtyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg5MSl9KCk7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9CYXJiZWRXaXJlLjhlN2MyYTY2YjZkNjAxZGMxZGJiMzg5MWU3OWNmNmMzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvQmFyYmVkV2lyZVJvdGF0ZWQuNjY0NzNmY2Q0OGJhZjgwZDhjOTM3MzAxMjBiYTEwMjEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9BLjA2NTlhNDRkMzFjOTRkYTIyZjc5YmIyMTVhNDg4OWYwLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvQi4yYzMzYjEzNzFhODU3Y2IyNDA4ZWE0Zjk1ZTdlNjBiNi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL0MuOWJiOTBiYjhmYzNjMDExOTNkMTgzMDI0NjViM2UyNGEuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9ELmMwYTM2NjYwODg4NTA4NjRiOTEwMzQ4NDEzZDZjNTRkLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvRS41NjE5YjQ5ZmQ1YjI1ZDlhYTIzZTA4MDExYTM0ZjA3NS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL0YuZmM4ODVlOTZiZDFlZGY2MTk2NTAxMjk1MGJhNmMzMjcuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9HLjhhYTMzMDBlNTg0ZGRmNTJlNTA3MDdhZThmYTc1YTk4LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvSC5mM2M5YjFlODk1NGZjYTBmZTg3ZjczZmFhNDM4OTNkMC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL0kuYzY5NmM2Y2U4OTg4NTM1ODc5YTk0OWNmN2E5OTNhOTYuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9KLmUxOGNiYTVkN2U0YWY1NzcwYzQ2ZjgzZGU5NmRjZTE1LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvSy43MTkzMzcxMjI2MmQ3NjM1NjNhNTkwZDA0N2FhY2JjOC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL0wuODdlYmRjYjZmMzY5NzU4MGQ5NzI0NmY3ZjQxNWRjOGMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9NLjZjNzljZTNjMzg4YWQxNmM5MWE4ZTliYzYxYTRkMDQwLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvTi5jNTM2ZjkwNjVlNWUzMDBkMWQ2ZTg2MDMxZTkxNzg0Ni5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL08uZTNjMjU4YzExZDcxMDRmMDE0ZmJiY2Y0MDZjOWI4ODUuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9QLmQ3ODM5MWIyOTE5ZDRkYTQwNjg1MGU1MzZiMzIwNWVjLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvUS43ODBkNDVkYmY0MzFiMDc2YjA3YzJjMzcwYzcwMDhhYy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL1IuYjEyZmUzMTUyOWNjNTlkMjI1NWFhNjNkZWJkODJiYWUuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9TLjNkZGYzMmNmMmMzYzJlYTcyMzcwZDdmMjUyOGQwMGU1LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvVC4zZTkxYjU3MDUzNWVjYjliMDZlZjdiZTg3MTQxM2E5My5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL1UuOGNiMGUzMTY0YzZjYjRlNjEzYTMyNmFlNGYxNWZkY2MuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9WLmZhZjRhMmNjNjEzMmI3ZDc0YWVkZWJjYmM4ZDdlYjRjLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvVy5lN2UzOTU5NjZhYTUxZDViODI3MTc5YzRiNzJmYzNiMi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL1guYjUwNmE1OTY1NjBjNjMxNDdjM2NlZGRlYjVhMWJjYzAuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9ZLmY5ODNkNzY2ZjM2OTgyNDk3NDg4MTAwNzgzZjAwYzRhLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvWi5lOGI5MzZlOWU4Y2I0MTI1YjNkNDZkYzJiN2ZmMTBlNS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL2JhY2tzcGFjZS44NDQ5NmZmMGFlMWIxYzYxMGI2MzJlNGQ4MGYxN2JhYy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL0EuMjlhODViMmQ5ZDk4MDkwNjRhZGFiZmFkMWYyYzQ4YzMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9CLjczOWY2NmM3NTgxZDFlMjYyOTkyN2IyMjMxNGNiNDVmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvQmFja3NwYWNlLjA4MTVhZmFlMDM4N2YxZWY1MWI3MzNjMGFjYjhlMzAyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvQy43MThiNTM3OTk5YjVjOGJjNWMxOGZhODJjNTJmMGY4MC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL0QuNzJjOTQyZWYxZDhkNmM1MDI0ZjE0ZmRlMmRmYmFjMWUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9FLjYzZjdkNWU0MmQ1NTY0OTBhMjEyYmM5MDUwZWZlNjEzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvRi42ZDk0MmZkY2I2MDAyOWFlNGJhYjM2NDc0ZTgzY2IwZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL0cuYTljNzQ5MWI0NTYwZWEyOTljODNhOTA4MDY3MDMzNzQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9ILjdmZjhmMjIzNGZhYTMzYjZmZDhmNWQwZjg5M2ZhYmZjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvSS41ODhkZTg0NmFkMmEzNDg3NjQ1NjMyZTZmYzlhN2Y2NS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL0ouNjA1YjZhMTkxNjI1MjJhMDBhNGNjNjFjOTAzZTZlNWUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9LLmZiZDJhMWQxZjY2ZWIzMGE2MTkzMzY2Nzk0ZmVhMjA0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvTC4zN2U5MzE1MzQzYWE0ZDdiODZkMTgwZThlNmI3N2QwNC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL00uYWFkYTc2NGU0NzY1OWU2NGM4YWI4ZmI1YWE4NjgzNzEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9OLjE3NzE1MTI5ODM1ZjllMzBiZGRlNDA1ZGJhYzIwMjlmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvTy44NjE0ODVhN2M4OTAzNjg2NTFhNzVmY2E3ZWYxNDdjYi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL1AuNDQyNTZkMTAzZDk3NDg2ZjU0OTc2Y2IyZjZlNjcwYjcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9RLmNhNzc3ODYzNzM5OGYyZWFhOGM2Y2Q1OWJjMDU0MzQxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvUi4zYTYxNDhlZjcxMTcxZGQxNDI2MmEyODA2MjYzM2MyNi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL1MuNzA3ZTA0YjJhNjIxOTRjZDIzY2I4ZmJiOWQxMWEyNmUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9ULmI3ZTFhZmVmM2VjY2M0Mjk5ZTNlYzk2ZGExMTNkZjVlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvVS5hYzBmNGNmZjlmNmQxOGJkNDVkM2U0NzdmOWJiNWY4Ny5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL1YuNzRjMzFkZjFkZjAwNjBjODZhYzA2NjdjNGEyNzdmY2EucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9XLmQ5ZmZiYWM2ZTgwNTU5ZGQwOGNjYzMwNWJjMDc0ZmM4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvWC44NzdhMzkyOGI5OTc1NjkyNTFlMjJlNjU0N2E1OWI2YS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL1kuMWJkZTJmMzZmNjc1YmY5MDg2YWU4ZThhNWM0ZmUzYWQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9aLjJlNzFjZjdiMTZiYzQ5MzlkYWJlM2IzZDJmMzVlNWE0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvTW9ycGhvQnV0dGVyZmx5LjExNjE2MWJlZmU4ZDA2NWVkMGU2OTA0M2YyODgzYjk4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvTW9ycGhvQ2F0ZXJwaWxsYXIuYTE4YmI0ZmY4MDA3ZWY3ZjNlMzdmZGEzNjdiMzgyN2IucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9Nb3JwaG9Db2Nvb24uMjFmMTExMzIzZDhkMDBhYTRlMTFiOGNjZmEzNTg5ZjgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9XYWxsLjQ3YWRkMjBmYTk1ZjBiZGFhN2YzNzNjMTdjNjBmNzkwLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvcGxheWVydGl0bGUuOWQ2YmM5Nzc3ZjI1ZmM3YTJiMDgzNjEyN2EyNTQ0MDIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9wcmlzb25iYXJzLXNxdWFyZS4yZjkyMGYwZjkzNzU3OWJhZTU0OWQ1MmFkMmIwODIxZC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL3RpbGUuOGMwMTcxMzUzNmMwZDc5MGY2NTliZDViZTNmM2FjYWMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS90cmFuc21vZ3JpZnkuMmY2YTA5MWExNDFkNTRmZDM5NmUzZGYyZWYyZjRkNWMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQnKVxuIiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG5leHBvcnRzLkZyYWdtZW50ID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBleHBvcnRzLkZyYWdtZW50ID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcblxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50IHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLkZyYWdtZW50OlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTtcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcbnZhciBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZikge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIHNlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IHNlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cblxuZnVuY3Rpb24ganN4REVWKHR5cGUsIGNvbmZpZywgbWF5YmVLZXksIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgcmVmID0gbnVsbDsgLy8gQ3VycmVudGx5LCBrZXkgY2FuIGJlIHNwcmVhZCBpbiBhcyBhIHByb3AuIFRoaXMgY2F1c2VzIGEgcG90ZW50aWFsXG4gICAgLy8gaXNzdWUgaWYga2V5IGlzIGFsc28gZXhwbGljaXRseSBkZWNsYXJlZCAoaWUuIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+XG4gICAgLy8gb3IgPGRpdiBrZXk9XCJIaVwiIHsuLi5wcm9wc30gLz4gKS4gV2Ugd2FudCB0byBkZXByZWNhdGUga2V5IHNwcmVhZCxcbiAgICAvLyBidXQgYXMgYW4gaW50ZXJtZWRpYXJ5IHN0ZXAsIHdlIHdpbGwgdXNlIGpzeERFViBmb3IgZXZlcnl0aGluZyBleGNlcHRcbiAgICAvLyA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPiwgYmVjYXVzZSB3ZSBhcmVuJ3QgY3VycmVudGx5IGFibGUgdG8gdGVsbCBpZlxuICAgIC8vIGtleSBpcyBleHBsaWNpdGx5IGRlY2xhcmVkIHRvIGJlIHVuZGVmaW5lZCBvciBub3QuXG5cbiAgICBpZiAobWF5YmVLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAga2V5ID0gJycgKyBtYXliZUtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZik7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gICAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICB7XG4gICAgaWYgKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAge1xuICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB7XG4gICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgIGlmICghaW5mbykge1xuICAgICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5mbztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gICAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gICAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICAgIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpO1xuXG4gICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZVN0cmluZztcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgICB9XG5cbiAgICAgIGVycm9yKCdSZWFjdC5qc3g6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgc291cmNlLCBzZWxmKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gICAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAgIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAgIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gICAgaWYgKHZhbGlkVHlwZSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChpc1N0YXRpY0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuW2ldLCB0eXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCdSZWFjdC5qc3g6IFN0YXRpYyBjaGlsZHJlbiBzaG91bGQgYWx3YXlzIGJlIGFuIGFycmF5LiAnICsgJ1lvdSBhcmUgbGlrZWx5IGV4cGxpY2l0bHkgY2FsbGluZyBSZWFjdC5qc3hzIG9yIFJlYWN0LmpzeERFVi4gJyArICdVc2UgdGhlIEJhYmVsIHRyYW5zZm9ybSBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbiwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCkge1xuICAgICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufSAvLyBUaGVzZSB0d28gZnVuY3Rpb25zIGV4aXN0IHRvIHN0aWxsIGdldCBjaGlsZCB3YXJuaW5ncyBpbiBkZXZcblxudmFyIGpzeERFViQxID0gIGpzeFdpdGhWYWxpZGF0aW9uIDtcblxuZXhwb3J0cy5qc3hERVYgPSBqc3hERVYkMTtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzJyk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9