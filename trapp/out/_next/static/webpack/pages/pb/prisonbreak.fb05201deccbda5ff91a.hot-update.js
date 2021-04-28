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
  }, undefined) : _lib_pbconstants__WEBPACK_IMPORTED_MODULE_1__ === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_1__["SQUARE_UNUSED"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvc3F1YXJlLmpzIl0sIm5hbWVzIjpbIlNxdWFyZSIsImxldHRlciIsImNpIiwicmkiLCJzcXVhcmV1c2VkYnkiLCJyY2QiLCJvbkNsaWNrIiwicmFja3NpemUiLCJlZGdlIiwibWlkZGxlIiwidGRjbGFzcyIsImMiLCJ0ZHZhbHVlIiwiaW5kZXhPZiIsIlBBUlRZX0lDT05fUFJJU09ORVJTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBQ0MsUUFBRDtBQUFTQyxJQUFUO0FBQWFDLElBQWI7QUFBaUJDLGNBQWpCO0FBQStCQyxLQUEvQjtBQUFvQ0MsU0FBcEM7QUFBNkNDO0FBQTdDLENBQUQsS0FBNEQ7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTUMsSUFBSSxHQUFJRCxRQUFRLEdBQUcsQ0FBekI7QUFDQSxRQUFNRSxNQUFNLEdBQUdGLFFBQWY7QUFDQSxRQUFNRyxPQUFPLEdBQ1hULE1BQU0sS0FBS1UsOERBQVgsR0FDSSwwQkFESixHQUVJTixHQUFHLENBQUMsQ0FBRCxDQUFILEtBQVdGLEVBQVgsSUFBaUJFLEdBQUcsQ0FBQyxDQUFELENBQUgsS0FBV0gsRUFBNUIsSUFBa0NHLEdBQUcsQ0FBQyxDQUFELENBQUgsS0FBV00sMERBQTdDLEdBQ0EsMEJBREEsR0FFQU4sR0FBRyxDQUFDLENBQUQsQ0FBSCxLQUFXRixFQUFYLElBQWlCRSxHQUFHLENBQUMsQ0FBRCxDQUFILEtBQVdILEVBQTVCLElBQWtDRyxHQUFHLENBQUMsQ0FBRCxDQUFILEtBQVdNLHlEQUE3QyxHQUNBLHlCQURBLEdBRUFSLEVBQUUsS0FBS00sTUFBUCxJQUFpQlAsRUFBRSxLQUFLTyxNQUF4QixHQUNBLDRCQURBLEdBRUEsQ0FBQ04sRUFBRSxLQUFLLENBQVAsSUFBWUEsRUFBRSxLQUFLTSxNQUFuQixJQUE2Qk4sRUFBRSxLQUFLSyxJQUFyQyxNQUNDTixFQUFFLEtBQUssQ0FBUCxJQUFZQSxFQUFFLEtBQUtPLE1BQW5CLElBQTZCUCxFQUFFLEtBQUtNLElBRHJDLElBRUEsMkJBRkEsR0FHQUwsRUFBRSxHQUFHLENBQUwsS0FBV0QsRUFBRSxHQUFHLENBQWhCLEdBQ0Esc0JBREEsR0FDeUIsc0JBYi9CLENBVHVFLENBc0JoQjs7QUFDdkQsUUFBTVUsT0FBTyxHQUNYWCxNQUFNLEtBQUtVLDhEQUFYLEdBQ0lWLE1BREosR0FFSVMsT0FBTyxDQUFDRyxPQUFSLENBQWdCLFlBQWhCLElBQWdDLENBQUMsQ0FBakMsR0FDQSxHQURBLEdBRUFILE9BQU8sQ0FBQ0csT0FBUixDQUFnQixXQUFoQixJQUErQixDQUFDLENBQWhDLEdBQ0EsR0FEQSxHQUVBSCxPQUFPLENBQUNHLE9BQVIsQ0FBZ0IsY0FBaEIsSUFBa0MsQ0FBQyxDQUFuQyxnQkFDQTtBQUFHLGFBQVMsRUFBQyxnQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLEdBRUEsR0FUTjtBQVNVOztBQUNWLFNBQ0VILE9BQU8sQ0FBQ0csT0FBUixDQUFnQixhQUFoQixJQUFpQyxDQUFDLENBQWxDLGdCQUNFO0FBQVEsYUFBUyxFQUFFSCxPQUFuQjtBQUE0QixXQUFPLEVBQUVKLE9BQXJDO0FBQUEsMkJBQ0U7QUFBTSxlQUFTLEVBQUMsZ0JBQWhCO0FBQUEsZ0JBQWtDSyxxRUFBc0JHO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsR0FJRUgsNkNBQUMsS0FBS0EsOERBQU4sZ0JBQ0E7QUFBUSxhQUFTLEVBQUVELE9BQW5CO0FBQTRCLFdBQU8sRUFBRUosT0FBckM7QUFBQSxjQUNHTTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxnQkFLQTtBQUFRLGFBQVMsRUFBRUYsT0FBbkI7QUFBNEIsV0FBTyxFQUFFSixPQUFyQztBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFHLG9CQUFtQkYsWUFBWSxJQUFJTyw2Q0FBQyxLQUFLLEdBQU4sR0FBWSxJQUFaLEdBQW1CLEVBQXZCLENBQTJCLEVBQTNFO0FBQUEsZ0JBQStFQztBQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZKO0FBY0gsQ0EvQ0Q7O0tBQU1aLE07QUFpRFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BiL3ByaXNvbmJyZWFrLmZiMDUyMDFkZWNjYmRhNWZmOTFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjIGZyb20gJy4uLy4uL2xpYi9wYmNvbnN0YW50cyc7XHJcblxyXG5jb25zdCBTcXVhcmUgPSAoe2xldHRlciwgY2ksIHJpLCBzcXVhcmV1c2VkYnksIHJjZCwgb25DbGljaywgcmFja3NpemV9KSA9PiB7XHJcbiAgICAvLyBuZWVkIGxldHRlciB0byByZXByZXNlbnQgd2hpY2ggdGlsZSBpcyBvbiB0aGUgc3F1YXJlLCBpZiBhbnlcclxuICAgIC8vIG5lZWQgcmksIGNpIHRvIGRpc3BsYXkgYWx0ZXJuYXRpbmcgYmFja2dyb3VuZHMgb24gdW51c2VkIHNxdWFyZXNcclxuICAgIC8vIG5lZWQgc3F1YXJldXNlZGJ5IHRvIHBpY2sgY3NzIGNsYXNzTmFtZSBjb3JyZXNwb25kaW5nIHRvIHdobyBwbGF5ZWQgdGhlIHRpbGUgb24gdGhlIHNxdWFyZVxyXG4gICAgLy8gbmVlZCByY2QgdG8gZGlzcGxheSBzZWxlY3RlZCBkaXJlY3Rpb24gYXJyb3cgd2hlbiBhcHByb3ByaWF0ZVxyXG4gICAgLy8gbmVlZCBvbkNsaWNrIHRvIGhhbmRsZSBzcXVhcmUgY2xpY2sgYXQgYSBoaWdoZXIgbGV2ZWxcclxuICAgIC8vIG5lZWQgcmFja3NpemUgdG8gZGV0ZXJtaW5lIGNlbnRyZSBhbmQgYm9hcmQgYXJyYXkgZWRnZSBwb3NpdGlvbnNcclxuICAgIGNvbnN0IGVkZ2UgPSAocmFja3NpemUgKiAyKTtcclxuICAgIGNvbnN0IG1pZGRsZSA9IHJhY2tzaXplO1xyXG4gICAgY29uc3QgdGRjbGFzcyA9XHJcbiAgICAgIGxldHRlciAhPT0gYy5TUVVBUkVfVU5VU0VEXHJcbiAgICAgICAgPyBcInBiU3F1YXJlSW5uZXIgUGxheWVyVGlsZVwiXHJcbiAgICAgICAgOiByY2RbMF0gPT09IHJpICYmIHJjZFsxXSA9PT0gY2kgJiYgcmNkWzJdID09PSBjLkRJUl9SSUdIVFxyXG4gICAgICAgID8gXCJwYlNxdWFyZUlubmVyIFJpZ2h0QXJyb3dcIlxyXG4gICAgICAgIDogcmNkWzBdID09PSByaSAmJiByY2RbMV0gPT09IGNpICYmIHJjZFsyXSA9PT0gYy5ESVJfRE9XTlxyXG4gICAgICAgID8gXCJwYlNxdWFyZUlubmVyIERvd25BcnJvd1wiXHJcbiAgICAgICAgOiByaSA9PT0gbWlkZGxlICYmIGNpID09PSBtaWRkbGVcclxuICAgICAgICA/IFwicGJTcXVhcmVJbm5lciBDZW50ZXJTcXVhcmVcIlxyXG4gICAgICAgIDogKHJpID09PSAwIHx8IHJpID09PSBtaWRkbGUgfHwgcmkgPT09IGVkZ2UpICYmXHJcbiAgICAgICAgICAoY2kgPT09IDAgfHwgY2kgPT09IG1pZGRsZSB8fCBjaSA9PT0gZWRnZSlcclxuICAgICAgICA/IFwicGJTcXVhcmVJbm5lciBFc2NhcGVIYXRjaFwiXHJcbiAgICAgICAgOiByaSAlIDIgPT09IGNpICUgMlxyXG4gICAgICAgID8gXCJwYlNxdWFyZUlubmVyIHN0eWxlMVwiIDogXCJwYlNxdWFyZUlubmVyIHN0eWxlMlwiOyAvLyBBbHRlcm5hdGluZyBzcXVhcmUgc3R5bGVzXHJcbiAgICBjb25zdCB0ZHZhbHVlID1cclxuICAgICAgbGV0dGVyICE9PSBjLlNRVUFSRV9VTlVTRURcclxuICAgICAgICA/IGxldHRlclxyXG4gICAgICAgIDogdGRjbGFzcy5pbmRleE9mKFwiUmlnaHRBcnJvd1wiKSA+IC0xXHJcbiAgICAgICAgPyBcIuKeoVwiXHJcbiAgICAgICAgOiB0ZGNsYXNzLmluZGV4T2YoXCJEb3duQXJyb3dcIikgPiAtMVxyXG4gICAgICAgID8gXCLirIdcIlxyXG4gICAgICAgIDogdGRjbGFzcy5pbmRleE9mKFwiQ2VudGVyU3F1YXJlXCIpID4gLTFcclxuICAgICAgICA/IDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+c3RhcnM8L2k+XHJcbiAgICAgICAgOiBcIi5cIiAvKiBJZiBJIHB1dCBlbXB0eSBzdHJpbmcgb3IgJm5ic3A7IHRoZW4gaXQgYWZmZWN0cyB0aGUgZGlzcGxheSBvZGRseSAgKi9cclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRkY2xhc3MuaW5kZXhPZihcIkVzY2FwZUhhdGNoXCIpID4gLTEgP1xyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt0ZGNsYXNzfSBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+e2MuUEFSVFlfSUNPTl9QUklTT05FUlN9PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA6IGMgPT09IGMuU1FVQVJFX1VOVVNFRCA/XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3RkY2xhc3N9IG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgICAge3RkdmFsdWV9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDpcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dGRjbGFzc30gb25DbGljaz17b25DbGlja30+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBiU3F1YXJlVGlsZVRleHQgJHtzcXVhcmV1c2VkYnkgKyAoYyA9PT0gXCJRXCIgPyBcIiB1XCIgOiBcIlwiKX1gfT57dGR2YWx1ZX08L2Rpdj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbn07XHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IFNxdWFyZTsiXSwic291cmNlUm9vdCI6IiJ9