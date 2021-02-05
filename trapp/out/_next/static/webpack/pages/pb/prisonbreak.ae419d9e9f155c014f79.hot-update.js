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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
      className: "pbBoard",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: squares.map((r, ri) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BoardRow, {
            r: r,
            ri: ri
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 29
          }, this)
        }, `BoardRow${ri}`, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
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
          lineNumber: 76,
          columnNumber: 25
        }, this)
      }, `Square${props.ri}-${ci}`, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, this);
  }

  function Square(props) {
    // applyChanges(squares, usedby, tiles, selection, ptiles, gtiles, whoseturn, picking)
    const squares = gamedata[0];
    const usedby = gamedata[1];
    const tiles = gamedata[2];
    const selection = gamedata[3];
    const ptiles = gamedata[4];
    const gtiles = gamedata[5];
    const whoseturn = gamedata[6];
    const picking = gamedata[7]; // there is a better way ^^^

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
          lineNumber: 101,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }, this);
  }

  function Tiles() {
    const tiles = gamedata[2]; // there is a better way ^^^

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pbTilepool",
      children: tiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: [ti > 0 && tiles[ti] !== tiles[ti - 1] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "pbTilepoolDivider"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 64
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "pbTilepoolTile",
          children: t
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 25
        }, this)]
      }, `tile${ti}`, true, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }, this);
  }

  function Prisoners() {
    // applyChanges(squares, usedby, tiles, selection, ptiles, gtiles, whoseturn, picking)
    const squares = gamedata[0];
    const usedby = gamedata[1];
    const tiles = gamedata[2];
    const selection = gamedata[3];
    const ptiles = gamedata[4];
    const gtiles = gamedata[5];
    const whoseturn = gamedata[6];
    const picking = gamedata[7]; // there is a better way ^^^

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
        lineNumber: 173,
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
            lineNumber: 177,
            columnNumber: 29
          }, this)
        }, `ptile${ti}`, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 174,
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
        lineNumber: 194,
        columnNumber: 21
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }, this);
  }

  function Guards() {
    // applyChanges(squares, usedby, tiles, selection, ptiles, gtiles, whoseturn, picking)
    const squares = gamedata[0];
    const usedby = gamedata[1];
    const tiles = gamedata[2];
    const selection = gamedata[3];
    const ptiles = gamedata[4];
    const gtiles = gamedata[5];
    const whoseturn = gamedata[6];
    const picking = gamedata[7]; // there is a better way ^^^

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
        lineNumber: 232,
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
            lineNumber: 236,
            columnNumber: 29
          }, this)
        }, `gtile${ti}`, false, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 233,
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
        lineNumber: 253,
        columnNumber: 21
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 231,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsuanMiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsImdhbWVkYXRhIiwic2V0R2FtZWRhdGEiLCJ1c2VTdGF0ZSIsIkFycmF5IiwiZmlsbCIsImFwcGx5Q2hhbmdlcyIsInNxdWFyZXMiLCJ1c2VkYnkiLCJ0aWxlcyIsInNlbGVjdGlvbiIsInB0aWxlcyIsImd0aWxlcyIsIndob3NldHVybiIsInBpY2tpbmciLCJHYW1lIiwiQm9hcmQiLCJtYXAiLCJyIiwicmkiLCJCb2FyZFJvdyIsInByb3BzIiwiYyIsImNpIiwiU3F1YXJlIiwidXNlZGJ5cm93IiwidXNlZGJ5Y2xhc3MiLCJ0ZGNsYXNzIiwidGR2YWx1ZSIsIm5ld1JvdyIsInNwbGljZSIsIm5ld1VzZWRieVJvdyIsImxlbmd0aCIsInB1c2giLCJUaWxlcyIsInQiLCJ0aSIsIlByaXNvbmVycyIsInJhbmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJhbGVydCIsIkd1YXJkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCQyxHQUF0QixFQUE0QjtBQUFBOztBQUN2QyxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLHNEQUFRLENBQUMsQ0FBRTtBQUN2Q0MsT0FBSyxDQUFDLEVBQUQsQ0FBTCxDQUFVQyxJQUFWLENBQWVELEtBQUssQ0FBQyxFQUFELENBQUwsQ0FBVUMsSUFBVixDQUFlLEdBQWYsQ0FBZixDQURxQyxFQUNBO0FBQ3JDRCxPQUFLLENBQUMsRUFBRCxDQUFMLENBQVVDLElBQVYsQ0FBZUQsS0FBSyxDQUFDLEVBQUQsQ0FBTCxDQUFVQyxJQUFWLENBQWUsRUFBZixDQUFmLENBRnFDLEVBRUE7QUFDckM7QUFDQSxHQUFDLEdBQUQsRUFBSyxHQUFMLEVBQVMsR0FBVCxFQUFhLEdBQWIsRUFBaUIsR0FBakIsRUFBcUIsR0FBckIsRUFBeUIsR0FBekIsRUFBNkIsR0FBN0IsRUFBaUMsR0FBakMsRUFBcUMsR0FBckMsRUFBeUMsR0FBekMsRUFBNkMsR0FBN0MsRUFBaUQsR0FBakQsRUFBcUQsR0FBckQsRUFBeUQsR0FBekQsRUFBNkQsR0FBN0QsRUFBaUUsR0FBakUsRUFBcUUsR0FBckUsRUFBeUUsR0FBekUsRUFBNkUsR0FBN0UsRUFBaUYsR0FBakYsRUFBcUYsR0FBckYsRUFBeUYsR0FBekYsRUFBNkYsR0FBN0YsRUFBaUcsR0FBakcsRUFBcUcsR0FBckcsRUFBeUcsR0FBekcsRUFBNkcsR0FBN0csRUFBaUgsR0FBakgsRUFBcUgsR0FBckgsRUFBeUgsR0FBekgsRUFBNkgsR0FBN0gsRUFBaUksR0FBakksRUFBcUksR0FBckksRUFBeUksR0FBekksRUFBNkksR0FBN0ksRUFBaUosR0FBakosRUFBcUosR0FBckosRUFBeUosR0FBekosRUFBNkosR0FBN0osRUFBaUssR0FBakssRUFBcUssR0FBckssRUFBeUssR0FBekssRUFBNkssR0FBN0ssRUFBaUwsR0FBakwsRUFBcUwsR0FBckwsRUFBeUwsR0FBekwsRUFBNkwsR0FBN0wsRUFBaU0sR0FBak0sRUFBcU0sR0FBck0sRUFBeU0sR0FBek0sRUFBNk0sR0FBN00sRUFBaU4sR0FBak4sRUFBcU4sR0FBck4sRUFBeU4sR0FBek4sRUFBNk4sR0FBN04sRUFBaU8sR0FBak8sRUFBcU8sR0FBck8sRUFBeU8sR0FBek8sRUFBNk8sR0FBN08sRUFBaVAsR0FBalAsRUFBcVAsR0FBclAsRUFBeVAsR0FBelAsRUFBNlAsR0FBN1AsRUFBaVEsR0FBalEsRUFBcVEsR0FBclEsRUFBeVEsR0FBelEsRUFBNlEsR0FBN1EsRUFBaVIsR0FBalIsRUFBcVIsR0FBclIsRUFBeVIsR0FBelIsRUFBNlIsR0FBN1IsRUFBaVMsR0FBalMsRUFBcVMsR0FBclMsRUFBeVMsR0FBelMsRUFBNlMsR0FBN1MsRUFBaVQsR0FBalQsRUFBcVQsR0FBclQsRUFBeVQsR0FB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QTtBQUFBO0FBREosV0FBWSxRQUFPQyxFQUFHLEVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosRUFxQkt2QixTQUFTLEtBQUssR0FBZCxnQkFDRztBQUNBLGVBQU8sRUFBRSxZQUFXO0FBQ2hCQSxtQkFBUyxHQUFHLEdBQVo7QUFDQUMsaUJBQU8sR0FBRyxJQUFWO0FBQ0FKLG1CQUFTLEdBQUcsQ0FBQyxDQUFiO0FBQ0FKLHNCQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFrQkMsS0FBbEIsRUFBeUJDLFNBQXpCLEVBQW9DQyxNQUFwQyxFQUE0Q0MsTUFBNUMsRUFBb0RDLFNBQXBELEVBQStEQyxPQUEvRCxDQUFaO0FBQ0gsU0FORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURILGdCQVdHLHVKQWhDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQXFDSDtBQUNKOztHQXhRdUJoQixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BiL3ByaXNvbmJyZWFrLmFlNDE5ZDllOWYxNTVjMDE0Zjc5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpICB7XHJcbiAgICBjb25zdCBbZ2FtZWRhdGEsIHNldEdhbWVkYXRhXSA9IHVzZVN0YXRlKFsgLy8gYXJyYXkgb2YgdmFyaWFibGVzXHJcbiAgICAgICAgQXJyYXkoMTUpLmZpbGwoQXJyYXkoMTUpLmZpbGwoJy4nKSksIC8vIHNxdWFyZXNcclxuICAgICAgICBBcnJheSgxNSkuZmlsbChBcnJheSgxNSkuZmlsbCgnJykpLCAgLy8gdXNlZGJ5XHJcbiAgICAgICAgLy8gdGlsZXNcclxuICAgICAgICBbJ0EnLCdBJywnQScsJ0EnLCdBJywnQScsJ0EnLCdBJywnQScsJ0InLCdCJywnQycsJ0MnLCdEJywnRCcsJ0QnLCdEJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRicsJ0YnLCdHJywnRycsJ0cnLCdIJywnSCcsJ0knLCdJJywnSScsJ0knLCdJJywnSScsJ0knLCdJJywnSScsJ0onLCdLJywnTCcsJ0wnLCdMJywnTCcsJ00nLCdNJywnTicsJ04nLCdOJywnTicsJ04nLCdOJywnTycsJ08nLCdPJywnTycsJ08nLCdPJywnTycsJ08nLCdQJywnUCcsJ1EnLCdSJywnUicsJ1InLCdSJywnUicsJ1InLCdTJywnUycsJ1MnLCdTJywnVCcsJ1QnLCdUJywnVCcsJ1QnLCdUJywnVScsJ1UnLCdVJywnVScsJ1YnLCdWJywnVycsJ1cnLCdYJywnWScsJ1knLCdaJywnPycsJz8nXSxcclxuICAgICAgICAtMSwgLy8gc2VsZWN0aW9uXHJcbiAgICAgICAgW10sIC8vIHB0aWxlc1xyXG4gICAgICAgIFtdLCAvLyBndGlsZXNcclxuICAgICAgICAnUCcsIC8vIHdob3NldHVyblxyXG4gICAgICAgIHRydWUgLy8gcGlja2luZ1xyXG4gICAgICAgIF0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFwcGx5Q2hhbmdlcyhzcXVhcmVzLCB1c2VkYnksIHRpbGVzLCBzZWxlY3Rpb24sIHB0aWxlcywgZ3RpbGVzLCB3aG9zZXR1cm4sIHBpY2tpbmcpIHtcclxuICAgICAgICBzZXRHYW1lZGF0YShbc3F1YXJlcywgdXNlZGJ5LCB0aWxlcywgc2VsZWN0aW9uLCBwdGlsZXMsIGd0aWxlcywgd2hvc2V0dXJuLCBwaWNraW5nXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEdhbWUvPlxyXG4gICAgKVxyXG5cclxuICAgIGZ1bmN0aW9uIEdhbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBwcmlzb25icmVha1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndtdGl0bGUgTWFzdGVybWluZFwiPlByaXNvbiBCcmVhazwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTIgcGJQcmlzb25lcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByaXNvbmVycyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMiBwYkd1YXJkc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3VhcmRzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaWxlcyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycuLi8uLi8nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIndtbGlua1wiPkhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQm9hcmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInBiQm9hcmRcIj5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7c3F1YXJlcy5tYXAoKHIscmkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2BCb2FyZFJvdyR7cml9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmRSb3cgcj17cn0gcmk9e3JpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEJvYXJkUm93KHByb3BzKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInJvdyBwYlJvd1wiPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLnIubWFwKChjLGNpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2BTcXVhcmUke3Byb3BzLnJpfS0ke2NpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3F1YXJlIGM9e2N9IGNpPXtjaX0gcmk9e3Byb3BzLnJpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gU3F1YXJlKHByb3BzKSB7XHJcbiAgICAgICAgLy8gYXBwbHlDaGFuZ2VzKHNxdWFyZXMsIHVzZWRieSwgdGlsZXMsIHNlbGVjdGlvbiwgcHRpbGVzLCBndGlsZXMsIHdob3NldHVybiwgcGlja2luZylcclxuICAgICAgICBjb25zdCBzcXVhcmVzID0gZ2FtZWRhdGFbMF1cclxuICAgICAgICBjb25zdCB1c2VkYnkgPSBnYW1lZGF0YVsxXVxyXG4gICAgICAgIGNvbnN0IHRpbGVzID0gZ2FtZWRhdGFbMl1cclxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBnYW1lZGF0YVszXVxyXG4gICAgICAgIGNvbnN0IHB0aWxlcyA9IGdhbWVkYXRhWzRdXHJcbiAgICAgICAgY29uc3QgZ3RpbGVzID0gZ2FtZWRhdGFbNV1cclxuICAgICAgICBjb25zdCB3aG9zZXR1cm4gPSBnYW1lZGF0YVs2XVxyXG4gICAgICAgIGNvbnN0IHBpY2tpbmcgPSBnYW1lZGF0YVs3XVxyXG4gICAgICAgIC8vIHRoZXJlIGlzIGEgYmV0dGVyIHdheSBeXl5cclxuICAgICAgICBjb25zdCB1c2VkYnlyb3cgPSB1c2VkYnlbcHJvcHMucmldXHJcbiAgICAgICAgY29uc3QgdXNlZGJ5Y2xhc3MgPSB1c2VkYnlyb3dbcHJvcHMuY2ldID09PSBcIlBcIiA/IFwicGJTcXVhcmVVc2VkQnlQcmlzb25lcnNcIiA6IFwicGJTcXVhcmVVc2VkQnlHdWFyZHNcIlxyXG4gICAgICAgIGNvbnN0IHRkY2xhc3MgPSBwcm9wcy5jICE9PSBcIi5cIiA/IHVzZWRieWNsYXNzIDogcHJvcHMucmkgPT09IDcgJiYgcHJvcHMuY2kgPT09IDcgPyBcInBiU3F1YXJlQ2VudGVyU3F1YXJlXCIgOiAocHJvcHMucmkgPT09IDAgfHwgcHJvcHMucmkgPT09IDcgfHwgcHJvcHMucmkgPT09IDE0KSAmJiAocHJvcHMuY2kgPT09IDAgfHwgcHJvcHMuY2kgPT09IDcgfHwgcHJvcHMuY2kgPT09IDE0KSA/IFwicGJTcXVhcmVFc2NhcGVIYXRjaFwiIDogXCJwYlNxdWFyZVwiXHJcbiAgICAgICAgY29uc3QgdGR2YWx1ZSA9IHByb3BzLmMgIT09IFwiLlwiID8gcHJvcHMuYyA6IHRkY2xhc3MgPT09IFwicGJTcXVhcmVDZW50ZXJTcXVhcmVcIiA/IFwi4pywXCIgOiB0ZGNsYXNzID09PSBcInBiU3F1YXJlRXNjYXBlSGF0Y2hcIiA/IFwi8J+Sq1wiIDogXCLijpRcIlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPXt0ZGNsYXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0aW9uID4gLTEgJiYgcHJvcHMuYyA9PT0gXCIuXCIpIHsgLy8gdGlsZSBpcyBzZWxlY3RlZCBmcm9tIHJhY2sgYW5kIGNsaWNrZWQgc3F1YXJlIGlzIG5vdCB1c2VkIHlldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1JvdyA9IFsuLi5zcXVhcmVzW3Byb3BzLnJpXV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Jvd1twcm9wcy5jaV0gPSB3aG9zZXR1cm4gPT09ICdQJyA/IHB0aWxlc1tzZWxlY3Rpb25dIDogZ3RpbGVzW3NlbGVjdGlvbl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZXNbcHJvcHMucmldID0gWy4uLm5ld1Jvd11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdob3NldHVybiA9PT0gJ1AnID8gcHRpbGVzLnNwbGljZShzZWxlY3Rpb24sIDEpIDogZ3RpbGVzLnNwbGljZShzZWxlY3Rpb24sMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdVc2VkYnlSb3cgPSBbLi4udXNlZGJ5W3Byb3BzLnJpXV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1VzZWRieVJvd1twcm9wcy5jaV0gPSB3aG9zZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZWRieVtwcm9wcy5yaV0gPSBbLi4ubmV3VXNlZGJ5Um93XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uID0gLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGx5Q2hhbmdlcyhzcXVhcmVzLCB1c2VkYnksIHRpbGVzLCBzZWxlY3Rpb24sIHB0aWxlcywgZ3RpbGVzLCB3aG9zZXR1cm4sIHBpY2tpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcHMuYyAhPT0gXCIuXCIpIHsgLy8gY2xpY2tlZCBzcXVhcmUgaGFzIGEgdGlsZSBvbiBpdCwgdHJlYXQgYXMgdW5wbGF5aW5nIHRoZSB0aWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBc3N1bWluZyBzb21lIGdvb2Qgd2lsbCBmcm9tIHRoZSB1c2VycyB0byBjbGljayBhIHRpbGUgdGhleSBwbGF5ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgod2hvc2V0dXJuID09PSAnUCcgJiYgcHRpbGVzLmxlbmd0aCA8IDcpIHx8ICh3aG9zZXR1cm4gPT09ICdHJyAmJiBndGlsZXMubGVuZ3RoIDwgNykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aG9zZXR1cm4gPT09ICdQJyA/IHB0aWxlcy5wdXNoKHByb3BzLmMpIDogZ3RpbGVzLnB1c2gocHJvcHMuYylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Um93ID0gWy4uLnNxdWFyZXNbcHJvcHMucmldXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Jvd1twcm9wcy5jaV0gPSBcIi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZXNbcHJvcHMucmldID0gWy4uLm5ld1Jvd11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VXNlZGJ5Um93ID0gWy4uLnVzZWRieVtwcm9wcy5yaV1dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VXNlZGJ5Um93W3Byb3BzLmNpXSA9IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VkYnlbcHJvcHMucmldID0gWy4uLm5ld1VzZWRieVJvd11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24gPSAtMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGx5Q2hhbmdlcyhzcXVhcmVzLCB1c2VkYnksIHRpbGVzLCBzZWxlY3Rpb24sIHB0aWxlcywgZ3RpbGVzLCB3aG9zZXR1cm4sIHBpY2tpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RkdmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gVGlsZXMoKSB7XHJcbiAgICAgICAgY29uc3QgdGlsZXMgPSBnYW1lZGF0YVsyXVxyXG4gICAgICAgIC8vIHRoZXJlIGlzIGEgYmV0dGVyIHdheSBeXl5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXBvb2xcIj5cclxuICAgICAgICAgICAgICAgIHt0aWxlcy5tYXAoKHQsdGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2B0aWxlJHt0aX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RpID4gMCAmJiB0aWxlc1t0aV0gIT09IHRpbGVzW3RpLTFdID8gPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVwb29sRGl2aWRlclwiPjwvZGl2PiA6IDw+PC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYlRpbGVwb29sVGlsZVwiPnt0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFByaXNvbmVycygpIHtcclxuICAgICAgICAvLyBhcHBseUNoYW5nZXMoc3F1YXJlcywgdXNlZGJ5LCB0aWxlcywgc2VsZWN0aW9uLCBwdGlsZXMsIGd0aWxlcywgd2hvc2V0dXJuLCBwaWNraW5nKVxyXG4gICAgICAgIGNvbnN0IHNxdWFyZXMgPSBnYW1lZGF0YVswXVxyXG4gICAgICAgIGNvbnN0IHVzZWRieSA9IGdhbWVkYXRhWzFdXHJcbiAgICAgICAgY29uc3QgdGlsZXMgPSBnYW1lZGF0YVsyXVxyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGdhbWVkYXRhWzNdXHJcbiAgICAgICAgY29uc3QgcHRpbGVzID0gZ2FtZWRhdGFbNF1cclxuICAgICAgICBjb25zdCBndGlsZXMgPSBnYW1lZGF0YVs1XVxyXG4gICAgICAgIGNvbnN0IHdob3NldHVybiA9IGdhbWVkYXRhWzZdXHJcbiAgICAgICAgY29uc3QgcGlja2luZyA9IGdhbWVkYXRhWzddXHJcbiAgICAgICAgLy8gdGhlcmUgaXMgYSBiZXR0ZXIgd2F5IF5eXlxyXG4gICAgICAgIGlmIChwaWNraW5nICYmIHdob3NldHVybiA9PT0gJ1AnICYmIHB0aWxlcy5sZW5ndGggPCA3ICYmIHRpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgd2hpbGUgKHB0aWxlcy5sZW5ndGggPCA3ICYmIHRpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGlsZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgcHRpbGVzLnB1c2godGlsZXNbcmFuZF0pXHJcbiAgICAgICAgICAgICAgICB0aWxlcy5zcGxpY2UocmFuZCwxKSAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBpY2tpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICBhcHBseUNoYW5nZXMoc3F1YXJlcywgdXNlZGJ5LCB0aWxlcywgc2VsZWN0aW9uLCBwdGlsZXMsIGd0aWxlcywgd2hvc2V0dXJuLCBwaWNraW5nKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+UFJJU09ORVJTPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwdGlsZXMubWFwKCh0LHRpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YHB0aWxlJHt0aX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJUaWxlT25SYWNrUFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aG9zZXR1cm4gPT09ICdQJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uID0gdGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGx5Q2hhbmdlcyhzcXVhcmVzLCB1c2VkYnksIHRpbGVzLCBzZWxlY3Rpb24sIHB0aWxlcywgZ3RpbGVzLCB3aG9zZXR1cm4sIHBpY2tpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnSXQgaXMgbm90IHlvdXIgdHVybicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIHt3aG9zZXR1cm4gPT09ICdQJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aG9zZXR1cm4gPSAnRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGlja2luZyA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uID0gLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwbHlDaGFuZ2VzKHNxdWFyZXMsIHVzZWRieSwgdGlsZXMsIHNlbGVjdGlvbiwgcHRpbGVzLCBndGlsZXMsIHdob3NldHVybiwgcGlja2luZylcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRmluaXNoIFR1cm5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEd1YXJkcygpIHtcclxuICAgICAgICAvLyBhcHBseUNoYW5nZXMoc3F1YXJlcywgdXNlZGJ5LCB0aWxlcywgc2VsZWN0aW9uLCBwdGlsZXMsIGd0aWxlcywgd2hvc2V0dXJuLCBwaWNraW5nKVxyXG4gICAgICAgIGNvbnN0IHNxdWFyZXMgPSBnYW1lZGF0YVswXVxyXG4gICAgICAgIGNvbnN0IHVzZWRieSA9IGdhbWVkYXRhWzFdXHJcbiAgICAgICAgY29uc3QgdGlsZXMgPSBnYW1lZGF0YVsyXVxyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGdhbWVkYXRhWzNdXHJcbiAgICAgICAgY29uc3QgcHRpbGVzID0gZ2FtZWRhdGFbNF1cclxuICAgICAgICBjb25zdCBndGlsZXMgPSBnYW1lZGF0YVs1XVxyXG4gICAgICAgIGNvbnN0IHdob3NldHVybiA9IGdhbWVkYXRhWzZdXHJcbiAgICAgICAgY29uc3QgcGlja2luZyA9IGdhbWVkYXRhWzddXHJcbiAgICAgICAgLy8gdGhlcmUgaXMgYSBiZXR0ZXIgd2F5IF5eXlxyXG4gICAgICAgIGlmIChwaWNraW5nICYmIHdob3NldHVybiA9PT0gJ0cnICYmIGd0aWxlcy5sZW5ndGggPCA3ICYmIHRpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgd2hpbGUgKGd0aWxlcy5sZW5ndGggPCA3ICYmIHRpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGlsZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgZ3RpbGVzLnB1c2godGlsZXNbcmFuZF0pXHJcbiAgICAgICAgICAgICAgICB0aWxlcy5zcGxpY2UocmFuZCwxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBpY2tpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICBhcHBseUNoYW5nZXMoc3F1YXJlcywgdXNlZGJ5LCB0aWxlcywgc2VsZWN0aW9uLCBwdGlsZXMsIGd0aWxlcywgd2hvc2V0dXJuLCBwaWNraW5nKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+R1VBUkRTPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtndGlsZXMubWFwKCh0LHRpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YGd0aWxlJHt0aX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJUaWxlT25SYWNrR1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aG9zZXR1cm4gPT09ICdHJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uID0gdGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGx5Q2hhbmdlcyhzcXVhcmVzLCB1c2VkYnksIHRpbGVzLCBzZWxlY3Rpb24sIHB0aWxlcywgZ3RpbGVzLCB3aG9zZXR1cm4sIHBpY2tpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnSXQgaXMgbm90IHlvdXIgdHVybicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIHt3aG9zZXR1cm4gPT09ICdHJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aG9zZXR1cm4gPSAnUCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGlja2luZyA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uID0gLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwbHlDaGFuZ2VzKHNxdWFyZXMsIHVzZWRieSwgdGlsZXMsIHNlbGVjdGlvbiwgcHRpbGVzLCBndGlsZXMsIHdob3NldHVybiwgcGlja2luZylcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRmluaXNoIFR1cm5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==