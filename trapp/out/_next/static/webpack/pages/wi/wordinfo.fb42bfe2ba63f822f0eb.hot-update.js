webpackHotUpdate_N_E("pages/wi/wordinfo",{

/***/ "./pages/wi/showanagrams.js":
/*!**********************************!*\
  !*** ./pages/wi/showanagrams.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Showanagrams; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\wi\\showanagrams.js",
    _s = $RefreshSig$();


function Showanagrams(props) {
  _s();

  const {
    0: anagrams,
    1: setAnagrams
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const apiCall = async () => {
      let response = await fetch('https://words-scrabble.herokuapp.com/api/anagrams/' + props.word);
      let data = await response.text();
      let anagramdata = JSON.parse(data);
      setAnagrams(anagramdata);
    };

    apiCall();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
    children: anagrams.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      class: "anagramCount",
      "data-toggle": "tooltip",
      title: anagrams,
      children: anagrams.length
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this)
  }, anagrams, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

_s(Showanagrams, "fEcyoQv6QvOT72fznB7Kpmz+l6Y=");

_c = Showanagrams;

var _c;

$RefreshReg$(_c, "Showanagrams");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2kvc2hvd2FuYWdyYW1zLmpzIl0sIm5hbWVzIjpbIlNob3dhbmFncmFtcyIsInByb3BzIiwiYW5hZ3JhbXMiLCJzZXRBbmFncmFtcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXBpQ2FsbCIsInJlc3BvbnNlIiwiZmV0Y2giLCJ3b3JkIiwiZGF0YSIsInRleHQiLCJhbmFncmFtZGF0YSIsIkpTT04iLCJwYXJzZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsWUFBVCxDQUF1QkMsS0FBdkIsRUFBK0I7QUFBQTs7QUFDMUMsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQyxzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQUMseURBQVMsQ0FBQyxNQUFJO0FBQ1YsVUFBTUMsT0FBTyxHQUFHLFlBQVU7QUFDdEIsVUFBSUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyx1REFBdURQLEtBQUssQ0FBQ1EsSUFBOUQsQ0FBMUI7QUFDQSxVQUFJQyxJQUFJLEdBQUcsTUFBTUgsUUFBUSxDQUFDSSxJQUFULEVBQWpCO0FBQ0EsVUFBSUMsV0FBVyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osSUFBWCxDQUFsQjtBQUNBUCxpQkFBVyxDQUFDUyxXQUFELENBQVg7QUFDSCxLQUxEOztBQU1BTixXQUFPO0FBQ1YsR0FSUSxFQVFQLEVBUk8sQ0FBVDtBQVNBLHNCQUNJO0FBQUEsY0FDS0osUUFBUSxDQUFDYSxNQUFULEtBQW9CLENBQXBCLGdCQUNELHVKQURDLGdCQUdEO0FBQU0sV0FBSyxFQUFDLGNBQVo7QUFBMkIscUJBQVksU0FBdkM7QUFBaUQsV0FBSyxFQUFFYixRQUF4RDtBQUFBLGdCQUFtRUEsUUFBUSxDQUFDYTtBQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkosS0FBV2IsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFTSDs7R0FwQnVCRixZOztLQUFBQSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dpL3dvcmRpbmZvLmZiNDJiZmUyYmE2M2Y4MjJmMGViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaG93YW5hZ3JhbXMoIHByb3BzICkge1xyXG4gICAgY29uc3QgW2FuYWdyYW1zLCBzZXRBbmFncmFtc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0IGFwaUNhbGwgPSBhc3luYyAoKT0+e1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly93b3Jkcy1zY3JhYmJsZS5oZXJva3VhcHAuY29tL2FwaS9hbmFncmFtcy8nICsgcHJvcHMud29yZClcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KClcclxuICAgICAgICAgICAgbGV0IGFuYWdyYW1kYXRhID0gSlNPTi5wYXJzZShkYXRhKVxyXG4gICAgICAgICAgICBzZXRBbmFncmFtcyhhbmFncmFtZGF0YSlcclxuICAgICAgICB9XHJcbiAgICAgICAgYXBpQ2FsbCgpXHJcbiAgICB9LFtdKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxzcGFuIGtleT17YW5hZ3JhbXN9PlxyXG4gICAgICAgICAgICB7YW5hZ3JhbXMubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFuYWdyYW1Db3VudFwiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPXthbmFncmFtc30+e2FuYWdyYW1zLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L3NwYW4+XHJcbilcclxufSJdLCJzb3VyY2VSb290IjoiIn0=