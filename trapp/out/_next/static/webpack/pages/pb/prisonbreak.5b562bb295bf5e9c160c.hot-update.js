webpackHotUpdate_N_E("pages/pb/prisonbreak",{

/***/ "./pages/pb/movesSection.js":
/*!**********************************!*\
  !*** ./pages/pb/movesSection.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_pbconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/pbconstants */ "./lib/pbconstants.js");


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\pb\\movesSection.js";


const ShowMoves = ({
  moves
}) => {
  // show moves made
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pbMoves",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pbMovesTitle",
      children: "MOVES"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pbMovesScrollable",
      id: "ScrollableMoves",
      children: moves && moves.map((m, mi) => {
        var _m$extrawords;

        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "pbMove",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "pbMove by",
            children: m.by
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 15
          }, undefined), ":", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: `pbMove ${m.type}`,
            children: m.type === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_1__["MOVE_TYPE_PLAY"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [m.pos, " ", m.mainword.replace("Q", "Qu"), (_m$extrawords = m.extrawords) === null || _m$extrawords === void 0 ? void 0 : _m$extrawords.map((w, wi) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: [",\xA0", w.replace("Q", "Qu")]
              }, `extraword${wi}`, true, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 23
              }, undefined))]
            }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 15
          }, undefined)]
        }, `move${mi}`, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 13
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 7
  }, undefined);
};

_c = ShowMoves;
/* harmony default export */ __webpack_exports__["default"] = (ShowMoves);

var _c;

$RefreshReg$(_c, "ShowMoves");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvbW92ZXNTZWN0aW9uLmpzIl0sIm5hbWVzIjpbIlNob3dNb3ZlcyIsIm1vdmVzIiwibWFwIiwibSIsIm1pIiwiYnkiLCJ0eXBlIiwiYyIsInBvcyIsIm1haW53b3JkIiwicmVwbGFjZSIsImV4dHJhd29yZHMiLCJ3Iiwid2kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWE7QUFBRTtBQUM3QixzQkFDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQW1DLFFBQUUsRUFBQyxpQkFBdEM7QUFBQSxnQkFDR0EsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxDQUFDQyxDQUFELEVBQUlDLEVBQUo7QUFBQTs7QUFBQSw0QkFDbEI7QUFBdUIsbUJBQVMsRUFBQyxRQUFqQztBQUFBLGtDQUNFO0FBQU0scUJBQVMsRUFBQyxXQUFoQjtBQUFBLHNCQUE2QkQsQ0FBQyxDQUFDRTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLG9CQUdFO0FBQU0scUJBQVMsRUFBRyxVQUFTRixDQUFDLENBQUNHLElBQUssRUFBbEM7QUFBQSxzQkFDR0gsQ0FBQyxDQUFDRyxJQUFGLEtBQVdDLCtEQUFYLGdCQUNDO0FBQUEseUJBQUdKLENBQUMsQ0FBQ0ssR0FBTCxPQUFXTCxDQUFDLENBQUNNLFFBQUYsQ0FBV0MsT0FBWCxDQUFtQixHQUFuQixFQUF1QixJQUF2QixDQUFYLG1CQUNHUCxDQUFDLENBQUNRLFVBREwsa0RBQ0csY0FBY1QsR0FBZCxDQUFrQixDQUFDVSxDQUFELEVBQUlDLEVBQUosa0JBQ2pCO0FBQUEsb0NBRUdELENBQUMsQ0FBQ0YsT0FBRixDQUFVLEdBQVYsRUFBYyxJQUFkLENBRkg7QUFBQSxpQkFBWSxZQUFXRyxFQUFHLEVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREQsQ0FESDtBQUFBLDRCQURELGdCQVVDO0FBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFIRjtBQUFBLFdBQVcsT0FBTVQsRUFBRyxFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURrQjtBQUFBLE9BQVY7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBMkJILENBNUJEOztLQUFNSixTO0FBOEJTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYi9wcmlzb25icmVhay41YjU2MmJiMjk1YmY1ZTljMTYwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYyBmcm9tICcuLi8uLi9saWIvcGJjb25zdGFudHMnO1xyXG5cclxuY29uc3QgU2hvd01vdmVzID0gKHttb3Zlc30pID0+IHsgLy8gc2hvdyBtb3ZlcyBtYWRlXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiTW92ZXNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiTW92ZXNUaXRsZVwiPk1PVkVTPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYk1vdmVzU2Nyb2xsYWJsZVwiIGlkPVwiU2Nyb2xsYWJsZU1vdmVzXCI+XHJcbiAgICAgICAgICB7bW92ZXMgJiYgbW92ZXMubWFwKChtLCBtaSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17YG1vdmUke21pfWB9IGNsYXNzTmFtZT1cInBiTW92ZVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiTW92ZSBieVwiPnttLmJ5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgcGJNb3ZlICR7bS50eXBlfWB9PlxyXG4gICAgICAgICAgICAgICAge20udHlwZSA9PT0gYy5NT1ZFX1RZUEVfUExBWSA/XHJcbiAgICAgICAgICAgICAgICAgIDw+e20ucG9zfSB7bS5tYWlud29yZC5yZXBsYWNlKFwiUVwiLFwiUXVcIil9XHJcbiAgICAgICAgICAgICAgICAgICAge20uZXh0cmF3b3Jkcz8ubWFwKCh3LCB3aSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtgZXh0cmF3b3JkJHt3aX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLCZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dy5yZXBsYWNlKFwiUVwiLFwiUXVcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IFNob3dNb3ZlczsgICJdLCJzb3VyY2VSb290IjoiIn0=