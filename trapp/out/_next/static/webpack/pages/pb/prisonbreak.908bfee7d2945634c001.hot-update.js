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
    let usedbyrow = usedby[props.ri];
    const tdclass = props.c !== "." ? usedbyrow[props.ci] === "P" ? "pbSquareUsedPrisoners" : "pbSquareUsedByGuards" : props.ri === 7 && props.ci === 7 ? "pbSquareCenterSquare" : (props.ri === 0 || props.ri === 7 || props.ri === 14) && (props.ci === 0 || props.ci === 7 || props.ci === 14) ? "pbSquareEscapeHatch" : "pbSquare";
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
                newUsedbyRow[props.ci] = 'P';
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
                newUsedbyRow[props.ci] = 'G';
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
          lineNumber: 83,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }, this);
  }

  function Tiles() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbTilepool",
      children: tiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: [ti > 0 && tiles[ti] !== tiles[ti - 1] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 64
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: t
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 25
        }, this)]
      }, `tile${ti}`, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
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
        lineNumber: 163,
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
            lineNumber: 167,
            columnNumber: 29
          }, this)
        }, `ptile${ti}`, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 17
      }, this), whoseturn === 'P' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function () {
          setWhoseturn('G');
          setPicking(true);
        },
        children: "Finish Turn"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 21
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 162,
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
        lineNumber: 207,
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
            lineNumber: 211,
            columnNumber: 29
          }, this)
        }, `gtile${ti}`, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 17
      }, this), whoseturn === 'G' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function () {
          setWhoseturn('P');
          setPicking(true);
        },
        children: "Finish Turn"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 21
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 206,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsuanMiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsInNxdWFyZXMiLCJzZXRTcXVhcmVzIiwidXNlU3RhdGUiLCJBcnJheSIsImZpbGwiLCJ1c2VkYnkiLCJzZXRVc2VkYnkiLCJ0aWxlcyIsInNldFRpbGVzIiwic2VsZWN0aW9uIiwic2V0U2VsZWN0aW9uIiwicHRpbGVzIiwic2V0UHRpbGVzIiwiZ3RpbGVzIiwic2V0R3RpbGVzIiwid2hvc2V0dXJuIiwic2V0V2hvc2V0dXJuIiwicGlja2luZyIsInNldFBpY2tpbmciLCJHYW1lIiwiQm9hcmQiLCJtYXAiLCJyIiwicmkiLCJCb2FyZFJvdyIsInByb3BzIiwiYyIsImNpIiwiU3F1YXJlIiwidXNlZGJ5cm93IiwidGRjbGFzcyIsInRkdmFsdWUiLCJuZXdTcXVhcmVzIiwibmV3Um93IiwibmV3VGlsZXMiLCJzcGxpY2UiLCJsZW5ndGgiLCJuZXdQdGlsZXMiLCJuZXdVc2VkYnkiLCJuZXdVc2VkYnlSb3ciLCJuZXdHdGlsZXMiLCJUaWxlcyIsInQiLCJ0aSIsIlByaXNvbmVycyIsInJhbmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJhbGVydCIsIkd1YXJkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCQyxHQUF0QixFQUE0QjtBQUFBOztBQUN2QyxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLHNEQUFRLENBQUNDLEtBQUssQ0FBQyxFQUFELENBQUwsQ0FBVUMsSUFBVixDQUFlRCxLQUFLLENBQUMsRUFBRCxDQUFMLENBQVVDLElBQVYsQ0FBZSxHQUFmLENBQWYsQ0FBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkosc0RBQVEsQ0FB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QURIO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLEVBZUs1QixTQUFTLEtBQUssR0FBZCxnQkFDRztBQUNBLGVBQU8sRUFBRSxZQUFXO0FBQ2hCQyxzQkFBWSxDQUFDLEdBQUQsQ0FBWjtBQUNBRSxvQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNILFNBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESCxnQkFTRyx1SkF4QlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUE2Qkg7QUFDSjs7R0F2T3VCckIsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYi9wcmlzb25icmVhay45MDhiZmVlN2QyOTQ1NjM0YzAwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSAge1xyXG4gICAgY29uc3QgW3NxdWFyZXMsIHNldFNxdWFyZXNdID0gdXNlU3RhdGUoQXJyYXkoMTUpLmZpbGwoQXJyYXkoMTUpLmZpbGwoJy4nKSkpXHJcbiAgICBjb25zdCBbdXNlZGJ5LCBzZXRVc2VkYnldID0gdXNlU3RhdGUoQXJyYXkoMTUpLmZpbGwoQXJyYXkoMTUpLmZpbGwoJycpKSlcclxuICAgIGNvbnN0IFt0aWxlcywgc2V0VGlsZXNdID0gdXNlU3RhdGUoWydBJywnQScsJ0EnLCdBJywnQScsJ0EnLCdBJywnQScsJ0EnLCdCJywnQicsJ0MnLCdDJywnQycsJ0QnLCdEJywnRCcsJ0QnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdGJywnRicsJ0cnLCdHJywnRycsJ0gnLCdIJywnSScsJ0knLCdJJywnSScsJ0knLCdJJywnSScsJ0knLCdJJywnSicsJ0snLCdMJywnTCcsJ0wnLCdMJywnTScsJ00nLCdOJywnTicsJ04nLCdOJywnTicsJ04nLCdPJywnTycsJ08nLCdPJywnTycsJ08nLCdPJywnTycsJ1AnLCdQJywnUScsJ1InLCdSJywnUicsJ1InLCdSJywnUicsJ1MnLCdTJywnUycsJ1MnLCdUJywnVCcsJ1QnLCdUJywnVCcsJ1QnLCdVJywnVScsJ1UnLCdVJywnVicsJ1YnLCdXJywnVycsJ1gnLCdZJywnWScsJ1onLCc/JywnPyddKVxyXG4gICAgY29uc3QgW3NlbGVjdGlvbiwgc2V0U2VsZWN0aW9uXSA9IHVzZVN0YXRlKC0xKVxyXG4gICAgY29uc3QgW3B0aWxlcywgc2V0UHRpbGVzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2d0aWxlcywgc2V0R3RpbGVzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW3dob3NldHVybiwgc2V0V2hvc2V0dXJuXSA9IHVzZVN0YXRlKCdQJylcclxuICAgIGNvbnN0IFtwaWNraW5nLCBzZXRQaWNraW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEdhbWUvPlxyXG4gICAgKVxyXG5cclxuICAgIGZ1bmN0aW9uIEdhbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndtdGl0bGUgTWFzdGVybWluZFwiPlByaXNvbiBCcmVhazwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByaXNvbmVycyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRpbGVzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHdWFyZHMgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnLi4vLi4vJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3bWxpbmtcIj5Ib21lPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEJvYXJkKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJwYkJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge3NxdWFyZXMubWFwKChyLHJpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgQm9hcmRSb3cke3JpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkUm93IHI9e3J9IHJpPXtyaX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBCb2FyZFJvdyhwcm9wcykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJyb3cgcGJSb3dcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5yLm1hcCgoYyxjaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgU3F1YXJlJHtwcm9wcy5yaX0tJHtjaX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNxdWFyZSBjPXtjfSBjaT17Y2l9IHJpPXtwcm9wcy5yaX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFNxdWFyZShwcm9wcykge1xyXG4gICAgICAgIGxldCB1c2VkYnlyb3cgPSB1c2VkYnlbcHJvcHMucmldXHJcbiAgICAgICAgY29uc3QgdGRjbGFzcyA9IHByb3BzLmMgIT09IFwiLlwiID8gdXNlZGJ5cm93W3Byb3BzLmNpXSA9PT0gXCJQXCIgPyBcInBiU3F1YXJlVXNlZFByaXNvbmVyc1wiIDogXCJwYlNxdWFyZVVzZWRCeUd1YXJkc1wiIDogcHJvcHMucmkgPT09IDcgJiYgcHJvcHMuY2kgPT09IDcgPyBcInBiU3F1YXJlQ2VudGVyU3F1YXJlXCIgOiAocHJvcHMucmkgPT09IDAgfHwgcHJvcHMucmkgPT09IDcgfHwgcHJvcHMucmkgPT09IDE0KSAmJiAocHJvcHMuY2kgPT09IDAgfHwgcHJvcHMuY2kgPT09IDcgfHwgcHJvcHMuY2kgPT09IDE0KSA/IFwicGJTcXVhcmVFc2NhcGVIYXRjaFwiIDogXCJwYlNxdWFyZVwiXHJcbiAgICAgICAgY29uc3QgdGR2YWx1ZSA9IHByb3BzLmMgIT09IFwiLlwiID8gcHJvcHMuYyA6IHRkY2xhc3MgPT09IFwicGJTcXVhcmVDZW50ZXJTcXVhcmVcIiA/IFwi4pywXCIgOiB0ZGNsYXNzID09PSBcInBiU3F1YXJlRXNjYXBlSGF0Y2hcIiA/IFwi8J+Sq1wiIDogXCLijpRcIlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPXt0ZGNsYXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0aW9uID4gLTEgJiYgcHJvcHMuYyA9PT0gXCIuXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdTcXVhcmVzID0gWy4uLnNxdWFyZXNdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Um93ID0gWy4uLm5ld1NxdWFyZXNbcHJvcHMucmldXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um93W3Byb3BzLmNpXSA9IHdob3NldHVybiA9PT0gJ1AnID8gcHRpbGVzW3NlbGVjdGlvbl0gOiBndGlsZXNbc2VsZWN0aW9uXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3F1YXJlc1twcm9wcy5yaV0gPSBbLi4ubmV3Um93XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1RpbGVzID0gd2hvc2V0dXJuID09PSAnUCcgPyBbLi4ucHRpbGVzXSA6IFsuLi5ndGlsZXNdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUaWxlcy5zcGxpY2Uoc2VsZWN0aW9uLCAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hvc2V0dXJuID09PSAnUCcgPyBzZXRQdGlsZXMobmV3VGlsZXMpIDogc2V0R3RpbGVzKG5ld1RpbGVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb3BzLmMgIT09IFwiLlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBc3N1bWluZyBzb21lIGdvb2Qgd2lsbCBmcm9tIHRoZSB1c2VycyB0byBjbGljayBhIHRpbGUgdGhleSBwbGF5ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aG9zZXR1cm4gPT09ICdQJyAmJiBwdGlsZXMubGVuZ3RoIDwgNykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzLCBwcm9wcy5jXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdTcXVhcmVzID0gWy4uLnNxdWFyZXNdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1JvdyA9IFsuLi5uZXdTcXVhcmVzW3Byb3BzLnJpXV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdSb3dbcHJvcHMuY2ldID0gXCIuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdTcXVhcmVzW3Byb3BzLnJpXSA9IFsuLi5uZXdSb3ddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1VzZWRieSA9IFsuLi51c2VkYnldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1VzZWRieVJvdyA9IFsuLi5uZXdVc2VkYnlbcHJvcHMucmldXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1VzZWRieVJvd1twcm9wcy5jaV0gPSAnUCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdVc2VkYnlbcHJvcHMucmldID0gWy4uLm5ld1VzZWRieVJvd11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VkYnkobmV3VXNlZGJ5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNxdWFyZXMobmV3U3F1YXJlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh3aG9zZXR1cm4gPT09ICdHJyAmJiBndGlsZXMubGVuZ3RoIDwgNykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzLCBwcm9wcy5jXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdTcXVhcmVzID0gWy4uLnNxdWFyZXNdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1JvdyA9IFsuLi5uZXdTcXVhcmVzW3Byb3BzLnJpXV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdSb3dbcHJvcHMuY2ldID0gXCIuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdTcXVhcmVzW3Byb3BzLnJpXSA9IFsuLi5uZXdSb3ddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1VzZWRieSA9IFsuLi51c2VkYnldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1VzZWRieVJvdyA9IFsuLi5uZXdVc2VkYnlbcHJvcHMucmldXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1VzZWRieVJvd1twcm9wcy5jaV0gPSAnRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdVc2VkYnlbcHJvcHMucmldID0gWy4uLm5ld1VzZWRieVJvd11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VkYnkobmV3VXNlZGJ5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNxdWFyZXMobmV3U3F1YXJlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0ZHZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFRpbGVzKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBiVGlsZXBvb2xcIj5cclxuICAgICAgICAgICAgICAgIHt0aWxlcy5tYXAoKHQsdGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2B0aWxlJHt0aX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RpID4gMCAmJiB0aWxlc1t0aV0gIT09IHRpbGVzW3RpLTFdID8gPGJyPjwvYnI+IDogPD48Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gUHJpc29uZXJzKCkge1xyXG4gICAgICAgIGlmIChwaWNraW5nICYmIHdob3NldHVybiA9PT0gJ1AnICYmIHB0aWxlcy5sZW5ndGggPCA3ICYmIHRpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IG5ld1B0aWxlcyA9IFsuLi5wdGlsZXNdXHJcbiAgICAgICAgICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc11cclxuICAgICAgICAgICAgd2hpbGUgKG5ld1B0aWxlcy5sZW5ndGggPCA3ICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgbmV3UHRpbGVzID0gWy4uLm5ld1B0aWxlcywgbmV3VGlsZXNbcmFuZF1dXHJcbiAgICAgICAgICAgICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwxKSAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpXHJcbiAgICAgICAgICAgIHNldFRpbGVzKG5ld1RpbGVzKVxyXG4gICAgICAgICAgICBzZXRQaWNraW5nKGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+UFJJU09ORVJTPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGJUaWxlcG9vbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwdGlsZXMubWFwKCh0LHRpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YHB0aWxlJHt0aX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hvc2V0dXJuID09PSAnUCcgPyBzZXRTZWxlY3Rpb24odGkpIDogYWxlcnQoJ0l0IGlzIG5vdCB5b3VyIHR1cm4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAge3dob3NldHVybiA9PT0gJ1AnID9cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFdob3NldHVybignRycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBpY2tpbmcodHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRmluaXNoIFR1cm5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEd1YXJkcygpIHtcclxuICAgICAgICBpZiAocGlja2luZyAmJiB3aG9zZXR1cm4gPT09ICdHJyAmJiBndGlsZXMubGVuZ3RoIDwgNyAmJiB0aWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXVxyXG4gICAgICAgICAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdXHJcbiAgICAgICAgICAgIHdoaWxlIChuZXdHdGlsZXMubGVuZ3RoIDwgNyAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIG5ld0d0aWxlcyA9IFsuLi5uZXdHdGlsZXMsIG5ld1RpbGVzW3JhbmRdXVxyXG4gICAgICAgICAgICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsMSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRUaWxlcyhuZXdUaWxlcylcclxuICAgICAgICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcylcclxuICAgICAgICAgICAgc2V0UGlja2luZyhmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPkdVQVJEUzwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBiVGlsZXBvb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Z3RpbGVzLm1hcCgodCx0aSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2BndGlsZSR7dGl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdob3NldHVybiA9PT0gJ0cnID8gc2V0U2VsZWN0aW9uKHRpKSA6IGFsZXJ0KCdJdCBpcyBub3QgeW91ciB0dXJuJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIHt3aG9zZXR1cm4gPT09ICdHJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRXaG9zZXR1cm4oJ1AnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQaWNraW5nKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbmlzaCBUdXJuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=