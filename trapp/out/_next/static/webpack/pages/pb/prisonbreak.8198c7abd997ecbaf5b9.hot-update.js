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
  letter,
  ci,
  ri,
  squareusedby,
  rcd,
  onClick,
  racksize
}) => {
  // need letter to represent which tile is on the square, if any
  // need ri, ci to display alternating backgrounds on unused squares
  // need squareusedby to pick css className corresponding to who played the tile on the square
  // need rcd to display selected direction arrow when appropriate
  // need onClick to handle square click at a higher level
  // need racksize to determine centre and board array edge positions
  const edge = racksize * 2;
  const middle = racksize;
  const tdclass = letter !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_1__["SQUARE_UNUSED"] ? "pbSquareInner PlayerTile" : rcd[0] === ri && rcd[1] === ci && rcd[2] === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_1__["DIR_RIGHT"] ? "pbSquareInner RightArrow" : rcd[0] === ri && rcd[1] === ci && rcd[2] === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_1__["DIR_DOWN"] ? "pbSquareInner DownArrow" : ri === middle && ci === middle ? "pbSquareInner CenterSquare" : (ri === 0 || ri === middle || ri === edge) && (ci === 0 || ci === middle || ci === edge) ? "pbSquareInner EscapeHatch" : ri % 2 === ci % 2 ? "pbSquareInner style1" : "pbSquareInner style2"; // Alternating square styles

  const tdvalue = letter !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_1__["SQUARE_UNUSED"] ? letter : tdclass.indexOf("RightArrow") > -1 ? "➡" : tdclass.indexOf("DownArrow") > -1 ? "⬇" : tdclass.indexOf("CenterSquare") > -1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
    className: "material-icons",
    children: "stars"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 11
  }, undefined) : ".";
  /* If I put empty string or &nbsp; then it affects the display oddly  */

  return tdclass.indexOf("EscapeHatch") > -1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: tdclass,
    onClick: onClick,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "material-icons",
      children: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_1__["PARTY_ICON_PRISONERS"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }, undefined) : letter === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_1__["SQUARE_UNUSED"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: tdclass,
    onClick: onClick,
    children: tdvalue
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: tdclass,
    onClick: onClick,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `pbSquareTileText ${squareusedby + (_lib_pbconstants__WEBPACK_IMPORTED_MODULE_1__ === "Q" ? " u" : "")}`,
      children: tdvalue
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvc3F1YXJlLmpzIl0sIm5hbWVzIjpbIlNxdWFyZSIsImxldHRlciIsImNpIiwicmkiLCJzcXVhcmV1c2VkYnkiLCJyY2QiLCJvbkNsaWNrIiwicmFja3NpemUiLCJlZGdlIiwibWlkZGxlIiwidGRjbGFzcyIsImMiLCJ0ZHZhbHVlIiwiaW5kZXhPZiIsIlBBUlRZX0lDT05fUFJJU09ORVJTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBQ0MsUUFBRDtBQUFTQyxJQUFUO0FBQWFDLElBQWI7QUFBaUJDLGNBQWpCO0FBQStCQyxLQUEvQjtBQUFvQ0MsU0FBcEM7QUFBNkNDO0FBQTdDLENBQUQsS0FBNEQ7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTUMsSUFBSSxHQUFJRCxRQUFRLEdBQUcsQ0FBekI7QUFDQSxRQUFNRSxNQUFNLEdBQUdGLFFBQWY7QUFDQSxRQUFNRyxPQUFPLEdBQ1hULE1BQU0sS0FBS1UsOERBQVgsR0FDSSwwQkFESixHQUVJTixHQUFHLENBQUMsQ0FBRCxDQUFILEtBQVdGLEVBQVgsSUFBaUJFLEdBQUcsQ0FBQyxDQUFELENBQUgsS0FBV0gsRUFBNUIsSUFBa0NHLEdBQUcsQ0FBQyxDQUFELENBQUgsS0FBV00sMERBQTdDLEdBQ0EsMEJBREEsR0FFQU4sR0FBRyxDQUFDLENBQUQsQ0FBSCxLQUFXRixFQUFYLElBQWlCRSxHQUFHLENBQUMsQ0FBRCxDQUFILEtBQVdILEVBQTVCLElBQWtDRyxHQUFHLENBQUMsQ0FBRCxDQUFILEtBQVdNLHlEQUE3QyxHQUNBLHlCQURBLEdBRUFSLEVBQUUsS0FBS00sTUFBUCxJQUFpQlAsRUFBRSxLQUFLTyxNQUF4QixHQUNBLDRCQURBLEdBRUEsQ0FBQ04sRUFBRSxLQUFLLENBQVAsSUFBWUEsRUFBRSxLQUFLTSxNQUFuQixJQUE2Qk4sRUFBRSxLQUFLSyxJQUFyQyxNQUNDTixFQUFFLEtBQUssQ0FBUCxJQUFZQSxFQUFFLEtBQUtPLE1BQW5CLElBQTZCUCxFQUFFLEtBQUtNLElBRHJDLElBRUEsMkJBRkEsR0FHQUwsRUFBRSxHQUFHLENBQUwsS0FBV0QsRUFBRSxHQUFHLENBQWhCLEdBQ0Esc0JBREEsR0FDeUIsc0JBYi9CLENBVHVFLENBc0JoQjs7QUFDdkQsUUFBTVUsT0FBTyxHQUNYWCxNQUFNLEtBQUtVLDhEQUFYLEdBQ0lWLE1BREosR0FFSVMsT0FBTyxDQUFDRyxPQUFSLENBQWdCLFlBQWhCLElBQWdDLENBQUMsQ0FBakMsR0FDQSxHQURBLEdBRUFILE9BQU8sQ0FBQ0csT0FBUixDQUFnQixXQUFoQixJQUErQixDQUFDLENBQWhDLEdBQ0EsR0FEQSxHQUVBSCxPQUFPLENBQUNHLE9BQVIsQ0FBZ0IsY0FBaEIsSUFBa0MsQ0FBQyxDQUFuQyxnQkFDQTtBQUFHLGFBQVMsRUFBQyxnQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLEdBRUEsR0FUTjtBQVNVOztBQUNWLFNBQ0VILE9BQU8sQ0FBQ0csT0FBUixDQUFnQixhQUFoQixJQUFpQyxDQUFDLENBQWxDLGdCQUNFO0FBQVEsYUFBUyxFQUFFSCxPQUFuQjtBQUE0QixXQUFPLEVBQUVKLE9BQXJDO0FBQUEsMkJBQ0U7QUFBTSxlQUFTLEVBQUMsZ0JBQWhCO0FBQUEsZ0JBQWtDSyxxRUFBc0JHO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsR0FJRWIsTUFBTSxLQUFLVSw4REFBWCxnQkFDQTtBQUFRLGFBQVMsRUFBRUQsT0FBbkI7QUFBNEIsV0FBTyxFQUFFSixPQUFyQztBQUFBLGNBQ0dNO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGdCQUtBO0FBQVEsYUFBUyxFQUFFRixPQUFuQjtBQUE0QixXQUFPLEVBQUVKLE9BQXJDO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUcsb0JBQW1CRixZQUFZLElBQUlPLDZDQUFDLEtBQUssR0FBTixHQUFZLElBQVosR0FBbUIsRUFBdkIsQ0FBMkIsRUFBM0U7QUFBQSxnQkFBK0VDO0FBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVko7QUFjSCxDQS9DRDs7S0FBTVosTTtBQWlEU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGIvcHJpc29uYnJlYWsuODE5OGM3YWJkOTk3ZWNiYWY1YjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGMgZnJvbSAnLi4vLi4vbGliL3BiY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IFNxdWFyZSA9ICh7bGV0dGVyLCBjaSwgcmksIHNxdWFyZXVzZWRieSwgcmNkLCBvbkNsaWNrLCByYWNrc2l6ZX0pID0+IHtcclxuICAgIC8vIG5lZWQgbGV0dGVyIHRvIHJlcHJlc2VudCB3aGljaCB0aWxlIGlzIG9uIHRoZSBzcXVhcmUsIGlmIGFueVxyXG4gICAgLy8gbmVlZCByaSwgY2kgdG8gZGlzcGxheSBhbHRlcm5hdGluZyBiYWNrZ3JvdW5kcyBvbiB1bnVzZWQgc3F1YXJlc1xyXG4gICAgLy8gbmVlZCBzcXVhcmV1c2VkYnkgdG8gcGljayBjc3MgY2xhc3NOYW1lIGNvcnJlc3BvbmRpbmcgdG8gd2hvIHBsYXllZCB0aGUgdGlsZSBvbiB0aGUgc3F1YXJlXHJcbiAgICAvLyBuZWVkIHJjZCB0byBkaXNwbGF5IHNlbGVjdGVkIGRpcmVjdGlvbiBhcnJvdyB3aGVuIGFwcHJvcHJpYXRlXHJcbiAgICAvLyBuZWVkIG9uQ2xpY2sgdG8gaGFuZGxlIHNxdWFyZSBjbGljayBhdCBhIGhpZ2hlciBsZXZlbFxyXG4gICAgLy8gbmVlZCByYWNrc2l6ZSB0byBkZXRlcm1pbmUgY2VudHJlIGFuZCBib2FyZCBhcnJheSBlZGdlIHBvc2l0aW9uc1xyXG4gICAgY29uc3QgZWRnZSA9IChyYWNrc2l6ZSAqIDIpO1xyXG4gICAgY29uc3QgbWlkZGxlID0gcmFja3NpemU7XHJcbiAgICBjb25zdCB0ZGNsYXNzID1cclxuICAgICAgbGV0dGVyICE9PSBjLlNRVUFSRV9VTlVTRURcclxuICAgICAgICA/IFwicGJTcXVhcmVJbm5lciBQbGF5ZXJUaWxlXCJcclxuICAgICAgICA6IHJjZFswXSA9PT0gcmkgJiYgcmNkWzFdID09PSBjaSAmJiByY2RbMl0gPT09IGMuRElSX1JJR0hUXHJcbiAgICAgICAgPyBcInBiU3F1YXJlSW5uZXIgUmlnaHRBcnJvd1wiXHJcbiAgICAgICAgOiByY2RbMF0gPT09IHJpICYmIHJjZFsxXSA9PT0gY2kgJiYgcmNkWzJdID09PSBjLkRJUl9ET1dOXHJcbiAgICAgICAgPyBcInBiU3F1YXJlSW5uZXIgRG93bkFycm93XCJcclxuICAgICAgICA6IHJpID09PSBtaWRkbGUgJiYgY2kgPT09IG1pZGRsZVxyXG4gICAgICAgID8gXCJwYlNxdWFyZUlubmVyIENlbnRlclNxdWFyZVwiXHJcbiAgICAgICAgOiAocmkgPT09IDAgfHwgcmkgPT09IG1pZGRsZSB8fCByaSA9PT0gZWRnZSkgJiZcclxuICAgICAgICAgIChjaSA9PT0gMCB8fCBjaSA9PT0gbWlkZGxlIHx8IGNpID09PSBlZGdlKVxyXG4gICAgICAgID8gXCJwYlNxdWFyZUlubmVyIEVzY2FwZUhhdGNoXCJcclxuICAgICAgICA6IHJpICUgMiA9PT0gY2kgJSAyXHJcbiAgICAgICAgPyBcInBiU3F1YXJlSW5uZXIgc3R5bGUxXCIgOiBcInBiU3F1YXJlSW5uZXIgc3R5bGUyXCI7IC8vIEFsdGVybmF0aW5nIHNxdWFyZSBzdHlsZXNcclxuICAgIGNvbnN0IHRkdmFsdWUgPVxyXG4gICAgICBsZXR0ZXIgIT09IGMuU1FVQVJFX1VOVVNFRFxyXG4gICAgICAgID8gbGV0dGVyXHJcbiAgICAgICAgOiB0ZGNsYXNzLmluZGV4T2YoXCJSaWdodEFycm93XCIpID4gLTFcclxuICAgICAgICA/IFwi4p6hXCJcclxuICAgICAgICA6IHRkY2xhc3MuaW5kZXhPZihcIkRvd25BcnJvd1wiKSA+IC0xXHJcbiAgICAgICAgPyBcIuKsh1wiXHJcbiAgICAgICAgOiB0ZGNsYXNzLmluZGV4T2YoXCJDZW50ZXJTcXVhcmVcIikgPiAtMVxyXG4gICAgICAgID8gPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5zdGFyczwvaT5cclxuICAgICAgICA6IFwiLlwiIC8qIElmIEkgcHV0IGVtcHR5IHN0cmluZyBvciAmbmJzcDsgdGhlbiBpdCBhZmZlY3RzIHRoZSBkaXNwbGF5IG9kZGx5ICAqL1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGRjbGFzcy5pbmRleE9mKFwiRXNjYXBlSGF0Y2hcIikgPiAtMSA/XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3RkY2xhc3N9IG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57Yy5QQVJUWV9JQ09OX1BSSVNPTkVSU308L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDogbGV0dGVyID09PSBjLlNRVUFSRV9VTlVTRUQgP1xyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt0ZGNsYXNzfSBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICAgIHt0ZHZhbHVlfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA6XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3RkY2xhc3N9IG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BwYlNxdWFyZVRpbGVUZXh0ICR7c3F1YXJldXNlZGJ5ICsgKGMgPT09IFwiUVwiID8gXCIgdVwiIDogXCJcIil9YH0+e3RkdmFsdWV9PC9kaXY+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG59O1xyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCBTcXVhcmU7Il0sInNvdXJjZVJvb3QiOiIifQ==