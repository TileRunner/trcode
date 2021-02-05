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

  function applyChanges(squares, usedby, tiles, selection, ptiles, gtiles, whoseturn, picking) {
    setGamedata([squares, usedby, tiles, selection, ptiles, gtiles, whoseturn, picking]);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Game, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, this);

  function Game() {
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
            lineNumber: 29,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-2 pbPrisoners",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Prisoners, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-6",
          align: "center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Board, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-2 pbGuards",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Guards, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Tiles, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
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
              lineNumber: 49,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this);
  }

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
            lineNumber: 64,
            columnNumber: 29
          }, this)
        }, `BoardRow${ri}`, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
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
          lineNumber: 77,
          columnNumber: 25
        }, this)
      }, `Square${props.ri}-${ci}`, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
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
          lineNumber: 102,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
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
          lineNumber: 144,
          columnNumber: 64
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "pbTilepoolTile",
          children: t
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 25
        }, this)]
      }, `tile${ti}`, true, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 141,
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
        lineNumber: 174,
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
            lineNumber: 178,
            columnNumber: 29
          }, this)
        }, `ptile${ti}`, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
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
        lineNumber: 195,
        columnNumber: 21
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 173,
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
        lineNumber: 233,
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
            lineNumber: 237,
            columnNumber: 29
          }, this)
        }, `gtile${ti}`, false, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 234,
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
        lineNumber: 254,
        columnNumber: 21
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 13
    }, this);
  }
}

_s(handler, "9Hw/iqKHM6Qvsijwg0skNGaQW/s=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsuanMiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsImdhbWVkYXRhIiwic2V0R2FtZWRhdGEiLCJ1c2VTdGF0ZSIsIkFycmF5IiwiZmlsbCIsImFwcGx5Q2hhbmdlcyIsInNxdWFyZXMiLCJ1c2VkYnkiLCJ0aWxlcyIsInNlbGVjdGlvbiIsInB0aWxlcyIsImd0aWxlcyIsIndob3NldHVybiIsInBpY2tpbmciLCJHYW1lIiwiQm9hcmQiLCJtYXAiLCJyIiwicmkiLCJCb2FyZFJvdyIsInByb3BzIiwiYyIsImNpIiwiU3F1YXJlIiwidXNlZGJ5cm93IiwidXNlZGJ5Y2xhc3MiLCJ0ZGNsYXNzIiwidGR2YWx1ZSIsIm5ld1JvdyIsInNwbGljZSIsIm5ld1VzZWRieVJvdyIsImxlbmd0aCIsInB1c2giLCJUaWxlcyIsInQiLCJ0aSIsIlByaXNvbmVycyIsInJhbmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJhbGVydCIsIkd1YXJkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCQyxHQUF0QixFQUE0QjtBQUFBOztBQUN2QyxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLHNEQUFRLENBQUMsQ0FBRTtBQUN2Q0MsT0FBSyxDQUFDLEVBQUQsQ0FBTCxDQUFVQyxJQUFWLENBQWVELEtBQUssQ0FBQyxFQUFELENBQUwsQ0FBVUMsSUFBVixDQUFlLEdBQWYsQ0FBZixDQURxQyxFQUNBO0FBQ3JDRCxPQUFLLENBQUMsRUFBRCxDQUFMLENBQVVDLElBQVYsQ0FBZUQsS0FBSyxDQUFDLEVBQUQsQ0FBTCxDQUFVQyxJQUFWLENBQWUsRUFBZixDQUFmLENBRnFDLEVBRUE7QUFDckM7QUFDQSxHQUFDLEdBQUQsRUFBSyxHQUFMLEVBQVMsR0FBVCxFQUFhLEdBQWIsRUFBaUIsR0FBakIsRUFBcUIsR0FBckIsRUFBeUIsR0FBekIsRUFBNkIsR0FBN0IsRUFBaUMsR0FBakMsRUFBcUMsR0FBckMsRUFBeUMsR0FBekMsRUFBNkMsR0FBN0MsRUFBaUQsR0FBakQsRUFBcUQsR0FBckQsRUFBeUQsR0FBekQsRUFBNkQsR0FBN0QsRUFBaUUsR0FBakUsRUFBcUUsR0FBckUsRUFBeUUsR0FBekUsRUFBNkUsR0FBN0UsRUFBaUYsR0FBakYsRUFBcUYsR0FBckYsRUFBeUYsR0FBekYsRUFBNkYsR0FBN0YsRUFBaUcsR0FBakcsRUFBcUcsR0FBckcsRUFBeUcsR0FBekcsRUFBNkcsR0FBN0csRUFBaUgsR0FBakgsRUFBcUgsR0FBckgsRUFBeUgsR0FBekgsRUFBNkgsR0FBN0gsRUFBaUksR0FBakksRUFBcUksR0FBckksRUFBeUksR0FBekksRUFBNkksR0FBN0ksRUFBaUosR0FBakosRUFBcUosR0FBckosRUFBeUosR0FBekosRUFBNkosR0FBN0osRUFBaUssR0FBakssRUFBcUssR0FBckssRUFBeUssR0FBekssRUFBNkssR0FBN0ssRUFBaUwsR0FBakwsRUFBcUwsR0FBckwsRUFBeUwsR0FBekwsRUFBNkwsR0FBN0wsRUFBaU0sR0FBak0sRUFBcU0sR0FBck0sRUFBeU0sR0FBek0sRUFBNk0sR0FBN00sRUFBaU4sR0FBak4sRUFBcU4sR0FBck4sRUFBeU4sR0FBek4sRUFBNk4sR0FBN04sRUFBaU8sR0FBak8sRUFBcU8sR0FBck8sRUFBeU8sR0FBek8sRUFBNk8sR0FBN08sRUFBaVAsR0FBalAsRUFBcVAsR0FBclAsRUFBeVAsR0FBelAsRUFBNlAsR0FBN1AsRUFBaVEsR0FBalEsRUFBcVEsR0FBclEsRUFBeVEsR0FBelEsRUFBNlEsR0FBN1EsRUFBaVIsR0FBalIsRUFBcVIsR0FBclIsRUFBeVIsR0FBelIsRUFBNlIsR0FBN1IsRUFBaVMsR0FBalMsRUFBcVMsR0FBclMsRUFBeVMsR0FBelMsRUFBNlMsR0FBN1MsRUFBaVQsR0FBalQsRUFBcVQsR0FBclQsRUFBeVQsR0FB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Q0g7QUFDSixhQVRMO0FBQUEsc0JBV0tQO0FBWEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFdBQVksUUFBT0MsRUFBRyxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURIO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLEVBcUJLdkIsU0FBUyxLQUFLLEdBQWQsZ0JBQ0c7QUFDQSxlQUFPLEVBQUUsWUFBVztBQUNoQkEsbUJBQVMsR0FBRyxHQUFaO0FBQ0FDLGlCQUFPLEdBQUcsSUFBVjtBQUNBSixtQkFBUyxHQUFHLENBQUMsQ0FBYjtBQUNBSixzQkFBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBa0JDLEtBQWxCLEVBQXlCQyxTQUF6QixFQUFvQ0MsTUFBcEMsRUFBNENDLE1BQTVDLEVBQW9EQyxTQUFwRCxFQUErREMsT0FBL0QsQ0FBWjtBQUNILFNBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESCxnQkFXRyx1SkFoQ1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFxQ0g7QUFDSjs7R0F6UXVCaEIsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYi9wcmlzb25icmVhay5mNjQ3ZjM5ZWMyMzRlNmIxZGQ2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSAge1xyXG4gICAgY29uc3QgW2dhbWVkYXRhLCBzZXRHYW1lZGF0YV0gPSB1c2VTdGF0ZShbIC8vIGFycmF5IG9mIHZhcmlhYmxlc1xyXG4gICAgICAgIEFycmF5KDE1KS5maWxsKEFycmF5KDE1KS5maWxsKCcuJykpLCAvLyBzcXVhcmVzXHJcbiAgICAgICAgQXJyYXkoMTUpLmZpbGwoQXJyYXkoMTUpLmZpbGwoJycpKSwgIC8vIHVzZWRieVxyXG4gICAgICAgIC8vIHRpbGVzXHJcbiAgICAgICAgWydBJywnQScsJ0EnLCdBJywnQScsJ0EnLCdBJywnQScsJ0EnLCdCJywnQicsJ0MnLCdDJywnRCcsJ0QnLCdEJywnRCcsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0YnLCdGJywnRycsJ0cnLCdHJywnSCcsJ0gnLCdJJywnSScsJ0knLCdJJywnSScsJ0knLCdJJywnSScsJ0knLCdKJywnSycsJ0wnLCdMJywnTCcsJ0wnLCdNJywnTScsJ04nLCdOJywnTicsJ04nLCdOJywnTicsJ08nLCdPJywnTycsJ08nLCdPJywnTycsJ08nLCdPJywnUCcsJ1AnLCdRJywnUicsJ1InLCdSJywnUicsJ1InLCdSJywnUycsJ1MnLCdTJywnUycsJ1QnLCdUJywnVCcsJ1QnLCdUJywnVCcsJ1UnLCdVJywnVScsJ1UnLCdWJywnVicsJ1cnLCdXJywnWCcsJ1knLCdZJywnWicsJz8nLCc/J10sXHJcbiAgICAgICAgLTEsIC8vIHNlbGVjdGlvblxyXG4gICAgICAgIFtdLCAvLyBwdGlsZXNcclxuICAgICAgICBbXSwgLy8gZ3RpbGVzXHJcbiAgICAgICAgJ1AnLCAvLyB3aG9zZXR1cm5cclxuICAgICAgICB0cnVlIC8vIHBpY2tpbmdcclxuICAgICAgICBdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhcHBseUNoYW5nZXMoc3F1YXJlcywgdXNlZGJ5LCB0aWxlcywgc2VsZWN0aW9uLCBwdGlsZXMsIGd0aWxlcywgd2hvc2V0dXJuLCBwaWNraW5nKSB7XHJcbiAgICAgICAgc2V0R2FtZWRhdGEoW3NxdWFyZXMsIHVzZWRieSwgdGlsZXMsIHNlbGVjdGlvbiwgcHRpbGVzLCBndGlsZXMsIHdob3NldHVybiwgcGlja2luZ10pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxHYW1lLz5cclxuICAgIClcclxuXHJcbiAgICBmdW5jdGlvbiBHYW1lKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgcHJpc29uYnJlYWtcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3bXRpdGxlIE1hc3Rlcm1pbmRcIj5Qcmlzb24gQnJlYWs8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yIHBiUHJpc29uZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcmlzb25lcnMgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTIgcGJHdWFyZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEd1YXJkcyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGlsZXMgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnLi4vLi4vJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3bWxpbmtcIj5Ib21lPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEJvYXJkKCkge1xyXG4gICAgICAgIGxldCBzcXVhcmVzID0gZ2FtZWRhdGFbMF1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwicGJCb2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzcXVhcmVzLm1hcCgocixyaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YEJvYXJkUm93JHtyaX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZFJvdyByPXtyfSByaT17cml9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQm9hcmRSb3cocHJvcHMpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwicm93IHBiUm93XCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuci5tYXAoKGMsY2kpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YFNxdWFyZSR7cHJvcHMucml9LSR7Y2l9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcXVhcmUgYz17Y30gY2k9e2NpfSByaT17cHJvcHMucml9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBTcXVhcmUocHJvcHMpIHtcclxuICAgICAgICAvLyBhcHBseUNoYW5nZXMoc3F1YXJlcywgdXNlZGJ5LCB0aWxlcywgc2VsZWN0aW9uLCBwdGlsZXMsIGd0aWxlcywgd2hvc2V0dXJuLCBwaWNraW5nKVxyXG4gICAgICAgIGxldCBzcXVhcmVzID0gZ2FtZWRhdGFbMF1cclxuICAgICAgICBsZXQgdXNlZGJ5ID0gZ2FtZWRhdGFbMV1cclxuICAgICAgICBsZXQgdGlsZXMgPSBnYW1lZGF0YVsyXVxyXG4gICAgICAgIGxldCBzZWxlY3Rpb24gPSBnYW1lZGF0YVszXVxyXG4gICAgICAgIGxldCBwdGlsZXMgPSBnYW1lZGF0YVs0XVxyXG4gICAgICAgIGxldCBndGlsZXMgPSBnYW1lZGF0YVs1XVxyXG4gICAgICAgIGxldCB3aG9zZXR1cm4gPSBnYW1lZGF0YVs2XVxyXG4gICAgICAgIGxldCBwaWNraW5nID0gZ2FtZWRhdGFbN11cclxuICAgICAgICAvLyB0aGVyZSBpcyBhIGJldHRlciB3YXkgXl5eXHJcbiAgICAgICAgY29uc3QgdXNlZGJ5cm93ID0gdXNlZGJ5W3Byb3BzLnJpXVxyXG4gICAgICAgIGNvbnN0IHVzZWRieWNsYXNzID0gdXNlZGJ5cm93W3Byb3BzLmNpXSA9PT0gXCJQXCIgPyBcInBiU3F1YXJlVXNlZEJ5UHJpc29uZXJzXCIgOiBcInBiU3F1YXJlVXNlZEJ5R3VhcmRzXCJcclxuICAgICAgICBjb25zdCB0ZGNsYXNzID0gcHJvcHMuYyAhPT0gXCIuXCIgPyB1c2VkYnljbGFzcyA6IHByb3BzLnJpID09PSA3ICYmIHByb3BzLmNpID09PSA3ID8gXCJwYlNxdWFyZUNlbnRlclNxdWFyZVwiIDogKHByb3BzLnJpID09PSAwIHx8IHByb3BzLnJpID09PSA3IHx8IHByb3BzLnJpID09PSAxNCkgJiYgKHByb3BzLmNpID09PSAwIHx8IHByb3BzLmNpID09PSA3IHx8IHByb3BzLmNpID09PSAxNCkgPyBcInBiU3F1YXJlRXNjYXBlSGF0Y2hcIiA6IFwicGJTcXVhcmVcIlxyXG4gICAgICAgIGNvbnN0IHRkdmFsdWUgPSBwcm9wcy5jICE9PSBcIi5cIiA/IHByb3BzLmMgOiB0ZGNsYXNzID09PSBcInBiU3F1YXJlQ2VudGVyU3F1YXJlXCIgPyBcIuKcsFwiIDogdGRjbGFzcyA9PT0gXCJwYlNxdWFyZUVzY2FwZUhhdGNoXCIgPyBcIvCfkqtcIiA6IFwi4o6UXCJcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT17dGRjbGFzc31cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGlvbiA+IC0xICYmIHByb3BzLmMgPT09IFwiLlwiKSB7IC8vIHRpbGUgaXMgc2VsZWN0ZWQgZnJvbSByYWNrIGFuZCBjbGlja2VkIHNxdWFyZSBpcyBub3QgdXNlZCB5ZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdSb3cgPSBbLi4uc3F1YXJlc1twcm9wcy5yaV1dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdSb3dbcHJvcHMuY2ldID0gd2hvc2V0dXJuID09PSAnUCcgPyBwdGlsZXNbc2VsZWN0aW9uXSA6IGd0aWxlc1tzZWxlY3Rpb25dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVzW3Byb3BzLnJpXSA9IFsuLi5uZXdSb3ddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aG9zZXR1cm4gPT09ICdQJyA/IHB0aWxlcy5zcGxpY2Uoc2VsZWN0aW9uLCAxKSA6IGd0aWxlcy5zcGxpY2Uoc2VsZWN0aW9uLDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VXNlZGJ5Um93ID0gWy4uLnVzZWRieVtwcm9wcy5yaV1dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdVc2VkYnlSb3dbcHJvcHMuY2ldID0gd2hvc2V0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VkYnlbcHJvcHMucmldID0gWy4uLm5ld1VzZWRieVJvd11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbiA9IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBseUNoYW5nZXMoc3F1YXJlcywgdXNlZGJ5LCB0aWxlcywgc2VsZWN0aW9uLCBwdGlsZXMsIGd0aWxlcywgd2hvc2V0dXJuLCBwaWNraW5nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb3BzLmMgIT09IFwiLlwiKSB7IC8vIGNsaWNrZWQgc3F1YXJlIGhhcyBhIHRpbGUgb24gaXQsIHRyZWF0IGFzIHVucGxheWluZyB0aGUgdGlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXNzdW1pbmcgc29tZSBnb29kIHdpbGwgZnJvbSB0aGUgdXNlcnMgdG8gY2xpY2sgYSB0aWxlIHRoZXkgcGxheWVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHdob3NldHVybiA9PT0gJ1AnICYmIHB0aWxlcy5sZW5ndGggPCA3KSB8fCAod2hvc2V0dXJuID09PSAnRycgJiYgZ3RpbGVzLmxlbmd0aCA8IDcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hvc2V0dXJuID09PSAnUCcgPyBwdGlsZXMucHVzaChwcm9wcy5jKSA6IGd0aWxlcy5wdXNoKHByb3BzLmMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1JvdyA9IFsuLi5zcXVhcmVzW3Byb3BzLnJpXV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdSb3dbcHJvcHMuY2ldID0gXCIuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVzW3Byb3BzLnJpXSA9IFsuLi5uZXdSb3ddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1VzZWRieVJvdyA9IFsuLi51c2VkYnlbcHJvcHMucmldXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1VzZWRieVJvd1twcm9wcy5jaV0gPSBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlZGJ5W3Byb3BzLnJpXSA9IFsuLi5uZXdVc2VkYnlSb3ddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uID0gLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBseUNoYW5nZXMoc3F1YXJlcywgdXNlZGJ5LCB0aWxlcywgc2VsZWN0aW9uLCBwdGlsZXMsIGd0aWxlcywgd2hvc2V0dXJuLCBwaWNraW5nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0ZHZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFRpbGVzKCkge1xyXG4gICAgICAgIGxldCB0aWxlcyA9IGdhbWVkYXRhWzJdXHJcbiAgICAgICAgLy8gdGhlcmUgaXMgYSBiZXR0ZXIgd2F5IF5eXlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcG9vbFwiPlxyXG4gICAgICAgICAgICAgICAge3RpbGVzLm1hcCgodCx0aSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YHRpbGUke3RpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGkgPiAwICYmIHRpbGVzW3RpXSAhPT0gdGlsZXNbdGktMV0gPyA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXBvb2xEaXZpZGVyXCI+PC9kaXY+IDogPD48Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiVGlsZXBvb2xUaWxlXCI+e3R9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gUHJpc29uZXJzKCkge1xyXG4gICAgICAgIC8vIGFwcGx5Q2hhbmdlcyhzcXVhcmVzLCB1c2VkYnksIHRpbGVzLCBzZWxlY3Rpb24sIHB0aWxlcywgZ3RpbGVzLCB3aG9zZXR1cm4sIHBpY2tpbmcpXHJcbiAgICAgICAgbGV0IHNxdWFyZXMgPSBnYW1lZGF0YVswXVxyXG4gICAgICAgIGxldCB1c2VkYnkgPSBnYW1lZGF0YVsxXVxyXG4gICAgICAgIGxldCB0aWxlcyA9IGdhbWVkYXRhWzJdXHJcbiAgICAgICAgbGV0IHNlbGVjdGlvbiA9IGdhbWVkYXRhWzNdXHJcbiAgICAgICAgbGV0IHB0aWxlcyA9IGdhbWVkYXRhWzRdXHJcbiAgICAgICAgbGV0IGd0aWxlcyA9IGdhbWVkYXRhWzVdXHJcbiAgICAgICAgbGV0IHdob3NldHVybiA9IGdhbWVkYXRhWzZdXHJcbiAgICAgICAgbGV0IHBpY2tpbmcgPSBnYW1lZGF0YVs3XVxyXG4gICAgICAgIC8vIHRoZXJlIGlzIGEgYmV0dGVyIHdheSBeXl5cclxuICAgICAgICBpZiAocGlja2luZyAmJiB3aG9zZXR1cm4gPT09ICdQJyAmJiBwdGlsZXMubGVuZ3RoIDwgNyAmJiB0aWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHdoaWxlIChwdGlsZXMubGVuZ3RoIDwgNyAmJiB0aWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRpbGVzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHB0aWxlcy5wdXNoKHRpbGVzW3JhbmRdKVxyXG4gICAgICAgICAgICAgICAgdGlsZXMuc3BsaWNlKHJhbmQsMSkgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwaWNraW5nID0gZmFsc2VcclxuICAgICAgICAgICAgYXBwbHlDaGFuZ2VzKHNxdWFyZXMsIHVzZWRieSwgdGlsZXMsIHNlbGVjdGlvbiwgcHRpbGVzLCBndGlsZXMsIHdob3NldHVybiwgcGlja2luZylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPlBSSVNPTkVSUzwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBiVGlsZXJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHRpbGVzLm1hcCgodCx0aSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2BwdGlsZSR7dGl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiVGlsZU9uUmFja1BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod2hvc2V0dXJuID09PSAnUCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbiA9IHRpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBseUNoYW5nZXMoc3F1YXJlcywgdXNlZGJ5LCB0aWxlcywgc2VsZWN0aW9uLCBwdGlsZXMsIGd0aWxlcywgd2hvc2V0dXJuLCBwaWNraW5nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0l0IGlzIG5vdCB5b3VyIHR1cm4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICB7d2hvc2V0dXJuID09PSAnUCcgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hvc2V0dXJuID0gJ0cnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpY2tpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbiA9IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGx5Q2hhbmdlcyhzcXVhcmVzLCB1c2VkYnksIHRpbGVzLCBzZWxlY3Rpb24sIHB0aWxlcywgZ3RpbGVzLCB3aG9zZXR1cm4sIHBpY2tpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbmlzaCBUdXJuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBHdWFyZHMoKSB7XHJcbiAgICAgICAgLy8gYXBwbHlDaGFuZ2VzKHNxdWFyZXMsIHVzZWRieSwgdGlsZXMsIHNlbGVjdGlvbiwgcHRpbGVzLCBndGlsZXMsIHdob3NldHVybiwgcGlja2luZylcclxuICAgICAgICBsZXQgc3F1YXJlcyA9IGdhbWVkYXRhWzBdXHJcbiAgICAgICAgbGV0IHVzZWRieSA9IGdhbWVkYXRhWzFdXHJcbiAgICAgICAgbGV0IHRpbGVzID0gZ2FtZWRhdGFbMl1cclxuICAgICAgICBsZXQgc2VsZWN0aW9uID0gZ2FtZWRhdGFbM11cclxuICAgICAgICBsZXQgcHRpbGVzID0gZ2FtZWRhdGFbNF1cclxuICAgICAgICBsZXQgZ3RpbGVzID0gZ2FtZWRhdGFbNV1cclxuICAgICAgICBsZXQgd2hvc2V0dXJuID0gZ2FtZWRhdGFbNl1cclxuICAgICAgICBsZXQgcGlja2luZyA9IGdhbWVkYXRhWzddXHJcbiAgICAgICAgLy8gdGhlcmUgaXMgYSBiZXR0ZXIgd2F5IF5eXlxyXG4gICAgICAgIGlmIChwaWNraW5nICYmIHdob3NldHVybiA9PT0gJ0cnICYmIGd0aWxlcy5sZW5ndGggPCA3ICYmIHRpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgd2hpbGUgKGd0aWxlcy5sZW5ndGggPCA3ICYmIHRpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGlsZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgZ3RpbGVzLnB1c2godGlsZXNbcmFuZF0pXHJcbiAgICAgICAgICAgICAgICB0aWxlcy5zcGxpY2UocmFuZCwxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBpY2tpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICBhcHBseUNoYW5nZXMoc3F1YXJlcywgdXNlZGJ5LCB0aWxlcywgc2VsZWN0aW9uLCBwdGlsZXMsIGd0aWxlcywgd2hvc2V0dXJuLCBwaWNraW5nKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+R1VBUkRTPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtndGlsZXMubWFwKCh0LHRpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YGd0aWxlJHt0aX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJUaWxlT25SYWNrR1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aG9zZXR1cm4gPT09ICdHJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uID0gdGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGx5Q2hhbmdlcyhzcXVhcmVzLCB1c2VkYnksIHRpbGVzLCBzZWxlY3Rpb24sIHB0aWxlcywgZ3RpbGVzLCB3aG9zZXR1cm4sIHBpY2tpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnSXQgaXMgbm90IHlvdXIgdHVybicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIHt3aG9zZXR1cm4gPT09ICdHJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aG9zZXR1cm4gPSAnUCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGlja2luZyA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uID0gLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwbHlDaGFuZ2VzKHNxdWFyZXMsIHVzZWRieSwgdGlsZXMsIHNlbGVjdGlvbiwgcHRpbGVzLCBndGlsZXMsIHdob3NldHVybiwgcGlja2luZylcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRmluaXNoIFR1cm5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==