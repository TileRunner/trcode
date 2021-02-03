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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Array(15).fill(Array(15).fill('.')));
  const {
    0: usedby,
    1: setUsedby
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Array(15).fill(Array(15).fill('')));
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
    lineNumber: 14,
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
            lineNumber: 22,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Prisoners, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-6",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Board, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Tiles, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Guards, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
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
              lineNumber: 42,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
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
            lineNumber: 56,
            columnNumber: 29
          }, this)
        }, `BoardRow${ri}`, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
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
          lineNumber: 69,
          columnNumber: 25
        }, this)
      }, `Square${props.ri}-${ci}`, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, this);
  }

  function Square(props) {
    const usedbyrow = usedby[props.ri];
    const usedbyclass = usedbyrow[props.ci] === "P" ? "pbSquareUsedPrisoners" : "pbSquareUsedByGuards";
    const tdclass = props.c !== "." ? usedbyclass : props.ri === 7 && props.ci === 7 ? "pbSquareCenterSquare" : (props.ri === 0 || props.ri === 7 || props.ri === 14) && (props.ci === 0 || props.ci === 7 || props.ci === 14) ? "pbSquareEscapeHatch" : "pbSquare";
    const tdvalue = props.c !== "." ? props.c : tdclass === "pbSquareCenterSquare" ? "✰" : tdclass === "pbSquareEscapeHatch" ? "💫" : "⎔";
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: tdclass,
          onClick: function () {
            if (selection > -1 && props.c === ".") {
              let newSquares = [...squares];
              let newRow = [...newSquares[props.ri]];
              newRow[props.ci] = whoseturn === 'P' ? ptiles[selection] : gtiles[selection];
              newSquares[props.ri] = [...newRow];
              let newTiles = whoseturn === 'P' ? [...ptiles] : [...gtiles];
              newTiles.splice(selection, 1);
              setSquares(newSquares);
              whoseturn === 'P' ? setPtiles(newTiles) : setGtiles(newTiles);
            } else if (props.c !== ".") {
              // Assuming some good will from the users to click a tile they played
              if (whoseturn === 'P' && ptiles.length < 7) {
                let newPtiles = [...ptiles, props.c];
                let newSquares = [...squares];
                let newRow = [...newSquares[props.ri]];
                newRow[props.ci] = ".";
                newSquares[props.ri] = [...newRow];
                let newUsedby = [...usedby];
                let newUsedbyRow = [...newUsedby[props.ri]];
                newUsedbyRow[props.ci] = "P";
                newUsedby[props.ri] = [...newUsedbyRow];
                setUsedby(newUsedby);
                setSquares(newSquares);
                setPtiles(newPtiles);
              } else if (whoseturn === 'G' && gtiles.length < 7) {
                let newGtiles = [...gtiles, props.c];
                let newSquares = [...squares];
                let newRow = [...newSquares[props.ri]];
                newRow[props.ci] = ".";
                newSquares[props.ri] = [...newRow];
                let newUsedby = [...usedby];
                let newUsedbyRow = [...newUsedby[props.ri]];
                newUsedbyRow[props.ci] = "P";
                newUsedby[props.ri] = [...newUsedbyRow];
                setUsedby(newUsedby);
                setSquares(newSquares);
                setGtiles(newGtiles);
              }
            }
          },
          children: tdvalue
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }, this);
  }

  function Tiles() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbTilepool",
      children: tiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: [ti > 0 && tiles[ti] !== tiles[ti - 1] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 64
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: t
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 25
        }, this)]
      }, `tile${ti}`, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }, this);
  }

  function Prisoners() {
    if (picking && whoseturn === 'P' && ptiles.length < 7 && tiles.length > 0) {
      let newPtiles = [...ptiles];
      let newTiles = [...tiles];

      while (newPtiles.length < 7 && newTiles.length > 0) {
        let rand = Math.floor(Math.random() * newTiles.length);
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
        lineNumber: 164,
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
            lineNumber: 168,
            columnNumber: 29
          }, this)
        }, `ptile${ti}`, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 17
      }, this), whoseturn === 'P' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function () {
          setWhoseturn('G');
          setPicking(true);
        },
        children: "Finish Turn"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 21
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }, this);
  }

  function Guards() {
    if (picking && whoseturn === 'G' && gtiles.length < 7 && tiles.length > 0) {
      let newGtiles = [...gtiles];
      let newTiles = [...tiles];

      while (newGtiles.length < 7 && newTiles.length > 0) {
        let rand = Math.floor(Math.random() * newTiles.length);
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
        lineNumber: 208,
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
            lineNumber: 212,
            columnNumber: 29
          }, this)
        }, `gtile${ti}`, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 17
      }, this), whoseturn === 'G' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function () {
          setWhoseturn('P');
          setPicking(true);
        },
        children: "Finish Turn"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 21
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 13
    }, this);
  }
}

_s(handler, "4ew26th4J4cTS76qXMDYZuW1UMU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsuanMiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsInNxdWFyZXMiLCJzZXRTcXVhcmVzIiwidXNlU3RhdGUiLCJBcnJheSIsImZpbGwiLCJ1c2VkYnkiLCJzZXRVc2VkYnkiLCJ0aWxlcyIsInNldFRpbGVzIiwic2VsZWN0aW9uIiwic2V0U2VsZWN0aW9uIiwicHRpbGVzIiwic2V0UHRpbGVzIiwiZ3RpbGVzIiwic2V0R3RpbGVzIiwid2hvc2V0dXJuIiwic2V0V2hvc2V0dXJuIiwicGlja2luZyIsInNldFBpY2tpbmciLCJHYW1lIiwiQm9hcmQiLCJtYXAiLCJyIiwicmkiLCJCb2FyZFJvdyIsInByb3BzIiwiYyIsImNpIiwiU3F1YXJlIiwidXNlZGJ5cm93IiwidXNlZGJ5Y2xhc3MiLCJ0ZGNsYXNzIiwidGR2YWx1ZSIsIm5ld1NxdWFyZXMiLCJuZXdSb3ciLCJuZXdUaWxlcyIsInNwbGljZSIsImxlbmd0aCIsIm5ld1B0aWxlcyIsIm5ld1VzZWRieSIsIm5ld1VzZWRieVJvdyIsIm5ld0d0aWxlcyIsIlRpbGVzIiwidCIsInRpIiwiUHJpc29uZXJzIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImFsZXJ0IiwiR3VhcmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0JDLEdBQXRCLEVBQTRCO0FBQUE7O0FBQ3ZDLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsc0RBQVEsQ0FBQ0MsS0FBSyxDQUFDLEVBQUQsQ0FBTCxDQUFVQyxJQUFWLENBQWVELEtBQUssQ0FBQyxFQUFELENBQUwsQ0FBVUMsSUFBVixDQUFlLEdBQWYsQ0FBZixDQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1B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QVksUUFBT0MsRUFBRyxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURIO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLEVBZUs3QixTQUFTLEtBQUssR0FBZCxnQkFDRztBQUNBLGVBQU8sRUFBRSxZQUFXO0FBQ2hCQyxzQkFBWSxDQUFDLEdBQUQsQ0FBWjtBQUNBRSxvQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNILFNBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESCxnQkFTRyx1SkF4QlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUE2Qkg7QUFDSjs7R0F4T3VCckIsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYi9wcmlzb25icmVhay4yYTAyOWRlMjE3ODIxNjIwYjA3OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSAge1xyXG4gICAgY29uc3QgW3NxdWFyZXMsIHNldFNxdWFyZXNdID0gdXNlU3RhdGUoQXJyYXkoMTUpLmZpbGwoQXJyYXkoMTUpLmZpbGwoJy4nKSkpXHJcbiAgICBjb25zdCBbdXNlZGJ5LCBzZXRVc2VkYnldID0gdXNlU3RhdGUoQXJyYXkoMTUpLmZpbGwoQXJyYXkoMTUpLmZpbGwoJycpKSlcclxuICAgIGNvbnN0IFt0aWxlcywgc2V0VGlsZXNdID0gdXNlU3RhdGUoWydBJywnQScsJ0EnLCdBJywnQScsJ0EnLCdBJywnQScsJ0EnLCdCJywnQicsJ0MnLCdDJywnQycsJ0QnLCdEJywnRCcsJ0QnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdGJywnRicsJ0cnLCdHJywnRycsJ0gnLCdIJywnSScsJ0knLCdJJywnSScsJ0knLCdJJywnSScsJ0knLCdJJywnSicsJ0snLCdMJywnTCcsJ0wnLCdMJywnTScsJ00nLCdOJywnTicsJ04nLCdOJywnTicsJ04nLCdPJywnTycsJ08nLCdPJywnTycsJ08nLCdPJywnTycsJ1AnLCdQJywnUScsJ1InLCdSJywnUicsJ1InLCdSJywnUicsJ1MnLCdTJywnUycsJ1MnLCdUJywnVCcsJ1QnLCdUJywnVCcsJ1QnLCdVJywnVScsJ1UnLCdVJywnVicsJ1YnLCdXJywnVycsJ1gnLCdZJywnWScsJ1onLCc/JywnPyddKVxyXG4gICAgY29uc3QgW3NlbGVjdGlvbiwgc2V0U2VsZWN0aW9uXSA9IHVzZVN0YXRlKC0xKVxyXG4gICAgY29uc3QgW3B0aWxlcywgc2V0UHRpbGVzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2d0aWxlcywgc2V0R3RpbGVzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW3dob3NldHVybiwgc2V0V2hvc2V0dXJuXSA9IHVzZVN0YXRlKCdQJylcclxuICAgIGNvbnN0IFtwaWNraW5nLCBzZXRQaWNraW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEdhbWUvPlxyXG4gICAgKVxyXG5cclxuICAgIGZ1bmN0aW9uIEdhbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndtdGl0bGUgTWFzdGVybWluZFwiPlByaXNvbiBCcmVhazwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByaXNvbmVycyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRpbGVzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHdWFyZHMgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnLi4vLi4vJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3bWxpbmtcIj5Ib21lPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEJvYXJkKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJwYkJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge3NxdWFyZXMubWFwKChyLHJpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgQm9hcmRSb3cke3JpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkUm93IHI9e3J9IHJpPXtyaX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBCb2FyZFJvdyhwcm9wcykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJyb3cgcGJSb3dcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5yLm1hcCgoYyxjaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgU3F1YXJlJHtwcm9wcy5yaX0tJHtjaX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNxdWFyZSBjPXtjfSBjaT17Y2l9IHJpPXtwcm9wcy5yaX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFNxdWFyZShwcm9wcykge1xyXG4gICAgICAgIGNvbnN0IHVzZWRieXJvdyA9IHVzZWRieVtwcm9wcy5yaV1cclxuICAgICAgICBjb25zdCB1c2VkYnljbGFzcyA9IHVzZWRieXJvd1twcm9wcy5jaV0gPT09IFwiUFwiID8gXCJwYlNxdWFyZVVzZWRQcmlzb25lcnNcIiA6IFwicGJTcXVhcmVVc2VkQnlHdWFyZHNcIlxyXG4gICAgICAgIGNvbnN0IHRkY2xhc3MgPSBwcm9wcy5jICE9PSBcIi5cIiA/IHVzZWRieWNsYXNzIDogcHJvcHMucmkgPT09IDcgJiYgcHJvcHMuY2kgPT09IDcgPyBcInBiU3F1YXJlQ2VudGVyU3F1YXJlXCIgOiAocHJvcHMucmkgPT09IDAgfHwgcHJvcHMucmkgPT09IDcgfHwgcHJvcHMucmkgPT09IDE0KSAmJiAocHJvcHMuY2kgPT09IDAgfHwgcHJvcHMuY2kgPT09IDcgfHwgcHJvcHMuY2kgPT09IDE0KSA/IFwicGJTcXVhcmVFc2NhcGVIYXRjaFwiIDogXCJwYlNxdWFyZVwiXHJcbiAgICAgICAgY29uc3QgdGR2YWx1ZSA9IHByb3BzLmMgIT09IFwiLlwiID8gcHJvcHMuYyA6IHRkY2xhc3MgPT09IFwicGJTcXVhcmVDZW50ZXJTcXVhcmVcIiA/IFwi4pywXCIgOiB0ZGNsYXNzID09PSBcInBiU3F1YXJlRXNjYXBlSGF0Y2hcIiA/IFwi8J+Sq1wiIDogXCLijpRcIlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPXt0ZGNsYXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0aW9uID4gLTEgJiYgcHJvcHMuYyA9PT0gXCIuXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdTcXVhcmVzID0gWy4uLnNxdWFyZXNdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Um93ID0gWy4uLm5ld1NxdWFyZXNbcHJvcHMucmldXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um93W3Byb3BzLmNpXSA9IHdob3NldHVybiA9PT0gJ1AnID8gcHRpbGVzW3NlbGVjdGlvbl0gOiBndGlsZXNbc2VsZWN0aW9uXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3F1YXJlc1twcm9wcy5yaV0gPSBbLi4ubmV3Um93XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1RpbGVzID0gd2hvc2V0dXJuID09PSAnUCcgPyBbLi4ucHRpbGVzXSA6IFsuLi5ndGlsZXNdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUaWxlcy5zcGxpY2Uoc2VsZWN0aW9uLCAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hvc2V0dXJuID09PSAnUCcgPyBzZXRQdGlsZXMobmV3VGlsZXMpIDogc2V0R3RpbGVzKG5ld1RpbGVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb3BzLmMgIT09IFwiLlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBc3N1bWluZyBzb21lIGdvb2Qgd2lsbCBmcm9tIHRoZSB1c2VycyB0byBjbGljayBhIHRpbGUgdGhleSBwbGF5ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aG9zZXR1cm4gPT09ICdQJyAmJiBwdGlsZXMubGVuZ3RoIDwgNykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzLCBwcm9wcy5jXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdTcXVhcmVzID0gWy4uLnNxdWFyZXNdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1JvdyA9IFsuLi5uZXdTcXVhcmVzW3Byb3BzLnJpXV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdSb3dbcHJvcHMuY2ldID0gXCIuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdTcXVhcmVzW3Byb3BzLnJpXSA9IFsuLi5uZXdSb3ddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1VzZWRieSA9IFsuLi51c2VkYnldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1VzZWRieVJvdyA9IFsuLi5uZXdVc2VkYnlbcHJvcHMucmldXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1VzZWRieVJvd1twcm9wcy5jaV0gPSBcIlBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1VzZWRieVtwcm9wcy5yaV0gPSBbLi4ubmV3VXNlZGJ5Um93XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFVzZWRieShuZXdVc2VkYnkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHdob3NldHVybiA9PT0gJ0cnICYmIGd0aWxlcy5sZW5ndGggPCA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0d0aWxlcyA9IFsuLi5ndGlsZXMsIHByb3BzLmNdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1NxdWFyZXMgPSBbLi4uc3F1YXJlc11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Um93ID0gWy4uLm5ld1NxdWFyZXNbcHJvcHMucmldXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Jvd1twcm9wcy5jaV0gPSBcIi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NxdWFyZXNbcHJvcHMucmldID0gWy4uLm5ld1Jvd11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VXNlZGJ5ID0gWy4uLnVzZWRieV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VXNlZGJ5Um93ID0gWy4uLm5ld1VzZWRieVtwcm9wcy5yaV1dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VXNlZGJ5Um93W3Byb3BzLmNpXSA9IFwiUFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VXNlZGJ5W3Byb3BzLnJpXSA9IFsuLi5uZXdVc2VkYnlSb3ddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXNlZGJ5KG5ld1VzZWRieSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcXVhcmVzKG5ld1NxdWFyZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGR2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBUaWxlcygpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYlRpbGVwb29sXCI+XHJcbiAgICAgICAgICAgICAgICB7dGlsZXMubWFwKCh0LHRpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtgdGlsZSR7dGl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aSA+IDAgJiYgdGlsZXNbdGldICE9PSB0aWxlc1t0aS0xXSA/IDxicj48L2JyPiA6IDw+PC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFByaXNvbmVycygpIHtcclxuICAgICAgICBpZiAocGlja2luZyAmJiB3aG9zZXR1cm4gPT09ICdQJyAmJiBwdGlsZXMubGVuZ3RoIDwgNyAmJiB0aWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXVxyXG4gICAgICAgICAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdXHJcbiAgICAgICAgICAgIHdoaWxlIChuZXdQdGlsZXMubGVuZ3RoIDwgNyAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIG5ld1B0aWxlcyA9IFsuLi5uZXdQdGlsZXMsIG5ld1RpbGVzW3JhbmRdXVxyXG4gICAgICAgICAgICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsMSkgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKVxyXG4gICAgICAgICAgICBzZXRUaWxlcyhuZXdUaWxlcylcclxuICAgICAgICAgICAgc2V0UGlja2luZyhmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPlBSSVNPTkVSUzwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBiVGlsZXBvb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHRpbGVzLm1hcCgodCx0aSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2BwdGlsZSR7dGl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdob3NldHVybiA9PT0gJ1AnID8gc2V0U2VsZWN0aW9uKHRpKSA6IGFsZXJ0KCdJdCBpcyBub3QgeW91ciB0dXJuJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIHt3aG9zZXR1cm4gPT09ICdQJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRXaG9zZXR1cm4oJ0cnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQaWNraW5nKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbmlzaCBUdXJuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBHdWFyZHMoKSB7XHJcbiAgICAgICAgaWYgKHBpY2tpbmcgJiYgd2hvc2V0dXJuID09PSAnRycgJiYgZ3RpbGVzLmxlbmd0aCA8IDcgJiYgdGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgbmV3R3RpbGVzID0gWy4uLmd0aWxlc11cclxuICAgICAgICAgICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXVxyXG4gICAgICAgICAgICB3aGlsZSAobmV3R3RpbGVzLmxlbmd0aCA8IDcgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICBuZXdHdGlsZXMgPSBbLi4ubmV3R3RpbGVzLCBuZXdUaWxlc1tyYW5kXV1cclxuICAgICAgICAgICAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0VGlsZXMobmV3VGlsZXMpXHJcbiAgICAgICAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpXHJcbiAgICAgICAgICAgIHNldFBpY2tpbmcoZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5HVUFSRFM8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYlRpbGVwb29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2d0aWxlcy5tYXAoKHQsdGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtgZ3RpbGUke3RpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aG9zZXR1cm4gPT09ICdHJyA/IHNldFNlbGVjdGlvbih0aSkgOiBhbGVydCgnSXQgaXMgbm90IHlvdXIgdHVybicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICB7d2hvc2V0dXJuID09PSAnRycgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0V2hvc2V0dXJuKCdQJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGlja2luZyh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGaW5pc2ggVHVyblxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9