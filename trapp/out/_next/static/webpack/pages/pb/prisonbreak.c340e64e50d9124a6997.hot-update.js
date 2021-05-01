webpackHotUpdate_N_E("pages/pb/prisonbreak",{

/***/ "./pages/pb/square.js":
/*!****************************!*\
  !*** ./pages/pb/square.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_pbconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/pbconstants */ "./lib/pbconstants.js");

var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\pb\\square.js";


const Square = ({
  usedby,
  type,
  letter,
  ri,
  ci,
  rcd,
  onClick
}) => {
  // need ri and ci and rcd to display selected direction arrow when appropriate
  // need onClick to handle square click at a higher level
  const tdclass = usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_1__["USED_BY_NONE"] ? "pbSquareInner PlayerTile" // Player has a tile on the square
  : rcd[0] === ri && rcd[1] === ci && rcd[2] === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_1__["DIR_RIGHT"] ? "pbSquareInner RightArrow" // Show right arrow
  : rcd[0] === ri && rcd[1] === ci && rcd[2] === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_1__["DIR_DOWN"] ? "pbSquareInner DownArrow" // Show down arrow
  : "pbSquareInner " + type; // See pbconstants.js for values

  const tdvalue = usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_1__["USED_BY_NONE"] ? letter // Show played tile
  : tdclass.indexOf("RightArrow") > -1 ? "➡" // Show right arrow
  : tdclass.indexOf("DownArrow") > -1 ? "⬇" // Show down arrow
  : tdclass.indexOf("CenterSquare") > -1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
    className: "material-icons",
    children: "stars"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 50
  }, undefined) // Show centre square star
  : tdclass.indexOf("EscapeHatch") > -1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
    className: "material-icons",
    children: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_1__["PARTY_ICON_PRISONERS"]
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 49
  }, undefined) // Show prisoners icon on escape hatches
  : ".";
  /* If I put empty string or &nbsp; then it affects the display oddly  */

  return usedby === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_1__["USED_BY_NONE"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: tdclass,
    onClick: onClick,
    children: tdvalue
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: tdclass,
    onClick: onClick,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `pbSquareTileText ${usedby + (letter === "Q" ? " u" : "")}`,
      children: tdvalue
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, undefined);
};

_c = Square;
/* harmony default export */ __webpack_exports__["default"] = (Square);

var _c;

$RefreshReg$(_c, "Square");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvc3F1YXJlLmpzIl0sIm5hbWVzIjpbIlNxdWFyZSIsInVzZWRieSIsInR5cGUiLCJsZXR0ZXIiLCJyaSIsImNpIiwicmNkIiwib25DbGljayIsInRkY2xhc3MiLCJjIiwidGR2YWx1ZSIsImluZGV4T2YiLCJQQVJUWV9JQ09OX1BSSVNPTkVSUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUNDLFFBQUQ7QUFBU0MsTUFBVDtBQUFlQyxRQUFmO0FBQXVCQyxJQUF2QjtBQUEyQkMsSUFBM0I7QUFBK0JDLEtBQS9CO0FBQW9DQztBQUFwQyxDQUFELEtBQWtEO0FBQzdEO0FBQ0E7QUFDQSxRQUFNQyxPQUFPLEdBQ1hQLE1BQU0sS0FBS1EsNkRBQVgsR0FBNEIsMEJBQTVCLENBQXVEO0FBQXZELElBQ0lILEdBQUcsQ0FBQyxDQUFELENBQUgsS0FBV0YsRUFBWCxJQUFpQkUsR0FBRyxDQUFDLENBQUQsQ0FBSCxLQUFXRCxFQUE1QixJQUFrQ0MsR0FBRyxDQUFDLENBQUQsQ0FBSCxLQUFXRywwREFBN0MsR0FBMkQsMEJBQTNELENBQXNGO0FBQXRGLElBQ0FILEdBQUcsQ0FBQyxDQUFELENBQUgsS0FBV0YsRUFBWCxJQUFpQkUsR0FBRyxDQUFDLENBQUQsQ0FBSCxLQUFXRCxFQUE1QixJQUFrQ0MsR0FBRyxDQUFDLENBQUQsQ0FBSCxLQUFXRyx5REFBN0MsR0FBMEQseUJBQTFELENBQW9GO0FBQXBGLElBQ0EsbUJBQW1CUCxJQUp6QixDQUg2RCxDQU85Qjs7QUFDL0IsUUFBTVEsT0FBTyxHQUNYVCxNQUFNLEtBQUtRLDZEQUFYLEdBQTRCTixNQUE1QixDQUFtQztBQUFuQyxJQUNJSyxPQUFPLENBQUNHLE9BQVIsQ0FBZ0IsWUFBaEIsSUFBZ0MsQ0FBQyxDQUFqQyxHQUFxQyxHQUFyQyxDQUF5QztBQUF6QyxJQUNBSCxPQUFPLENBQUNHLE9BQVIsQ0FBZ0IsV0FBaEIsSUFBK0IsQ0FBQyxDQUFoQyxHQUFvQyxHQUFwQyxDQUF3QztBQUF4QyxJQUNBSCxPQUFPLENBQUNHLE9BQVIsQ0FBZ0IsY0FBaEIsSUFBa0MsQ0FBQyxDQUFuQyxnQkFBdUM7QUFBRyxhQUFTLEVBQUMsZ0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBdkMsQ0FBK0U7QUFBL0UsSUFDQUgsT0FBTyxDQUFDRyxPQUFSLENBQWdCLGFBQWhCLElBQWlDLENBQUMsQ0FBbEMsZ0JBQXNDO0FBQUcsYUFBUyxFQUFDLGdCQUFiO0FBQUEsY0FBK0JGLHFFQUFzQkc7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF0QyxDQUFpRztBQUFqRyxJQUNBLEdBTk47QUFNVTs7QUFDVixTQUNFWCxNQUFNLEtBQUtRLDZEQUFYLGdCQUNFO0FBQVEsYUFBUyxFQUFFRCxPQUFuQjtBQUE0QixXQUFPLEVBQUVELE9BQXJDO0FBQUEsY0FDR0c7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZ0JBS0U7QUFBUSxhQUFTLEVBQUVGLE9BQW5CO0FBQTRCLFdBQU8sRUFBRUQsT0FBckM7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRyxvQkFBbUJOLE1BQU0sSUFBSUUsTUFBTSxLQUFLLEdBQVgsR0FBaUIsSUFBakIsR0FBd0IsRUFBNUIsQ0FBZ0MsRUFBMUU7QUFBQSxnQkFBOEVPO0FBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTko7QUFVSCxDQXpCRDs7S0FBTVYsTTtBQTJCU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGIvcHJpc29uYnJlYWsuYzM0MGU2NGU1MGQ5MTI0YTY5OTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGMgZnJvbSAnLi4vLi4vbGliL3BiY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IFNxdWFyZSA9ICh7dXNlZGJ5LCB0eXBlLCBsZXR0ZXIsIHJpLCBjaSwgcmNkLCBvbkNsaWNrfSkgPT4ge1xyXG4gICAgLy8gbmVlZCByaSBhbmQgY2kgYW5kIHJjZCB0byBkaXNwbGF5IHNlbGVjdGVkIGRpcmVjdGlvbiBhcnJvdyB3aGVuIGFwcHJvcHJpYXRlXHJcbiAgICAvLyBuZWVkIG9uQ2xpY2sgdG8gaGFuZGxlIHNxdWFyZSBjbGljayBhdCBhIGhpZ2hlciBsZXZlbFxyXG4gICAgY29uc3QgdGRjbGFzcyA9XHJcbiAgICAgIHVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUgPyBcInBiU3F1YXJlSW5uZXIgUGxheWVyVGlsZVwiIC8vIFBsYXllciBoYXMgYSB0aWxlIG9uIHRoZSBzcXVhcmVcclxuICAgICAgICA6IHJjZFswXSA9PT0gcmkgJiYgcmNkWzFdID09PSBjaSAmJiByY2RbMl0gPT09IGMuRElSX1JJR0hUID8gXCJwYlNxdWFyZUlubmVyIFJpZ2h0QXJyb3dcIiAvLyBTaG93IHJpZ2h0IGFycm93XHJcbiAgICAgICAgOiByY2RbMF0gPT09IHJpICYmIHJjZFsxXSA9PT0gY2kgJiYgcmNkWzJdID09PSBjLkRJUl9ET1dOID8gXCJwYlNxdWFyZUlubmVyIERvd25BcnJvd1wiIC8vIFNob3cgZG93biBhcnJvd1xyXG4gICAgICAgIDogXCJwYlNxdWFyZUlubmVyIFwiICsgdHlwZTsgLy8gU2VlIHBiY29uc3RhbnRzLmpzIGZvciB2YWx1ZXNcclxuICAgIGNvbnN0IHRkdmFsdWUgPVxyXG4gICAgICB1c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FID8gbGV0dGVyIC8vIFNob3cgcGxheWVkIHRpbGVcclxuICAgICAgICA6IHRkY2xhc3MuaW5kZXhPZihcIlJpZ2h0QXJyb3dcIikgPiAtMSA/IFwi4p6hXCIgLy8gU2hvdyByaWdodCBhcnJvd1xyXG4gICAgICAgIDogdGRjbGFzcy5pbmRleE9mKFwiRG93bkFycm93XCIpID4gLTEgPyBcIuKsh1wiIC8vIFNob3cgZG93biBhcnJvd1xyXG4gICAgICAgIDogdGRjbGFzcy5pbmRleE9mKFwiQ2VudGVyU3F1YXJlXCIpID4gLTEgPyA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnN0YXJzPC9pPiAvLyBTaG93IGNlbnRyZSBzcXVhcmUgc3RhclxyXG4gICAgICAgIDogdGRjbGFzcy5pbmRleE9mKFwiRXNjYXBlSGF0Y2hcIikgPiAtMSA/IDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+e2MuUEFSVFlfSUNPTl9QUklTT05FUlN9PC9pPiAvLyBTaG93IHByaXNvbmVycyBpY29uIG9uIGVzY2FwZSBoYXRjaGVzXHJcbiAgICAgICAgOiBcIi5cIiAvKiBJZiBJIHB1dCBlbXB0eSBzdHJpbmcgb3IgJm5ic3A7IHRoZW4gaXQgYWZmZWN0cyB0aGUgZGlzcGxheSBvZGRseSAgKi9cclxuICAgIHJldHVybiAoXHJcbiAgICAgIHVzZWRieSA9PT0gYy5VU0VEX0JZX05PTkUgP1xyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt0ZGNsYXNzfSBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICAgIHt0ZHZhbHVlfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA6XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3RkY2xhc3N9IG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BwYlNxdWFyZVRpbGVUZXh0ICR7dXNlZGJ5ICsgKGxldHRlciA9PT0gXCJRXCIgPyBcIiB1XCIgOiBcIlwiKX1gfT57dGR2YWx1ZX08L2Rpdj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbn07XHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IFNxdWFyZTsiXSwic291cmNlUm9vdCI6IiJ9