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


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\pb\\prisonbreak.js";


function handler(req, res) {
  var _s = $RefreshSig$();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Game, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);

  function Game() {
    _s();

    const {
      0: gamedata,
      1: setGamedata
    } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([// array of variables
    Array(15).fill(Array(15).fill('.')), // squares
    Array(15).fill(Array(15).fill('')), // usedby
    // tiles
    ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'D', 'D', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'F', 'F', 'G', 'G', 'G', 'H', 'H', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M', 'N', 'N', 'N', 'N', 'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'P', 'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'T', 'T', 'U', 'U', 'U', 'U', 'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z', '?', '?'], -1, // selection
    [], // ptiles
    [], // gtiles
    'P', // whoseturn
    true // picking
    ]);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      class: "container-fluid prisonbreak",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "row",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-12",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "wmtitle Mastermind",
            children: "Prison Break"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-2 pbPrisoners",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Prisoners, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-6",
          align: "center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Board, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-2 pbGuards",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Guards, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Tiles, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
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
              lineNumber: 46,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this);
  }

  _s(Game, "pZdxo0btLrboQTZio7zh4GLLlsw=");

  function Board() {
    let squares = gamedata[0];
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
      className: "pbBoard",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: squares.map((r, ri) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BoardRow, {
            r: r,
            ri: ri
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 29
          }, this)
        }, `BoardRow${ri}`, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
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
          lineNumber: 74,
          columnNumber: 25
        }, this)
      }, `Square${props.ri}-${ci}`, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, this);
  }

  function Square(props) {
    // applyChanges(squares, usedby, tiles, selection, ptiles, gtiles, whoseturn, picking)
    let squares = gamedata[0];
    let usedby = gamedata[1];
    let tiles = gamedata[2];
    let selection = gamedata[3];
    let ptiles = gamedata[4];
    let gtiles = gamedata[5];
    let whoseturn = gamedata[6];
    let picking = gamedata[7]; // there is a better way ^^^

    const usedbyrow = usedby[props.ri];
    const usedbyclass = usedbyrow[props.ci] === "P" ? "pbSquareUsedByPrisoners" : "pbSquareUsedByGuards";
    const tdclass = props.c !== "." ? usedbyclass : props.ri === 7 && props.ci === 7 ? "pbSquareCenterSquare" : (props.ri === 0 || props.ri === 7 || props.ri === 14) && (props.ci === 0 || props.ci === 7 || props.ci === 14) ? "pbSquareEscapeHatch" : "pbSquare";
    const tdvalue = props.c !== "." ? props.c : tdclass === "pbSquareCenterSquare" ? "✰" : tdclass === "pbSquareEscapeHatch" ? "💫" : "⎔";
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: tdclass,
          onClick: function () {
            if (selection > -1 && props.c === ".") {
              // tile is selected from rack and clicked square is not used yet
              let newRow = [...squares[props.ri]];
              newRow[props.ci] = whoseturn === 'P' ? ptiles[selection] : gtiles[selection];
              squares[props.ri] = [...newRow];
              whoseturn === 'P' ? ptiles.splice(selection, 1) : gtiles.splice(selection, 1);
              let newUsedbyRow = [...usedby[props.ri]];
              newUsedbyRow[props.ci] = whoseturn;
              usedby[props.ri] = [...newUsedbyRow];
              selection = -1;
              applyChanges(squares, usedby, tiles, selection, ptiles, gtiles, whoseturn, picking);
            } else if (props.c !== ".") {
              // clicked square has a tile on it, treat as unplaying the tile
              // Assuming some good will from the users to click a tile they played
              if (whoseturn === 'P' && ptiles.length < 7 || whoseturn === 'G' && gtiles.length < 7) {
                whoseturn === 'P' ? ptiles.push(props.c) : gtiles.push(props.c);
                let newRow = [...squares[props.ri]];
                newRow[props.ci] = ".";
                squares[props.ri] = [...newRow];
                let newUsedbyRow = [...usedby[props.ri]];
                newUsedbyRow[props.ci] = "";
                usedby[props.ri] = [...newUsedbyRow];
                selection = -1;
                applyChanges(squares, usedby, tiles, selection, ptiles, gtiles, whoseturn, picking);
              }
            }
          },
          children: tdvalue
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }, this);
  }

  function Tiles() {
    let tiles = gamedata[2]; // there is a better way ^^^

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pbTilepool",
      children: tiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: [ti > 0 && tiles[ti] !== tiles[ti - 1] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "pbTilepoolDivider"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 64
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "pbTilepoolTile",
          children: t
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 25
        }, this)]
      }, `tile${ti}`, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }, this);
  }

  function Prisoners() {
    // applyChanges(squares, usedby, tiles, selection, ptiles, gtiles, whoseturn, picking)
    let squares = gamedata[0];
    let usedby = gamedata[1];
    let tiles = gamedata[2];
    let selection = gamedata[3];
    let ptiles = gamedata[4];
    let gtiles = gamedata[5];
    let whoseturn = gamedata[6];
    let picking = gamedata[7]; // there is a better way ^^^

    if (picking && whoseturn === 'P' && ptiles.length < 7 && tiles.length > 0) {
      while (ptiles.length < 7 && tiles.length > 0) {
        let rand = Math.floor(Math.random() * tiles.length);
        ptiles.push(tiles[rand]);
        tiles.splice(rand, 1);
      }

      picking = false;
      applyChanges(squares, usedby, tiles, selection, ptiles, gtiles, whoseturn, picking);
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "PRISONERS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "pbTilerack",
        children: ptiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "pbTileOnRackP",
            onClick: function () {
              if (whoseturn === 'P') {
                selection = ti;
                applyChanges(squares, usedby, tiles, selection, ptiles, gtiles, whoseturn, picking);
              } else {
                alert('It is not your turn');
              }
            },
            children: t
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 29
          }, this)
        }, `ptile${ti}`, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 17
      }, this), whoseturn === 'P' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function () {
          whoseturn = 'G';
          picking = true;
          selection = -1;
          applyChanges(squares, usedby, tiles, selection, ptiles, gtiles, whoseturn, picking);
        },
        children: "Finish Turn"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 21
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }, this);
  }

  function Guards() {
    // applyChanges(squares, usedby, tiles, selection, ptiles, gtiles, whoseturn, picking)
    let squares = gamedata[0];
    let usedby = gamedata[1];
    let tiles = gamedata[2];
    let selection = gamedata[3];
    let ptiles = gamedata[4];
    let gtiles = gamedata[5];
    let whoseturn = gamedata[6];
    let picking = gamedata[7]; // there is a better way ^^^

    if (picking && whoseturn === 'G' && gtiles.length < 7 && tiles.length > 0) {
      while (gtiles.length < 7 && tiles.length > 0) {
        let rand = Math.floor(Math.random() * tiles.length);
        gtiles.push(tiles[rand]);
        tiles.splice(rand, 1);
      }

      picking = false;
      applyChanges(squares, usedby, tiles, selection, ptiles, gtiles, whoseturn, picking);
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "GUARDS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "pbTilerack",
        children: gtiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "pbTileOnRackG",
            onClick: function () {
              if (whoseturn === 'G') {
                selection = ti;
                applyChanges(squares, usedby, tiles, selection, ptiles, gtiles, whoseturn, picking);
              } else {
                alert('It is not your turn');
              }
            },
            children: t
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 234,
            columnNumber: 29
          }, this)
        }, `gtile${ti}`, false, {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 17
      }, this), whoseturn === 'G' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function () {
          whoseturn = 'P';
          picking = true;
          selection = -1;
          applyChanges(squares, usedby, tiles, selection, ptiles, gtiles, whoseturn, picking);
        },
        children: "Finish Turn"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 21
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 13
    }, this);
  }

  function applyChanges(squares, usedby, tiles, selection, ptiles, gtiles, whoseturn, picking) {
    setGamedata([squares, usedby, tiles, selection, ptiles, gtiles, whoseturn, picking]);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsuanMiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsIkdhbWUiLCJnYW1lZGF0YSIsInNldEdhbWVkYXRhIiwidXNlU3RhdGUiLCJBcnJheSIsImZpbGwiLCJCb2FyZCIsInNxdWFyZXMiLCJtYXAiLCJyIiwicmkiLCJCb2FyZFJvdyIsInByb3BzIiwiYyIsImNpIiwiU3F1YXJlIiwidXNlZGJ5IiwidGlsZXMiLCJzZWxlY3Rpb24iLCJwdGlsZXMiLCJndGlsZXMiLCJ3aG9zZXR1cm4iLCJwaWNraW5nIiwidXNlZGJ5cm93IiwidXNlZGJ5Y2xhc3MiLCJ0ZGNsYXNzIiwidGR2YWx1ZSIsIm5ld1JvdyIsInNwbGljZSIsIm5ld1VzZWRieVJvdyIsImFwcGx5Q2hhbmdlcyIsImxlbmd0aCIsInB1c2giLCJUaWxlcyIsInQiLCJ0aSIsIlByaXNvbmVycyIsInJhbmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJhbGVydCIsIkd1YXJkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCQyxHQUF0QixFQUE0QjtBQUFBOztBQUN2QyxzQkFDSSxxRUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjs7QUFJQSxXQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQ1osVUFBTTtBQUFBLFNBQUNDLFFBQUQ7QUFBQSxTQUFXQztBQUFYLFFBQTBCQyxzREFBUSxDQUFDLENBQUU7QUFDdkNDLFNBQUssQ0FBQyxFQUFELENBQUwsQ0FBVUMsSUFBVixDQUFlRCxLQUFLLENBQUMsRUFBRCxDQUFMLENBQVVDLElBQVYsQ0FBZSxHQUFmLENBQWYsQ0FEcUMsRUFDQTtBQUNyQ0QsU0FBSyxDQUFDLEVBQUQsQ0FBTCxDQUFVQyxJQUFWLENBQWVELEtBQUssQ0FBQyxFQUFELENBQUwsQ0FBVUMsSUFBVixDQUFlLEVBQWYsQ0FBZixDQUZxQyxFQUVBO0FBQ3JDO0FBQ0EsS0FBQyxHQUFELEVBQUssR0FBTCxFQUFTLEdBQVQsRUFBYSxHQUFiLEVBQWlCLEdBQWpCLEVBQXFCLEdBQXJCLEVBQXlCLEdBQXpCLEVBQTZCLEdBQTdCLEVBQWlDLEdBQWpDLEVBQXFDLEdBQXJDLEVBQXlDLEdBQXpDLEVBQTZDLEdBQTdDLEVBQWlELEdBQWpELEVBQXFELEdBQXJELEVBQXlELEdBQXpELEVBQTZELEdBQTdELEVBQWlFLEdBQWpFLEVBQXFFLEdBQXJFLEVBQXlFLEdBQXpFLEVBQTZFLEdBQTdFLEVBQWlGLEdBQWpGLEVBQXFGLEdBQXJGLEVBQXlGLEdBQXpGLEVBQTZGLEdBQTdGLEVBQWlHLEdBQWpHLEVBQXFHLEdBQXJHLEVBQXlHLEdBQXpHLEVBQTZHLEdBQTdHLEVBQWlILEdBQWpILEVBQXFILEdBQXJILEVBQXlILEdBQXpILEVBQTZILEdBQTdILEVBQWlJLEdBQWpJLEVBQXFJLEdBQXJJLEVBQXlJLEdBQXpJLEVBQTZJLEdBQTdJLEVBQWlKLEdBQWpKLEVBQXFKLEdBQXJKLEVBQXlKLEdBQXpKLEVBQTZKLEdBQTdKLEVBQWlLLEdBQWpLLEVBQXFLLEdBQXJLLEVBQXlLLEdBQXpLLEVBQTZLLEdBQTdLLEVBQWlMLEdBQWpMLEVBQXFMLEdBQXJMLEVBQXlMLEdBQXpMLEVBQTZMLEdBQTdMLEVBQWlNLEdBQWpNLEVBQXFNLEdBQXJNLEVBQXlNLEdBQXpNLEVBQTZNLEdBQTdNLEVBQWlOLEdBQWpOLEVBQXFOLEdBQXJOLEVBQXlOLEdBQXpOLEVBQTZOLEdBQTdOLEVBQWlPLEdBQWpPLEVBQXFPLEdBQXJPLEVBQXlPLEdBQXpPLEVBQTZPLEdBQTdPLEVBQWlQLEdBQWpQLEVBQXFQLEdBQXJQLEVBQXlQLEdBQXpQLEVBQTZQLEdBQTdQLEVBQWlRLEdBQWpRLEVBQXFRLEdBQXJRLEVBQXlRLEdBQXpRLEVBQTZRLEdBQTdRLEVBQWlSLEdBQWpSLEVBQXFSLEdBQXJSLEVBQXlSLEdBQXpSLEVBQTZSLEdBQTdSLEVBQWlTLEdB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O0FBQ0FKLG1CQUFTLEdBQUcsQ0FBQyxDQUFiO0FBQ0FZLHNCQUFZLENBQUN2QixPQUFELEVBQVVTLE1BQVYsRUFBa0JDLEtBQWxCLEVBQXlCQyxTQUF6QixFQUFvQ0MsTUFBcEMsRUFBNENDLE1BQTVDLEVBQW9EQyxTQUFwRCxFQUErREMsT0FBL0QsQ0FBWjtBQUNILFNBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESCxnQkFXRyx1SkFoQ1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFxQ0g7O0FBRUQsV0FBU1EsWUFBVCxDQUFzQnZCLE9BQXRCLEVBQStCUyxNQUEvQixFQUF1Q0MsS0FBdkMsRUFBOENDLFNBQTlDLEVBQXlEQyxNQUF6RCxFQUFpRUMsTUFBakUsRUFBeUVDLFNBQXpFLEVBQW9GQyxPQUFwRixFQUE2RjtBQUN6RnBCLGVBQVcsQ0FBQyxDQUFDSyxPQUFELEVBQVVTLE1BQVYsRUFBa0JDLEtBQWxCLEVBQXlCQyxTQUF6QixFQUFvQ0MsTUFBcEMsRUFBNENDLE1BQTVDLEVBQW9EQyxTQUFwRCxFQUErREMsT0FBL0QsQ0FBRCxDQUFYO0FBQ0g7QUFDSiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYi9wcmlzb25icmVhay40MjQ1YjNhZTQ0ZjcwMjc4NzlmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSAge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxHYW1lLz5cclxuICAgIClcclxuXHJcbiAgICBmdW5jdGlvbiBHYW1lKCkge1xyXG4gICAgICAgIGNvbnN0IFtnYW1lZGF0YSwgc2V0R2FtZWRhdGFdID0gdXNlU3RhdGUoWyAvLyBhcnJheSBvZiB2YXJpYWJsZXNcclxuICAgICAgICAgICAgQXJyYXkoMTUpLmZpbGwoQXJyYXkoMTUpLmZpbGwoJy4nKSksIC8vIHNxdWFyZXNcclxuICAgICAgICAgICAgQXJyYXkoMTUpLmZpbGwoQXJyYXkoMTUpLmZpbGwoJycpKSwgIC8vIHVzZWRieVxyXG4gICAgICAgICAgICAvLyB0aWxlc1xyXG4gICAgICAgICAgICBbJ0EnLCdBJywnQScsJ0EnLCdBJywnQScsJ0EnLCdBJywnQScsJ0InLCdCJywnQycsJ0MnLCdEJywnRCcsJ0QnLCdEJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRicsJ0YnLCdHJywnRycsJ0cnLCdIJywnSCcsJ0knLCdJJywnSScsJ0knLCdJJywnSScsJ0knLCdJJywnSScsJ0onLCdLJywnTCcsJ0wnLCdMJywnTCcsJ00nLCdNJywnTicsJ04nLCdOJywnTicsJ04nLCdOJywnTycsJ08nLCdPJywnTycsJ08nLCdPJywnTycsJ08nLCdQJywnUCcsJ1EnLCdSJywnUicsJ1InLCdSJywnUicsJ1InLCdTJywnUycsJ1MnLCdTJywnVCcsJ1QnLCdUJywnVCcsJ1QnLCdUJywnVScsJ1UnLCdVJywnVScsJ1YnLCdWJywnVycsJ1cnLCdYJywnWScsJ1knLCdaJywnPycsJz8nXSxcclxuICAgICAgICAgICAgLTEsIC8vIHNlbGVjdGlvblxyXG4gICAgICAgICAgICBbXSwgLy8gcHRpbGVzXHJcbiAgICAgICAgICAgIFtdLCAvLyBndGlsZXNcclxuICAgICAgICAgICAgJ1AnLCAvLyB3aG9zZXR1cm5cclxuICAgICAgICAgICAgdHJ1ZSAvLyBwaWNraW5nXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBwcmlzb25icmVha1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndtdGl0bGUgTWFzdGVybWluZFwiPlByaXNvbiBCcmVhazwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTIgcGJQcmlzb25lcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByaXNvbmVycyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMiBwYkd1YXJkc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3VhcmRzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaWxlcyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycuLi8uLi8nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIndtbGlua1wiPkhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQm9hcmQoKSB7XHJcbiAgICAgICAgbGV0IHNxdWFyZXMgPSBnYW1lZGF0YVswXVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJwYkJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge3NxdWFyZXMubWFwKChyLHJpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgQm9hcmRSb3cke3JpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkUm93IHI9e3J9IHJpPXtyaX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBCb2FyZFJvdyhwcm9wcykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJyb3cgcGJSb3dcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5yLm1hcCgoYyxjaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgU3F1YXJlJHtwcm9wcy5yaX0tJHtjaX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNxdWFyZSBjPXtjfSBjaT17Y2l9IHJpPXtwcm9wcy5yaX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFNxdWFyZShwcm9wcykge1xyXG4gICAgICAgIC8vIGFwcGx5Q2hhbmdlcyhzcXVhcmVzLCB1c2VkYnksIHRpbGVzLCBzZWxlY3Rpb24sIHB0aWxlcywgZ3RpbGVzLCB3aG9zZXR1cm4sIHBpY2tpbmcpXHJcbiAgICAgICAgbGV0IHNxdWFyZXMgPSBnYW1lZGF0YVswXVxyXG4gICAgICAgIGxldCB1c2VkYnkgPSBnYW1lZGF0YVsxXVxyXG4gICAgICAgIGxldCB0aWxlcyA9IGdhbWVkYXRhWzJdXHJcbiAgICAgICAgbGV0IHNlbGVjdGlvbiA9IGdhbWVkYXRhWzNdXHJcbiAgICAgICAgbGV0IHB0aWxlcyA9IGdhbWVkYXRhWzRdXHJcbiAgICAgICAgbGV0IGd0aWxlcyA9IGdhbWVkYXRhWzVdXHJcbiAgICAgICAgbGV0IHdob3NldHVybiA9IGdhbWVkYXRhWzZdXHJcbiAgICAgICAgbGV0IHBpY2tpbmcgPSBnYW1lZGF0YVs3XVxyXG4gICAgICAgIC8vIHRoZXJlIGlzIGEgYmV0dGVyIHdheSBeXl5cclxuICAgICAgICBjb25zdCB1c2VkYnlyb3cgPSB1c2VkYnlbcHJvcHMucmldXHJcbiAgICAgICAgY29uc3QgdXNlZGJ5Y2xhc3MgPSB1c2VkYnlyb3dbcHJvcHMuY2ldID09PSBcIlBcIiA/IFwicGJTcXVhcmVVc2VkQnlQcmlzb25lcnNcIiA6IFwicGJTcXVhcmVVc2VkQnlHdWFyZHNcIlxyXG4gICAgICAgIGNvbnN0IHRkY2xhc3MgPSBwcm9wcy5jICE9PSBcIi5cIiA/IHVzZWRieWNsYXNzIDogcHJvcHMucmkgPT09IDcgJiYgcHJvcHMuY2kgPT09IDcgPyBcInBiU3F1YXJlQ2VudGVyU3F1YXJlXCIgOiAocHJvcHMucmkgPT09IDAgfHwgcHJvcHMucmkgPT09IDcgfHwgcHJvcHMucmkgPT09IDE0KSAmJiAocHJvcHMuY2kgPT09IDAgfHwgcHJvcHMuY2kgPT09IDcgfHwgcHJvcHMuY2kgPT09IDE0KSA/IFwicGJTcXVhcmVFc2NhcGVIYXRjaFwiIDogXCJwYlNxdWFyZVwiXHJcbiAgICAgICAgY29uc3QgdGR2YWx1ZSA9IHByb3BzLmMgIT09IFwiLlwiID8gcHJvcHMuYyA6IHRkY2xhc3MgPT09IFwicGJTcXVhcmVDZW50ZXJTcXVhcmVcIiA/IFwi4pywXCIgOiB0ZGNsYXNzID09PSBcInBiU3F1YXJlRXNjYXBlSGF0Y2hcIiA/IFwi8J+Sq1wiIDogXCLijpRcIlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPXt0ZGNsYXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0aW9uID4gLTEgJiYgcHJvcHMuYyA9PT0gXCIuXCIpIHsgLy8gdGlsZSBpcyBzZWxlY3RlZCBmcm9tIHJhY2sgYW5kIGNsaWNrZWQgc3F1YXJlIGlzIG5vdCB1c2VkIHlldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1JvdyA9IFsuLi5zcXVhcmVzW3Byb3BzLnJpXV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Jvd1twcm9wcy5jaV0gPSB3aG9zZXR1cm4gPT09ICdQJyA/IHB0aWxlc1tzZWxlY3Rpb25dIDogZ3RpbGVzW3NlbGVjdGlvbl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZXNbcHJvcHMucmldID0gWy4uLm5ld1Jvd11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdob3NldHVybiA9PT0gJ1AnID8gcHRpbGVzLnNwbGljZShzZWxlY3Rpb24sIDEpIDogZ3RpbGVzLnNwbGljZShzZWxlY3Rpb24sMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdVc2VkYnlSb3cgPSBbLi4udXNlZGJ5W3Byb3BzLnJpXV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1VzZWRieVJvd1twcm9wcy5jaV0gPSB3aG9zZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZWRieVtwcm9wcy5yaV0gPSBbLi4ubmV3VXNlZGJ5Um93XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uID0gLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGx5Q2hhbmdlcyhzcXVhcmVzLCB1c2VkYnksIHRpbGVzLCBzZWxlY3Rpb24sIHB0aWxlcywgZ3RpbGVzLCB3aG9zZXR1cm4sIHBpY2tpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcHMuYyAhPT0gXCIuXCIpIHsgLy8gY2xpY2tlZCBzcXVhcmUgaGFzIGEgdGlsZSBvbiBpdCwgdHJlYXQgYXMgdW5wbGF5aW5nIHRoZSB0aWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBc3N1bWluZyBzb21lIGdvb2Qgd2lsbCBmcm9tIHRoZSB1c2VycyB0byBjbGljayBhIHRpbGUgdGhleSBwbGF5ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgod2hvc2V0dXJuID09PSAnUCcgJiYgcHRpbGVzLmxlbmd0aCA8IDcpIHx8ICh3aG9zZXR1cm4gPT09ICdHJyAmJiBndGlsZXMubGVuZ3RoIDwgNykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aG9zZXR1cm4gPT09ICdQJyA/IHB0aWxlcy5wdXNoKHByb3BzLmMpIDogZ3RpbGVzLnB1c2gocHJvcHMuYylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Um93ID0gWy4uLnNxdWFyZXNbcHJvcHMucmldXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Jvd1twcm9wcy5jaV0gPSBcIi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZXNbcHJvcHMucmldID0gWy4uLm5ld1Jvd11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VXNlZGJ5Um93ID0gWy4uLnVzZWRieVtwcm9wcy5yaV1dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VXNlZGJ5Um93W3Byb3BzLmNpXSA9IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VkYnlbcHJvcHMucmldID0gWy4uLm5ld1VzZWRieVJvd11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24gPSAtMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGx5Q2hhbmdlcyhzcXVhcmVzLCB1c2VkYnksIHRpbGVzLCBzZWxlY3Rpb24sIHB0aWxlcywgZ3RpbGVzLCB3aG9zZXR1cm4sIHBpY2tpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RkdmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gVGlsZXMoKSB7XHJcbiAgICAgICAgbGV0IHRpbGVzID0gZ2FtZWRhdGFbMl1cclxuICAgICAgICAvLyB0aGVyZSBpcyBhIGJldHRlciB3YXkgXl5eXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVwb29sXCI+XHJcbiAgICAgICAgICAgICAgICB7dGlsZXMubWFwKCh0LHRpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtgdGlsZSR7dGl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aSA+IDAgJiYgdGlsZXNbdGldICE9PSB0aWxlc1t0aS0xXSA/IDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcG9vbERpdmlkZXJcIj48L2Rpdj4gOiA8PjwvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJUaWxlcG9vbFRpbGVcIj57dH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBQcmlzb25lcnMoKSB7XHJcbiAgICAgICAgLy8gYXBwbHlDaGFuZ2VzKHNxdWFyZXMsIHVzZWRieSwgdGlsZXMsIHNlbGVjdGlvbiwgcHRpbGVzLCBndGlsZXMsIHdob3NldHVybiwgcGlja2luZylcclxuICAgICAgICBsZXQgc3F1YXJlcyA9IGdhbWVkYXRhWzBdXHJcbiAgICAgICAgbGV0IHVzZWRieSA9IGdhbWVkYXRhWzFdXHJcbiAgICAgICAgbGV0IHRpbGVzID0gZ2FtZWRhdGFbMl1cclxuICAgICAgICBsZXQgc2VsZWN0aW9uID0gZ2FtZWRhdGFbM11cclxuICAgICAgICBsZXQgcHRpbGVzID0gZ2FtZWRhdGFbNF1cclxuICAgICAgICBsZXQgZ3RpbGVzID0gZ2FtZWRhdGFbNV1cclxuICAgICAgICBsZXQgd2hvc2V0dXJuID0gZ2FtZWRhdGFbNl1cclxuICAgICAgICBsZXQgcGlja2luZyA9IGdhbWVkYXRhWzddXHJcbiAgICAgICAgLy8gdGhlcmUgaXMgYSBiZXR0ZXIgd2F5IF5eXlxyXG4gICAgICAgIGlmIChwaWNraW5nICYmIHdob3NldHVybiA9PT0gJ1AnICYmIHB0aWxlcy5sZW5ndGggPCA3ICYmIHRpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgd2hpbGUgKHB0aWxlcy5sZW5ndGggPCA3ICYmIHRpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGlsZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgcHRpbGVzLnB1c2godGlsZXNbcmFuZF0pXHJcbiAgICAgICAgICAgICAgICB0aWxlcy5zcGxpY2UocmFuZCwxKSAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBpY2tpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICBhcHBseUNoYW5nZXMoc3F1YXJlcywgdXNlZGJ5LCB0aWxlcywgc2VsZWN0aW9uLCBwdGlsZXMsIGd0aWxlcywgd2hvc2V0dXJuLCBwaWNraW5nKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+UFJJU09ORVJTPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwdGlsZXMubWFwKCh0LHRpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YHB0aWxlJHt0aX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJUaWxlT25SYWNrUFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aG9zZXR1cm4gPT09ICdQJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uID0gdGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGx5Q2hhbmdlcyhzcXVhcmVzLCB1c2VkYnksIHRpbGVzLCBzZWxlY3Rpb24sIHB0aWxlcywgZ3RpbGVzLCB3aG9zZXR1cm4sIHBpY2tpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnSXQgaXMgbm90IHlvdXIgdHVybicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIHt3aG9zZXR1cm4gPT09ICdQJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aG9zZXR1cm4gPSAnRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGlja2luZyA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uID0gLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwbHlDaGFuZ2VzKHNxdWFyZXMsIHVzZWRieSwgdGlsZXMsIHNlbGVjdGlvbiwgcHRpbGVzLCBndGlsZXMsIHdob3NldHVybiwgcGlja2luZylcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRmluaXNoIFR1cm5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEd1YXJkcygpIHtcclxuICAgICAgICAvLyBhcHBseUNoYW5nZXMoc3F1YXJlcywgdXNlZGJ5LCB0aWxlcywgc2VsZWN0aW9uLCBwdGlsZXMsIGd0aWxlcywgd2hvc2V0dXJuLCBwaWNraW5nKVxyXG4gICAgICAgIGxldCBzcXVhcmVzID0gZ2FtZWRhdGFbMF1cclxuICAgICAgICBsZXQgdXNlZGJ5ID0gZ2FtZWRhdGFbMV1cclxuICAgICAgICBsZXQgdGlsZXMgPSBnYW1lZGF0YVsyXVxyXG4gICAgICAgIGxldCBzZWxlY3Rpb24gPSBnYW1lZGF0YVszXVxyXG4gICAgICAgIGxldCBwdGlsZXMgPSBnYW1lZGF0YVs0XVxyXG4gICAgICAgIGxldCBndGlsZXMgPSBnYW1lZGF0YVs1XVxyXG4gICAgICAgIGxldCB3aG9zZXR1cm4gPSBnYW1lZGF0YVs2XVxyXG4gICAgICAgIGxldCBwaWNraW5nID0gZ2FtZWRhdGFbN11cclxuICAgICAgICAvLyB0aGVyZSBpcyBhIGJldHRlciB3YXkgXl5eXHJcbiAgICAgICAgaWYgKHBpY2tpbmcgJiYgd2hvc2V0dXJuID09PSAnRycgJiYgZ3RpbGVzLmxlbmd0aCA8IDcgJiYgdGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB3aGlsZSAoZ3RpbGVzLmxlbmd0aCA8IDcgJiYgdGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aWxlcy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICBndGlsZXMucHVzaCh0aWxlc1tyYW5kXSlcclxuICAgICAgICAgICAgICAgIHRpbGVzLnNwbGljZShyYW5kLDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGlja2luZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIGFwcGx5Q2hhbmdlcyhzcXVhcmVzLCB1c2VkYnksIHRpbGVzLCBzZWxlY3Rpb24sIHB0aWxlcywgZ3RpbGVzLCB3aG9zZXR1cm4sIHBpY2tpbmcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5HVUFSRFM8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYlRpbGVyYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2d0aWxlcy5tYXAoKHQsdGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtgZ3RpbGUke3RpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYlRpbGVPblJhY2tHXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdob3NldHVybiA9PT0gJ0cnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24gPSB0aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwbHlDaGFuZ2VzKHNxdWFyZXMsIHVzZWRieSwgdGlsZXMsIHNlbGVjdGlvbiwgcHRpbGVzLCBndGlsZXMsIHdob3NldHVybiwgcGlja2luZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdJdCBpcyBub3QgeW91ciB0dXJuJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAge3dob3NldHVybiA9PT0gJ0cnID9cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdob3NldHVybiA9ICdQJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWNraW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24gPSAtMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBseUNoYW5nZXMoc3F1YXJlcywgdXNlZGJ5LCB0aWxlcywgc2VsZWN0aW9uLCBwdGlsZXMsIGd0aWxlcywgd2hvc2V0dXJuLCBwaWNraW5nKVxyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGaW5pc2ggVHVyblxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFwcGx5Q2hhbmdlcyhzcXVhcmVzLCB1c2VkYnksIHRpbGVzLCBzZWxlY3Rpb24sIHB0aWxlcywgZ3RpbGVzLCB3aG9zZXR1cm4sIHBpY2tpbmcpIHtcclxuICAgICAgICBzZXRHYW1lZGF0YShbc3F1YXJlcywgdXNlZGJ5LCB0aWxlcywgc2VsZWN0aW9uLCBwdGlsZXMsIGd0aWxlcywgd2hvc2V0dXJuLCBwaWNraW5nXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=