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
          lineNumber: 107,
          columnNumber: 64
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: t
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 25
        }, this)]
      }, `tile${ti}`, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
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
        lineNumber: 132,
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
            lineNumber: 136,
            columnNumber: 29
          }, this)
        }, `ptile${ti}`, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }, this), whoseturn === 'P' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function () {
          setWhoseturn('G');
          setPicking(true);
        },
        children: "Finish Turn"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 21
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 131,
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
        lineNumber: 176,
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
            lineNumber: 180,
            columnNumber: 29
          }, this)
        }, `gtile${ti}`, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 17
      }, this), whoseturn === 'G' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function () {
          setWhoseturn('P');
          setPicking(true);
        },
        children: "Finish Turn"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 21
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 175,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsuanMiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsInNxdWFyZXMiLCJzZXRTcXVhcmVzIiwidXNlU3RhdGUiLCJBcnJheSIsImZpbGwiLCJ0aWxlcyIsInNldFRpbGVzIiwic2VsZWN0aW9uIiwic2V0U2VsZWN0aW9uIiwicHRpbGVzIiwic2V0UHRpbGVzIiwiZ3RpbGVzIiwic2V0R3RpbGVzIiwid2hvc2V0dXJuIiwic2V0V2hvc2V0dXJuIiwicGlja2luZyIsInNldFBpY2tpbmciLCJHYW1lIiwiQm9hcmQiLCJtYXAiLCJyIiwicmkiLCJCb2FyZFJvdyIsInByb3BzIiwiYyIsImNpIiwiU3F1YXJlIiwidGRjbGFzcyIsInRkdmFsdWUiLCJuZXdTcXVhcmVzIiwibmV3Um93IiwibmV3VGlsZXMiLCJzcGxpY2UiLCJUaWxlcyIsInQiLCJ0aSIsIlByaXNvbmVycyIsImxlbmd0aCIsIm5ld1B0aWxlcyIsInJhbmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJhbGVydCIsIkd1YXJkcyIsIm5ld0d0aWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCQyxHQUF0QixFQUE0QjtBQUFBOztBQUN2QyxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLHNEQUFRLENBQUNDLEtBQUssQ0FBQyxFQUFELENBQUwsQ0FBVUMsSUFBVixDQUFlRCxLQUFLLENBQUMsRUFBRCxDQUFMLENBQVVDLElBQVYsQ0FBZSxHQUFmLENBQWYsQ0FBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkosc0RBQVEsQ0FBQyxDQUFDLEdBQUQsRUFBSyxHQUFMLEVBQVMsR0FBVCxFQUFhLEdBQWIsRUFBaUIsR0FBakIsRUFBcUIsR0FBckIsRUFBeUIsR0FBekIsRUFBNkIsR0FBN0IsRUFBaUMsR0FBakMsRUFBcUMsR0FBckMsRUFBeUMsR0FBekMsRUFBNkMsR0FBN0MsRUFBaUQsR0FBakQsRUFBcUQsR0FBckQsRUFBeUQsR0FBekQsRUFBNkQsR0FBN0QsRUFBaUUsR0FBakUsRUFBcUUsR0FBckUsRUFBeUUsR0FBekUsRUFBNkUsR0FBN0UsRUFBaUYsR0FBakYsRUFBcUYsR0FBckYsRUFBeUYsR0FBekYsRUFBNkYsR0FBN0YsRUFBaUcsR0FBakcsRUFBcUcsR0FBckcsRUFBeUcsR0FBekcsRUFBNkcsR0FBN0csRUFBaUgsR0FBakgsRUFBcUgsR0FBckgsRUFBeUgsR0FBekgsRUFBNkgsR0FBN0gsRUFBaUksR0FBakksRUFBcUksR0FBckksRUFBeUksR0FBekksRUFBNkksR0FBN0ksRUFBaUosR0FBakosRUFBcUosR0FBckosRUFBeUosR0FBekosRUFBNkosR0FBN0osRUFBaUssR0FBakssRUFBcUssR0FBckssRUFBeUssR0FBekssRUFBNkssR0FBN0ssRUFBaUwsR0FBakwsRUFBcUwsR0FBckwsRUFBeUwsR0FBekwsRUFBNkwsR0FBN0wsRUFBaU0sR0FBak0sRUFBcU0sR0FBck0sRUFBeU0sR0FBek0sRUFBNk0sR0FBN00sRUFBaU4sR0FBak4sRUFBcU4sR0FBck4sRUFBeU4sR0FBek4sRUFBNk4sR0FBN04sRUFBaU8sR0FBak8sRUFBcU8sR0FBck8sRUFBeU8sR0FBek8sRUFBNk8sR0FBN08sRUFBaVAsR0FBalAsRUFBcVAsR0FBclAsRUFBeVAsR0FBelAsRUFBNlAsR0FBN1AsRUFBaVEsR0FBalEsRUFBcVEsR0FBclEsRUFBeVEsR0FBelEsRUFBNlEsR0FBN1EsRUFBaVIsR0FBalIsRUFBcVIsR0FBclIsRUFBeVIsR0FBelIsRUFBNlIsR0FBN1IsRUFBaVMsR0FBalMsRUFBcVMsR0FBclMsRUFBeVMsR0FBelMsRUFBNlMsR0FBN1MsRUFBaVQsR0FBalQsRUFBcVQsR0FBclQsRUFBeVQsR0FBelQsRUFBNlQsR0FBN1QsRUFBaVUs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QUFBO0FBQUE7QUFBQSxjQUZKLEVBZUt0QixTQUFTLEtBQUssR0FBZCxnQkFDRztBQUNBLGVBQU8sRUFBRSxZQUFXO0FBQ2hCQyxzQkFBWSxDQUFDLEdBQUQsQ0FBWjtBQUNBRSxvQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNILFNBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESCxnQkFTRyx1SkF4QlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUE2Qkg7QUFDSjs7R0F4TXVCbkIsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYi9wcmlzb25icmVhay4xMjI3NTZmOTAyNjgwZTBmNzMwOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSAge1xyXG4gICAgY29uc3QgW3NxdWFyZXMsIHNldFNxdWFyZXNdID0gdXNlU3RhdGUoQXJyYXkoMTUpLmZpbGwoQXJyYXkoMTUpLmZpbGwoJz8nKSkpXHJcbiAgICBjb25zdCBbdGlsZXMsIHNldFRpbGVzXSA9IHVzZVN0YXRlKFsnQScsJ0EnLCdBJywnQScsJ0EnLCdBJywnQScsJ0EnLCdBJywnQicsJ0InLCdDJywnQycsJ0MnLCdEJywnRCcsJ0QnLCdEJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRicsJ0YnLCdHJywnRycsJ0cnLCdIJywnSCcsJ0knLCdJJywnSScsJ0knLCdJJywnSScsJ0knLCdJJywnSScsJ0onLCdLJywnTCcsJ0wnLCdMJywnTCcsJ00nLCdNJywnTicsJ04nLCdOJywnTicsJ04nLCdOJywnTycsJ08nLCdPJywnTycsJ08nLCdPJywnTycsJ08nLCdQJywnUCcsJ1EnLCdSJywnUicsJ1InLCdSJywnUicsJ1InLCdTJywnUycsJ1MnLCdTJywnVCcsJ1QnLCdUJywnVCcsJ1QnLCdUJywnVScsJ1UnLCdVJywnVScsJ1YnLCdWJywnVycsJ1cnLCdYJywnWScsJ1knLCdaJywnPycsJz8nXSlcclxuICAgIGNvbnN0IFtzZWxlY3Rpb24sIHNldFNlbGVjdGlvbl0gPSB1c2VTdGF0ZSgtMSlcclxuICAgIGNvbnN0IFtwdGlsZXMsIHNldFB0aWxlc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtndGlsZXMsIHNldEd0aWxlc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFt3aG9zZXR1cm4sIHNldFdob3NldHVybl0gPSB1c2VTdGF0ZSgnUCcpXHJcbiAgICBjb25zdCBbcGlja2luZywgc2V0UGlja2luZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxHYW1lLz5cclxuICAgIClcclxuXHJcbiAgICBmdW5jdGlvbiBHYW1lKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3bXRpdGxlIE1hc3Rlcm1pbmRcIj5Qcmlzb24gQnJlYWs8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcmlzb25lcnMgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaWxlcyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3VhcmRzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy4uLy4uLyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwid21saW5rXCI+SG9tZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBCb2FyZCgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwicGJCb2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzcXVhcmVzLm1hcCgocixyaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YEJvYXJkUm93JHtyaX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZFJvdyByPXtyfSByaT17cml9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQm9hcmRSb3cocHJvcHMpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwicm93IHBiUm93XCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuci5tYXAoKGMsY2kpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YFNxdWFyZSR7cHJvcHMucml9LSR7Y2l9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcXVhcmUgYz17Y30gY2k9e2NpfSByaT17cHJvcHMucml9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBTcXVhcmUocHJvcHMpIHtcclxuICAgICAgICBjb25zdCB0ZGNsYXNzID0gcHJvcHMuYyAhPT0gXCI/XCIgPyBcInBiU3F1YXJlVXNlZFwiIDogcHJvcHMucmkgPT09IDcgJiYgcHJvcHMuY2kgPT09IDcgPyBcInBiU3F1YXJlQ2VudGVyU3F1YXJlXCIgOiAocHJvcHMucmkgPT09IDAgfHwgcHJvcHMucmkgPT09IDcgfHwgcHJvcHMucmkgPT09IDE0KSAmJiAocHJvcHMuY2kgPT09IDAgfHwgcHJvcHMuY2kgPT09IDcgfHwgcHJvcHMuY2kgPT09IDE0KSA/IFwicGJTcXVhcmVFc2NhcGVIYXRjaFwiIDogXCJwYlNxdWFyZVwiXHJcbiAgICAgICAgY29uc3QgdGR2YWx1ZSA9IHByb3BzLmMgIT09IFwiP1wiID8gcHJvcHMuYyA6IHRkY2xhc3MgPT09IFwicGJTcXVhcmVDZW50ZXJTcXVhcmVcIiA/IFwi4pywXCIgOiB0ZGNsYXNzID09PSBcInBiU3F1YXJlRXNjYXBlSGF0Y2hcIiA/IFwi8J+Sq1wiIDogXCLijpRcIlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPXt0ZGNsYXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0aW9uID4gLTEgJiYgcHJvcHMuYyA9PT0gXCI/XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdTcXVhcmVzID0gWy4uLnNxdWFyZXNdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Um93ID0gWy4uLm5ld1NxdWFyZXNbcHJvcHMucmldXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um93W3Byb3BzLmNpXSA9IHdob3NldHVybiA9PT0gJ1AnID8gcHRpbGVzW3NlbGVjdGlvbl0gOiBndGlsZXNbc2VsZWN0aW9uXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3F1YXJlc1twcm9wcy5yaV0gPSBbLi4ubmV3Um93XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1RpbGVzID0gd2hvc2V0dXJuID09PSAnUCcgPyBbLi4ucHRpbGVzXSA6IFsuLi5ndGlsZXNdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUaWxlcy5zcGxpY2Uoc2VsZWN0aW9uLCAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hvc2V0dXJuID09PSAnUCcgPyBzZXRQdGlsZXMobmV3VGlsZXMpIDogc2V0R3RpbGVzKG5ld1RpbGVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0ZHZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFRpbGVzKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBiVGlsZXBvb2xcIj5cclxuICAgICAgICAgICAgICAgIHt0aWxlcy5tYXAoKHQsdGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2B0aWxlJHt0aX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RpID4gMCAmJiB0aWxlc1t0aV0gIT09IHRpbGVzW3RpLTFdID8gPGJyPjwvYnI+IDogPD48Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gUHJpc29uZXJzKCkge1xyXG4gICAgICAgIGlmIChwaWNraW5nICYmIHdob3NldHVybiA9PT0gJ1AnICYmIHB0aWxlcy5sZW5ndGggPCA3ICYmIHRpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IG5ld1B0aWxlcyA9IFsuLi5wdGlsZXNdXHJcbiAgICAgICAgICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc11cclxuICAgICAgICAgICAgd2hpbGUgKG5ld1B0aWxlcy5sZW5ndGggPCA3ICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGlsZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgbmV3UHRpbGVzID0gWy4uLm5ld1B0aWxlcywgbmV3VGlsZXNbcmFuZF1dXHJcbiAgICAgICAgICAgICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwxKSAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpXHJcbiAgICAgICAgICAgIHNldFRpbGVzKG5ld1RpbGVzKVxyXG4gICAgICAgICAgICBzZXRQaWNraW5nKGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+UFJJU09ORVJTPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGJUaWxlcG9vbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwdGlsZXMubWFwKCh0LHRpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YHB0aWxlJHt0aX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hvc2V0dXJuID09PSAnUCcgPyBzZXRTZWxlY3Rpb24odGkpIDogYWxlcnQoJ0l0IGlzIG5vdCB5b3VyIHR1cm4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAge3dob3NldHVybiA9PT0gJ1AnID9cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFdob3NldHVybignRycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBpY2tpbmcodHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRmluaXNoIFR1cm5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEd1YXJkcygpIHtcclxuICAgICAgICBpZiAocGlja2luZyAmJiB3aG9zZXR1cm4gPT09ICdHJyAmJiBndGlsZXMubGVuZ3RoIDwgNyAmJiB0aWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXVxyXG4gICAgICAgICAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdXHJcbiAgICAgICAgICAgIHdoaWxlIChuZXdHdGlsZXMubGVuZ3RoIDwgNyAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRpbGVzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIG5ld0d0aWxlcyA9IFsuLi5uZXdHdGlsZXMsIG5ld1RpbGVzW3JhbmRdXVxyXG4gICAgICAgICAgICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsMSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRUaWxlcyhuZXdUaWxlcylcclxuICAgICAgICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcylcclxuICAgICAgICAgICAgc2V0UGlja2luZyhmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPkdVQVJEUzwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBiVGlsZXBvb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Z3RpbGVzLm1hcCgodCx0aSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2BndGlsZSR7dGl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdob3NldHVybiA9PT0gJ0cnID8gc2V0U2VsZWN0aW9uKHRpKSA6IGFsZXJ0KCdJdCBpcyBub3QgeW91ciB0dXJuJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIHt3aG9zZXR1cm4gPT09ICdHJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRXaG9zZXR1cm4oJ1AnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQaWNraW5nKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbmlzaCBUdXJuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=