webpackHotUpdate_N_E("pages/pb/prisonbreak",{

/***/ "./pages/pb/prisonbreak.js":
/*!*********************************!*\
  !*** ./pages/pb/prisonbreak.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\pb\\prisonbreak.js",
    _s = $RefreshSig$();



function handler(req, res) {
  _s();

  const {
    0: squares,
    1: setSquares
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Array(15).fill(Array(15).fill('?')));
  const {
    0: tiles,
    1: setTiles
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'C', 'C', 'C', 'D', 'D', 'D', 'D', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'F', 'F', 'G', 'G', 'G', 'H', 'H', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M', 'N', 'N', 'N', 'N', 'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'P', 'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'T', 'T', 'U', 'U', 'U', 'U', 'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z', '?', '?']);
  const {
    0: selection,
    1: setSelection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(-1);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Game, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);

  function Game() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      class: "container-fluid",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "row",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-12",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "wmtitle Mastermind",
            children: "Prison Break"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "PRISONERS"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-6",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Board, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Tiles, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "GUARDS"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "row",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-1",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: '../../',
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "wmlink",
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this);
  }

  function Board() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
      className: "pbBoard",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: squares.map((r, ri) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BoardRow, {
            r: r,
            ri: ri
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 29
          }, this)
        }, `BoardRow${ri}`, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, this);
  }

  function BoardRow(props) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
      className: "row pbRow",
      children: props.r.map((c, ci) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Square, {
          c: c,
          ci: ci,
          ri: props.ri
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 25
        }, this)
      }, `Square${props.ri}-${ci}`, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, this);
  }

  function Square(props) {
    const tdclass = props.c !== "?" ? "pbSquareUsed" : props.ri === 7 && props.ci === 7 ? "pbSquareCenterSquare" : (props.ri === 0 || props.ri === 7 || props.ri === 14) && (props.ci === 0 || props.ci === 7 || props.ci === 14) ? "pbSquareEscapeHatch" : "pbSquare";
    const tdvalue = props.c !== "?" ? props.c : tdclass === "pbSquareCenterSquare" ? "✰" : tdclass === "pbSquareEscapeHatch" ? "💫" : "⎔";
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: tdclass,
          onClick: function () {
            if (selection > -1 && props.c === "?") {
              let newSquares = [...squares];
              let newRow = [...newSquares[props.ri]];
              newRow[props.ci] = tiles[selection];
              newSquares[props.ri] = [...newRow];
              let newTiles = [...tiles];
              newTiles.splice(selection, 1);
              setSquares(newSquares);
              setTiles(newTiles);
            }
          },
          children: tdvalue
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, this);
  }

  function Tiles() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbTilepool",
      children: tiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: [ti > 0 && tiles[ti] !== tiles[ti - 1] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 64
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function () {
            setSelection(ti);
          },
          children: t
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 25
        }, this)]
      }, `tile${ti}`, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }, this);
  }
}

_s(handler, "kGaegHBXoAzbzB6L/kCZbHyykq0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsuanMiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsInNxdWFyZXMiLCJzZXRTcXVhcmVzIiwidXNlU3RhdGUiLCJBcnJheSIsImZpbGwiLCJ0aWxlcyIsInNldFRpbGVzIiwic2VsZWN0aW9uIiwic2V0U2VsZWN0aW9uIiwiR2FtZSIsIkJvYXJkIiwibWFwIiwiciIsInJpIiwiQm9hcmRSb3ciLCJwcm9wcyIsImMiLCJjaSIsIlNxdWFyZSIsInRkY2xhc3MiLCJ0ZHZhbHVlIiwibmV3U3F1YXJlcyIsIm5ld1JvdyIsIm5ld1RpbGVzIiwic3BsaWNlIiwiVGlsZXMiLCJ0IiwidGkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxPQUFULENBQWlCQyxHQUFqQixFQUFzQkMsR0FBdEIsRUFBNEI7QUFBQTs7QUFDdkMsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDQyxLQUFLLENBQUMsRUFBRCxDQUFMLENBQVVDLElBQVYsQ0FBZUQsS0FBSyxDQUFDLEVBQUQsQ0FBTCxDQUFVQyxJQUFWLENBQWUsR0FBZixDQUFmLENBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JKLHNEQUFRLENBQUMsQ0FBQyxHQUFELEVBQUssR0FBTCxFQUFTLEdBQVQsRUFBYSxHQUFiLEVBQWlCLEdBQWpCLEVBQXFCLEdBQXJCLEVBQXlCLEdBQXpCLEVBQTZCLEdBQTdCLEVBQWlDLEdBQWpDLEVBQXFDLEdBQXJDLEVBQXlDLEdBQXpDLEVBQTZDLEdBQTdDLEVBQWlELEdBQWpELEVBQXFELEdBQXJELEVBQXlELEdBQXpELEVBQTZELEdBQTdELEVBQWlFLEdBQWpFLEVBQXFFLEdBQXJFLEVBQXlFLEdBQXpFLEVBQTZFLEdBQTdFLEVBQWlGLEdBQWpGLEVBQXFGLEdBQXJGLEVBQXlGLEdBQXpGLEVBQTZGLEdBQTdGLEVBQWlHLEdBQWpHLEVBQXFHLEdBQXJHLEVBQXlHLEdBQXpHLEVBQTZHLEdBQTdHLEVBQWlILEdBQWpILEVBQXFILEdBQXJILEVBQXlILEdBQXpILEVBQTZILEdBQTdILEVBQWlJLEdBQWpJLEVBQXFJLEdBQXJJLEVBQXlJLEdBQXpJLEVBQTZJLEdBQTdJLEVBQWlKLEdBQWpKLEVBQXFKLEdBQXJKLEVBQXlKLEdBQXpKLEVBQTZKLEdBQTdKLEVBQWlLLEdBQWpLLEVBQXFLLEdBQXJLLEVBQXlLLEdBQXpLLEVBQTZLLEdBQTdLLEVBQWlMLEdBQWpMLEVBQXFMLEdBQXJMLEVBQXlMLEdBQXpMLEVBQTZMLEdBQTdMLEVBQWlNLEdBQWpNLEVBQXFNLEdBQXJNLEVBQXlNLEdBQXpNLEVBQTZNLEdBQTdNLEVBQWlOLEdBQWpOLEVBQXFOLEdBQXJOLEVBQXlOLEdBQXpOLEVBQTZOLEdBQTdOLEVBQWlPLEdBQWpPLEVBQXFPLEdBQXJPLEVBQXlPLEdBQXpPLEVBQTZPLEdBQTdPLEVBQWlQLEdBQWpQLEVBQXFQLEdBQXJQLEVBQXlQLEdBQXpQLEVBQTZQLEdBQTdQLEVBQWlRLEdBQWpRLEVBQXFRLEdBQXJRLEVBQXlRLEdBQXpRLEVBQTZRLEdBQTdRLEVBQWlSLEdBQWpSLEVBQXFSLEdBQXJSLEVBQXlSLEdBQXpSLEVBQTZSLEdBQTdSLEVBQWlTLEdBQWpTLEVBQXFTLEdBQXJTLEVBQXlTLEdBQXpTLEVBQTZTLEdBQTdTLEVBQWlULEdBQWpULEVBQXFULEdBQXJULEVBQXlULEdBQXpULEVBQTZULEdBQTdULEVBQWlVLEdBQWpVLEVBQXFVLEdBQXJVLEVBQXlVLEdBQXpVLEVBQTZVLEdBQTdVLEVBQWlWLEdBQWpWLEVBQXFWLEdBQXJWLEVBQXlWLEdBQXpWLEVBQTZWLEdBQTdWLEVBQWlXLEdBQWpXLEVBQXFXLEdBQXJXLEVBQXlXLEdBQXpXLEVBQTZXLEdBQTdXLEVBQWlYLEdBQWpYLEVBQXFYLEdBQXJYLEVBQXlYLEdBQXpYLEVBQTZYLEdBQTdY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cmVhay4yZGFhZjBjOGM1YmRkNTIwMTJkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSAge1xyXG4gICAgY29uc3QgW3NxdWFyZXMsIHNldFNxdWFyZXNdID0gdXNlU3RhdGUoQXJyYXkoMTUpLmZpbGwoQXJyYXkoMTUpLmZpbGwoJz8nKSkpXHJcbiAgICBjb25zdCBbdGlsZXMsIHNldFRpbGVzXSA9IHVzZVN0YXRlKFsnQScsJ0EnLCdBJywnQScsJ0EnLCdBJywnQScsJ0EnLCdBJywnQicsJ0InLCdDJywnQycsJ0MnLCdEJywnRCcsJ0QnLCdEJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRicsJ0YnLCdHJywnRycsJ0cnLCdIJywnSCcsJ0knLCdJJywnSScsJ0knLCdJJywnSScsJ0knLCdJJywnSScsJ0onLCdLJywnTCcsJ0wnLCdMJywnTCcsJ00nLCdNJywnTicsJ04nLCdOJywnTicsJ04nLCdOJywnTycsJ08nLCdPJywnTycsJ08nLCdPJywnTycsJ08nLCdQJywnUCcsJ1EnLCdSJywnUicsJ1InLCdSJywnUicsJ1InLCdTJywnUycsJ1MnLCdTJywnVCcsJ1QnLCdUJywnVCcsJ1QnLCdUJywnVScsJ1UnLCdVJywnVScsJ1YnLCdWJywnVycsJ1cnLCdYJywnWScsJ1knLCdaJywnPycsJz8nXSlcclxuICAgIGNvbnN0IFtzZWxlY3Rpb24sIHNldFNlbGVjdGlvbl0gPSB1c2VTdGF0ZSgtMSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8R2FtZS8+XHJcbiAgICApXHJcblxyXG4gICAgZnVuY3Rpb24gR2FtZSgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid210aXRsZSBNYXN0ZXJtaW5kXCI+UHJpc29uIEJyZWFrPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5QUklTT05FUlM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGlsZXMgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+R1VBUkRTPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycuLi8uLi8nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIndtbGlua1wiPkhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQm9hcmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInBiQm9hcmRcIj5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7c3F1YXJlcy5tYXAoKHIscmkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2BCb2FyZFJvdyR7cml9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmRSb3cgcj17cn0gcmk9e3JpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEJvYXJkUm93KHByb3BzKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInJvdyBwYlJvd1wiPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLnIubWFwKChjLGNpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2BTcXVhcmUke3Byb3BzLnJpfS0ke2NpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3F1YXJlIGM9e2N9IGNpPXtjaX0gcmk9e3Byb3BzLnJpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gU3F1YXJlKHByb3BzKSB7XHJcbiAgICAgICAgY29uc3QgdGRjbGFzcyA9IHByb3BzLmMgIT09IFwiP1wiID8gXCJwYlNxdWFyZVVzZWRcIiA6IHByb3BzLnJpID09PSA3ICYmIHByb3BzLmNpID09PSA3ID8gXCJwYlNxdWFyZUNlbnRlclNxdWFyZVwiIDogKHByb3BzLnJpID09PSAwIHx8IHByb3BzLnJpID09PSA3IHx8IHByb3BzLnJpID09PSAxNCkgJiYgKHByb3BzLmNpID09PSAwIHx8IHByb3BzLmNpID09PSA3IHx8IHByb3BzLmNpID09PSAxNCkgPyBcInBiU3F1YXJlRXNjYXBlSGF0Y2hcIiA6IFwicGJTcXVhcmVcIlxyXG4gICAgICAgIGNvbnN0IHRkdmFsdWUgPSBwcm9wcy5jICE9PSBcIj9cIiA/IHByb3BzLmMgOiB0ZGNsYXNzID09PSBcInBiU3F1YXJlQ2VudGVyU3F1YXJlXCIgPyBcIuKcsFwiIDogdGRjbGFzcyA9PT0gXCJwYlNxdWFyZUVzY2FwZUhhdGNoXCIgPyBcIvCfkqtcIiA6IFwi4o6UXCJcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT17dGRjbGFzc31cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGlvbiA+IC0xICYmIHByb3BzLmMgPT09IFwiP1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3U3F1YXJlcyA9IFsuLi5zcXVhcmVzXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1JvdyA9IFsuLi5uZXdTcXVhcmVzW3Byb3BzLnJpXV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Jvd1twcm9wcy5jaV0gPSB0aWxlc1tzZWxlY3Rpb25dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdTcXVhcmVzW3Byb3BzLnJpXSA9IFsuLi5uZXdSb3ddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUaWxlcy5zcGxpY2Uoc2VsZWN0aW9uLCAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGlsZXMobmV3VGlsZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RkdmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gVGlsZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGJUaWxlcG9vbFwiPlxyXG4gICAgICAgICAgICAgICAge3RpbGVzLm1hcCgodCx0aSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YHRpbGUke3RpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGkgPiAwICYmIHRpbGVzW3RpXSAhPT0gdGlsZXNbdGktMV0gPyA8YnI+PC9icj4gOiA8PjwvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0aW9uKHRpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9