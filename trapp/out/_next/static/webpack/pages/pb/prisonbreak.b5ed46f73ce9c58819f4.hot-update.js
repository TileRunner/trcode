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
  const {
    0: ptiles,
    1: setPtiles
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: gtiles,
    1: setGtiles
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: whoseturn,
    1: setWhoseturn
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('P');
  const {
    0: picking,
    1: setPicking
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Game, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
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
            lineNumber: 21,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Prisoners, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-6",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Board, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Tiles, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Guards, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
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
              lineNumber: 41,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
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
            lineNumber: 55,
            columnNumber: 29
          }, this)
        }, `BoardRow${ri}`, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
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
          lineNumber: 68,
          columnNumber: 25
        }, this)
      }, `Square${props.ri}-${ci}`, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
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
              newRow[props.ci] = whoseturn === 'P' ? ptiles[selection] : gtiles[selection];
              newSquares[props.ri] = [...newRow];
              let newTiles = whoseturn === 'P' ? [...ptiles] : [...gtiles];
              newTiles.splice(selection, 1);
              setSquares(newSquares);
              whoseturn === 'P' ? setPtiles(newTiles) : setGtiles(newTiles);
            } else if (props.c !== "?") {
              // Assuming some good will from the users to click a tile they played
              if (whoseturn === 'P' && ptiles.length < 7) {
                let newPtiles = [...ptiles, props.c];
                let newSquares = [...squares];
                let newRow = [...newSquares[props.ri]];
                newRow[props.ci] = "?";
                newSquares[props.ri] = [...newRow];
                setSquares(newSquares);
                setPtiles(newPtiles);
              } else if (whoseturn === 'G' && gtiles.length < 7) {
                let newGtiles = [...gtiles, props.c];
                let newSquares = [...squares];
                let newRow = [...newSquares[props.ri]];
                newRow[props.ci] = "?";
                newSquares[props.ri] = [...newRow];
                setSquares(newSquares);
                setGtiles(newGtiles);
              }
            }
          },
          children: tdvalue
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, this);
  }

  function Tiles() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbTilepool",
      children: tiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: [ti > 0 && tiles[ti] !== tiles[ti - 1] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 64
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: t
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 25
        }, this)]
      }, `tile${ti}`, true, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }, this);
  }

  function Prisoners() {
    if (picking && whoseturn === 'P' && ptiles.length < 7 && tiles.length > 0) {
      let newPtiles = [...ptiles];
      let newTiles = [...tiles];

      while (newPtiles.length < 7 && newTiles.length > 0) {
        let rand = Math.floor(Math.random() * tiles.length);
        newPtiles = [...newPtiles, newTiles[rand]];
        newTiles.splice(rand, 1);
      }

      setPtiles(newPtiles);
      setTiles(newTiles);
      setPicking(false);
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "PRISONERS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "pbTilepool",
        children: ptiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function () {
              whoseturn === 'P' ? setSelection(ti) : alert('It is not your turn');
            },
            children: t
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 29
          }, this)
        }, `ptile${ti}`, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 17
      }, this), whoseturn === 'P' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function () {
          setWhoseturn('G');
          setPicking(true);
        },
        children: "Finish Turn"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 21
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }, this);
  }

  function Guards() {
    if (picking && whoseturn === 'G' && gtiles.length < 7 && tiles.length > 0) {
      let newGtiles = [...gtiles];
      let newTiles = [...tiles];

      while (newGtiles.length < 7 && newTiles.length > 0) {
        let rand = Math.floor(Math.random() * tiles.length);
        newGtiles = [...newGtiles, newTiles[rand]];
        newTiles.splice(rand, 1);
      }

      setTiles(newTiles);
      setGtiles(newGtiles);
      setPicking(false);
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "GUARDS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "pbTilepool",
        children: gtiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function () {
              whoseturn === 'G' ? setSelection(ti) : alert('It is not your turn');
            },
            children: t
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 29
          }, this)
        }, `gtile${ti}`, false, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 17
      }, this), whoseturn === 'G' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function () {
          setWhoseturn('P');
          setPicking(true);
        },
        children: "Finish Turn"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 21
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }, this);
  }
}

_s(handler, "/lIiP9WMMTUeTyutLa3SQ/2jCI8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsuanMiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsInNxdWFyZXMiLCJzZXRTcXVhcmVzIiwidXNlU3RhdGUiLCJBcnJheSIsImZpbGwiLCJ0aWxlcyIsInNldFRpbGVzIiwic2VsZWN0aW9uIiwic2V0U2VsZWN0aW9uIiwicHRpbGVzIiwic2V0UHRpbGVzIiwiZ3RpbGVzIiwic2V0R3RpbGVzIiwid2hvc2V0dXJuIiwic2V0V2hvc2V0dXJuIiwicGlja2luZyIsInNldFBpY2tpbmciLCJHYW1lIiwiQm9hcmQiLCJtYXAiLCJyIiwicmkiLCJCb2FyZFJvdyIsInByb3BzIiwiYyIsImNpIiwiU3F1YXJlIiwidGRjbGFzcyIsInRkdmFsdWUiLCJuZXdTcXVhcmVzIiwibmV3Um93IiwibmV3VGlsZXMiLCJzcGxpY2UiLCJsZW5ndGgiLCJuZXdQdGlsZXMiLCJuZXdHdGlsZXMiLCJUaWxlcyIsInQiLCJ0aSIsIlByaXNvbmVycyIsInJhbmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJhbGVydCIsIkd1YXJkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCQyxHQUF0QixFQUE0QjtBQUFBOztBQUN2QyxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLHNEQUFRLENBQUNDLEtBQUssQ0FBQyxFQUFELENBQUwsQ0FBVUMsSUFBVixDQUFlRCxLQUFLLENBQUMsRUFBRCxDQUFMLENBQVVDLElBQVYsQ0FBZSxHQUFmLENBQWYsQ0FBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkosc0RBQVEsQ0FBQyxDQUFDLEdBQUQsRUFBSyxHQUFMLEVBQVMsR0FBVCxFQUFhLEdBQWIsRUFBaUIsR0FBakIsRUFBcUIsR0FBckIsRUFBeUIsR0FBekIsRUFBNkIsR0FBN0IsRUFBaUMsR0FBakMsRUFBcUMsR0FBckMsRUFBeUMsR0FBekMsRUFBNkMsR0FBN0MsRUFBaUQsR0FBakQsRUFBcUQsR0FBckQsRUFBeUQsR0FBekQsRUFBNkQsR0FBN0QsRUFBaUUsR0FBakUsRUFBcUUsR0FBckUsRUFBeUUsR0FBekUsRUFBNkUsR0FBN0UsRUFBaUYsR0FBakYsRUFBcUYsR0FBckYsRUFBeUYsR0FBekYsRUFBNkYsR0FBN0YsRUFBaUcsR0FBakcsRUFBcUcsR0FBckcsRUFBeUcsR0FBekcsRUFBNkcsR0FBN0csRUFBaUgsR0FBakgsRUFBcUgsR0FBckgsRUFBeUgsR0FBekgsRUFBNkgsR0FBN0gsRUFBaUksR0FBakksRUFBcUksR0FBckksRUFBeUksR0FBekksRUFBNkksR0FBN0ksRUFBaUosR0FBakosRUFBcUosR0FBckosRUFBeUosR0FBekosRUFBNkosR0FBN0osRUFBaUssR0FBakssRUFBcUssR0FBckssRUFBeUssR0FBekssRUFBNkssR0FBN0ssRUFBaUwsR0FBakwsRUFBcUwsR0FBckwsRUFBeUwsR0FBekwsRUFBNkwsR0FBN0wsRUFBaU0sR0FBak0sRUFBcU0sR0FBck0sRUFBeU0sR0FBek0sRUFBNk0sR0FBN00sRUFBaU4sR0FBak4sRUFBcU4sR0FBck4sRUFBeU4sR0FBek4sRUFBNk4sR0FBN04sRUFBaU8sR0FBak8sRUFBcU8sR0FBck8sRUFBeU8sR0FBek8sRUFBNk8sR0FBN08sRUFBaVAsR0FBalAsRUFBcVAsR0FBclAsRUFBeVAsR0FBelAsRUFBNlAsR0FBN1AsRUFBaVEsR0FBalEsRUFBcVEsR0FBclEsRUFBeVEsR0FBelEsRUFBNlEsR0FBN1EsRUFBaVIsR0FBalIsRUFBcVIsR0FBclIsRUFBeVIsR0FBelIsRUFBNlIsR0FBN1IsRUFBaVMsR0FBalMsRUFBcVMsR0FBclMsRUFBeVMsR0FBelMsRUFBNlMsR0FBN1MsRUFBaVQsR0FBalQsRUFBcVQsR0FBclQsRUFBeVQsR0FBelQsRUFBNlQsR0FBN1QsRUFBaVUs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RyxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURIO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLEVBZUt6QixTQUFTLEtBQUssR0FBZCxnQkFDRztBQUNBLGVBQU8sRUFBRSxZQUFXO0FBQ2hCQyxzQkFBWSxDQUFDLEdBQUQsQ0FBWjtBQUNBRSxvQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNILFNBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESCxnQkFTRyx1SkF4QlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUE2Qkg7QUFDSjs7R0EzTnVCbkIsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYi9wcmlzb25icmVhay5iNWVkNDZmNzNjZTljNTg4MTlmNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSAge1xyXG4gICAgY29uc3QgW3NxdWFyZXMsIHNldFNxdWFyZXNdID0gdXNlU3RhdGUoQXJyYXkoMTUpLmZpbGwoQXJyYXkoMTUpLmZpbGwoJz8nKSkpXHJcbiAgICBjb25zdCBbdGlsZXMsIHNldFRpbGVzXSA9IHVzZVN0YXRlKFsnQScsJ0EnLCdBJywnQScsJ0EnLCdBJywnQScsJ0EnLCdBJywnQicsJ0InLCdDJywnQycsJ0MnLCdEJywnRCcsJ0QnLCdEJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRicsJ0YnLCdHJywnRycsJ0cnLCdIJywnSCcsJ0knLCdJJywnSScsJ0knLCdJJywnSScsJ0knLCdJJywnSScsJ0onLCdLJywnTCcsJ0wnLCdMJywnTCcsJ00nLCdNJywnTicsJ04nLCdOJywnTicsJ04nLCdOJywnTycsJ08nLCdPJywnTycsJ08nLCdPJywnTycsJ08nLCdQJywnUCcsJ1EnLCdSJywnUicsJ1InLCdSJywnUicsJ1InLCdTJywnUycsJ1MnLCdTJywnVCcsJ1QnLCdUJywnVCcsJ1QnLCdUJywnVScsJ1UnLCdVJywnVScsJ1YnLCdWJywnVycsJ1cnLCdYJywnWScsJ1knLCdaJywnPycsJz8nXSlcclxuICAgIGNvbnN0IFtzZWxlY3Rpb24sIHNldFNlbGVjdGlvbl0gPSB1c2VTdGF0ZSgtMSlcclxuICAgIGNvbnN0IFtwdGlsZXMsIHNldFB0aWxlc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtndGlsZXMsIHNldEd0aWxlc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFt3aG9zZXR1cm4sIHNldFdob3NldHVybl0gPSB1c2VTdGF0ZSgnUCcpXHJcbiAgICBjb25zdCBbcGlja2luZywgc2V0UGlja2luZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxHYW1lLz5cclxuICAgIClcclxuXHJcbiAgICBmdW5jdGlvbiBHYW1lKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3bXRpdGxlIE1hc3Rlcm1pbmRcIj5Qcmlzb24gQnJlYWs8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcmlzb25lcnMgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaWxlcyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3VhcmRzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy4uLy4uLyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwid21saW5rXCI+SG9tZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBCb2FyZCgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwicGJCb2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzcXVhcmVzLm1hcCgocixyaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YEJvYXJkUm93JHtyaX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZFJvdyByPXtyfSByaT17cml9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQm9hcmRSb3cocHJvcHMpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwicm93IHBiUm93XCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuci5tYXAoKGMsY2kpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YFNxdWFyZSR7cHJvcHMucml9LSR7Y2l9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcXVhcmUgYz17Y30gY2k9e2NpfSByaT17cHJvcHMucml9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBTcXVhcmUocHJvcHMpIHtcclxuICAgICAgICBjb25zdCB0ZGNsYXNzID0gcHJvcHMuYyAhPT0gXCI/XCIgPyBcInBiU3F1YXJlVXNlZFwiIDogcHJvcHMucmkgPT09IDcgJiYgcHJvcHMuY2kgPT09IDcgPyBcInBiU3F1YXJlQ2VudGVyU3F1YXJlXCIgOiAocHJvcHMucmkgPT09IDAgfHwgcHJvcHMucmkgPT09IDcgfHwgcHJvcHMucmkgPT09IDE0KSAmJiAocHJvcHMuY2kgPT09IDAgfHwgcHJvcHMuY2kgPT09IDcgfHwgcHJvcHMuY2kgPT09IDE0KSA/IFwicGJTcXVhcmVFc2NhcGVIYXRjaFwiIDogXCJwYlNxdWFyZVwiXHJcbiAgICAgICAgY29uc3QgdGR2YWx1ZSA9IHByb3BzLmMgIT09IFwiP1wiID8gcHJvcHMuYyA6IHRkY2xhc3MgPT09IFwicGJTcXVhcmVDZW50ZXJTcXVhcmVcIiA/IFwi4pywXCIgOiB0ZGNsYXNzID09PSBcInBiU3F1YXJlRXNjYXBlSGF0Y2hcIiA/IFwi8J+Sq1wiIDogXCLijpRcIlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPXt0ZGNsYXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0aW9uID4gLTEgJiYgcHJvcHMuYyA9PT0gXCI/XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdTcXVhcmVzID0gWy4uLnNxdWFyZXNdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Um93ID0gWy4uLm5ld1NxdWFyZXNbcHJvcHMucmldXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um93W3Byb3BzLmNpXSA9IHdob3NldHVybiA9PT0gJ1AnID8gcHRpbGVzW3NlbGVjdGlvbl0gOiBndGlsZXNbc2VsZWN0aW9uXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3F1YXJlc1twcm9wcy5yaV0gPSBbLi4ubmV3Um93XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1RpbGVzID0gd2hvc2V0dXJuID09PSAnUCcgPyBbLi4ucHRpbGVzXSA6IFsuLi5ndGlsZXNdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUaWxlcy5zcGxpY2Uoc2VsZWN0aW9uLCAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hvc2V0dXJuID09PSAnUCcgPyBzZXRQdGlsZXMobmV3VGlsZXMpIDogc2V0R3RpbGVzKG5ld1RpbGVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb3BzLmMgIT09IFwiP1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBc3N1bWluZyBzb21lIGdvb2Qgd2lsbCBmcm9tIHRoZSB1c2VycyB0byBjbGljayBhIHRpbGUgdGhleSBwbGF5ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aG9zZXR1cm4gPT09ICdQJyAmJiBwdGlsZXMubGVuZ3RoIDwgNykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzLCBwcm9wcy5jXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdTcXVhcmVzID0gWy4uLnNxdWFyZXNdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1JvdyA9IFsuLi5uZXdTcXVhcmVzW3Byb3BzLnJpXV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdSb3dbcHJvcHMuY2ldID0gXCI/XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdTcXVhcmVzW3Byb3BzLnJpXSA9IFsuLi5uZXdSb3ddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHdob3NldHVybiA9PT0gJ0cnICYmIGd0aWxlcy5sZW5ndGggPCA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0d0aWxlcyA9IFsuLi5ndGlsZXMsIHByb3BzLmNdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1NxdWFyZXMgPSBbLi4uc3F1YXJlc11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Um93ID0gWy4uLm5ld1NxdWFyZXNbcHJvcHMucmldXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Jvd1twcm9wcy5jaV0gPSBcIj9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NxdWFyZXNbcHJvcHMucmldID0gWy4uLm5ld1Jvd11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcXVhcmVzKG5ld1NxdWFyZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGR2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBUaWxlcygpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYlRpbGVwb29sXCI+XHJcbiAgICAgICAgICAgICAgICB7dGlsZXMubWFwKCh0LHRpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtgdGlsZSR7dGl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aSA+IDAgJiYgdGlsZXNbdGldICE9PSB0aWxlc1t0aS0xXSA/IDxicj48L2JyPiA6IDw+PC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFByaXNvbmVycygpIHtcclxuICAgICAgICBpZiAocGlja2luZyAmJiB3aG9zZXR1cm4gPT09ICdQJyAmJiBwdGlsZXMubGVuZ3RoIDwgNyAmJiB0aWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXVxyXG4gICAgICAgICAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdXHJcbiAgICAgICAgICAgIHdoaWxlIChuZXdQdGlsZXMubGVuZ3RoIDwgNyAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRpbGVzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIG5ld1B0aWxlcyA9IFsuLi5uZXdQdGlsZXMsIG5ld1RpbGVzW3JhbmRdXVxyXG4gICAgICAgICAgICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsMSkgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKVxyXG4gICAgICAgICAgICBzZXRUaWxlcyhuZXdUaWxlcylcclxuICAgICAgICAgICAgc2V0UGlja2luZyhmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPlBSSVNPTkVSUzwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBiVGlsZXBvb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHRpbGVzLm1hcCgodCx0aSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2BwdGlsZSR7dGl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdob3NldHVybiA9PT0gJ1AnID8gc2V0U2VsZWN0aW9uKHRpKSA6IGFsZXJ0KCdJdCBpcyBub3QgeW91ciB0dXJuJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIHt3aG9zZXR1cm4gPT09ICdQJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRXaG9zZXR1cm4oJ0cnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQaWNraW5nKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbmlzaCBUdXJuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBHdWFyZHMoKSB7XHJcbiAgICAgICAgaWYgKHBpY2tpbmcgJiYgd2hvc2V0dXJuID09PSAnRycgJiYgZ3RpbGVzLmxlbmd0aCA8IDcgJiYgdGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgbmV3R3RpbGVzID0gWy4uLmd0aWxlc11cclxuICAgICAgICAgICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXVxyXG4gICAgICAgICAgICB3aGlsZSAobmV3R3RpbGVzLmxlbmd0aCA8IDcgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aWxlcy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICBuZXdHdGlsZXMgPSBbLi4ubmV3R3RpbGVzLCBuZXdUaWxlc1tyYW5kXV1cclxuICAgICAgICAgICAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0VGlsZXMobmV3VGlsZXMpXHJcbiAgICAgICAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpXHJcbiAgICAgICAgICAgIHNldFBpY2tpbmcoZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5HVUFSRFM8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYlRpbGVwb29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2d0aWxlcy5tYXAoKHQsdGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtgZ3RpbGUke3RpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aG9zZXR1cm4gPT09ICdHJyA/IHNldFNlbGVjdGlvbih0aSkgOiBhbGVydCgnSXQgaXMgbm90IHlvdXIgdHVybicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICB7d2hvc2V0dXJuID09PSAnRycgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0V2hvc2V0dXJuKCdQJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGlja2luZyh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGaW5pc2ggVHVyblxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9