webpackHotUpdate_N_E("pages/wi/wordinfo",{

/***/ "./pages/wi/showvalidity.js":
/*!**********************************!*\
  !*** ./pages/wi/showvalidity.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Showvalidity; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\wi\\showvalidity.js",
    _s = $RefreshSig$();


function Showvalidity(props) {
  _s();

  console.log('validity snat 1' + props.word);
  const {
    0: validity,
    1: setValidity
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(['Checking validity ...']);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const apiCall = async () => {
      let response = await fetch('https://words-scrabble.herokuapp.com/api/valid/' + props.word);
      let data = await response.text();
      setValidity([data]);
      console.log('validity snat 2');
    };

    apiCall();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    children: validity[0] === 'Y' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "wordIsValid",
      children: "Valid word"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }, this) : validity[0] === 'N' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "wordIsNotValid",
      children: "Not a recognized word"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }, this) : validity[0]
  }, props.word, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

_s(Showvalidity, "2HXUbGiWzA031u+KeZWK6YFFW+o=");

_c = Showvalidity;

var _c;

$RefreshReg$(_c, "Showvalidity");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2kvc2hvd3ZhbGlkaXR5LmpzIl0sIm5hbWVzIjpbIlNob3d2YWxpZGl0eSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsIndvcmQiLCJ2YWxpZGl0eSIsInNldFZhbGlkaXR5IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJhcGlDYWxsIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFlBQVQsQ0FBdUJDLEtBQXZCLEVBQStCO0FBQUE7O0FBQzFDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBb0JGLEtBQUssQ0FBQ0csSUFBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLHNEQUFRLENBQUMsQ0FBQyx1QkFBRCxDQUFELENBQXhDO0FBQ0FDLHlEQUFTLENBQUMsTUFBSTtBQUNWLFVBQU1DLE9BQU8sR0FBRyxZQUFVO0FBQ3RCLFVBQUlDLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsb0RBQW9EVixLQUFLLENBQUNHLElBQTNELENBQTFCO0FBQ0EsVUFBSVEsSUFBSSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBVCxFQUFqQjtBQUNBUCxpQkFBVyxDQUFDLENBQUNNLElBQUQsQ0FBRCxDQUFYO0FBQ0FWLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0gsS0FMRDs7QUFNQU0sV0FBTztBQUNWLEdBUlEsRUFRUCxFQVJPLENBQVQ7QUFTQSxzQkFDSTtBQUFBLGNBQ0tKLFFBQVEsQ0FBQyxDQUFELENBQVIsS0FBZ0IsR0FBaEIsZ0JBQ0c7QUFBTSxlQUFTLEVBQUMsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESCxHQUdHQSxRQUFRLENBQUMsQ0FBRCxDQUFSLEtBQWdCLEdBQWhCLGdCQUNJO0FBQU0sZUFBUyxFQUFDLGdCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEdBR0lBLFFBQVEsQ0FBQyxDQUFEO0FBUHBCLEtBQVFKLEtBQUssQ0FBQ0csSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFZSDs7R0F4QnVCSixZOztLQUFBQSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dpL3dvcmRpbmZvLjNlZGI1MzhjODJhOWJiZTNkNzQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaG93dmFsaWRpdHkoIHByb3BzICkge1xyXG4gICAgY29uc29sZS5sb2coJ3ZhbGlkaXR5IHNuYXQgMScgKyBwcm9wcy53b3JkKVxyXG4gICAgY29uc3QgW3ZhbGlkaXR5LCBzZXRWYWxpZGl0eV0gPSB1c2VTdGF0ZShbJ0NoZWNraW5nIHZhbGlkaXR5IC4uLiddKVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3QgYXBpQ2FsbCA9IGFzeW5jICgpPT57XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3dvcmRzLXNjcmFiYmxlLmhlcm9rdWFwcC5jb20vYXBpL3ZhbGlkLycgKyBwcm9wcy53b3JkKVxyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKVxyXG4gICAgICAgICAgICBzZXRWYWxpZGl0eShbZGF0YV0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWxpZGl0eSBzbmF0IDInKVxyXG4gICAgICAgIH1cclxuICAgICAgICBhcGlDYWxsKClcclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHAga2V5PXtwcm9wcy53b3JkfT5cclxuICAgICAgICAgICAge3ZhbGlkaXR5WzBdID09PSAnWScgP1xyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid29yZElzVmFsaWRcIj5WYWxpZCB3b3JkPC9zcGFuPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICB2YWxpZGl0eVswXSA9PT0gJ04nID9cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3b3JkSXNOb3RWYWxpZFwiPk5vdCBhIHJlY29nbml6ZWQgd29yZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGl0eVswXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==